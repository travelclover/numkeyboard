// const $ = require('jquery');
import {
    isMobileDevice,
    removeClass
} from './utils.js'
import { createKeyboard } from './createKeyboard.js'
import createStyle from './createStyle' // 生成样式文件

(function (win) {
    let numKeyboard = {},
        targetDOMList = [], // 目标DOM
        nk = {
            screenText: '', // 屏幕显示文本
            el: null, // 当前触发键盘的el
        };

    function _initNumKeyboard() {
        // 查找包含 data-num-keyboard 属性的 DOM
        getTargetDom(document.body);
        console.log(targetDOMList);

        function getTargetDom(el) {
            if (el.hasAttribute('data-nk-type')) {
                bindEventByEventType(el);
                targetDOMList.push(el);
            }
            for (var i = 0, len_i = el.children.length; i < len_i; i++) {
                getTargetDom(el.children[i]);
            }
        }
    }

    numKeyboard.init = function () {
        _initNumKeyboard();
    }

    // 绑定事件
    function bindEventByEventType(el) {
        let eventFn = function () { // 绑定的事件函数
            // 获取当前触发键盘的dom
            nk.el = this;
            // 获取原始数值
            nk.screenText = nk.el.hasAttribute('data-nk-value') ? nk.el.getAttribute('data-nk-value') : '';
            document.querySelector('#numKeyboard .nk-screen').textContent = nk.screenText;

            // 显示键盘
            removeClass(document.querySelector('#numKeyboard'), 'hidden');
            setTimeout(function () {
                document.querySelector('#numKeyboard').className += ' show';
            }, 0);
            console.log(nk)
        };
        let isMobile = isMobileDevice(); // 判断是否是移动设备
        let eventType = isMobile ? 'tap' : 'click';
        let haveEventType = false;
        console.log(isMobile, eventType)
        for (var i = 0, len_i = el.attributes.length; i < len_i; i++) {
            if (el.attributes[i]['name'] == 'data-nk-event') {
                el.addEventListener(el.attributes[i]['value'], eventFn, false);
                haveEventType = true;
                break;
            }
        }
        // 如果没有指定触发事件则默认绑定点击事件
        if (!haveEventType) {
            el.addEventListener(eventType, eventFn, false);
        }

    }

    win.numKeyboard = numKeyboard;

    // body中添加numKeyboardDOM
    let keyboard = createKeyboard(nk);
    document.body.appendChild(keyboard);
    // 添加style样式
    createStyle();
})(window)