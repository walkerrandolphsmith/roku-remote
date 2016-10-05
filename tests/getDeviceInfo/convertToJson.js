import { convertToJson } from './../../src/getDeviceInfo';
const DOMParser = require('xmldom').DOMParser;

describe('src/getDeviceInfo/converToJson', () => {
    describe('Given xml from querying device info', () => {
        let xml;
        let actual;

        beforeEach(() => {
            xml = new DOMParser().parseFromString(`
    <?xml version="1.0" encoding="UTF8" ?>
    <device-info>
        <udn>29a40003680710ef800f000000000000</udn>
        <serialnumber>YY003J519951</serialnumber>
    </device-info>
    `);
        });

        describe('When parsing the device info into json', () => {
            beforeEach(() => {
                actual = convertToJson(xml);
            });

            it('Then it should create key value pairs for each xml node', () => {
                const expected = {
                    'udn': '29a40003680710ef800f000000000000',
                    'serialnumber': 'YY003J519951'
                };
                expect(actual).to.deep.equal(expected);
            });
        });
    });
});

