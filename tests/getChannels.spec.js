import { __RewireAPI__, getChannels } from './../src/onLoad';
import fetchMock from 'fetch-mock';

describe('given a url', () => {
    let url, uri, xml;
    beforeEach(() => {
        url = 'URL';
        uri = 'URI';
        xml = `
        <?xml version="1.0" encoding="UTF-8" ?>
        <apps>
            <app id="31012" type="menu" version="1.6.8">Movie Store and TV Store</app>
        </apps>`;
        __RewireAPI__.__Rewire__('RNFetchBlob', {
            fetch: () => Promise.resolve({ base64: () => uri })
        });
        fetchMock.get('*', xml);
    });

    afterEach(() => {
        fetchMock.restore();
    });

    describe('when getting channelz', () => {
        let actual, expected;
        beforeEach((done) => {
            expected = [
                { id: '31012', type: 'menu', version: '1.6.8', name: 'Movie Store and TV Store', icon: uri }
            ];
            getChannels(url).then(res => {
                actual = res;
                done();
            });
        });

        it('it get the apps at the url, get their icons, and then merge the sets', () => {
            expect(actual).to.deep.equal(expected);
        });
    });
});
