import { getDeviceInfo } from './../src/onLoad';
import fetchMock from 'fetch-mock';

describe('given the root url', () => {
    let rootUrl;
    let urlPattern;
    beforeEach(() => {
        rootUrl = 'rootUrl/';
        urlPattern = /rootUrl\/query\/device-info/;
    });

    afterEach(() => {
        fetchMock.restore();
    });

    it('it should call fetch with the rootUrl/query/device-info', () => {
        fetchMock.mock(urlPattern, 200);
        getDeviceInfo(rootUrl);
        expect(fetchMock.called(urlPattern)).to.equal(true);
    });
});
