# Cheating Time
## 目录
- **[CSS-Properties](#CSS-Properties)**  
    - [Positioning](#Positioning) 
        - [position](#position)
    - [Box-Model](#Box-Model) 
    - [Typography](#Typography) 
    - [Visual](#Visual) 
    - [Misc](#Misc)   
- **[Links?](#links)**
- **[Other](#Other)**
- **[惊喜](#surprise)**
---

## CSS-Properties
以下的 `CSS` 属性是对常用属性的一个简单的总结，也算是自己工作中的笔记吧。<br>
属性是按照 [codeguide](https://codeguide.co/#css-declaration-order "codeguide") 推荐的声明顺序书写的。<br>
想更全面的了解 `CSS` 属性的客官们，希望您能点杯咖啡<sub>惊喜在最后</sub>慢慢钻研 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS "是CSS圣经啊") 。<br>
### Positioning
#### position
`position: static | relative | absolute | sticky | fixed`
- `absolute` 根据非 `statuc` 定位的父类元素来进行定位。
- `absolute` 根据非 `statuc` 定位的父类元素来进行定位。
<br>
/* static 静态定位 默认值 */<br>
position: static;<br>
/* absolute 绝对定位 向上找非 static 定位的元素来定位 */<br>
position: absolute;<br>
position: relative;<br>
position: fixed;<br>
/* sticky 粘性定位 需要配合 top/left 来写 IE不兼容 */<br>
position: sticky;<br>
position: -webkit-sticky;<br>
top: 0;<br>
right: 0;<br>
bottom: 0;<br>
left: 0;<br>
z-index: 100;<br>
### Box-Model
/* block 块元素是 y 轴方向的布局 */<br>
display: block;<br>
/* inline 块元素是 x 和 y 轴方向的布局 */<br>
display: inline-block;<br>
/* inline 块元素是 x 轴方向的布局 */<br>
display: inline;<br>
display: none;<br>
display: flex;<br>
/* grid 最高端 但 ie 不兼容 */<br>
display: grid;<br>
float: right;<br>
width: 100px;<br>
height: 100px;<br>
### Typography
font: normal 13px "Helvetica Neue", sans-serif;<br>
line-height: 1.5;<br>
color: #333;<br>
text-align: center;<br>
### Visual
background-color: #f5f5f5;<br>
border: 1px solid #e5e5e5;<br>
border-radius: 3px;<br>
-webkit-border-radius: 3px;<br>
-moz-border-radius: 3px;<br>
-ms-border-radius: 3px;<br>
-o-border-radius: 3px;<br>
### Misc
opacity: 1;<br>
---


## Other
### 关于 `SVG` 元素的模糊滤镜效果
其他的不说，先上 demo 页面看[效果](https://www.html5tricks.com/demo/html5-svg-motion-blur-effect/index.html "feGaussianBlur")，快速拖动相册你会发现炫目的模糊效果。这个动画实现的办法就是使用 `svg` 创建一个带 `id` 的自定义 `filter` ，然后创建 `feGaussianBlur` 来做到的高斯模糊，它是有一个属性 `stdDeviation` 可以控制 `x,y` 方向的模糊程度。需要把这个 `id` 赋给你想要做模糊的元素，配合目标元素的 `css` 属性来关联 `filter: url("#thisid");`。<br>
很多动画需要动态的改变这个 `stdDeviation` 值的属性，而且此属性实测不能用jQuery.js封装的对象来改变，只能转换成原生对象来进行更改数值。<br>
想深入了解的客观请移步到 [这里](https://blog.csdn.net/frf0lw4/article/details/80479872 "有源码可下载") 和 [这里](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feGaussianBlur "又是圣经") 。<br>

[link text]: http://www.reddit.com <br>
[link text]: http://www.reddit.com 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "title text")
---
表头  | 表头  | 表头
---- | ----- | ------  
单元格内容  | 单元格内容 | 单元格内容 
单元格内容  | 单元格内容 | 单元格内容  
---
123|234|345
:-|:-:|-:
aaaabc|bbbbcd|ccccde
abc|bcd|cde
abc|bcd|cde
---
~~删除~~
*强调*  (示例：斜体)<br>
 _强调_  (示例：斜体)<br>
**加重强调**  (示例：粗体)<br>
 __加重强调__ (示例：粗体)<br>
***特别强调*** (示例：粗斜体)<br>
___特别强调___  (示例：粗斜体)<br>
---
```
这是一段代码的引用 没有标识 JavaScript
var a = 1;
```
```JavaScript
这是一段代码的引用 标识了 JavaScript
var a = 1;
```
```css
标识了 css
body{font-size:12px}
    body{font-size:12px}
```
<strong>Blockquotes 引用：</strong>
> Email-style angle brackets
> are used for blockquotes.
> > And, they can be nested.
> #### Headers in blockquotes
> * You can quote a list.
> * Etc.

`.md` 文件基本语法可以参考这个 [Markdown Guide]: https://www.markdownguide.org/basic-syntax/ <br>