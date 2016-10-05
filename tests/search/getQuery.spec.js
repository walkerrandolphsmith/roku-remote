import { getQuery } from './../../src/search';

describe('src/search/getQuery', () => {
    let expected, actual;
    beforeEach(() => {
        expected = undefined;
        actual = undefined;
    });

    describe('When getting the ssdp query', () => {
        beforeEach(() => {
            actual = getQuery();
        });

        it('Then it should return an array with five elements', () => {
            expect(actual).to.be.an('Array');
            expect(actual.length).to.equal(5);
        });
    });
});
