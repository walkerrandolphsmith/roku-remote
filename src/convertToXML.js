const DOMParser = require('xmldom').DOMParser;

export default (string) => new DOMParser().parseFromString(string);