var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([25],{

/***/ "./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\cde.chen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//qq和其他端不一套模板是因为loop的情况下不一致；
var CAudio = function () {
  function CAudio() {
    _classCallCheck(this, CAudio);

    this.props = {
      id: {
        type: String,
        default: ""
      },
      src: { //audio的要播放的音频资源地址
        type: String,
        default: ''
      },
      loop: { //是否循环播放
        type: Boolean,
        default: false
      },
      controls: { //是否默认显示控件
        type: Boolean,
        default: false
      },
      poster: { //默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效
        type: String,
        default: ""
      },
      name: { //默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效	
        type: String,
        default: '未知音频'
      },
      author: { //默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效	
        type: String,
        default: '未知作者'
      },
      autoplay: {
        type: Boolean,
        default: false
      }
    };
    this.data = {
      currentTime: '00:00',
      isAutoplay: false, //默认不是暂停状态
      audioContext: {},
      isEnded: false //用于标记是否播放完毕，在播放完毕之后，用于重新播放
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      initAudio: function initAudio() {
        this.audioContext = qq.createInnerAudioContext(this.id, this);
        this.isAutoplay = this.autoplay; //如果默认自动播放 true，那么 isAutoplay 为 true;
        if (this.isAutoplay) {
          this.audioContext.play();
        }
      },

      //loop的情况下 ended方法不会触发；
      hanleEnded: function hanleEnded() {
        if (this.loop) {
          //loop为false的时候，会触发这个方法，此时需要将this.isAutoplay置为false
          this.isAutoplay = false;
        }
        this.$cmlEmit('ended');
      },
      hanleTimeUpdate: function hanleTimeUpdate(e) {
        this.$cmlEmit('timeupdate', e.detail);
      },
      handleError: function handleError(e) {
        var errorMap = {
          MEDIA_ERR_ABORTED: 1001,
          MEDIA_ERR_NETWORK: 1002,
          MEDIA_ERR_DECODE: 1003,
          MEDIA_ERR_SRC_NOT_SUPPORTED: 1004
        };
        var errMsg = -1;
        if (e.detail && e.detail.errMsg) {
          errMsg = errorMap[e.detail.errMsg];
        }
        var detail = { errMsg: errMsg };
        this.$cmlEmit('error', detail);
      },
      setCurrentTime: function setCurrentTime() {},
      handlePlay: function handlePlay() {
        this.isAutoplay = !this.isAutoplay;
        this.$cmlEmit('play');
      },
      handlePause: function handlePause() {
        this.isAutoplay = !this.isAutoplay;
        this.$cmlEmit('pause');
      }
    };
  }

  _createClass(CAudio, [{
    key: "mounted",
    value: function mounted() {
      this.initAudio();
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CAudio;
}();

exports.default = new CAudio();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\cde.chen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\qq\\\\.postcssrc.js\"}}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"C:\\\\Users\\\\cde.chen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\qq\\\\.postcssrc.js\"}}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml");
var __cml__script = __webpack_require__("./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"C:\\\\Users\\\\cde.chen\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!./C:/Users/cde.chen/AppData/Roaming/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml"]);