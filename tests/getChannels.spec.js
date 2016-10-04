import { __RewireAPI__, getChannels } from './../src/onLoad';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';

describe('src/onLoad/getChannels', () => {
    let url, uri, expected, actual;
    beforeEach(() => {
        url = 'url/';
        uri = 'uri';
        expected = undefined;
        actual = undefined;
        __RewireAPI__.__Rewire__('RNFetchBlob', {
            fetch: () => Promise.resolve({ base64: () => uri })
        });
    });

    afterEach(() => {
        fetchMock.restore();
        __RewireAPI__.__ResetDependency__('parseAppsResponse');
    });

    describe('Given a url', () => {
        let urlPattern;
        beforeEach(() => {
            urlPattern = /url\/query\/apps/;
            fetchMock.mock(urlPattern, 200);
        });

        describe('When requesting for the apps', (done) => {
            beforeEach(() => {
                getChannels(url).then(res => done());
            });

            it('Then it should call fetch with the url/query/apps', () => {
                expect(fetchMock.called(urlPattern)).to.equal(true);
            });
        });
    });

    describe('Given a url', () => {
        beforeEach(() => {
            fetchMock.get('*', 'xml');
            const parseAppsStub = sinon.stub().withArgs('xml').returns([]);
            __RewireAPI__.__Rewire__('parseAppsResponse', parseAppsStub);
        });

        describe('When retrieving the apps', () => {
            beforeEach((done) => {
                expected = [];
                getChannels(url).then(res => { actual = res; done(); });
            });

            it('Then it should parse what is retrieved', () => {
                expect(actual).to.deep.equal(expected);
            });
        });
    });

    describe('Given a url', () => {
        beforeEach(() => {
            fetchMock.get('*', 'xml');
            __RewireAPI__.__Rewire__('parseAppsResponse', () => [
                { id: 1 },
                { id: 2 }
            ]);
        });

        describe('When getting app icons', () => {
            beforeEach((done) => {
                expected = [
                    { id: 1, icon: uri },
                    { id: 2, icon: uri }
                ];
                getChannels(url).then(res => { actual = res; done(); });
            });

            it('Then it should add an icon to each channel', () => {
                expect(actual).to.deep.equal(expected);
            });
        });
    });

    describe('Given a url', () => {
        let xml;
        beforeEach(() => {
            xml = `
            <?xml version="1.0" encoding="UTF-8" ?>
            <apps>
                <app id="31012" type="menu" version="1.6.8">Movie Store and TV Store</app>
            </apps>`;
            fetchMock.get('*', xml);
        });

        describe('When getting channels', () => {
            beforeEach((done) => {
                expected = [
                    {id: '31012', type: 'menu', version: '1.6.8', name: 'Movie Store and TV Store', icon: uri}
                ];
                getChannels(url).then(res => { actual = res; done(); });
            });

            it('Then it get the apps at the url, get their icons, and then merge the sets', () => {
                expect(actual).to.deep.equal(expected);
            });
        });
    });
});
