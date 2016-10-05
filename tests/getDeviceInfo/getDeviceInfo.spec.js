import getDeviceInfo from './../../src/getDeviceInfo';
import fetchMock from 'fetch-mock';

xdescribe('src/getDeviceInfo', () => {
    describe('Given the root url', () => {
        let url, urlPattern;
        beforeEach(() => {
            url = 'url/';
            urlPattern = /url\/query\/device-info/;
            fetchMock.mock(urlPattern, 200);
        });

        afterEach(() => {
            fetchMock.restore();
        });

        describe('When querying for device info', () => {
            beforeEach((done) => {
                getDeviceInfo(url).then(res => done());
            });

            it('Then it should call fetch with the url/query/device-info', () => {
                expect(fetchMock.called(urlPattern)).to.equal(true);
            });
        });

    });
});
