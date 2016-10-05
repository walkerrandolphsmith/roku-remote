import { getState, getHotButtons } from './../../src/getState';
import sinon from 'sinon';

describe('src/getState', () => {
    describe('getState', () => {
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

    describe('getHotButtons', () => {
        describe('Given a collection of channel ids and channels', () => {
            let ids, channels, channel1, channel2, channel3;
            beforeEach(() => {
                ids = ['1', '2'];
                channel1 = { id: '1' };
                channel2 = { id: '2' };
                channel3 = { id: '3' };
                channels = [channel1, channel2, channel3];
            });

            describe('When filtering the channels by ids', () => {
                let actual;
                beforeEach(() => {
                    actual = getHotButtons(ids, channels);
                });

                it('Then the list should only contain channels with ids in the ids list', () => {
                    expect(actual.length).to.equal(2);
                    expect(actual).to.deep.equal([channel1, channel2]);
                });
            });
        });
    });

});