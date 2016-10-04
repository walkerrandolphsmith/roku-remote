import { __RewireAPI__, getApps } from './../src/onLoad';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';

describe('src/onLoad/getApps', () => {
    describe('Given a url', () => {
        let url, urlPattern;
        beforeEach(() => {
            url = 'url/';
            urlPattern = /url\/query\/apps/;
            fetchMock.mock(urlPattern, 200);
        });

        afterEach(() => {
            fetchMock.restore();
        });

        describe('When requesting for the apps', (done) => {
            beforeEach(() => {
                getApps(url).then(res => done());
            });

            it('Then it should call fetch with the url/query/apps', () => {
                expect(fetchMock.called(urlPattern)).to.equal(true);
            });
        });
    });

    describe('Given a url', () => {
        let url, expected;
        beforeEach(() => {
            url = 'url';
            fetchMock.get('*', 'xml');
            expected = 'listOfApps';
            const parseAppsStub = sinon.stub().withArgs('xml').returns(expected);
            __RewireAPI__.__Rewire__('parseAppsResponse', parseAppsStub);
        });

        afterEach(() => {
            fetchMock.restore();
            __RewireAPI__.__ResetDependency__('parseAppsResponse');
        });

        describe('When retrieving the apps', () => {
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