import { __RewireAPI__, getApps } from './../src/onLoad';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';

describe('src/onLoad/getApps', () => {
    describe('Given a url', () => {
        let url, expected;
        beforeEach(() => {
            url = 'URL';
            expected = 'listOfApps';
            fetchMock.get('*', 'xml');
            const parseAppsStub = sinon.stub().withArgs('xml').returns(expected);
            __RewireAPI__.__Rewire__('parseAppsResponse', parseAppsStub);
        });

        afterEach(() => {
            fetchMock.restore();
            __RewireAPI__.__ResetDependency__('parseAppsResponse');
        });

        describe('When getting apps', () => {
            let actual;
            beforeEach((done) => {
                getApps(url).then(res => {
                    actual = res;
                    done();
                });
            });

            it('Then it should return what is parsed', () => {
                expect(actual).to.equal(expected);
            });
        });
    });
});