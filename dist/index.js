/*!
 * name: @jswork/next-md5
 * description: Md5 for next based on blueimp-md5.
 * homepage: https://github.com/afeiship/next-md5
 * version: 1.0.0
 * date: 2020-11-22 14:50:54
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var md5 = global.md5 || require('blueimp-md5');

  nx.md5 = function (inString) {
    return md5(inString);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.md5;
  }
})();
