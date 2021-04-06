# Cheating Time
---
## 目录
> **[CSS-Properties](#CSS-Properties)**  
>   - [Positioning](#Positioning) 
>       - [position](#position)
>       - [111111](#1)
>   - [Box-Model](#Box-Model) 
>       - [222](#2)
>       - [222](#2)
>   - [Typography](#Typography) 
>       - [333](#3)
>       - [333](#3)
>   - [Visual](#Visual) 
>   - [Misc](#Misc)   
> **[Links?](#links)**  

---
<br>

## CSS-Properties
以下的 `CSS` 属性是对常用属性的一个简单的总结，也算是自己工作中的笔记吧。<br>
属性是按照 [codeguide](https://codeguide.co/#css-declaration-order "codeguide") 推荐的声明顺序书写的。<br>
想更全面的了解 `CSS` 属性的客官们，希望您能点杯咖啡<sub>惊喜在最后</sub>慢慢钻研 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS "是CSS圣经啊") 。<br>
### Positioning
#### position
`position: static | relative | absolute | sticky | fixed`
- `absolute` 根据上一个非 `statuc` 定位的父类元素来进行定位。
- `absolute` 根据上一个非 `statuc` 定位的父类元素来进行定位。
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