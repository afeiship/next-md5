/*!
 * name: @feizheng/next-md5
 * description: Md5 for next based on blueimp-md5.
 * url: https://github.com/afeiship/next-md5
 * version: 1.0.0
 * date: 2020-03-28 11:45:35
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var md5 = global.md5 || require('blueimp-md5');

  nx.md5 = function (inString) {
    return md5(inString);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.md5;
  }
})();

//# sourceMappingURL=next-md5.js.map
