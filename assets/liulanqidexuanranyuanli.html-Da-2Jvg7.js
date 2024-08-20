import{_ as e,o as a,c as i,e as n}from"./app-D8pFkU2i.js";const l="/blog/assets/browser-render-DXsPbuaf.png",o={},t=n('<h1 id="理解浏览器渲染原理" tabindex="-1"><a class="header-anchor" href="#理解浏览器渲染原理"><span>理解浏览器渲染原理</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>最近一直在看八股文，发现不管是框架还是HTML部分，都免不了要涉及到浏览器的渲染问题，那么这里就涉及到重绘-<code>Redraw</code>、重排-<code>Reflow</code>(回流，个人觉得更符合的翻译是重排)两个经典的面试题。</p><h2 id="浏览器渲染原理" tabindex="-1"><a class="header-anchor" href="#浏览器渲染原理"><span>浏览器渲染原理</span></a></h2><p>根据下图， 可知道浏览器渲染分以下步骤：</p><ol><li>浏览器到HTML文件，解析HTML文件生成DOM树；；</li><li>处理CSS标记，构建层叠样式模型CSSOM(CSS Object Model);</li><li>将DOM树与CSSOM合并为渲染树(rendering tree)；</li><li>渲染树进行布局。浏览器会对渲染树每个元素包含的内容进行计算，并通过一种流式的方式处理，只需要一次pass绘制操作布局所有元素；</li><li>将渲染树的各个节点绘制到屏幕上-（painting）</li></ol><p><img src="'+l+'" alt="浏览去渲染原理"></p><h2 id="什么是重排" tabindex="-1"><a class="header-anchor" href="#什么是重排"><span>什么是重排？</span></a></h2><p>当元素布局属性发生改变，需要重新计算元素在页面中的布局位置时，浏览器重新进行布局的过程。例如：修改元素的宽度、高度、位置等。</p><h2 id="什么是重绘" tabindex="-1"><a class="header-anchor" href="#什么是重绘"><span>什么是重绘？</span></a></h2><p>当元素的样式发生改变，不影响布局的情况下，浏览器重新绘制元素的过程。例如修改元素的背景颜色、文字颜色等。</p><h2 id="为什么推荐使用重绘的方式-减少使用重排" tabindex="-1"><a class="header-anchor" href="#为什么推荐使用重绘的方式-减少使用重排"><span>为什么推荐使用重绘的方式，减少使用重排？</span></a></h2><p>从浏览器渲染原理图中，我们不难发现重排发生在Layout布局阶段，这样就会额外消耗性能去重新计算元素位置和页面布局，而重绘则只需要绘制已经计算好布局的元素样式。</p><h2 id="如何减少重排" tabindex="-1"><a class="header-anchor" href="#如何减少重排"><span>如何减少重排？</span></a></h2><ol><li><strong>使用CSS动画替代：</strong> CSS动画是利用的GPU加速，在性能方面通常比JavaScript动画更高效。使用CSS的<code>transform</code>和<code>opacity</code>属性来创建动画效果，而不是改变元素的布局属性。</li><li><strong>使用<code>translate3d</code>开启硬件加速：</strong> 将元素的位移属性设置为<code>translate3d(0, 0, 0)</code>，可以强制使用GPU加速，有助于避免回流，并提高动画的流畅性。</li><li><strong>避免频繁操作影响布局的样式属性：</strong> 当需要对元素进行多次样式修改时，可以考虑将这些修改合并为一次操作。通过添加/移除CSS类样式一次性改变多个样式属性，而不是逐个修改。</li><li><strong>灵活运用<code>requestAnimationFrame</code>：</strong> 通过使用<code>requestAnimationFrame</code>方法调度动画帧，可以确保动画在浏览器的重绘周期执行，从而避免不必要的回流。这种方式可以确保动画在最佳时间节点进行渲染。</li><li><strong>使用文档片段（Document Fragment）：</strong> 当需要向DOM中插入大量新元素时，可以先将元素添加到文档片段中，最后将整个文档片段一次性注入DOM中，这样可以减少回流次数。例如：vue的虚拟dom（vNode)；</li><li><strong>让元素脱离文档流：</strong> 使用<code>position</code>的<code>absolute</code>、<code>fixed</code>和float，这样可以减少回流。</li><li><strong>CSS属性控制：</strong> 使用<code>visibility: hidden</code>替代<code>display: none</code>， <code>visibility: hidden</code>不会触发回流，仍然占据空间，只是不可见；而<code>display: none</code>则会将元素从渲染树中移除，引起回流。</li></ol>',15),s=[t];function d(r,c){return a(),i("div",null,s)}const p=e(o,[["render",d],["__file","liulanqidexuanranyuanli.html.vue"]]),g=JSON.parse('{"path":"/blogs/liulanqidexuanranyuanli.html","title":"理解浏览器渲染原理","lang":"en-US","frontmatter":{"categories":["八股文"],"tags":["浏览器","渲染","重绘","重排","性能优化"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"浏览器渲染原理","slug":"浏览器渲染原理","link":"#浏览器渲染原理","children":[]},{"level":2,"title":"什么是重排？","slug":"什么是重排","link":"#什么是重排","children":[]},{"level":2,"title":"什么是重绘？","slug":"什么是重绘","link":"#什么是重绘","children":[]},{"level":2,"title":"为什么推荐使用重绘的方式，减少使用重排？","slug":"为什么推荐使用重绘的方式-减少使用重排","link":"#为什么推荐使用重绘的方式-减少使用重排","children":[]},{"level":2,"title":"如何减少重排？","slug":"如何减少重排","link":"#如何减少重排","children":[]}],"git":{"createdTime":1718262276000,"updatedTime":1718264089000,"contributors":[{"name":"tiantao","email":"tiantao_yb@139.com","commits":2}]},"filePathRelative":"blogs/浏览器的渲染原理.md"}');export{p as comp,g as data};
