# numkeyboard
这是一个简单的数字键盘插件，不需要依赖任何文件资源。有退格，有清除，可输入小数与负数。适用于移动端。

## 使用

### 方式一：html属性上绑定参数
```html
data-nk-type: 键盘输入类型。number: 数字, tel: 号码, negative: 正负号, decimal: 小数点。默认值为number。
data-nk-event: 触发键盘事件。click: 点击, tap: 移动端点击。
data-nk-value: 默认数值。
data-nk-target-elem: 目标DOM。即实际获取输入值的DOM。默认值为触发元素本身。
```

```html
<input data-nk-type="number" data-nk-event="click">
```
