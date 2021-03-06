(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _n3Alert = __webpack_require__(103);
	
	var _n3Alert2 = _interopRequireDefault(_n3Alert);
	
	var _n3Carousel = __webpack_require__(116);
	
	var _n3Carousel2 = _interopRequireDefault(_n3Carousel);
	
	var _n3Accordion = __webpack_require__(120);
	
	var _n3Accordion2 = _interopRequireDefault(_n3Accordion);
	
	var _n3Affix = __webpack_require__(123);
	
	var _n3Affix2 = _interopRequireDefault(_n3Affix);
	
	var _n3Aside = __webpack_require__(126);
	
	var _n3Aside2 = _interopRequireDefault(_n3Aside);
	
	var _n3CheckboxGroup = __webpack_require__(130);
	
	var _n3CheckboxGroup2 = _interopRequireDefault(_n3CheckboxGroup);
	
	var _n3Checkbox = __webpack_require__(132);
	
	var _n3Checkbox2 = _interopRequireDefault(_n3Checkbox);
	
	var _n3CheckboxBtn = __webpack_require__(135);
	
	var _n3CheckboxBtn2 = _interopRequireDefault(_n3CheckboxBtn);
	
	var _n3Cascader = __webpack_require__(152);
	
	var _n3Cascader2 = _interopRequireDefault(_n3Cascader);
	
	var _n3ToastMethod = __webpack_require__(162);
	
	var _n3ToastMethod2 = _interopRequireDefault(_n3ToastMethod);
	
	var _n3Label = __webpack_require__(166);
	
	var _n3Label2 = _interopRequireDefault(_n3Label);
	
	var _n3Input = __webpack_require__(154);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _n3Textarea = __webpack_require__(169);
	
	var _n3Textarea2 = _interopRequireDefault(_n3Textarea);
	
	var _n3Datepicker = __webpack_require__(172);
	
	var _n3Datepicker2 = _interopRequireDefault(_n3Datepicker);
	
	var _n3Timepicker = __webpack_require__(175);
	
	var _n3Timepicker2 = _interopRequireDefault(_n3Timepicker);
	
	var _n3Datetimepicker = __webpack_require__(185);
	
	var _n3Datetimepicker2 = _interopRequireDefault(_n3Datetimepicker);
	
	var _n3Dropdown = __webpack_require__(188);
	
	var _n3Dropdown2 = _interopRequireDefault(_n3Dropdown);
	
	var _n3Modal = __webpack_require__(191);
	
	var _n3Modal2 = _interopRequireDefault(_n3Modal);
	
	var _n3Option = __webpack_require__(194);
	
	var _n3Option2 = _interopRequireDefault(_n3Option);
	
	var _n3Panel = __webpack_require__(197);
	
	var _n3Panel2 = _interopRequireDefault(_n3Panel);
	
	var _n3Popover = __webpack_require__(200);
	
	var _n3Popover2 = _interopRequireDefault(_n3Popover);
	
	var _n3PopConfirm = __webpack_require__(203);
	
	var _n3PopConfirm2 = _interopRequireDefault(_n3PopConfirm);
	
	var _n3Progressbar = __webpack_require__(206);
	
	var _n3Progressbar2 = _interopRequireDefault(_n3Progressbar);
	
	var _n3Progress = __webpack_require__(209);
	
	var _n3Progress2 = _interopRequireDefault(_n3Progress);
	
	var _n3Radio = __webpack_require__(212);
	
	var _n3Radio2 = _interopRequireDefault(_n3Radio);
	
	var _n3RadioBtn = __webpack_require__(215);
	
	var _n3RadioBtn2 = _interopRequireDefault(_n3RadioBtn);
	
	var _n3RadioGroup = __webpack_require__(218);
	
	var _n3RadioGroup2 = _interopRequireDefault(_n3RadioGroup);
	
	var _n3Select = __webpack_require__(221);
	
	var _n3Select2 = _interopRequireDefault(_n3Select);
	
	var _n3Tab = __webpack_require__(224);
	
	var _n3Tab2 = _interopRequireDefault(_n3Tab);
	
	var _n3Tabs = __webpack_require__(227);
	
	var _n3Tabs2 = _interopRequireDefault(_n3Tabs);
	
	var _n3Tooltip = __webpack_require__(179);
	
	var _n3Tooltip2 = _interopRequireDefault(_n3Tooltip);
	
	var _n3Button = __webpack_require__(137);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3ButtonGroup = __webpack_require__(230);
	
	var _n3ButtonGroup2 = _interopRequireDefault(_n3ButtonGroup);
	
	var _n3Container = __webpack_require__(233);
	
	var _n3Container2 = _interopRequireDefault(_n3Container);
	
	var _n3Row = __webpack_require__(236);
	
	var _n3Row2 = _interopRequireDefault(_n3Row);
	
	var _n3Nav = __webpack_require__(239);
	
	var _n3Nav2 = _interopRequireDefault(_n3Nav);
	
	var _n3SubNav = __webpack_require__(242);
	
	var _n3SubNav2 = _interopRequireDefault(_n3SubNav);
	
	var _n3NavItem = __webpack_require__(245);
	
	var _n3NavItem2 = _interopRequireDefault(_n3NavItem);
	
	var _n3Column = __webpack_require__(248);
	
	var _n3Column2 = _interopRequireDefault(_n3Column);
	
	var _n3Switch = __webpack_require__(251);
	
	var _n3Switch2 = _interopRequireDefault(_n3Switch);
	
	var _n3MultipleInput = __webpack_require__(254);
	
	var _n3MultipleInput2 = _interopRequireDefault(_n3MultipleInput);
	
	var _n3SimplePagination = __webpack_require__(260);
	
	var _n3SimplePagination2 = _interopRequireDefault(_n3SimplePagination);
	
	var _n3Step = __webpack_require__(263);
	
	var _n3Step2 = _interopRequireDefault(_n3Step);
	
	var _n3DataTable = __webpack_require__(266);
	
	var _n3DataTable2 = _interopRequireDefault(_n3DataTable);
	
	var _n3Loading = __webpack_require__(139);
	
	var _n3Loading2 = _interopRequireDefault(_n3Loading);
	
	var _n3Timeline = __webpack_require__(269);
	
	var _n3Timeline2 = _interopRequireDefault(_n3Timeline);
	
	var _n3TimelineItem = __webpack_require__(271);
	
	var _n3TimelineItem2 = _interopRequireDefault(_n3TimelineItem);
	
	var _n3Typeahead = __webpack_require__(256);
	
	var _n3Typeahead2 = _interopRequireDefault(_n3Typeahead);
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _n3Tags = __webpack_require__(275);
	
	var _n3Tags2 = _interopRequireDefault(_n3Tags);
	
	var _n3Breadcrumb = __webpack_require__(278);
	
	var _n3Breadcrumb2 = _interopRequireDefault(_n3Breadcrumb);
	
	var _n3BreadcrumbItem = __webpack_require__(281);
	
	var _n3BreadcrumbItem2 = _interopRequireDefault(_n3BreadcrumbItem);
	
	var _n3Form = __webpack_require__(284);
	
	var _n3Form2 = _interopRequireDefault(_n3Form);
	
	var _n3FormItem = __webpack_require__(287);
	
	var _n3FormItem2 = _interopRequireDefault(_n3FormItem);
	
	var _n3Slider = __webpack_require__(177);
	
	var _n3Slider2 = _interopRequireDefault(_n3Slider);
	
	var _n3Slide = __webpack_require__(290);
	
	var _n3Slide2 = _interopRequireDefault(_n3Slide);
	
	var _n3Uploader = __webpack_require__(293);
	
	var _n3Uploader2 = _interopRequireDefault(_n3Uploader);
	
	var _transition = __webpack_require__(296);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	__webpack_require__(297);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Components = {
	  n3FormItem: _n3FormItem2.default,
	  n3Form: _n3Form2.default,
	  n3Alert: _n3Alert2.default,
	  n3Carousel: _n3Carousel2.default,
	  n3Accordion: _n3Accordion2.default,
	  n3Container: _n3Container2.default,
	  n3Loading: _n3Loading2.default,
	  n3Slide: _n3Slide2.default,
	  n3Row: _n3Row2.default,
	  n3Column: _n3Column2.default,
	  n3Switch: _n3Switch2.default,
	  n3Button: _n3Button2.default,
	  n3ButtonGroup: _n3ButtonGroup2.default,
	  n3Affix: _n3Affix2.default,
	  n3Aside: _n3Aside2.default,
	  n3Checkbox: _n3Checkbox2.default,
	  n3CheckboxBtn: _n3CheckboxBtn2.default,
	  n3CheckboxGroup: _n3CheckboxGroup2.default,
	  n3Datepicker: _n3Datepicker2.default,
	  n3Timepicker: _n3Timepicker2.default,
	  n3Datetimepicker: _n3Datetimepicker2.default,
	  n3Uploader: _n3Uploader2.default,
	  n3Cascader: _n3Cascader2.default,
	  n3Label: _n3Label2.default,
	  n3Input: _n3Input2.default,
	  n3Textarea: _n3Textarea2.default,
	  n3Dropdown: _n3Dropdown2.default,
	  n3Modal: _n3Modal2.default,
	  n3Option: _n3Option2.default,
	  n3Nav: _n3Nav2.default,
	  n3SubNav: _n3SubNav2.default,
	  n3NavItem: _n3NavItem2.default,
	  n3Panel: _n3Panel2.default,
	  n3Popover: _n3Popover2.default,
	  n3PopConfirm: _n3PopConfirm2.default,
	  n3Progressbar: _n3Progressbar2.default,
	  n3Progress: _n3Progress2.default,
	  n3RadioGroup: _n3RadioGroup2.default,
	  n3Radio: _n3Radio2.default,
	  n3RadioBtn: _n3RadioBtn2.default,
	  n3Select: _n3Select2.default,
	  n3Icon: _n3Icon2.default,
	  n3Slider: _n3Slider2.default,
	  n3Tab: _n3Tab2.default,
	  n3TimelineItem: _n3TimelineItem2.default,
	  n3Timeline: _n3Timeline2.default,
	  n3MultipleInput: _n3MultipleInput2.default,
	  n3Tabs: _n3Tabs2.default,
	  n3Tooltip: _n3Tooltip2.default,
	  n3Typeahead: _n3Typeahead2.default,
	  n3SimplePagination: _n3SimplePagination2.default,
	  n3Step: _n3Step2.default,
	  n3Tags: _n3Tags2.default,
	  n3DataTable: _n3DataTable2.default,
	  n3Breadcrumb: _n3Breadcrumb2.default,
	  n3BreadcrumbItem: _n3BreadcrumbItem2.default
	};
	
	var install = function install(Vue) {
	  for (var i in Components) {
	    Vue.component(i, Components[i]);
	  }
	
	  for (var _i in _transition2.default) {
	    Vue.transition(_i, _transition2.default[_i]);
	  }
	
	  Vue.mixin({
	    methods: {
	      n3Toast: _n3ToastMethod2.default
	    }
	  });
	};
	
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}
	
	Components.install = install;
	
	module.exports = Components;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(104)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(115)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Alert.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Alert.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Alert.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Alert.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Alert.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div
	//    v-show="show"
	//    :class="classObj"
	//     transition="fade"
	//     :style="{width:width}">
	
	//     <n3-icon class="{{prefixCls}}-alert-icon" :type="iconType" ></n3-icon>
	
	//     <button v-if="dismissable" type="button" class="{{prefixCls}}-close"
	//       @click="_handleClose" >
	//       <span>&times;</span>
	//     </button>
	
	//     <div v-if="description" class="{{prefixCls}}-alert-content">
	//       <h4>{{message}}</h4>
	//       <p><slot></slot></p>
	//     </div>
	//     <span v-else>
	//         <slot></slot>
	//     </span>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    dismissable: {
	      type: Boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      default: true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
	      default: 0
	    },
	    width: {
	      type: String
	    },
	    small: {
	      type: Boolean,
	      default: false
	    },
	    placement: {
	      type: String,
	      default: ''
	    },
	    message: {
	      type: String
	    },
	    description: {
	      type: Boolean,
	      default: false
	    },
	    onClose: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  methods: {
	    _handleClose: function _handleClose(e) {
	      this.show = false;
	      if (_getType2.default.isFunction(this.onClose)) {
	        this.onClose();
	      }
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (val) {
	        if (this.placement === 'top' || this.placement === 'bottom') {
	          this.$el.style.marginLeft = -this.$el.offsetWidth / 2 + 'px';
	        } else if (this.placement === 'center') {
	          this.$el.style.marginLeft = -this.$el.offsetWidth / 2 + 'px';
	          this.$el.style.marginTop = -this.$el.offsetHeight / 2 + 'px';
	        }
	      }
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && !!this.duration) {
	        this._timeout = setTimeout(function () {
	          return _this.show = false;
	        }, this.duration);
	      }
	    }
	  },
	  computed: {
	    iconType: function iconType() {
	      var type = this.type;
	
	      var map = {
	        success: 'check-circle-o',
	        danger: 'times-circle-o',
	        warning: 'exclamation-circle',
	        info: 'info-circle'
	      };
	      return map[type];
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var type = this.type;
	      var placement = this.placement;
	      var small = this.small;
	
	      var klass = {};
	
	      klass[prefixCls + '-alert-small'] = small;
	      klass[prefixCls + '-alert'] = true;
	      klass[prefixCls + '-alert-' + type] = true;
	      klass[prefixCls + '-' + placement] = true;
	
	      return klass;
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default
	  }
	};
	// </script>

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(106);
	is.isJSON = __webpack_require__(111).strict;
	
	
	module.exports = new Type();
	
	
	function Type () {
	  // lets make use of core-util-is
	  Object.keys(is).forEach(function (fn) {
	    this[fn] = is[fn];
	  }, this);
	}
	
	Type.prototype.get = function (op) {
	  if (this.isPrimitive(op)) {
	    return this.isNull(op) ? 'null' :
	      this.isBoolean(op) ? 'boolean' :
	      this.isNumber(op) ? 'number' :
	      this.isSymbol(op) ? 'symbol' :
	      this.isJSON(op) ? 'json' :
	      this.isString(op) ? 'string' :
	      this.isUndefined(op) ? 'undefined' : 'unknown';
	  }
	
	  if (this.isObject(op)) {
	    return this.isArray(op) ? 'array' :
	      this.isRegExp(op) ? 'regexp' :
	      this.isDate(op) ? 'date' :
	      this.isError(op) ? 'error' :
	      this.isBuffer(op) ? 'buffer' : 'object';
	  }
	
	  if (this.isFunction(op)) return 'function';
	};


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	
	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = Buffer.isBuffer;
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(107).Buffer))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(108)
	var ieee754 = __webpack_require__(109)
	var isArray = __webpack_require__(110)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(107).Buffer, (function() { return this; }())))

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict'
	
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	function init () {
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i]
	    revLookup[code.charCodeAt(i)] = i
	  }
	
	  revLookup['-'.charCodeAt(0)] = 62
	  revLookup['_'.charCodeAt(0)] = 63
	}
	
	init()
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	
	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },
