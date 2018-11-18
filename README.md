<h1>如何让代码自动播放同步画一只pikachu？</h1>



<p><strong>关键词：</strong>JavaScript、jQuery、Prism.js、Rem响应式页面 </p>

<p><strong></strong>动态向 style 标签和 pre 标签添加文本，绘制出大白的过程。用css3实现动画的效果，用prism.js实现代码高亮的效果，用rem实现响应式布局。</p>

<strong>源码链接：</strong><p>本网页</p>

<strong>预览链接：</strong><a href="https://yuyunzhi.github.io/baymax/index.html">大白呀大白</a>

<h2>一、所需要的知识点</h2>

<h3>1、pre 标签</h3>

<p>表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。</p>

<h3>2、API</h3>

```
styleCode.substring(0,n) //获取字变量styleCode里0-n个字符串
code.scrollTop = 10000 // 窗口向下滚动10000像素
```

<h3>3、prism.js</h3>

```
var styleCode=`
body{
   background:blue;
}`
code.innerHTML = Prism.highlight(styleCode, Prism.languages.css, 'css');
```

<h3>4、css画图</h3>

```
background:linear-gradient
    (135deg, #ffffff 0%,#d2d2d2 100%);   //背景渐变
box-shadow:-0.2rem -0.2rem 0.84rem 0 
    rgb(150, 150, 150) inset;  //内阴影，加上inset
border-radius:0% 0% 50% 30%
    /0% 0% 72% 42%;    //画一个椭圆，斜杠前表示水平半径，后面表示垂直半径
```

<p>渐变和阴影用工具网站生成即可，椭圆自己反复的修改到合适为止即可。</p>

<h3>5、加meta:vp</h3>

```
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

<h3>6、动态rem</h3>

<ul>
    <li>在一个页面图的尺寸，用px（$px）表示：</li>
</ul>

```
height：px(350)  //表示高度为350px
```

<ul>
    <li>在js加上一段代码，获取视口宽度并按适当比例赋值给html的font-size</li>
</ul>

```
var pageWidth=window.innerWidth  //获取屏幕宽度
document.documentElement.style.fontSize= `${pageWidth/60}px`
```

<p>我这里用的60倍的放缩。</p>

<h3>7、sass编译</h3>

<ul>
    <li>将px转化为rem，在scss文件加入以下代码</li>
</ul>

```
@function px( $px ){
    @return $px/$designWidth*60 + rem;
  }
  $designWidth : 1500;//这是原稿的宽度
```

<p>转化一次，就变成rem了，之后在其他不同窗口rem就能生效了。</p>

<h2>二、功能实现</h2>

<h3>1、代码自动播放</h3>

<p>创建 style 、 pre 标签，并添加id</p>

```
<head>
    …
   <style id = 'styleTag'></style> 
</head>
<body>
   <pre id = 'code'></pre>//使格式按照打的格式呈现出来
    …
</body>
```

<p>在两标签添加css样式内容</p>

```
var styleCode =`abcdefghijklmn`
var n = 0 
var during = 100
var id = setTimeout(function fn(){
    n=n+1 
 //添加显示的内容
    code.innerHTML = styleCode.substring(0,n)
 //添加样式内容
    styleTag.innerHTML = styleCode.substring(0,n)
 if(n < styleCode.length){
        setTimeout(fn,during)
},during)
```

<p>这里选用了setTimeout，并没有用setInterval，是因为后面我们要加调速功能，setTimeout可以改during，而setInterval只读取一次during。</p>

<h3>2、代码高亮prism.js</h3>

<p>官网地址：</p><a href="http://prismjs.com/index.html">prism.js</a>

<ul>
    <li>下载prism的js和css</li>
    <li>分别插入head和body里</li>
    <li>代码引用，并修改成自己需要的样式</li>
</ul>

```
// The code snippet you want to highlight, as a string
var code = "var data = 1;";
// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
```

<h3>3、调速</h3>

<ul>
    <li>在html创建3个button</li>
</ul>

```
<div class="buttons">
    <button class="slow">慢速</button>
    <button class="normal">正常</button>
    <button class="fast">快速</button>
 </div>
```

 <ul>
    <li>引入jq，并使用事件委托</li>
</ul>

```
var $buttons = $(".buttons")
$buttons.on('click','button',function(e){
   var $button =$(e.currentTarget)
   var speed = $button.attr('class')
   switch(speed){
     case 'slow':
        during = 100
        break;
     case 'normal':
        during = 30
        break;
     case 'fast':
        during = 1
        break;
    }
})
```

<p>基本上重要的逻辑已经完成了，然后就是不断的调试修改和完善。</p>
