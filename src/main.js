// const $ = require('jquery');
import {
    isMobileDevice,
    removeClass,
    removeElement
} from './utils.js'
import { createKeyboard } from './createKeyboard.js'
import createStyle from './createStyle' // 生成样式文件

(function (win) {
    let numKeyboard = {},
        DOMList = [], // 目标DOM
        nk = {
            value: '', // 屏幕显示文本
            elem: null, // 当前触发键盘的el
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
    }

    // 绑定事件
    function bindEvent(newDOMObj) {
        // 移除以前绑定的事件
        for (var i = 0, len_i = DOMList.length; i < len_i; i++) {
            if (newDOMObj.elem == DOMList[i]['elem']) {
                newDOMObj.elem.removeEventListener(DOMList[i].event, DOMList[i].eventFn, false);
            }
        }
        newDOMObj.eventFn = function () { // 绑定的事件函数
            // 删除numKeyboard
            if (document.querySelector('#numKeyboard')) {
                removeElement(document.querySelector('#numKeyboard'));
            }

            // 获取当前触发键盘的dom
            for (var i = 0, len_i = DOMList.length; i < len_i; i++) {
                if (this == DOMList[i]['elem']) {
                    // 获取原始数值
                    nk = DOMList[i];
                }
            }

            // body中添加numKeyboardDOM
            let keyboard = createKeyboard(nk);
            document.body.appendChild(keyboard);

            // 显示键盘
            removeClass(document.querySelector('#numKeyboard'), 'hidden');
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
            decimal: false, // 小数
        }
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
            DOMObj.event = isMobileDevice() ? 'tap' : 'click';
        }
        return DOMObj;
    }

    win.numKeyboard = numKeyboard;


    // 添加style样式
    createStyle();
})(window)