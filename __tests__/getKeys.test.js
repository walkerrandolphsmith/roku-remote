import keys from './../src/shared/constants/keys';

describe('keys', () => {
    it('should have upper case property names and Camel case values', () => {
        expect(keys.BACK).toEqual('Back');
        expect(keys.HOME).toEqual('Home');
        expect(keys.UP).toEqual('Up');
        expect(keys.LEFT).toEqual('Left');
        expect(keys.DOWN).toEqual('Down');
        expect(keys.RIGHT).toEqual('Right');
        expect(keys.FWD).toEqual('Fwd');
        expect(keys.REV).toEqual('Rev');
        expect(keys.PLAY).toEqual('Play');
        expect(keys.SELECT).toEqual('Select');
        expect(keys.SEARCH).toEqual('Search');
    });
});