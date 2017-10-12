
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
 * @param  {object} cls 需要删除的class
 */
function removeClass(el, cls) {
    var oldClassStr = ' ' + el.className + ' ';
    oldClassStr = oldClassStr.replace(/(\s+)/gi, ' ');
    var removedClassStr = oldClassStr.replace(' ' + cls + ' ', ' ');
    removedClassStr = removedClassStr.substr(1, removedClassStr.length - 2);
    el.className = removedClassStr;
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
    if (bIsIpad ||
        bIsIphoneOs ||
        bIsMidp ||
        bIsUc7 ||
        bIsUc ||
        bIsAndroid ||
        bIsCE ||
        bIsWM) {
        // 移动端
        return true
    } else {
        // pc 端
        return false
    }
}

export {
    haveChild,
    removeElement, // 删除dom节点
    isMobileDevice, // 判断是否是移动设备
}