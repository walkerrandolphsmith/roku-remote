import { reducer } from './../src/shared/modules/getDeviceInfo';

describe('getDeviceInfo', () => {
    let state;
    let payload;
    beforeEach(() => {

        const xml = `
<?xml version="1.0" encoding="UTF-8" ?>
<device-info>
    <udn>29a40003-6807-10ef-800f-000000000000</udn>
    <serial-number>YY003J519951</serial-number>
<device-info>`;

        state = { channels: undefined };
        payload = { xml: xml }
    });

    it('should parse the device info into key value pairs and set the states deviceInfo ', () => {
        const expected = {
            deviceInfo: [
                { key: 'udn', value: '29a40003-6807-10ef-800f-000000000000' },
                { key: 'serialNumber', name: 'YY003J519951' }
            ]
        };

        expect(reducer(state, payload)).toEqual(state);
    });
});