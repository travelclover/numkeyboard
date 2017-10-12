function createStyle() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.num-keyboard-wrapper {
            width: 100%;
            height: 300px;
            position: fixed;
            bottom: -300px;
            transition: all 0.4s;
            -webkit-transition: all 0.4s;
            -moz-transition: all 0.4s;
        }
        .num-keyboard-wrapper.hidden{
            display: none;
        }
        .num-keyboard-wrapper.show {
            bottom: 0;
        }

        .num-keyboard-wrap {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            z-index: 5000;
            -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            border-radius: 6px;
            background: white;
            display: flex;
            display: -webkit-flex;
            -webkit-flex-direction: column;
            flex-direction: column;
        }
        /*显示区域*/

        .num-keyboard-wrap .nk-screen-wrap {
            width: 100%;
            height: 50px;
            padding: 8px;
            box-sizing: border-box;
        }

        .num-keyboard-wrap .nk-screen-wrap .nk-screen {
            width: 100%;
            height: 34px;
            box-sizing: border-box;
            padding: 6px 12px;
            color: #555;
            border: 1px solid #ccc;
            border-radius: 4px;
            text-align: right;
            display: block;
            font-size: 14px;
            margin: 0;
        }
        /*按键区域*/

        .nk-keys-wrap {
            display: flex;
            display: -webkit-flex;
            -webkit-flex-direction: column;
            flex-direction: column;
            flex: 1;
            -webkit-flex: 1;
        }

        .nk-keys-wrap .nk-row {
            display: flex;
            display: -webkit-flex;
            flex: 1;
            -wekit-flex: 1;
        }

        .nk-key-wrap {
            display: flex;
            display: -webkit-flex;
            flex: 1;
            -webkit-flex: 1;
        }

        .nk-key-wrap .nk-key {
            margin: 8px;
            display: flex;
            display: -webkit-flex;
            flex: 1;
            -webkit-flex: 1;
            -webkit-align-self: stretch;
            align-self: stretch;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-align-items: center;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 4px;
            text-decoration: none;
        }

        .nk-key-wrap .nk-key:active {
            background: #ccc;
        }

        .nk-key-wrap .nk-key-0,
        .nk-key-wrap .nk-key-1,
        .nk-key-wrap .nk-key-2,
        .nk-key-wrap .nk-key-3,
        .nk-key-wrap .nk-key-4,
        .nk-key-wrap .nk-key-5,
        .nk-key-wrap .nk-key-6,
        .nk-key-wrap .nk-key-7,
        .nk-key-wrap .nk-key-8,
        .nk-key-wrap .nk-key-9 {
            background-color: #F7D69E;
            color: #fff;
        }

        .nk-key-wrap .nk-key-negative,
        .nk-key-wrap .nk-key-point {
            background-color: #EAF5FF;
            color: #555;
        }

        .nk-key-wrap .nk-key-del,
        .nk-key-wrap .nk-key-clear {
            background-color: #e2e2e2;
            color: #555;
        }

        .nk-key-wrap .nk-key-cancel {
            background-color: #F99595;
            color: #fff;
        }

        .nk-key-wrap .nk-key-done {
            background-color: #54D7FF;
            color: #fff;
        }`;
    document.getElementsByTagName('HEAD').item(0).appendChild(style);
}

export default createStyle