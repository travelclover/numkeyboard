/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// 判断该节点下是否有子节点
function haveChild(el) {
    if (el.children && el.children.length > 1) {
        return true;
    }
    return false;
}

/**
 * 从父节点中移除该节点
 * @param  {object} _element 需要删除的节点
 * @return {[type]}          [description]
 */
function removeElement(_element) {
    var _parentElement = _element.parentNode;
    if (_parentElement) {
        _parentElement.removeChild(_element);
    }
}

/**
 * 删除class类
 * @param  {object} el  需要删除class的节点
 * @param  {string} cls 需要删除的class
 */
function removeClass(el, cls) {
    var oldClassStr = ' ' + el.className + ' ';
    oldClassStr = oldClassStr.replace(/(\s+)/gi, ' ');
    var regExp = new RegExp(' ' + cls + ' ', 'g');
    var removedClassStr = oldClassStr.replace(regExp, ' ');
    while (regExp.test(removedClassStr)) {
        removedClassStr = removedClassStr.replace(regExp, ' ');
    }
    removedClassStr = removedClassStr.substr(1, removedClassStr.length - 2);
    el.className = removedClassStr;
}

/**
 * 添加class类
 * @param  {object} el  需要添加class的节点
 * @param  {string} cls 需要添加的class
 */
function addClass(el, cls) {
    var oldClassStr = ' ' + el.className + ' ';
    oldClassStr = oldClassStr.replace(/(\s+)/gi, ' ');
    var regExp = new RegExp(' ' + cls + ' ', 'g');
    var newClassStr;
    if (!regExp.test(oldClassStr)) {
        newClassStr = oldClassStr + cls;
        el.className = newClassStr.substr(1, newClassStr.length - 1);
    }
}

/**
 * 添加class类
 * @param  {object} el  目标节点
 * @param  {string} cls class名
 */
function hasClass(el, cls) {
    var oldClassStr = ' ' + el.className + ' ';
    oldClassStr = oldClassStr.replace(/(\s+)/gi, ' ');
    var regExp = new RegExp(' ' + cls + ' ', 'g');
    if (regExp.test(oldClassStr)) {
        return true;
    }
    return false;
}

/**
 * 判断是否是移动端设备
 * @return {Boolean} 返回 true | false
 */
function isMobileDevice() {
    var _devices = navigator.userAgent.toLowerCase();
    var bIsIpad = _devices.match(/ipad/i) == 'ipad';
    var bIsIphoneOs = _devices.match(/iphone os/i) == 'iphone os';
    var bIsMidp = _devices.match(/midp/i) == 'midp';
    var bIsUc7 = _devices.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
    var bIsUc = _devices.match(/ucweb/i) == 'ucweb';
    var bIsAndroid = _devices.match(/android/i) == 'android';
    var bIsCE = _devices.match(/windows ce/i) == 'windows ce';
    var bIsWM = _devices.match(/windows mobile/i) == 'windows mobile';
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        // 移动端
        return true;
    } else {
        // pc 端
        return false;
    }
}

exports.haveChild = haveChild;
exports.removeElement = removeElement;
exports.removeClass = removeClass;
exports.addClass = addClass;
exports.hasClass = hasClass;
exports.isMobileDevice = isMobileDevice;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(0);

var _createKeyboard = __webpack_require__(2);

var _createStyle = __webpack_require__(3);

