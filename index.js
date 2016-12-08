"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * YoptaScript v0.2.6 (https://yopta.space)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2016 Yopta.Space project and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _words = require("./words.jsx");

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Yopta = function () {
  function Yopta() {
    _classCallCheck(this, Yopta);
  }

  _createClass(Yopta, [{
    key: "compile",
    value: function compile(yoptaCode) {
      return yoptaCode.replace(/([а-яА-Я]+)/g, function (e) {
        if (_words2.default[e]) {
          return _words2.default[e];
        } else {
          return e;
        }
      });
    }
  }]);

  return Yopta;
}();

var yopta = new Yopta();

if (window) {
  document.querySelectorAll('[language="YoptaScript"]').forEach(yopta.compile);
}

exports.default = Yopta;
