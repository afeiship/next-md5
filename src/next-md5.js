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
