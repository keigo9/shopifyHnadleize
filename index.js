ShopifyHandleize = function (str) {
  str = str.toLowerCase();
  var toReplace = ['"', "'", "\\", "(", ")", "[", "]"];
  // For the old browsers
  for (var i = 0; i < toReplace.length; ++i) {
      str = str.replace(toReplace[i], "");
  }
  // 非アルファベット・非数字文字・非日本語をハイフンに置換
  str = str.replace(/[^a-zA-Z0-9\u3000-\u30FF\uFF01-\uFF5E]+/g, "-");
  if (str.charAt(str.length - 1) == "-") {
      str = str.replace(/-+\z/, "");
  }
  if (str.charAt(0) == "-") {
      str = str.replace(/^(-+)/, "");
  }
  return str
};