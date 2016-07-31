/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.config.debug = true;
	
	new Vue(_app2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\mh\\Desktop\\WeiChat\\src\\components\\app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5d04671c&file=app.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5d04671c&file=app.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "#chat {\n  overflow: hidden;\n  border-radius: 3px;\n}\n#chat .sidebar,\n#chat .main {\n  height: 100%;\n}\n#chat .sidebar {\n  float: left;\n  width: 200px;\n  color: #f4f4f4;\n  background-color: #2e3238;\n}\n#chat .main {\n  position: relative;\n  overflow: hidden;\n  background-color: #eee;\n}\n#chat .m-text {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n#chat .m-message {\n  height: calc(100% - 160px);\n}\n", "", {"version":3,"sources":["/../../../../vue-loader/lib/style-rewriter.js?id=_v-5d04671c&file=app.vue!C:/Users/mh/Desktop/WeiChat/node_modules/less-loader/index.js!C:/Users/mh/Desktop/WeiChat/node_modules/vue-loader/lib/selector.js?type=style&index=0!C:/Users/mh/Desktop/WeiChat/src/components/app.vue.style"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,QAAQ;CACT;AACD;EACE,2BAA2B;CAC5B","file":"app.vue","sourcesContent":["#chat {\n  overflow: hidden;\n  border-radius: 3px;\n}\n#chat .sidebar,\n#chat .main {\n  height: 100%;\n}\n#chat .sidebar {\n  float: left;\n  width: 200px;\n  color: #f4f4f4;\n  background-color: #2e3238;\n}\n#chat .main {\n  position: relative;\n  overflow: hidden;\n  background-color: #eee;\n}\n#chat .m-text {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n#chat .m-message {\n  height: calc(100% - 160px);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
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
/* 5 */
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
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
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
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
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
		var sourceMap = obj.sourceMap;
	
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
		var media = obj.media;
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _store = __webpack_require__(7);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _card = __webpack_require__(11);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _list = __webpack_require__(16);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _text = __webpack_require__(21);
	
	var _text2 = _interopRequireDefault(_text);
	
	var _message = __webpack_require__(26);
	
	var _message2 = _interopRequireDefault(_message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    el: '#chat',
	    data: function data() {
	        var serverData = _store2.default.fetch();
	
	        return {
	            // 登录用户
	            user: serverData.user,
	            // 用户列表
	            userList: serverData.userList,
	            // 会话列表
	            sessionList: serverData.sessionList,
	            // 搜索key
	            search: '',
	            // 选中的会话Index
	            sessionIndex: 0
	        };
	    },
	
	    computed: {
	        session: function session() {
	            return this.sessionList[this.sessionIndex];
	        }
	    },
	    watch: {
	        // 每当sessionList改变时，保存到localStorage中
	        sessionList: {
	            deep: true,
	            handler: function handler() {
	                _store2.default.save({
	                    user: this.user,
	                    userList: this.userList,
	                    sessionList: this.sessionList
	                });
	            }
	        }
	    },
	    components: {
	        card: _card2.default, list: _list2.default, text: _text2.default, message: _message2.default
	    }
	};
	
	// </script>
	//
	// <template>
	//     <div>
	//         <div class="sidebar">
	//             <card :user="user" :search.sync="search"></card>
	//             <list :user-list="userList" :session="session" :session-index.sync="sessionIndex" :search="search"></list>
	//         </div>
	//         <div class="main">
	//             <message :session="session" :user="user" :user-list="userList"></message> 
	//             <text :session="session"></text>
	//         </div>
	//     </div>
	// </template>
	//
	// <style lang="less">
	//     #chat {
	//         overflow: hidden;
	//         border-radius: 3px;
	//
	//         .sidebar, .main {
	//             height: 100%;   
	//         }
	//         .sidebar {
	//             float: left;
	//             width: 200px;
	//             color: #f4f4f4;
	//             background-color: #2e3238;
	//         }
	//         .main {
	//             position: relative;
	//             overflow: hidden;   
	//             background-color: #eee;
	//         }
	//         .m-text {
	//             position: absolute;
	//             width: 100%;
	//             bottom: 0;
	//             left: 0;
	//         }
	//         .m-message {
	//             height: ~'calc(100% - 160px)';
	//         }
	//     }
	// </style>
	/* generated by vue-loader */
	// <script>

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(8);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var key = 'VUE-CHAT-v3';
	
	// 虚拟数据
	if (!localStorage.getItem(key)) {
	    var now = new Date();
	
	    var data = {
	        // 登录用户
	        user: {
	            id: 1,
	            name: 'Coffce',
	            img: 'dist/images/1.jpg'
	        },
	
	        // 用户列表
	        userList: [{
	            id: 2,
	            name: '示例介绍',
	            img: 'dist/images/2.png'
	        }, {
	            id: 3,
	            name: 'webpack',
	            img: 'dist/images/3.jpg'
	        }, {
	            id: 4,
	            name: 'game',
	            img: 'dist/images/3.jpg'
	        }],
	
	        // 会话列表
	        sessionList: [{
	            userId: 2,
	            messages: [{
	                text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的基础特性和webpack配置。',
	                date: now
	            }, {
	                text: '项目地址: https://github.com/coffcer/vue-chat，不错',
	                date: now
	            }]
	        }, {
	            userId: 3,
	            messages: []
	        }, {
	            userId: 4,
	            messages: []
	        }]
	    };
	
	    localStorage.setItem(key, (0, _stringify2.default)(data));
	}
	
	exports.default = {
	    fetch: function fetch() {
	        return JSON.parse(localStorage.getItem(key));
	    },
	    save: function save(store) {
	        localStorage.setItem(key, (0, _stringify2.default)(store));
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(10);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(12)
	__vue_script__ = __webpack_require__(14)
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\mh\\Desktop\\WeiChat\\src\\components\\card.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1ac2948f&file=card.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./card.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1ac2948f&file=card.vue!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./card.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-card {\n  padding: 12px;\n  border-bottom: solid 1px #24272C;\n}\n.m-card footer {\n  margin-top: 10px;\n}\n.m-card .avatar,\n.m-card .name {\n  vertical-align: middle;\n}\n.m-card .avatar {\n  border-radius: 2px;\n}\n.m-card .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n  font-size: 16px;\n}\n.m-card .search {\n  padding: 0 10px;\n  width: 100%;\n  font-size: 12px;\n  color: #fff;\n  height: 30px;\n  line-height: 30px;\n  border: solid 1px #3a3a3a;\n  border-radius: 4px;\n  outline: none;\n  background-color: #26292E;\n}\n", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: ['user', 'search']
	};
	// </script>
	//
	// <template>
	//     <div class="m-card">
	//         <header>
	//             <img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
	//             <p class="name">{{user.name}}</p>
	//         </header>
	//         <footer>
	//             <input class="search" type="text" placeholder="search user..." v-model="search">
	//         </footer>
	//     </div>
	// </template>
	//
	// <style style="less">
	//     .m-card {
	//         padding: 12px;
	//         border-bottom: solid 1px #24272C;
	//
	//         footer {
	//             margin-top: 10px;
	//         }
	//
	//         .avatar, .name {
	//             vertical-align: middle;
	//         }
	//         .avatar {
	//             border-radius: 2px;
	//         }
	//         .name {
	//             display: inline-block;
	//             margin: 0 0 0 15px;
	//             font-size: 16px;
	//         }
	//         .search {
	//             padding: 0 10px;
	//             width: 100%;
	//             font-size: 12px;
	//             color: #fff;
	//             height: 30px;
	//             line-height: 30px;
	//             border: solid 1px #3a3a3a;
	//             border-radius: 4px;
	//             outline: none;
	//             background-color: #26292E;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"m-card\">\n        <header>\n            <img class=\"avatar\" width=\"40\" height=\"40\" :alt=\"user.name\" :src=\"user.img\">\n            <p class=\"name\">{{user.name}}</p>\n        </header>\n        <footer>\n            <input class=\"search\" type=\"text\" placeholder=\"search user...\" v-model=\"search\">\n        </footer>\n    </div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(17)
	__vue_script__ = __webpack_require__(19)
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\mh\\Desktop\\WeiChat\\src\\components\\list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6b75531d&file=list.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6b75531d&file=list.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-list li {\n  padding: 12px 15px;\n  border-bottom: 1px solid #292C33;\n  cursor: pointer;\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n}\n.m-list li:hover {\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.m-list li.active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.m-list .avatar,\n.m-list .name {\n  vertical-align: middle;\n}\n.m-list .avatar {\n  border-radius: 2px;\n}\n.m-list .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n}\n", "", {"version":3,"sources":["/../../../../vue-loader/lib/style-rewriter.js?id=_v-6b75531d&file=list.vue!C:/Users/mh/Desktop/WeiChat/node_modules/less-loader/index.js!C:/Users/mh/Desktop/WeiChat/node_modules/vue-loader/lib/selector.js?type=style&index=0!C:/Users/mh/Desktop/WeiChat/src/components/list.vue.style"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iCAAiC;EACjC,gBAAgB;EAChB,0CAAkC;EAAlC,kCAAkC;CACnC;AACD;EACE,4CAA4C;CAC7C;AACD;EACE,2CAA2C;CAC5C;AACD;;EAEE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,mBAAmB;CACpB","file":"list.vue","sourcesContent":[".m-list li {\n  padding: 12px 15px;\n  border-bottom: 1px solid #292C33;\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n.m-list li:hover {\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.m-list li.active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.m-list .avatar,\n.m-list .name {\n  vertical-align: middle;\n}\n.m-list .avatar {\n  border-radius: 2px;\n}\n.m-list .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: ['userList', 'sessionIndex', 'session', 'search'],
	    methods: {
	        select: function select(value) {
	            this.sessionIndex = this.userList.indexOf(value);
	        }
	    },
	    filters: {
	        search: function search(list) {
	            var _this = this;
	
	            return list.filter(function (item) {
	                return item.name.indexOf(_this.search) > -1;
	            });
	        }
	    }
	};
	// </script>
	//
	// <template>
	//     <div class="m-list">
	//         <ul>
	//             <li v-for="item in userList | search" :class="{ active: session.userId === item.id }" @click="select(item)">
	//                 <img class="avatar"  width="30" height="30" :alt="item.name" :src="item.img">
	//                 <p class="name">{{item.name}}</p>
	//             </li>
	//         </ul>
	//     </div>
	// </template>
	//
	// <style lang="less">
	//     .m-list {
	//         li {
	//             padding: 12px 15px;
	//             border-bottom: 1px solid #292C33;
	//             cursor: pointer;
	//             transition: background-color .1s;
	//
	//             &:hover {
	//                 background-color: rgba(255, 255, 255, 0.03);
	//             }
	//             &.active {
	//                 background-color: rgba(255, 255, 255, 0.1);
	//             }
	//         }
	//         .avatar, .name {
	//             vertical-align: middle;
	//         }
	//         .avatar {
	//             border-radius: 2px;
	//         }
	//         .name {
	//             display: inline-block;
	//             margin: 0 0 0 15px;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"m-list\">\n        <ul>\n            <li v-for=\"item in userList | search\" :class=\"{ active: session.userId === item.id }\" @click=\"select(item)\">\n                <img class=\"avatar\"  width=\"30\" height=\"30\" :alt=\"item.name\" :src=\"item.img\">\n                <p class=\"name\">{{item.name}}</p>\n            </li>\n        </ul>\n    </div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(22)
	__vue_script__ = __webpack_require__(24)
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\mh\\Desktop\\WeiChat\\src\\components\\text.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4123efa8&file=text.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./text.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4123efa8&file=text.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./text.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-text {\n  height: 160px;\n  border-top: solid 1px #ddd;\n}\n.m-text textarea {\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-family: \"Micrsofot Yahei\";\n  resize: none;\n}\n", "", {"version":3,"sources":["/../../../../vue-loader/lib/style-rewriter.js?id=_v-4123efa8&file=text.vue!C:/Users/mh/Desktop/WeiChat/node_modules/less-loader/index.js!C:/Users/mh/Desktop/WeiChat/node_modules/vue-loader/lib/selector.js?type=style&index=0!C:/Users/mh/Desktop/WeiChat/src/components/text.vue.style"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,2BAA2B;CAC5B;AACD;EACE,cAAc;EACd,aAAa;EACb,YAAY;EACZ,aAAa;EACb,cAAc;EACd,+BAA+B;EAC/B,aAAa;CACd","file":"text.vue","sourcesContent":[".m-text {\n  height: 160px;\n  border-top: solid 1px #ddd;\n}\n.m-text textarea {\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-family: \"Micrsofot Yahei\";\n  resize: none;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: ['session'],
	    data: function data() {
	        return {
	            text: ''
	        };
	    },
	
	    methods: {
	        inputing: function inputing(e) {
	            if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
	                this.session.messages.push({
	                    text: this.text,
	                    date: new Date(),
	                    self: true
	                });
	                this.text = '';
	            }
	        }
	    }
	};
	// </script>
	//
	// <template>
	//     <div class="m-text">
	//         <textarea placeholder="按 Ctrl + Enter 发送" v-model="text" @keyup="inputing"></textarea>
	//     </div>
	// </template>
	//
	// <style lang="less">
	//     .m-text {
	//         height: 160px;
	//         border-top: solid 1px #ddd;
	//
	//         textarea {
	//             padding: 10px;
	//             height: 100%;
	//             width: 100%;
	//             border: none;
	//             outline: none;
	//             font-family: "Micrsofot Yahei";
	//             resize: none;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"m-text\">\n        <textarea placeholder=\"按 Ctrl + Enter 发送\" v-model=\"text\" @keyup=\"inputing\"></textarea>\n    </div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(27)
	__vue_script__ = __webpack_require__(29)
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\mh\\Desktop\\WeiChat\\src\\components\\message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5545aa50&file=message.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./message.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5545aa50&file=message.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./message.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-message {\n  padding: 10px 15px;\n  overflow-y: scroll;\n}\n.m-message li {\n  margin-bottom: 15px;\n}\n.m-message .time {\n  margin: 7px 0;\n  text-align: center;\n}\n.m-message .time > span {\n  display: inline-block;\n  padding: 0 18px;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 2px;\n  background-color: #dcdcdc;\n}\n.m-message .avatar {\n  float: left;\n  margin: 0 10px 0 0;\n  border-radius: 3px;\n}\n.m-message .text {\n  display: inline-block;\n  position: relative;\n  padding: 0 10px;\n  max-width: calc(100% - 40px);\n  min-height: 30px;\n  line-height: 2.5;\n  font-size: 12px;\n  text-align: left;\n  word-break: break-all;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n.m-message .text:before {\n  content: \" \";\n  position: absolute;\n  top: 9px;\n  right: 100%;\n  border: 6px solid transparent;\n  border-right-color: #fafafa;\n}\n.m-message .self {\n  text-align: right;\n}\n.m-message .self .avatar {\n  float: right;\n  margin: 0 0 0 10px;\n}\n.m-message .self .text {\n  background-color: #b2e281;\n}\n.m-message .self .text:before {\n  right: inherit;\n  left: 100%;\n  border-right-color: transparent;\n  border-left-color: #b2e281;\n}\n", "", {"version":3,"sources":["/../../../../vue-loader/lib/style-rewriter.js?id=_v-5545aa50&file=message.vue!C:/Users/mh/Desktop/WeiChat/node_modules/less-loader/index.js!C:/Users/mh/Desktop/WeiChat/node_modules/vue-loader/lib/selector.js?type=style&index=0!C:/Users/mh/Desktop/WeiChat/src/components/message.vue.style"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,6BAA6B;EAC7B,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,4BAA4B;CAC7B;AACD;EACE,kBAAkB;CACnB;AACD;EACE,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,WAAW;EACX,gCAAgC;EAChC,2BAA2B;CAC5B","file":"message.vue","sourcesContent":[".m-message {\n  padding: 10px 15px;\n  overflow-y: scroll;\n}\n.m-message li {\n  margin-bottom: 15px;\n}\n.m-message .time {\n  margin: 7px 0;\n  text-align: center;\n}\n.m-message .time > span {\n  display: inline-block;\n  padding: 0 18px;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 2px;\n  background-color: #dcdcdc;\n}\n.m-message .avatar {\n  float: left;\n  margin: 0 10px 0 0;\n  border-radius: 3px;\n}\n.m-message .text {\n  display: inline-block;\n  position: relative;\n  padding: 0 10px;\n  max-width: calc(100% - 40px);\n  min-height: 30px;\n  line-height: 2.5;\n  font-size: 12px;\n  text-align: left;\n  word-break: break-all;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n.m-message .text:before {\n  content: \" \";\n  position: absolute;\n  top: 9px;\n  right: 100%;\n  border: 6px solid transparent;\n  border-right-color: #fafafa;\n}\n.m-message .self {\n  text-align: right;\n}\n.m-message .self .avatar {\n  float: right;\n  margin: 0 0 0 10px;\n}\n.m-message .self .text {\n  background-color: #b2e281;\n}\n.m-message .self .text:before {\n  right: inherit;\n  left: 100%;\n  border-right-color: transparent;\n  border-left-color: #b2e281;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: ['session', 'user', 'userList'],
	    computed: {
	        sessionUser: function sessionUser() {
	            var _this = this;
	
	            var users = this.userList.filter(function (item) {
	                return item.id === _this.session.userId;
	            });
	            return users[0];
	        }
	    },
	    filters: {
	        // 筛选出用户头像
	        avatar: function avatar(item) {
	            // 如果是自己发的消息显示登录用户的头像
	            var user = item.self ? this.user : this.sessionUser;
	            return user && user.img;
	        },
	
	        // 将日期过滤为 hour:minutes
	        time: function time(date) {
	            if (typeof date === 'string') {
	                date = new Date(date);
	            }
	            return date.getHours() + ':' + date.getMinutes();
	        }
	    },
	    directives: {
	        // 发送消息后滚动到底部
	        'scroll-bottom': function scrollBottom() {
	            var _this2 = this;
	
	            Vue.nextTick(function () {
	                _this2.el.scrollTop = _this2.el.scrollHeight - _this2.el.clientHeight;
	            });
	        }
	    }
	};
	// </script>
	//
	// <template>
	//     <div class="m-message" v-scroll-bottom="session.messages">
	//         <ul>
	//             <li v-for="item in session.messages">
	//                 <p class="time"><span>{{item.date | time}}</span></p>
	//                 <div class="main" :class="{ self: item.self }">
	//                     <img class="avatar" width="30" height="30" :src="item | avatar" />
	//                     <div class="text">{{item.text}}</div>
	//                 </div>
	//             </li>
	//         </ul>
	//     </div>
	// </template>
	//
	// <style lang="less">
	//     .m-message {
	//         padding: 10px 15px;
	//         overflow-y: scroll;
	//
	//         li {
	//             margin-bottom: 15px;
	//         }
	//         .time {
	//             margin: 7px 0;
	//             text-align: center;
	//
	//             > span {
	//                 display: inline-block;
	//                 padding: 0 18px;
	//                 font-size: 12px;
	//                 color: #fff;
	//                 border-radius: 2px;
	//                 background-color: #dcdcdc;
	//             }
	//         }
	//         .avatar {
	//             float: left;
	//             margin: 0 10px 0 0;
	//             border-radius: 3px;
	//         }
	//         .text {
	//             display: inline-block;
	//             position: relative;
	//             padding: 0 10px;
	//             max-width: ~'calc(100% - 40px)';
	//             min-height: 30px;
	//             line-height: 2.5;
	//             font-size: 12px;
	//             text-align: left;
	//             word-break: break-all;
	//             background-color: #fafafa;
	//             border-radius: 4px;
	//
	//             &:before {
	//                 content: " ";
	//                 position: absolute;
	//                 top: 9px;
	//                 right: 100%;
	//                 border: 6px solid transparent;
	//                 border-right-color: #fafafa;
	//             }
	//         }
	//
	//         .self {
	//             text-align: right;
	//
	//             .avatar {
	//                 float: right;
	//                 margin: 0 0 0 10px;
	//             }
	//             .text {
	//                 background-color: #b2e281;
	//
	//                 &:before {
	//                     right: inherit;
	//                     left: 100%;
	//                     border-right-color: transparent;
	//                     border-left-color: #b2e281;
	//                 }
	//             }
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"m-message\" v-scroll-bottom=\"session.messages\">\n        <ul>\n            <li v-for=\"item in session.messages\">\n                <p class=\"time\"><span>{{item.date | time}}</span></p>\n                <div class=\"main\" :class=\"{ self: item.self }\">\n                    <img class=\"avatar\" width=\"30\" height=\"30\" :src=\"item | avatar\" />\n                    <div class=\"text\">{{item.text}}</div>\n                </div>\n            </li>\n        </ul>\n    </div>\n";

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n    <div>\n        <div class=\"sidebar\">\n            <card :user=\"user\" :search.sync=\"search\"></card>\n            <list :user-list=\"userList\" :session=\"session\" :session-index.sync=\"sessionIndex\" :search=\"search\"></list>\n        </div>\n        <div class=\"main\">\n            <message :session=\"session\" :user=\"user\" :user-list=\"userList\"></message> \n            <text :session=\"session\"></text>\n        </div>\n    </div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map