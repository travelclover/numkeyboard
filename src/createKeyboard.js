import {
    removeElement,
    addClass,
    removeClass,
    isMobileDevice
} from './utils'

// 生成keyboard DOM
function createKeyboard(screenText) {
    let keyboardDOM = document.createElement('div');
    keyboardDOM.className = 'num-keyboard-wrapper hidden';
    keyboardDOM.id = 'numKeyboard';
    keyboardDOM.innerHTML = `<div class="num-keyboard-wrap">
        <div class="nk-screen-wrap">
            <p class="nk-screen">999</p>
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
                    screenText += '1';
                    keyBtn = 'nk-key-1';
                    break;
                case 'nk-key-2':
                    screenText += '2';
                    keyBtn = 'nk-key-2';
                    break;
                case 'nk-key-3':
                    screenText += '3';
                    keyBtn = 'nk-key-3';
                    break;
                case 'nk-key-4':
                    screenText += '4';
                    keyBtn = 'nk-key-4';
                    break;
                case 'nk-key-5':
                    screenText += '5';
                    keyBtn = 'nk-key-5';
                    break;
                case 'nk-key-6':
                    screenText += '6';
                    keyBtn = 'nk-key-6';
                    break;
                case 'nk-key-7':
                    screenText += '7';
                    keyBtn = 'nk-key-7';
                    break;
                case 'nk-key-8':
                    screenText += '8';
                    keyBtn = 'nk-key-8';
                    break;
                case 'nk-key-9':
                    screenText += '9';
                    keyBtn = 'nk-key-9';
                    break;
                case 'nk-key-0':
                    screenText += '0';
                    keyBtn = 'nk-key-0';
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
                case 'nk-key-del':
                    keyBtn = 'nk-key-del';
                    break;
                case 'nk-key-clear':
                    keyBtn = 'nk-key-clear';
                    break;
                case 'nk-key-point':
                    keyBtn = 'nk-key-point';
                    break;
                case 'nk-key-negative':
                    keyBtn = 'nk-key-negative';
                    break;
            }
            if (keyBtn) {
                break;
            }
        }
        // 点击了按钮
        if (keyBtn) {
            // 刷新screen显示数字
            document.querySelector('#numKeyboard .nk-screen').textContent = screenText;
        }
    }, false)
    return keyboardDOM;
}

export { createKeyboard }