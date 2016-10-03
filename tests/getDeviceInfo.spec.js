import { getDeviceInfo } from './../src/onLoad';
import fetchMock from 'fetch-mock';

describe('src/onLoad/getDeviceInfo', () => {
    describe('Given the root url', () => {
        let rootUrl, urlPattern;
        beforeEach(() => {
            rootUrl = 'rootUrl/';
            urlPattern = /rootUrl\/query\/device-info/;
        });
    
        afterEach(() => {
            fetchMock.restore();
        });

        describe('When querying for device info', () => {
            beforeEach(() => {
                fetchMock.mock(urlPattern, 200);
                getDeviceInfo(rootUrl);
            });

            it('Then it should call fetch with the rootUrl/query/device-info', () => {
                expect(fetchMock.called(urlPattern)).to.equal(true);
            });
        });
    
    });
});
