exports.id = 0;
exports.modules = {

/***/ "./src/resolvers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolversSchema = undefined;

var _mongodb = __webpack_require__("mongodb");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var MONGO_URL = 'mongodb://localhost:27017/blogddd';
var prepare = function prepare(item) {
  console.log('item', item);
  item._id = item._id.toString();
  return item;
};

var resolversSchema = exports.resolversSchema = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var db, Posts, Comments, resolvers;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _mongodb.MongoClient.connect(MONGO_URL);

          case 3:
            db = _context8.sent;
            Posts = db.collection('posts');
            Comments = db.collection('comments');
            resolvers = {
              Query: {
                post: function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(root, _ref2) {
                    var _id = _ref2._id;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.t0 = prepare;
                            _context.next = 3;
                            return Posts.findOne((0, _mongodb.ObjectId)(_id));

                          case 3:
                            _context.t1 = _context.sent;
                            return _context.abrupt('return', (0, _context.t0)(_context.t1));

                          case 5:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, undefined);
                  }));

                  function post(_x, _x2) {
                    return _ref3.apply(this, arguments);
                  }

                  return post;
                }(),
                posts: function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return Posts.find({}).toArray();

                          case 2:
                            _context2.t0 = prepare;
                            return _context2.abrupt('return', _context2.sent.map(_context2.t0));

                          case 4:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, undefined);
                  }));

                  function posts() {
                    return _ref4.apply(this, arguments);
                  }

                  return posts;
                }(),
                comment: function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(root, _ref5) {
                    var _id = _ref5._id;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.t0 = prepare;
                            _context3.next = 3;
                            return Comments.findOne((0, _mongodb.ObjectId)(_id));

                          case 3:
                            _context3.t1 = _context3.sent;
                            return _context3.abrupt('return', (0, _context3.t0)(_context3.t1));

                          case 5:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, undefined);
                  }));

                  function comment(_x3, _x4) {
                    return _ref6.apply(this, arguments);
                  }

                  return comment;
                }()
              },
              Post: {
                comments: function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7) {
                    var _id = _ref7._id;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return Comments.find({ postId: _id }).toArray();

                          case 2:
                            _context4.t0 = prepare;
                            return _context4.abrupt('return', _context4.sent.map(_context4.t0));

                          case 4:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, undefined);
                  }));

                  function comments(_x5) {
                    return _ref8.apply(this, arguments);
                  }

                  return comments;
                }()
              },
              Comment: {
                post: function () {
                  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref9) {
                    var postId = _ref9.postId;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.t0 = prepare;
                            _context5.next = 3;
                            return Posts.findOne((0, _mongodb.ObjectId)(postId));

                          case 3:
                            _context5.t1 = _context5.sent;
                            return _context5.abrupt('return', (0, _context5.t0)(_context5.t1));

                          case 5:
                          case 'end':
                            return _context5.stop();
                        }
                      }
                    }, _callee5, undefined);
                  }));

                  function post(_x6) {
                    return _ref10.apply(this, arguments);
                  }

                  return post;
                }()
              },
              Mutation: {
                /* eslint-disable no-unused-vars */
                createPost: function () {
                  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(root, args, context, info) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return Posts.insert(args);

                          case 2:
                            res = _context6.sent;
                            _context6.t0 = prepare;
                            _context6.next = 6;
                            return Posts.findOne({ _id: res.insertedIds[0] });

                          case 6:
                            _context6.t1 = _context6.sent;
                            return _context6.abrupt('return', (0, _context6.t0)(_context6.t1));

                          case 8:
                          case 'end':
                            return _context6.stop();
                        }
                      }
                    }, _callee6, undefined);
                  }));

                  function createPost(_x7, _x8, _x9, _x10) {
                    return _ref11.apply(this, arguments);
                  }

                  return createPost;
                }(),
                createComment: function () {
                  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(root, args) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return Comments.insert(args);

                          case 2:
                            res = _context7.sent;
                            _context7.t0 = prepare;
                            _context7.next = 6;
                            return Comments.findOne({ _id: res.insertedIds[1] });

                          case 6:
                            _context7.t1 = _context7.sent;
                            return _context7.abrupt('return', (0, _context7.t0)(_context7.t1));

                          case 8:
                          case 'end':
                            return _context7.stop();
                        }
                      }
                    }, _callee7, undefined);
                  }));

                  function createComment(_x11, _x12) {
                    return _ref12.apply(this, arguments);
                  }

                  return createComment;
                }()
              }
            };
            return _context8.abrupt('return', resolvers);

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8['catch'](0);

            /* eslint-disable no-console */
            console.log('Error while sending notification', _context8.t0);

          case 13:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined, [[0, 10]]);
  }));

  return function resolversSchema() {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

};