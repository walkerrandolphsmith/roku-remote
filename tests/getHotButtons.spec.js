import { getHotButtons } from './../src/onLoad';

describe('src/onLoad/getHotButtons', () => {
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