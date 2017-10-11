// const $ = require('jquery');
import { isMobileDevice } from './utils.js'

(function (win) {
    let numKeyboard = {},
        targetDOM = [];

    function _initNumKeyboard() {
        // 查找包含 data-num-keyboard 属性的 DOM
        console.log($('.package-name'));
        var targetDOM = [];
        getTargetDom(document.body);
        console.log(targetDOM);

        function getTargetDom(el) {
            for (let i = 0, len_i = el.attributes.length; i < len_i; i++) {
                if (el.attributes[i]['name'] == 'data-num-keyboard') {
                    bindEventByEventType(el);
                    targetDOM.push(el);
                    break
                }
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
        let eventFn = function () { alert(1) }; // 绑定的事件
        let isMobile = isMobileDevice(); // 判断是否是移动设备
        let eventType = isMobile ? 'tap' : 'click';
        let haveEventType = false;
        console.log(isMobile, eventType)
        for (var i = 0, len_i = el.attributes.length; i < len_i; i++) {
            if (el.attributes[i]['name'] == 'data-event-type') {
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
})(window)