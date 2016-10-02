import { getRokuFromStorage } from './onLoad';
import sinon from 'sinon';

describe('Given a key', () => {
    var actual, key, asyncStorage, getItemSpy;
    describe('When calling getRokuFromStorage and it successfully returns', () => {
        beforeEach((done) => {
            key = 'blah';
            getItemSpy = sinon.spy()
            asyncStorage = {
                getItem: getItemSpy
            };
            actual = getRokuFromStorage(asyncStorage, key);
            done();
        });
        it('Then it gets an item for the key', () => {
            expect(getItemSpy).to.have.been.calledWith(key);
        });
    });
    describe('When calling getRokuFromStorage and it unsuccessfully returns', () => {
        beforeEach(() => {
            key = 'blah';
            actual = getRokuFromStorage(key);
        });
        it('Then an error should be returned', () => {
            expect(actual).to.be.an('error');
        });
    });
});