/* 109 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 110 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 111 */
/***/ function(module, exports) {

	function isString (x) {
	  var type = Object.prototype.toString.apply(x);
	  return type.slice(type.indexOf(' ') + 1, -1) === 'String' && isNaN(Number(x));
	}
	
	function isObject (obj) {
	  return obj === Object(obj) && !Array.isArray(obj);
	}
	
	
	module.exports = isJSON;
	isJSON.strict = strict;
	
	function isJSON (str, pass_object) {
	  if (pass_object && isObject(str)) return true;
	
	  if (!isString(str)) return false;
	
	  str = str.replace(/\s/g, '').replace(/\n|\r/, '');
	
	  if (/^\{(.*?)\}$/.test(str))
	    return /"(.*?)":(.*?)/g.test(str);
	
	  if (/\[(.*?)\]/.test(str)) {
	    str = str.replace(/^\[/, '')
	              .replace(/\]$/, '')
	              .replace(/},{/g, '}\n{')
	              .split(/\n/);
	    return str.map(function (s) { return isJSON(s); })
	              .reduce(function (prev, curr) { return !!curr; });
	  }
	
	  return false;
	}
	
	
	function strict (str) {
	  try {
	   return JSON.parse(str) && true;
	  } catch (ex) {
	    return false;
	  } 
	}


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(113)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(114)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Icon.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Icon.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Icon.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Icon.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Icon.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <i :class="['fa','fa-'+type]" :style="{fontSize:size}"></i>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    size: {
	      type: String
	    }
	  }
	};
	// </script>

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<i :class=\"['fa','fa-'+type]\" :style=\"{fontSize:size}\"></i>";

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<div\n   v-show=\"show\"\n   :class=\"classObj\"\n    transition=\"fade\"\n    :style=\"{width:width}\">\n\n    <n3-icon class=\"{{prefixCls}}-alert-icon\" :type=\"iconType\" ></n3-icon>\n\n    <button v-if=\"dismissable\" type=\"button\" class=\"{{prefixCls}}-close\"\n      @click=\"_handleClose\" >\n      <span>&times;</span>\n    </button>\n\n    <div v-if=\"description\" class=\"{{prefixCls}}-alert-content\">\n      <h4>{{message}}</h4>\n      <p><slot></slot></p>\n    </div>\n    <span v-else>\n        <slot></slot>\n    </span>\n  </div>";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(117)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(119)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Carousel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Carousel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Carousel.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Carousel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Carousel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // <template>
	// <div class="{{prefixCls}}-carousel {{prefixCls}}-slide">
	//   <ol class="{{prefixCls}}-carousel-indicators" v-show="indicators">
	//     <li v-for="i in indicator" 
	//       transition="fade"
	//       @click="handleIndicatorClick($index)" 
	//       :class="[$index === activeIndex ? prefixCls + '-carousel-active'  : '']">
	//     </li>
	//   </ol>
	//   <div class="{{prefixCls}}-carousel-inner">
	//     <slot></slot>
	//   </div>
	//   <a v-show="controls" class="{{prefixCls}}-carousel-left {{prefixCls}}-carousel-control" @click="prevClick">
	//     <n3-icon type="chevron-left"></n3-icon>
	//   </a>
	//   <a v-show="controls" class="{{prefixCls}}-carousel-right {{prefixCls}}-carousel-control" @click="nextClick">
	//     <n3-icon type="chevron-right"></n3-icon>
	//   </a>
	// </div>
	// </template>
	
	// <script>
	
	
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      default: true
	    },
	    interval: {
	      type: Number,
	      default: 5000
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      intervalID: '',
	      indicator: [],
	      activeIndex: 0,
	      isAnimating: false
	    };
	  },
	
	  computed: {
	    slider: function slider() {
	      return this.$el.querySelectorAll('.' + this.prefixCls + '-carousel-item');
	    }
	  },
	  watch: {
	    activeIndex: function activeIndex(newVal, oldVal) {
	      newVal > oldVal ? this.slide('left', newVal, oldVal) : this.slide('right', newVal, oldVal);
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default
	  },
	  methods: {
	    handleIndicatorClick: function handleIndicatorClick(index) {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex = index;
	    },
	    slide: function slide(direction, selected, prev) {
	      var _this = this;
	
	      if (this._prevSelectedEvent) this._prevSelectedEvent.remove();
	      if (this._selectedEvent) this._selectedEvent.remove();
	
	      var prevSelectedEl = this.slider[prev];
	      var selectedEl = this.slider[selected];
	      var transitionendFn = function transitionendFn() {
	        [].concat(_toConsumableArray(_this.slider)).forEach(function (el) {
	          return el.className = _this.prefixCls + '-carousel-item';
	        });
	        selectedEl.classList.add(_this.prefixCls + '-carousel-active');
	        _this.isAnimating = false;
	      };
	
	      direction === 'left' ? selectedEl.classList.add(this.prefixCls + '-carousel-next') : selectedEl.classList.add(this.prefixCls + '-carousel-prev');
	
	      this._prevSelectedEvent = _EventListener2.default.listen(prevSelectedEl, 'transitionend', transitionendFn);
	      this._selectedEvent = _EventListener2.default.listen(selectedEl, 'transitionend', transitionendFn);
	      prevSelectedEl.classList.add(this.prefixCls + '-carousel-' + direction);
	      selectedEl.classList.add(this.prefixCls + '-carousel-' + direction);
	    },
	    nextClick: function nextClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex + 1 < this.slider.length ? this.activeIndex += 1 : this.activeIndex = 0;
	    },
	    prevClick: function prevClick() {
	      if (this.isAnimating) return false;
	      this.isAnimating = true;
	      this.activeIndex === 0 ? this.activeIndex = this.slider.length - 1 : this.activeIndex -= 1;
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var el = this.$el;
	    var self = this;
	
	    function intervalManager(flag, func, time) {
	      flag ? self.intervalID = setInterval(func, time) : clearInterval(self.intervalID);
	    }
	    if (!!this.interval) {
	      intervalManager(true, this.nextClick, this.interval);
	      el.addEventListener('mouseenter', function () {
	        return intervalManager(false);
	      });
	      el.addEventListener('mouseleave', function () {
	        return intervalManager(true, _this2.nextClick, _this2.interval);
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.intervalID) clearInterval(this.intervalID);
	  }
	};
	// </script>

/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  }
	};
	
	exports.default = EventListener;

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-carousel {{prefixCls}}-slide\">\n  <ol class=\"{{prefixCls}}-carousel-indicators\" v-show=\"indicators\">\n    <li v-for=\"i in indicator\" \n      transition=\"fade\"\n      @click=\"handleIndicatorClick($index)\" \n      :class=\"[$index === activeIndex ? prefixCls + '-carousel-active'  : '']\">\n    </li>\n  </ol>\n  <div class=\"{{prefixCls}}-carousel-inner\">\n    <slot></slot>\n  </div>\n  <a v-show=\"controls\" class=\"{{prefixCls}}-carousel-left {{prefixCls}}-carousel-control\" @click=\"prevClick\">\n    <n3-icon type=\"chevron-left\"></n3-icon>\n  </a>\n  <a v-show=\"controls\" class=\"{{prefixCls}}-carousel-right {{prefixCls}}-carousel-control\" @click=\"nextClick\">\n    <n3-icon type=\"chevron-right\"></n3-icon>\n  </a>\n</div>";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(121)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(122)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Accordion.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Accordion.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Accordion.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Accordion.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Accordion.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    oneAtATime: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    effect: {
	      type: String,
	      default: 'collapse'
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  events: {
	    'n3@paneltoggle': function n3Paneltoggle(child) {
	      var children = this.$children;
	      var ret = [];
	
	      if (this.oneAtATime) {
	        children.forEach(function (item) {
	          if (child !== item) {
	            item.isOpen = false;
	          }
	        });
	      }
	
	      children.forEach(function (item) {
	        if (item.index) {
	          ret.push({
	            index: item.index,
	            isOpen: item.isOpen,
	            header: item.header
	          });
	        }
	      });
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange(ret);
	      }
	    }
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-panel-group">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-panel-group\">\n    <slot></slot>\n  </div>";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(124)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(125)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Affix.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Affix.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Affix.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Affix.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Affix.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      default: 0
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false,
	      styles: {}
	    };
	  },
	
	  methods: {
	    scrolling: function scrolling() {
	      var scrollTop = this.getScroll(window, true);
	      var elementOffset = this.getOffset(this.$el);
	      if (!this.affixed && scrollTop > elementOffset.top) {
	        this.affixed = true;
	        this.styles = {
	          top: this.offset + 'px',
	          left: elementOffset.left + 'px',
	          width: this.$el.offsetWidth + 'px',
	          position: 'fixed'
	        };
	      }
	      if (this.affixed && scrollTop < elementOffset.top) {
	        this.affixed = false;
	        this.styles = {};
	      }
	    },
	    getScroll: function getScroll(w, top) {
	      var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	      var method = 'scroll' + (top ? 'Top' : 'Left');
	      if (typeof ret !== 'number') {
	        var d = w.document;
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	          ret = d.body[method];
	        }
	      }
	      return ret;
	    },
	    getOffset: function getOffset(element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = this.getScroll(window, true);
	      var scrollLeft = this.getScroll(window);
	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }
	  },
	  ready: function ready() {
	    this._scrollEvent = _EventListener2.default.listen(window, 'scroll', this.scrolling);
	    this._resizeEvent = _EventListener2.default.listen(window, 'resize', this.scrolling);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._scrollEvent) {
	      this._scrollEvent.remove();
	    }
	    if (this._resizeEvent) {
	      this._resizeEvent.remove();
	    }
	  }
	};
	// </script>
	// <template>
	// <div>
	// <div :style="styles">
	//   <slot></slot>
	// </div>
	// </div>
	// </template>
	// <script>

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "<div>\n<div :style=\"styles\">\n  <slot></slot>\n</div>\n</div>";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(127)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(129)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Aside.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Aside.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Aside.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Aside.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Aside.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _getScrollBarWidth = __webpack_require__(128);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      require: true,
	      twoWay: true
	    },
	    placement: {
	      type: String,
	      default: 'right'
	    },
	    header: {
	      type: String
	    },
	    width: {
	      type: String,
	      default: '320px'
	    },
	    onShow: {
	      type: Function
	    },
	    onHide: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var placement = this.placement;
	
	      var klass = {};
	
	      klass[prefixCls + '-aside'] = true;
	      klass[prefixCls + '-aside-left'] = placement === 'left';
	      klass[prefixCls + '-aside-right'] = placement === 'right';
	
	      return klass;
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var backdrop = document.createElement('div');
	      var prefixCls = this.prefixCls;
	      var body = document.body;
	      backdrop.className = prefixCls + '-aside-backdrop';
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        body.appendChild(backdrop);
	        body.classList.add(prefixCls + '-modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        backdrop.className += ' ' + prefixCls + '-aside-in';
	        this._clickEvent = _EventListener2.default.listen(backdrop, 'click', this.close);
	        if (_getType2.default.isFunction(this.onShow)) {
	          this.onShow();
	        }
	      } else {
	        if (this._clickEvent) this._clickEvent.remove();
	        backdrop = document.querySelector('.' + prefixCls + '-aside-backdrop');
	        backdrop.className = prefixCls + '-aside-backdrop';
	        setTimeout(function () {
	          body.classList.remove(prefixCls + '-modal-open');
	          body.style.paddingRight = '0';
	          body.removeChild(backdrop);
	        }, 300);
	        if (_getType2.default.isFunction(this.onHide)) {
	          this.onHide();
	        }
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	};
	// </script>
	// <template>
	//   <div 
	//     :style="{width:width}"
	//     :class="classObj"
	//     v-show="show"
	//     :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
	//     <div class="{{prefixCls}}-aside-dialog">
	//       <div class="{{prefixCls}}-aside-content">
	//         <div class="{{prefixCls}}-aside-header">
	//           <button type="button" class="{{prefixCls}}-close" @click='close'><span>&times;</span></button>
	//           <h4 class="{{prefixCls}}-aside-title">{{header}}</h4>
	//         </div>
	//         <div class="{{prefixCls}}-aside-body">
	//           <slot></slot>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 128 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "<div \n    :style=\"{width:width}\"\n    :class=\"classObj\"\n    v-show=\"show\"\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\n    <div class=\"{{prefixCls}}-aside-dialog\">\n      <div class=\"{{prefixCls}}-aside-content\">\n        <div class=\"{{prefixCls}}-aside-header\">\n          <button type=\"button\" class=\"{{prefixCls}}-close\" @click='close'><span>&times;</span></button>\n          <h4 class=\"{{prefixCls}}-aside-title\">{{header}}</h4>\n        </div>\n        <div class=\"{{prefixCls}}-aside-body\">\n          <slot></slot>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(131)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(151)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3CheckboxGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3CheckboxGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Checkbox = __webpack_require__(132);
	
	var _n3Checkbox2 = _interopRequireDefault(_n3Checkbox);
	
	var _n3CheckboxBtn = __webpack_require__(135);
	
	var _n3CheckboxBtn2 = _interopRequireDefault(_n3CheckboxBtn);
	
	var _valMixin = __webpack_require__(147);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(148);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="{{prefixCls}}-btn-group {{prefixCls}}-checkbox-group">
	//     <template v-if="options">
	//         <n3-checkbox 
	//           v-if="type==='checkbox'" 
	//           v-for="item in options"
	//           :value="item.value"
	//           :checked="item.checked"
	//           :disabled="item.disabled">
	//           {{item.label}}
	//         </n3-checkbox>
	
	//          <n3-checkbox-btn 
	//          v-if="type==='button'" 
	//          v-for="item in options"
	//          :value="item.value"
	//          :checked="item.checked"
	//          :disabled="item.disabled">
	//          {{item.label}}
	//         </n3-checkbox-btn>
	
	//     </template>
	//     <template v-else>
	//     <slot></slot>
	//     </template>
	
	//     <validate
	//       :name="name"
	//       :rules="rules"
	//       :valid-status.sync="validStatus"
	//       :custom-validate="customValidate" 
	//       :value="value"
	//       :results.sync="validateResults">
	//     </validate>
	
	//   </div>
	// </template>
	
	// <script> 
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    color: {
	      type: String,
	      default: 'default'
	    },
	    type: {
	      type: String,
	      default: 'checkbox'
	    },
	    options: {
	      type: Array
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	
	  watch: {
	    value: function value() {
	      if (typeof this.onChange === 'function') {
	        this.onChange(this.value);
	      }
	    }
	  },
	
	  components: {
	    n3Checkbox: _n3Checkbox2.default,
	    n3CheckboxBtn: _n3CheckboxBtn2.default,
	    validate: _validate2.default
	  }
	
	};
	// </script>

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(133)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(134)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Checkbox.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Checkbox.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Checkbox.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Checkbox.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Checkbox.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 133 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <label :class="wrapClass">
	//   <span>
	//     <span class="{{prefixCls}}-checkbox-inner"></span>
	//     <input
	//       type="checkbox"
	//       class="{{prefixCls}}-checkbox-input"
	//       :disabled="disabled"
	//       :checked="!!checked"
	//       @click="handleClick"/>
	//   </span>
	//   <span><slot></slot></span>  
	// </label>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    wrapClass: function wrapClass() {
	      var klass = {};
	      var prefixCls = this.prefixCls;
	      var active = this.active;
	      var disabled = this.disabled;
	
	
	      klass[prefixCls + '-checkbox-label'] = true;
	      klass[prefixCls + '-checkbox-checked'] = active;
	      klass[prefixCls + '-checkbox-disabled'] = disabled;
	
	      return klass;
	    },
	    active: function active() {
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      return index > -1;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      this.checked = !this.checked;
	      if (typeof this.onChange === 'function') {
	        this.onChange(this.checked);
	      }
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    var index = parent.value.indexOf(this.value);
	    if (this.checked && index === -1) this.$parent.value.push(this.value);
	  }
	};
	// </script>

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "<label :class=\"wrapClass\">\n  <span>\n    <span class=\"{{prefixCls}}-checkbox-inner\"></span>\n    <input\n      type=\"checkbox\"\n      class=\"{{prefixCls}}-checkbox-input\"\n      :disabled=\"disabled\"\n      :checked=\"!!checked\"\n      @click=\"handleClick\"/>\n  </span>\n  <span><slot></slot></span>  \n</label>";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(136)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(146)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxBtn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxBtn.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3CheckboxBtn.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3CheckboxBtn.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3CheckboxBtn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Button = __webpack_require__(137);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    color: function color() {
	      return this.$parent.color;
	    },
	    active: function active() {
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      return index > -1;
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var active = this.active;
	
	      var klass = {};
	      klass[prefixCls + '-checked-btn'] = true;
	
	      return klass;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      var parent = this.$parent;
	      var index = parent.value.indexOf(this.value);
	      index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1);
	      this.checked = !this.checked;
	      if (typeof this.onChange === 'function') {
	        this.onChange(this.checked);
	      }
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    var index = parent.value.indexOf(this.value);
	    if (this.checked && index === -1) this.$parent.value.push(this.value);
	  },
	
	  components: {
	    n3Button: _n3Button2.default
	  }
	};
	// </script>
	// <template>
	//   <n3-button 
	//     @click.prevent="handleClick"
	//     :class="classObj" 
	//     :disabled="disabled"
	//     :active="active"
	//     :type="type">
	//     <slot></slot>
	//   </n3-button>
	// </template>
	
	// <script>

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(138)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(145)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Button.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Button.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Button.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Button.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Button.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Loading = __webpack_require__(139);
	
	var _n3Loading2 = _interopRequireDefault(_n3Loading);
	
	var _n3Badge = __webpack_require__(142);
	
	var _n3Badge2 = _interopRequireDefault(_n3Badge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <a :class="classObj">
	//   	<slot></slot>	
	//   	<n3-loading v-if="loading" size="xs" style="position:relative;top:2px"></n3-loading>
	//     <n3-badge  v-if="badge">{{badge}}</n3-badge>
	//   </a>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    size: {
	      type: String
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    badge: {
	      type: [String, Number]
	    },
	    active: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    block: {
	      type: Boolean,
	      default: false
	    },
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var type = this.type;
	      var size = this.size;
	      var block = this.block;
	      var active = this.active;
	      var disabled = this.disabled;
	
	      var klass = {};
	
	      klass[prefixCls + '-btn'] = true;
	      klass[prefixCls + '-btn-block'] = block;
	      klass[prefixCls + '-btn-active'] = active;
	      klass[prefixCls + '-btn-disabled'] = disabled;
	      size ? klass[prefixCls + '-btn-' + size] = true : '';
	      type ? klass[prefixCls + '-btn-' + type] = true : '';
	
	      return klass;
	    }
	  },
	  components: {
	    n3Loading: _n3Loading2.default,
	    n3Badge: _n3Badge2.default
	  }
	};
	// </script>

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(140)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(141)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Loading.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Loading.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Loading.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Loading.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Loading.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 140 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <span :class="classObj">
	//     <i :class="iclassObj"></i>
	//     <slot></slot>  
	//   </span>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    size: {
	      type: String
	    },
	    center: {
	      type: Boolean
	    },
	    fixed: {
	      type: Boolean,
	      default: false
	    },
	    color: {
	      type: String
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var center = this.center;
	      var fixed = this.fixed;
	
	      var klass = {};
	
	      klass['affix'] = fixed;
	      klass[prefixCls + '-page-loading-con'] = true;
	      klass[prefixCls + '-page-loading-con'] = true;
	      klass[prefixCls + '-loading-center'] = center;
	
	      return klass;
	    },
	    iclassObj: function iclassObj() {
	      var prefixCls = this.prefixCls;
	      var type = this.type;
	      var size = this.size;
	      var color = this.color;
	
	      var klass = {};
	
	      klass[prefixCls + '-page-loading'] = true;
	      type ? klass[prefixCls + '-loading-' + type] = true : '';
	      size ? klass[prefixCls + '-loading-' + size] = true : '';
	      color ? klass['text-' + color] = true : '';
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"classObj\">\n    <i :class=\"iclassObj\"></i>\n    <slot></slot>  \n  </span>";

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(143)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(144)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Badge.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Badge.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Badge.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Badge.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Badge.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 143 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<span class="{{prefixCls}}-badge">
	// 		<slot></slot>	
	// 	</span>
	// </template>
	// <script>
	exports.default = {
		props: {
			prefixCls: {
				type: String,
				default: 'n3'
			}
		}
	};
	// </script>

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "<span class=\"{{prefixCls}}-badge\">\n\t\t<slot></slot>\t\n\t</span>";

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "<a :class=\"classObj\">\n  \t<slot></slot>\t\n  \t<n3-loading v-if=\"loading\" size=\"xs\" style=\"position:relative;top:2px\"></n3-loading>\n    <n3-badge  v-if=\"badge\">{{badge}}</n3-badge>\n  </a>";

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = "<n3-button \n    @click.prevent=\"handleClick\"\n    :class=\"classObj\" \n    :disabled=\"disabled\"\n    :active=\"active\"\n    :type=\"type\">\n    <slot></slot>\n  </n3-button>";

/***/ },
/* 147 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    name: {
	      type: String
	    },
	    customValidate: {
	      type: Function
	    },
	    rules: {
	      type: Array
	    },
	    validStatus: {
	      type: String,
	      twoway: true,
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      validateResults: {}
	    };
	  }
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(149)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(150)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./validate.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./validate.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./validate.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./validate.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./validate.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // <template>
	// 	<div class="{{prefixCls}}-err-tip" v-if="validate && tips" >{{tips}}</div>
	// </template>
	
	// <script>
	
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {},
	    customValidate: {
	      type: Function
	    },
	    rules: {
	      type: Array
	    },
	    name: {
	      type: String
	    },
	    validStatus: {
	      type: String,
	      twoWay: true
	    },
	    results: {
	      type: Object,
	      twoWay: true
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      tips: '',
	      validate: false,
	      status: ''
	    };
	  },
	
	  watch: {
	    value: {
	      handler: function handler(newVal, oldVal) {
	        this.valid(newVal);
	      },
	
	      immediate: true
	    },
	    results: {
	      handler: function handler(val, oldVal) {
	        var self = this;
	        var tips = '';
	        var status = '';
	
	        for (var key in val) {
	          var obj = val[key];
	          if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj) {
	            obj.tips ? tips += obj.tips + '  ' : '';
	            if (obj.validStatus !== 'success') {
	              status = 'error';
	            }
	          }
	        }
	
	        status !== 'error' ? status = 'success' : 0;
	
	        self.status = status;
	
	        if (self.validate) {
	          self.validStatus = self.status;
	        }
	
	        self.tips = tips;
	        self.results['isvalid'] = true;
	
	        for (var i in self.results) {
	          var validStatus = self.results[i]['validStatus'];
	          if (validStatus === 'error') {
	            self.results['isvalid'] = false;
	            break;
	          }
	        }
	        self.$dispatch('n3@validateChange', {
	          name: self.name,
	          result: self.results
	        });
	      },
	
	      deep: true,
	      immediate: true
	    }
	  },
	  events: {
	    'n3@openValidate': function n3OpenValidate(val) {
	      this.validate = val;
	      val ? this.validStatus = this.status : this.validStatus = '';
	    }
	  },
	  methods: {
	    valid: function valid(val) {
	      if (this.rules || _getType2.default.isFunction(this.customValidate)) {
	        this.rulesValid(val);
	      }
	    },
	    rulesItemValid: function rulesItemValid(rule, value) {
	      var self = this;
	      var tip = rule.tip;
	      var type = rule.type;
	
	      switch (type) {
	        case 'required':
	          self.requiredValid(value, tip);
	          break;
	        case 'phone':
	          self.phoneValid(value, tip);
	          break;
	        case 'number':
	          self.numberValid(value, tip);
	          break;
	        case 'telephone':
	          self.telValid(value, tip);
	          break;
	        case 'email':
	          self.emailValid(value, tip);
	          break;
	      }
	
	      if (type.indexOf('maxlength') > -1) {
	        self.maxlengthValid(type, value, tip);
	        return;
	      }
	      if (type.indexOf('minlength') > -1) {
	        self.minlengthValid(type, value, tip);
	        return;
	      }
	    },
	    customValid: function customValid(val) {
	      this.$set('results.customValidate', this.customValidate(val));
	    },
	    requiredValid: function requiredValid(val, tip) {
	      var self = this;
	
	      self.results = self.results || {};
	
	      if (!val || val.length === 0) {
	        self.$set('results.requiredValid', {
	          validStatus: 'error',
	          tips: tip || '不能为空'
	        });
	      } else {
	        self.$set('results.requiredValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      }
	    },
	    maxlengthValid: function maxlengthValid(type, val, tip) {
	      var self = this;
	      var maxlength = type.split('=')[1] - 0;
	
	      self.results = self.results || {};
	
	      if (val) {
	        if (val.length > maxlength) {
	          self.$set('results.maxlengthValid', {
	            validStatus: 'error',
	            tips: tip || '输入字符数不能大于' + maxlength
	          });
	        } else {
	          self.$set('results.maxlengthValid', {
	            validStatus: 'success',
	            tips: ''
	          });
	        }
	      }
	    },
	    minlengthValid: function minlengthValid(type, val, tip) {
	      var self = this;
	      var minlength = type.split('=')[1] - 0;
	
	      self.results = self.results || {};
	
	      if (val) {
	        if (val.length < minlength) {
	          self.$set('results.minlengthValid', {
	            validStatus: 'error',
	            tips: tip || '输入字符数不能小于' + minlength
	          });
	        } else {
	          self.$set('results.minlengthValid', {
	            validStatus: 'success',
	            tips: ''
	          });
	        }
	      }
	    },
	    rulesValid: function rulesValid(value) {
	      var self = this;
	
	      self.rules.forEach(function (val, index) {
	        self.rulesItemValid(val, value);
	      });
	
	      if (_getType2.default.isFunction(self.customValidate)) {
	        self.customValid(value);
	      }
	    },
	    phoneValid: function phoneValid(value, tip) {
	      var rule = /^1\d{10}$/;
	
	      if (rule.test(value) || value === '') {
	        this.$set('results.isPhoneValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      } else {
	        this.$set('results.isPhoneValid', {
	          validStatus: 'error',
	          tips: tip || '请输入正确的手机号码'
	        });
	      }
	    },
	    numberValid: function numberValid(value, tip) {
	      var rule = /^\d*$/;
	
	      if (rule.test(value) || value === '') {
	        this.$set('results.isNumberValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      } else {
	        this.$set('results.isNumberValid', {
	          validStatus: 'error',
	          tips: tip || '请输入数字'
	        });
	      }
	    },
	    telValid: function telValid(value, tip) {
	      var rule = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
	
	      if (rule.test(value) || value === '') {
	        this.$set('results.isTelValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      } else {
	        this.$set('results.isTelValid', {
	          validStatus: 'error',
	          tips: tip || '输入固话格式错误，固话请用-'
	        });
	      }
	    },
	    emailValid: function emailValid(value, tip) {
	      var rule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	
	      if (rule.test(value) || value === '') {
	        this.$set('results.isEmailValid', {
	          validStatus: 'success',
	          tips: ''
	        });
	      } else {
	        this.$set('results.isEmailValid', {
	          validStatus: 'error',
	          tips: tip || '请输入正确的email'
	        });
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-err-tip\" v-if=\"validate && tips\" >{{tips}}</div>";

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-btn-group {{prefixCls}}-checkbox-group\">\n    <template v-if=\"options\">\n        <n3-checkbox \n          v-if=\"type==='checkbox'\" \n          v-for=\"item in options\"\n          :value=\"item.value\"\n          :checked=\"item.checked\"\n          :disabled=\"item.disabled\">\n          {{item.label}}\n        </n3-checkbox>\n\n         <n3-checkbox-btn \n         v-if=\"type==='button'\" \n         v-for=\"item in options\"\n         :value=\"item.value\"\n         :checked=\"item.checked\"\n         :disabled=\"item.disabled\">\n         {{item.label}}\n        </n3-checkbox-btn>\n\n    </template>\n    <template v-else>\n    <slot></slot>\n    </template>\n\n    <validate\n      :name=\"name\"\n      :rules=\"rules\"\n      :valid-status.sync=\"validStatus\"\n      :custom-validate=\"customValidate\" \n      :value=\"value\"\n      :results.sync=\"validateResults\">\n    </validate>\n\n  </div>";

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(153)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(161)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Cascader.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Cascader.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Cascader.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Cascader.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Cascader.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Input = __webpack_require__(154);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _inputMixin = __webpack_require__(156);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="{{prefixCls}}-cascader">
	//     <span class="{{prefixCls}}-cascader-picker">
	//       <n3-input 
	//         :width="width"
	//         :name="name" 
	//         :rules="rules" 
	//         :validate="validate" 
	//         :has-feedback="hasFeedback"
	//         :placeholder="placeholder"
	//         :custom-validate="customValidate"
	//         :value.sync="displayValue"
	//         :readonly="true"
	//         :disabled="disabled"
	//         @click="toggleMenus">
	//       </n3-input>
	//     </span>
	//     <div class="{{prefixCls}}-cascader-menus" v-show="show" transition="fadeDown">
	//       <ul class="{{prefixCls}}-cascader-menu" v-for="(index, menu) in menus">
	//         <li :class="itemClass(index,option)" 
	//           v-for="option in menu" @click="changeOption(index,option)">{{option.label}}
	//         </li>
	//       </ul>
	//     </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    options: {
	      type: Array,
	      required: true
	    },
	
	    displayRender: {
	      type: Function,
	      default: function _default(label) {
	        return label.join(' / ');
	      }
	    },
	    expandTrigger: {
	      type: String,
	      default: 'click'
	    },
	    value: {
	      type: Array,
	      twoWay: true
	    },
	    onChange: {
	      type: Function
	    },
	    selectChange: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    n3Input: _n3Input2.default
	  },
	  data: function data() {
	    return {
	      menus: [],
	      selectedOptions: [],
	      displayValue: '',
	      show: false,
	      init: true,
	      inner: false
	    };
	  },
	
	  computed: {
	    selectedValue: function selectedValue() {
	      var self = this;
	      return self.selectedOptions.map(function (option) {
	        return option.value;
	      });
	    },
	    selectedLabel: function selectedLabel() {
	      var self = this;
	      return self.selectedOptions.map(function (option) {
	        return option.label;
	      });
	    }
	  },
	  created: function created() {
	    this.setMenu();
	  },
	  ready: function ready() {
	    var el = this.$el;
	    var self = this;
	    self._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!el.contains(e.target)) {
	        self.show = false;
	      }
	    });
	  },
	
	  watch: {
	    options: function options() {
	      this.setMenu();
	    },
	    value: function value() {
	      if (this.inner) {
	        this.inner = false;
	        return;
	      }
	      this.setResult();
	    }
	  },
	  methods: {
	    itemClass: function itemClass(index, option) {
	      var prefixCls = this.prefixCls;
	
	      var klass = {};
	
	      klass[prefixCls + '-cascader-menu-item'] = true;
	      klass[prefixCls + '-cascader-menu-item-selected'] = this.selectedOptions[index] === option;
	      klass[prefixCls + '-cascader-menu-item-disabled'] = option.disabled;
	
	      return klass;
	    },
	    setResult: function setResult() {
	      var self = this;
	      self.displayValue = '';
	      self.selectedOptions = [];
	
	      if (self.value) {
	        self.value.forEach(function (value, i) {
	          if (self.menus[i] && self.menus[i].length) {
	            var option = self.menus[i].filter(function (option) {
	              return option.value === value;
	            });
	            if (option[0]) self.changeOption(i, option[0]);
	          }
	        });
	      }
	    },
	    setMenu: function setMenu() {
	      var self = this;
	      self.menus = [[]];
	      self.displayValue = '';
	      self.init = true;
	
	      self.options.forEach(function (option, i) {
	        self.menus[0].push({
	          label: option.label,
	          value: option.value,
	          children: option.children,
	          disabled: option.disabled
	        });
	      });
	
	      self.setResult();
	      self.init = false;
	    },
	    changeOption: function changeOption(index, option, event) {
	      var self = this;
	      var menus = self.menus.slice(0, index + 1);
	
	      if (option.disabled) {
	        return;
	      }
	
	      self.selectedOptions = self.selectedOptions.slice(0, index + 1);
	      self.selectedOptions[index] = option;
	
	      if (option.children) {
	        menus.push(option.children);
	      }
	
	      if (this.selectChange || !option.children) {
	        self.displayValue = self.displayRender(self.selectedLabel);
	        self.inner = true;
	        self.value = self.selectedValue;
	        if (_getType2.default.isFunction(self.onChange) && !this.init) {
	          self.onChange();
	        }
	      }
	
	      if (!option.children) {
	        self.show = false;
	      }
	
	      self.menus = menus;
	    },
	    toggleMenus: function toggleMenus() {
	      if (this.disabled) return;
	      this.show = !this.show;
	    }
	  }
	};
	// </script>

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(155)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(160)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Input.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Input.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Input.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Input.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Input.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _inputMixin = __webpack_require__(156);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	var _validate = __webpack_require__(148);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	var _vueFocus = __webpack_require__(157);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    readonly: {
	      type: Boolean
	    },
	    onBlur: {
	      type: Function
	    },
	    onFocus: {
	      type: Function
	    },
	    value: {
	      type: [String, Number],
	      twoway: true
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default,
	    validate: _validate2.default
	  },
	  directives: {
	    focusModel: _vueFocus.focusModel
	  },
	  data: function data() {
	    return {
	      validateResults: {}
	    };
	  },
	
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var validStatus = this.validStatus;
	      var hasFeedback = this.hasFeedback;
	
	      var klass = {};
	
	      klass[prefixCls + '-has-error'] = validStatus === 'error';
	      klass[prefixCls + '-has-success'] = validStatus === 'success';
	      klass[prefixCls + '-has-warn'] = validStatus === 'warn';
	      klass[prefixCls + '-has-feedback'] = validStatus && hasFeedback;
	      klass[prefixCls + '-input-con'] = true;
	      klass['inline'] = true;
	
	      return klass;
	    }
	  },
	
	  methods: {
	    blur: function blur() {
	      if (_getType2.default.isFunction(this.onBlur)) {
	        this.onBlur();
	      }
	    },
	    focus: function focus() {
	      if (_getType2.default.isFunction(this.onFocus)) {
	        this.onFocus();
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// <div :class="classObj" >
	//   <input  
	//    class="{{prefixCls}}-form-control"  
	//    :style="{'width':width}"
	//    :readonly="readonly"
	//    :disabled="disabled"
	//    :placeholder="placeholder" 
	//    @blur="blur"
	//    @focus="focus"
	//    v-focus-model="focused" 
	//    v-model="value"  />
	//   <n3-icon 
	//     type="check" class="{{prefixCls}}-form-control-feedback" 
	//     v-if='validStatus=="success" && hasFeedback'>
	//   </n3-icon>
	
	//   <n3-icon 
	//     type="warning" class="{{prefixCls}}-form-control-feedback" 
	//     v-if='validStatus=="warning" && hasFeedback'>
	//   </n3-icon>
	
	//   <n3-icon 
	//     type="times" class="{{prefixCls}}-form-control-feedback" 
	//     v-if='validStatus=="error" && hasFeedback'>
	//   </n3-icon>
	
	//   <validate
	//     :name="name"
	//     :valid-status.sync="validStatus"
	//     :rules="rules"
	//     :custom-validate="customValidate" 
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	
	// </div>
	// </template>
	// <script>

/***/ },
/* 156 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    name: {
	      type: String
	    },
	    disabled: {
	      type: Boolean
	    },
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    width: {
	      type: String,
	      default: '220px'
	    },
	    customValidate: {
	      type: Function
	    },
	    validStatus: {
	      type: String,
	      twoway: true,
	      default: ''
	    },
	    rules: {
	      type: Array
	    },
	    hasFeedback: {
	      type: Boolean,
	      default: true
	    },
	    focused: {
	      type: Boolean,
	      twoway: true,
	      default: false
	    }
	  }
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var Vue = __webpack_require__(159);
	var Vue__default = 'default' in Vue ? Vue['default'] : Vue;
	
	// @NOTE: We have to use Vue.nextTick because the element might not be
	//        present at the time model changes, but will be in the next batch.
	//        But because we use Vue.nextTick, the directive may already be unbound
	//        by the time the callback executes, so we have to make sure it was not.
	
	var focus = {
	  priority: 1000,
	
	  bind: function() {
	    var self = this;
	    this.bound = true;
	
	    this.focus = function() {
	      if (self.bound === true) {
	        self.el.focus();
	      }
	    };
	
	    this.blur = function() {
	      if (self.bound === true) {
	        self.el.blur();
	      }
	    };
	  },
	
	  update: function(value) {
	    if (value) {
	      Vue__default.nextTick(this.focus);
	    } else {
	      Vue__default.nextTick(this.blur);
	    }
	  },
	
	  unbind: function() {
	    this.bound = false;
	  },
	};
	
	var focusModel = {
	  twoWay: true,
	  priority: 1000,
	
	  bind: function() {
	    var self = this;
	    this.bound = true;
	
	    this.focus = function() {
	      if (self.bound === true) {
	        self.el.focus();
	      }
	    };
	
	    this.blur = function() {
	      if (self.bound === true) {
	        self.el.blur();
	      }
	    };
	
	    this.focusHandler = function() {
	      self.set(true);
	    };
	
	    this.blurHandler = function() {
	      self.set(false);
	    };
	
	    Vue.util.on(this.el, 'focus', this.focusHandler);
	    Vue.util.on(this.el, 'blur', this.blurHandler);
	  },
	
	  update: function(value) {
	    if (value === true) {
	      Vue__default.nextTick(this.focus);
	    } else if (value === false) {
	      Vue__default.nextTick(this.blur);
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        Vue.util.warn(
	          this.name + '="' +
	          this.expression + '" expects a boolean value, ' +
	          'got ' + JSON.stringify(value)
	        );
	      }
	    }
	  },
	
	  unbind: function() {
	    Vue.util.off(this.el, 'focus', this.focusHandler);
	    Vue.util.off(this.el, 'blur', this.blurHandler);
	    this.bound = false;
	  },
	};
	
	var focusAuto = {
	  priority: 100,
	  bind: function() {
	    var self = this;
	    this.bound = true;
	
	    Vue__default.nextTick(function() {
	      if (self.bound === true) {
	        self.el.focus();
	      }
	    });
	  },
	  unbind: function(){
	    this.bound = false;
	  },
	};
	
	var mixin = {
	  directives: {
	    focus: focus,
	    focusModel: focusModel,
	    focusAuto: focusAuto,
	  },
	};
	
	exports.focus = focus;
	exports.focusModel = focusModel;
	exports.focusAuto = focusAuto;
	exports.mixin = mixin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(158)))

/***/ },
/* 158 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');
	
	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	var formatComponentName = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	
	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };
	
	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;
	
	function noop() {}
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  var _again = true;
	
	  _function: while (_again) {
	    _again = false;
	
	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);
	
	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */
	
	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var _this = this;
	
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	
	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },
	
	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },
	
	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};
	
	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */
	
	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}
	
	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */
	
	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */
	
	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}
	
	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */
	
	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}
	
	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */
	
	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	
	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */
	
	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}
	
	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop$1() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */
	
	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);
	
	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }
	
	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }
	
	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }
	
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */
	
	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.26';
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(158)))

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" >\n  <input  \n   class=\"{{prefixCls}}-form-control\"  \n   :style=\"{'width':width}\"\n   :readonly=\"readonly\"\n   :disabled=\"disabled\"\n   :placeholder=\"placeholder\" \n   @blur=\"blur\"\n   @focus=\"focus\"\n   v-focus-model=\"focused\" \n   v-model=\"value\"  />\n  <n3-icon \n    type=\"check\" class=\"{{prefixCls}}-form-control-feedback\" \n    v-if='validStatus==\"success\" && hasFeedback'>\n  </n3-icon>\n\n  <n3-icon \n    type=\"warning\" class=\"{{prefixCls}}-form-control-feedback\" \n    v-if='validStatus==\"warning\" && hasFeedback'>\n  </n3-icon>\n\n  <n3-icon \n    type=\"times\" class=\"{{prefixCls}}-form-control-feedback\" \n    v-if='validStatus==\"error\" && hasFeedback'>\n  </n3-icon>\n\n  <validate\n    :name=\"name\"\n    :valid-status.sync=\"validStatus\"\n    :rules=\"rules\"\n    :custom-validate=\"customValidate\" \n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n   \n</div>";

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-cascader\">\n    <span class=\"{{prefixCls}}-cascader-picker\">\n      <n3-input \n        :width=\"width\"\n        :name=\"name\" \n        :rules=\"rules\" \n        :validate=\"validate\" \n        :has-feedback=\"hasFeedback\"\n        :placeholder=\"placeholder\"\n        :custom-validate=\"customValidate\"\n        :value.sync=\"displayValue\"\n        :readonly=\"true\"\n        :disabled=\"disabled\"\n        @click=\"toggleMenus\">\n      </n3-input>\n    </span>\n    <div class=\"{{prefixCls}}-cascader-menus\" v-show=\"show\" transition=\"fadeDown\">\n      <ul class=\"{{prefixCls}}-cascader-menu\" v-for=\"(index, menu) in menus\">\n        <li :class=\"itemClass(index,option)\" \n          v-for=\"option in menu\" @click=\"changeOption(index,option)\">{{option.label}}\n        </li>\n      </ul>\n    </div>\n  </div>";

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (obj) {
	  var instance = new n3Toast({
	    el: document.createElement('div')
	  });
	
	  instance.placement = obj.placement || 'center';
	  instance.type = obj.type || 'default';
	  instance.closeOnClick = obj.closeOnClick;
	  instance.duration = obj.duration === undefined ? 3000 : obj.duration;
	  instance.width = obj.width;
	  instance.text = obj.text;
	
	  _vue2.default.nextTick(function () {
	    instance.$appendTo(document.body);
	    instance.show = true;
	    if (instance.duration > 0) {
	      setTimeout(function () {
	        instance.$remove();
	      }, instance.duration);
	    }
	  });
	};
	
	var _vue = __webpack_require__(159);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var n3Toast = _vue2.default.extend(__webpack_require__(163));

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(164)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(165)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Toast.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Toast.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Toast.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Toast.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Toast.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 164 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div 
	//     v-el:dom
	//     :class="classObj"
	// 		transition="fade"
	// 		@click="handleClick"
	// 		v-if="show">
	// 		<h5>{{text}}</h5>
	// 	</div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    top: {
	      type: Boolean,
	      default: false
	    },
	    placement: {
	      type: String,
	      default: 'center'
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    duration: {
	      type: Number,
	      default: 3000
	    },
	    closeOnClick: {
	      type: Boolean,
	      default: true
	    },
	    show: {
	      type: Boolean,
	      twoWay: true,
	      default: false
	    },
	    text: {
	      type: String
	    },
	    width: {
	      type: String
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	
	  data: function data() {
	    return {
	      setT: ''
	    };
	  },
	
	
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var placement = this.placement;
	      var type = this.type;
	
	      var klass = {};
	
	      klass[prefixCls + '-toast'] = true;
	      klass[prefixCls + '-toast-' + type] = true;
	      klass[prefixCls + '-' + placement] = true;
	
	      return klass;
	    }
	  },
	
	  methods: {
	    handleClick: function handleClick() {
	      if (this.closeOnClick) {
	        this.show = false;
	      }
	    }
	  },
	
	  watch: {
	    show: {
	      handler: function handler(val) {
	        var self = this;
	        this.setT = window.clearTimeout(this.setT);
	
	        if (val) {
	          if (this.placement === 'top' || this.placement === 'bottom') {
	            this.$els.dom.style.marginLeft = -this.$els.dom.offsetWidth / 2 + 'px';
	          } else if (this.placement === 'center') {
	            this.$els.dom.style.marginLeft = -this.$els.dom.offsetWidth / 2 + 'px';
	            this.$els.dom.style.marginTop = -this.$els.dom.offsetHeight / 2 + 'px';
	          }
	        }
	
	        if (val && this.duration) {
	          this.setT = window.setTimeout(function () {
	            self.show = false;
	          }, this.duration);
	        }
	      },
	
	      immediate: true
	    }
	  }
	};
	// </script>

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "<div \n    v-el:dom\n    :class=\"classObj\"\n\t\ttransition=\"fade\"\n\t\t@click=\"handleClick\"\n\t\tv-if=\"show\">\n\t\t<h5>{{text}}</h5>\n\t</div>";

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(167)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(168)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Label.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Label.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Label.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Label.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Label.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<span :class="classObj">
	// 		<slot></slot>
	// 	</span>
	// </template>
	// <script>
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    },
	    hover: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var type = this.type;
	      var hover = this.hover;
	
	      var klass = {};
	
	      klass[prefixCls + '-label'] = true;
	      klass[prefixCls + '-label-' + type] = true;
	      klass[prefixCls + '-label-hover'] = hover;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"classObj\">\n\t\t<slot></slot>\n\t</span>";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(170)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(171)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Textarea.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Textarea.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Textarea.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Textarea.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Textarea.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validate = __webpack_require__(148);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    name: {
	      type: String
	    },
	    disabled: {
	      type: Boolean
	    },
	    readonly: {
	      type: Boolean
	    },
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    resize: {
	      type: Boolean,
	      default: true
	    },
	    width: {
	      type: String,
	      default: '220px'
	    },
	    maxLength: {
	      type: Number
	    },
	    maxHeight: {
	      type: String
	    },
	    minHeight: {
	      type: String
	    },
	    value: {
	      type: String,
	      twoway: true
	    },
	    validStatus: {
	      type: String,
	      twoway: true,
	      default: ''
	    },
	    customValidate: {
	      type: Function
	    },
	    rules: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      validateResults: {}
	    };
	  },
	
	  components: {
	    validate: _validate2.default
	  },
	  computed: {
	    styleObj: function styleObj() {
	      var resize = this.resize;
	      var maxHeight = this.maxHeight;
	      var minHeight = this.minHeight;
	
	      var style = {};
	
	      style['maxWidth'] = '100%';
	      style['maxHeight'] = maxHeight;
	      style['minHeight'] = minHeight;
	      !resize ? style['resize'] = 'none' : '';
	
	      return style;
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var validStatus = this.validStatus;
	
	      var klass = {};
	
	      klass[prefixCls + '-has-error'] = validStatus === 'error';
	      klass[prefixCls + '-has-success'] = validStatus === 'success';
	      klass[prefixCls + '-has-warn'] = validStatus === 'warn';
	
	      klass[prefixCls + '-textarea-con'] = true;
	      klass['inline'] = true;
	
	      return klass;
	    }
	  }
	};
	// </script>
	// <template>
	// <div :class="classObj" :style="{width:width}">
	//   <textarea
	//     class="{{prefixCls}}-form-control"  
	//     :disabled="disabled"
	//     :readonly="readonly"
	//     :maxlength="maxLength"
	//     :style="styleObj"
	//     :name="name"
	//     :placeholder="placeholder"
	//     v-model="value">
	//   </textarea>
	
	//   <validate
	//     :name="name"
	//     :valid-status.sync="validStatus"
	//     :rules="rules"
	//     :custom-validate="customValidate" 
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	
	// </div>
	// </template>
	
	// <script>

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" :style=\"{width:width}\">\n  <textarea\n    class=\"{{prefixCls}}-form-control\"  \n    :disabled=\"disabled\"\n    :readonly=\"readonly\"\n    :maxlength=\"maxLength\"\n    :style=\"styleObj\"\n    :name=\"name\"\n    :placeholder=\"placeholder\"\n    v-model=\"value\">\n  </textarea>\n\n  <validate\n    :name=\"name\"\n    :valid-status.sync=\"validStatus\"\n    :rules=\"rules\"\n    :custom-validate=\"customValidate\" \n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n\n</div>";

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(173)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(174)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datepicker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Datepicker.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Datepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Input = __webpack_require__(154);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _inputMixin = __webpack_require__(156);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="{{prefixCls}}-datepicker">
	//     <n3-input 
	//     :width="width"
	//     :name="name" 
	//     :rules="rules" 
	//     :validate="validate" 
	//     :has-feedback="hasFeedback"
	//     :placeholder="placeholder"
	//     :custom-validate="customValidate"
	//     :readonly="true"
	//     :disabled="disabled"
	//     @click="inputClick"
	//     :value.sync="value">
	//     </n3-input>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show ="displayDayView" transition="fadeDown">
	//           <div class="{{prefixCls}}-datepicker-inner">
	//               <div class="{{prefixCls}}-datepicker-body">
	//                   <div class="{{prefixCls}}-datepicker-ctrl">
	//                       <span 
	//                         class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                         @click="preNextMonthClick(0)">&lt;</span>
	//                       <span 
	//                         class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                         @click="preNextMonthClick(1)">&gt;</span>
	//                       <p @click="switchMouthView">
	//                       {{stringifyDayHeader(currDate)}}
	//                       </p>
	//                   </div>
	//                   <div class="{{prefixCls}}-datepicker-weekRange">
	//                       <span v-for="w in weekRange">{{w}}</span>
	//                   </div>
	//                   <div class="{{prefixCls}}-datepicker-dateRange">
	//                       <span 
	//                         v-for="d in dateRange" :class="d.sclass" 
	//                         @click="daySelect(d.date,d.sclass)">
	//                         {{d.text}}
	//                       </span>
	//                   </div>
	//               </div>
	//           </div>
	//       </div>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show ="displayMouthView" >
	//         <div class="{{prefixCls}}-datepicker-inner">
	//             <div class="{{prefixCls}}-datepicker-body">
	//                 <div class="{{prefixCls}}-datepicker-ctrl">
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                       @click="preNextYearClick(0)">&lt;</span>
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                       @click="preNextYearClick(1)">&gt;</span>
	//                     <p @click="switchDecadeView">
	//                     {{stringifyYearHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="{{prefixCls}}-datepicker-mouthRange">
	//                 	<template v-for="m in mouthNames">
	// 	                    <span   
	//                           :class="monthClassObj(m)"
	//                           @click="mouthSelect($index)">
	// 	                      {{m.substr(0,3)}}
	// 	                    </span>
	//                     </template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show ="displayYearView" >
	//         <div class="{{prefixCls}}-datepicker-inner">
	//             <div class="{{prefixCls}}-datepicker-body">
	//                 <div class="{{prefixCls}}-datepicker-ctrl">
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                       @click="preNextDecadeClick(0)">&lt;</span>
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                       @click="preNextDecadeClick(1)">&gt;</span>
	//                     <p>
	//                     {{stringifyDecadeHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="{{prefixCls}}-datepicker-mouthRange {{prefixCls}}-datepicker-decadeRange">
	//                 	<template v-for="decade in decadeRange">
	//                 		<span 
	//                       :class="yearClassObj(decade)"
	// 	                    @click.stop="yearSelect(decade.text)">
	// 	                      {{decade.text}}
	// 	                 	</span>
	// 					        </template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	// </div>
	// </template>
	
	// <script>
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'yyyy-MM-dd'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      today: this.stringify(new Date()),
	      weekRange: ['日', '一', '二', '三', '四', '五', '六'],
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: false,
	      displayMouthView: false,
	      displayYearView: false,
	      mouthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    },
	    value: function value(val) {
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange(this.value);
	      }
	    }
	  },
	  methods: {
	    monthClassObj: function monthClassObj(m) {
	      var prefixCls = this.prefixCls;
	      var value = this.value;
	      var mouthNames = this.mouthNames;
	      var parse = this.parse;
	      var currDate = this.currDate;
	
	      var klass = {};
	
	      klass[prefixCls + '-datepicker-dateRange-item-active'] = value && parse(value) && mouthNames[parse(value).getMonth()] === m && currDate.getFullYear() === parse(value).getFullYear();
	
	      return klass;
	    },
	    yearClassObj: function yearClassObj(decade) {
	      var prefixCls = this.prefixCls;
	      var value = this.value;
	      var parse = this.parse;
	
	      var klass = {};
	
	      klass[prefixCls + '-datepicker-dateRange-item-active'] = value && parse(value) && parse(value).getFullYear() === decade.text;
	
	      return klass;
	    },
	    close: function close() {
	      this.displayDayView = this.displayMouthView = this.displayMouthView = false;
	    },
	    inputClick: function inputClick() {
	      if (this.disabled) return;
	      if (this.displayMouthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, mouths, date);
	      } else {
	        this.currDate = new Date(year + 10, mouths, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, mouths, date);
	      } else {
	        this.currDate = new Date(year + 1, mouths, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMouthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, klass) {
	      if (klass.indexOf(this.prefixCls + '-datepicker-item-disable') > -1) {
	        return false;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
	        this.displayDayView = false;
	      }
	    },
	    switchMouthView: function switchMouthView() {
	      this.displayDayView = false;
	      this.displayMouthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMouthView = false;
	      this.displayYearView = true;
	    },
	    mouthSelect: function mouthSelect(index) {
	      this.displayMouthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMouth: function parseMouth(date) {
	      return this.mouthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      if (isNaN(date.getFullYear())) return '';
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, month).replace(/MMM/g, month).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
	      }
	
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var _this = this;
	
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: this.prefixCls + '-datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(_i2) {
	        var date = new Date(time.year, time.month, _i2);
	        var week = date.getDay();
	        var sclass = '';
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = _this.prefixCls + '-datepicker-item-disable';
	        });
	
	        if (_i2 === time.day) {
	          if (_this.value) {
	            var valueDate = _this.parse(_this.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = _this.prefixCls + '-datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this.dateRange.push({
	          text: _i2,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        _loop(_i2);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          this.dateRange.push({
	            text: _i3,
	            date: new Date(nextMonth.year, nextMonth.month, _i3),
	            sclass: this.prefixCls + '-datepicker-item-gray'
	          });
	        }
	      }
	    }
	  },
	  components: {
	    n3Input: _n3Input2.default
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this2.$el.contains(e.target)) _this2.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  }
	};
	// </script>

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-datepicker\">\n    <n3-input \n    :width=\"width\"\n    :name=\"name\" \n    :rules=\"rules\" \n    :validate=\"validate\" \n    :has-feedback=\"hasFeedback\"\n    :placeholder=\"placeholder\"\n    :custom-validate=\"customValidate\"\n    :readonly=\"true\"\n    :disabled=\"disabled\"\n    @click=\"inputClick\"\n    :value.sync=\"value\">\n    </n3-input>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show =\"displayDayView\" transition=\"fadeDown\">\n          <div class=\"{{prefixCls}}-datepicker-inner\">\n              <div class=\"{{prefixCls}}-datepicker-body\">\n                  <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                      <span \n                        class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                        @click=\"preNextMonthClick(0)\">&lt;</span>\n                      <span \n                        class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                        @click=\"preNextMonthClick(1)\">&gt;</span>\n                      <p @click=\"switchMouthView\">\n                      {{stringifyDayHeader(currDate)}}\n                      </p>\n                  </div>\n                  <div class=\"{{prefixCls}}-datepicker-weekRange\">\n                      <span v-for=\"w in weekRange\">{{w}}</span>\n                  </div>\n                  <div class=\"{{prefixCls}}-datepicker-dateRange\">\n                      <span \n                        v-for=\"d in dateRange\" :class=\"d.sclass\" \n                        @click=\"daySelect(d.date,d.sclass)\">\n                        {{d.text}}\n                      </span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show =\"displayMouthView\" >\n        <div class=\"{{prefixCls}}-datepicker-inner\">\n            <div class=\"{{prefixCls}}-datepicker-body\">\n                <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                      @click=\"preNextYearClick(0)\">&lt;</span>\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                      @click=\"preNextYearClick(1)\">&gt;</span>\n                    <p @click=\"switchDecadeView\">\n                    {{stringifyYearHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"{{prefixCls}}-datepicker-mouthRange\">\n                \t<template v-for=\"m in mouthNames\">\n\t                    <span   \n                          :class=\"monthClassObj(m)\"\n                          @click=\"mouthSelect($index)\">\n\t                      {{m.substr(0,3)}}\n\t                    </span>\n                    </template>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show =\"displayYearView\" >\n        <div class=\"{{prefixCls}}-datepicker-inner\">\n            <div class=\"{{prefixCls}}-datepicker-body\">\n                <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                      @click=\"preNextDecadeClick(0)\">&lt;</span>\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                      @click=\"preNextDecadeClick(1)\">&gt;</span>\n                    <p>\n                    {{stringifyDecadeHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"{{prefixCls}}-datepicker-mouthRange {{prefixCls}}-datepicker-decadeRange\">\n                \t<template v-for=\"decade in decadeRange\">\n                \t\t<span \n                      :class=\"yearClassObj(decade)\"\n\t                    @click.stop=\"yearSelect(decade.text)\">\n\t                      {{decade.text}}\n\t                 \t</span>\n\t\t\t\t\t        </template>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>";

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(176)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(184)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timepicker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Timepicker.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Timepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Slider = __webpack_require__(177);
	
	var _n3Slider2 = _interopRequireDefault(_n3Slider);
	
	var _n3Input = __webpack_require__(154);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _inputMixin = __webpack_require__(156);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      type: String,
	      default: 'hh:mm:ss'
	    },
	    hourRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 23];
	      }
	    },
	    minuteRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 59];
	      }
	    },
	    secondRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 59];
	      }
	    },
	    onHide: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  filters: {
	    fix: {
	      read: function read(val) {
	        return this.fix(val, 2);
	      },
	      write: function write(val) {
	        return parseInt(val);
	      }
	    }
	  },
	  watch: {
	    show: function show(val) {
	      if (!val && _getType2.default.isFunction(this.onHide)) this.onHide(this.value);
	    },
	
	    time: {
	      deep: true,
	      handler: function handler(val) {
	        var ret = '';
	        this.time.hour > this.hourRange[1] ? this.time.hour = this.hourRange[1] : 0;
	        this.time.minute > this.minuteRange[1] ? this.time.minute = this.minuteRange[1] : 0;
	        this.time.second > this.secondRange[1] ? this.time.second = this.secondRange[1] : 0;
	        this.time.hour < this.hourRange[0] ? this.time.hour = this.hourRange[0] : 0;
	        this.time.minute < this.minuteRange[0] ? this.time.minute = this.minuteRange[0] : 0;
	        this.time.second < this.secondRange[0] ? this.time.second = this.secondRange[0] : 0;
	
	        if (this.hour) {
	          ret += this.fix(this.time.hour, 2) + ':';
	        }
	
	        if (this.minute) {
	          ret += this.fix(this.time.minute, 2) + ':';
	        }
	
	        if (this.second) {
	          ret += this.fix(this.time.second, 2) + ':';
	        }
	
	        ret = ret.substr(0, ret.length - 1);
	
	        this.value = ret;
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    },
	    inputClick: function inputClick() {
	      if (this.disabled) return;
	      this.show = !this.show;
	    },
	    fix: function fix(num, length) {
	      num = parseInt(num);
	      num = isNaN(num) ? 0 : num;
	
	      return ('' + num).length < length ? (new Array(length + 1).join('0') + num).slice(-length) : '' + num;
	    },
	    _format: function _format(str) {
	      var a = str.split(':');
	      if (this.hour) {
	        this.time.hour = parseInt(a[0] ? a[0] : 0);
	      }
	      if (this.minute) {
	        this.time.minute = parseInt(a[1] ? a[1] : 0);
	      }
	      if (this.second) {
	        this.time.second = parseInt(a[2] ? a[2] : 0);
	      }
	    }
	  },
	  computed: {
	    hour: function hour() {
	      return this.format.indexOf('hh') > -1;
	    },
	    minute: function minute() {
	      return this.format.indexOf('mm') > -1;
	    },
	    second: function second() {
	      return this.format.indexOf('ss') > -1;
	    }
	  },
	  data: function data() {
	    return {
	      show: false,
	      time: {
	        hour: 0,
	        minute: 0,
	        second: 0
	      }
	    };
	  },
	  created: function created() {
	    this._format(this.value);
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this.$el.contains(e.target)) _this.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	
	  components: {
	    n3Slider: _n3Slider2.default,
	    n3Input: _n3Input2.default
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-timepicker">
	//     <n3-input 
	//       :width="width"
	//       :name="name" 
	//       :rules="rules" 
	//       :validate="validate" 
	//       :has-feedback="hasFeedback"
	//       :placeholder="placeholder"
	//       :custom-validate="customValidate"
	//       :readonly="true"
	//       :disabled="disabled"
	//       @click="inputClick"
	//       :value.sync="value">
	//     </n3-input>
	//     <div class="{{prefixCls}}-timepicker-popup" v-show="show" transition="fadeDown">
	//       <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="hour" data-role="hour">
	//         <n3-slider 
	//           :value.sync="time.hour" 
	//           orientation="vertical" 
	//           :max="hourRange[1]" :min="hourRange[0]"  
	//           class="{{prefixCls}}-timepicker-slider">
	//         </n3-slider>
	//       </div>
	//       <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="minute" data-role="minute">
	//         <n3-slider 
	//           :value.sync="time.minute" 
	//           orientation="vertical" 
	//           :max="minuteRange[1]" 
	//           :min="minuteRange[0]"  
	//           class="{{prefixCls}}-timepicker-slider">
	//         </n3-slider>
	//       </div>
	//       <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="second" data-role="second">
	//         <n3-slider 
	//           :value.sync="time.second" 
	//           orientation="vertical" 
	//           :max="secondRange[1]" 
	//           :min="secondRange[0]" 
	//           class="{{prefixCls}}-timepicker-slider">
	//         </n3-slider>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(178)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(183)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slider.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slider.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Slider.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slider.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Slider.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Tooltip = __webpack_require__(179);
	
	var _n3Tooltip2 = _interopRequireDefault(_n3Tooltip);
	
	var _valMixin = __webpack_require__(147);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(148);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    orientation: {
	      type: String,
	      default: 'horizontal'
	    },
	    tooltip: {
	      type: String,
	      default: 'show'
	    },
	    value: {
	      twoway: true,
	      default: 0
	    },
	    min: {
	      type: Number,
	      default: 0
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    max: {
	      type: Number,
	      default: 10
	    },
	    range: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    formatter: {
	      type: Function,
	      default: function _default(val) {
	        if (Array.isArray(val)) {
	          return val[0] + ' : ' + val[1];
	        } else {
	          return val;
	        }
	      }
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      flag: false,
	      tempValue: [0, 0],
	      tempFlag: 0,
	      btnValue: 0
	    };
	  },
	
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var orientation = this.orientation;
	
	      var klass = {};
	
	      klass[prefixCls + '-slider'] = true;
	      klass[prefixCls + '-slider-' + orientation] = true;
	
	      return klass;
	    },
	
	    eValue: {
	      get: function get() {
	        return this.eValue;
	      },
	      set: function set(val) {
	        if (_getType2.default.isArray(this.value) && this.range) {
	          this.value = [Math.min(this.tempValue[0], this.tempValue[1]), Math.max(this.tempValue[0], this.tempValue[1])];
	        } else {
	          this.value = this.tempValue[1];
	        }
	      }
	    }
	  },
	  watch: {
	    value: function value(val) {
	      this.setTempValue();
	      this.setPosition();
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange(this.value);
	      }
	    }
	  },
	  methods: {
	    setTempValue: function setTempValue() {
	      var val = this.value;
	      if (_getType2.default.isArray(val) && this.range) {
	        this.$els.maxSlider.classList.remove(this.prefixCls + '-slider-hide');
	        this.tempValue = val;
	      } else {
	        this.$els.maxSlider.classList.add(this.prefixCls + '-slider-hide');
	        this.tempValue = [this.min, val];
	      }
	    },
	    setPosition: function setPosition() {
	      var selection = this.$els.selection;
	      var bar = this.$els.minSlider;
	      var maxBar = this.$els.maxSlider;
	      var rangeSlider = this.$els.slider;
	      var tooltip = bar.parentNode.parentNode.nextElementSibling;
	
	      if (this.orientation === 'horizontal') {
	        bar.style.left = (this.tempValue[1] - this.min) / (this.max - this.min) * 100 + '%';
	        maxBar.style.left = (this.tempValue[0] - this.min) / (this.max - this.min) * 100 + '%';
	        selection.style.width = Math.abs(this.tempValue[1] - this.tempValue[0]) / (this.max - this.min) * 100 + '%';
	        selection.style.left = (Math.min(this.tempValue[0], this.tempValue[1]) - this.min) / (this.max - this.min) * 100 + '%';
	
	        if (_getType2.default.isArray(this.value) && this.range) {
	          tooltip.style.left = (this.tempValue[1] + this.tempValue[0] - 2 * this.min) / ((this.max - this.min) * 2) * rangeSlider.offsetWidth + 'px';
	        } else {
	          tooltip.style.left = (this.tempValue[1] - this.min) / (this.max - this.min) * rangeSlider.offsetWidth + 'px';
	        }
	        tooltip.style.top = 0;
	      } else if (this.orientation === 'vertical') {
	        bar.style.top = (this.tempValue[1] - this.min) / (this.max - this.min) * 100 + '%';
	        maxBar.style.top = (this.tempValue[0] - this.min) / (this.max - this.min) * 100 + '%';
	        selection.style.height = Math.abs(this.tempValue[1] - this.tempValue[0]) / (this.max - this.min) * 100 + '%';
	        selection.style.top = (Math.min(this.tempValue[0], this.tempValue[1]) - this.min) / (this.max - this.min) * 100 + '%';
	
	        if (_getType2.default.isArray(this.value) && this.range) {
	          tooltip.style.top = (this.tempValue[1] + this.tempValue[0] - 2 * this.min) / ((this.max - this.min) * 2) * rangeSlider.offsetHeight + 'px';
	        } else {
	          tooltip.style.top = (this.tempValue[1] - this.min) / (this.max - this.min) * rangeSlider.offsetHeight + 'px';
	        }
	
	        tooltip.style.left = 0;
	      }
	
	      tooltip.querySelectorAll('.' + this.prefixCls + '-tooltip-inner')[0].innerHTML = this.formatter(this.value);
	    },
	    setRange: function setRange(now, range) {
	      return now < 0 ? 0 : now > range ? range : now;
	    },
	    setStep: function setStep(num) {
	      return Math.round(num / this.step) * this.step;
	    },
	    startDrag: function startDrag(bar, maxBar, rangeSlider) {
	      var self = this;
	
	      if (!self.disabled) {
	        rangeSlider.classList.remove(this.prefixCls + '-slider-disabled');
	        this._mousedownEvent = _EventListener2.default.listen(rangeSlider, 'mousedown', function (event) {
	          self.flag = true;
	          if (!event) {
	            event = window.event;
	            bar.onselectstart = function () {
	              return false;
	            };
	          }
	          var e = event ? event : window.event;
	          var mousedownPositionPercent;
	
	          if (self.orientation === 'horizontal') {
	            mousedownPositionPercent = self.setRange(e.clientX - rangeSlider.getBoundingClientRect().left, rangeSlider.offsetWidth) * 100 / rangeSlider.offsetWidth;
	          } else if (self.orientation === 'vertical') {
	            mousedownPositionPercent = self.setRange(e.clientY - rangeSlider.getBoundingClientRect().top, rangeSlider.offsetHeight) * 100 / rangeSlider.offsetHeight;
	          }
	          var value = self.setStep(mousedownPositionPercent * (self.max - self.min) / 100 + self.min);
	
	          if (value * 2 > self.tempValue[0] + self.tempValue[1]) {
	            if (self.tempValue[1] > self.tempValue[0]) {
	              self.tempValue[1] = value;
	              self.btnValue = self.tempValue[0];
	              self.tempFlag = 2;
	            } else {
	              self.tempValue[0] = value;
	              self.btnValue = self.tempValue[1];
	              self.tempFlag = 1;
	            }
	          } else {
	            if (self.tempValue[1] > self.tempValue[0]) {
	              self.tempValue[0] = value;
	              self.btnValue = self.tempValue[1];
	              self.tempFlag = 1;
	            } else {
	              self.tempValue[1] = value;
	              self.btnValue = self.tempValue[0];
	              self.tempFlag = 2;
	            }
	          }
	          self.eValue = value;
	        });
	
	        this._mousemoveEvent = _EventListener2.default.listen(document, 'mousemove', function (event) {
	          var e = event ? event : window.event;
	          if (self.flag) {
	            var mousedownPositionPercent;
	            if (self.orientation === 'horizontal') {
	              mousedownPositionPercent = self.setRange(e.clientX - rangeSlider.getBoundingClientRect().left, rangeSlider.offsetWidth) * 100 / rangeSlider.offsetWidth;
	            } else if (self.orientation === 'vertical') {
	              mousedownPositionPercent = self.setRange(e.clientY - rangeSlider.getBoundingClientRect().top, rangeSlider.offsetHeight) * 100 / rangeSlider.offsetHeight;
	            }
	            var value = self.setStep(mousedownPositionPercent * (self.max - self.min) / 100 + self.min);
	
	            if (self.tempValue[0] > value && self.tempValue[1] > value) {
	              self.tempFlag = 1;
	            }
	            if (self.tempValue[0] < value && self.tempValue[1] < value) {
	              self.tempFlag = 2;
	            }
	            self.tempValue[self.tempFlag - 1] = value;
	            self.tempValue[self.tempFlag === 1 ? 1 : 0] = self.btnValue;
	            self.eValue = value;
	          }
	        });
	
	        this._mouseupEvent = _EventListener2.default.listen(document, 'mouseup', function (e) {
	          self.flag = false;
	          self.tempFlag = 0;
	        });
	      } else {
	        rangeSlider.classList.add(this.prefixCls + '-slider-disabled');
	      }
	    },
	    tooltipInit: function tooltipInit() {
	      var tooltip = this.$els.minSlider.parentNode.parentNode.nextElementSibling;
	
	      tooltip.style.left = 0;
	      tooltip.style.top = 0;
	      tooltip.querySelectorAll('.' + this.prefixCls + '-tooltip-inner')[0].innerHTML = this.formatter(this.value);
	
	      if (this.orientation === 'horizontal') {
	        tooltip.classList.add(this.prefixCls + '-slider-top');
	        tooltip.classList.remove(this.prefixCls + '-slider-right');
	      } else if (this.orientation === 'vertical') {
	        tooltip.classList.add(this.prefixCls + '-slider-right');
	        tooltip.classList.remove(this.prefixCls + '-slider-top');
	      }
	      if (this.tooltip === 'always') {
	        tooltip.classList.add(this.prefixCls + '-slider-tooltip-always');
	        tooltip.classList.remove(this.prefixCls + '-slider-tooltip-hide');
	      } else if (this.tooltip === 'hide') {
	        tooltip.classList.add(this.prefixCls + '-slider-tooltip-hide');
	        tooltip.classList.remove(this.prefixCls + '-slider-tooltip-always');
	      }
	    },
	    init: function init() {
	      var bar = this.$els.minSlider;
	      var rangeSlider = this.$els.slider;
	      var maxBar = this.$els.maxSlider;
	
	      this.startDrag(bar, maxBar, rangeSlider);
	      this.tooltipInit();
	      this.setTempValue();
	      this.setPosition();
	    }
	  },
	  ready: function ready() {
	    this.init();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._mousemoveEvent) {
	      this._mousemoveEvent.remove();
	    }
	    if (this._mousedownEvent) {
	      this._mousedownEvent.remove();
	    }
	    if (this._mouseupEvent) {
	      this._mouseupEvent.remove();
	    }
	  },
	
	  components: {
	    n3Tooltip: _n3Tooltip2.default,
	    validate: _validate2.default
	  }
	};
	// </script>
	// <template>
	// <div class="inline">
	//     <div :class="classObj" v-el:slider>
	//       <n3-tooltip  :placement="orientation === 'horizontal' ? 'top' : 'right'" :noresize="true" trigger="mouse">
	//         <div class="{{prefixCls}}-slider-track">
	//           <div class="{{prefixCls}}-slider-track-low"></div>
	//           <div class="{{prefixCls}}-slider-selection" v-el:selection></div>
	//           <div class="{{prefixCls}}-slider-track-high" v-el:no-selection></div>
	//           <div class="{{prefixCls}}-slider-handle {{prefixCls}}-slider-min-slider-handle {{prefixCls}}-slider-round" v-el:min-slider></div>
	//           <div class="{{prefixCls}}-slider-handle {{prefixCls}}-slider-max-slider-handle {{prefixCls}}-slider-round" v-el:max-slider></div>
	//         </div>
	//       </n3-tooltip>
	//     </div>
	//   <input type="hidden" v-model="value">
	//   <validate
	//     :name="name"
	//     :rules="rules"
	//     :valid-status.sync="validStatus"
	//     :custom-validate="customValidate" 
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	// </div>
	// </template>
	
	// <script>

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(180)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(182)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tooltip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tooltip.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tooltip.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tooltip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tooltip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(181);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  mixins: [_popoverMixins2.default],
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var placement = this.placement;
	
	      var klass = {};
	
	      klass[prefixCls + '-tooltip'] = true;
	      klass[prefixCls + '-tooltip-top'] = placement === 'top';
	      klass[prefixCls + '-tooltip-left'] = placement === 'left';
	      klass[prefixCls + '-tooltip-right'] = placement === 'right';
	      klass[prefixCls + '-tooltip-bottom'] = placement === 'bottom';
	
	      return klass;
	    }
	  }
	};
	// </script>
	// <template>
	// <span >
	//   <span v-el:trigger >
	//     <slot>
	//     </slot>
	//   </span>
	//   <div :class="classObj"
	//     v-el:popover
	//     v-show="show"
	//     :transition="effect">
	//     <div class="{{prefixCls}}-tooltip-arrow"></div>
	//     <div class="{{prefixCls}}-tooltip-inner">
	//       {{{content}}}
	//     </div>
	//   </div>
	// </span>
	// </template>
	
	// <script>

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PopoverMixin = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    effect: {
	      type: String,
	      default: 'scale'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      default: true
	    },
	    placement: {
	      type: String
	    },
	    noresize: {
	      type: Boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      twoWay: true,
	      default: true
	    },
	    onClick: {
	      type: Function
	    }
	  },
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      }
	    };
	  },
	
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (val && !this.noresize) {
	        this.$nextTick(function () {
	          _this.resize();
	        });
	      }
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	    },
	    resize: function resize() {
	      var popover = this.$els.popover;
	      var triger = this.$els.trigger.children[0];
	      popover.style.display = 'block';
	      triger.style.position = 'relative';
	
	      switch (this.placement) {
	        case 'top':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	          this.position.top = triger.offsetTop - popover.offsetHeight;
	          break;
	        case 'left':
	          this.position.left = triger.offsetLeft - popover.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	          break;
	        case 'right':
	          this.position.left = triger.offsetLeft + triger.offsetWidth;
	          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
	          break;
	        case 'bottom':
	          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
	          this.position.top = triger.offsetTop + triger.offsetHeight;
	          break;
	        default:
	          console.log('Wrong placement prop');
	      }
	      popover.style.top = this.position.top + 'px';
	      popover.style.left = this.position.left + 'px';
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    if (!this.$els.popover) return;
	    var popover = this.$els.popover;
	    var triger = this.$els.trigger.children[0];
	    if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        return _this2.show = true;
	      });
	      this._mouseleaveEvent = _EventListener2.default.listen(triger, 'mouseleave', function () {
	        return _this2.show = false;
	      });
	    } else if (this.trigger === 'focus') {
	      var input = this.$els.trigger.querySelector('input');
	      if (input) {
	        this._focusEvent = _EventListener2.default.listen(input, 'focus', function () {
	          return _this2.show = true;
	        });
	        this._blurEvent = _EventListener2.default.listen(input, 'blur', function () {
	          return _this2.show = false;
	        });
	      }
	    } else if (this.trigger === 'mouse') {
	      this._mousedownEvent = _EventListener2.default.listen(triger, 'mousedown', function () {
	        return _this2.show = true;
	      });
	      this._mouseupEvent = _EventListener2.default.listen(window, 'mouseup', function () {
	        return _this2.show = false;
	      });
	    } else {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggle);
	      this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	        if (!_this2.$el.contains(e.target)) _this2.show = false;
	        if (_this2.$els.content && _this2.$els.content.contains(e.target) && _getType2.default.isFunction(_this2.onClick)) {
	          _this2.onClick(e, _this2);
	        }
	      });
	    }
	    this.resize();
	    popover.style.display = 'none';
	    this.show = false;
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }
	    if (this._mouseenterEvent) {
	      this._mouseenterEvent.remove();
	      this._mouseleaveEvent.remove();
	    }
	    if (this._clickEvent) {
	      this._clickEvent.remove();
	      this._closeEvent.remove();
	    }
	    if (this._mousedownEvent) {
	      this._mousedownEvent.remove();
	      this._mouseupEvent.remove();
	    }
	  }
	};
	
	exports.default = PopoverMixin;

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = "<span >\n  <span v-el:trigger >\n    <slot>\n    </slot>\n  </span>\n  <div :class=\"classObj\"\n    v-el:popover\n    v-show=\"show\"\n    :transition=\"effect\">\n    <div class=\"{{prefixCls}}-tooltip-arrow\"></div>\n    <div class=\"{{prefixCls}}-tooltip-inner\">\n      {{{content}}}\n    </div>\n  </div>\n</span>";

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "<div class=\"inline\">\n    <div :class=\"classObj\" v-el:slider>\n      <n3-tooltip  :placement=\"orientation === 'horizontal' ? 'top' : 'right'\" :noresize=\"true\" trigger=\"mouse\">\n        <div class=\"{{prefixCls}}-slider-track\">\n          <div class=\"{{prefixCls}}-slider-track-low\"></div>\n          <div class=\"{{prefixCls}}-slider-selection\" v-el:selection></div>\n          <div class=\"{{prefixCls}}-slider-track-high\" v-el:no-selection></div>\n          <div class=\"{{prefixCls}}-slider-handle {{prefixCls}}-slider-min-slider-handle {{prefixCls}}-slider-round\" v-el:min-slider></div>\n          <div class=\"{{prefixCls}}-slider-handle {{prefixCls}}-slider-max-slider-handle {{prefixCls}}-slider-round\" v-el:max-slider></div>\n        </div>\n      </n3-tooltip>\n    </div>\n  <input type=\"hidden\" v-model=\"value\">\n  <validate\n    :name=\"name\"\n    :rules=\"rules\"\n    :valid-status.sync=\"validStatus\"\n    :custom-validate=\"customValidate\" \n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n</div>";

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-timepicker\">\n    <n3-input \n      :width=\"width\"\n      :name=\"name\" \n      :rules=\"rules\" \n      :validate=\"validate\" \n      :has-feedback=\"hasFeedback\"\n      :placeholder=\"placeholder\"\n      :custom-validate=\"customValidate\"\n      :readonly=\"true\"\n      :disabled=\"disabled\"\n      @click=\"inputClick\"\n      :value.sync=\"value\">\n    </n3-input>\n    <div class=\"{{prefixCls}}-timepicker-popup\" v-show=\"show\" transition=\"fadeDown\">\n      <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"hour\" data-role=\"hour\">\n        <n3-slider \n          :value.sync=\"time.hour\" \n          orientation=\"vertical\" \n          :max=\"hourRange[1]\" :min=\"hourRange[0]\"  \n          class=\"{{prefixCls}}-timepicker-slider\">\n        </n3-slider>\n      </div>\n      <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"minute\" data-role=\"minute\">\n        <n3-slider \n          :value.sync=\"time.minute\" \n          orientation=\"vertical\" \n          :max=\"minuteRange[1]\" \n          :min=\"minuteRange[0]\"  \n          class=\"{{prefixCls}}-timepicker-slider\">\n        </n3-slider>\n      </div>\n      <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"second\" data-role=\"second\">\n        <n3-slider \n          :value.sync=\"time.second\" \n          orientation=\"vertical\" \n          :max=\"secondRange[1]\" \n          :min=\"secondRange[0]\" \n          class=\"{{prefixCls}}-timepicker-slider\">\n        </n3-slider>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(186)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(187)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datetimepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datetimepicker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Datetimepicker.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Datetimepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Datetimepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Slider = __webpack_require__(177);
	
	var _n3Slider2 = _interopRequireDefault(_n3Slider);
	
	var _n3Input = __webpack_require__(154);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _inputMixin = __webpack_require__(156);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_inputMixin2.default],
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'yyyy-MM-dd hh:mm:ss'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    hourRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 23];
	      }
	    },
	    minuteRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 59];
	      }
	    },
	    secondRange: {
	      type: Array,
	      default: function _default() {
	        return [0, 59];
	      }
	    },
	    onHide: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      weekRange: ['日', '一', '二', '三', '四', '五', '六'],
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: false,
	      displayMouthView: false,
	      displayYearView: false,
	      time: {
	        hour: 0,
	        minute: 0,
	        second: 0
	      },
	      date: '',
	      mouthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	    };
	  },
	
	  watch: {
	    displayDayView: function displayDayView() {
	      this.dispatchHide();
	    },
	    displayMouthView: function displayMouthView() {
	      this.dispatchHide();
	    },
	    displayYearView: function displayYearView() {
	      this.dispatchHide();
	    },
	    currDate: function currDate() {
	      this.getDateRange();
	    },
	    date: function date() {
	      this.value = this.date + ' ' + this.handTime();
	    },
	
	    time: {
	      deep: true,
	      handler: function handler(val) {
	        this.value = this.date + ' ' + this.handTime();
	      }
	    }
	  },
	  computed: {
	    popWidth: function popWidth() {
	      var width = 293;
	      this.hour ? width += 44 : 0;
	      this.minute ? width += 44 : 0;
	      this.second ? width += 44 : 0;
	
	      return width + 'px';
	    },
	    hour: function hour() {
	      if (this.format.indexOf('hh') > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    minute: function minute() {
	      if (this.format.indexOf('mm') > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    },
	    second: function second() {
	      if (this.format.indexOf('ss') > -1) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  },
	  methods: {
	    monthClassobj: function monthClassobj(m) {
	      var prefixCls = this.prefixCls;
	      var date = this.date;
	      var mouthNames = this.mouthNames;
	      var parse = this.parse;
	      var currDate = this.currDate;
	
	      var klass = {};
	
	      klass[prefixCls + '-datepicker-dateRange-item-active'] = date && parse(date) && mouthNames[parse(date).getMonth()] === m && currDate.getFullYear() === parse(date).getFullYear();
	
	      return klass;
	    },
	    yearClassobj: function yearClassobj(decade) {
	      var prefixCls = this.prefixCls;
	      var date = this.date;
	      var parse = this.parse;
	
	      var klass = {};
	
	      klass[prefixCls + '-datepicker-dateRange-item-active'] = date && parse(date) && parse(date).getFullYear() === decade.text;
	
	      return klass;
	    },
	    dispatchHide: function dispatchHide() {
	      var show = this.displayDayView || this.displayMouthView || this.displayYearView;
	      if (!show) {
	        this.$dispatch('hide', this.value);
	        if (_getType2.default.isFunction(this.onHide)) {
	          this.onHide();
	        }
	      }
	    },
	    close: function close() {
	      this.displayDayView = this.displayMouthView = this.displayMouthView = false;
	    },
	    handTime: function handTime() {
	      var ret = '';
	      this.time.hour > this.hourRange[1] ? this.time.hour = this.hourRange[1] : 0;
	      this.time.minute > this.minuteRange[1] ? this.time.minute = this.minuteRange[1] : 0;
	      this.time.second > this.secondRange[1] ? this.time.second = this.secondRange[1] : 0;
	      this.time.hour < this.hourRange[0] ? this.time.hour = this.hourRange[0] : 0;
	      this.time.minute < this.minuteRange[0] ? this.time.minute = this.minuteRange[0] : 0;
	      this.time.second < this.secondRange[0] ? this.time.second = this.secondRange[0] : 0;
	
	      if (this.hour) {
	        ret += this.fix(this.time.hour, 2) + ':';
	      }
	
	      if (this.minute) {
	        ret += this.fix(this.time.minute, 2) + ':';
	      }
	
	      if (this.second) {
	        ret += this.fix(this.time.second, 2) + ':';
	      }
	
	      return ret.substr(0, ret.length - 1);
	    },
	    fix: function fix(num, length) {
	      num = parseInt(num);
	      num = num == NaN ? 0 : num;
	      return ('' + num).length < length ? (new Array(length + 1).join('0') + num).slice(-length) : '' + num;
	    },
	    inputClick: function inputClick() {
	      if (this.disabled) return;
	      if (this.displayMouthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, mouths, date);
	      } else {
	        this.currDate = new Date(year + 10, mouths, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var mouths = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, mouths, date);
	      } else {
	        this.currDate = new Date(year + 1, mouths, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMouthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, klass) {
	      if (klass.indexOf(this.prefixCls + '-datepicker-item-disable') > -1) {
	        return false;
	      } else {
	        this.currDate = date;
	        this.date = this.stringify(this.currDate);
	      }
	    },
	    switchMouthView: function switchMouthView() {
	      this.displayDayView = false;
	      this.displayMouthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMouthView = false;
	      this.displayYearView = true;
	    },
	    mouthSelect: function mouthSelect(index) {
	      this.displayMouthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMouth: function parseMouth(date) {
	      return this.mouthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringifyTime: function stringifyTime(date) {
	      var hour = date.getHours();
	      var minute = date.getMinutes();
	      var second = date.getSeconds();
	
	      return {
	        hour: hour,
	        minute: minute,
	        second: second
	      };
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
	
	      if (isNaN(date.getFullYear())) return '';
	      var dateFormat = format.split(/\s+/)[0];
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	
	      return dateFormat.replace(/yyyy/g, year).replace(/MMMM/g, month).replace(/MMM/g, month).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      var date = new Date(str);
	      return isNaN(date.getFullYear()) ? null : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
	      }
	
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var _this = this;
	
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: this.prefixCls + '-datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(_i2) {
	        var date = new Date(time.year, time.month, _i2);
	        var week = date.getDay();
	        var sclass = '';
	        _this.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = _this.prefixCls + '-datepicker-item-disable';
	        });
	
	        if (_i2 === time.day) {
	          if (_this.date) {
	            var valueDate = _this.parse(_this.date);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = _this.prefixCls + '-datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this.dateRange.push({
	          text: _i2,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        _loop(_i2);
	      }
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          this.dateRange.push({
	            text: _i3,
	            date: new Date(nextMonth.year, nextMonth.month, _i3),
	            sclass: this.prefixCls + '-datepicker-item-gray'
	          });
	        }
	      }
	    }
	  },
	  created: function created() {
	    if (this.value) {
	      this.date = this.stringify(new Date(this.value));
	      this.time = this.stringifyTime(new Date(this.value));
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var self = this;
	    this.currDate = this.parse(this.date) || this.parse(new Date());
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!self.displayDayView && !self.displayMouthView && !self.displayMouthView) {
	        return;
	      }
	      var check = e.target.className.indexOf(_this2.prefixCls + '-datetimepicker-date-span') > -1;
	      if (!self.$el.contains(e.target) && !check) self.close();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	
	  components: {
	    n3Slider: _n3Slider2.default,
	    n3Input: _n3Input2.default
	  },
	  filters: {
	    fix: {
	      read: function read(val) {
	        return this.fix(val, 2);
	      },
	      write: function write(val) {
	        return parseInt(val);
	      }
	    }
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-datepicker {{prefixCls}}-timepicker {{prefixCls}}-datetimepicker" v-el:datetimepicker>
	//     <n3-input
	//       :width="width"
	//       :name="name" 
	//       :rules="rules" 
	//       :validate="validate" 
	//       :has-feedback="hasFeedback"
	//       :placeholder="placeholder"
	//       :custom-validate="customValidate"
	//       :readonly="true"
	//       :disabled="disabled"
	//       @click="inputClick"
	//       :value.sync="value">
	//     </n3-input>
	//       <div 
	//         class="{{prefixCls}}-datepicker-popup" 
	//         v-show="displayDayView" 
	//         :style="{width:popWidth}" 
	//         transition="fadeDown">
	//           <div class="{{prefixCls}}-datepicker-inner">
	//               <div class="{{prefixCls}}-datepicker-body">
	//                   <div class="{{prefixCls}}-datepicker-ctrl">
	//                       <span 
	//                         class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                         @click="preNextMonthClick(0)">&lt;</span>
	//                       <span 
	//                         class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                         @click="preNextMonthClick(1)">&gt;</span>
	//                       <p @click="switchMouthView">
	//                       {{stringifyDayHeader(currDate)}}
	//                       </p>
	//                   </div>
	//                   <div class="{{prefixCls}}-datepicker-weekRange">
	//                       <span v-for="w in weekRange">{{w}}</span>
	//                   </div>
	//                   <div class="{{prefixCls}}-datepicker-dateRange">
	//                       <span v-for="d in dateRange" 
	//                       :class="[d.sclass,prefixCls + '-datetimepicker-date-span']" 
	//                       @click="daySelect(d.date,d.sclass)">{{d.text}}</span>
	//                   </div>
	//               </div>
	//           </div>
	//           <div class="{{prefixCls}}-timepicker-con">
	//             <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="hour" data-role="hour">
	//               <n3-slider 
	//                 :value.sync="time.hour" 
	//                 orientation="vertical" 
	//                 :max="hourRange[1]" 
	//                 :min="hourRange[0]" >
	//               </n3-slider>
	//             </div>
	//             <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="minute" data-role="minute">
	//               <n3-slider 
	//                 :value.sync="time.minute" 
	//                 orientation="vertical" 
	//                 :max="minuteRange[1]" 
	//                 :min="minuteRange[0]" >
	//               </n3-slider>
	//             </div>
	//             <div class="{{prefixCls}}-timepicker-slider-sin-wrap" v-if="second" data-role="second">
	//               <n3-slider 
	//                 :value.sync="time.second" 
	//                 orientation="vertical" 
	//                 :max="secondRange[1]" 
	//                 :min="secondRange[0]" >
	//               </n3-slider>
	//             </div>
	//           </div>
	//       </div>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show="displayMouthView">
	//         <div class="{{prefixCls}}-datepicker-inner">
	//             <div class="{{prefixCls}}-datepicker-body">
	//                 <div class="{{prefixCls}}-datepicker-ctrl">
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn" 
	//                       @click="preNextYearClick(0)">&lt;</span>
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                       @click="preNextYearClick(1)">&gt;</span>
	//                     <p @click="switchDecadeView">
	//                     {{stringifyYearHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="{{prefixCls}}-datepicker-mouthRange">
	//                 	<template v-for="m in mouthNames">
	// 	                    <span 
	//                         :class="monthClassobj(m)"
	//                         @click="mouthSelect($index)">
	// 	                      {{m.substr(0,3)}}
	// 	                    </span>
	//                     </template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	//       <div class="{{prefixCls}}-datepicker-popup" v-show="displayYearView">
	//         <div class="{{prefixCls}}-datepicker-inner">
	//             <div class="{{prefixCls}}-datepicker-body">
	//                 <div class="{{prefixCls}}-datepicker-ctrl">
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn"
	//                       @click="preNextDecadeClick(0)">&lt;</span>
	//                     <span 
	//                       class="{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn" 
	//                       @click="preNextDecadeClick(1)">&gt;</span>
	//                     <p>
	//                     {{stringifyDecadeHeader(currDate)}}
	//                     </p>
	//                 </div>
	//                 <div class="{{prefixCls}}-datepicker-mouthRange {{prefixCls}}-datepicker-decadeRange">
	//                 	<template v-for="decade in decadeRange">
	//                 		<span
	//                       :class="yearClassobj(decade)"
	// 	                    @click.stop="yearSelect(decade.text)">
	// 	                      {{decade.text}}
	// 	                  </span>
	// 					        </template>
	//                 </div>
	//             </div>
	//         </div>
	//       </div>
	// </div>
	// </template>
	
	// <script>

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-datepicker {{prefixCls}}-timepicker {{prefixCls}}-datetimepicker\" v-el:datetimepicker>\n    <n3-input\n      :width=\"width\"\n      :name=\"name\" \n      :rules=\"rules\" \n      :validate=\"validate\" \n      :has-feedback=\"hasFeedback\"\n      :placeholder=\"placeholder\"\n      :custom-validate=\"customValidate\"\n      :readonly=\"true\"\n      :disabled=\"disabled\"\n      @click=\"inputClick\"\n      :value.sync=\"value\">\n    </n3-input>\n      <div \n        class=\"{{prefixCls}}-datepicker-popup\" \n        v-show=\"displayDayView\" \n        :style=\"{width:popWidth}\" \n        transition=\"fadeDown\">\n          <div class=\"{{prefixCls}}-datepicker-inner\">\n              <div class=\"{{prefixCls}}-datepicker-body\">\n                  <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                      <span \n                        class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                        @click=\"preNextMonthClick(0)\">&lt;</span>\n                      <span \n                        class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                        @click=\"preNextMonthClick(1)\">&gt;</span>\n                      <p @click=\"switchMouthView\">\n                      {{stringifyDayHeader(currDate)}}\n                      </p>\n                  </div>\n                  <div class=\"{{prefixCls}}-datepicker-weekRange\">\n                      <span v-for=\"w in weekRange\">{{w}}</span>\n                  </div>\n                  <div class=\"{{prefixCls}}-datepicker-dateRange\">\n                      <span v-for=\"d in dateRange\" \n                      :class=\"[d.sclass,prefixCls + '-datetimepicker-date-span']\" \n                      @click=\"daySelect(d.date,d.sclass)\">{{d.text}}</span>\n                  </div>\n              </div>\n          </div>\n          <div class=\"{{prefixCls}}-timepicker-con\">\n            <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"hour\" data-role=\"hour\">\n              <n3-slider \n                :value.sync=\"time.hour\" \n                orientation=\"vertical\" \n                :max=\"hourRange[1]\" \n                :min=\"hourRange[0]\" >\n              </n3-slider>\n            </div>\n            <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"minute\" data-role=\"minute\">\n              <n3-slider \n                :value.sync=\"time.minute\" \n                orientation=\"vertical\" \n                :max=\"minuteRange[1]\" \n                :min=\"minuteRange[0]\" >\n              </n3-slider>\n            </div>\n            <div class=\"{{prefixCls}}-timepicker-slider-sin-wrap\" v-if=\"second\" data-role=\"second\">\n              <n3-slider \n                :value.sync=\"time.second\" \n                orientation=\"vertical\" \n                :max=\"secondRange[1]\" \n                :min=\"secondRange[0]\" >\n              </n3-slider>\n            </div>\n          </div>\n      </div>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show=\"displayMouthView\">\n        <div class=\"{{prefixCls}}-datepicker-inner\">\n            <div class=\"{{prefixCls}}-datepicker-body\">\n                <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\" \n                      @click=\"preNextYearClick(0)\">&lt;</span>\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                      @click=\"preNextYearClick(1)\">&gt;</span>\n                    <p @click=\"switchDecadeView\">\n                    {{stringifyYearHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"{{prefixCls}}-datepicker-mouthRange\">\n                \t<template v-for=\"m in mouthNames\">\n\t                    <span \n                        :class=\"monthClassobj(m)\"\n                        @click=\"mouthSelect($index)\">\n\t                      {{m.substr(0,3)}}\n\t                    </span>\n                    </template>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"{{prefixCls}}-datepicker-popup\" v-show=\"displayYearView\">\n        <div class=\"{{prefixCls}}-datepicker-inner\">\n            <div class=\"{{prefixCls}}-datepicker-body\">\n                <div class=\"{{prefixCls}}-datepicker-ctrl\">\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-preBtn\"\n                      @click=\"preNextDecadeClick(0)\">&lt;</span>\n                    <span \n                      class=\"{{prefixCls}}-month-btn {{prefixCls}}-datepicker-nextBtn\" \n                      @click=\"preNextDecadeClick(1)\">&gt;</span>\n                    <p>\n                    {{stringifyDecadeHeader(currDate)}}\n                    </p>\n                </div>\n                <div class=\"{{prefixCls}}-datepicker-mouthRange {{prefixCls}}-datepicker-decadeRange\">\n                \t<template v-for=\"decade in decadeRange\">\n                \t\t<span\n                      :class=\"yearClassobj(decade)\"\n\t                    @click.stop=\"yearSelect(decade.text)\">\n\t                      {{decade.text}}\n\t                  </span>\n\t\t\t\t\t        </template>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>";

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(189)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(190)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Dropdown.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Dropdown.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Dropdown.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Dropdown.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Dropdown.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      twoWay: true
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    clickClose: {
	      type: Boolean,
	      default: false
	    },
	    effect: {
	      type: String,
	      default: 'fadeDown'
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  methods: {
	    toggleDropdown: function toggleDropdown() {
	      this.show = !this.show;
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var el = this.$el;
	    var triger = this.$els.trigger.children[0];
	
	    if (this.trigger === 'click') {
	      this._clickEvent = _EventListener2.default.listen(triger, 'click', this.toggleDropdown);
	      this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	        if (!_this.clickClose && !el.contains(e.target)) _this.show = false;
	      });
	    } else if (this.trigger === 'hover') {
	      this._mouseenterEvent = _EventListener2.default.listen(triger, 'mouseenter', function () {
	        return _this.show = true;
	      });
	      this._closeEvent = _EventListener2.default.listen(this.$el, 'mouseleave', function () {
	        return _this.show = false;
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	    if (this._clickEvent) this._clickEvent.remove();
	    if (this._mouseenterEvent) this._mouseenterEvent.remove();
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-dropdown-con">   
	//     <span v-el:trigger> 
	//       <slot name="trigger" ></slot>
	//     </span>
	//     <ul class="{{prefixCls}}-dropdown-menu" v-show="show" :transition="effect">
	//       <slot></slot>
	//     </ul>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-dropdown-con\">   \n    <span v-el:trigger> \n      <slot name=\"trigger\" ></slot>\n    </span>\n    <ul class=\"{{prefixCls}}-dropdown-menu\" v-show=\"show\" :transition=\"effect\">\n      <slot></slot>\n    </ul>\n  </div>";

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(192)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(193)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Modal.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Modal.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Modal.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Modal.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Modal.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getScrollBarWidth = __webpack_require__(128);
	
	var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Button = __webpack_require__(137);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="classObj">
	//     <div class="{{prefixCls}}-modal-dialog" 
	//       :style="{'width': width}">
	//       <div class="{{prefixCls}}-modal-content">
	//         <slot name="header">
	//           <div class="{{prefixCls}}-modal-header">
	//             <button type="button" class="{{prefixCls}}-close" @click="close"><span>&times;</span></button>
	//             <h4 class="{{prefixCls}}-modal-title" >{{title}}</h4>
	//           </div>
	//         </slot>
	
	//         <div class="{{prefixCls}}-modal-body">
	//           <slot name="body"></slot>
	//         </div>
	
	
	//         <slot name="footer">
	//           <div class="{{prefixCls}}-modal-footer">
	//             <n3-button  @click="close">取消</n3-button>
	//             <n3-button type="primary" @click="confirm">确定</n3-button>
	//           </div>
	//         </slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    show: {
	      require: true,
	      type: Boolean,
	      twoWay: true
	    },
	    width: {
	      type: String,
	      default: '600px'
	    },
	    effect: {
	      type: String,
	      default: 'fade'
	    },
	    backdrop: {
	      type: Boolean,
	      default: true
	    },
	    onShow: {
	      type: Function
	    },
	    onHide: {
	      type: Function
	    },
	    onConfirm: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    n3Button: _n3Button2.default
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var effect = this.effect;
	
	      var klass = {};
	
	      klass[prefixCls + '-modal'] = true;
	      klass[prefixCls + '-modal-' + effect] = true;
	
	      return klass;
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (val) {
	        if (_getType2.default.isFunction(this.onShow)) {
	          this.onShow();
	        }
	      } else {
	        if (_getType2.default.isFunction(this.onHide)) {
	          this.onHide();
	        }
	      }
	
	      var el = this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _getScrollBarWidth2.default)();
	      if (val) {
	        el.querySelector('.' + this.prefixCls + '-modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return el.classList.add(_this.prefixCls + '-modal-in');
	        }, 0);
	        body.classList.add(this.prefixCls + '-modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        if (this.backdrop) {
	          this._blurModalContentEvent = _EventListener2.default.listen(this.$el, 'click', function (e) {
	            if (e.target === el) _this.show = false;
	          });
	        }
	      } else {
	        if (this._blurModalContentEvent) this._blurModalContentEvent.remove();
	        el.classList.remove(this.prefixCls + '-modal-in');
	        setTimeout(function () {
	          el.style.display = 'none';
	          body.classList.remove(_this.prefixCls + '-modal-open');
	          body.style.paddingRight = '0';
	        }, 300);
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    },
	    confirm: function confirm() {
	      if (_getType2.default.isFunction(this.onConfirm)) {
	        this.onConfirm();
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 193 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\">\n    <div class=\"{{prefixCls}}-modal-dialog\" \n      :style=\"{'width': width}\">\n      <div class=\"{{prefixCls}}-modal-content\">\n        <slot name=\"header\">\n          <div class=\"{{prefixCls}}-modal-header\">\n            <button type=\"button\" class=\"{{prefixCls}}-close\" @click=\"close\"><span>&times;</span></button>\n            <h4 class=\"{{prefixCls}}-modal-title\" >{{title}}</h4>\n          </div>\n        </slot>\n        \n        <div class=\"{{prefixCls}}-modal-body\">\n          <slot name=\"body\"></slot>\n        </div>\n        \n        \n        <slot name=\"footer\">\n          <div class=\"{{prefixCls}}-modal-footer\">\n            <n3-button  @click=\"close\">取消</n3-button>\n            <n3-button type=\"primary\" @click=\"confirm\">确定</n3-button>\n          </div>\n        </slot>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(195)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(196)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Option.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Option.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Option.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Option.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Option.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 195 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :value="value" class="{{prefixCls}}-option">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = "<div :value=\"value\" class=\"{{prefixCls}}-option\">\n    <slot></slot>\n  </div>";

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(198)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(199)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Panel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Panel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Panel.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Panel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Panel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    isOpen: {
	      type: Boolean,
	      default: false
	    },
	    header: {
	      type: String
	    },
	    index: {},
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      height: 0
	    };
	  },
	
	  methods: {
	    toggleIsOpen: function toggleIsOpen() {
	      this.isOpen = !this.isOpen;
	      this.$dispatch('n3@paneltoggle', this);
	
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange({
	          index: this.index,
	          header: this.header,
	          isOpen: this.isOpen
	        });
	      }
	    }
	  },
	  ready: function ready() {
	    var panel = this.$els.panel;
	    panel.style.display = 'block';
	    if (!this.isOpen) panel.style.display = 'none';
	  }
	};
	// </script>
	// <template>
	// <div class="{{prefixCls}}-panel {{prefixCls}}-panel-default">
	//     <div class="{{prefixCls}}-panel-heading">
	//       <h4 class="{{prefixCls}}-panel-title">
	//         <a @click="toggleIsOpen()">
	//            {{ header }}
	//         </a>
	//       </h4>
	//     </div>
	//     <div 
	//       class="{{prefixCls}}-panel-collapse"
	//       v-el:panel
	//       v-show="isOpen"
	//       :transition="$parent.effect">
	//       <div class="{{prefixCls}}-panel-body">
	//         <slot></slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	
	// <script>

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-panel {{prefixCls}}-panel-default\">\n    <div class=\"{{prefixCls}}-panel-heading\">\n      <h4 class=\"{{prefixCls}}-panel-title\">\n        <a @click=\"toggleIsOpen()\">\n           {{ header }}\n        </a>\n      </h4>\n    </div>\n    <div \n      class=\"{{prefixCls}}-panel-collapse\"\n      v-el:panel\n      v-show=\"isOpen\"\n      :transition=\"$parent.effect\">\n      <div class=\"{{prefixCls}}-panel-body\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(201)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(202)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Popover.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Popover.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Popover.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Popover.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Popover.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(181);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  mixins: [_popoverMixins2.default],
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var placement = this.placement;
	
	      var klass = {};
	
	      klass[prefixCls + '-popover'] = true;
	      klass[prefixCls + '-popover-top'] = placement === 'top';
	      klass[prefixCls + '-popover-left'] = placement === 'left';
	      klass[prefixCls + '-popover-right'] = placement === 'right';
	      klass[prefixCls + '-popover-bottom'] = placement === 'bottom';
	
	      return klass;
	    }
	  }
	};
	// </script>
	// <template>
	// <span >
	//     <span v-el:trigger >
	//       <slot>
	//       </slot>
	//     </span>
	//     <div 
	//       style="max-width:none"
	//       :class="classObj"
	//       v-el:popover
	//       v-show="show"
	//       :transition="effect">
	//         <div class="{{prefixCls}}-popover-arrow"></div>
	//         <h3 class="{{prefixCls}}-popover-title" v-show="header">{{title}}</h3>
	//         <div class="{{prefixCls}}-popover-content" v-el:content>
	//          <slot name="content"></slot>
	//         </div>
	//     </div>
	// </span>
	// </template>
	
	// <script>

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "<span >\n    <span v-el:trigger >\n      <slot>\n      </slot>\n    </span>\n    <div \n      style=\"max-width:none\"\n      :class=\"classObj\"\n      v-el:popover\n      v-show=\"show\"\n      :transition=\"effect\">\n        <div class=\"{{prefixCls}}-popover-arrow\"></div>\n        <h3 class=\"{{prefixCls}}-popover-title\" v-show=\"header\">{{title}}</h3>\n        <div class=\"{{prefixCls}}-popover-content\" v-el:content>\n         <slot name=\"content\"></slot>\n        </div>\n    </div>\n</span>";

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(204)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(205)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3PopConfirm.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3PopConfirm.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3PopConfirm.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3PopConfirm.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3PopConfirm.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Popover = __webpack_require__(200);
	
	var _n3Popover2 = _interopRequireDefault(_n3Popover);
	
	var _n3Button = __webpack_require__(137);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<n3-popover 
	// 		:show.sync="show"
	//         :effect="effect"
	//         :header="false" 
	//         :placement="placement" 
	//         trigger="click">
	//         <div slot="content">
	//             <p>{{content}}</p>
	//             <div style="float:right;margin:10px;">
	//             <n3-button size="sm"  @click="show=false">{{cancelText}}</n3-button>
	//             <n3-button size="sm" type="primary" @click="confirm">{{okText}}</n3-button>
	//             </div>
	//         </div> 
	//         <slot></slot>
	//       </n3-popover>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    effect: {
	      type: String,
	      default: 'scale'
	    },
	    content: {
	      type: String
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    },
	    onConfirm: {
	      type: Function
	    },
	    okText: {
	      type: String,
	      default: '确定'
	    },
	    cancelText: {
	      type: String,
	      default: '取消'
	    }
	  },
	  data: function data() {
	    return {
	      show: true
	    };
	  },
	
	
	  methods: {
	    confirm: function confirm() {
	      if (typeof this.onConfirm === 'function') {
	        this.onConfirm(this);
	      }
	    }
	  },
	
	  components: {
	    n3Popover: _n3Popover2.default,
	    n3Button: _n3Button2.default
	  }
	};
	// </script>

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<n3-popover \n\t\t:show.sync=\"show\"\n        :effect=\"effect\"\n        :header=\"false\" \n        :placement=\"placement\" \n        trigger=\"click\">\n        <div slot=\"content\">\n            <p>{{content}}</p>\n            <div style=\"float:right;margin:10px;\">\n            <n3-button size=\"sm\"  @click=\"show=false\">{{cancelText}}</n3-button>\n            <n3-button size=\"sm\" type=\"primary\" @click=\"confirm\">{{okText}}</n3-button>\n            </div>\n        </div> \n        <slot></slot>\n      </n3-popover>";

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(207)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(208)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progressbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progressbar.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Progressbar.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progressbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Progressbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 207 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div 
	// 	  :class="classObj"
	// 	  :style="{width: now + '%',height: height}">
	// 	  {{label ? now + '%':'' }}
	// 	</div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    height: {
	      type: String,
	      default: '20px'
	    },
	    now: {
	      type: Number,
	      require: true
	    },
	    label: {
	      type: Boolean,
	      default: false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      default: false
	    },
	    animated: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var type = this.type;
	      var striped = this.striped;
	      var animated = this.animated;
	
	      var klass = {};
	
	      klass[prefixCls + '-progress-bar'] = true;
	      klass[prefixCls + '-progress-bar-' + type] = true;
	      klass[prefixCls + '-progress-bar-striped'] = striped;
	      klass[prefixCls + '-progress-bar-animated'] = animated;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "<div \n\t  :class=\"classObj\"\n\t  :style=\"{width: now + '%',height: height}\">\n\t  {{label ? now + '%':'' }}\n\t</div>";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(210)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(211)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progress.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progress.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Progress.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Progress.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Progress.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="{{prefixCls}}-progress">
	// 		<slot></slot>
	// 	</div>
	// </template>
	// <script>
	exports.default = {
		props: {
			prefixCls: {
				type: String,
				default: 'n3'
			}
		}
	};
	// </script>

