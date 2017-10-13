import {
    removeElement,
    addClass,
    removeClass,
    isMobileDevice
} from './utils'

// 生成keyboard DOM
function createKeyboard(nk) {
    let keyboardDOM = document.createElement('div');
    keyboardDOM.className = 'num-keyboard-wrapper hidden';
    keyboardDOM.id = 'numKeyboard';
    keyboardDOM.innerHTML = `<div class="num-keyboard-wrap">
        <div class="nk-screen-wrap">
            <p class="nk-screen"></p>
        </div>
        <div class="nk-keys-wrap">
            <div class="nk-row">
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-7">7</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-8">8</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-9">9</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-del">del</div>
                </div>
            </div>
            <div class="nk-row">
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-4">4</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-5">5</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-6">6</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-clear">clear</div>
                </div>
            </div>
            <div class="nk-row">
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-1">1</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-2">2</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-3">3</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-cancel">cancel</div>
                </div>
            </div>
            <div class="nk-row">
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-negative">±</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-0">0</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-point">.</div>
                </div>
                <div class="nk-key-wrap">
                    <div class="nk-key nk-key-done">done</div>
                </div>
            </div>
        </div>
    </div>`;
    // 绑定事件
    let eventType = isMobileDevice() ? 'tap' : 'click';
    keyboardDOM.querySelector('.nk-keys-wrap').addEventListener(eventType, function (e) {
        console.log(e)
        let keyBtn; // 点击的按键
        let classNameList = e.target.className.split(' '); // 点击DOM的class列表
        for (var i = 0, len_i = classNameList.length; i < len_i; i++) {
            switch (classNameList[i]) {
                case 'nk-key-1':
                    keyBtn = 'nk-key-1';
                    nk.screenText += '1';
                    break;
                case 'nk-key-2':
                    keyBtn = 'nk-key-2';
                    nk.screenText += '2';
                    break;
                case 'nk-key-3':
                    keyBtn = 'nk-key-3';
                    nk.screenText += '3';
                    break;
                case 'nk-key-4':
                    keyBtn = 'nk-key-4';
                    nk.screenText += '4';
                    break;
                case 'nk-key-5':
                    keyBtn = 'nk-key-5';
                    nk.screenText += '5';
                    break;
                case 'nk-key-6':
                    keyBtn = 'nk-key-6';
                    nk.screenText += '6';
                    break;
                case 'nk-key-7':
                    keyBtn = 'nk-key-7';
                    nk.screenText += '7';
                    break;
                case 'nk-key-8':
                    keyBtn = 'nk-key-8';
                    nk.screenText += '8';
                    break;
                case 'nk-key-9':
                    keyBtn = 'nk-key-9';
                    nk.screenText += '9';
                    break;
                case 'nk-key-0':
                    keyBtn = 'nk-key-0';
                    nk.screenText += '0';
                    break;
                case 'nk-key-done':
                    keyBtn = 'nk-key-done';
                    break;
                case 'nk-key-cancel':
                    keyBtn = 'nk-key-cancel';
                    removeClass(document.querySelector('#numKeyboard'), 'show');
                    setTimeout(function () {
                        addClass(document.querySelector('#numKeyboard'), 'hidden');
                    }, 500);
                    break;
                case 'nk-key-del': // 退格
                    keyBtn = 'nk-key-del';
                    nk.screenText = nk.screenText.length > 0 ? nk.screenText.substr(0, nk.screenText.length - 1) : '';
                    break;
                case 'nk-key-clear': // 清空
                    keyBtn = 'nk-key-clear';
                    nk.screenText = '';
                    break;
                case 'nk-key-point': // 小数点
                    keyBtn = 'nk-key-point';
                    if (!/\./.test(nk.screenText)) { // 判断是否存在小数点
                        if (nk.screenText.trim().length === 0) { // 没有其它数字时，自动加前缀0
                            nk.screenText = '0.';
                        } else if (nk.screenText.trim().length === 1 && nk.screenText[0] == '-') { // 第一个为负号时
                            nk.screenText += '0.';
                        } else {
                            nk.screenText += '.';
                        }
                    }
                    break;
                case 'nk-key-negative': // 正负
                    keyBtn = 'nk-key-negative';
                    if (/^-/.test(nk.screenText)) {
                        nk.screenText = nk.screenText.substr(1, nk.screenText.length - 1);
                    } else {
                        nk.screenText = '-' + nk.screenText;
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
            document.querySelector('#numKeyboard .nk-screen').textContent = nk.screenText;
        }
    }, false)
    return keyboardDOM;
}

export { createKeyboard }