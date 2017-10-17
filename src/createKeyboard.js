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
            <p class="nk-screen">${nk.value}</p>
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
    // 根据typeNum 隐藏按钮
    hiddenBtnByTypeNum(keyboardDOM, nk.typeNum);

    // 绑定事件
    let eventType = isMobileDevice() ? 'tap' : 'click';
    keyboardDOM.querySelector('.nk-keys-wrap').addEventListener(eventType, function (e) {
        let keyBtn; // 点击的按键
        let classNameList = e.target.className.split(' '); // 点击DOM的class列表
        for (var i = 0, len_i = classNameList.length; i < len_i; i++) {
            switch (classNameList[i]) {
                case 'nk-key-1':
                    keyBtn = 'nk-key-1';
                    nk.tempValue += '1';
                    break;
                case 'nk-key-2':
                    keyBtn = 'nk-key-2';
                    nk.tempValue += '2';
                    break;
                case 'nk-key-3':
                    keyBtn = 'nk-key-3';
                    nk.tempValue += '3';
                    break;
                case 'nk-key-4':
                    keyBtn = 'nk-key-4';
                    nk.tempValue += '4';
                    break;
                case 'nk-key-5':
                    keyBtn = 'nk-key-5';
                    nk.tempValue += '5';
                    break;
                case 'nk-key-6':
                    keyBtn = 'nk-key-6';
                    nk.tempValue += '6';
                    break;
                case 'nk-key-7':
                    keyBtn = 'nk-key-7';
                    nk.tempValue += '7';
                    break;
                case 'nk-key-8':
                    keyBtn = 'nk-key-8';
                    nk.tempValue += '8';
                    break;
                case 'nk-key-9':
                    keyBtn = 'nk-key-9';
                    nk.tempValue += '9';
                    break;
                case 'nk-key-0':
                    keyBtn = 'nk-key-0';
                    nk.tempValue += '0';
                    break;
                case 'nk-key-done': // 确定
                    keyBtn = 'nk-key-done';
                    nk.elem.textContent = nk.tempValue;
                    nk.elem.setAttribute('data-nk-value', nk.tempValue);
                    nk.value = nk.tempValue;
                    hideKeyboard(); // 隐藏键盘
                    break;
                case 'nk-key-cancel': // 取消
                    keyBtn = 'nk-key-cancel';
                    hideKeyboard(); // 隐藏键盘
                    break;
                case 'nk-key-del': // 退格
                    keyBtn = 'nk-key-del';
                    nk.tempValue = nk.tempValue.length > 0 ? nk.tempValue.substr(0, nk.tempValue.length - 1) : '';
                    break;
                case 'nk-key-clear': // 清空
                    keyBtn = 'nk-key-clear';
                    nk.tempValue = '';
                    break;
                case 'nk-key-point': // 小数点
                    keyBtn = 'nk-key-point';
                    if (!/\./.test(nk.tempValue)) { // 判断是否存在小数点
                        if (nk.tempValue.trim().length === 0) { // 没有其它数字时，自动加前缀0
                            nk.tempValue = '0.';
                        } else if (nk.tempValue.trim().length === 1 && nk.tempValue[0] == '-') { // 第一个为负号时
                            nk.tempValue += '0.';
                        } else {
                            nk.tempValue += '.';
                        }
                    }
                    break;
                case 'nk-key-negative': // 正负
                    keyBtn = 'nk-key-negative';
                    if (/^-/.test(nk.tempValue)) {
                        nk.tempValue = nk.tempValue.substr(1, nk.tempValue.length - 1);
                    } else {
                        nk.tempValue = '-' + nk.tempValue;
                    }
                    break;
            }
            if (keyBtn) {
                break;
            }
        }
        // 点击了按钮
        if (keyBtn) {
            // 为数字键盘时，判定数字规则是否正确
            if (nk.typeNum != 1 && nk.tempValue.trim().length == 2 && nk.tempValue[0] == '0' && nk.tempValue[1] != '.') {
                nk.tempValue = nk.tempValue.substr(1,1);
            } else if (nk.typeNum != 1 && nk.tempValue.trim().length == 3 && nk.tempValue[0] == '-' && nk.tempValue[1] == '0' && nk.tempValue[2] != '.') {
                nk.tempValue = '-' + nk.tempValue.substr(2,1);
            }
            // 刷新screen显示数字
            document.querySelector('#numKeyboard .nk-screen').textContent = nk.tempValue;
        }
    }, false)
    return keyboardDOM;
}

function hiddenBtnByTypeNum(el, typeNum) {
    switch (typeNum) {
        case 1: // 电话键盘
            removeElement(el.querySelector('.nk-key-negative'));
            removeElement(el.querySelector('.nk-key-point'));
            break;
        case 2: // 数字键盘
            removeElement(el.querySelector('.nk-key-negative'));
            removeElement(el.querySelector('.nk-key-point'));
            break;
        case 3: // 正负数字键盘
            removeElement(el.querySelector('.nk-key-point'));
            break;
        case 4: // 含小数数字键盘
            removeElement(el.querySelector('.nk-key-negative'));
            break;
        case 5: // 正负小数数字键盘
            break;
    }
}

// 隐藏键盘
function hideKeyboard() {
    removeClass(document.querySelector('#numKeyboard'), 'show');
    setTimeout(function () {
        addClass(document.querySelector('#numKeyboard'), 'hidden');
        removeElement(document.querySelector('#numKeyboard'));
    }, 500);
}

export { createKeyboard }