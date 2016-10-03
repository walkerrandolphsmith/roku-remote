import { getChannels } from './../src/onLoad';
import fetchMock from 'fetch-mock';

describe('src/onLoad/getChannels', () => {
    // describe('Given the root url', () => {
    //     let rootUrl, urlPattern;
    //     beforeEach(() => {
    //         rootUrl = 'rootUrl/';
    //         urlPattern = /rootUrl\/query\/apps/;
    //     });
    //
    //     afterEach(() => {
    //         fetchMock.restore();
    //     });
    //
    //     describe('When querying for channel info', () => {
    //         beforeEach(() => {
    //             fetchMock.mock(urlPattern, 200);
    //             getChannels(rootUrl);
    //         });
    //
    //         it('Then fetch should be called with rootUrl/query/apps as the parameter', () => {
    //             expect(fetchMock.called(urlPattern).to.equal(true));
    //         });
    //     });
    // });
});