/***/ },
/* 211 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-progress\">\n\t\t<slot></slot>\n\t</div>";

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(213)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(214)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Radio.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Radio.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Radio.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Radio.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Radio.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 213 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <label class="{{prefixCls}}-radio-con">
	//   <span :class="wrapClasses">
	//     <span class="{{prefixCls}}-radio-inner"></span> 
	//     <input 
	//     type="radio" 
	//     :disabled="disabled"
	//     :checked="!!checked"
	//     class="{{prefixCls}}-radio-input" 
	//     @click.prevent="handleClick" >
	//   </span>
	//   <span><slot></slot></span>
	// </label>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var klass = {};
	      var prefixCls = this.prefixCls;
	      var active = this.active;
	      var disabled = this.disabled;
	
	
	      klass[prefixCls + '-radio-span'] = true;
	      klass[prefixCls + '-radio-checked'] = active;
	      klass[prefixCls + '-radio-disabled'] = disabled;
	
	      return klass;
	    },
	    active: function active() {
	      return this.$parent.value === this.value;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.$parent.value = this.value;
	      if (typeof this.onChange === 'function') {
	        this.onChange(this.checked);
	      }
	    }
	  },
	  created: function created() {
	    if (this.checked) this.$parent.value = this.value;
	  }
	};
	// </script>

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<label class=\"{{prefixCls}}-radio-con\">\n  <span :class=\"wrapClasses\">\n    <span class=\"{{prefixCls}}-radio-inner\"></span> \n    <input \n    type=\"radio\" \n    :disabled=\"disabled\"\n    :checked=\"!!checked\"\n    class=\"{{prefixCls}}-radio-input\" \n    @click.prevent=\"handleClick\" >\n  </span>\n  <span><slot></slot></span>\n</label>";

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(216)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(217)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioBtn.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioBtn.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3RadioBtn.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioBtn.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3RadioBtn.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Button = __webpack_require__(137);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    value: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    type: function type() {
	      return this.$parent.type;
	    },
	    active: function active() {
	      return this.$parent.value === this.value;
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var active = this.active;
	
	      var klass = {};
	      klass[prefixCls + '-radio-btn'] = true;
	
	      return klass;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.$parent.value = this.value;
	      if (typeof this.onChange === 'function') {
	        this.onChange(this.value);
	      }
	    }
	  },
	  components: {
	    n3Button: _n3Button2.default
	  },
	  created: function created() {
	    if (this.checked) this.$parent.value = this.value;
	  }
	};
	// </script>
	// <template>
	//   <n3-button 
	//     @click.prevent="handleClick"
	//     :class="classObj" 
	//     :disabled="disabled"
	//     :active="active"
	//     :type="type">
	//     <slot></slot>
	//   </n3-button>
	// </template>
	
	// <script>

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "<n3-button \n    @click.prevent=\"handleClick\"\n    :class=\"classObj\" \n    :disabled=\"disabled\"\n    :active=\"active\"\n    :type=\"type\">\n    <slot></slot>\n  </n3-button>";

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(219)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(220)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3RadioGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3RadioGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3RadioGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Radio = __webpack_require__(212);
	
	var _n3Radio2 = _interopRequireDefault(_n3Radio);
	
	var _n3RadioBtn = __webpack_require__(215);
	
	var _n3RadioBtn2 = _interopRequireDefault(_n3RadioBtn);
	
	var _valMixin = __webpack_require__(147);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(148);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="{{prefixCls}}-btn-group {{prefixCls}}-radio-group">
	//     <template v-if="options">
	//         <n3-radio 
	//           v-if="type==='checkbox'" 
	//           v-for="item in options"
	//           :value="item.value"
	//           :checked="item.checked"
	//           :disabled="item.disabled">
	//           {{item.label}}
	//         </n3-radio>
	
	//          <n3-radio-btn 
	//          v-if="type==='button'" 
	//          v-for="item in options"
	//          :value="item.value"
	//          :checked="item.checked"
	//          :disabled="item.disabled">
	//          {{item.label}}
	//         </n3-radio-btn>
	
	//     </template>
	//     <template v-else>
	//     <slot></slot>
	//     </template>
	
	//     <validate
	//       :name="name"
	//       :rules="rules"
	//       :valid-status.sync="validStatus"
	//       :custom-validate="customValidate" 
	//       :value="value"
	//       :results.sync="validateResults">
	//     </validate>
	
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    color: {
	      type: String,
	      default: 'default'
	    },
	    type: {
	      type: String,
	      default: 'checkbox'
	    },
	    options: {
	      type: Array
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	
	  watch: {
	    value: function value() {
	      if (typeof this.onChange === 'function') {
	        this.onChange(this.value);
	      }
	    }
	  },
	
	  components: {
	    n3Radio: _n3Radio2.default,
	    n3RadioBtn: _n3RadioBtn2.default,
	    validate: _validate2.default
	  }
	};
	// </script>

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-btn-group {{prefixCls}}-radio-group\">\n    <template v-if=\"options\">\n        <n3-radio \n          v-if=\"type==='checkbox'\" \n          v-for=\"item in options\"\n          :value=\"item.value\"\n          :checked=\"item.checked\"\n          :disabled=\"item.disabled\">\n          {{item.label}}\n        </n3-radio>\n\n         <n3-radio-btn \n         v-if=\"type==='button'\" \n         v-for=\"item in options\"\n         :value=\"item.value\"\n         :checked=\"item.checked\"\n         :disabled=\"item.disabled\">\n         {{item.label}}\n        </n3-radio-btn>\n\n    </template>\n    <template v-else>\n    <slot></slot>\n    </template>\n\n    <validate\n      :name=\"name\"\n      :rules=\"rules\"\n      :valid-status.sync=\"validStatus\"\n      :custom-validate=\"customValidate\" \n      :value=\"value\"\n      :results.sync=\"validateResults\">\n    </validate>\n\n  </div>";

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(222)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(223)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Select.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Select.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Select.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Select.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Select.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventListener = __webpack_require__(118);
	
	var _EventListener2 = _interopRequireDefault(_EventListener);
	
	var _n3Button = __webpack_require__(137);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3Badge = __webpack_require__(142);
	
	var _n3Badge2 = _interopRequireDefault(_n3Badge);
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _n3Input = __webpack_require__(154);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _valMixin = __webpack_require__(147);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(148);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="{{prefixCls}}-btn-group {{prefixCls}}-select-group" >
	//     <n3-button  
	//       :style="{width:width}"
	//       :disabled="disabled"
	//       :size="size"
	//       class="{{prefixCls}}-dropdown-toggle"
	//       @click="toggleDropdown">
	
	//       <span  v-if="showPlaceholder || !showselected">{{placeholder}}</span>
	//       <span  v-if="showselected" >
	//         <template v-for="item in selectedItems">
	//           {{{format.call(this._context,item)}}}
	//         </template>
	//       </span>
	//       <n3-icon :type="show?'angle-up' : 'angle-down'" ></n3-icon>
	//       <n3-badge v-if="badge">{{badge}}</n3-badge>
	//     </n3-button>
	//     <ul 
	//       :style="{maxHeight:menuMaxHeight,width:menuWidth}" 
	//       class="{{prefixCls}}-dropdown-menu" 
	//       v-el:menu 
	//       v-show="show" 
	//       transition="fadeDown">
	//         <li v-if="search">
	//           <n3-input
	//             class="{{prefixCls}}-select-search"
	//             :placeholder="inputPlaceholder"
	//             :value.sync="searchText"
	//             @keydown.enter="addExtra"
	//           ></n3-input>
	//           <n3-icon type="plus-square-o" v-if="extra" @click="addExtra"></n3-icon>
	//         </li>
	//         <li v-if="multiple" class="{{prefixCls}}-select-all">
	//           <a @click.prevent="selectAll">
	//             全选
	//            <n3-icon type="check" v-show="allSelected"></n3-icon>
	//           </a>
	//         </li>
	
	//         <template v-if="options.length">
	//           <li v-for="option in options | filterSearch searchText " 
	//               :value="option.value" 
	//               style="position:relative">
	//             <a @click.prevent="select(option)" >
	//               {{{ option.label }}} 
	//               <n3-icon type="check" v-show="findIndex(option.value) !== -1"></n3-icon>
	//             </a>
	//           </li>
	//         </template>
	//         <slot v-else ></slot>
	//       <div class="{{prefixCls}}-notify" v-show="showNotify" transition="fade">最多选择 {{limit}} 项</div>
	//     </ul>
	//     <div class="clearfix"></div>
	//     <validate
	//       :name="name"
	//       :rules="rules"
	//       :valid-status.sync="validStatus"
	//       :custom-validate="customValidate" 
	//       :value="value"
	//       :results.sync="validateResults">
	//     </validate>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    readonly: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    showselected: {
	      type: Boolean,
	      default: true
	    },
	    inputPlaceholder: {
	      type: String,
	      default: '输入...'
	    },
	    size: {
	      type: String
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    options: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    value: {
	      twoWay: true
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    search: {
	      type: Boolean,
	      default: false
	    },
	    extra: {
	      type: Boolean,
	      default: false
	    },
	    limit: {
	      type: Number,
	      default: 1024
	    },
	    width: {
	      type: String
	    },
	    menuMaxHeight: {
	      type: String,
	      default: '300px'
	    },
	    menuWidth: {
	      type: String
	    },
	    onChange: {
	      type: Function
	    },
	    format: {
	      type: Function,
	      default: function _default(item) {
	        return item.label;
	      }
	    },
	    cancelled: {
	      type: Boolean,
	      default: true
	    },
	    badge: {
	      type: [String, Number]
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      searchText: '',
	      show: false,
	      showNotify: false
	    };
	  },
	
	  watch: {
	    value: function value() {
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange();
	      }
	    }
	  },
	  components: {
	    n3Button: _n3Button2.default,
	    n3Badge: _n3Badge2.default,
	    n3Icon: _n3Icon2.default,
	    n3Input: _n3Input2.default,
	    validate: _validate2.default
	  },
	  computed: {
	    valueArray: {
	      get: function get() {
	        var a;
	        if (_getType2.default.isArray(this.value)) {
	          a = this.value;
	        } else {
	          a = [this.value];
	        }
	        return this.findInOptions(a);
	      },
	      set: function set(value) {
	        var self = this;
	        if (this.multiple) {
	          var ret = [];
	          for (var i = 0; i < value.length; i++) {
	            ret.push(value[i].value);
	          }
	          var timeout = void 0;
	          if (timeout) clearTimeout(timeout);
	          if (ret.length > this.limit) {
	            this.showNotify = true;
	            this.remove(value, this.limit);
	            timeout = setTimeout(function () {
	              return self.showNotify = false;
	            }, 1000);
	          } else {
	            this.value = ret;
	          }
	        } else {
	          this.$dispatch('change');
	          this.value = value[0] ? value[0].value : '';
	        }
	      }
	    },
	    allSelected: function allSelected() {
	      var options = this.filter(this.options, this.searchText);
	      var values = this.value;
	
	      if (!values || options.length !== values.length || options.length === 0) {
	        return false;
	      }
	
	      for (var i = 0, l = options.length; i < l; i++) {
	        var value = options[i].value;
	        if (values.indexOf(value) === -1) {
	          return false;
	        }
	      }
	      return true;
	    },
	    selectedItems: function selectedItems() {
	      var ret = [];
	      var a = this.valueArray;
	
	      for (var i = 0; i < a.length; i++) {
	        ret.push(a[i]);
	      }
	      return ret;
	    },
	    showPlaceholder: function showPlaceholder() {
	      if (_getType2.default.isArray(this.value)) {
	        return this.value.length <= 0;
	      } else {
	        return _getType2.default.isNullOrUndefined(this.value) || this.value === '';
	      }
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    if (!this.options.length) {
	      var options = this.$els.menu.querySelectorAll('.' + this.prefixCls + '-option');
	      var ret = [];
	
	      for (var i = 0, l = options.length; i < l; i++) {
	        var value = options[i].getAttribute('value');
	        var label = options[i].innerHTML;
	
	        ret.push({ value: value, label: label });
	      }
	      this.options = ret;
	    }
	    this._closeEvent = _EventListener2.default.listen(window, 'click', function (e) {
	      if (!_this.$el.contains(e.target)) _this.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },
	
	  filters: {
	    filterSearch: function filterSearch(value, search) {
	      return this.filter(value, search);
	    }
	  },
	  methods: {
	    filter: function filter(value, search) {
	      if (search === '') return value;
	      var ret = [];
	      for (var i = 0, l = value.length; i < l; i++) {
	        if (value[i] && String(value[i].label).replace(/<.*?>/g, '').indexOf(search) > -1) {
	          ret.push(value[i]);
	        }
	      }
	      return ret;
	    },
	    selectAll: function selectAll() {
	      if (this.allSelected) {
	        this.valueArray = [];
	      } else {
	        this.valueArray = this.filter(this.options, this.searchText);
	      }
	    },
	    addExtra: function addExtra() {
	      if (this.extra && this.searchText.replace(/\s+$|^\s+/g, '')) {
	        this.options.push({ value: this.searchText, label: this.searchText });
	        this.add({ value: this.searchText, label: this.searchText });
	      }
	    },
	    findInOptions: function findInOptions(a) {
	      var options = this.options;
	      var ret = [];
	
	      for (var i = 0; i < a.length; i++) {
	        var s = this.find(a[i], options);
	        s != null ? ret.push(s) : 0;
	      }
	      return ret;
	    },
	    find: function find(v, array) {
	      var a = array || this.valueArray;
	      for (var i = 0; i < a.length; i++) {
	        if (v === a[i].value) {
	          return a[i];
	        }
	      }
	      return null;
	    },
	    findIndex: function findIndex(v, array) {
	      var a = array || this.valueArray;
	      for (var i = 0; i < a.length; i++) {
	        if (v === a[i].value) {
	          return i;
	        }
	      }
	      return -1;
	    },
	    add: function add(option) {
	      var a = this.valueArray.slice(0);
	      if (this.multiple) {
	        a.push(option);
	      } else {
	        a = [option];
	      }
	      this.valueArray = a;
	    },
	    remove: function remove(array, index, num) {
	      var a = array.slice(0);
	      num ? a.splice(index, num) : a.splice(index);
	      this.valueArray = a;
	    },
	    select: function select(option) {
	      var index = this.findIndex(option.value);
	      if (this.multiple) {
	        index === -1 ? this.add(option) : this.remove(this.valueArray, index, 1);
	      } else {
	        index === -1 ? this.valueArray = [option] : this.cancelled ? this.valueArray = [] : 0;
	        this.show = false;
	      }
	    },
	    toggleDropdown: function toggleDropdown() {
	      if (!this.disabled && !this.readonly) {
	        this.show = !this.show;
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-btn-group {{prefixCls}}-select-group\" >\n    <n3-button  \n      :style=\"{width:width}\"\n      :disabled=\"disabled\"\n      :size=\"size\"\n      class=\"{{prefixCls}}-dropdown-toggle\"\n      @click=\"toggleDropdown\">\n\n      <span  v-if=\"showPlaceholder || !showselected\">{{placeholder}}</span>\n      <span  v-if=\"showselected\" >\n        <template v-for=\"item in selectedItems\">\n          {{{format.call(this._context,item)}}}\n        </template>\n      </span>\n      <n3-icon :type=\"show?'angle-up' : 'angle-down'\" ></n3-icon>\n      <n3-badge v-if=\"badge\">{{badge}}</n3-badge>\n    </n3-button>\n    <ul \n      :style=\"{maxHeight:menuMaxHeight,width:menuWidth}\" \n      class=\"{{prefixCls}}-dropdown-menu\" \n      v-el:menu \n      v-show=\"show\" \n      transition=\"fadeDown\">\n        <li v-if=\"search\">\n          <n3-input\n            class=\"{{prefixCls}}-select-search\"\n            :placeholder=\"inputPlaceholder\"\n            :value.sync=\"searchText\"\n            @keydown.enter=\"addExtra\"\n          ></n3-input>\n          <n3-icon type=\"plus-square-o\" v-if=\"extra\" @click=\"addExtra\"></n3-icon>\n        </li>\n        <li v-if=\"multiple\" class=\"{{prefixCls}}-select-all\">\n          <a @click.prevent=\"selectAll\">\n            全选\n           <n3-icon type=\"check\" v-show=\"allSelected\"></n3-icon>\n          </a>\n        </li>\n\n        <template v-if=\"options.length\">\n          <li v-for=\"option in options | filterSearch searchText \" \n              :value=\"option.value\" \n              style=\"position:relative\">\n            <a @click.prevent=\"select(option)\" >\n              {{{ option.label }}} \n              <n3-icon type=\"check\" v-show=\"findIndex(option.value) !== -1\"></n3-icon>\n            </a>\n          </li>\n        </template>\n        <slot v-else ></slot>\n      <div class=\"{{prefixCls}}-notify\" v-show=\"showNotify\" transition=\"fade\">最多选择 {{limit}} 项</div>\n    </ul>\n    <div class=\"clearfix\"></div>\n    <validate\n      :name=\"name\"\n      :rules=\"rules\"\n      :valid-status.sync=\"validStatus\"\n      :custom-validate=\"customValidate\" \n      :value=\"value\"\n      :results.sync=\"validateResults\">\n    </validate>\n  </div>";

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(225)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(226)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tab.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tab.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tab.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tab.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tab.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div 
	//     :class="classObj"
	//     v-show="show">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    badge: {
	      type: [String, Number]
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var show = this.show;
	
	      var klass = {};
	
	      klass[prefixCls + '-tab-pane'] = true;
	      klass[prefixCls + '-tab-hide'] = !show;
	
	      return klass;
	    },
	    show: function show() {
	      return this.$parent.activeIndex == this.index;
	    }
	  },
	  created: function created() {
	    this.$parent.renderData.push({
	      header: this.header,
	      disabled: this.disabled,
	      badge: this.badge
	    });
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = c;
	        break;
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "<div \n    :class=\"classObj\"\n    v-show=\"show\">\n    <slot></slot>\n  </div>";

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(228)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(229)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tabs.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tabs.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tabs.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tabs.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tabs.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	var _n3Badge = __webpack_require__(142);
	
	var _n3Badge2 = _interopRequireDefault(_n3Badge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div>
	//     <ul :class="classObj" >
	//       <li
	//           v-for="r in renderData"
	//           :class="liclassObj($index,r)"
	//           @click.prevent="handleTabListClick($index, r)"
	//           :disabled="r.disabled">
	//           <a href="#">
	//             {{r.header}}
	//             <n3-badge v-if="r.badge">{{r.badge}}</n3-badge>
	//           </a>
	//       </li>
	//     </ul>
	//     <div class="{{prefixCls}}-tab-content" v-el:tabContent>
	//       <slot></slot>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    pills: {
	      type: Boolean
	    },
	    stacked: {
	      type: Boolean
	    },
	    primary: {
	      type: Boolean
	    },
	    justified: {
	      type: Boolean
	    },
	    size: {
	      type: String
	    },
	    activeIndex: {
	      type: Number,
	      default: 0
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      renderData: []
	    };
	  },
	
	  components: {
	    n3Badge: _n3Badge2.default
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var pills = this.pills;
	      var stacked = this.stacked;
	      var primary = this.primary;
	      var justified = this.justified;
	
	      var klass = {};
	
	      klass[prefixCls + '-nav'] = true;
	      klass['clearfix'] = true;
	      klass[prefixCls + '-nav-tabs'] = true;
	      klass[prefixCls + '-nav-tabs-pills'] = pills;
	      klass[prefixCls + '-nav-tabs-stacked'] = stacked;
	      klass[prefixCls + '-nav-tabs-primary'] = primary;
	      klass[prefixCls + '-nav-tabs-justified'] = justified;
	
	      return klass;
	    }
	  },
	  methods: {
	    liclassObj: function liclassObj(index, r) {
	      var prefixCls = this.prefixCls;
	      var activeIndex = this.activeIndex;
	
	      var klass = {};
	
	      klass[prefixCls + '-nav-tabs-active'] = index === activeIndex;
	      klass[prefixCls + '-nav-tabs-disabled'] = r.disabled;
	
	      return klass;
	    },
	    handleTabListClick: function handleTabListClick(index, el) {
	      if (!el.disabled) {
	        this.activeIndex = index;
	      } else {
	        return;
	      }
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange(index, el);
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <ul :class=\"classObj\" >\n      <li\n          v-for=\"r in renderData\"\n          :class=\"liclassObj($index,r)\"\n          @click.prevent=\"handleTabListClick($index, r)\"\n          :disabled=\"r.disabled\">\n          <a href=\"#\">\n            {{r.header}}\n            <n3-badge v-if=\"r.badge\">{{r.badge}}</n3-badge>\n          </a>\n      </li>\n    </ul>\n    <div class=\"{{prefixCls}}-tab-content\" v-el:tabContent>\n      <slot></slot>\n    </div>\n  </div>";

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(231)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(232)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3ButtonGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3ButtonGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3ButtonGroup.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3ButtonGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3ButtonGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 231 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="{{prefixCls}}-btn-group">
	//     <slot></slot>  
	//   </div>
	// </template>
	// <script>
	
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-btn-group\">\n    <slot></slot>  \n  </div>";

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(234)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(235)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Container.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Container.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Container.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Container.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Container.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 234 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="classObj" >
	//   	<slot></slot>		
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    fluid: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var fluid = this.fluid;
	
	      var klass = {};
	
	      klass[prefixCls + '-container-fluid'] = fluid;
	      klass[prefixCls + '-container'] = !fluid;
	      klass['clearfix'] = true;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" >\n  \t<slot></slot>\t\t\n  </div>";

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(237)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(238)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Row.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Row.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Row.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Row.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Row.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 237 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="{{prefixCls}}-row">
	//   	<slot></slot>		
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-row\">\n  \t<slot></slot>\t\t\n  </div>";

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(240)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(241)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Nav.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Nav.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Nav.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Nav.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Nav.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<nav class="{{prefixCls}}-collapse {{prefixCls}}-navbar-collapse {{prefixCls}}-navbar-{{theme}} {{prefixCls}}-navbar-{{type}} clearfix">
	// 		<ul class="{{prefixCls}}-nav {{prefixCls}}-navbar-nav">
	// 			<slot></slot>	
	// 		</ul>
	// 	</nav>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'horizontal'
	    },
	    theme: {
	      type: String,
	      default: 'default'
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"{{prefixCls}}-collapse {{prefixCls}}-navbar-collapse {{prefixCls}}-navbar-{{theme}} {{prefixCls}}-navbar-{{type}} clearfix\">\n\t\t<ul class=\"{{prefixCls}}-nav {{prefixCls}}-navbar-nav\">\n\t\t\t<slot></slot>\t\n\t\t</ul>\n\t</nav>";

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(243)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(244)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SubNav.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SubNav.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3SubNav.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SubNav.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3SubNav.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Dropdown = __webpack_require__(188);
	
	var _n3Dropdown2 = _interopRequireDefault(_n3Dropdown);
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <span>
	//   <n3-dropdown :trigger="trigger" :show.sync="show" :click-close="true" effect="collapse">
	//     <div slot="trigger"   class="{{prefixCls}}-sub-nav-trigger" >
	//       <slot name="title"></slot>
	//       <n3-icon class="{{prefixCls}}-sub-nav-fa" :type="show ? 'angle-up' : 'angle-down'" ></n3-icon>
	//     </div>
	//     <slot></slot>  
	//   </n3-dropdown>
	// </span>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    show: {
	      type: Boolean,
	      twoWay: true,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    n3Dropdown: _n3Dropdown2.default,
	    n3Icon: _n3Icon2.default
	  }
	};
	// </script>

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "<span>\n  <n3-dropdown :trigger=\"trigger\" :show.sync=\"show\" :click-close=\"true\" effect=\"collapse\">\n    <div slot=\"trigger\"   class=\"{{prefixCls}}-sub-nav-trigger\" >\n      <slot name=\"title\"></slot>\n      <n3-icon class=\"{{prefixCls}}-sub-nav-fa\" :type=\"show ? 'angle-up' : 'angle-down'\" ></n3-icon>\n    </div>\n    <slot></slot>  \n  </n3-dropdown>\n</span>";

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(246)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(247)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3NavItem.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3NavItem.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3NavItem.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3NavItem.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3NavItem.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 246 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<li :class="classObj">
	// 		<slot></slot>
	// 	</li>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    active: {
	      type: Boolean
	    },
	    disabled: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var active = this.active;
	      var disabled = this.disabled;
	
	      var klass = {};
	
	      klass[prefixCls + '-navbar-active'] = active;
	      klass[prefixCls + '-navbar-disabled'] = disabled;
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"classObj\">\n\t\t<slot></slot>\n\t</li>";

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(249)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(250)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Column.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Column.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Column.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Column.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Column.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 249 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="classObj" >
	//   	<slot></slot>		
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    col: {
	      type: Number
	    },
	    mode: {
	      type: String,
	      default: 'md'
	    },
	    offset: {
	      type: Number
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var mode = this.mode;
	      var offset = this.offset;
	      var col = this.col;
	
	      var klass = {};
	
	      klass[prefixCls + '-col-' + mode + '-' + col] = true;
	      offset ? klass[prefixCls + '-col-offset-' + offset] = true : '';
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" >\n  \t<slot></slot>\t\t\n  </div>";

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(252)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(253)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Switch.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Switch.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Switch.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Switch.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Switch.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	var _valMixin = __webpack_require__(147);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(148);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: Boolean,
	      twoway: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    ontext: {
	      type: String,
	      default: 'ON'
	    },
	    offtext: {
	      type: String,
	      default: 'OFF'
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    validate: _validate2.default
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var value = this.value;
	      var disabled = this.disabled;
	
	      var klass = {};
	
	      klass[prefixCls + '-switch'] = true;
	      klass[prefixCls + '-switch-wrapper'] = true;
	      klass[prefixCls + '-switch-on'] = value;
	      klass[prefixCls + '-switch-off'] = !value;
	      klass[prefixCls + '-switch-id-switch-check-on'] = value && disabled;
	      klass[prefixCls + '-switch-id-switch-check-off'] = !(value && disabled);
	      klass[prefixCls + '-switch-animate'] = true;
	      klass[prefixCls + '-switch-id-switch-check-disabled'] = disabled;
	
	      return klass;
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      if (this.disabled) return;
	      this.value = !this.value;
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange();
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// <div class="inline">
	//   <div  :class="classObj" @click="toggle">
	//     <div class="{{prefixCls}}-switch-container {{prefixCls}}-switch-on-primary {{prefixCls}}-switch-off-default">
	//       <span class="{{prefixCls}}-switch-handle-on {{prefixCls}}-switch-primary" >{{ontext}}</span>
	//       <span class="{{prefixCls}}-switch-label" >&nbsp;</span>
	//       <span class="{{prefixCls}}-switch-handle-off {{prefixCls}}-switch-default" >{{offtext}}</span>
	//     </div>
	//   </div>
	//   <validate
	//     :name="name"
	//     :rules="rules"
	//     :valid-status.sync="validStatus"
	//     :custom-validate="customValidate" 
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	// <div>
	// </template>
	
	// <script>

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "<div class=\"inline\">\n  <div  :class=\"classObj\" @click=\"toggle\">\n    <div class=\"{{prefixCls}}-switch-container {{prefixCls}}-switch-on-primary {{prefixCls}}-switch-off-default\">\n      <span class=\"{{prefixCls}}-switch-handle-on {{prefixCls}}-switch-primary\" >{{ontext}}</span>\n      <span class=\"{{prefixCls}}-switch-label\" >&nbsp;</span>\n      <span class=\"{{prefixCls}}-switch-handle-off {{prefixCls}}-switch-default\" >{{offtext}}</span>\n    </div>\n  </div>\n  <validate\n    :name=\"name\"\n    :rules=\"rules\"\n    :valid-status.sync=\"validStatus\"\n    :custom-validate=\"customValidate\" \n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n<div>\n</template>";

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(255)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(259)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3MultipleInput.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3MultipleInput.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3MultipleInput.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3MultipleInput.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3MultipleInput.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	var _n3Typeahead = __webpack_require__(256);
	
	var _n3Typeahead2 = _interopRequireDefault(_n3Typeahead);
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _valMixin = __webpack_require__(147);
	
	var _valMixin2 = _interopRequireDefault(_valMixin);
	
	var _validate = __webpack_require__(148);
	
	var _validate2 = _interopRequireDefault(_validate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_valMixin2.default],
	  props: {
	    value: {
	      type: Array,
	      twoWay: true
	    },
	    position: {
	      type: Number,
	      twoWay: true,
	      default: 0
	    },
	    format: {
	      type: Function,
	      default: function _default(item, index) {
	        return item;
	      }
	    },
	    width: {
	      type: String,
	      default: '220px'
	    },
	    inputWidth: {
	      type: String,
	      default: '50px'
	    },
	    addFormat: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    onChange: {
	      type: Function
	    },
	    query: {
	      type: String,
	      twoway: true,
	      default: function _default() {
	        return '';
	      }
	    },
	    data: {
	      type: Array
	    },
	    render: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    limit: {
	      type: Number,
	      default: 8
	    },
	    matchCase: {
	      type: Boolean,
	      default: false
	    },
	    onHit: {
	      type: Function
	    },
	    onEnter: {
	      type: Function
	    },
	    maxWidth: {
	      type: String,
	      default: '100%'
	    },
	    maxHeight: {
	      type: String,
	      default: '300px'
	    },
	    onInputchange: {
	      type: Function
	    },
	    items: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      focused: false,
	      empty: true,
	      stopSecond: false
	    };
	  },
	  ready: function ready() {
	    this.$nextTick(function () {
	      this._context.$compile(this.$el);
	    });
	  },
	
	  watch: {
	    query: function query(val) {
	      if (val !== '') {
	        this.empty = false;
	      } else {
	        this.items = [];
	      }
	    },
	    position: function position() {
	      this.focus();
	    },
	    value: function value() {
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange();
	      }
	      this.focus();
	    }
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var value = this.value;
	
	      var klass = {};
	
	      klass[prefixCls + '-form-control'] = true;
	      klass[prefixCls + '-multiple-input'] = true;
	
	      return klass;
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default,
	    n3Typeahead: _n3Typeahead2.default,
	    validate: _validate2.default
	  },
	  methods: {
	    focus: function focus() {
	      var self = this;
	      self.focused = false;
	      setTimeout(function () {
	        self.focused = true;
	      }, 100);
	    },
	    setIndex: function setIndex(index) {
	      if (this.query) {
	        this.addquery();
	      }
	      this.position = index;
	    },
	    addquery: function addquery(item, that) {
	      var content = that ? item : this.query;
	      var value = this.value.slice(0);
	
	      value.splice(this.position, 0, this.addFormat(content));
	      this.value = value;
	      this.query = '';
	      this.empty = true;
	    },
	    add: function add(item, that) {
	      var _this = this;
	
	      if (this.stopSecond) return;
	
	      if (that && that.show) {
	        this.stopSecond = true;
	        this.addquery(item, that);
	        this.position++;
	        that.reset();
	        setTimeout(function () {
	          _this.stopSecond = false;
	        });
	      } else {
	        if (this.query) {
	          this.addquery();
	          this.position++;
	        }
	      }
	    },
	    clickDel: function clickDel(index) {
	      var value = this.value.slice(0);
	      value.splice(index, 1);
	      this.value = value;
	    },
	    del: function del() {
	      if (this.empty && this.position > 0) {
	        var value = this.value.slice(0);
	        value.splice(this.position - 1, 1);
	        this.value = value;
	        this.position--;
	        this.focus();
	      }
	      this.empty = this.query === '' ? true : false;
	    },
	    left: function left() {
	      if (this.position > 0 && this.query === '') {
	        this.position--;
	      }
	    },
	    right: function right() {
	      if (this.value && this.position < this.value.length && this.query === '') {
	        this.position++;
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// <div class="inline">
	//   <div :class="classObj" :style="{width:width}" @click="focus">
	//     <template v-for="(index,item) in value" track-by="$index">
	//         <template v-if="index == position">
	//             <n3-typeahead
	//               :style="{margin:'0px 5px'}"
	//               :query.sync="query" 
	//               :width='inputWidth'
	//               :items="items"
	//               :on-change="onInputchange"
	//               :max-width="maxWidth"
	//               :max-height="maxHeight"
	//               :on-hit="add"
	//               :match-case="matchCase"
	//               :limit="limit"
	//               :render="render"
	//               :focused.sync="focused"
	//               :data="data"
	//               @keydown.delete="del" 
	//               @keydown.left="left" 
	//               @keydown.right="right" 
	//               @keydown.enter="add">
	//             </n3-typeahead>
	//         </template>
	//          <template v-else>
	//             <span class="{{prefixCls}}-multiple-input-space"  @click="setIndex(index)"></span>
	//         </template>
	//         <span class="{{prefixCls}}-multiple-input-m-tag" >
	//         {{{format.call(this._context,item,index)}}}
	//         <n3-icon type="times" class="{{prefixCls}}-multiple-close" @click="clickDel(index)"></n3-icon>
	//         </span>
	//     </template>
	
	//     <template v-if="value && value.length == position">
	//       <n3-typeahead
	//         :style="{margin:'0px 5px'}"
	//         :query.sync="query" 
	//         :width='inputWidth'
	//         :items="items"
	//         :on-change="onInputchange"
	//         :max-width="maxWidth"
	//         :max-height="maxHeight"
	//         :on-hit="add"
	//         :match-case="matchCase"
	//         :limit="limit"
	//         :render="render"
	//         :focused.sync="focused"
	//         :data="data"
	//         @keydown.delete="del" 
	//         @keydown.left="left" 
	//         @keydown.right="right" 
	//         @keydown.enter="add">
	//       </n3-typeahead>
	//     </template>
	//     <template v-else>
	//       <span class="{{prefixCls}}-multiple-input-space {{prefixCls}}-multiple-input-long"  @click="setIndex(value.length)"></span>
	//     </template>
	//   </div>
	//    <validate
	//     :name="name"
	//     :rules="rules"
	//     :valid-status.sync="validStatus"
	//     :custom-validate="customValidate" 
	//     :value="value"
	//     :results.sync="validateResults">
	//   </validate>
	// </div>
	// </template>
	
	// <script>

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(257)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(258)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Typeahead.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Typeahead.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Typeahead.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Typeahead.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Typeahead.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Input = __webpack_require__(154);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	var _inputMixin = __webpack_require__(156);
	
	var _inputMixin2 = _interopRequireDefault(_inputMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	
	  mixins: [_inputMixin2.default],
	  props: {
	    readonly: {
	      type: Boolean
	    },
	    query: {
	      type: String,
	      twoway: true,
	      default: ''
	    },
	    data: {
	      type: Array
	    },
	    render: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    limit: {
	      type: Number,
	      default: 8
	    },
	    matchCase: {
	      type: Boolean,
	      default: false
	    },
	    addFormat: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    onHit: {
	      type: Function,
	      default: function _default(item) {
	        this.reset();
	        this.query = this.addFormat(item);
	      }
	    },
	    maxWidth: {
	      type: String,
	      default: '100%'
	    },
	    maxHeight: {
	      type: String,
	      default: '300px'
	    },
	    onChange: {
	      type: Function
	    },
	    items: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  watch: {
	    items: function items(val) {
	      this.show = val && val.length ? true : false;
	    },
	    query: function query(val) {
	      if (val.value === '') {
	        this.items = [];
	      }
	    }
	  },
	  data: function data() {
	    return {
	      show: false,
	      noResults: true,
	      current: 0
	    };
	  },
	
	  computed: {
	    primitiveData: function primitiveData() {
	      var _this = this;
	
	      if (this.data && this.query) {
	        return this.data.filter(function (value) {
	          value = _this.matchCase ? value : value.toLowerCase();
	          return value.indexOf(_this.query) !== -1;
	        }).slice(0, this.limit);
	      }
	    }
	  },
	  components: {
	    n3Input: _n3Input2.default
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    update: function update() {
	      if (this.readonly || this.disabled) return;
	      if (!this.query) {
	        this.reset();
	        return false;
	      }
	
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange(this.query);
	      } else if (this.data) {
	        this.items = this.primitiveData;
	      }
	    },
	    reset: function reset() {
	      this.items = [];
	      this.query = '';
	      this.loading = false;
	      this.show = false;
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      var klass = this.prefixCls + '-dropdown-active';
	      return this.current === index ? klass : '';
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      if (this.items && this.items.length) {
	        this.onHit(this.items[this.current], this);
	      }
	    },
	    up: function up() {
	      if (this.current > 0) this.current--;
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) this.current++;
	    }
	  }
	};
	// </script>
	// <template>
	// <div style="position: relative;display:inline-block"
	//      :class="[show ? prefixCls +'-open' : '']">
	//   <n3-input
	//     :width="width"
	//     :name="name" 
	//     :rules="rules" 
	//     :validate="validate" 
	//     :has-feedback="hasFeedback"
	//     :placeholder="placeholder"
	//     :custom-validate="customValidate"
	//     :readonly="readonly"
	//     :disabled="disabled"
	//     :value.sync="query"
	//     :focused.sync="focused"
	//     :on-blur="blur"
	//     @input="update"
	//     @keydown.esc="show=false"
	//     @keydown.up="up"
	//     @keydown.down="down"
	//     @keydown.enter= "hit"
	//     @keydown.esc="reset"
	//   ></n3-input>
	//   <ul class="{{prefixCls}}-dropdown-menu" :style="{maxWidth:maxWidth,maxHeight:maxHeight}">
	//     <li v-for="item in items" :class="isActive($index)">
	//       <a @mousedown.prevent="hit" @mousemove="setActive($index)">
	//         {{{render.call(this._context,item)}}}
	//       </a>
	//     </li> 
	//   </ul>
	// </div>
	
	// </template>
	
	// <script>

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "<div style=\"position: relative;display:inline-block\"\n     :class=\"[show ? prefixCls +'-open' : '']\">\n  <n3-input\n    :width=\"width\"\n    :name=\"name\" \n    :rules=\"rules\" \n    :validate=\"validate\" \n    :has-feedback=\"hasFeedback\"\n    :placeholder=\"placeholder\"\n    :custom-validate=\"customValidate\"\n    :readonly=\"readonly\"\n    :disabled=\"disabled\"\n    :value.sync=\"query\"\n    :focused.sync=\"focused\"\n    :on-blur=\"blur\"\n    @input=\"update\"\n    @keydown.esc=\"show=false\"\n    @keydown.up=\"up\"\n    @keydown.down=\"down\"\n    @keydown.enter= \"hit\"\n    @keydown.esc=\"reset\"\n  ></n3-input>\n  <ul class=\"{{prefixCls}}-dropdown-menu\" :style=\"{maxWidth:maxWidth,maxHeight:maxHeight}\">\n    <li v-for=\"item in items\" :class=\"isActive($index)\">\n      <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\n        {{{render.call(this._context,item)}}}\n      </a>\n    </li> \n  </ul>\n</div>";

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "<div class=\"inline\">\n  <div :class=\"classObj\" :style=\"{width:width}\" @click=\"focus\">\n    <template v-for=\"(index,item) in value\" track-by=\"$index\">\n        <template v-if=\"index == position\">\n            <n3-typeahead\n              :style=\"{margin:'0px 5px'}\"\n              :query.sync=\"query\" \n              :width='inputWidth'\n              :items=\"items\"\n              :on-change=\"onInputchange\"\n              :max-width=\"maxWidth\"\n              :max-height=\"maxHeight\"\n              :on-hit=\"add\"\n              :match-case=\"matchCase\"\n              :limit=\"limit\"\n              :render=\"render\"\n              :focused.sync=\"focused\"\n              :data=\"data\"\n              @keydown.delete=\"del\" \n              @keydown.left=\"left\" \n              @keydown.right=\"right\" \n              @keydown.enter=\"add\">\n            </n3-typeahead>\n        </template>\n         <template v-else>\n            <span class=\"{{prefixCls}}-multiple-input-space\"  @click=\"setIndex(index)\"></span>\n        </template>\n        <span class=\"{{prefixCls}}-multiple-input-m-tag\" >\n        {{{format.call(this._context,item,index)}}}\n        <n3-icon type=\"times\" class=\"{{prefixCls}}-multiple-close\" @click=\"clickDel(index)\"></n3-icon>\n        </span>\n    </template>\n\n    <template v-if=\"value && value.length == position\">\n      <n3-typeahead\n        :style=\"{margin:'0px 5px'}\"\n        :query.sync=\"query\" \n        :width='inputWidth'\n        :items=\"items\"\n        :on-change=\"onInputchange\"\n        :max-width=\"maxWidth\"\n        :max-height=\"maxHeight\"\n        :on-hit=\"add\"\n        :match-case=\"matchCase\"\n        :limit=\"limit\"\n        :render=\"render\"\n        :focused.sync=\"focused\"\n        :data=\"data\"\n        @keydown.delete=\"del\" \n        @keydown.left=\"left\" \n        @keydown.right=\"right\" \n        @keydown.enter=\"add\">\n      </n3-typeahead>\n    </template>\n    <template v-else>\n      <span class=\"{{prefixCls}}-multiple-input-space {{prefixCls}}-multiple-input-long\"  @click=\"setIndex(value.length)\"></span>\n    </template>\n  </div>\n   <validate\n    :name=\"name\"\n    :rules=\"rules\"\n    :valid-status.sync=\"validStatus\"\n    :custom-validate=\"customValidate\" \n    :value=\"value\"\n    :results.sync=\"validateResults\">\n  </validate>\n</div>";

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(261)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(262)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SimplePagination.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SimplePagination.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3SimplePagination.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3SimplePagination.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3SimplePagination.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	var _n3Input = __webpack_require__(154);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _n3Button = __webpack_require__(137);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<nav v-show="total>0" class='{{prefixCls}}-simple-pagination'>
	//         <div class="{{prefixCls}}-pagination">
	//             <n3-button v-show ="havePrev"  @click="prev" class="{{prefixCls}}-simple-pagination-btn">
	//               <n3-icon type="chevron-left"></n3-icon>
	//             </n3-button>
	//             <span> {{current}} / {{totalpage}}</span>
	//             <n3-button v-show ="haveNext" @click="next" class="{{prefixCls}}-simple-pagination-btn">
	//               <n3-icon type="chevron-right"></n3-icon>
	//             </n3-button>
	//             <n3-input  
	//               width="50px"
	//               class="{{prefixCls}}-simple-pagination-input"
	//               @keyup.enter="go" 
	//               :value.sync="inputValue"></n3-input>
	//             <n3-button @click="go" class="{{prefixCls}}-simple-pagination-btn">跳转</n3-button>
	//         </div>
	//     </nav>
	// </template>
	// <script>  
	exports.default = {
	  props: {
	    total: {
	      type: Number
	    },
	    current: {
	      type: Number,
	      twoway: true,
	      default: 1
	    },
	    pagesize: {
	      default: 10
	    },
	    onChange: {
	      type: Function
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      inputValue: '',
	      havePrev: true,
	      haveNext: true,
	      totalpage: 0
	    };
	  },
	
	  components: {
	    n3Input: _n3Input2.default,
	    n3Icon: _n3Icon2.default,
	    n3Button: _n3Button2.default
	  },
	  watch: {
	    current: function current(val) {
	      this.inputValue = '';
	      this.checkHave();
	
	      if (_getType2.default.isFunction(this.onChange)) {
	        this.onChange(this.current);
	      }
	    },
	    total: function total() {
	      this.init();
	    },
	    pagesize: function pagesize() {
	      this.init();
	    }
	  },
	  ready: function ready() {
	    this.init();
	  },
	
	  methods: {
	    init: function init() {
	      this.current = 1;
	      this.totalpage = Math.ceil(this.total / this.pagesize * 1);
	      this.checkHave();
	    },
	    checkHave: function checkHave() {
	      this.havePrev = this.current > 1 ? true : false;
	      this.haveNext = this.current < this.totalpage ? true : false;
	    },
	    prev: function prev() {
	      this.go(1 * this.current - 1);
	    },
	    next: function next() {
	      this.go(1 * this.current + 1);
	    },
	    go: function go(page) {
	      if (isNaN(page)) page = this.inputValue;
	      if (isNaN(page)) return;
	
	      page = 1 * page;
	      if (typeof page === 'number') {
	        if (page < 1) {
	          this.curret = 1;
	        } else if (page > this.totalpage) {
	          this.current = this.totalpage;
	        } else {
	          this.current = page;
	        }
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = "<nav v-show=\"total>0\" class='{{prefixCls}}-simple-pagination'>\n        <div class=\"{{prefixCls}}-pagination\">\n            <n3-button v-show =\"havePrev\"  @click=\"prev\" class=\"{{prefixCls}}-simple-pagination-btn\">\n              <n3-icon type=\"chevron-left\"></n3-icon>\n            </n3-button>\n            <span> {{current}} / {{totalpage}}</span>\n            <n3-button v-show =\"haveNext\" @click=\"next\" class=\"{{prefixCls}}-simple-pagination-btn\">\n              <n3-icon type=\"chevron-right\"></n3-icon>\n            </n3-button>\n            <n3-input  \n              width=\"50px\"\n              class=\"{{prefixCls}}-simple-pagination-input\"\n              @keyup.enter=\"go\" \n              :value.sync=\"inputValue\"></n3-input>\n            <n3-button @click=\"go\" class=\"{{prefixCls}}-simple-pagination-btn\">跳转</n3-button>\n        </div>\n    </nav>";

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(264)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(265)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Step.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Step.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Step.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Step.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Step.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 264 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//    <ul v-if="round" class="{{prefixCls}}-steps-round-con">
	//    <template v-for="label in labels">
	//       <li :class="[getClassFromIndex($index)]">
	//       <div class="{{prefixCls}}-steps-wrap">
	//         <div class="{{prefixCls}}-steps-round">{{$index + 1}}</div>
	//       </div>
	//       <label>{{label}}</label>
	//     </li>
	//    </template>
	//   </ul>
	
	//   <div v-else class="{{prefixCls}}-steps clearfix">
	//         <template v-for="label in labels">
	//             <div class="{{prefixCls}}-steps-wrap">
	//                 <div :class="getClassFromIndex($index)">
	//                     <label>
	//                       <span class="{{prefixCls}}-steps-round">{{$index + 1}}</span>
	//                       <span>{{label}}</span>
	//                     </label>
	//                     <template v-if="$index < labels.length - 1">
	//                         <i class="{{prefixCls}}-steps-triangle-right-bg"></i>
	//                         <i class="{{prefixCls}}-steps-triangle-right"></i>
	//                     </template>
	//                 </div>
	//             </div>
	//         </template>
	//     </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    labels: {
	      type: Array
	    },
	    current: {
	      type: Number
	    },
	    round: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  methods: {
	    getClassFromIndex: function getClassFromIndex(index) {
	      var ret = '';
	      if (index === this.current - 1) {
	        ret = 'current';
	      } else if (index < this.current - 1) {
	        ret = 'finished';
	      } else {
	        ret = 'todo';
	      }
	
	      return this.prefixCls + '-steps-' + ret;
	    }
	  }
	};
	// </script>

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = "<ul v-if=\"round\" class=\"{{prefixCls}}-steps-round-con\">\n   <template v-for=\"label in labels\">\n      <li :class=\"[getClassFromIndex($index)]\">\n      <div class=\"{{prefixCls}}-steps-wrap\">\n        <div class=\"{{prefixCls}}-steps-round\">{{$index + 1}}</div>\n      </div>\n      <label>{{label}}</label>\n    </li>\n   </template>\n  </ul>\n\n  <div v-else class=\"{{prefixCls}}-steps clearfix\">\n        <template v-for=\"label in labels\">\n            <div class=\"{{prefixCls}}-steps-wrap\">\n                <div :class=\"getClassFromIndex($index)\">\n                    <label>\n                      <span class=\"{{prefixCls}}-steps-round\">{{$index + 1}}</span>\n                      <span>{{label}}</span>\n                    </label>\n                    <template v-if=\"$index < labels.length - 1\">\n                        <i class=\"{{prefixCls}}-steps-triangle-right-bg\"></i>\n                        <i class=\"{{prefixCls}}-steps-triangle-right\"></i>\n                    </template>\n                </div>\n            </div>\n        </template>\n    </div>";

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(267)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(268)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3DataTable.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3DataTable.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3DataTable.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3DataTable.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3DataTable.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3SimplePagination = __webpack_require__(260);
	
	var _n3SimplePagination2 = _interopRequireDefault(_n3SimplePagination);
	
	var _n3Select = __webpack_require__(221);
	
	var _n3Select2 = _interopRequireDefault(_n3Select);
	
	var _n3Button = __webpack_require__(137);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _n3Input = __webpack_require__(154);
	
	var _n3Input2 = _interopRequireDefault(_n3Input);
	
	var _n3Loading = __webpack_require__(139);
	
	var _n3Loading2 = _interopRequireDefault(_n3Loading);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    selection: {
	      type: Object
	    },
	    refresh: {
	      type: Function
	    },
	    selectCol: {
	      type: Boolean,
	      default: true
	    },
	    filter: {
	      type: Boolean,
	      default: true
	    },
	    filterList: {
	      type: Array
	    },
	    page: {
	      type: Boolean,
	      default: true
	    },
	    search: {
	      type: Boolean,
	      default: true
	    },
	    striped: {
	      type: Boolean
	    },
	    bordered: {
	      type: Boolean,
	      default: true
	    },
	    hover: {
	      type: Boolean,
	      default: true
	    },
	    responsive: {
	      type: Boolean
	    },
	    columns: {
	      type: Array
	    },
	    source: {
	      type: Array
	    },
	    pagination: {
	      type: Object,
	      twoWay: true,
	      default: function _default() {
	        return {
	          total: 0,
	          current: 1,
	          pagesize: 10
	        };
	      }
	    },
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function
	    },
	    onComplete: {
	      type: Function
	    },
	    mergeRule: {
	      type: Object
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      key: 'n3Key',
	      mergeMap: {},
	      isDisabledAll: false,
	      checkedRows: [],
	      pagesizeFirst: true,
	      filterArr: [],
	      filterMap: {},
	      options: [{ value: 10, label: 10 }, { value: 15, label: 15 }, { value: 25, label: 25 }, { value: 50, label: 50 }, { value: 100, label: 100 }],
	      pagesize: '',
	      query: '',
	      searchMap: {},
	      list: [],
	      sortInfo: {},
	      initSource: [],
	      initColumns: [],
	      selectdCols: [],
	      selectOptions: []
	    };
	  },
	
	  watch: {
	    checkedRows: function checkedRows(val) {
	      this.selection.checkedRows = val;
	    },
	    selectdCols: function selectdCols(val) {
	      var copy = [];
	      for (var i = 0; i < this.initColumns.length; i++) {
	        var c = this.initColumns[i];
	        val.indexOf(c.value) === -1 ? c.show = false : c.show = true;
	        copy.push(Object.assign({}, c));
	      }
	      this.initColumns = copy;
	      this.compileRender();
	    },
	    pagesize: function pagesize(val) {
	      if (this.pagesizeFirst) {
	        this.pagesizeFirst = false;
	        return;
	      }
	      this.pagination.current = 1;
	      this.pagination.pagesize = val;
	      this.pageChange();
	    },
	    source: function source(val) {
	      this.handlerSource();
	      this.render();
	    },
	    columns: function columns(val) {
	      this.init();
	    },
	    filterList: function filterList() {
	      this.handlerFilter(true);
	    }
	  },
	  created: function created() {
	    var a = [10, 15, 25, 50, 100];
	    this.pagesize = this.pagination.pagesize;
	
	    if (a.indexOf(this.pagesize) === -1) {
	      a.push(this.pagesize);
	      a = a.sort(function (a, b) {
	        return a - b;
	      });
	      this.options = a.map(function (e) {
	        return { value: e, label: e };
	      });
	    }
	  },
	  ready: function ready() {
	    this.init();
	  },
	
	  components: {
	    n3SimplePagination: _n3SimplePagination2.default,
	    n3Select: _n3Select2.default,
	    n3Button: _n3Button2.default,
	    n3Icon: _n3Icon2.default,
	    n3Input: _n3Input2.default,
	    n3Loading: _n3Loading2.default
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var striped = this.striped;
	      var bordered = this.bordered;
	      var hover = this.hover;
	      var responsive = this.responsive;
	
	      var klass = {};
	
	      klass[prefixCls + '-table'] = true;
	      klass[prefixCls + '-table-striped'] = striped;
	      klass[prefixCls + '-table-bordered'] = bordered;
	      klass[prefixCls + '-table-hover'] = hover;
	      klass[prefixCls + '-table-responsive'] = responsive;
	
	      return klass;
	    },
	    isCheckedAll: function isCheckedAll() {
	      var self = this;
	      var rows = this.checkebleRows.filter(function (record) {
	        return self.checkedValues.indexOf(record[self.key]) > -1;
	      });
	
	      return this.checkebleRows.length === rows.length;
	    },
	    filters: function filters() {
	      var ret = [];
	      var filters = this.filterArr;
	      for (var i = 0; i < filters.length; i++) {
	        if (filters[i]['value'].length) {
	          ret.push({ dataIndex: filters[i]['dataIndex'], value: filters[i]['value'] });
	        }
	      }
	      return ret;
	    },
	    checkedValues: function checkedValues() {
	      var self = this;
	      var checkedKeys = self.checkedRows.map(function (record) {
	        return record[self.key];
	      });
	      return checkedKeys;
	    },
	    checkebleRows: function checkebleRows() {
	      var self = this;
	      var rows = [];
	
	      if (self.list && self.list.length) {
	        rows = self.list.filter(function (record) {
	          if (self.selection) {
	            return !self.selection.getCheckboxProps || !self.selection.getCheckboxProps(record).disabled;
	          }
	        });
	      }
	      return rows;
	    }
	  },
	  methods: {
	    colspan: function colspan(col, data) {
	      var m = this.mergeRule;
	      if (!m) return 1;
	
	      var ret = m[col.dataIndex] && m[col.dataIndex][data[col.dataIndex]];
	      return ret ? ret.colspan : 1;
	    },
	    rowspan: function rowspan(col, data) {
	      var m = this.mergeRule;
	      if (!m) return 1;
	
	      var ret = m[col.dataIndex] && m[col.dataIndex][data[col.dataIndex]];
	      return ret ? ret.rowspan : 1;
	    },
	    onCheckOne: function onCheckOne(event, record) {
	      var self = this;
	      var input = event.srcElement || event.target;
	      var checked = input.checked;
	      if (checked) {
	        if (self.checkedRows.indexOf(record) === -1) {
	          self.checkedRows.push(record);
	        }
	      } else {
	        self.checkedRows = self.checkedRows.filter(function (item) {
	          return record[self.key] !== item[self.key];
	        });
	      }
	      if (self.selection.onSelect) {
	        self.selection.onSelect(record, checked, self.checkedRows);
	      }
	    },
	    onCheckAll: function onCheckAll(event) {
	      var self = this;
	      var changeRows = [];
	      var input = event.srcElement || event.target;
	      var checked = input.checked;
	      if (checked) {
	        self.checkebleRows.forEach(function (record, i) {
	          if (self.checkedRows.indexOf(record) < 0) {
	            self.checkedRows.push(record);
	            changeRows.push(record);
	          }
	        });
	      } else {
	        self.checkebleRows.forEach(function (record, i) {
	          var index = self.checkedRows.indexOf(record);
	          if (index >= 0) {
	            self.checkedRows.splice(index, 1);
	            changeRows.push(record);
	          }
	        });
	      }
	      if (self.selection.onSelectAll) {
	        self.selection.onSelectAll(checked, self.checkedRows, changeRows);
	      }
	    },
	    sortStatus: function sortStatus(dataIndex, type) {
	      return this.sortInfo.index === dataIndex && this.sortInfo.type === type;
	    },
	    tableChange: function tableChange() {
	      this.onChange(this.page ? this.pagination : null, this.search ? this.query : null, this.sort ? this.sortInfo : null, this.filter ? this.filters : null);
	    },
	    sort: function sort(col, s, t) {
	      var dataIndex = col.dataIndex;
	      var type = t ? t : 'DESC';
	
	      if (!s) return;
	
	      if (dataIndex === this.sortInfo.index) {
	        type = t ? t : this.sortInfo.type === 'DESC' ? 'ASC' : 'DESC';
	      }
	
	      this.sortInfo = {
	        index: dataIndex,
	        type: type,
	        method: col.sortMethod
	      };
	
	      if (this.sort && typeof this.onChange === 'function') {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    gosearch: function gosearch() {
	      this.pagination.current = 1;
	      if (this.search && typeof this.onChange === 'function') {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    pageChange: function pageChange() {
	      if (this.page && typeof this.onChange === 'function') {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    resetFilter: function resetFilter() {
	      for (var i = 0; i < this.filterArr.length; i++) {
	        this.filterArr[i].value = [];
	      }
	      this.pagination.current = 1;
	      if (this.filter && typeof this.onChange === 'function') {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    goFilter: function goFilter() {
	      this.pagination.current = 1;
	      if (this.filter && typeof this.onChange === 'function') {
	        this.tableChange();
	      } else {
	        this.render();
	      }
	    },
	    addFilter: function addFilter(index, value, filterValue) {
	      var values = this.filterMap[index] && this.filterMap[index]['values'];
	      var filter = this.filterMap[index] && this.filterMap[index]['filter'];
	
	      if (!values[value]) {
	        filter['options'].push({ value: value, label: value });
	        values[value] = true;
	        if (filterValue && filterValue.indexOf(value) > -1) {
	          filter['value'].push(value);
	        }
	      }
	    },
	    handlerFilter: function handlerFilter(force) {
	      var s = this.columns;
	
	      if (!this.filter) return;
	
	      this.filterMap = {};
	
	      if (force) {
	        this.filterArr = this.filterList;
	      } else {
	        for (var i = 0; i < s.length; i++) {
	          if (s[i]['filter']) {
	            this.filterArr.push({ title: s[i]['title'], dataIndex: s[i]['dataIndex'], options: [], value: [] });
	          }
	        }
	      }
	
	      for (var k = 0; k < this.filterArr.length; k++) {
	        this.filterMap[this.filterArr[k]['dataIndex']] = { filter: this.filterArr[k], values: {} };
	      }
	    },
	    handlerColumns: function handlerColumns() {
	      var s = this.columns;
	      var selectdCols = [];
	      var ret = [];
	
	      this.filterArr = [];
	
	      for (var i = 0; i < s.length; i++) {
	        var t = Object.assign({}, s[i]);
	        t['value'] = t['dataIndex'];
	        t['label'] = t['title'];
	        if (t['show'] !== false) {
	          t['show'] = true;
	          selectdCols.push(t['value']);
	        }
	
	        t['sortType'] ? this.sortInfo = { index: t['dataIndex'], type: t['sortType'] } : 0;
	
	        ret[i] = t;
	      }
	
	      this.handlerFilter();
	      this.selectdCols = selectdCols;
	      this.initColumns = ret;
	      this.selectOptions = ret;
	    },
	    handlerSource: function handlerSource() {
	      var _this = this;
	
	      var s = this.source;
	      var ret = [];
	      var filterValue = {};
	
	      for (var i in this.filterMap) {
	        var filter = this.filterMap[i];
	        filterValue[i] = filter['filter']['value'].slice(0);
	        filter['values'] = {};
	        filter['filter']['options'] = [];
	        filter['filter']['value'] = [];
	      }
	
	      for (var _i = 0; _i < s.length; _i++) {
	        var search = '';
	        for (var j in s[_i]) {
	          search += s[_i][j];
	          if (!_getType2.default.isArray(this.filterList) && this.filterMap[j]) {
	            this.addFilter(j, s[_i][j], filterValue[j]);
	          }
	        }
	        if (this.search) {
	          this.searchMap[_i] = search;
	        }
	        ret[_i] = Object.assign({}, s[_i], { n3Key: _i });
	      }
	
	      if (this.selection) {
	        this.checkedRows = s.filter(function (record) {
	          if (_this.checkedValues) {
	            return _this.checkedValues.indexOf(record[_this.key]) >= 0;
	          }
	        });
	      }
	
	      this.initSource = ret;
	    },
	    init: function init() {
	      this.handlerColumns();
	      this.handlerSource();
	      this.render();
	    },
	    listSort: function listSort(arr, field, order, method) {
	      var type = 'number';
	      order = order === 'ASC' ? 'ASC' : 'DESC';
	
	      if (!method) {
	        for (var i = 0; i < arr.length; i++) {
	          if (typeof arr[i][field] !== 'number') {
	            type = 'string';
	            break;
	          }
	        }
	
	        arr.sort(function (x, y) {
	          return type === 'string' ? String(x[field]).localeCompare(y[field]) : x[field] - y[field];
	        });
	      } else {
	        arr.sort(method);
	      }
	
	      if (order === 'DESC') arr.reverse();
	    },
	    getFilter: function getFilter(index) {
	      return this.filterMap[index] && this.filterMap[index]['filter'];
	    },
	    inArray: function inArray(index, array) {
	      for (var i = 0; i < array.length; i++) {
	        if (array[i] === index) {
	          return true;
	        }
	      }
	
	      return false;
	    },
	    isFilterEmpty: function isFilterEmpty() {
	      var map = this.filterMap;
	      for (var i in map) {
	        if (map[i]['filter']['value'].length > 0) {
	          return false;
	        }
	      }
	      return true;
	    },
	    filterRet: function filterRet(a) {
	      var ret = [];
	
	      for (var i = 0; i < a.length; i++) {
	        var item = a[i];
	        var pass = true;
	
	        for (var j in item) {
	          var filter = this.getFilter(j);
	          if (filter && filter['value'].length && !this.inArray(item[j], filter['value'])) {
	            pass = false;
	          }
	        }
	        if (pass) {
	          ret.push(item);
	        }
	      }
	      return ret;
	    },
	    render: function render() {
	      var s = this.initSource;
	      var ret = this.initSource.slice(0);
	
	      if (this.filter && typeof this.onChange !== 'function' && this.filterArr.length > 0 && !this.isFilterEmpty()) {
	        ret = this.filterRet(ret);
	      }
	
	      if (this.search && typeof this.onChange !== 'function' && this.query) {
	        ret = [];
	        for (var i = 0; i < s.length; i++) {
	          this.searchMap[s[i][this.key]].indexOf(this.query) !== -1 ? ret.push(s[i]) : 0;
	        }
	      }
	
	      if (this.sortInfo.index && typeof this.onChange !== 'function') {
	        this.listSort(ret, this.sortInfo.index, this.sortInfo.type, this.sortInfo.method);
	      }
	
	      if (this.page && typeof this.onChange !== 'function') {
	        this.pagination.total = ret.length;
	        ret = ret.slice((this.pagination.current - 1) * this.pagination.pagesize, (this.pagination.current - 1) * this.pagination.pagesize + this.pagination.pagesize);
	      }
	
	      this.list = ret;
	
	      this.compileRender();
	    },
	    compileRender: function compileRender() {
	      var _this2 = this;
	
	      var self = this;
	      this.$nextTick(function () {
	        self._context.$compile(self.$el);
	        if (_this2.selection) {
	          self.isDisabledAll = !self.checkebleRows.length;
	        }
	        if (typeof self.onComplete === 'function') {
	          self.onComplete();
	        }
	      });
	    }
	  }
	};
	// </script>
	// <template>
	//   <div class="{{prefixCls}}-data-table">
	//   <div class="{{prefixCls}}-data-table-bar clearfix">
	//     <n3-select 
	// 	    class='pull-left'
	// 	    style="margin-right:10px;"
	// 	    :multiple="true"
	// 	    :showselected="false"
	// 	    v-if="selectCol"
	// 	    placeholder = "显示的列"
	// 	    :options="selectOptions" 
	// 	    :value.sync="selectdCols">
	//     </n3-select>
	//     <div v-if="filter && filterArr.length" class='pull-left {{prefixCls}}-btn-group'>
	//       <template v-for="item in filterArr">
	//         <n3-select 
	// 	        :multiple = "item.multiple === undefined?true:!!item.multiple"
	// 	        :search = "item.search === undefined?true:!!item.search"
	// 	        :extra = "item.extra === undefined?true:!!item.extra"
	// 	        :showselected="false"
	// 	        :placeholder = "item.title"
	// 	        :options="item.options" 
	// 	        :value.sync="item.value">
	//         </n3-select>
	//       </template>  
	//       <n3-button
	//         class="{{prefixCls}}-data-table-inner-btn"
	//         @click="resetFilter" 
	//         type="primary">
	//         <n3-icon type="reply"></n3-icon>
	//       </n3-button>
	//        <n3-button
	//         class="{{prefixCls}}-data-table-inner-btn"
	//         @click="goFilter" 
	//         type="primary">
	//         <n3-icon type="filter"></n3-icon>
	//       </n3-button>
	//     </div>
	//       <n3-button
	//         class="{{prefixCls}}-data-table-inner-btn" 
	//         style="margin-left:10px;"
	//         @click="refresh"
	//         v-if="refresh"  
	//         type="primary">
	//         <n3-icon type="refresh"></n3-icon>
	//       </n3-button>
	//     <n3-input
	//       class="pull-right .@{prefix-cls}-data-table-search" 
	//       placeholder="搜索"
	//       :value.sync="query"
	//       @keydown.enter="gosearch"
	//       v-if="search">
	//     </n3-input>
	//   </div>
	//   <div>
	//     <n3-loading center size="lg" v-if="loading"></n3-loading>
	//     <div :class="[loading ? prefixCls + '-data-table-loading':'']">
	//       <table :class="classObj" >
	//           <thead>
	//             <tr>
	//               <th v-if="selection" class="{{prefixCls}}-data-table-row-select">
	//                   <input v-if="list && list.length" 
	//                   	type="checkbox" v-bind="{checked:isCheckedAll,disabled:isDisabledAll}" 
	//                   	@change="onCheckAll"/>
	//               </th>
	//               <th v-for="col in initColumns" 
	//                   v-if="col.show && col.colspan != 0" 
	//                   :style="{width:col.width}" 
	//                   :class="{'pointer':col.sort}" 
	//                   @click="sort(col,col.sort)" 
	//                   :colspan="col.colspan === undefined ? 1 : col.colspan"> 
	//                 <span>{{col.title}} </span> 
	//                 <div class="{{prefixCls}}-data-table-sort pull-right" v-if="col.sort" >
	//                   <n3-icon
	//                     @click.stop="sort(col,col.sort,'ASC')"
	//                     :style="{color: sortStatus(col.dataIndex,'ASC') ? 'gray' : '#ddd'}" 
	//                     type="caret-up">
	//                   </n3-icon>
	//                    <n3-icon
	//                     @click.stop="sort(col,col.sort,'DESC')"
	//                     :style="{color: sortStatus(col.dataIndex,'DESC')? 'gray' : '#ddd'}"
	//                     type="caret-down">
	//                   </n3-icon>
	//                 </div>
	//               </th>
	//             </tr>
	//           </thead>
	//           <tbody>
	//             <tr v-for="(index,data) in list" track-by="n3Key">
	//                 <td v-if="selection" class="{{prefixCls}}-row-select">
	//                    <input type="checkbox" 
	//                    	v-model="checkedValues"  
	//                    	:value="data[key]" @change.stop="onCheckOne($event,data)" 
	//                    	v-bind="selection.getCheckboxProps && selection.getCheckboxProps(data)"/>
	//                 </td>
	//                 <td v-for="col in initColumns" v-if="col.show!=false && colspan(col,data) != 0 && rowspan(col,data) !=0" :colspan="colspan(col,data)" :rowspan="rowspan(col,data)">
	//                 <template v-if="col.render">
	//                    {{{col.render.call(this._context,data[col.dataIndex],data,index)}}}
	//                 </template>
	//                 <template v-else>
	//                   {{{ col.dataIndex ? data[col.dataIndex] : ''}}}
	//                 </template>
	//                 </td>
	//             </tr>
	//           </tbody>
	//       </table>
	//     </div>
	//   </div>
	//   <div class='{{prefixCls}}-data-table-bar' v-if="page" >
	//     每页&nbsp;<n3-select 
	//       :cancelled="false"
	//       v-if="page"
	//       :options="options" 
	//       class="{{prefixCls}}-data-table-page" 
	//       :value.sync="pagesize"></n3-select>&nbsp;条
	//        共&nbsp;{{pagination.total}}&nbsp;条
	//     <div class="pull-right">  
	//     <n3-simple-pagination v-if="page" 
	//     :total="pagination.total" 
	//     :current.sync="pagination.current" 
	//     :pagesize="pagination.pagesize" 
	//     :on-change="pageChange"
	//     ></n3-simple-pagination>
	//     </div>
	//   </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-data-table\">\n  <div class=\"{{prefixCls}}-data-table-bar clearfix\">\n    <n3-select \n\t    class='pull-left'\n\t    style=\"margin-right:10px;\"\n\t    :multiple=\"true\"\n\t    :showselected=\"false\"\n\t    v-if=\"selectCol\"\n\t    placeholder = \"显示的列\"\n\t    :options=\"selectOptions\" \n\t    :value.sync=\"selectdCols\">\n    </n3-select>\n    <div v-if=\"filter && filterArr.length\" class='pull-left {{prefixCls}}-btn-group'>\n      <template v-for=\"item in filterArr\">\n        <n3-select \n\t        :multiple = \"item.multiple === undefined?true:!!item.multiple\"\n\t        :search = \"item.search === undefined?true:!!item.search\"\n\t        :extra = \"item.extra === undefined?true:!!item.extra\"\n\t        :showselected=\"false\"\n\t        :placeholder = \"item.title\"\n\t        :options=\"item.options\" \n\t        :value.sync=\"item.value\">\n        </n3-select>\n      </template>  \n      <n3-button\n        class=\"{{prefixCls}}-data-table-inner-btn\"\n        @click=\"resetFilter\" \n        type=\"primary\">\n        <n3-icon type=\"reply\"></n3-icon>\n      </n3-button>\n       <n3-button\n        class=\"{{prefixCls}}-data-table-inner-btn\"\n        @click=\"goFilter\" \n        type=\"primary\">\n        <n3-icon type=\"filter\"></n3-icon>\n      </n3-button>\n    </div>\n      <n3-button\n        class=\"{{prefixCls}}-data-table-inner-btn\" \n        style=\"margin-left:10px;\"\n        @click=\"refresh\"\n        v-if=\"refresh\"  \n        type=\"primary\">\n        <n3-icon type=\"refresh\"></n3-icon>\n      </n3-button>\n    <n3-input\n      class=\"pull-right .@{prefix-cls}-data-table-search\" \n      placeholder=\"搜索\"\n      :value.sync=\"query\"\n      @keydown.enter=\"gosearch\"\n      v-if=\"search\">\n    </n3-input>\n  </div>\n  <div>\n    <n3-loading center size=\"lg\" v-if=\"loading\"></n3-loading>\n    <div :class=\"[loading ? prefixCls + '-data-table-loading':'']\">\n      <table :class=\"classObj\" >\n          <thead>\n            <tr>\n              <th v-if=\"selection\" class=\"{{prefixCls}}-data-table-row-select\">\n                  <input v-if=\"list && list.length\" \n                  \ttype=\"checkbox\" v-bind=\"{checked:isCheckedAll,disabled:isDisabledAll}\" \n                  \t@change=\"onCheckAll\"/>\n              </th>\n              <th v-for=\"col in initColumns\" \n                  v-if=\"col.show && col.colspan != 0\" \n                  :style=\"{width:col.width}\" \n                  :class=\"{'pointer':col.sort}\" \n                  @click=\"sort(col,col.sort)\" \n                  :colspan=\"col.colspan === undefined ? 1 : col.colspan\"> \n                <span>{{col.title}} </span> \n                <div class=\"{{prefixCls}}-data-table-sort pull-right\" v-if=\"col.sort\" >\n                  <n3-icon\n                    @click.stop=\"sort(col,col.sort,'ASC')\"\n                    :style=\"{color: sortStatus(col.dataIndex,'ASC') ? 'gray' : '#ddd'}\" \n                    type=\"caret-up\">\n                  </n3-icon>\n                   <n3-icon\n                    @click.stop=\"sort(col,col.sort,'DESC')\"\n                    :style=\"{color: sortStatus(col.dataIndex,'DESC')? 'gray' : '#ddd'}\"\n                    type=\"caret-down\">\n                  </n3-icon>\n                </div>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for=\"(index,data) in list\" track-by=\"n3Key\">\n                <td v-if=\"selection\" class=\"{{prefixCls}}-row-select\">\n                   <input type=\"checkbox\" \n                   \tv-model=\"checkedValues\"  \n                   \t:value=\"data[key]\" @change.stop=\"onCheckOne($event,data)\" \n                   \tv-bind=\"selection.getCheckboxProps && selection.getCheckboxProps(data)\"/>\n                </td>\n                <td v-for=\"col in initColumns\" v-if=\"col.show!=false && colspan(col,data) != 0 && rowspan(col,data) !=0\" :colspan=\"colspan(col,data)\" :rowspan=\"rowspan(col,data)\">\n                <template v-if=\"col.render\">\n                   {{{col.render.call(this._context,data[col.dataIndex],data,index)}}}\n                </template>\n                <template v-else>\n                  {{{ col.dataIndex ? data[col.dataIndex] : ''}}}\n                </template>\n                </td>\n            </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>\n  <div class='{{prefixCls}}-data-table-bar' v-if=\"page\" >\n    每页&nbsp;<n3-select \n      :cancelled=\"false\"\n      v-if=\"page\"\n      :options=\"options\" \n      class=\"{{prefixCls}}-data-table-page\" \n      :value.sync=\"pagesize\"></n3-select>&nbsp;条\n       共&nbsp;{{pagination.total}}&nbsp;条\n    <div class=\"pull-right\">  \n    <n3-simple-pagination v-if=\"page\" \n    :total=\"pagination.total\" \n    :current.sync=\"pagination.current\" \n    :pagesize=\"pagination.pagesize\" \n    :on-change=\"pageChange\"\n    ></n3-simple-pagination>\n    </div>\n  </div>\n  </div>";

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(270)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(274)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timeline.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timeline.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Timeline.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Timeline.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Timeline.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3TimelineItem = __webpack_require__(271);
	
	var _n3TimelineItem2 = _interopRequireDefault(_n3TimelineItem);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//  	<ul class="{{prefixCls}}-timeline-con">
	//  		<template v-if="value">
	//  			<n3-timeline-item v-for="i in value" :color="i.color" :icon="i.icon" >
	//  				{{{i.content}}}
	//  			</n3-timeline-item>
	//  		</template>
	//  		<template v-else>
	//  			<slot></slot>
	//  		</template>
	//  	</ul>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Array
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  watch: {
	    value: {
	      handler: function handler(val) {
	        var _this = this;
	
	        if (_getType2.default.isArray(val)) {
	          this.$nextTick(function () {
	            _this._context.$compile(_this.$el);
	          });
	        }
	      },
	
	      immediate: true
	    }
	  },
	  components: {
	    n3TimelineItem: _n3TimelineItem2.default
	  }
	};
	// </script>

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(272)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(273)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3TimelineItem.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3TimelineItem.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3TimelineItem.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3TimelineItem.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3TimelineItem.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 272 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//  	<li class="{{prefixCls}}-timeline-item">
	//  		<div class="{{prefixCls}}-timeline-item-tail"></div>
	//  		<div :class="[prefixCls+'-timeline-item-head',icon?'fa fa-'+icon:'']" :style="style"></div>
	//  		<div class="{{prefixCls}}-timeline-item-content">
	// 	 		<slot></slot>
	//  		</div>
	//  	</li>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    icon: {
	      type: String
	    },
	    color: {
	      type: String,
	      default: '#333'
	    },
	    content: {},
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    style: function style() {
	      return {
	        'border-color': this.color,
	        'color': this.color
	      };
	    }
	  }
	};
	// </script>

/***/ },
/* 273 */
/***/ function(module, exports) {

	module.exports = "<li class=\"{{prefixCls}}-timeline-item\">\n \t\t<div class=\"{{prefixCls}}-timeline-item-tail\"></div>\n \t\t<div :class=\"[prefixCls+'-timeline-item-head',icon?'fa fa-'+icon:'']\" :style=\"style\"></div>\n \t\t<div class=\"{{prefixCls}}-timeline-item-content\">\n\t \t\t<slot></slot>\n \t\t</div>\n \t</li>";

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"{{prefixCls}}-timeline-con\">\n \t\t<template v-if=\"value\">\n \t\t\t<n3-timeline-item v-for=\"i in value\" :color=\"i.color\" :icon=\"i.icon\" >\n \t\t\t\t{{{i.content}}}\n \t\t\t</n3-timeline-item>\n \t\t</template>\n \t\t<template v-else>\n \t\t\t<slot></slot>\n \t\t</template>\n \t</ul>";

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(276)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(277)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tags.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tags.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tags.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Tags.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Tags.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    value: {
	      type: Array,
	      twoway: true
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    removable: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default
	  },
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var size = this.size;
	      var type = this.type;
	
	      var klass = {};
	
	      klass[prefixCls + '-tag-group'] = true;
	      size ? klass[prefixCls + '-tag-' + size] = true : '';
	      type ? klass[prefixCls + '-tag-' + type] = true : '';
	
	      return klass;
	    },
	    active: function active() {
	      return this.type === 'default' ? 'tag-primary' : 'tag-' + this.type;
	    }
	  },
	  methods: {
	    tagClass: function tagClass(i) {
	      var prefixCls = this.prefixCls;
	
	      var klass = {};
	
	      klass[prefixCls + '-tag'] = true;
	      klass[prefixCls + '-tag-disabled'] = i.disabled;
	
	      return klass;
	    },
	    find: function find(i, target) {
	      var ret = -1;
	      target.forEach(function (e, index) {
	        if (e.value === i.value) {
	          ret = index;
	        }
	      });
	      return ret;
	    },
	    del: function del(i) {
	      if (i.disabled) return;
	      var index = this.find(i, this.value);
	
	      if (index > -1) {
	        this.value.splice(index, 1);
	      }
	    }
	  }
	};
	// </script>
	// <template>
	// <div :class="classObj">
	// 	<label 
	//   	v-for="i in value" 
	// 	  :class="tagClass(i)">
	// 	 {{i.label}}
	// 	<a name="remove" v-if="removable" @click="del(i)"><n3-icon type="times"></n3-icon></a>
	// 	</label>
	// </div>
	// </template>
	
	// <script>