var _createStyle2 = _interopRequireDefault(_createStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 生成样式文件

(function (win) {
    var numKeyboard = {},
        DOMList = [],
        // 目标DOM
    nk = {
        value: '', // 屏幕显示文本
        elem: null // 当前触发键盘的el
    };

    function _initNumKeyboard() {
        var newDOMList = [];
        // 查找包含 data-num-keyboard 属性的 DOM
        findTargetDOM(document.body);
        // 绑定事件
        for (var i = 0, len_i = newDOMList.length; i < len_i; i++) {
            bindEvent(newDOMList[i]);
        }
        DOMList = newDOMList;
        console.log(newDOMList);

        function findTargetDOM(el) {
            if (el.hasAttribute('data-nk-type')) {
                // 获取设置初始数据后的对象
                var newTargetObj = createTargetDOMObj(el);
                newDOMList.push(newTargetObj);
            }
            for (var i = 0, len_i = el.children.length; i < len_i; i++) {
                findTargetDOM(el.children[i]);
            }
        }
    }

    numKeyboard.init = function () {
        _initNumKeyboard();
    };

    // 绑定事件
    function bindEvent(newDOMObj) {
        // 移除以前绑定的事件
        for (var i = 0, len_i = DOMList.length; i < len_i; i++) {
            if (newDOMObj.elem == DOMList[i]['elem']) {
                newDOMObj.elem.removeEventListener(DOMList[i].event, DOMList[i].eventFn, false);
            }
        }
        newDOMObj.eventFn = function () {
            // 绑定的事件函数
            // 删除numKeyboard
            if (document.querySelector('#numKeyboard')) {
                (0, _utils.removeElement)(document.querySelector('#numKeyboard'));
            }

            // 获取当前触发键盘的dom
            for (var i = 0, len_i = DOMList.length; i < len_i; i++) {
                if (this == DOMList[i]['elem']) {
                    // 获取原始数值
                    nk = DOMList[i];
                }
            }

            // body中添加numKeyboardDOM
            var keyboard = (0, _createKeyboard.createKeyboard)(nk);
            document.body.appendChild(keyboard);

            // 显示键盘
            (0, _utils.removeClass)(document.querySelector('#numKeyboard'), 'hidden');
            setTimeout(function () {
                document.querySelector('#numKeyboard').className += ' show';
            }, 0);
        };
        newDOMObj.elem.addEventListener(newDOMObj.event, newDOMObj.eventFn, false);
    }

    /**
     * 根据el上的参数生成一个新的目标对象
     * @param  {object} el  需要删除的节点
     * @return {object}     返回一个包含type(键盘类型)、event(触发事件)、value(默认值)、targetElem(目标DOM)等信息的对象
     */
    function createTargetDOMObj(el) {
        var DOMObj = {};
        DOMObj.elem = el;
        // 获取键盘类型
        var typeObj = {
            number: false, // 数字
            tel: false, // 电话
            negative: false, // 正负
            decimal: false // 小数
        };
        var typeStr = el.getAttribute('data-nk-type');
        typeStr = typeStr.replace(/(\s+)/gi, ' ');
        var typeList = typeStr.split(' ');
        for (var i = 0, len_i = typeList.length; i < len_i; i++) {
            switch (typeList[i]) {
                case 'number':
                    typeObj.number = true;
                    break;
                case 'tel':
                    typeObj.tel = true;
                    break;
                case 'negative':
                    typeObj.negative = true;
                    break;
                case 'decimal':
                    typeObj.decimal = true;
                    break;
            }
        }
        if (typeObj.tel) {
            DOMObj.typeNum = 1; // 1:电话键盘
        } else {
            if (typeObj.negative && typeObj.decimal) {
                DOMObj.typeNum = 5; // 5:正负小数 数字键盘
            } else if (typeObj.negative) {
                DOMObj.typeNum = 3; // 3:正负数字键盘
            } else if (typeObj.decimal) {
                DOMObj.typeNum = 4; // 4:小数数字键盘
            } else {
                DOMObj.typeNum = 2; // 数字键盘
            }
        }
        // 获取默认值
        if (el.hasAttribute('data-nk-value')) {
            var nkValue = el.getAttribute('data-nk-value');
            DOMObj.value = typeof nkValue == 'string' ? nkValue.trim() : nkValue;
        } else {
            DOMObj.value = '';
        }
        // 获取触发事件
        if (el.hasAttribute('data-nk-event')) {
            DOMObj.event = el.getAttribute('data-nk-event');
        } else {
            DOMObj.event = (0, _utils.isMobileDevice)() ? 'tap' : 'click';
        }
        return DOMObj;
    }

    win.numKeyboard = numKeyboard;

    // 添加style样式
    (0, _createStyle2.default)();
})(window); // const $ = require('jquery');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createKeyboard = undefined;

var _utils = __webpack_require__(0);

// 生成keyboard DOM
function createKeyboard(nk) {
    var keyboardDOM = document.createElement('div');
    keyboardDOM.className = 'num-keyboard-wrapper hidden';
    keyboardDOM.id = 'numKeyboard';
    keyboardDOM.innerHTML = '<div class="num-keyboard-wrap">\n        <div class="nk-screen-wrap">\n            <p class="nk-screen">' + nk.value + '</p>\n        </div>\n        <div class="nk-keys-wrap">\n            <div class="nk-row">\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-7">7</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-8">8</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-9">9</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-del">del</div>\n                </div>\n            </div>\n            <div class="nk-row">\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-4">4</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-5">5</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-6">6</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-clear">clear</div>\n                </div>\n            </div>\n            <div class="nk-row">\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-1">1</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-2">2</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-3">3</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-cancel">cancel</div>\n                </div>\n            </div>\n            <div class="nk-row">\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-negative">\xB1</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-0">0</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-point">.</div>\n                </div>\n                <div class="nk-key-wrap">\n                    <div class="nk-key nk-key-done">done</div>\n                </div>\n            </div>\n        </div>\n    </div>';
    // 根据typeNum 隐藏按钮
    hiddenBtnByTypeNum(keyboardDOM, nk.typeNum);

    // 绑定事件
    var eventType = (0, _utils.isMobileDevice)() ? 'tap' : 'click';
    keyboardDOM.querySelector('.nk-keys-wrap').addEventListener(eventType, function (e) {
        var keyBtn = void 0; // 点击的按键
        var classNameList = e.target.className.split(' '); // 点击DOM的class列表
        for (var i = 0, len_i = classNameList.length; i < len_i; i++) {
            switch (classNameList[i]) {
                case 'nk-key-1':
                    keyBtn = 'nk-key-1';
                    nk.value += '1';
                    break;
                case 'nk-key-2':
                    keyBtn = 'nk-key-2';
                    nk.value += '2';
                    break;
                case 'nk-key-3':
                    keyBtn = 'nk-key-3';
                    nk.value += '3';
                    break;
                case 'nk-key-4':
                    keyBtn = 'nk-key-4';
                    nk.value += '4';
                    break;
                case 'nk-key-5':
                    keyBtn = 'nk-key-5';
                    nk.value += '5';
                    break;
                case 'nk-key-6':
                    keyBtn = 'nk-key-6';
                    nk.value += '6';
                    break;
                case 'nk-key-7':
                    keyBtn = 'nk-key-7';
                    nk.value += '7';
                    break;
                case 'nk-key-8':
                    keyBtn = 'nk-key-8';
                    nk.value += '8';
                    break;
                case 'nk-key-9':
                    keyBtn = 'nk-key-9';
                    nk.value += '9';
                    break;
                case 'nk-key-0':
                    keyBtn = 'nk-key-0';
                    nk.value += '0';
                    break;
                case 'nk-key-done':
                    // 确定
                    keyBtn = 'nk-key-done';
                    nk.elem.textContent = nk.value;
                    nk.elem.setAttribute('data-nk-value', nk.value);
                    hideKeyboard(); // 隐藏键盘
                    break;
                case 'nk-key-cancel':
                    // 取消
                    keyBtn = 'nk-key-cancel';
                    hideKeyboard(); // 隐藏键盘
                    break;
                case 'nk-key-del':
                    // 退格
                    keyBtn = 'nk-key-del';
                    nk.value = nk.value.length > 0 ? nk.value.substr(0, nk.value.length - 1) : '';
                    break;
                case 'nk-key-clear':
                    // 清空
                    keyBtn = 'nk-key-clear';
                    nk.value = '';
                    break;
                case 'nk-key-point':
                    // 小数点
                    keyBtn = 'nk-key-point';
                    if (!/\./.test(nk.value)) {
                        // 判断是否存在小数点
                        if (nk.value.trim().length === 0) {
                            // 没有其它数字时，自动加前缀0
                            nk.value = '0.';
                        } else if (nk.value.trim().length === 1 && nk.value[0] == '-') {
                            // 第一个为负号时
                            nk.value += '0.';
                        } else {
                            nk.value += '.';
                        }
                    }
                    break;
                case 'nk-key-negative':
                    // 正负
                    keyBtn = 'nk-key-negative';
                    if (/^-/.test(nk.value)) {
                        nk.value = nk.value.substr(1, nk.value.length - 1);
                    } else {
                        nk.value = '-' + nk.value;
                    }
                    break;
            }
            if (keyBtn) {
                break;
            }
        }
        // 点击了按钮
        if (keyBtn) {
            // 刷新screen显示数字
            document.querySelector('#numKeyboard .nk-screen').textContent = nk.value;
        }
    }, false);
    return keyboardDOM;
}

function hiddenBtnByTypeNum(el, typeNum) {
    switch (typeNum) {
        case 1:
            // 电话键盘
            (0, _utils.removeElement)(el.querySelector('.nk-key-negative'));
            (0, _utils.removeElement)(el.querySelector('.nk-key-point'));
            break;
        case 2:
            // 数字键盘
            (0, _utils.removeElement)(el.querySelector('.nk-key-negative'));
            (0, _utils.removeElement)(el.querySelector('.nk-key-point'));
            break;
        case 3:
            // 正负数字键盘
            (0, _utils.removeElement)(el.querySelector('.nk-key-point'));
            break;
        case 4:
            // 含小数数字键盘
            (0, _utils.removeElement)(el.querySelector('.nk-key-negative'));
            break;
        case 5:
            // 正负小数数字键盘
            break;
    }
}

// 隐藏键盘
function hideKeyboard() {
    (0, _utils.removeClass)(document.querySelector('#numKeyboard'), 'show');
    setTimeout(function () {
        (0, _utils.addClass)(document.querySelector('#numKeyboard'), 'hidden');
        (0, _utils.removeElement)(document.querySelector('#numKeyboard'));
    }, 500);
}

exports.createKeyboard = createKeyboard;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function createStyle() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.num-keyboard-wrapper {\n            width: 100%;\n            height: 300px;\n            position: fixed;\n            bottom: -300px;\n            transition: all 0.4s;\n            -webkit-transition: all 0.4s;\n            -moz-transition: all 0.4s;\n        }\n        .num-keyboard-wrapper.hidden{\n            display: none;\n        }\n        .num-keyboard-wrapper.show {\n            bottom: 0;\n        }\n\n        .num-keyboard-wrap {\n            width: 100%;\n            height: 100%;\n            margin: 0 auto;\n            z-index: 5000;\n            -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            border-radius: 6px;\n            background: white;\n            display: flex;\n            display: -webkit-flex;\n            -webkit-flex-direction: column;\n            flex-direction: column;\n        }\n        /*\u663E\u793A\u533A\u57DF*/\n\n        .num-keyboard-wrap .nk-screen-wrap {\n            width: 100%;\n            height: 50px;\n            padding: 8px;\n            box-sizing: border-box;\n        }\n\n        .num-keyboard-wrap .nk-screen-wrap .nk-screen {\n            width: 100%;\n            height: 34px;\n            box-sizing: border-box;\n            padding: 6px 12px;\n            color: #555;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            text-align: right;\n            display: block;\n            font-size: 14px;\n            margin: 0;\n            word-break: break-all;\n            overflow-y: auto;\n        }\n        /*\u6309\u952E\u533A\u57DF*/\n\n        .nk-keys-wrap {\n            display: flex;\n            display: -webkit-flex;\n            -webkit-flex-direction: column;\n            flex-direction: column;\n            flex: 1;\n            -webkit-flex: 1;\n        }\n\n        .nk-keys-wrap .nk-row {\n            display: flex;\n            display: -webkit-flex;\n            flex: 1;\n            -wekit-flex: 1;\n        }\n\n        .nk-key-wrap {\n            display: flex;\n            display: -webkit-flex;\n            flex: 1;\n            -webkit-flex: 1;\n        }\n\n        .nk-key-wrap .nk-key {\n            margin: 8px;\n            display: flex;\n            display: -webkit-flex;\n            flex: 1;\n            -webkit-flex: 1;\n            -webkit-align-self: stretch;\n            align-self: stretch;\n            -webkit-justify-content: center;\n            justify-content: center;\n            -webkit-align-items: center;\n            align-items: center;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            text-decoration: none;\n        }\n\n        .nk-key-wrap .nk-key:active {\n            background: #ccc;\n        }\n\n        .nk-key-wrap .nk-key-0,\n        .nk-key-wrap .nk-key-1,\n        .nk-key-wrap .nk-key-2,\n        .nk-key-wrap .nk-key-3,\n        .nk-key-wrap .nk-key-4,\n        .nk-key-wrap .nk-key-5,\n        .nk-key-wrap .nk-key-6,\n        .nk-key-wrap .nk-key-7,\n        .nk-key-wrap .nk-key-8,\n        .nk-key-wrap .nk-key-9 {\n            background-color: #F7D69E;\n            color: #fff;\n        }\n\n        .nk-key-wrap .nk-key-negative,\n        .nk-key-wrap .nk-key-point {\n            background-color: #EAF5FF;\n            color: #555;\n        }\n\n        .nk-key-wrap .nk-key-del,\n        .nk-key-wrap .nk-key-clear {\n            background-color: #e2e2e2;\n            color: #555;\n        }\n\n        .nk-key-wrap .nk-key-cancel {\n            background-color: #F99595;\n            color: #fff;\n        }\n\n        .nk-key-wrap .nk-key-done {\n            background-color: #54D7FF;\n            color: #fff;\n        }';
    document.getElementsByTagName('HEAD').item(0).appendChild(style);
}

exports.default = createStyle;

/***/ })
/******/ ]);