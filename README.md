# Cheating Time
---
## 目录
* [CSS-Properties](#CSS-Properties)  
    >[1](#1)  
    >>[2](#2)  
    >>>[3](#3)  
* [CSS-Properties](#CSS-Properties)  


===
 表头  | 表头  | 表头
 ---- | ----- | ------  
 单元格内容  | 单元格内容 | 单元格内容 
 单元格内容  | 单元格内容 | 单元格内容  
---
*强调*  (示例：斜体)<br>
 _强调_  (示例：斜体)<br>
**加重强调**  (示例：粗体)<br>
 __加重强调__ (示例：粗体)<br>
***特别强调*** (示例：粗斜体)<br>
___特别强调___  (示例：粗斜体)<br>
---
/*---------- Positioning ----------*/
/* static 静态定位 默认值 */<br>
position: static;<br>
/* absolute 绝对定位 向上找非 static 定位的元素来定位 */<br>
position: absolute;<br>
position: relative;<br>
position: fixed;<br>
/* sticky 粘性定位 需要配合 top/left 来写 IE不兼容 */<br>
position: sticky;<br>
position: -webkit-sticky;<br>
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 100;
/*---------- Box-model ----------*/
/* block 块元素是 y 轴方向的布局 */
display: block;
/* inline 块元素是 x 和 y 轴方向的布局 */
display: inline-block;
/* inline 块元素是 x 轴方向的布局 */
display: inline;
display: none;
display: flex;
/* grid 最高端 但 ie 不兼容 */
display: grid;
float: right;
width: 100px;
height: 100px;
/*---------- Typography ----------*/
font: normal 13px "Helvetica Neue", sans-serif;
line-height: 1.5;
color: #333;
text-align: center;
/*---------- Visual ----------*/
background-color: #f5f5f5;
border: 1px solid #e5e5e5;
border-radius: 3px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
-ms-border-radius: 3px;
-o-border-radius: 3px;
/*---------- Misc ----------*/
opacity: 1;



## CSS-Properties
以下的 `CSS` 属性是对常用属性的一个总结，按照 [他的](https://codeguide.co/#css-declaration-order "悬停显示文本") 推荐的声明顺序书写
```
这是一段代码的引用 没有标识任何语言
```
```JavaScript
这是一段代码的引用 标识了 JavaScript
```

/*---------- Positioning ----------*/
/* static 静态定位 默认值 */
position: static;
/* absolute 绝对定位 向上找非 static 定位的元素来定位 */
position: absolute;
position: relative;
position: fixed;
/* sticky 粘性定位 需要配合 top/left 来写 IE不兼容 */
position: sticky;
position: -webkit-sticky;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 100;
/*---------- Box-model ----------*/
/* block 块元素是 y 轴方向的布局 */
display: block;
/* inline 块元素是 x 和 y 轴方向的布局 */
display: inline-block;
/* inline 块元素是 x 轴方向的布局 */
display: inline;
display: none;
display: flex;
/* grid 最高端 但 ie 不兼容 */
display: grid;
float: right;
width: 100px;
height: 100px;
/*---------- Typography ----------*/
font: normal 13px "Helvetica Neue", sans-serif;
line-height: 1.5;
color: #333;
text-align: center;
/*---------- Visual ----------*/
background-color: #f5f5f5;
border: 1px solid #e5e5e5;
border-radius: 3px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
-ms-border-radius: 3px;
-o-border-radius: 3px;
/*---------- Misc ----------*/
opacity: 1;