/***/ },
/* 277 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\">\n\t<label \n  \tv-for=\"i in value\" \n\t  :class=\"tagClass(i)\">\n\t {{i.label}}\n\t<a name=\"remove\" v-if=\"removable\" @click=\"del(i)\"><n3-icon type=\"times\"></n3-icon></a>\n\t</label>\n</div>";

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(279)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(280)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Breadcrumb.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Breadcrumb.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Breadcrumb.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Breadcrumb.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Breadcrumb.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 279 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<ol class="{{prefixCls}}-breadcrumb">
	// 		<slot></slot>
	// 	</ol>
	// </template>
	// <script>
	exports.default = {
		props: {
			prefixCls: {
				type: String,
				default: 'n3'
			}
		}
	};
	// </script>

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = "<ol class=\"{{prefixCls}}-breadcrumb\">\n\t\t<slot></slot>\n\t</ol>";

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(282)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(283)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3BreadcrumbItem.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3BreadcrumbItem.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3BreadcrumbItem.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3BreadcrumbItem.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3BreadcrumbItem.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//  	<li :class="[active ? prefixCls + '-breadcrumb-active' : '']">
	// 		<a v-if='href' :href="href" >
	//     	<slot></slot>
	//   	</a>
	//   	<span v-else>
	//     	<slot></slot>
	//   	</span>
	//   	</li>
	// </template>
	// <script>
	exports.default = {
	  props: {
	    href: {
	      type: String
	    },
	    active: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  }
	};
	// </script>

/***/ },
/* 283 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"[active ? prefixCls + '-breadcrumb-active' : '']\">\n\t\t<a v-if='href' :href=\"href\" >\n    \t<slot></slot>\n  \t</a>\n  \t<span v-else>\n    \t<slot></slot>\n  \t</span>\n  \t</li>";

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(285)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(286)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Form.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Form.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Form.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Form.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Form.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 285 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <form :class="classObj"  @submit.prevent="noop">
	//       <slot></slot>
	//   </form>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'horizontal'
	    },
	    validate: {
	      type: Boolean,
	      default: false
	    },
	    result: {
	      type: Object,
	      twoWay: true
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	
	  methods: {
	    noop: function noop() {}
	  },
	
	  watch: {
	    validate: function validate(val) {
	      this.$broadcast('n3@openValidate', val);
	      if (val) {
	        this.result = this._result;
	      } else {
	        this.result = { results: {}, isvaild: true };
	      }
	    }
	  },
	
	  ready: function ready() {
	    if (!this.validate) {
	      this.result = { results: {}, isvaild: true };
	    }
	    this.$broadcast('n3@openValidate', this.validate);
	  },
	
	
	  computed: {
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var type = this.type;
	
	      var klass = {};
	
	      klass[prefixCls + '-form-horizontal'] = type === 'horizontal';
	      klass[prefixCls + '-form-inline'] = type === 'inline';
	
	      return klass;
	    }
	  },
	
	  events: {
	    'n3@validateChange': function n3ValidateChange(val) {
	      var name = val.name;
	      var validateResult = Object.assign({}, this._result);
	
	      if (!validateResult.results) validateResult.results = {};
	      validateResult.results[name] = val.result;
	
	      validateResult.isvalid = true;
	
	      for (var i in validateResult.results) {
	        if (!validateResult.results[i]['isvalid']) {
	          validateResult.isvalid = false;
	          break;
	        }
	      }
	
	      this._result = validateResult;
	
	      if (this.validate) {
	        this.result = this._result;
	      }
	    }
	  },
	
	  data: function data() {
	    return {
	      _result: { results: {}, isvaild: true }
	    };
	  }
	};
	// </script>

/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = "<form :class=\"classObj\"  @submit.prevent=\"noop\">\n      <slot></slot>\n  </form>";

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(288)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(289)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3FormItem.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3FormItem.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3FormItem.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3FormItem.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3FormItem.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 288 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// 	<div :class="classObj" >
	// 		<label class="{{prefixCls}}-col-sm-{{labelCol}} {{prefixCls}}-control-label">
	//       <em class="{{prefixCls}}-form-need" v-if="need" >*</em>
	//       {{label}}
	//       </label>
	// 		<div class="{{prefixCls}}-col-sm-{{col}}">
	// 			<slot></slot>
	// 		</div>	
	// 	</div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    label: {
	      type: String
	    },
	    labelCol: {
	      type: Number,
	      default: 2
	    },
	    wrapCol: {
	      type: Number
	    },
	    need: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  computed: {
	    col: function col() {
	      return 12 - this.labelCol;
	    },
	    classObj: function classObj() {
	      var prefixCls = this.prefixCls;
	      var wrapCol = this.wrapCol;
	
	      var klass = {};
	
	      klass['clearfix'] = true;
	      klass[prefixCls + '-form-group'] = true;
	      wrapCol ? klass[prefixCls + '-col-sm-' + wrapCol] = true : '';
	
	      return klass;
	    }
	  }
	};
	// </script>

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classObj\" >\n\t\t<label class=\"{{prefixCls}}-col-sm-{{labelCol}} {{prefixCls}}-control-label\">\n      <em class=\"{{prefixCls}}-form-need\" v-if=\"need\" >*</em>\n      {{label}}\n      </label>\n\t\t<div class=\"{{prefixCls}}-col-sm-{{col}}\">\n\t\t\t<slot></slot>\n\t\t</div>\t\n\t</div>";

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(291)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(292)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slide.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slide.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Slide.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Slide.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Slide.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 291 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="{{prefixCls}}-carousel-item">
	//     <slot></slot>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      index: 0
	    };
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el == this.$el) {
	        this.index = c;
	        break;
	      }
	    }
	    this.$parent.indicator.push(this.index);
	    if (this.index == 0) {
	      this.$el.classList.add(this.prefixCls + '-carousel-active');
	    }
	  }
	};
	// </script>

/***/ },
/* 292 */
/***/ function(module, exports) {

	module.exports = "<div class=\"{{prefixCls}}-carousel-item\">\n    <slot></slot>\n  </div>";

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(294)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(295)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Uploader.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Uploader.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Uploader.vue"], function () {
	var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./n3Uploader.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./n3Uploader.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // <template>
	//   <div :class="[prefixCls + '-upload']" id="upload-{{uploadId}}">
	//     <div v-if="type === 'click'">
	//       <label>
	//         <input
	//           type="file"
	//           :name="name"
	//           :accept="accept"
	//           :id="uploadId"
	//           :multiple="multiple"
	//           @change="onChange($event)" />
	//         <slot>
	//           <n3-button>
	//             <n3-icon type="cloud-upload"></n3-icon>
	//             点击上传
	//           </n3-button>
	//         </slot>
	//       </label>
	//       <div :class="[prefixCls + '-upload-list']">
	//         <div :class="[prefixCls + '-upload-item']" v-for="file in uploadList">
	//           <div :class="[prefixCls + '-upload-item-info']">
	//             <n3-icon type="file-text-o"
	//               :class="[prefixCls + '-upload-file-icon']">
	//             </n3-icon>
	//             <span :class="[prefixCls + '-upload-file-name']">{{file.name}}</span>
	//             <n3-icon type="times"
	//               :class="[prefixCls + '-upload-del-info']"
	//               @click="delFile($index)">
	//             </n3-icon>
	//           </div>
	//           <n3-progress style="padding:0px 4px">
	//             <n3-progressbar
	//               type="success"
	//               height='3px'
	//               :now="progress[$index]"
	//             ></n3-progressbar>
	//           </n3-progress>
	//         </div>
	//       </div>
	//     </div>
	//     <div v-if="type === 'drag'"
	//          :class="[prefixCls + '-upload-drag']">
	//       <div 
	//         :class="[prefixCls + '-upload-drag-container', dragover && (prefixCls + '-upload-is-dragover')]"
	//         :style="{width:dragWidth,height:dragHeight}">
	//         <input type="file"
	//           :name="name"
	//           :id="uploadId"
	//           :accept="accept"
	//           :multiple="multiple"
	//           @change="onChange($event)" />
	//         <label :for="uploadId"
	//             :class="[prefixCls + '-upload-drag-area']">
	//         <n3-icon type="cloud-upload" size="60px" :class="[prefixCls + '-upload-drag-icon']"></n3-icon>
	//         <span v-if="advanceDrag">点击或将文件拖拽到此区域上传</span>
	//         <span v-if="!advanceDrag">当前环境不支持拖拽上传，请点此上传</span>
	//       </label>
	//       </div>
	//       <div :class="[prefixCls + '-upload-list']">
	//         <div :class="[prefixCls + '-upload-item']" v-for="file in uploadList">
	//           <div :class="[prefixCls + '-upload-item-info']">
	//             <n3-icon type="file-text-o"
	//               :class="[prefixCls + '-upload-file-icon']">
	//             </n3-icon>
	//             <span :class="[prefixCls + '-upload-file-name']">{{file.name}}</span>
	//             <n3-icon type="times"
	//               :class="[prefixCls + '-upload-del-info']"
	//               @click="delFile($index)">
	//             </n3-icon>
	//           </div>
	//           <n3-progress style="padding:0px 4px">
	//             <n3-progressbar
	//               type="success"
	//               height='3px'
	//               :now="progress[$index]"
	//             ></n3-progressbar>
	//           </n3-progress>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>
	
	
	var _n3Icon = __webpack_require__(112);
	
	var _n3Icon2 = _interopRequireDefault(_n3Icon);
	
	var _n3Button = __webpack_require__(137);
	
	var _n3Button2 = _interopRequireDefault(_n3Button);
	
	var _n3Progress = __webpack_require__(209);
	
	var _n3Progress2 = _interopRequireDefault(_n3Progress);
	
	var _n3Progressbar = __webpack_require__(206);
	
	var _n3Progressbar2 = _interopRequireDefault(_n3Progressbar);
	
	var _n3ToastMethod = __webpack_require__(162);
	
	var _n3ToastMethod2 = _interopRequireDefault(_n3ToastMethod);
	
	var _getType = __webpack_require__(105);
	
	var _getType2 = _interopRequireDefault(_getType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    name: {
	      type: String,
	      default: 'files'
	    },
	    type: {
	      type: String,
	      default: 'click'
	    },
	    accept: {
	      type: String,
	      default: ''
	    },
	    url: {
	      type: String,
	      default: ''
	    },
	    multiple: {
	      type: Boolean,
	      default: true
	    },
	    dragWidth: {
	      type: String,
	      default: '300px'
	    },
	    dragHeight: {
	      type: String,
	      default: '200px'
	    },
	    onError: {
	      type: Function,
	      default: function _default(data) {
	        (0, _n3ToastMethod2.default)({
	          text: data.message
	        });
	      }
	    },
	    onSuccess: {
	      type: Function
	    },
	    onDelete: {
	      type: Function
	    },
	    maxlength: Number,
	    prefixCls: {
	      type: String,
	      default: 'n3'
	    }
	  },
	  data: function data() {
	    return {
	      value: '',
	      uploadId: 'upload' + new Date().getTime() + Math.floor(Math.random() * 100),
	      percent: 0,
	      xhr: 'FormData' in window,
	      uploadList: [],
	      progress: [],
	      dragover: false
	    };
	  },
	
	  computed: {
	    advanceDrag: function advanceDrag() {
	      var div = document.createElement('div');
	      return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
	    }
	  },
	  components: {
	    n3Icon: _n3Icon2.default,
	    n3Button: _n3Button2.default,
	    n3Progressbar: _n3Progressbar2.default,
	    n3Progress: _n3Progress2.default
	  },
	  ready: function ready() {
	    this._input = document.querySelector('#' + this.uploadId);
	    this.$el = document.querySelector('#upload-' + this.uploadId);
	
	    this.advanceDrag && this.addDragEvt();
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this = this;
	
	    var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	    events.forEach(function (event) {
	      _this.$el.removeEventListener(event, function () {
	        return _this._eventHandler();
	      });
	    });
	  },
	
	  methods: {
	    onChange: function onChange(e) {
	      var files = e.target.files;
	      if (files) {
	        for (var i in files) {
	          if (_typeof(files[i]) === 'object' && files[i].name) {
	            this.progress.push(0);
	            this.uploadList.push(files[i]);
	          }
	        }
	      } else {
	        this.progress = [0];
	        this.uploadList = [{ name: this._input.value.replace(/^.*\\/, '') }];
	      }
	
	      if (this.maxlength && this.uploadList.length > this.maxlength) {
	        this._input.value = '';
	        this.uploadList = [];
	        this.setError('超过上传数量限制，请先删除再进行上传');
	      } else {
	        this.submitForm();
	      }
	    },
	    submitForm: function submitForm() {
	      if (this.uploadList.length > 0) {
	        if (this.url) {
	          if (this.xhr) {
	            this.xhrUpload();
	          } else {
	            this.iframeUpload();
	          }
	        }
	      }
	    },
	    xhrUpload: function xhrUpload() {
	      var self = this;
	      var data = new window.FormData();
	      var i = 0;
	      var len = this.uploadList.length;
	
	      for (i = 0; i < len; i++) {
	        (function (i, file) {
	          if (file.type.match(self.accept)) {
	            (function () {
	              data.append(self.name, file, file.name);
	
	              var xhr = new window.XMLHttpRequest();
	
	              xhr.open('post', self.url, true);
	
	              xhr.onload = function () {
	                self.parseResponse(xhr.responseText, i);
	              };
	
	              xhr.upload.onprogress = function (e) {
	                var loaded = e.loaded ? e.loaded : 0;
	                var total = e.total ? e.total : 1;
	
	                self.$set('progress[' + i + ']', parseInt(loaded / total * 100, 10));
	              };
	
	              xhr.onerror = function () {
	                self.setError('上传失败了！');
	              };
	
	              try {
	                xhr.send(data);
	              } catch (e) {
	                self.setError('上传失败了！');
	              }
	            })();
	          } else {
	            self.setError('不支持该文件类型');
	          }
	        })(i, this.uploadList[i]);
	      }
	    },
	    iframeUpload: function iframeUpload() {
	      var _this2 = this;
	
	      var i = 0;
	      var len = this.uploadList.length;
	      if (this.testSameOrigin(this.url)) {
	        var _loop = function _loop() {
	          var iframeName = 'uploadiframe-' + i + '-' + new Date().getTime();
	          var iframe = document.createElement('iframe');
	          var form = document.createElement('form');
	          var input = document.createElement('input');
	
	          input.setAttribute('type', 'file');
	          input.setAttribute('value', _this2.uploadList[i].name);
	          iframe.setAttribute('name', iframeName);
	          iframe.style.display = 'none';
	          form.setAttribute('method', 'post');
	          form.setAttribute('action', _this2.url);
	          form.setAttribute('target', iframeName);
	          form.setAttribute('data-index', i);
	
	          document.body.appendChild(form);
	          form.appendChild(iframe);
	          form.appendChild(input);
	
	          iframe.addEventListener('load', function () {
	            _this2.parseResponse(iframe.contentDocument.body.innerHTML, form.getAttribute('data-id'));
	            document.body.removeChild(form);
	          });
	          form.submit();
	        };
	
	        for (i = 0; i < len; i++) {
	          _loop();
	        }
	      } else {
	        this.setError('iframe不支持跨域请求');
	      }
	    },
	    testSameOrigin: function testSameOrigin(url) {
	      var loc = window.location;
	      var a = document.createElement('a');
	      a.href = url;
	      return a.hostname === loc.hostname && a.port === loc.port && a.protocol === loc.protocol;
	    },
	    parseResponse: function parseResponse(response, index) {
	      var data = null;
	
	      if (!response) {
	        this.setError('服务器没有响应', index);
	      } else {
	        try {
	          data = JSON.parse(response);
	        } catch (e) {
	          this.setError('服务器响应数据格式有问题', index);
	        }
	        if (data) {
	          if (data.success) {
	            if (_getType2.default.isFunction(this.onSuccess)) {
	              this.onSuccess({
	                data: data,
	                file: this.uploadList[index]
	              });
	            }
	          } else if (data.error) {
	            this.setError(data.error, index);
	          }
	        }
	      }
	    },
	    setError: function setError(message, index) {
	      if (_getType2.default.isFunction(this.onError)) {
	        this.onError({
	          message: message,
	          file: index && this.uploadList[index] || null
	        });
	      }
	
	      index > -1 && this.uploadList.splice(index, 1);
	    },
	    delFile: function delFile(index) {
	      if (_getType2.default.isFunction(this.onDelete)) {
	        this.onDelete(this.uploadList[index]);
	      }
	      this.uploadList.splice(index, 1);
	    },
	    addDragEvt: function addDragEvt() {
	      var _this3 = this;
	
	      var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	
	      events.forEach(function (event) {
	        _this3.$el.addEventListener(event, function (e) {
	          return _this3.dragHandler(e);
	        });
	      });
	    },
	    dragHandler: function dragHandler(e) {
	      var self = this;
	      e.preventDefault();
	      e.stopPropagation();
	
	      if (e.type === '') {}
	
	      if (e.type === 'dragover' || e.type === 'dragenter') {
	        self.dragover = true;
	      }
	
	      if (e.type === 'dragend' || e.type === 'dragleave' || e.type === 'drop') {
	        self.dragover = false;
	        if (e.type === 'drop') {
	          var files = e.dataTransfer.files || {};
	          for (var i in files) {
	            if (files[i] && files[i].name && files[i].size) {
	              self.progress.push(0);
	              self.uploadList.push(files[i]);
	            }
	          }
	          self.submitForm();
	        }
	      }
	    }
	  }
	};
	// </script>

