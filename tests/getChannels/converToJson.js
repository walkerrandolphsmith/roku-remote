import { convertToJson } from './../../src/getChannels';
const DOMParser = require('xmldom').DOMParser;

describe('src/getChannels/convertToJson', () => {
    describe('Given xml response from querying app info', () => {
        let actual;
        let xml;
        beforeEach(() => {
            xml = new DOMParser().parseFromString(`
        <?xml version="1.0" encoding="UTF-8" ?>
        <apps>
            <app id="31012" type="menu" version="1.6.8">Movie Store and TV Store</app>
            <app id="12" type="appl" version="4.2.132">Netflix</app>
        </apps>`);
            actual = convertToJson(xml);
        });
        it('should return an array', () => {
            expect(actual).to.be.instanceOf(Array);
        });
        describe('When an array is returned', () => {
            it('should contain only objects', () => {
                expect(actual).to.have.all.instanceOf(Object);
            });
            it('Then it should have objects that have an name, id, type, and version property', () => {
                for(var i = 0; i < actual.length; i++) {
                    expect(actual[i]).to.have.all.keys(['name', 'id', 'type', 'version']);
                }
            });
        });
    });
});
