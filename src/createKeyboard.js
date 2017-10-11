import { removeElement } from './utils'

// 生成keyboard DOM
function createKeyboard() {
    let keyboardDOM = document.createElement('div');
    keyboardDOM.className = 'num-keyboard-wrapper';
    keyboardDOM.id = 'numKeyboard';
    keyboardDOM.innerHTML = `<div class="num-keyboard-wrap">
        <div class="nk-screen-wrap">
            <p class="nk-screen">999</p>
        </div>
        <div class="nk-keys-wrap">
            <div class="nk-row">
                <div class="nk-key-wrap">
                    <!--<div class="nk-key nk-key-7">7</div>-->
                    <a href="javascript:;" class="nk-key nk-key-7">7</a>
                </div>
                <div class="nk-key-wrap">
                    <!--<div class="nk-key nk-key-8">8</div>-->
                    <a href="javascript:;" class="nk-key nk-key-8">8</a>
                </div>
                <div class="nk-key-wrap">
                    <!--<div class="nk-key nk-key-9">9</div>-->
                    <a href="javascript:;" class="nk-key nk-key-9">9</a>
                </div>
                <div class="nk-key-wrap">
                    <!--<div class="nk-key nk-key-del">del</div>-->
                    <a href="javascript:;" class="nk-key nk-key-del">del</a>
                </div>
            </div>
            <div class="nk-row">
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-4">4</a>
                </div>
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-5">5</a>
                </div>
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-6">6</a>
                </div>
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-clear">clear</a>
                </div>
            </div>
            <div class="nk-row">
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-1">1</a>
                </div>
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-2">2</a>
                </div>
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-3">3</a>
                </div>
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-cancel">cancel</a>
                </div>
            </div>
            <div class="nk-row">
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-negative">±</a>
                </div>
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-0">0</a>
                </div>
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-point">.</a>
                </div>
                <div class="nk-key-wrap">
                    <a href="javascript:;" class="nk-key nk-key-done">done</a>
                </div>
            </div>
        </div>
    </div>`;
    // 绑定取消事件
    keyboardDOM.addEventListener('click', function (e) {
        console.log(e)
        let classNameList = e.target.className.split(' '); // 点击DOM的class列表
        for (var i = 0, len_i = classNameList.length; i < len_i; i++) {
            // 点击取消
            if (classNameList[i] == 'nk-key-cancel') {
                let numKeyboardClassList = document.querySelector('#numKeyboard').className.split(' ');
                let newNumKeyboardClassName = '';
                for (var j = 0, len_j = numKeyboardClassList.length; j < len_j; j++) {
                    if (numKeyboardClassList[j] != 'show') {
                        newNumKeyboardClassName += newNumKeyboardClassName.length > 0 ? numKeyboardClassList[j] : numKeyboardClassList[j] + ' ';
                    }
                }
                document.querySelector('#numKeyboard').className = newNumKeyboardClassName;
                break
            }
        }
    }, false)
    return keyboardDOM;
}

export { createKeyboard }