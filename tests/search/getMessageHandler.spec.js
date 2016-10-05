import { getMessageHandler } from './../../src/search';

describe('src/search/getMessageHandler', () => {
    let expected, actual, urls;
    beforeEach(() => {
        expected = undefined;
        actual = undefined;
        urls = [1, 2, 3];
    });

    describe('Given a list of urls', () => {
        describe('When getting a message handler', () => {
            beforeEach(() => {
                actual = getMessageHandler(urls);
            });

            it('Then it should return a function', () => {
                expect(typeof(actual) === "function").to.be.true;
            });
        });
    });

    describe('Given a message handler', () => {
        let handler, message;
        beforeEach(() => {
            handler = getMessageHandler(urls);
        });
        describe('Given a message containing a Location', () => {
            beforeEach(() => {
                message = `Location: A`;
            });

            describe('When handling the message', () => {
                beforeEach(() => {
                    handler(message);
                });

                it('Then the urls will contain the location', () => {
                    expect(urls).to.include('A');
                });
            });
        });

        describe('Given a message not containing a Location', () => {
            beforeEach(() => {
                message = `Other device: A`;
            });

            describe('When handling the message', () => {
                beforeEach(() => {
                    handler(message);
                });

                it('Then the urls will be unchanged', () => {
                    expect(urls.length).to.equal(3);
                });
            });
        });
    });
});