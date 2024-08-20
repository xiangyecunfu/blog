import{_ as c,r as o,o as s,c as h,a as e,d as t,w as i,b as l,e as r}from"./app-D8pFkU2i.js";const u={},p={class:"table-of-contents"},_=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言"},[e("span",null,"前言")])],-1),g={href:"https://juejin.cn/user/497418932333127",target:"_blank",rel:"noopener noreferrer"},m=r('<h2 id="_1-什么是-doctype-有何作用" tabindex="-1"><a class="header-anchor" href="#_1-什么是-doctype-有何作用"><span>1. 什么是 DOCTYPE， 有何作用？</span></a></h2><p>Doctype是HTML5的文档声明，通过它可以告诉浏览器，使用哪一个HTML版本标准解析文档。在浏览器发展的过程中，HTML出现过很多版本，不同的版本之间格式书写上略有差异。如果没有事先告诉浏览器，那么浏览器就不知道文档解析标准是什么？此时，大部分浏览器将开启最大兼容模式来解析网页，我们一般称为怪异模式，这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的bug，所以文档声明是必须的。</p><h2 id="_2-常见的浏览器内核有哪些" tabindex="-1"><a class="header-anchor" href="#_2-常见的浏览器内核有哪些"><span>2. 常见的浏览器内核有哪些？</span></a></h2><p>常见的浏览器内核有：</p><ul><li>Trident内核：IE、MaxThon、TT、The World、360、搜狗浏览器等。[又称MSHTML]</li><li>Gecko内核：Netscape6及以上版本、FF、MozillaSuite/SeaMonkey等。[又称Mozilla内核、SpiderMonkey]</li><li>Presto内核：Opera7及以上。[Opera内核原为：Presto，现为：Blink;]</li><li>Webkit内核：Safari、Chrome等。[ Chrome的：Blink（WebKit的分支）]</li></ul><h2 id="_3-常见的meta标签有哪些" tabindex="-1"><a class="header-anchor" href="#_3-常见的meta标签有哪些"><span>3. 常见的meta标签有哪些？</span></a></h2><p>常见的meta标签有：</p><ul><li>charset：声明文档使用的字符编码。</li><li>name：主要用于描述网页，与之对应的属性值为content，content中的内容主要是便于人阅读的，当然也可以为机器阅读。</li><li>http-equiv：相当于http的文件头，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容主要是便于人阅读的，当然也可以为机器阅读。</li><li>keywords：用于告诉搜索引擎，你网页的关键字。</li><li>description：用于告诉搜索引擎，你网站的主要内容。</li><li>viewport：用于设置用户是否可以缩放网页，默认值为1.0，即不允许缩放。</li><li>robots：用于告诉搜索引擎，在搜索结果中是否可以显示特定的内容。</li></ul><h2 id="_4-说说对-html-语义化的理解" tabindex="-1"><a class="header-anchor" href="#_4-说说对-html-语义化的理解"><span>4. 说说对 html 语义化的理解？</span></a></h2><p>HTML标签的语义化，简单来说，就是用正确的标签做正确的事情，给某块内容用上一个最恰当最合适的标签，使页面有良好的结构，页面元素有含义，无论是谁都能看懂这块内容是什么。 语义化的优点如下：</p><ul><li>在没有CSS样式情况下也能够让页面呈现出清晰的结构；</li><li>有利于SEO和搜索引擎建立良好的沟通，有助于爬虫抓取更多的有效信息，爬虫是依赖于标签来确定上下文和各个关键字的权重；</li><li>方便团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。</li></ul><h2 id="_5-src-和-href-的区别" tabindex="-1"><a class="header-anchor" href="#_5-src-和-href-的区别"><span>5. src 和 href 的区别</span></a></h2><ul><li>src：全称source，它通常用于img、video、audio、script元素，通过src指向请求外部资源的来源地址，指向的内容会嵌入到文档中当前标签所在位置，在请求src资源时，它会将资源下载并应用到文档内，比如说：js脚本、img图片、frame等元素。当浏览器解析到该元素时，会暂停其它资源下载，直到将该资源加载、编译、执行完毕。这也是为什么将js脚本放在底部而不是头部的原因。</li><li>href：全称hyper reference，意味着超链接，指向网络资源，当浏览器识别到它指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理，通常用于a、link元素。</li></ul><h2 id="_6-title-与-h1-的区别、b-与-strong-的区别、i-与-em-的区别" tabindex="-1"><a class="header-anchor" href="#_6-title-与-h1-的区别、b-与-strong-的区别、i-与-em-的区别"><span>6. title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？</span></a></h2><ul><li>title 属性表示网页的标题，h1 元素则表示层次明确的页面内容标题，对页面信息的抓取也有很大的影响。</li><li>strong 是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：strong会重读，而b是展示强调内容。</li><li>i 是italic(斜体)的简写，是早期的斜体元素，表示内容展示为斜体，而 em 是emphasize（强调）的简写，表示强调的文本。</li></ul><h2 id="_7-什么是严格模式与混杂模式" tabindex="-1"><a class="header-anchor" href="#_7-什么是严格模式与混杂模式"><span>7. 什么是严格模式与混杂模式？</span></a></h2><ul><li>严格模式：是以浏览器支持的最高标准运行。</li><li>混杂模式：页面以宽松向下兼容的方式显示，模拟老式浏览器的行为。</li></ul><h2 id="_8-iframe的作用以及优缺点" tabindex="-1"><a class="header-anchor" href="#_8-iframe的作用以及优缺点"><span>8. iframe的作用以及优缺点？</span></a></h2><p>iframe也称作嵌入式框架，嵌入式框架和框架网页类似，它可以把一个网页的框架和内容嵌入到现有的网页中。</p>',19),f=e("ul",null,[e("li",null,"可以用来处理加载缓慢的内容，比如：广告。")],-1),v={start:"2"},b=r('<ul><li>iframe会阻塞主页面的Onload事件。</li><li>iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。但是可以通过JS动态给ifame添加src属性值来解决这个问题，当然也可以解决iframe会阻塞主页面的Onload事件的问题。</li><li>会产生很多页面，不易管理。</li><li>浏览器的后退按钮没有作用。</li><li>无法被一些搜索引擎识别。</li></ul><h2 id="_9-html5的特性" tabindex="-1"><a class="header-anchor" href="#_9-html5的特性"><span>9. HTML5的特性？</span></a></h2><ul><li>语义元素:HTML5引|入了一些新的语义元素，如<code>&lt;header&gt;</code>、<code>&lt;section&gt;</code>、<code>&lt;footer&gt;</code>、<code>&lt;nav&gt;</code>等，以更好地描述网页的结构，提高可读性和可访问性。</li><li>多媒体支持:HTML5提供了内置的多媒体支持，包括<code>&lt;audio&gt;</code>和<code>&lt;video&gt;</code>元素，使音频和视频的嵌入更加简单，而无需使用第三方插件(如Flash)。</li><li>Canvas:引入了<code>&lt;canvas&gt;</code>元素，允许通过JavaScript创建和操作图形，用于绘制图表、游戏和应用程序。</li><li>本地存储:HTML5引入了Web Storage和IndexedDB，允许在客户端存储数据，以提高离线应用程序的性能。</li><li>新表单元素:HTML5引入了新的表单元素，如<code>&lt;input type=&quot;date&quot;&gt;</code>、<code>&lt;input type=&quot;email&quot;&gt;</code>、<code>&lt;input type=&quot;range&quot;&gt;</code>等，使表单更具交互性和用户友好性。</li><li>Web Workers:HTML5引入了Web Workers，允许在后台运行JavaScript，以提高Web应用程序的响应性，而不会阻塞用户界面。</li><li>WebSocket:HTML5引入了WebSocket，一种用于实时通信的协议，可用于创建实时聊天和多人游戏等。</li><li>地理位置:HTML5允许网页访问用户的地理位置信息，以便创建地理位置相关的应用程序，如地图和位置服务。</li><li>SVG:HTML5支持可缩放矢量图形(SVG)，允许创建矢量图形和图表，以便在不同分辨率的屏幕上显示。</li><li>拖拽:HTML5引入了拖拽API，允许在网页中实现拖拽操作，使用户界面更直观。</li><li>离线应用程序:HTML5引入了应用程序缓存，使Web应用程序能够在离线时继续工作。</li><li>新事件API:HTML5引入了新的事件API，如<code>addEventListener</code>使事件处理更加灵活和强大。</li></ul><h2 id="_10-html语义化标签" tabindex="-1"><a class="header-anchor" href="#_10-html语义化标签"><span>10. HTML语义化标签?</span></a></h2><p>HTML语义化标签是指在HTML文档中使用具有明确定义和语义含义的标签，以描述文档的结构和内容。这些标签有助于开发人员和浏览器更好地理解文档的内容和结构，提高可访问性、可维护性和搜索引擎优化(SEO)，以及改进文档的可读性。</p><ul><li><code>&lt;header&gt;</code>:定义文档或文档的一部分的页眉。通常包括网站的标题、标志、导航菜单等。</li><li><code>&lt;nav&gt;</code>:用于定义导航部分，通常包括导航链接、菜单、目录等。</li><li><code>&lt;main&gt;</code>:表示文档的主要内容区域，通常每个文档只有一个<code>&lt;main&gt;</code>元素。</li><li><code>&lt;article&gt;</code>:用于表示独立于页面内容的、可独立分发或重复使用的内容块，如一篇新闻文章、博客帖子或评论。</li><li><code>&lt;section&gt;</code>:用于组织文档的不同章节或主题区域，如文章的章节、内容块等。</li><li><code>&lt;aside&gt;</code>:表示与页面主要内容相关但可以视为附属的内容，如侧边栏、广告、引用等。</li><li><code>&lt;footer&gt;</code>:定义文档或文档的一部分的页脚，通常包括版权信息、联系信息、相关链接等。</li><li><code>&lt;figure&gt;</code>:用于包含与文档相关的图像、图表、照片等，通常与<code>&lt;figcaption&gt;</code>元素一起使用来提供图像的描述。</li><li><code>&lt;figcaption&gt;</code>:用于为<code>&lt;figure&gt;</code>元素提供标题或描述。</li><li><code>&lt;time&gt;</code>:用于表示日期、时间或时间范围，有助于机器和搜索引擎更好地理解时间信息。</li><li><code>&lt;mark&gt;</code>:用于表示文档中需要突出显示或标记的内容，通常用于搜索结果或注释。</li><li><code>&lt;progress&gt;</code>:用于表示任务的进度，例如下载进度或任务完成百分比。</li><li><code>&lt;address&gt;</code>:用于表示文档或文档一部分的作者或拥有者的联系信息，通常用于页脚或相关链接。</li></ul><h2 id="_11-html5-input-元素-type-属性" tabindex="-1"><a class="header-anchor" href="#_11-html5-input-元素-type-属性"><span>11.HTML5 input 元素 type 属性</span></a></h2><ul><li>text:用于接受单行文本输入。</li><li>password:用于密码输入，输入的字符会被掩盖。</li><li>radio:用于单选按钮，用户可以在一组选项中选择一个。</li><li>checkbox:用于复选框，用户可以选择多个选项。</li><li>number:用于输入数字，可以包括上下箭头来增减数值。</li><li>range:用于输入范围，例如滑动条。</li><li>date:用于日期输入。</li><li>time:用于时间输入。</li><li>file:用于文件上传。</li><li>color:用于颜色选择器。</li><li>hidden:用于存储数据，但不会在页面中显示。</li><li>submit:用于提交表单。</li><li>reset:用于重置表单。</li><li>button:用于创建自定义按钮。</li></ul><h2 id="_12-script标签中defer和async的区别" tabindex="-1"><a class="header-anchor" href="#_12-script标签中defer和async的区别"><span>12. script标签中defer和async的区别?</span></a></h2><ul><li>defer:当浏览器遇到带有defer属性的script标签时，会异步加载脚本，但会等到整个页面解析完毕后再执行脚本。这意味着脚本会在DOMContentLoaded事件触发后执行，但不会阻塞页面的渲染。</li><li>async:当浏览器遇到带有async属性的script标签时，会异步加载脚本，并在脚本加载完成后立即执行。这意味着脚本可能会在页面解析过程中执行，可能会阻塞页面的渲染。</li></ul><h2 id="_13-常用的meta标签有哪些" tabindex="-1"><a class="header-anchor" href="#_13-常用的meta标签有哪些"><span>13. 常⽤的meta标签有哪些?</span></a></h2><ul><li><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code>:定义文档的字符编码为UTF-8，确保正确显示各种字符和符号。</li><li><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</code>:定义视口宽度为设备宽度，初始缩放比例为1.0，用于响应式设计。</li><li><code>&lt;meta name=&quot;description&quot; content=&quot;页面描述&quot;&gt;</code>:定义页面的描述，有助于搜索引擎优化(SEO)。</li><li><code>&lt;meta name=&quot;keywords&quot; content=&quot;关键词1,关键词2,关键词3&quot;&gt;</code>:定义页面的关键词，有助于搜索引擎优化(SEO)。</li><li><code>&lt;meta name=&quot;author&quot; content=&quot;作者姓名&quot;&gt;</code>:定义页面的作者，有助于搜索引擎优化(SEO)。</li><li><code>&lt;meta name=&quot;robots&quot; content=&quot;index, follow&quot;&gt;</code>:定义搜索引擎爬虫的行为，如是否索引和跟踪页面。</li></ul><h2 id="_14-行内元素有哪些-块级元素有哪些-空-void-元素有那些" tabindex="-1"><a class="header-anchor" href="#_14-行内元素有哪些-块级元素有哪些-空-void-元素有那些"><span>14. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些?</span></a></h2><ul><li><strong>行内元素有：</strong> <code>a b span img input select strong</code>；</li><li><strong>块级元素有：</strong> <code>div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p</code>；<br> 空元素，即没有内容的HTML元素。空元素是在开始标签中关闭的，也就是空元素没有闭合标签：</li><li><strong>常见的有：</strong> <code>&lt;br&gt;、&lt;hr&gt;、&lt;img&gt;、&lt;input&gt;、&lt;link&gt;、&lt;meta&gt;</code>；</li><li><strong>鲜见的有：</strong> <code>&lt;area&gt;、&lt;base&gt;、&lt;col&gt;、&lt;colgroup&gt;、&lt;command&gt;、&lt;embed&gt;、&lt;keygen&gt;、&lt;param&gt;、&lt;source&gt;、&lt;track&gt;、&lt;wbr&gt;</code></li></ul><h2 id="_15-说一下-web-worker" tabindex="-1"><a class="header-anchor" href="#_15-说一下-web-worker"><span>15. 说一下 web worker</span></a></h2><p>Web Worker 是一种运行在后台的 JavaScript 线程，它允许在主线程之外执行 JavaScript 代码，从而避免阻塞主线程的执行。Web Worker 可以用于执行耗时的操作，如数据处理、图像处理等，而不会影响页面的响应性。 Web Worker 的使用步骤如下：</p><ol><li>创建一个新的 Worker：使用 <code>new Worker()</code> 构造函数创建一个新的 Worker 实例，并传入 JavaScript 文件的 URL。</li><li>发送消息：使用 <code>postMessage()</code> 方法向 Worker 发送消息。消息可以是任何可序列化的 JavaScript 对象。</li><li>接收消息：在 Worker 中，使用 <code>onmessage</code> 事件处理程序来接收从主线程发送的消息。</li><li>返回消息：在 Worker 中，使用 <code>postMessage()</code> 方法向主线程发送消息。</li><li>关闭 Worker：使用 <code>close()</code> 方法关闭 Worker。</li></ol><h2 id="_16-head-标签有什么作用-其中什么标签必不可少" tabindex="-1"><a class="header-anchor" href="#_16-head-标签有什么作用-其中什么标签必不可少"><span>16. head 标签有什么作用，其中什么标签必不可少？</span></a></h2><p><code>&lt;head&gt;</code> 标签用于包含 HTML 文档的元数据，如文档的标题、字符编码、样式表、脚本等。<code>&lt;head&gt;</code> 标签中的内容不会直接显示在页面上，但它们对于页面的渲染和功能至关重要。</p><p><code>&lt;head&gt;</code> 标签中的一些常见标签包括：</p><ul><li><code>&lt;title&gt;</code>:定义文档的标题，显示在浏览器的标题栏或标签页上。</li><li><code>&lt;meta&gt;</code>:用于提供关于 HTML 文档的元数据，如字符编码、描述、关键词等。</li><li><code>&lt;link&gt;</code>:用于链接外部资源，如样式表、图标等。</li><li><code>&lt;style&gt;</code>:用于定义内联样式，直接在 HTML 文档中嵌入 CSS 样式。</li><li><code>&lt;script&gt;</code>:用于嵌入或引用 JavaScript 文件，用于实现动态功能。</li><li><code>&lt;base&gt;</code>:用于指定页面上所有链接的默认 URL 和目标。 <code>&lt;head&gt;</code> 标签中的一些标签是必不可少的，如 <code>&lt;title&gt;</code> 标签，它定义了文档的标题，对于搜索引擎优化(SEO)和用户体验都至关重要。</li></ul><h2 id="_17-canvas和svg的区别" tabindex="-1"><a class="header-anchor" href="#_17-canvas和svg的区别"><span>17. Canvas和SVG的区别？</span></a></h2><p>Canvas 和 SVG 是两种用于在网页上绘制图形的技术，它们有一些重要的区别：</p><ol><li><strong>渲染方式：</strong> Canvas 使用基于像素的渲染方式，可以在位图中绘制和操作图形。SVG 使用基于矢量的渲染方式，可以在文档对象模型(DOM)中绘制和操作图形。</li><li><strong>性能：</strong> 由于 Canvas 使用基于像素的渲染方式，它在处理大量图形和动画时通常具有更好的性能。而 SVG 使用基于矢量的渲染方式，在处理复杂图形和动画时可能会较慢。</li><li><strong>可交互性：</strong> SVG 支持更丰富的交互性，如事件处理、动画等。而 Canvas 的交互性相对较弱，通常需要使用 JavaScript 来实现。</li><li><strong>文本处理：</strong> SVG 支持更复杂的文本处理，如文本路径、文本对齐等。而 Canvas 的文本处理相对简单，通常需要使用 JavaScript 来实现。</li><li><strong>文件大小：</strong> SVG 文件通常比 Canvas 文件大，因为 SVG 是基于 XML 的，而 Canvas 是基于像素的。</li></ol>',24);function k(T,M){const a=o("router-link"),d=o("ExternalLinkIcon"),n=o("font");return s(),h("div",null,[e("nav",p,[e("ul",null,[e("li",null,[t(a,{to:"#前言"},{default:i(()=>[l("前言")]),_:1})]),e("li",null,[t(a,{to:"#_1-什么是-doctype-有何作用"},{default:i(()=>[l("1. 什么是 DOCTYPE， 有何作用？")]),_:1})]),e("li",null,[t(a,{to:"#_2-常见的浏览器内核有哪些"},{default:i(()=>[l("2. 常见的浏览器内核有哪些？")]),_:1})]),e("li",null,[t(a,{to:"#_3-常见的meta标签有哪些"},{default:i(()=>[l("3. 常见的meta标签有哪些？")]),_:1})]),e("li",null,[t(a,{to:"#_4-说说对-html-语义化的理解"},{default:i(()=>[l("4. 说说对 html 语义化的理解？")]),_:1})]),e("li",null,[t(a,{to:"#_5-src-和-href-的区别"},{default:i(()=>[l("5. src 和 href 的区别")]),_:1})]),e("li",null,[t(a,{to:"#_6-title-与-h1-的区别、b-与-strong-的区别、i-与-em-的区别"},{default:i(()=>[l("6. title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？")]),_:1})]),e("li",null,[t(a,{to:"#_7-什么是严格模式与混杂模式"},{default:i(()=>[l("7. 什么是严格模式与混杂模式？")]),_:1})]),e("li",null,[t(a,{to:"#_8-iframe的作用以及优缺点"},{default:i(()=>[l("8. iframe的作用以及优缺点？")]),_:1})]),e("li",null,[t(a,{to:"#_9-html5的特性"},{default:i(()=>[l("9. HTML5的特性？")]),_:1})]),e("li",null,[t(a,{to:"#_10-html语义化标签"},{default:i(()=>[l("10. HTML语义化标签?")]),_:1})]),e("li",null,[t(a,{to:"#_11-html5-input-元素-type-属性"},{default:i(()=>[l("11.HTML5 input 元素 type 属性")]),_:1})]),e("li",null,[t(a,{to:"#_12-script标签中defer和async的区别"},{default:i(()=>[l("12. script标签中defer和async的区别?")]),_:1})]),e("li",null,[t(a,{to:"#_13-常用的meta标签有哪些"},{default:i(()=>[l("13. 常⽤的meta标签有哪些?")]),_:1})]),e("li",null,[t(a,{to:"#_14-行内元素有哪些-块级元素有哪些-空-void-元素有那些"},{default:i(()=>[l("14. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些?")]),_:1})]),e("li",null,[t(a,{to:"#_15-说一下-web-worker"},{default:i(()=>[l("15. 说一下 web worker")]),_:1})]),e("li",null,[t(a,{to:"#_16-head-标签有什么作用-其中什么标签必不可少"},{default:i(()=>[l("16. head 标签有什么作用，其中什么标签必不可少？")]),_:1})]),e("li",null,[t(a,{to:"#_17-canvas和svg的区别"},{default:i(()=>[l("17. Canvas和SVG的区别？")]),_:1})])])]),_,e("p",null,[l("大家好，我是新人前端博主"),e("a",g,[l("一心只想回农村"),t(d)]),l(", 近期在准备面试，所以会不定时更新面试题，希望对大家有帮助，也欢迎大家指正。")]),m,e("ol",null,[e("li",null,[t(n,{color:"#ff5500"},{default:i(()=>[l("优点：")]),_:1})])]),f,e("ol",v,[e("li",null,[t(n,{color:"#ff5500"},{default:i(()=>[l("缺点：")]),_:1})])]),b])}const S=c(u,[["render",k],["__file","HTML.html.vue"]]),H=JSON.parse('{"path":"/series/audition/HTML.html","title":"HTML高频面试题","lang":"en-US","frontmatter":{"title":"HTML高频面试题","date":"2024-6-3","tags":["前端","面试","HTML"],"description":"HTML高频面试题","author":"一心只想回农村"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1. 什么是 DOCTYPE， 有何作用？","slug":"_1-什么是-doctype-有何作用","link":"#_1-什么是-doctype-有何作用","children":[]},{"level":2,"title":"2. 常见的浏览器内核有哪些？","slug":"_2-常见的浏览器内核有哪些","link":"#_2-常见的浏览器内核有哪些","children":[]},{"level":2,"title":"3. 常见的meta标签有哪些？","slug":"_3-常见的meta标签有哪些","link":"#_3-常见的meta标签有哪些","children":[]},{"level":2,"title":"4. 说说对 html 语义化的理解？","slug":"_4-说说对-html-语义化的理解","link":"#_4-说说对-html-语义化的理解","children":[]},{"level":2,"title":"5. src 和 href 的区别","slug":"_5-src-和-href-的区别","link":"#_5-src-和-href-的区别","children":[]},{"level":2,"title":"6. title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？","slug":"_6-title-与-h1-的区别、b-与-strong-的区别、i-与-em-的区别","link":"#_6-title-与-h1-的区别、b-与-strong-的区别、i-与-em-的区别","children":[]},{"level":2,"title":"7. 什么是严格模式与混杂模式？","slug":"_7-什么是严格模式与混杂模式","link":"#_7-什么是严格模式与混杂模式","children":[]},{"level":2,"title":"8. iframe的作用以及优缺点？","slug":"_8-iframe的作用以及优缺点","link":"#_8-iframe的作用以及优缺点","children":[]},{"level":2,"title":"9. HTML5的特性？","slug":"_9-html5的特性","link":"#_9-html5的特性","children":[]},{"level":2,"title":"10. HTML语义化标签?","slug":"_10-html语义化标签","link":"#_10-html语义化标签","children":[]},{"level":2,"title":"11.HTML5 input 元素 type 属性","slug":"_11-html5-input-元素-type-属性","link":"#_11-html5-input-元素-type-属性","children":[]},{"level":2,"title":"12. script标签中defer和async的区别?","slug":"_12-script标签中defer和async的区别","link":"#_12-script标签中defer和async的区别","children":[]},{"level":2,"title":"13. 常⽤的meta标签有哪些?","slug":"_13-常用的meta标签有哪些","link":"#_13-常用的meta标签有哪些","children":[]},{"level":2,"title":"14. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些?","slug":"_14-行内元素有哪些-块级元素有哪些-空-void-元素有那些","link":"#_14-行内元素有哪些-块级元素有哪些-空-void-元素有那些","children":[]},{"level":2,"title":"15. 说一下 web worker","slug":"_15-说一下-web-worker","link":"#_15-说一下-web-worker","children":[]},{"level":2,"title":"16. head 标签有什么作用，其中什么标签必不可少？","slug":"_16-head-标签有什么作用-其中什么标签必不可少","link":"#_16-head-标签有什么作用-其中什么标签必不可少","children":[]},{"level":2,"title":"17. Canvas和SVG的区别？","slug":"_17-canvas和svg的区别","link":"#_17-canvas和svg的区别","children":[]}],"git":{"createdTime":1717213385000,"updatedTime":1720605094000,"contributors":[{"name":"tiantao","email":"tiantao_yb@139.com","commits":3}]},"filePathRelative":"series/audition/HTML.md"}');export{S as comp,H as data};