/***/ },
/* 295 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"[prefixCls + '-upload']\" id=\"upload-{{uploadId}}\">\n    <div v-if=\"type === 'click'\">\n      <label>\n        <input\n          type=\"file\"\n          :name=\"name\"\n          :accept=\"accept\"\n          :id=\"uploadId\"\n          :multiple=\"multiple\"\n          @change=\"onChange($event)\" />\n        <slot>\n          <n3-button>\n            <n3-icon type=\"cloud-upload\"></n3-icon>\n            点击上传\n          </n3-button>\n        </slot>\n      </label>\n      <div :class=\"[prefixCls + '-upload-list']\">\n        <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in uploadList\">\n          <div :class=\"[prefixCls + '-upload-item-info']\">\n            <n3-icon type=\"file-text-o\"\n              :class=\"[prefixCls + '-upload-file-icon']\">\n            </n3-icon>\n            <span :class=\"[prefixCls + '-upload-file-name']\">{{file.name}}</span>\n            <n3-icon type=\"times\"\n              :class=\"[prefixCls + '-upload-del-info']\"\n              @click=\"delFile($index)\">\n            </n3-icon>\n          </div>\n          <n3-progress style=\"padding:0px 4px\">\n            <n3-progressbar\n              type=\"success\"\n              height='3px'\n              :now=\"progress[$index]\"\n            ></n3-progressbar>\n          </n3-progress>\n        </div>\n      </div>\n    </div>\n    <div v-if=\"type === 'drag'\"\n         :class=\"[prefixCls + '-upload-drag']\">\n      <div \n        :class=\"[prefixCls + '-upload-drag-container', dragover && (prefixCls + '-upload-is-dragover')]\"\n        :style=\"{width:dragWidth,height:dragHeight}\">\n        <input type=\"file\"\n          :name=\"name\"\n          :id=\"uploadId\"\n          :accept=\"accept\"\n          :multiple=\"multiple\"\n          @change=\"onChange($event)\" />\n        <label :for=\"uploadId\"\n            :class=\"[prefixCls + '-upload-drag-area']\">\n        <n3-icon type=\"cloud-upload\" size=\"60px\" :class=\"[prefixCls + '-upload-drag-icon']\"></n3-icon>\n        <span v-if=\"advanceDrag\">点击或将文件拖拽到此区域上传</span>\n        <span v-if=\"!advanceDrag\">当前环境不支持拖拽上传，请点此上传</span>\n      </label>\n      </div>\n      <div :class=\"[prefixCls + '-upload-list']\">\n        <div :class=\"[prefixCls + '-upload-item']\" v-for=\"file in uploadList\">\n          <div :class=\"[prefixCls + '-upload-item-info']\">\n            <n3-icon type=\"file-text-o\"\n              :class=\"[prefixCls + '-upload-file-icon']\">\n            </n3-icon>\n            <span :class=\"[prefixCls + '-upload-file-name']\">{{file.name}}</span>\n            <n3-icon type=\"times\"\n              :class=\"[prefixCls + '-upload-del-info']\"\n              @click=\"delFile($index)\">\n            </n3-icon>\n          </div>\n          <n3-progress style=\"padding:0px 4px\">\n            <n3-progressbar\n              type=\"success\"\n              height='3px'\n              :now=\"progress[$index]\"\n            ></n3-progressbar>\n          </n3-progress>\n        </div>\n      </div>\n    </div>\n  </div>";

/***/ },
/* 296 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  collapse: {
	    enter: function enter(el, done) {
	      var h = void 0;
	      el.style.maxHeight = '';
	      el.style.display = 'block';
	      h = el.offsetHeight;
	      el.style.maxHeight = '0px';
	
	      setTimeout(function () {
	        el.style.maxHeight = h + 'px';
	        done();
	      });
	    },
	    enterCancelled: function enterCancelled(el) {},
	    leave: function leave(el, done) {
	      el.style.maxHeight = el.offsetHeight + 'px';
	      setTimeout(function () {
	        el.style.maxHeight = '0px';
	        setTimeout(function () {
	          done();
	        }, 200);
	      }, 10);
	    },
	    leaveCancelled: function leaveCancelled() {}
	  }
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(298);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(300)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./common.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./common.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(299)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.eot?v=4.6.3');\n  src: url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'), url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.woff2?v=4.6.3') format('woff2'), url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.woff?v=4.6.3') format('woff'), url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.ttf?v=4.6.3') format('truetype'), url('https://cdn.bootcss.com/font-awesome/4.6.3/fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.n3-slider {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n}\n.n3-slider-horizontal {\n  width: 210px;\n  height: 20px;\n}\n.n3-slider-horizontal .n3-slider-track {\n  height: 8px;\n  width: 100%;\n  margin-top: -5px;\n  top: 50%;\n  left: 0;\n}\n.n3-slider-horizontal .n3-slider-selection,\n.n3-slider-horizontal .n3-slider-track-low,\n.n3-slider-horizontal .n3-slider-track-high {\n  height: 100%;\n  top: 0;\n  bottom: 0;\n}\n.n3-slider-horizontal .n3-slider-tick,\n.n3-slider-horizontal .n3-slider-handle {\n  margin-left: -10px;\n  margin-top: -5px;\n}\n.n3-slider-horizontal .n3-slider-tick-label-container {\n  white-space: nowrap;\n}\n.n3-slider-horizontal .n3-slider-tick-label-container .n3-slider-tick-label {\n  margin-top: 24px;\n  display: inline-block;\n  text-align: center;\n}\n.n3-slider-horizontal .n3-slider-tick-label-container .n3-slider-tick-label {\n  margin-top: 24px;\n  display: inline-block;\n  text-align: center;\n}\n.n3-slider-vertical {\n  height: 210px;\n  width: 20px;\n}\n.n3-slider-vertical .n3-slider-track {\n  width: 10px;\n  height: 100%;\n  margin-left: -5px;\n  left: 50%;\n  top: 0;\n}\n.n3-slider-vertical .n3-slider-selection {\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.n3-slider-vertical .n3-slider-track-low,\n.n3-slider-vertical .n3-slider-track-high {\n  width: 100%;\n  left: 0;\n  right: 0;\n}\n.n3-slider-vertical .n3-slider-tick,\n.n3-slider-vertical .n3-slider-handle {\n  margin-left: -5px;\n  margin-top: -10px;\n}\n.n3-slider-disabled .n3-slider-handle {\n  background-image: linear-gradient(to bottom, rgba(65, 202, 192, 0.1) 0%, #ddd 100%);\n  background-repeat: repeat-x;\n}\n.n3-slider-disabled .n3-slider-track {\n  background-image: linear-gradient(to bottom, rgba(65, 202, 192, 0.1) 0%, #ddd 100%);\n  background-repeat: repeat-x;\n  cursor: not-allowed;\n}\n.n3-slider input {\n  display: none;\n}\n.n3-slider .n3-tooltip.n3-tooltip-top {\n  margin-top: -46px;\n}\n.n3-slider .n3-tooltip-inner {\n  white-space: nowrap;\n}\n.n3-slider-hide {\n  display: none;\n}\n.n3-slider-track {\n  position: absolute;\n  cursor: pointer;\n  background: #f9f9f9;\n  border-radius: 4px;\n}\n.n3-slider-selection {\n  position: absolute;\n  background: #41cac0;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.n3-slider-selection.n3-slider-tick-slider-selection {\n  background-image: linear-gradient(to bottom, #41cac0 0%, #39b2a9 100%);\n  background-repeat: repeat-x;\n}\n.n3-slider-track-low,\n.n3-slider-track-high {\n  position: absolute;\n  background: transparent;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.n3-slider-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-color: #fff;\n  border: 3px solid #41cac0;\n}\n.n3-slider-handle.n3-slider-round {\n  border-radius: 50%;\n}\n.n3-slider-tick {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-image: linear-gradient(to bottom, #f9f9f9 0%, #ddd 100%);\n  background-repeat: repeat-x;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-sizing: border-box;\n  filter: none;\n  opacity: 0.8;\n  border: 0px solid transparent;\n}\n.n3-slider-tick.n3-slider-round {\n  border-radius: 50%;\n}\n.n3-slider-vertical .n3-slider-selection {\n  height: 0%;\n}\n.n3-slider-vertical .n3-slider-track-high {\n  height: 100%;\n}\n.n3-slider-horizontal .n3-tooltip.n3-tooltip-top {\n  margin-left: -15px;\n}\n.n3-slider-vertical .n3-tooltip.n3-tooltip-right {\n  margin-top: -16px;\n  margin-left: 16px;\n}\n.n3-tooltip.n3-slider-slider-tooltip-always {\n  display: block!important;\n}\n.n3-tooltip.n3-slider-slider-tooltip-hide {\n  display: none!important;\n}\n.fadeLeft-transition {\n  transition: all .3s ease;\n  transform: translateX(0);\n  opacity: 1;\n}\n.fadeLeft-enter,\n.fadeLeft-leave {\n  transform: translateX(-10px);\n  opacity: 0;\n}\n.fade-transition {\n  transition: opacity .3s ease;\n  opacity: 1;\n}\n.fade-enter,\n.fade-leave {\n  opacity: 0;\n}\n.fadeDown-transition {\n  transition: all .3s ease;\n  transform: translateY(0);\n  opacity: 1;\n}\n.fadeDown-enter,\n.fadeDown-leave {\n  transform: translateY(-10px);\n  opacity: 0;\n}\n.collapse-transition {\n  transition: max-height 0.2s ease;\n  overflow: hidden;\n}\n.bounce-enter {\n  animation: bounce-in 0.5s;\n}\n.bounce-leave {\n  animation: bounce-out 0.5s;\n}\n@keyframes bounce-in {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes bounce-out {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n.scale-transition,\n.fade-transition {\n  display: block;\n}\n.scale-enter {\n  animation: scale-in 0.15s ease-in;\n}\n.scale-leave {\n  animation: scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scale-out {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n.n3-aside-open {\n  transition: transform 0.3s;\n}\n.n3-aside-open.has-push-right {\n  transform: translateX(-300px);\n}\n.n3-aside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 1049;\n  overflow: auto;\n  background: #fff;\n}\n.n3-aside-left {\n  left: 0;\n  right: auto;\n}\n.n3-aside-right {\n  left: auto;\n  right: 0;\n}\n.n3-aside:focus {\n  outline: 0;\n}\n.n3-aside-dialog .n3-aside-header {\n  min-height: 16.43px;\n  padding: 6px 15px;\n  background: #41cac0;\n  color: #fff;\n}\n.n3-aside-dialog .n3-aside-header .n3-close {\n  margin-right: -8px;\n  padding: 4px 8px;\n  color: #fff;\n  font-size: 25px;\n  opacity: .8;\n}\n.n3-aside-dialog .n3-aside-body {\n  position: relative;\n  padding: 15px;\n}\n.n3-aside-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  opacity: 0;\n  transition: opacity .3s ease;\n  background-color: #000;\n}\n.n3-aside-in {\n  opacity: .5;\n}\n.slideleft-enter {\n  animation: slideleft-in 0.3s;\n}\n.slideleft-leave {\n  animation: slideleft-out 0.3s;\n}\n@keyframes slideleft-in {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideleft-out {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n}\n.slideright-enter {\n  animation: slideright-in 0.3s;\n}\n.slideright-leave {\n  animation: slideright-out 0.3s;\n}\n@keyframes slideright-in {\n  0% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slideright-out {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n.n3-data-table .n3-page-loading {\n  z-index: 1;\n}\n.n3-data-table-search {\n  margin-top: 0px;\n  width: 200px;\n  display: inline-block;\n}\n.n3-data-table-bar {\n  margin-bottom: 10px;\n}\n.n3-data-table-page {\n  display: inline-block;\n}\n.n3-data-table-inner-btn {\n  height: 34px;\n}\n.n3-data-table-inner-btn .fa {\n  margin-top: 3px;\n}\n.n3-data-table-sort {\n  font-size: 15px;\n}\n.n3-data-table-sort .fa:hover {\n  cursor: pointer;\n}\n.n3-data-table-sort .fa-caret-up {\n  position: relative;\n  top: -4px;\n  left: 6px;\n}\n.n3-data-table-sort .fa-caret-down {\n  position: relative;\n  top: 5px;\n  left: -7px;\n}\n.n3-data-table-loading {\n  filter: blur(3px);\n}\n.n3-data-table .n3-table-bordered {\n  border-collapse: collapse;\n}\n.n3-data-table-row-select {\n  width: 30px;\n  text-align: center;\n  vertical-align: middle;\n}\n.n3-datepicker {\n  position: relative;\n  display: inline-block;\n}\n.n3-datepicker-popup {\n  position: absolute;\n  border: 1px solid #ccc;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n.n3-datepicker-inner {\n  width: 268px;\n}\n.n3-datepicker-ctrl p,\n.n3-datepicker-ctrl span,\n.n3-datepicker-body span {\n  display: inline-block;\n  width: 38px;\n  line-height: 38px;\n  height: 38px;\n}\n.n3-datepicker-ctrl p {\n  width: 65%;\n}\n.n3-datepicker-ctrl span {\n  position: absolute;\n}\n.n3-datepicker-body span {\n  text-align: center;\n}\n.n3-datepicker-mouthRange span {\n  width: 44px;\n  height: 44px;\n  line-height: 45px;\n}\n.n3-datepicker-item-disable {\n  background-color: white!important;\n  cursor: not-allowed !important;\n}\n.n3-datepicker .n3-datepicker-decadeRange span:first-child,\n.n3-datepicker .n3-datepicker-decadeRange span:last-child,\n.n3-datepicker-item-disable,\n.n3-datepicker-item-gray {\n  color: #ccc;\n}\n.n3-datepicker-dateRange-item-active:hover,\n.n3-datepicker-dateRange-item-active {\n  background: #41cac0 !important;\n  color: white!important;\n}\n.n3-datepicker-mouthRange {\n  margin-top: 10px;\n}\n.n3-datepicker-mouthRange span,\n.n3-datepicker-ctrl span,\n.n3-datepicker-ctrl p,\n.n3-datepicker-dateRange span {\n  transition: all .3s ease;\n  cursor: pointer;\n}\n.n3-datepicker-mouthRange span:hover,\n.n3-datepicker-ctrl p:hover,\n.n3-datepicker-ctrl i:hover,\n.n3-datepicker-dateRange span:hover,\n.n3-datepicker-dateRange-item-hover {\n  background-color: rgba(65, 202, 192, 0.1);\n}\n.n3-datepicker-weekRange {\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd;\n}\n.n3-datepicker-weekRange span {\n  font-weight: bold;\n}\n.n3-datepicker-ctrl {\n  position: relative;\n  height: 38px;\n  line-height: 38px;\n  font-weight: bold;\n  text-align: center;\n}\n.n3-datepicker .n3-month-btn {\n  font-weight: bold;\n  user-select: none;\n}\n.n3-datepicker-preBtn {\n  left: 2px;\n}\n.n3-datepicker-nextBtn {\n  right: 2px;\n}\n.n3-timepicker {\n  display: inline-block;\n}\n.n3-timepicker-slider {\n  margin-top: 20px;\n}\n.n3-timepicker-popup {\n  position: absolute;\n  border: 1px solid #ccc;\n  background: #fff;\n  margin-top: 2px;\n  z-index: 1000;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  padding: 10px 0px 0px;\n}\n.n3-timepicker-popup .slider-sin-wrap:after {\n  top: 5px;\n}\n.n3-timepicker-slider-sin-wrap {\n  float: left;\n  width: 20px;\n  height: 275px;\n  margin: 4px 14px;\n  position: relative;\n}\n.n3-timepicker-slider-sin-wrap:before {\n  padding-left: 2px;\n  font-size: 16px;\n  font-weight: 700;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"hour\"] {\n  z-index: 10;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"hour\"]:before {\n  content: \"\\65F6\";\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"minute\"] {\n  z-index: 9;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"minute\"]:before {\n  content: \"\\5206\";\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"second\"] {\n  z-index: 8;\n}\n.n3-timepicker-slider-sin-wrap[data-role=\"second\"]:before {\n  content: \"\\79D2\";\n}\n.n3-timepicker-slider-sin-wrap:after {\n  content: \":\";\n  position: absolute;\n  top: 27px;\n  left: 32px;\n}\n.n3-timepicker-slider-sin-wrap:last-child:after {\n  display: none;\n}\n.n3-datetimepicker .n3-datepicker-inner {\n  width: 268px;\n  display: inline-block;\n  border-right: 1px solid #ddd;\n  vertical-align: top;\n}\n.n3-datetimepicker .n3-timepicker-con {\n  display: inline-block;\n  margin-top: 10px;\n}\n.n3-datetimepicker .n3-timepicker-slider-sin-wrap > div {\n  margin-top: 25px;\n}\n.n3-datetimepicker .n3-timepicker-con .n3-timepicker-slider-sin-wrap:after {\n  top: 3px;\n}\n.n3-dropdown-con {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.n3-dropdown-con .n3-dropdown-menu {\n  display: block;\n}\n.n3-dropdown {\n  position: relative;\n}\n.n3-dropdown-toggle:focus {\n  outline: 0;\n}\n.n3-dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  overflow: auto;\n}\n.n3-dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.n3-dropdown-menu > li > a {\n  display: block;\n  padding: 5px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  font-size: 13px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all .3s ease;\n}\n.n3-dropdown-menu > li > a:hover,\n.n3-dropdown-menu > li > a:focus {\n  background-color: rgba(65, 202, 192, 0.1);\n  color: #333;\n  text-decoration: none;\n}\n.n3-dropdown-menu > .n3-dropdown-active > a,\n.n3-dropdown-menu > .n3-dropdown-active > a:hover,\n.n3-dropdown-menu > .n3-dropdown-active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #41cac0;\n  outline: 0;\n}\n.n3-dropdown-menu > .n3-dropdown-disabled > a,\n.n3-dropdown-menu > .n3-dropdown-disabled > a:hover,\n.n3-dropdown-menu > .n3-dropdown-disabled > a:focus {\n  color: #999;\n}\n.n3-dropdown-menu > .n3-dropdown-disabled > a:hover,\n.n3-dropdown-menu > .n3-dropdown-disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n}\n.n3-btn.n3-dropdown-toggle,\n.n3-btn-group.n3-open .n3-dropdown-toggle {\n  box-shadow: none;\n}\n.n3-open > .n3-dropdown-menu {\n  display: block;\n}\n.n3-open > a {\n  outline: 0;\n}\n.pull-right > .n3-dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.n3-navbar-fixed-bottom .n3-dropdown .n3-dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .n3-navbar-right .n3-dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .n3-navbar-right .n3-dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.n3-form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.n3-form-control:focus {\n  border: 1px solid #41cac0;\n  outline: 0;\n}\n.n3-form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.n3-form-control:-ms-input-placeholder {\n  color: #999;\n}\n.n3-form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.n3-form-control[disabled],\n.n3-form-control[readonly] {\n  cursor: not-allowed;\n  background-color: #f9f9f9;\n  opacity: 1;\n}\ntextarea.n3-form-control {\n  height: auto;\n}\n.n3-err-tip {\n  color: #ff6c60;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.n3-form-horizontal .n3-control-label {\n  font-weight: 300;\n  font-size: 14px;\n  text-align: left;\n}\n.n3-form-inline .n3-slider,\n.n3-form-horizontal .n3-slider {\n  margin: 17px 0px 0px 10px;\n}\n.n3-form-inline .n3-switch,\n.n3-form-horizontal .n3-switch {\n  margin-top: 5px;\n}\n.n3-form-group {\n  margin-bottom: 15px;\n  padding: 5px 0px;\n}\n.n3-has-feedback {\n  position: relative;\n}\n.n3-has-feedback .n3-form-control {\n  padding-right: 42.5px;\n}\n.n3-form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.n3-has-success .n3-control-label {\n  color: #2ecc71;\n}\n.n3-has-success .n3-form-control {\n  border-color: #2ecc71;\n}\n.n3-has-success .n3-form-control:focus {\n  border-color: #29b464;\n}\n.n3-has-success .n3-form-control-feedback {\n  color: #2ecc71;\n}\n.n3-has-warining .n3-control-label {\n  color: #f1c500;\n}\n.n3-has-warining .n3-form-control {\n  border-color: #f1c500;\n}\n.n3-has-warining .n3-form-control:focus {\n  border-color: #dbb509;\n}\n.n3-has-warining .n3-form-control-feedback {\n  color: #f1c500;\n}\n.n3-has-error .n3-control-label {\n  color: #ff6c60;\n}\n.n3-has-error .n3-form-control {\n  border-color: #ff6c60;\n}\n.n3-has-error .n3-form-control:focus {\n  border-color: #e74c3c;\n}\n.n3-has-error .n3-form-control-feedback {\n  color: #ff6c60;\n}\n.n3-has-feedback label ~ .n3-form-control-feedback {\n  top: 31px;\n}\n.n3-form-need {\n  color: red;\n  position: relative;\n  top: 2px;\n  left: 3px;\n  font-size: 14px;\n  font-weight: bold;\n  margin-right: 8px;\n}\n.n3-form-inline .n3-control-label {\n  padding-top: 7px;\n}\n@media (min-width: 768px) {\n  .n3-form-inline .n3-form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .n3-form-inline .n3-form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .n3-form-inline .n3-form-control-static {\n    display: inline-block;\n  }\n  .n3-form-inline .n3-control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .n3-form-inline .n3-has-feedback .n3-form-control-feedback {\n    top: 0;\n  }\n}\n.n3-form-horizontal .n3-form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .n3-form-horizontal .n3-control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n/* loading */\n.n3-page-loading-con {\n  display: inline-block;\n  z-index: 1000;\n}\n.n3-page-loading {\n  animation: loading-spin 2s linear 0s infinite;\n  font-size: 28px;\n  float: left;\n}\n.n3-page-loading:before {\n  font-family: \"FontAwesome\";\n  content: \"\\F110\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n}\n.n3-page-loading.n3-loading-lg {\n  font-size: 40px;\n}\n.n3-page-loading.n3-loading-lg.n3-loading-center {\n  margin: -20px 0 0 -20px;\n}\n.n3-page-loading.n3-loading-sm {\n  font-size: 18px;\n}\n.n3-page-loading.n3-loading-sm.n3-loading-center {\n  margin: -9px 0 0 -9px;\n}\n.n3-page-loading.n3-loading-xs {\n  font-size: 12px;\n}\n.n3-page-loading.n3-loading-xs.n3-loading-center {\n  margin: -6px 0 0 -6px;\n}\n.n3-page-loading.n3-loading-refresh:before {\n  content: \"\\F021\";\n}\n.n3-loading-center {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin: -14px 0 0 -14px;\n}\n@keyframes loading-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.n3-tooltip {\n  position: absolute;\n  z-index: 1030;\n  display: block;\n  font-size: 12px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  line-height: 1.4;\n  visibility: visible;\n  opacity: .9;\n}\n.n3-tooltip-in {\n  opacity: 0.9;\n}\n.n3-tooltip-top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.n3-tooltip-top .n3-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.n3-tooltip-right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.n3-tooltip-right .n3-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.n3-tooltip-bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.n3-tooltip-bottom .n3-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.n3-tooltip-left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.n3-tooltip-left .n3-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.n3-tooltip-inner {\n  max-width: 200px;\n  padding: 9px 11px;\n  color: #fff;\n  text-align: left;\n  background-color: #000;\n  border-radius: 4px;\n}\n.n3-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.n3-popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  white-space: normal;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.n3-popover-top {\n  margin-top: -10px;\n}\n.n3-popover-right {\n  margin-left: 10px;\n}\n.n3-popover-bottom {\n  margin-top: 10px;\n}\n.n3-popover-left {\n  margin-left: -10px;\n}\n.n3-popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  border-bottom: 1px solid #ddd;\n  border-radius: 5px 5px 0 0;\n}\n.n3-popover-content {\n  padding: 9px 14px;\n}\n.n3-popover-arrow,\n.n3-popover-arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.n3-popover-arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.n3-popover-arrow {\n  border-width: 11px;\n}\n.n3-popover-top > .n3-popover-arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  border-bottom-width: 0;\n}\n.n3-popover-top > .n3-popover-arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.n3-popover-right > .n3-popover-arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n  border-left-width: 0;\n}\n.n3-popover-right > .n3-popover-arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.n3-popover-bottom > .n3-popover-arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.n3-popover-bottom > .n3-popover-arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.n3-popover-left > .n3-popover-arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.n3-popover-left > .n3-popover-arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.n3-select-group .n3-select-search input {\n  border: 0px;\n  border-bottom: 1px solid #ddd;\n}\n.n3-select-group .n3-dropdown-menu {\n  display: block;\n  overflow-y: auto;\n}\n.n3-select-group .n3-dropdown-menu .n3-notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f9f9f9;\n  border: 1px solid #ddd;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n}\n.n3-select-group .n3-dropdown-menu .fa-check {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n.n3-select-group .n3-dropdown-menu .fa-plus-square-o {\n  font-size: 20px;\n  position: absolute;\n  top: 11px;\n  right: 15px;\n}\n.n3-select-group .n3-dropdown-menu .n3-select-all {\n  border-bottom: 1px solid #ddd;\n}\n.n3-select-group .n3-dropdown-menu .n3-select-all a {\n  cursor: pointer;\n}\n.n3-select-group .n3-dropdown-toggle {\n  overflow: hidden;\n  word-break: break-all;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.n3-simple-pagination .n3-pagination {\n  margin: 0px;\n}\n.n3-simple-pagination-input {\n  position: relative;\n  top: 1px;\n}\n.n3-simple-pagination-btn {\n  height: 33px;\n}\n.n3-simple-pagination-btn .fa {\n  margin-top: 2px;\n}\n.n3-timeline-con {\n  position: relative;\n}\n.n3-timeline-con .n3-timeline-item:last-child .n3-timeline-item-tail {\n  display: none;\n}\n.n3-timeline-con .n3-timeline-item {\n  position: relative;\n  padding: 0 0 12px;\n  margin: 0;\n  display: block;\n}\n.n3-timeline-con .n3-timeline-item .n3-timeline-item-tail {\n  position: absolute;\n  left: 5px;\n  top: 0;\n  height: 100%;\n  border-left: 2px solid #ddd;\n}\n.n3-timeline-con .n3-timeline-item .n3-timeline-item-head {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border-radius: 100px;\n  border: 2px solid transparent;\n  z-index: 1;\n}\n.n3-timeline-con .n3-timeline-item .n3-timeline-item-head.fa {\n  border: 0px;\n  top: -2px;\n  left: -1px;\n  font-size: 16px;\n}\n.n3-timeline-con .n3-timeline-item .n3-timeline-item-content {\n  padding: 0 0 10px 24px;\n  font-size: 12px;\n  position: relative;\n  top: -3px;\n}\n.n3-steps {\n  font-size: 0px;\n  overflow: hidden;\n  line-height: 0px;\n  margin: 18px 0px;\n  display: flex;\n}\n.n3-steps * {\n  box-sizing: content-box;\n}\n.n3-steps-wrap {\n  padding: 0;\n  flex: 1;\n}\n.n3-steps-wrap > div {\n  width: 100%;\n  line-height: 32px;\n  vertical-align: top;\n  font-size: 12px;\n  position: relative;\n}\n.n3-steps-wrap > div > label {\n  margin: 0 0 0 26px;\n  cursor: default;\n}\n.n3-steps-triangle-right {\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 16px;\n  position: absolute;\n  right: -31px;\n  z-index: 1;\n}\n.n3-steps-triangle-right-bg {\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 16px;\n  position: absolute;\n  right: -31px;\n  z-index: 1;\n  border-width: 20px;\n  right: -40px;\n  border-color: transparent transparent transparent #fff;\n  top: -4px;\n}\n.n3-steps-round {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  text-align: center;\n  line-height: 16px;\n}\n.n3-steps-round + span:before {\n  content: '\\A0';\n}\n.n3-steps-finished {\n  background-color: #39b2a9;\n  color: #fff;\n}\n.n3-steps-finished .n3-steps-triangle-right {\n  border-color: transparent transparent transparent #39b2a9;\n}\n.n3-steps-finished .n3-steps-round {\n  background-color: fff;\n  color: #39b2a9;\n}\n.n3-steps-finished .n3-steps-round > i {\n  color: #39b2a9;\n  font-size: 12px;\n}\n.n3-steps-current {\n  background-color: #41cac0;\n  color: #fff;\n}\n.n3-steps-current .n3-steps-triangle-right {\n  border-color: transparent transparent transparent #41cac0;\n}\n.n3-steps-current .n3-steps-round {\n  background-color: #fff;\n  color: #41cac0;\n}\n.n3-steps-todo {\n  background-color: #f9f9f9;\n  color: #999;\n}\n.n3-steps-todo .n3-steps-triangle-right {\n  border-color: transparent transparent transparent #f9f9f9;\n}\n.n3-steps-todo .n3-steps-round {\n  background-color: #fff;\n}\n > :last-child .n3-steps-triangle-right,\n > :last-child .n3-steps-triangle-right-bg {\n  display: none;\n}\n.n3-steps-round-con {\n  list-style-type: none;\n  margin: 18px 0px;\n  padding: 0px;\n  display: flex;\n}\n.n3-steps-round-con > li .n3-steps-round {\n  color: #fff;\n  background-color: #ddd;\n}\n.n3-steps-round-con > .n3-steps-finished:before {\n  background-color: #39b2a9;\n}\n.n3-steps-round-con > .n3-steps-finished .n3-steps-round {\n  background-color: #39b2a9;\n  border: 4px #39b2a9 solid;\n}\n.n3-steps-round-con > .n3-steps-finished label {\n  color: #39b2a9;\n}\n.n3-steps-round-con > .n3-steps-current:before {\n  background-color: #41cac0;\n}\n.n3-steps-round-con > .n3-steps-current .n3-steps-round {\n  background-color: #41cac0;\n  border: 4px #41cac0 solid;\n}\n.n3-steps-round-con > .n3-steps-current label {\n  color: #41cac0;\n}\n.n3-steps-round-con > li {\n  padding: 0px;\n  position: relative;\n  flex: 1;\n  background-color: transparent;\n}\n.n3-steps-round-con:before,\n.n3-steps-round-con:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n.n3-steps-round-con > li:before {\n  content: '';\n  width: 100%;\n  height: 6px;\n  margin: 12px 0px;\n  display: block;\n  float: left;\n  background-color: #f9f9f9;\n}\n.n3-steps-round-con > li:first-child:before {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.n3-steps-round-con > li:last-child:before {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.n3-steps-round-con > li .n3-steps-wrap {\n  position: absolute;\n  left: 50%;\n  margin-left: -25px;\n  width: 50px;\n  text-align: center;\n  background: #fff;\n  top: 0px;\n}\n.n3-steps-round-con > li .n3-steps-round {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n  color: #fff;\n  line-height: 22px;\n  text-align: center;\n  border: 4px #ddd solid;\n  background-color: #fff;\n  color: #999;\n}\n.n3-steps-round-con > li .n3-steps-round > i {\n  color: #39b2a9;\n  font-size: 12px;\n}\n.n3-steps-round-con > li label {\n  width: 100%;\n  text-align: center;\n  color: #999;\n  margin: 10px 0px 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.n3-steps-round-con > .n3-steps-finished:before,\n.n3-steps-round-con .n3-steps-current:before {\n  background-color: #39b2a9;\n}\n.n3-steps-round-con > .n3-steps-finished .n3-steps-round,\n.n3-steps-round-con .n3-steps-current .n3-steps-round {\n  border: 4px #39b2a9 solid;\n  background-color: #39b2a9;\n  color: #fff;\n}\n.n3-steps-round-con > .n3-steps-finished label,\n.n3-steps-round-con .n3-steps-current label {\n  color: #39b2a9;\n}\n.n3-switch {\n  width: 68px;\n  height: 27px;\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: 30px;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  line-height: 8px;\n  z-index: 0;\n  user-select: none;\n  vertical-align: middle;\n  transition: background ease-in-out 0.15s, box-shadow ease-in-out 0.15s, color ease-in-out 0.15s;\n  background: #41cac0;\n  color: #fff;\n}\n.n3-switch-container {\n  width: 102px;\n  margin-left: 0px;\n  display: inline-block;\n  top: 0;\n  border-radius: 4px;\n  transform: translate3d(0, 0, 0);\n}\n.n3-switch-handle-on,\n.n3-switch-handle-off,\n.n3-switch-label {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 28px;\n  padding: 6px 2px 6px 10px;\n  font-size: 14px;\n  line-height: 16px;\n  vertical-align: middle;\n  position: relative;\n  text-align: center;\n}\n.n3-switch-handle-on:after,\n.n3-switch-handle-off:after {\n  content: \" \";\n  width: 14px;\n  height: 28px;\n  position: absolute;\n  top: 0;\n  right: -14px;\n}\n.n3-switch-handle-on {\n  width: 37px;\n  z-index: 98;\n}\n.n3-switch-handle-off {\n  width: 37px;\n  z-index: 97;\n  padding: 6px 10px 6px 0px;\n}\n.n3-switch-handle-off:after {\n  left: -14px;\n}\n.n3-switch-label {\n  height: 28px;\n  padding: 0;\n  position: relative;\n  width: 28px !important;\n  z-index: 100;\n}\n.n3-switch-label:after {\n  transition: 0.25s ease-out;\n  background-color: #fff;\n  border-radius: 50%;\n  content: \" \";\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  box-shadow: 0 1px 2px #ccc;\n}\n.n3-switch-on .n3-switch-handle-on {\n  margin-left: -5px;\n}\n.n3-switch-off .n3-switch-handle-on {\n  margin-left: -43px;\n}\n.n3-switch-off {\n  background: #f9f9f9;\n  color: #fff;\n}\n.n3-switch-off .n3-switch-handle-off.n3-switch-default {\n  z-index: 99;\n  color: #999;\n}\n.n3-switch-disabled {\n  cursor: default !important;\n}\n.n3-switch-disabled .n3-switch-handle-on,\n.n3-switch-disabled .n3-switch-handle-off,\n.n3-switch-disabled .n3-switch-label {\n  opacity: 0.5;\n  cursor: default !important;\n}\n.n3-switch-animate .n3-switch-handle-on {\n  transition: margin-left 0.5s;\n}\n.n3-multiple-input {\n  font-size: 0px;\n  letter-spacing: 0px;\n  min-height: 34px;\n  height: auto;\n  padding: 6px 12px 0px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.n3-multiple-input .n3-form-control {\n  border: 0px;\n  outline: none;\n  position: relative;\n  top: -2px;\n  margin: 0px;\n  padding: 0px;\n  height: 22px;\n}\n.n3-multiple-input .n3-multiple-input-space {\n  display: inline-block;\n  width: 8px;\n  height: 23px;\n}\n.n3-multiple-input .n3-multiple-input-space:first-child {\n  margin-left: -8px;\n}\n.n3-multiple-input .n3-multiple-input-space:hover {\n  cursor: text;\n}\n.n3-multiple-input .n3-multiple-input-space.n3-multiple-input-long {\n  flex: 1;\n}\n.n3-multiple-input .n3-multiple-input-m-tag,\n.n3-multiple-input input,\n.n3-multiple-input .n3-multiple-input-space {\n  vertical-align: top;\n  font-size: 14px;\n  margin-bottom: 6px;\n}\n.n3-multiple-input .n3-multiple-input-m-tag:hover {\n  cursor: pointer;\n}\n.n3-multiple-input .n3-multiple-input-m-tag {\n  background: #f9f9f9;\n  padding: 0px 10px;\n  border-radius: 5px;\n}\n.n3-multiple-input .n3-multiple-input-m-tag .n3-multiple-close {\n  color: #ccc;\n}\n.n3-radio-con:hover {\n  cursor: pointer;\n}\n.n3-radio-con .n3-radio-span {\n  white-space: nowrap;\n  outline: none;\n  display: inline-block;\n  position: relative;\n  line-height: 1;\n  vertical-align: middle;\n}\n.n3-radio-con .n3-radio-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 14px;\n  border-color: #ddd;\n  background-color: #fff;\n  transition: all 0.3s ease;\n}\n.n3-radio-con .n3-radio-input {\n  position: absolute!important;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.n3-radio-con .n3-radio-checked .n3-radio-inner:after {\n  transform: scale(1);\n  opacity: 1;\n}\n.n3-radio-con .n3-radio-inner:after {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  left: 3px;\n  top: 3px;\n  border-radius: 6px;\n  display: table;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  background-color: #41cac0;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.n3-radio-con .n3-radio-disabled .n3-radio-inner {\n  border-color: #ddd;\n  background-color: #f9f9f9;\n}\n.n3-radio-btn input[type=radio] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.n3-label {\n  display: inline;\n  padding: 0.5em 0.8em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  margin: 0px 5px 5px 0px;\n  background: #fff;\n  transition: all .3s ease;\n}\n.n3-label-hover:hover {\n  color: #fff;\n  cursor: pointer;\n}\n.n3-label-default.n3-label-hover:hover {\n  background: #999;\n}\n.n3-label-primary.n3-label-hover:hover {\n  background: #41cac0;\n}\n.n3-label-success.n3-label-hover:hover {\n  background: #2ecc71;\n}\n.n3-label-info.n3-label-hover:hover {\n  background: #58c9f3;\n}\n.n3-label-warning.n3-label-hover:hover {\n  background: #f1c500;\n}\n.n3-label-danger.n3-label-hover:hover {\n  background: #ff6c60;\n}\n.n3-label-default {\n  color: #999;\n  border: 1px solid #999;\n}\n.n3-label-primary {\n  color: #41cac0;\n  border: 1px solid #41cac0;\n}\n.n3-label-success {\n  color: #2ecc71;\n  border: 1px solid #2ecc71;\n}\n.n3-label-info {\n  color: #58c9f3;\n  border: 1px solid #58c9f3;\n}\n.n3-label-warning {\n  color: #f1c500;\n  border: 1px solid #f1c500;\n}\n.n3-label-danger {\n  color: #ff6c60;\n  border: 1px solid #ff6c60;\n}\n.n3-checkbox-label {\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n}\n.n3-checkbox-inner {\n  margin-right: 5px;\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 3px;\n  border-color: #ddd;\n  background-color: #fff;\n  transition: all 0.3s ease;\n}\n.n3-checkbox-inner:after {\n  transform: rotate(45deg) scale(1);\n  position: absolute;\n  left: 4px;\n  top: 1px;\n  display: table;\n  width: 5px;\n  height: 8px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n}\n.n3-checkbox-input {\n  position: absolute!important;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.n3-checkbox-checked .n3-checkbox-inner {\n  border-color: #41cac0;\n  background-color: #41cac0;\n}\n.n3-checkbox-disabled .n3-checkbox-inner {\n  border-color: #ddd;\n  background-color: #ddd;\n}\n.n3-checkbox-disabled .n3-checkbox-inner:after {\n  display: none;\n}\n.n3-checkbox-label span {\n  vertical-align: top;\n}\n.n3-checkbox-btn input[type=checkbox] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.n3-cascader {\n  position: relative;\n  display: inline-block;\n}\n.n3-cascader-picker {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.n3-cascader-menus {\n  z-index: 10010;\n  font-size: 12px;\n  background: #fff;\n  position: absolute;\n  border: 1px solid #ddd;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);\n  white-space: nowrap;\n}\n.n3-cascader-menu {\n  display: inline-block;\n  vertical-align: top;\n  min-width: 111px;\n  height: 180px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border-right: 1px solid #ddd;\n  overflow: auto;\n}\n.n3-cascader-menu:last-child {\n  border-right-color: transparent;\n  margin-right: -1px;\n}\n.n3-cascader-menu-item {\n  padding: 7px 16px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all .3s ease;\n}\n.n3-cascader-menu-item-selected,\n.n3-cascader-menu-item-selected:hover {\n  background: rgba(65, 202, 192, 0.3) !important;\n}\n.n3-cascader-menu-item-disabled {\n  cursor: not-allowed;\n  color: #ccc;\n}\n.n3-cascader-menu-item-disabled:hover {\n  background: transparent;\n}\n.n3-cascader-menu-item:hover {\n  background: rgba(65, 202, 192, 0.1);\n}\n.n3-input-con .n3-has-feedback .n3-form-control-feedback {\n  right: 0px;\n  line-height: 34px;\n}\n.n3-input-con .n3-form-control[readonly] {\n  background-color: #fff;\n}\n.n3-input-con .n3-form-control[disabled] {\n  background-color: #f9f9f9;\n}\n.n3-input-con .n3-form-control[readonly] {\n  cursor: pointer;\n}\n.n3-input-con .n3-form-control[readonly]:hover {\n  cursor: pointer;\n}\n.n3-input-con .n3-form-control[disabled] {\n  cursor: not-allowed;\n}\n.n3-input-con .n3-form-control[disabled]:hover {\n  cursor: not-allowed;\n}\n.n3-toast {\n  position: fixed;\n  border-radius: 25px;\n  padding: 2px 25px .3em;\n  transition-property: opacity;\n  transition-duration: 800ms;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  cursor: default;\n  z-index: 1500;\n}\n.n3-toast.n3-center {\n  margin: 0 auto;\n  left: 50%;\n  top: 50%;\n}\n.n3-toast.n3-top {\n  top: 30px;\n  margin: 0 auto;\n  left: 50%;\n}\n.n3-toast.n3-bottom {\n  bottom: 30px;\n  margin: 0 auto;\n  left: 50%;\n  top: initial;\n}\n.n3-toast.n3-top-right {\n  top: 30px;\n  right: 50px;\n  left: initial;\n}\n.n3-toast.n3-top-left {\n  top: 30px;\n  left: 50px;\n}\n.n3-toast.n3-bottom-right {\n  bottom: 30px;\n  right: 50px;\n  left: initial;\n  top: initial;\n}\n.n3-toast.n3-bottom-left {\n  top: initial;\n  bottom: 30px;\n  left: 50px;\n}\n.n3-toast-default {\n  background: rgba(51, 51, 51, 0.9);\n}\n.n3-toast-primary {\n  background: #41cac0;\n}\n.n3-toast-success {\n  background: #2ecc71;\n}\n.n3-toast-info {\n  background: #58c9f3;\n}\n.n3-toast-warning {\n  background: #f1c500;\n}\n.n3-toast-danger {\n  background: #ff6c60;\n}\n.n3-tag-group {\n  margin: 0;\n  margin-bottom: 18px;\n}\n.n3-tag-group .n3-tag {\n  display: inline-block;\n  font-weight: normal;\n  padding: 2px 1em;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 4px;\n  color: inherit;\n  border: 1px solid #999;\n  cursor: default;\n  user-select: none;\n  transition: all 0.2s linear;\n  position: relative;\n  margin: 0;\n}\n.n3-tag-group .n3-tag a[name] {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n}\n.n3-tag-group .n3-tag + .n3-tag {\n  margin-left: .5em;\n}\n.n3-tag-group .n3-tag .fa {\n  cursor: pointer;\n  line-height: 100%;\n  position: relative;\n  right: -0.4em;\n  vertical-align: middle;\n  font-size: 120%;\n  font-weight: 100;\n  color: inherit;\n  opacity: .8;\n}\n.n3-tag-disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.n3-tag-disabled:hover {\n  color: inherit;\n  border-color: #999;\n}\n.n3-tag-sm .n3-tag,\n.n3-tag-xs .n3-tag {\n  padding: 0px 1em;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.n3-tag-lg .n3-tag,\n.n3-tag-lg .n3-tag {\n  padding: 4px 1em;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.n3-tag-xl .n3-tag,\n.n3-tag-xl .n3-tag {\n  padding: 5px 1em;\n  font-size: 14px;\n  line-height: 1.429;\n}\n.n3-tag-default .n3-tag,\n.n3-tag-default .n3-tag:hover {\n  color: #999;\n}\n.n3-tag-primary .n3-tag,\n.n3-tag-primary .n3-tag:hover {\n  background: #41cac0;\n  border-color: #41cac0;\n  color: white;\n}\n.n3-tag-success .n3-tag,\n.n3-tag-success .n3-tag:hover {\n  background: #2ecc71;\n  border-color: #2ecc71;\n  color: white;\n}\n.n3-tag-info .n3-tag,\n.n3-tag-info .n3-tag:hover {\n  background: #58c9f3;\n  border-color: #58c9f3;\n  color: white;\n}\n.n3-tag-warning .n3-tag,\n.n3-tag-warning .n3-tag:hover {\n  background: #f1c500;\n  border-color: #f1c500;\n  color: white;\n}\n.n3-tag-danger .n3-tag,\n.n3-tag-danger .n3-tag:hover {\n  background: #ff6c60;\n  border-color: #ff6c60;\n  color: white;\n}\n.n3-container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .n3-container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .n3-container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .n3-container {\n    width: 1170px;\n  }\n}\n.n3-container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.n3-row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.n3-col-xs-1,\n.n3-col-sm-1,\n.n3-col-md-1,\n.n3-col-lg-1,\n.n3-col-xs-2,\n.n3-col-sm-2,\n.n3-col-md-2,\n.n3-col-lg-2,\n.n3-col-xs-3,\n.n3-col-sm-3,\n.n3-col-md-3,\n.n3-col-lg-3,\n.n3-col-xs-4,\n.n3-col-sm-4,\n.n3-col-md-4,\n.n3-col-lg-4,\n.n3-col-xs-5,\n.n3-col-sm-5,\n.n3-col-md-5,\n.n3-col-lg-5,\n.n3-col-xs-6,\n.n3-col-sm-6,\n.n3-col-md-6,\n.n3-col-lg-6,\n.n3-col-xs-7,\n.n3-col-sm-7,\n.n3-col-md-7,\n.n3-col-lg-7,\n.n3-col-xs-8,\n.n3-col-sm-8,\n.n3-col-md-8,\n.n3-col-lg-8,\n.n3-col-xs-9,\n.n3-col-sm-9,\n.n3-col-md-9,\n.n3-col-lg-9,\n.n3-col-xs-10,\n.n3-col-sm-10,\n.n3-col-md-10,\n.n3-col-lg-10,\n.n3-col-xs-11,\n.n3-col-sm-11,\n.n3-col-md-11,\n.n3-col-lg-11,\n.n3-col-xs-12,\n.n3-col-sm-12,\n.n3-col-md-12,\n.n3-col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.n3-col-xs-1,\n.n3-col-xs-2,\n.n3-col-xs-3,\n.n3-col-xs-4,\n.n3-col-xs-5,\n.n3-col-xs-6,\n.n3-col-xs-7,\n.n3-col-xs-8,\n.n3-col-xs-9,\n.n3-col-xs-10,\n.n3-col-xs-11,\n.n3-col-xs-12 {\n  float: left;\n}\n.n3-col-xs-12 {\n  width: 100%;\n}\n.n3-col-xs-11 {\n  width: 91.66666667%;\n}\n.n3-col-xs-10 {\n  width: 83.33333333%;\n}\n.n3-col-xs-9 {\n  width: 75%;\n}\n.n3-col-xs-8 {\n  width: 66.66666667%;\n}\n.n3-col-xs-7 {\n  width: 58.33333333%;\n}\n.n3-col-xs-6 {\n  width: 50%;\n}\n.n3-col-xs-5 {\n  width: 41.66666667%;\n}\n.n3-col-xs-4 {\n  width: 33.33333333%;\n}\n.n3-col-xs-3 {\n  width: 25%;\n}\n.n3-col-xs-2 {\n  width: 16.66666667%;\n}\n.n3-col-xs-1 {\n  width: 8.33333333%;\n}\n.n3-col-xs-pull-12 {\n  right: 100%;\n}\n.n3-col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.n3-col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.n3-col-xs-pull-9 {\n  right: 75%;\n}\n.n3-col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.n3-col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.n3-col-xs-pull-6 {\n  right: 50%;\n}\n.n3-col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.n3-col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.n3-col-xs-pull-3 {\n  right: 25%;\n}\n.n3-col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.n3-col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.n3-col-xs-pull-0 {\n  right: auto;\n}\n.n3-col-xs-push-12 {\n  left: 100%;\n}\n.n3-col-xs-push-11 {\n  left: 91.66666667%;\n}\n.n3-col-xs-push-10 {\n  left: 83.33333333%;\n}\n.n3-col-xs-push-9 {\n  left: 75%;\n}\n.n3-col-xs-push-8 {\n  left: 66.66666667%;\n}\n.n3-col-xs-push-7 {\n  left: 58.33333333%;\n}\n.n3-col-xs-push-6 {\n  left: 50%;\n}\n.n3-col-xs-push-5 {\n  left: 41.66666667%;\n}\n.n3-col-xs-push-4 {\n  left: 33.33333333%;\n}\n.n3-col-xs-push-3 {\n  left: 25%;\n}\n.n3-col-xs-push-2 {\n  left: 16.66666667%;\n}\n.n3-col-xs-push-1 {\n  left: 8.33333333%;\n}\n.n3-col-xs-push-0 {\n  left: auto;\n}\n.n3-col-xs-offset-12 {\n  margin-left: 100%;\n}\n.n3-col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.n3-col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.n3-col-xs-offset-9 {\n  margin-left: 75%;\n}\n.n3-col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.n3-col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.n3-col-xs-offset-6 {\n  margin-left: 50%;\n}\n.n3-col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.n3-col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.n3-col-xs-offset-3 {\n  margin-left: 25%;\n}\n.n3-col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.n3-col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.n3-col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .n3-col-sm-1,\n  .n3-col-sm-2,\n  .n3-col-sm-3,\n  .n3-col-sm-4,\n  .n3-col-sm-5,\n  .n3-col-sm-6,\n  .n3-col-sm-7,\n  .n3-col-sm-8,\n  .n3-col-sm-9,\n  .n3-col-sm-10,\n  .n3-col-sm-11,\n  .n3-col-sm-12 {\n    float: left;\n  }\n  .n3-col-sm-12 {\n    width: 100%;\n  }\n  .n3-col-sm-11 {\n    width: 91.66666667%;\n  }\n  .n3-col-sm-10 {\n    width: 83.33333333%;\n  }\n  .n3-col-sm-9 {\n    width: 75%;\n  }\n  .n3-col-sm-8 {\n    width: 66.66666667%;\n  }\n  .n3-col-sm-7 {\n    width: 58.33333333%;\n  }\n  .n3-col-sm-6 {\n    width: 50%;\n  }\n  .n3-col-sm-5 {\n    width: 41.66666667%;\n  }\n  .n3-col-sm-4 {\n    width: 33.33333333%;\n  }\n  .n3-col-sm-3 {\n    width: 25%;\n  }\n  .n3-col-sm-2 {\n    width: 16.66666667%;\n  }\n  .n3-col-sm-1 {\n    width: 8.33333333%;\n  }\n  .n3-col-sm-pull-12 {\n    right: 100%;\n  }\n  .n3-col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .n3-col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .n3-col-sm-pull-9 {\n    right: 75%;\n  }\n  .n3-col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .n3-col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .n3-col-sm-pull-6 {\n    right: 50%;\n  }\n  .n3-col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .n3-col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .n3-col-sm-pull-3 {\n    right: 25%;\n  }\n  .n3-col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .n3-col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .n3-col-sm-pull-0 {\n    right: auto;\n  }\n  .n3-col-sm-push-12 {\n    left: 100%;\n  }\n  .n3-col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .n3-col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .n3-col-sm-push-9 {\n    left: 75%;\n  }\n  .n3-col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .n3-col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .n3-col-sm-push-6 {\n    left: 50%;\n  }\n  .n3-col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .n3-col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .n3-col-sm-push-3 {\n    left: 25%;\n  }\n  .n3-col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .n3-col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .n3-col-sm-push-0 {\n    left: auto;\n  }\n  .n3-col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .n3-col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .n3-col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .n3-col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .n3-col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .n3-col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .n3-col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .n3-col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .n3-col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .n3-col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .n3-col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .n3-col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .n3-col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .n3-col-md-1,\n  .n3-col-md-2,\n  .n3-col-md-3,\n  .n3-col-md-4,\n  .n3-col-md-5,\n  .n3-col-md-6,\n  .n3-col-md-7,\n  .n3-col-md-8,\n  .n3-col-md-9,\n  .n3-col-md-10,\n  .n3-col-md-11,\n  .n3-col-md-12 {\n    float: left;\n  }\n  .n3-col-md-12 {\n    width: 100%;\n  }\n  .n3-col-md-11 {\n    width: 91.66666667%;\n  }\n  .n3-col-md-10 {\n    width: 83.33333333%;\n  }\n  .n3-col-md-9 {\n    width: 75%;\n  }\n  .n3-col-md-8 {\n    width: 66.66666667%;\n  }\n  .n3-col-md-7 {\n    width: 58.33333333%;\n  }\n  .n3-col-md-6 {\n    width: 50%;\n  }\n  .n3-col-md-5 {\n    width: 41.66666667%;\n  }\n  .n3-col-md-4 {\n    width: 33.33333333%;\n  }\n  .n3-col-md-3 {\n    width: 25%;\n  }\n  .n3-col-md-2 {\n    width: 16.66666667%;\n  }\n  .n3-col-md-1 {\n    width: 8.33333333%;\n  }\n  .n3-col-md-pull-12 {\n    right: 100%;\n  }\n  .n3-col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .n3-col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .n3-col-md-pull-9 {\n    right: 75%;\n  }\n  .n3-col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .n3-col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .n3-col-md-pull-6 {\n    right: 50%;\n  }\n  .n3-col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .n3-col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .n3-col-md-pull-3 {\n    right: 25%;\n  }\n  .n3-col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .n3-col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .n3-col-md-pull-0 {\n    right: auto;\n  }\n  .n3-col-md-push-12 {\n    left: 100%;\n  }\n  .n3-col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .n3-col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .n3-col-md-push-9 {\n    left: 75%;\n  }\n  .n3-col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .n3-col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .n3-col-md-push-6 {\n    left: 50%;\n  }\n  .n3-col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .n3-col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .n3-col-md-push-3 {\n    left: 25%;\n  }\n  .n3-col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .n3-col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .n3-col-md-push-0 {\n    left: auto;\n  }\n  .n3-col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .n3-col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .n3-col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .n3-col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .n3-col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .n3-col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .n3-col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .n3-col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .n3-col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .n3-col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .n3-col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .n3-col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .n3-col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .n3-col-lg-1,\n  .n3-col-lg-2,\n  .n3-col-lg-3,\n  .n3-col-lg-4,\n  .n3-col-lg-5,\n  .n3-col-lg-6,\n  .n3-col-lg-7,\n  .n3-col-lg-8,\n  .n3-col-lg-9,\n  .n3-col-lg-10,\n  .n3-col-lg-11,\n  .n3-col-lg-12 {\n    float: left;\n  }\n  .n3-col-lg-12 {\n    width: 100%;\n  }\n  .n3-col-lg-11 {\n    width: 91.66666667%;\n  }\n  .n3-col-lg-10 {\n    width: 83.33333333%;\n  }\n  .n3-col-lg-9 {\n    width: 75%;\n  }\n  .n3-col-lg-8 {\n    width: 66.66666667%;\n  }\n  .n3-col-lg-7 {\n    width: 58.33333333%;\n  }\n  .n3-col-lg-6 {\n    width: 50%;\n  }\n  .n3-col-lg-5 {\n    width: 41.66666667%;\n  }\n  .n3-col-lg-4 {\n    width: 33.33333333%;\n  }\n  .n3-col-lg-3 {\n    width: 25%;\n  }\n  .n3-col-lg-2 {\n    width: 16.66666667%;\n  }\n  .n3-col-lg-1 {\n    width: 8.33333333%;\n  }\n  .n3-col-lg-pull-12 {\n    right: 100%;\n  }\n  .n3-col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .n3-col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .n3-col-lg-pull-9 {\n    right: 75%;\n  }\n  .n3-col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .n3-col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .n3-col-lg-pull-6 {\n    right: 50%;\n  }\n  .n3-col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .n3-col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .n3-col-lg-pull-3 {\n    right: 25%;\n  }\n  .n3-col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .n3-col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .n3-col-lg-pull-0 {\n    right: auto;\n  }\n  .n3-col-lg-push-12 {\n    left: 100%;\n  }\n  .n3-col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .n3-col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .n3-col-lg-push-9 {\n    left: 75%;\n  }\n  .n3-col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .n3-col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .n3-col-lg-push-6 {\n    left: 50%;\n  }\n  .n3-col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .n3-col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .n3-col-lg-push-3 {\n    left: 25%;\n  }\n  .n3-col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .n3-col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .n3-col-lg-push-0 {\n    left: auto;\n  }\n  .n3-col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .n3-col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .n3-col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .n3-col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .n3-col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .n3-col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .n3-col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .n3-col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .n3-col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .n3-col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .n3-col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .n3-col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .n3-col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\n.n3-table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 18px;\n}\n.n3-table > thead > tr > th,\n.n3-table > tbody > tr > th,\n.n3-table > tfoot > tr > th,\n.n3-table > thead > tr > td,\n.n3-table > tbody > tr > td,\n.n3-table > tfoot > tr > td {\n  padding: 6px 8px;\n  line-height: 1.5;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.n3-table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 1px solid #ddd;\n}\n.n3-table > caption + thead > tr:first-child > th,\n.n3-table > colgroup + thead > tr:first-child > th,\n.n3-table > thead:first-child > tr:first-child > th,\n.n3-table > caption + thead > tr:first-child > td,\n.n3-table > colgroup + thead > tr:first-child > td,\n.n3-table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.n3-table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.n3-table-bordered {\n  border: 1px solid #ddd;\n  border-collapse: separate;\n  border-radius: 2px;\n  border-left: none;\n}\n.n3-table-bordered > thead > tr > th,\n.n3-table-bordered > tbody > tr > th,\n.n3-table-bordered > tfoot > tr > th,\n.n3-table-bordered > thead > tr > td,\n.n3-table-bordered > tbody > tr > td,\n.n3-table-bordered > tfoot > tr > td {\n  border-left: 1px solid #ddd;\n}\n.n3-table-bordered > thead > tr > th,\n.n3-table-bordered > thead > tr > td {\n  border-bottom-width: 1px;\n  background: #f9f9f9;\n}\n.n3-table-bordered > thead > tr:first-child > th,\n.n3-table-bordered > tbody > tr:first-child > th,\n.n3-table-bordered > tfoot > tr:first-child > th,\n.n3-table-bordered > thead > tr:first-child > td,\n.n3-table-bordered > tbody > tr:first-child > td,\n.n3-table-bordered > tfoot > tr:first-child > td {\n  border-top: 0;\n}\n.n3-table-bordered > thead:last-child tr:last-child > th:first-child,\n.n3-table-bordered > tbody:last-child tr:last-child > td:first-child,\n.n3-table-bordered > tbody:last-child tr:last-child > th:first-child,\n.n3-table-bordered > tfoot:last-child tr:last-child > td:first-child,\n.n3-table-bordered > tfoot:last-child tr:last-child > th:first-child {\n  border-bottom-left-radius: 2px;\n}\n.n3-table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.n3-table-hover > tbody > tr:hover {\n  background-color: #f9f9f9;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.n3-table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .n3-table-responsive {\n    width: 100%;\n    margin-bottom: 13.5px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n}\n.n3-btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.n3-btn:focus,\n.n3-btn:active:focus,\n.n3-btn-active:focus {\n  outline: 0;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.n3-btn:hover,\n.n3-btn:focus {\n  color: #333;\n  text-decoration: none;\n}\n.n3-btn:active,\n.n3-btn-active {\n  background-image: none;\n  outline: 0;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.n3-btn-disabled,\n.n3-btn[disabled] {\n  pointer-events: none;\n  cursor: not-allowed;\n  box-shadow: none;\n  opacity: .65;\n}\n.n3-btn-default {\n  color: #333;\n  background-clip: padding-box;\n  background-color: #fff;\n  border-color: rgba(150, 160, 180, 0.3);\n}\n.n3-btn-default:hover,\n.n3-btn-default:focus,\n.n3-btn-default:active,\n.n3-btn-default.n3-btn-active {\n  color: #999;\n}\n.n3-btn-default:active,\n.n3-btn-default.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-default.n3-btn-disabled,\n.n3-btn-default[disabled],\n.n3-btn-default.n3-btn-disabled:hover,\n.n3-btn-default[disabled]:hover,\n.n3-btn-default.n3-btn-disabled:focus,\n.n3-btn-default[disabled]:focus,\n.n3-btn-default.n3-btn-disabled:active,\n.n3-btn-default[disabled]:active,\n.n3-btn-default.n3-btn-disabled.n3-btn-active,\n.n3-btn-default[disabled].n3-btn-active {\n  background-color: #ddd;\n  border-color: #ddd;\n}\n.n3-btn-default .n3-badge {\n  color: #fff;\n  background-color: #333;\n}\n.n3-btn-primary {\n  color: #fff;\n  background-color: #41cac0;\n  border-color: #41cac0;\n}\n.n3-btn-primary:hover,\n.n3-btn-primary:focus,\n.n3-btn-primary:active,\n.n3-btn-primary.n3-btn-active {\n  color: #fff;\n  background-color: #39b2a9;\n  border-color: #39b2a9;\n}\n.n3-btn-primary:active,\n.n3-btn-primary.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-primary .n3-badge {\n  color: #41cac0;\n  background-color: #fff;\n}\n.n3-btn-success {\n  color: #fff;\n  background-color: #2ecc71;\n  border-color: #2ecc71;\n}\n.n3-btn-success:hover,\n.n3-btn-success:focus,\n.n3-btn-success:active,\n.n3-btn-success.n3-btn-active {\n  color: #fff;\n  background-color: #29b464;\n  border-color: #29b464;\n}\n.n3-btn-success:active,\n.n3-btn-success.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-success .n3-badge {\n  color: #2ecc71;\n  background-color: #fff;\n}\n.n3-btn-info {\n  color: #fff;\n  background-color: #58c9f3;\n  border-color: #58c9f3;\n}\n.n3-btn-info:hover,\n.n3-btn-info:focus,\n.n3-btn-info:active,\n.n3-btn-info.n3-btn-active {\n  color: #fff;\n  background-color: #38bef0;\n  border-color: #38bef0;\n}\n.n3-btn-info:active,\n.n3-btn-info.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-info .n3-badge {\n  color: #58c9f3;\n  background-color: #fff;\n}\n.n3-btn-warning {\n  color: #fff;\n  background-color: #f1c500;\n  border-color: #f1c500;\n}\n.n3-btn-warning:hover,\n.n3-btn-warning:focus,\n.n3-btn-warning:active,\n.n3-btn-warning.n3-btn-active {\n  color: #fff;\n  background-color: #dbb509;\n  border-color: #dbb509;\n}\n.n3-btn-warning:active,\n.n3-btn-warning.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-warning .n3-badge {\n  color: #f1c500;\n  background-color: #fff;\n}\n.n3-btn-danger {\n  color: #fff;\n  background-color: #ff6c60;\n  border-color: #ff6c60;\n}\n.n3-btn-danger:hover,\n.n3-btn-danger:focus,\n.n3-btn-danger:active,\n.n3-btn-danger.n3-btn-active {\n  color: #fff;\n  background-color: #e74c3c;\n  border-color: #e74c3c;\n}\n.n3-btn-danger:active,\n.n3-btn-danger.n3-btn-active {\n  background-image: none;\n}\n.n3-btn-danger .n3-badge {\n  color: #ff6c60;\n  background-color: #fff;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-default {\n  color: #333;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-primary {\n  color: #fff;\n  background-color: #41cac0;\n  border-color: #41cac0;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-success {\n  color: #fff;\n  background-color: #2ecc71;\n  border-color: #2ecc71;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-info {\n  color: #fff;\n  background-color: #58c9f3;\n  border-color: #58c9f3;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-warning {\n  color: #fff;\n  background-color: #f1c500;\n  border-color: #f1c500;\n  background-image: none;\n}\n.n3-open > .n3-dropdown-toggle.n3-btn-danger {\n  color: #fff;\n  background-color: #ff6c60;\n  border-color: #ff6c60;\n  background-image: none;\n}\n.n3-btn-lg,\n.n3-btn-group-lg > .n3-btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.n3-btn-sm,\n.n3-btn-group-sm > .n3-btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.n3-btn-xs,\n.n3-btn-group-xs > .n3-btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.n3-btn-block {\n  display: block;\n  width: 100%;\n}\n.n3-btn-block + .n3-btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].n3-btn-block,\ninput[type=\"reset\"].n3-btn-block,\ninput[type=\"button\"].n3-btn-block {\n  width: 100%;\n}\n/*------------ btn-group -----------*/\n.n3-btn-group,\n.n3-btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.n3-checkbox-group,\n.n3-radio-group {\n  padding-top: 7px;\n}\n.n3-btn-group > .n3-btn,\n.n3-btn-group-vertical > .n3-btn {\n  position: relative;\n  float: left;\n}\n.n3-btn-group > .n3-btn:hover,\n.n3-btn-group-vertical > .n3-btn:hover,\n.n3-btn-group > .n3-btn:focus,\n.n3-btn-group-vertical > .n3-btn:focus,\n.n3-btn-group > .n3-btn:active,\n.n3-btn-group-vertical > .n3-btn:active,\n.n3-btn-group > .n3-btn.n3-active,\n.n3-btn-group-vertical > .n3-btn.n3-active {\n  z-index: 2;\n}\n.n3-btn-group .n3-btn + .n3-btn,\n.n3-btn-group .n3-btn + .n3-btn-group,\n.n3-btn-group .n3-btn-group + .n3-btn,\n.n3-btn-group .n3-btn-group + .n3-btn-group {\n  margin-left: -1px;\n}\n.n3-btn-group > .n3-btn:not(:first-child):not(:last-child):not(.n3-dropdown-toggle) {\n  border-radius: 0;\n}\n.n3-btn-group > .n3-btn:first-child {\n  margin-left: 0;\n}\n.n3-btn-group > .n3-btn:first-child:not(:last-child):not(.n3-dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.n3-btn-group > .n3-btn:last-child:not(:first-child),\n.n3-btn-group > .n3-dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.n3-btn-group > .n3-btn-group {\n  float: left;\n}\n.n3-btn-group > .n3-btn-group:not(:first-child):not(:last-child) > .n3-btn {\n  border-radius: 0;\n}\n.n3-btn-group > .n3-btn-group:first-child:not(:last-child) > .n3-btn:last-child,\n.n3-btn-group > .n3-btn-group:first-child:not(:last-child) > .n3-dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.n3-btn-group > .n3-btn-group:last-child:not(:first-child) > .n3-btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.n3-btn-group .n3-dropdown-toggle:active,\n.n3-btn-group.n3-open .n3-dropdown-toggle {\n  outline: 0;\n}\n.n3-btn-group > .n3-btn + .n3-dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.n3-btn-group > .n3-btn-lg + .n3-dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.n3-btn-group.n3-open .n3-dropdown-toggle {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.n3-modal-open {\n  overflow: hidden;\n}\n.n3-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: all 0.3s ease;\n}\n.n3-modal-in {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.n3-modal-zoom .n3-modal-dialog {\n  transform: scale(0.1);\n  top: 300px;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.n3-modal-zoom.n3-modal-in .n3-modal-dialog {\n  transform: scale(1);\n  transform: translate3d(0, -300px, 0);\n  opacity: 1;\n}\n.n3-modal-fade .n3-modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.n3-modal-in .n3-modal-dialog {\n  transform: translate(0, 0);\n}\n.n3-modal-open .n3-modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.n3-modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 30px auto;\n}\n.n3-modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 6px;\n  outline: 0;\n  box-shadow: none;\n  border: none;\n}\n.n3-modal 7-backdrop {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  background-color: #000;\n}\n.n3-modal-backdrop.n3-modal-fade {\n  opacity: 0;\n}\n.n3-modal-backdrop.n3-modal-in {\n  opacity: .5;\n}\n.n3-modal-header {\n  min-height: 16.42857143px;\n  padding: 15px;\n  background: #41cac0;\n  color: #fff;\n  border-radius: 5px 5px 0 0;\n  border-bottom: none;\n}\n.n3-modal-header .n3-close {\n  margin-top: 0px;\n}\n.n3-modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.n3-modal-body {\n  position: relative;\n  padding: 15px;\n}\n.n3-modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #ddd;\n}\n.n3-modal-footer .n3-btn + .n3-btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.n3-modal-footer .n3-btn-group .n3-btn + .n3-btn {\n  margin-left: -1px;\n}\n.n3-modal-footer .n3-btn-block + .n3-btn-block {\n  margin-left: 0;\n}\n.n3-carousel {\n  position: relative;\n}\n.n3-carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.n3-carousel-inner > .n3-carousel-item {\n  position: relative;\n  display: none;\n  transition: 0.6s ease-in-out left;\n}\n.n3-carousel-inner > .n3-carousel-item > img,\n.n3-carousel-inner > .n3-carousel-item > a > img {\n  line-height: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.n3-carousel-inner > .n3-carousel-active,\n.n3-carousel-inner > .n3-carousel-next,\n.n3-carousel-inner > .n3-carousel-prev {\n  display: block;\n}\n.n3-carousel-inner > .n3-carousel-next,\n.n3-carousel-inner > .n3-carousel-prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.n3-carousel-inner > .n3-carousel-active,\n.n3-carousel-inner > .n3-carousel-next.n3-carousel-left,\n.n3-carousel-inner > .n3-carousel-prev.n3-carousel-right {\n  left: 0;\n  z-index: 1;\n}\n.n3-carousel-inner > .n3-carousel-prev,\n.n3-carousel-inner > .n3-carousel-active.n3-carousel-left {\n  left: -100%;\n  z-index: 2;\n}\n.n3-carousel-inner > .n3carousel--next,\n.n3-carousel-inner > .n3-carousel-active.n3-carousel-right {\n  left: 100%;\n  z-index: 2;\n}\n.n3-carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  opacity: .5;\n  z-index: 3;\n}\n.n3-carousel-control:hover {\n  cursor: pointer;\n}\n.n3-carousel-control.n3-carousel-left {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n}\n.n3-carousel-control.n3-carousel-right {\n  right: 0;\n  left: auto;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n}\n.n3-carousel-control:hover,\n.n3-carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: .9;\n}\n.n3-carousel-control .fa-chevron-left,\n.n3-carousel-control .fa-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n}\n.n3-carousel-control .fa-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.n3-carousel-control .fa-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.n3-carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.n3-carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n  margin: 0px 5px;\n}\n.n3-carousel-indicators .n3-carousel-active {\n  background-color: #fff;\n}\n@media screen and (min-width: 768px) {\n  .n3-carousel-control .fa-chevron-left,\n  .n3-carousel-control .fa-chevron-right {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .n3-carousel-control .fa-chevron-left {\n    margin-left: -15px;\n  }\n  .n3-carousel-control .fa-chevron-right {\n    margin-right: -15px;\n  }\n  .n3-carousel-indicators {\n    bottom: 20px;\n  }\n}\n.n3-alert {\n  padding: 15px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  z-index: 1200;\n}\n.n3-alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.n3-alert > p,\n.n3-alert > ul {\n  margin-bottom: 0;\n}\n.n3-alert > p + p {\n  margin-top: 5px;\n}\n.n3-alert hr {\n  border-top-color: rgba(255, 255, 255, 0.5);\n}\n.n3-alert-default {\n  color: #fff;\n  background-color: rgba(51, 51, 51, 0.9);\n}\n.n3-alert-default .n3-close {\n  color: #fff;\n}\n.n3-alert-success {\n  color: #fff;\n  background-color: rgba(46, 204, 113, 0.9);\n}\n.n3-alert-info {\n  color: #fff;\n  background-color: rgba(52, 152, 219, 0.9);\n}\n.n3-alert-warning {\n  color: #fff;\n  background-color: rgba(241, 196, 15, 0.9);\n}\n.n3-alert-danger {\n  color: #fff;\n  background-color: rgba(231, 76, 60, 0.9);\n}\n.n3-alert-icon {\n  float: left;\n  font-size: 18px;\n  margin-right: 10px;\n}\n.n3-alert-content {\n  margin-left: 32px;\n}\n.n3-alert-small {\n  padding: 2px 14px;\n}\n.n3-alert-small .close {\n  font-size: 20px;\n  top: 0;\n}\n.n3-alert.n3-center {\n  position: fixed;\n  margin: 0 auto;\n  left: 50%;\n  top: 50%;\n}\n.n3-alert.n3-top {\n  position: fixed;\n  top: 30px;\n  margin: 0 auto;\n  left: 50%;\n}\n.n3-alert.n3-bottom {\n  position: fixed;\n  bottom: 30px;\n  margin: 0 auto;\n  left: 50%;\n}\n.n3-alert.n3-top-right {\n  position: fixed;\n  top: 30px;\n  right: 50px;\n}\n.n3-alert.n3-top-left {\n  position: fixed;\n  top: 30px;\n  left: 50px;\n}\n.n3-alert.n3-bottom-right {\n  position: fixed;\n  bottom: 30px;\n  right: 50px;\n}\n.n3-alert.n3-bottom-left {\n  position: fixed;\n  bottom: 30px;\n  left: 50px;\n}\n.n3-alert-dismissable,\n.n3-alert-dismissible {\n  padding-right: 35px;\n}\n.n3-alert-dismissable .n3-close,\n.n3-alert-dismissible .n3-close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.n3-panel-body {\n  padding: 15px;\n}\n.n3-panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n}\n.n3-panel-heading > .n3-dropdown .n3-dropdown-toggle {\n  color: inherit;\n}\n.n3-panel-heading + .n3-list-group .n3-list-group-item:first-child {\n  border-top-width: 0;\n}\n.n3-panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 14px;\n  color: #333;\n  font-weight: 400;\n  font-family: 'Open Sans', sans-serif;\n}\n.n3-panel-title > a,\n.n3-panel-title > small,\n.n3-panel-title > .small,\n.n3-panel-title > small > a,\n.n3-panel-title > .small > a {\n  color: inherit;\n}\n.n3-panel-footer {\n  padding: 10px 15px;\n  background-color: #f9f9f9;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.n3-panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.n3-panel > .n3-list-group,\n.n3-panel > .n3-panel-collapse > .n3-list-group {\n  margin-bottom: 0;\n}\n.n3-panel > .n3-list-group .n3-list-group-item,\n.n3-panel > .n3-panel-collapse > .n3-list-group .n3-list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.n3-panel > .n3-list-group:first-child .n3-list-group-item:first-child,\n.n3-panel > .n3-panel-collapse > .n3-list-group:first-child .n3-list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.n3-panel > .n3-list-group:last-child .n3-list-group-item:last-child,\n.n3-panel > .n3-panel-collapse > .n3-list-group:last-child .n3-list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.n3-panel > .n3-table,\n.n3-panel > .n3-table-responsive > .n3-table,\n.n3-panel > .n3-panel-collapse > .n3-table {\n  margin-bottom: 0;\n}\n.n3-panel > .n3-table caption,\n.n3-panel > .n3-table-responsive > .n3-table caption,\n.n3-panel > .n3-panel-collapse > .n3-table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.n3-panel > .n3-table:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child td:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child td:first-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child td:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child td:first-child,\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child th:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child th:first-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child th:first-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child td:last-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child td:last-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child td:last-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child td:last-child,\n.n3-panel > .n3-table:first-child > thead:first-child > tr:first-child th:last-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > thead:first-child > tr:first-child th:last-child,\n.n3-panel > .n3-table:first-child > tbody:first-child > tr:first-child th:last-child,\n.n3-panel > .n3-table-responsive:first-child > .n3-table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.n3-panel > .n3-table:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child td:first-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child td:first-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child th:first-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child th:first-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child td:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child td:last-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.n3-panel > .n3-table:last-child > tbody:last-child > tr:last-child th:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tbody:last-child > tr:last-child th:last-child,\n.n3-panel > .n3-table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.n3-panel > .n3-table-responsive:last-child > .n3-table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.n3-panel > .n3-panel-body + .n3-table,\n.n3-panel > .n3-panel-body + .n3-table-responsive,\n.n3-panel > .n3-table + .n3-panel-body,\n.n3-panel > .n3-table-responsive + .n3-panel-body {\n  border-top: 1px solid #ddd;\n}\n.n3-panel > .n3-table > tbody:first-child > tr:first-child th,\n.n3-panel > .n3-table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.n3-panel > .n3-table-bordered,\n.n3-panel > .n3-table-responsive > .n3-table-bordered {\n  border: 0;\n}\n.n3-panel > .n3-table-bordered > thead > tr > th:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr > th:first-child,\n.n3-panel > .n3-table-bordered > tbody > tr > th:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr > th:first-child,\n.n3-panel > .n3-table-bordered > tfoot > tr > th:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr > th:first-child,\n.n3-panel > .n3-table-bordered > thead > tr > td:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr > td:first-child,\n.n3-panel > .n3-table-bordered > tbody > tr > td:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr > td:first-child,\n.n3-panel > .n3-table-bordered > tfoot > tr > td:first-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.n3-panel > .n3-table-bordered > thead > tr > th:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr > th:last-child,\n.n3-panel > .n3-table-bordered > tbody > tr > th:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr > th:last-child,\n.n3-panel > .n3-table-bordered > tfoot > tr > th:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr > th:last-child,\n.n3-panel > .n3-table-bordered > thead > tr > td:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr > td:last-child,\n.n3-panel > .n3-table-bordered > tbody > tr > td:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr > td:last-child,\n.n3-panel > .n3-table-bordered > tfoot > tr > td:last-child,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.n3-panel > .n3-table-bordered > thead > tr:first-child > td,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr:first-child > td,\n.n3-panel > .n3-table-bordered > tbody > tr:first-child > td,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr:first-child > td,\n.n3-panel > .n3-table-bordered > thead > tr:first-child > th,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > thead > tr:first-child > th,\n.n3-panel > .n3-table-bordered > tbody > tr:first-child > th,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.n3-panel > .n3-table-bordered > tbody > tr:last-child > td,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr:last-child > td,\n.n3-panel > .n3-table-bordered > tfoot > tr:last-child > td,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr:last-child > td,\n.n3-panel > .n3-table-bordered > tbody > tr:last-child > th,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tbody > tr:last-child > th,\n.n3-panel > .n3-table-bordered > tfoot > tr:last-child > th,\n.n3-panel > .n3-table-responsive > .n3-table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.n3-panel > .n3-table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.n3-list-group + .n3-panel-footer {\n  border-top-width: 0;\n}\n.n3-panel-group {\n  margin-bottom: 20px;\n}\n.n3-panel-group .n3-panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.n3-panel-group .n3-panel + .n3-panel {\n  margin-top: 5px;\n}\n.n3-panel-group .n3-panel-heading {\n  border-bottom: 0;\n}\n.n3-panel-group .n3-panel-heading + .n3-panel-collapse > .n3-panel-body,\n.n3-panel-group .n3-panel-heading + .n3-panel-collapse > .n3-list-group {\n  border-top: 1px solid #ddd;\n}\n.n3-panel-group .n3-panel-footer {\n  border-top: 0;\n}\n.n3-panel-group .n3-panel-footer + .n3-panel-collapse .n3-panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.n3-panel-default {\n  border-color: #ddd;\n}\n.n3-panel-default > .n3-panel-heading {\n  background-color: #fff;\n  border-color: #ddd;\n  color: #333;\n}\n.n3-panel-default > .n3-panel-heading + .n3-panel-collapse > .n3-panel-body {\n  border-top-color: #ddd;\n}\n.n3-panel-default > .n3-panel-heading .n3-badge {\n  color: #f9f9f9;\n  background-color: #333;\n}\n.n3-panel-default > .n3-panel-footer + .n3-panel-collapse > .n3-panel-body {\n  border-bottom-color: #ddd;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-webkit-keyframes loading-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@-moz-keyframes loading-spin {\n  from {\n    -moz-transform: rotate(0deg);\n  }\n  to {\n    -moz-transform: rotate(360deg);\n  }\n}\n@-ms-keyframes loading-spin {\n  from {\n    -ms-transform: rotate(0deg);\n  }\n  to {\n    -ms-transform: rotate(360deg);\n  }\n}\n@keyframes loading-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.n3-progress {\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: none;\n  background: #f9f9f9;\n}\n.n3-progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #41cac0;\n  transition: width .6s ease;\n}\n.n3-progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.n3-progress-bar-animated {\n  animation: progress-bar-stripes 2s linear infinite;\n}\n.n3-progress-bar-success {\n  background-color: #2ecc71;\n}\n.n3-progress-bar-info {\n  background-color: #58c9f3;\n}\n.n3-progress-bar-warning {\n  background-color: #f1c500;\n}\n.n3-progress-bar-danger {\n  background-color: #ff6c60;\n}\n.n3-breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  border-radius: 4px;\n}\n.n3-breadcrumb a {\n  color: #333;\n}\n.n3-breadcrumb > li {\n  display: inline-block;\n}\n.n3-breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\A0\";\n}\n.n3-breadcrumb > .n3-breadcrumb-active {\n  color: #41cac0;\n}\n.n3-nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.n3-nav li {\n  position: relative;\n  display: block;\n}\n.n3-nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  transition: all .3s ease;\n}\n.n3-nav > li > a:hover,\n.n3-nav > li > a:focus {\n  color: #333;\n  text-decoration: none;\n  background: rgba(65, 202, 192, 0.1);\n}\n.n3-nav > li.n3-nav-disabled > a {\n  color: #999;\n}\n.n3-nav > li.n3-nav-tabs-disabled > a:hover,\n.n3-nav > li.n3-nav-tabs-disabled > a:focus {\n  color: #999;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.n3-nav > li > a > img {\n  max-width: none;\n}\n.n3-nav-tabs {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 15px;\n}\n.n3-nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.n3-nav-tabs > li > a {\n  margin-right: 1px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.n3-nav-tabs > li > a:hover {\n  border-color: #f9f9f9 #f9f9f9 #ddd;\n}\n.n3-nav-tabs > li.n3-nav-tabs-active > a,\n.n3-nav-tabs > li.n3-nav-tabs-active > a:hover,\n.n3-nav-tabs > li.n3-nav-tabs-active > a:focus {\n  color: #333;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.n3-nav-tabs-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.n3-nav-tabs-justified > li {\n  float: none!important;\n}\n.n3-nav-tabs-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n  margin-right: 0;\n  border-radius: 4px;\n}\n.n3-nav-tabs-justified li:last-child > a:hover,\n.n3-nav-tabs-justified li.n3-nav-tabsactive:last-child > a {\n  border-radius: 0 4px 0 0 !important;\n}\n.n3-nav-tabs-justified > .n3-dropdown .n3-dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .n3-nav-tabs-justified {\n    border-bottom: 0;\n  }\n  .n3-nav-tabs-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .n3-nav-tabs-justified > li > a {\n    margin-bottom: 0;\n    margin-right: 0;\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .n3-nav-tabs-justified > .n3-nav-tabs-active > a,\n  .n3-nav-tabs-justified > .n3-nav-tabs-active > a:hover,\n  .n3-nav-tabs-justified > .n3-nav-tabs-active > a:focus {\n    border: 1px solid #ddd;\n    border-bottom-color: #fff;\n  }\n}\n.n3-nav-tabs-pills > li {\n  float: left;\n}\n.n3-nav-tabs-pills > li > a {\n  border-radius: 4px;\n}\n.n3-nav-tabs-pills > li + li {\n  margin-left: 2px;\n}\n.n3-nav-tabs-pills > li.n3-nav-tabs-active > a,\n.n3-nav-tabs-pills > li.n3-nav-tabs-active > a:hover,\n.n3-nav-tabs-pills > li.n3-nav-tabs-active > a:focus {\n  color: #fff;\n  background-color: #41cac0;\n}\n.n3-nav-tabs-stacked > li {\n  float: none;\n}\n.n3-nav-tabs-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.n3-tab-content > .n3-tab-pane {\n  display: block;\n  visibility: visible !important;\n}\n.n3-tab-content .n3-nav-tabs-active {\n  display: block;\n  visibility: visible;\n}\n.n3-nav-tabs .n3-dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.n3-nav-tabs-primary {\n  border-bottom: 2px solid #41cac0;\n}\n.n3-nav-tabs-primary li {\n  margin-bottom: 0;\n}\n.n3-nav-tabs-primary .n3-nav-tabs-active > a,\n.n3-nav-tabs-primary .n3-nav-tabs-active > a:hover,\n.n3-nav-tabs-primary .n3-nav-tabs-active > a:focus {\n  background: #41cac0;\n  border-color: #41cac0 !important;\n  color: white;\n  border-bottom: 0;\n}\n.n3-nav-tabs-primary.n3-nav-tabs-stacked {\n  border-bottom: 0;\n  border-right: 2px solid #41cac0;\n}\n.n3-nav-tabs-primary.n3-nav-tabs-stacked > li > a {\n  border-radius: 2px 0 0 2px;\n  margin-right: 0;\n}\n.n3-navbar-collapse {\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.n3-navbar-nav > li:hover {\n  cursor: pointer;\n}\n.n3-navbar-nav > li > a,\n.n3-navbar-nav .n3-sub-nav-trigger {\n  padding: 15px 20px;\n  line-height: 20px;\n  border-bottom: 2px solid transparent;\n}\n.n3-navbar-nav > li .n3-dropdown-menu {\n  top: 96%!important;\n}\n.n3-navbar-nav {\n  margin: 0;\n}\n.n3-navbar-vertical .n3-navbar-nav > li > a,\n.n3-navbar-vertical .n3-navbar-nav .n3-sub-nav-trigger {\n  padding: 10px 20px;\n}\n.n3-navbar-vertical .n3-navbar-nav {\n  float: none;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con {\n  width: 100%;\n  position: relative;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con .n3-sub-nav-trigger:hover {\n  background: rgba(65, 202, 192, 0.1);\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con .n3-sub-nav-fa {\n  float: right;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con > .n3-dropdown-menu {\n  position: relative;\n  width: 100%;\n  box-shadow: none;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 0px;\n  padding: 0px;\n  border: 0px;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con > .n3-dropdown-menu > li {\n  padding: 5px 15px;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con > .n3-dropdown-menu > li:hover {\n  background: rgba(65, 202, 192, 0.1);\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-dropdown-con > .n3-dropdown-menu > li > a:hover {\n  background: transparent;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-navbar-active {\n  border-left: 2px solid #41cac0;\n}\n.n3-navbar-vertical .n3-navbar-nav .n3-navbar-active a,\n.n3-navbar-vertical .n3-navbar-nav .n3-navbar-active a:hover,\n.n3-navbar-vertical .n3-navbar-nav .n3-navbar-active a:focus {\n  color: #41cac0;\n}\n.n3-navbar-vertical .n3-navbar-nav > li {\n  float: none;\n}\n.n3-navbar-horizontal .n3-navbar-nav {\n  float: left;\n}\n.n3-navbar-horizontal .n3-navbar-nav > li {\n  float: left;\n}\n.n3-navbar-horizontal .n3-navbar-nav .n3-dropdown-con:hover {\n  background-color: rgba(65, 202, 192, 0.1);\n}\n.n3-navbar-horizontal .n3-navbar-active a,\n.n3-navbar-horizontal .n3-navbar-active a:hover,\n.n3-navbar-horizontal .n3-navbar-active a:focus {\n  color: #41cac0;\n  border-bottom: 2px solid #41cac0;\n}\n.n3-navbar-default {\n  background-color: transparent;\n}\n.n3-navbar-default .n3-navbar-nav > li > a:hover,\n.n3-navbar-default .n3-navbar-nav > li > a:focus {\n  color: #41cac0;\n  background-color: rgba(65, 202, 192, 0.1);\n}\n.n3-navbar-default .n3-navbar-nav .n3-navbar-disabled a,\n.n3-navbar-default .n3-navbar-nav .n3-navbar-disabled a:hover,\n.n3-navbar-default .n3-navbar-nav .n3-navbar-disabled a:focus {\n  color: #ddd;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.n3-navbar-dark {\n  background-color: #333;\n}\n.n3-navbar-dark .n3-navbar-nav > li .n3-sub-nav-fa {\n  color: #fff;\n}\n.n3-navbar-dark .n3-navbar-nav > li a {\n  color: #fff;\n}\n.n3-navbar-dark .n3-navbar-nav > li a:hover,\n.n3-navbar-dark .n3-navbar-nav > li a:focus {\n  background-color: rgba(65, 202, 192, 0.1);\n}\n.n3-navbar-dark .n3-navbar-nav .n3-dropdown-menu {\n  background-color: #333;\n}\n.n3-navbar-dark .n3-navbar-nav .n3-navbar-disabled a,\n.n3-navbar-dark .n3-navbar-nav .n3-navbar-disabled a:hover,\n.n3-navbar-dark .n3-navbar-nav .n3-navbar-disabled a:focus {\n  color: #999;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.n3-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  background-color: #999;\n  border-radius: 10px;\n}\n.n3-btn .n3-badge {\n  position: relative;\n  top: -1px;\n}\n.n3-btn-xs .n3-badge {\n  top: 0;\n  padding: 1px 5px;\n}\n.n3-nav-pills > .n3-active > a > .n3-badge {\n  color: #41cac0;\n  background-color: #fff;\n}\n.n3-nav-pills > li > a > .n3-badge {\n  margin-left: 3px;\n}\n.n3-close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2;\n  outline: none;\n}\n.n3-close:hover,\n.n3-close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: .5;\n}\nbutton.n3-close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.n3-upload {\n  display: inline-block;\n}\n.n3-upload input[type=\"file\"] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n  overflow: hidden;\n  z-index: -1;\n  outline: none;\n}\n.n3-upload-item-info {\n  position: relative;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 4px;\n  transition: background-color 0.3s ease;\n  zoom: 1;\n}\n.n3-upload-drag-area {\n  outline: none;\n}\n.n3-upload-drag-area span {\n  color: #333;\n  font-size: 14px;\n}\n.n3-upload-drag-icon {\n  position: absolute;\n  color: #41cac0;\n  top: 50%;\n  left: 50%;\n  margin-top: -10px;\n  margin-left: -30px;\n}\n.n3-upload-file-icon {\n  margin-right: 4px;\n  color: #999;\n}\n.n3-upload-file-name {\n  padding-right: 20px;\n}\n.n3-upload-del-info {\n  position: absolute;\n  right: 5px;\n  top: 0;\n  color: #999;\n  line-height: 25px;\n  cursor: pointer;\n}\n.n3-upload-item-progress {\n  padding: 0px;\n  margin: 5px;\n  font-size: 12px;\n}\n.n3-upload-item-progress .n3-upload-hide {\n  display: none;\n}\n.n3-upload-progress {\n  display: inline-block;\n}\n.n3-upload-progress-line {\n  position: relative;\n  width: 100%;\n  font-size: 12px;\n  zoom: 1;\n}\n.n3-upload-progress-inner {\n  width: 100%;\n  background-color: #f9f9f9;\n  vertical-align: middle;\n}\n.n3-upload-progress-bg {\n  height: 3px;\n  background-color: #41cac0;\n  -webkit-transition: all .3s linear 0s;\n  transition: all .3s linear 0s;\n  border-radius: 100px;\n}\n.n3-upload-progress-status-success .at-progress-bg {\n  background-color: #2ecc71;\n}\n.n3-upload-drag-container {\n  position: relative;\n  padding: 20px 0;\n  cursor: pointer;\n  border: 1px dashed #ccc;\n  border-radius: 6px;\n  text-align: center;\n  transition: border-color 0.3s ease;\n}\n.n3-upload-drag-container.n3-upload-is-dragover {\n  border-color: #41cac0;\n}\n.n3-upload-drag-container:hover {\n  border-color: #999;\n  background: #f9f9f9;\n}\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  -webkit-font-smoothing: antialiased;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n  color: #41cac0;\n  text-decoration: none;\n}\na:active,\na:hover {\n  outline: 0;\n  color: #39b2a9;\n  text-decoration: none;\n}\na:hover {\n  cursor: pointer;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  background: rgba(65, 202, 192, 0.1);\n  padding: .2em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  box-sizing: content-box;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #f9f9f9;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #ddd;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\nul {\n  padding-left: 0px;\n}\n* {\n  box-sizing: border-box;\n}\n*:before,\n*:after {\n  box-sizing: border-box;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small {\n  font-weight: normal;\n  line-height: 1;\n  color: #999;\n}\nh1,\nh2,\nh3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\nh2 small,\nh3 small {\n  font-size: 65%;\n}\nh4,\nh5,\nh6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\nh5 small,\nh6 small {\n  font-size: 75%;\n}\nh1 {\n  font-size: 36px;\n}\nh2 {\n  font-size: 30px;\n}\nh3 {\n  font-size: 24px;\n}\nh4 {\n  font-size: 18px;\n}\nh5 {\n  font-size: 14px;\n}\nh6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #999;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #f9f9f9;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #999;\n}\nblockquote footer:before,\nblockquote small:before {\n  content: '\\2014   \\A0';\n}\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #f9f9f9;\n  border-left: 0;\n}\nblockquote.pull-right footer:before,\nblockquote.pull-right small:before {\n  content: '';\n}\nblockquote.pull-right footer:after,\nblockquote.pull-right small:after {\n  content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 6px 8px;\n  padding-bottom: 6px 8px;\n  color: #999;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n}\n.clearfix:before,\n.clearfix:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n  visibility: hidden !important;\n}\n.affix {\n  position: fixed;\n}\n.inline {\n  display: inline-block;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #ccc;\n}\n.text-primary {\n  color: #41cac0;\n}\na.text-primary:hover {\n  color: #39b2a9;\n}\n.text-success {\n  color: #2ecc71;\n}\na.text-success:hover {\n  color: #29b464;\n}\n.text-info {\n  color: #58c9f3;\n}\na.text-info:hover {\n  color: #38bef0;\n}\n.text-warning {\n  color: #f1c500;\n}\na.text-warning:hover {\n  color: #dbb509;\n}\n.text-danger {\n  color: #ff6c60;\n}\na.text-danger:hover {\n  color: #e74c3c;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #41cac0;\n}\na.bg-primary:hover {\n  background-color: #39b2a9;\n}\n.bg-success {\n  background-color: #2ecc71;\n}\na.bg-success:hover {\n  background-color: #29b464;\n}\n.bg-info {\n  background-color: #58c9f3;\n}\na.bg-info:hover {\n  background-color: #38bef0;\n}\n.bg-warning {\n  background-color: #f1c500;\n}\na.bg-warning:hover {\n  background-color: #dbb509;\n}\n.bg-danger {\n  background-color: #ff6c60;\n}\na.bg-danger:hover {\n  background-color: #e74c3c;\n}\n", ""]);
	
	// exports


/***/ },
/* 299 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=N3Components.js.map