!function(n){function e(k){if(a[k])return a[k].exports;var r=a[k]={i:k,l:!1,exports:{}};return n[k].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var a={};e.m=n,e.c=a,e.d=function(n,a,k){e.o(n,a)||Object.defineProperty(n,a,{configurable:!1,enumerable:!0,get:k})},e.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(a,"a",a),a},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=1)}([function(n,e,a){"use strict";function k(n){return!!(n.children&&n.children.length>1)}function r(n){var e=n.parentNode;e&&e.removeChild(n)}function i(){var n=navigator.userAgent.toLowerCase(),e="ipad"==n.match(/ipad/i),a="iphone os"==n.match(/iphone os/i),k="midp"==n.match(/midp/i),r="rv:1.2.3.4"==n.match(/rv:1.2.3.4/i),i="ucweb"==n.match(/ucweb/i),t="android"==n.match(/android/i),c="windows ce"==n.match(/windows ce/i),s="windows mobile"==n.match(/windows mobile/i);return!!(e||a||k||r||i||t||c||s)}Object.defineProperty(e,"__esModule",{value:!0}),e.haveChild=k,e.removeElement=r,e.isMobileDevice=i},function(n,e,a){"use strict";var k=a(0),r=a(2),i=a(3),t=function(n){return n&&n.__esModule?n:{default:n}}(i);!function(n){function e(){function n(k){for(var r=0,i=k.attributes.length;r<i;r++)if("data-num-keyboard"==k.attributes[r].name){a(k),e.push(k);break}for(var t=0,c=k.children.length;t<c;t++)n(k.children[t])}var e=[];n(document.body),console.log(e)}function a(n){var e=function(){document.querySelector("#numKeyboard").className+=" show"},a=(0,k.isMobileDevice)(),r=a?"tap":"click",i=!1;console.log(a,r);for(var t=0,c=n.attributes.length;t<c;t++)if("data-event-type"==n.attributes[t].name){n.addEventListener(n.attributes[t].value,e,!1),i=!0;break}i||n.addEventListener(r,e,!1)}var i={};i.init=function(){e()},n.numKeyboard=i;var c=(0,r.createKeyboard)("");document.body.appendChild(c),(0,t.default)()}(window)},function(n,e,a){"use strict";function k(n){var e=document.createElement("div");return e.className="num-keyboard-wrapper",e.id="numKeyboard",e.innerHTML='<div class="num-keyboard-wrap">\n        <div class="nk-screen-wrap">\n            <p class="nk-screen">999</p>\n        </div>\n        <div class="nk-keys-wrap">\n            <div class="nk-row">\n                <div class="nk-key-wrap">\n                    \x3c!--<div class="nk-key nk-key-7">7</div>--\x3e\n                    <a href="javascript:;" class="nk-key nk-key-7">7</a>\n                </div>\n                <div class="nk-key-wrap">\n                    \x3c!--<div class="nk-key nk-key-8">8</div>--\x3e\n                    <a href="javascript:;" class="nk-key nk-key-8">8</a>\n                </div>\n                <div class="nk-key-wrap">\n                    \x3c!--<div class="nk-key nk-key-9">9</div>--\x3e\n                    <a href="javascript:;" class="nk-key nk-key-9">9</a>\n                </div>\n                <div class="nk-key-wrap">\n                    \x3c!--<div class="nk-key nk-key-del">del</div>--\x3e\n                    <a href="javascript:;" class="nk-key nk-key-del">del</a>\n                </div>\n            </div>\n            <div class="nk-row">\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-4">4</a>\n                </div>\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-5">5</a>\n                </div>\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-6">6</a>\n                </div>\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-clear">clear</a>\n                </div>\n            </div>\n            <div class="nk-row">\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-1">1</a>\n                </div>\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-2">2</a>\n                </div>\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-3">3</a>\n                </div>\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-cancel">cancel</a>\n                </div>\n            </div>\n            <div class="nk-row">\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-negative">±</a>\n                </div>\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-0">0</a>\n                </div>\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-point">.</a>\n                </div>\n                <div class="nk-key-wrap">\n                    <a href="javascript:;" class="nk-key nk-key-done">done</a>\n                </div>\n            </div>\n        </div>\n    </div>',e.querySelector(".nk-keys-wrap").addEventListener("click",function(e){console.log(e);for(var a=void 0,k=e.target.className.split(" "),r=0,i=k.length;r<i;r++){switch(k[r]){case"nk-key-1":n+="1",a="nk-key-1";break;case"nk-key-2":n+="2",a="nk-key-2";break;case"nk-key-3":n+="3",a="nk-key-3";break;case"nk-key-4":n+="4",a="nk-key-4";break;case"nk-key-5":n+="5",a="nk-key-5";break;case"nk-key-6":n+="6",a="nk-key-6";break;case"nk-key-7":n+="7",a="nk-key-7";break;case"nk-key-8":n+="8",a="nk-key-8";break;case"nk-key-9":n+="9",a="nk-key-9";break;case"nk-key-0":n+="0",a="nk-key-0";break;case"nk-key-done":a="nk-key-done";break;case"nk-key-cancel":a="nk-key-cancel";break;case"nk-key-del":a="nk-key-del";break;case"nk-key-clear":a="nk-key-clear";break;case"nk-key-point":a="nk-key-point";break;case"nk-key-negative":a="nk-key-negative"}if(a)break}a&&(document.querySelector("#numKeyboard .nk-screen").textContent=n)},!1),e}Object.defineProperty(e,"__esModule",{value:!0}),e.createKeyboard=void 0;a(0);e.createKeyboard=k},function(n,e,a){"use strict";function k(){var n=document.createElement("style");n.type="text/css",n.innerHTML=".num-keyboard-wrapper {\n            width: 100%;\n            height: 300px;\n            position: fixed;\n            bottom: -300px;\n            transition: all 0.4s;\n            -webkit-transition: all 0.4s;\n            -moz-transition: all 0.4s;\n        }\n        .num-keyboard-wrapper.show {\n            bottom: 0;\n        }\n\n        .num-keyboard-wrap {\n            width: 100%;\n            height: 100%;\n            margin: 0 auto;\n            z-index: 5000;\n            -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            border-radius: 6px;\n            background: white;\n            display: flex;\n            display: -webkit-flex;\n            -webkit-flex-direction: column;\n            flex-direction: column;\n        }\n        /*显示区域*/\n\n        .num-keyboard-wrap .nk-screen-wrap {\n            width: 100%;\n            height: 50px;\n            padding: 8px;\n            box-sizing: border-box;\n        }\n\n        .num-keyboard-wrap .nk-screen-wrap .nk-screen {\n            width: 100%;\n            height: 34px;\n            box-sizing: border-box;\n            padding: 6px 12px;\n            color: #555;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            text-align: right;\n            display: block;\n            font-size: 14px;\n            margin: 0;\n        }\n        /*按键区域*/\n\n        .nk-keys-wrap {\n            display: flex;\n            display: -webkit-flex;\n            -webkit-flex-direction: column;\n            flex-direction: column;\n            flex: 1;\n            -webkit-flex: 1;\n        }\n\n        .nk-keys-wrap .nk-row {\n            display: flex;\n            display: -webkit-flex;\n            flex: 1;\n            -wekit-flex: 1;\n        }\n\n        .nk-key-wrap {\n            display: flex;\n            display: -webkit-flex;\n            flex: 1;\n            -webkit-flex: 1;\n        }\n\n        .nk-key-wrap .nk-key {\n            margin: 8px;\n            display: flex;\n            display: -webkit-flex;\n            flex: 1;\n            -webkit-flex: 1;\n            -webkit-align-self: stretch;\n            align-self: stretch;\n            -webkit-justify-content: center;\n            justify-content: center;\n            -webkit-align-items: center;\n            align-items: center;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            text-decoration: none;\n        }\n\n        .nk-key-wrap .nk-key:active {\n            background: #ccc;\n        }\n\n        .nk-key-wrap .nk-key-0,\n        .nk-key-wrap .nk-key-1,\n        .nk-key-wrap .nk-key-2,\n        .nk-key-wrap .nk-key-3,\n        .nk-key-wrap .nk-key-4,\n        .nk-key-wrap .nk-key-5,\n        .nk-key-wrap .nk-key-6,\n        .nk-key-wrap .nk-key-7,\n        .nk-key-wrap .nk-key-8,\n        .nk-key-wrap .nk-key-9 {\n            background-color: #F7D69E;\n            color: #fff;\n        }\n\n        .nk-key-wrap .nk-key-negative,\n        .nk-key-wrap .nk-key-point {\n            background-color: #EAF5FF;\n            color: #555;\n        }\n\n        .nk-key-wrap .nk-key-del,\n        .nk-key-wrap .nk-key-clear {\n            background-color: #e2e2e2;\n            color: #555;\n        }\n\n        .nk-key-wrap .nk-key-cancel {\n            background-color: #F99595;\n            color: #fff;\n        }\n\n        .nk-key-wrap .nk-key-done {\n            background-color: #54D7FF;\n            color: #fff;\n        }",document.getElementsByTagName("HEAD").item(0).appendChild(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=k}]);