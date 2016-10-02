import sinon from 'sinon';
import { saveRokuToStorage } from './onLoad';

describe('Given a key', () => {
    var actual, key, asyncStorage, setItemSpy, roku, rokus;
    describe('When saving roku info to storage', () => {
        beforeEach((done) => {
            key = 'blah';
            roku = '1';
            rokus = [];
            setItemSpy = sinon.spy();
            asyncStorage = {
                setItem: setItemSpy
            };
            actual = saveRokuToStorage(asyncStorage, key, roku, rokus);
            done();
        });
        it('Then it gets an item for the key', () => {
            expect(setItemSpy).to.have.been.calledWith(key, JSON.stringify({ selected: roku, rokus: rokus }));
        });
    });
});
