import { getListener, __RewireAPI__ } from './../../src/search';
import sinon from 'sinon';

describe('src/search/getListener', () => {
    let expected, actual, queryParams;
    beforeEach(() => {
        expected = undefined;
        actual = undefined;
        queryParams = [1, 2, 3];
        __RewireAPI__.__Rewire__('getQuery', () => queryParams);
    });

    afterEach(() => {
        __RewireAPI__.__ResetDependency__('getQuery');
    });

    describe('Given a socket', () => {
        let client;
        beforeEach(() => {
            client = { send: () => {} }
        });

        describe('When getting a listener', () => {
            beforeEach(() => {
                actual = getListener(client);
            });

            it('Then it should return a function', () => {
                expect(typeof(actual) === "function").to.be.true;
            });
        });
    });

    describe('Given a listener', () => {
        let listener, client, sendSpy;
        beforeEach(() => {
            sendSpy = sinon.spy();
            client = { send: sendSpy };
            listener = getListener(client);
        });

        describe('When listening', () => {
            beforeEach(() => {
                listener();
            });

            it('Then it should call send with the query params', () => {
                expect(sendSpy).to.have.been.calledWith(...queryParams);
            });
        });
    });
});