import getChannels, { __RewireAPI__ } from './../../src/getChannels';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';

describe('src/getChannels', () => {
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
        __RewireAPI__.__ResetDependency__('convertToJson');
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
            const convertToJsonStub = sinon.stub().withArgs('xml').returns([]);
            __RewireAPI__.__Rewire__('convertToJson', convertToJsonStub);
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
            __RewireAPI__.__Rewire__('convertToJson', () => [
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
            <app id="1" type="a" version="1">Hulu</app>
            <app id="2" type="b" version="1">Netflix</app>
        </apps>`;
            fetchMock.get('*', xml);
        });

        describe('When getting channels', () => {
            beforeEach((done) => {
                expected = [
                    {id: '1', type: 'a', version: '1', name: 'Hulu', icon: uri},
                    {id: '2', type: 'b', version: '1', name: 'Netflix', icon: uri}
                ];
                getChannels(url).then(res => { actual = res; done(); });
            });

            it('Then it get the apps at the url, get their icons, and then merge the sets', () => {
                expect(actual).to.deep.equal(expected);
            });
        });
    });
});
