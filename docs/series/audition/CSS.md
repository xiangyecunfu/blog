---
  title: CSS面试题
  author: 一心只想回农村
  date: 2024-6-7
  tags:
    - CSS
    - 面试
    - 前端
---

## 1. 什么是margin高度塌陷问题？
  1. 当两个兄弟元素分别使用margin-bottom和margin-top时，那么他们之间的间隔距离取决与设置的最大值，不能达到预期间隔，这就是margin高度塌陷问题。
  2. 解决方案：
    - 在一个方向同时设置足够的高度。
    - 使用BFC方式来处理。

## 2. 什么是BFC?
  1. 全称是块级格式化上下文(Block Formatting Context)。
  2. 一个独立的渲染区域，有自己的渲染规则，不受外部元素影响。
  3. **触发BFC的条件：**
    - 设置float属性值不为none方式。
    - 设置position属性值为absolute或fixed。
    - 设置display属性值为inline-block、table-cell、table-caption、flex、inline-flex。
    - 设置overflow属性值不为visible。

## 3. 如何隐藏一个元素？
| 方式 | 占位 | 点击事件 |
| :---: | :---: | :---: |
| display: none | :x: | :x: |
| opacity: 0 | :white_check_mark: | :white_check_mark: |
| visibility: hidden | :white_check_mark: | :x: |
| clip-path: circle(0) | :white_check_mark: | :x: |
| position: absolute; <br/> top: -999px | :x: | :white_check_mark: |

## 4. overflow的属性值？
| 属性值 | 说明 |
| :---: | --- |
| visible | 默认值，内容不会被修剪，会呈现在元素框之外。 |
| hidden | 内容会被修剪，并且其余内容是不可见的。 |
| scroll | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
| auto | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
| inherit | 规定应该从父元素继承overflow属性的值。 |

## 5. 元素浮动会带来那些问题？
浮动(foat)是CSS中的一种布局属性，用于控制元素在其父元素中的位置，使元素可以浮动到其父元素的左侧或右侧。浮动通常用于实现文本环绕图片、创建多列布局等效果。
  1. 父元素的高度无法被撑开，影响与父元素同级的元素。
  2. 与浮动元素同级的非浮动元素会跟随其后。
  3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。

## 6. 清除浮动的方式？
  | 方式 | 说明 |
| :---: | --- |
| 父级div定义height | 父级div手动定义height，用于设置父级div的高度。 |
| 结尾处加空div标签或者伪元素clear:both | 在浮动元素后添加一个空div或者伪元素，利用css提高的clear:both清除浮动。 |
| 使用布局技巧 | 防止高度塌陷，可以使用flex和grid方式布局。 |
| 父级div定义overflow:hidden | 父级div定义overflow:hidden，用于清除浮动。可能会存在裁剪内容的情况 |
| 使用定位 | 可以使用定位方式来代替浮动 |

## 7. 什么是盒子模型？
用于排列和定位网页上的元素的基本概念。它定义了每个HTML元素周围的一个矩形区域(或盒子)，这个盒子包括内容、内边距、边框和外边距。CSS盒子模型有以下四个主要部分：
  - 内容(content) - 盒子的内容，显示文本和图像。
  - 内边距(padding) - 清除内容与边框之间的空间。
  - 边框(border) - 围绕在内边距和内容外的边框。
  - 外边距(margin) - 清除其他元素与边框之间的空间。

盒子模型又分为普通盒子模型和IE盒子模型。
  - 普通盒子模型：width = content。
  - IE盒子模型：width = content + padding + border。

在css属性中box-sizing用于设置盒子模型。
  - box-sizing: content-box; - 默认值，宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。
  - box-sizing: border-box; - 为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。

## 8. CSS中选择器的优先级，权重计算方式？
1. **!important规则:** 如果有!important声明，那么该规则具有最高的优先级。
2. **特定规则：** 
  - **内联样式：** 每一个内联样式特定权重为1000。
  - **id选择器：** 每一个id选择器特定权重为100。
  - **类选择器、属性选择器和伪类选择器：** 每一个类选择器、属性选择器和伪类选择器特定权重为10。
  - **元素选择器和伪元素选择器：** 每一个元素选择器和伪元素选择器特定权重为1。
  - **通配符、子选择器、相邻选择器、同胞选择器：** 通配符、子选择器、相邻选择器、同胞选择器权重为0。
3. **覆盖规则：** 权重相同时，最后出现的样式表中的规则覆盖前面样式表中的规则。

## 9. 设置元素居中有那些方式？
1. **水平居中：**
  - 行内元素：text-align: center;。
  - 块级元素：margin: 0 auto;。
  - 绝对定位元素：position: absolute; left: 50%; margin-left: -(元素宽度/2);。
  - 绝对定位元素：position: absolute; left: 50%; transform: translateX(-50%);。
  - flex布局：display: flex; justify-content: center;。
2. **垂直居中：**
  - 行内元素：line-height: 元素高度;。
  - 绝对定位元素：position: absolute; top: 50%; transform: translateY(-50%);。
  - flex布局：display: flex; align-items: center;。

## 10. 为什么img是inline但是可以设置宽高?
img元素通常被视为内联元素，但可以设置宽度和高度，这是因为HTML规范中对img元素的默认样式有特殊的定义。默认情况下，img元素是内联元素，但可以设置其宽度和高度。这是因为img元素通常需要具体的宽度和高度信息，以确保图像以正确的尺寸显示，而不会引起页面重新布局。因此，即使是内联元素，img元素也可以具有宽度和高度属性。
