import { getState } from './../src/onLoad';
import sinon from 'sinon';

describe('src/onLoad/getState', () => {
    describe('Given an object with list of channels and a list of rokus', () => {
        let input, channels, rokus, getHotButtons;
        beforeEach(() => {
            channels = [1, 2, 3];
            rokus = [4, 5, 6];
            input = { channels, rokus };
            getHotButtons = sinon.stub().returns(42)
        });

        describe('When getting state tree', () => {
            let actual;
            beforeEach(() => {
                actual = getState(input, getHotButtons);
            });

            it('Then it should have the rokus list', () => {
                expect(actual.rokus).to.equal(rokus);
            });

            it('Then the url should be the first roku in the rokus list', () => {
                expect(actual.url).to.equal(rokus[0]);
            });

            it('Then it should have the channels list', () => {
                expect(actual.device.channels).to.equal(channels);
            });

            it('Then it should have the hot buttons list', () => {
                expect(actual.device.hotButtons).to.equal(42);
            });
        });
    });
});