# js常用代码片段

#### 代码模块化
``` js
// exports
if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    // AMD. Register as an anonymous module.
    define(function() {
      return QRCode;
    });
} else if (typeof define === 'function' && typeof define.cmd === 'object' && define.cmd) {
    // AMD. Register as an anonymous module.
    define(function() {
      return QRCode;
    });
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = QRCode;
} else {
    window.QRCode = QRCode;
}
// requrie
if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
} else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
} else {
    // Browser globals
    factory(jQuery);
}
 ```

#### 简单自适应
```js
function resize() {
    var deviceWidth = document.documentElement.clientWidth;
    // if (deviceWidth > 640) deviceWidth = 640;
    if (deviceWidth < 240) deviceWidth = 240;
    document.documentElement.style.cssText = 'font-size:' + (deviceWidth / 16) + 'px!important';
}
window.addEventListener('resize',resize);
resize();
```

#### 解决输入法挡住输入框的 bug
```js
$(document).on('focus', 'input,textarea', function () {
    window.setTimeout(function () {
        document.activeElement.scrollIntoViewIfNeeded();
    }, 250);
}).on('click', 'input,textarea', function () {
    window.setTimeout(function () {
        document.activeElement.scrollIntoViewIfNeeded();
    }, 250);
})
```
