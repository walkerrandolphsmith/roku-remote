import { __RewireAPI__, getAppIcons } from './../src/onLoad';

describe('src/onLoad/getAppIcons', () => {
    describe('Given a url and a collection of channels', () => {
        let url, channels;
        beforeEach(() => {
            url = 'URL';
            channels = [
                { id: 1 },
                { id: 2 }
            ];
            __RewireAPI__.__Rewire__('RNFetchBlob', {
                fetch: () => Promise.resolve({ base64: () => 'icon' })
            });
        });

        describe('When getting app icons', () => {
            let actual, expected;
            beforeEach((done) => {
                expected = [
                    { id: 1, icon: 'icon' },
                    { id: 2, icon: 'icon' }
                ];
                getAppIcons(url, channels).then(res => {
                    actual = res;
                    done();
                });
            });

            it('Then it should add an icon to each channel', () => {
                expect(actual).to.deep.equal(expected);
            });
        });
    });
});