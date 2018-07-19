# Tips
Tips是一个非常简单的状态弹窗插件，其优势在于十分轻巧，并且不依赖于任何第三方js库。

### View
预览地址：[https://rilyzhang.github.io/Tips/](https://rilyzhang.github.io/Tips/)

### Usage

首先将整个tips文件夹copy至你的项目中，在html中引入tips.js即可：

```html
<script src="yourPath/tips/tips.js"></script>
```

插件中提供了一个名为Tips的类，使用时需要将其实例化：

```javascript
var tips = new Tips();
```

#### showTime

tips的实例提供了唯一一个可配置项：``showTime``属性，可以控制提示框在页面保持的时间，默认值为2000，单位为ms。

```javascript
tips.showTime = 3000    // 提示框在页面将会保持3秒
```

#### openTip

``openTip``方法为实例的核心方法，通过此方法可以调出提示框。方法提供了两个参数：
- msg [string] 用于展示的内容
- type [string] 提示框样式。当前有两个值：success 和 fail

```javascript
tips.openTip('Hello Tips, ^_^', 'success');
tips.openTip('Hello Tips, v_v', 'fail');
```

当然，基于openTip方法有两个包装方法:``success``方法和``fail``方法：

```javascript
tips.success('Hello Tips, ^_^');
tips.fail('Hello Tips, v_v');
```

最后，需要说明一点：插件css是由js动态引入的，当你在页面还未完成加载是调用弹出方法，可能会导致css还未完成加载。

解决办法：
```javascript
var tips = new Tips()
window.onload = function () {
    tips.success('Hello Tips, ^_^');
}
```
