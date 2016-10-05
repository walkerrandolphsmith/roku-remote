import { convertToJson } from './../../src/getChannels';
const DOMParser = require('xmldom').DOMParser;

describe('src/getChannels/convertToJson', () => {
    describe('Given xml response from querying app info', () => {
        let xml;
        beforeEach(() => {
            xml = new DOMParser().parseFromString(`
            <?xml version="1.0" encoding="UTF-8" ?>
            <apps>
                <app id="1" type="a" version="1">Hulu</app>
                <app id="2" type="b" version="1">Netflix</app>
            </apps>`);
        });

        describe('when converting to json', () => {
            let expected, actual;
            beforeEach(() => {
                expected = [
                    {id: '1', type: 'a', version: '1', name: 'Hulu'},
                    {id: '2', type: 'b', version: '1', name: 'Netflix'}
                ];
                actual = convertToJson(xml);
            });

            it('Then it should return an array', () => {
                expect(actual).to.be.instanceOf(Array);
            });

            it('Then it should contain only objects', () => {
                expect(actual).to.have.all.instanceOf(Object);
            });

            it('Then each object should have properties for each attribute', () => {
                actual.forEach(app => expect(app).to.have.all.keys(['name', 'id', 'type', 'version']))
            });

            it('Then the value of each property is the value of that attribute', () => {
                expect(actual).to.deep.equal(expected);
            });
        });
    });
});
