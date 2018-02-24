exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("babel-core/register");

__webpack_require__("babel-polyfill");

var _start = __webpack_require__("./src/start.js");

(0, _start.start)();

// import http from 'http';
// import app from './server';
//
// const server = http.createServer(app);
// let currentApp = app;
// server.listen(3000);
// if (module.hot) {
//   module.hot.accept('./server', () => {
//     server.removeListener('request', currentApp);
//     server.on('request', app);
//     currentApp = app;
//   });
// }

/***/ })

};