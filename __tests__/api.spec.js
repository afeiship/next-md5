const nx = require('@feizheng/next-js-core2');
require('../src/next-md5');

describe('api.basic test', () => {
  test('nx.md5', function () {
    var browserMd5 = '900150983cd24fb0d6963f7d28e17f72';
    var serverMd5 = nx.md5('abc');
    expect(browserMd5).toBe(serverMd5);
  });
});
