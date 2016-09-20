import { reducer } from './../src/shared/modules/getApps';

describe('getDetails', () => {
    let state;
    let payload;
    beforeEach(() => {

        const xml = `
<?xml version="1.0" encoding="UTF-8" ?>
<apps>
    <app id="31012" type="menu" version="1.6.8">Movie Store and TV Store</app>
    <app id="12" type="appl" version="4.2.132">Netflix</app>
</apps>`;

        state = { channels: undefined };
        payload = { xml: xml }
    });

    it('should parse the apps and update the states channels', () => {

        const expected = {
            channels: [
                { id: '31012', name: 'Movie Store and TV Store', type: 'menu', version: '1.6.8'},
                { id: '12', name: 'Netflix', type: 'appl', version: '4.2.132'}
            ]
        };

        expect(reducer(state, payload)).toEqual(expected);
    });
});