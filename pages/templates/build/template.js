/*TMODJS:{"version":"1.0.0"}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^\/]+\1\.\.\1/,d=("./"+a).replace(/[^\/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},"function"==typeof define?define(function(){return a}):"undefined"!=typeof exports?module.exports=a:this.template=a,/*v:2*/
a("about",function(a){"use strict";var b=this,c=(b.$helpers,a.language),d="";return d+=0==c?' <div class="about"> <h1>About me</h1> <div class="intro"> <p> Hi, I am Dongyang Li. </p> <p> My nickname is Style. I am a Front-End Web Developer. I have been doing web development for several years using technologies like HTML, CSS, Javascript, JQuery and Java. </p> <p> Fashion is temporary, style is forever. </p> </div> <dl class="intro-dl"> <dt>Hobbies:</dt> <dd> <p>Sports</p> <P>Photography</P> <p>Travel</p> </dd> </dl> <p> <span class="email">Email: </span> lidongyang23@gmail.com </p> <p> <a href="https://github.com/stylever"> <i class="iconfont icon-github">&#xe600;</i>Github </a> </p> <div class="share"> <img class="qrimg" src="../images/blog_qrcode.png" alt="Style blog" /> </div> </div> ':' <div class="about"> <h1>\u5173\u4e8e\u6211</h1> <div class="intro"> <p> \u674e\u4e1c\u6d0b\uff0c\u7f51\u540d\u98ce\u683c\u3002 </p> <p> Web\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08, \u4e3b\u653bHTML, CSS, Javascript\u8bed\u8a00, \u7565\u61c2Java\uff0cNodejs\u3002 </p> <p> \u65f6\u5149\u603b\u662f\u592a\u5306\u5306\uff0c\u73cd\u60dc\u65f6\u95f4\uff0c\u53bb\u505a\u4e9b\u81ea\u5df1\u60f3\u505a\u7684\u4e8b\u3002 </p> </div> <dl class="intro-dl"> <dt>\u5174\u8da3\u7231\u597d\uff1a</dt> <dd> <p>\u8fd0\u52a8</p> <p>\u6444\u5f71</p> <p>\u65c5\u884c</p> </dd> </dl> <p> <span class="email">\u90ae\u7bb1: </span> lidongyang23@gmail.com </p> <p> <a href="https://github.com/stylever"> <i class="iconfont icon-github">&#xe600;</i>Github </a> </p> <div class="share"> <img class="qrimg" src="../images/blog_qrcode.png" alt="Style blog" /> </div> </div> ',new k(d)}),/*v:2*/
a("blog",function(a){"use strict";var b=this,c=(b.$helpers,a.language),d="";return d+=0==c?' <ul class="blog-list"> <li> <a href="/pages/blog/create_blog.html">Using Github Pages to Build A Blog</a> </li> </ul> ':' <ul class="blog-list"> <li> <a href="/pages/blog/create_blog.html">\u5982\u4f55\u642d\u901a\u8fc7Github Pages\u6765\u642d\u5efa\u535a\u5ba2</a> </li> </ul> ',new k(d)}),/*v:1*/
a("footer","Copyrights \xa9 2015 Style Dongyang Li. All Rights Reserved."),/*v:1*/
a("gallery",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.imgs,e=(a.value,a.i,a.val,a.j,b.$escape),f="";return f+='<section class="gallery"> <div class="media-music"> <i class="iconfont icon-music">&#xe605;</i> <audio id="music"></audio> </div> <div class="container-fluid"> <div class="row"> ',c(d,function(a,b){f+=' <div class="col-xs-6 col-md-4"> ',c(a,function(a,c){f+=' <div class="photo" arr-index="',f+=e(b),f+="-",f+=e(c),f+='"> <img class="lazy" data-original="../images/gallery/small/',f+=e(a),f+='" src="" /> </div> '}),f+=" </div> "}),f+=' </div> </div> </section> <div class="popup"> <div class="carousel-3d"> <figure class="spin"> </figure> </div> <div class="iconfont close">&#xe601;</div> <div class="iconfont prev">&#xe602;</div> <div class="iconfont next">&#xe602;</div> <div class="thank"></div> </div> <div class="popup-large"> <div class="img-large"> <img src="" /> </div> <div class="iconfont close">&#xe601;</div> </div>',new k(f)}),/*v:3*/
a("header",function(a){"use strict";var b=this,c=(b.$helpers,a.language),d="";return d+='<nav class="navbar navbar-style"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="/">Style</a> </div> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> ',d+=0==c?' <ul class="nav navbar-nav"> <li class="active"> <a href="/">Home <span class="sr-only">(current)</span> </a> </li> <li> <a href="/pages/project.html">Projects</a> </li> <li> <a href="/web-cookbook">Blog</a> </li> <li> <a href="/pages/about.html">About</a> </li> </ul> ':' <ul class="nav navbar-nav"> <li class="active"> <a href="/">\u9996\u9875 <span class="sr-only">(current)</span> </a> </li> <li> <a href="/pages/project.html">\u9879\u76ee</a> </li> <li> <a href="/web-cookbook">\u535a\u5ba2</a> </li> <li> <a href="/pages/about.html">\u5173\u4e8e</a> </li> </ul> ',d+=" </div> </div> </nav>",new k(d)}),/*v:1*/
a("photo_wall",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.col1,e=(a.value,a.i,a.val,a.j,b.$escape),f=a.col2,g=a.col3,h="";return h+='<section class="photo-wall"> <div class="container-fluid"> <div class="row"> <div class="col-xs-6 col-md-4"> ',c(d,function(a,b){h+=" ",c(a,function(a,c){h+=' <div class="model"> <div class="photo" arr-index="',h+=e(b),h+="-",h+=e(c),h+='" col="col1"> <img class="lazy" data-original="',h+=e(a.index),h+='" src="',h+=e(a.index),h+='" /> </div> <h5 class="theme">',h+=e(a.theme),h+='</h5> <p class="author"><a href="',h+=e(a.link),h+='" target="_blank">',h+=e(a.author),h+='<i class="iconfont">&#xe603;</i></a></p> </div> '}),h+=" "}),h+=' </div> <div class="col-xs-6 col-md-4"> ',c(f,function(a,b){h+=" ",c(a,function(a,c){h+=' <div class="model"> <div class="photo" arr-index="',h+=e(b),h+="-",h+=e(c),h+='" col="col2"> <img class="lazy" data-original="',h+=e(a.index),h+='" src="',h+=e(a.index),h+='" /> </div> <h5 class="theme">',h+=e(a.theme),h+='</h5> <p class="author"><a href="',h+=e(a.link),h+='" target="_blank">',h+=e(a.author),h+='<i class="iconfont">&#xe603;</i></a></p> </div> '}),h+=" "}),h+=' </div> <div class="col-xs-6 col-md-4"> ',c(g,function(a,b){h+=" ",c(a,function(a,c){h+=' <div class="model"> <div class="photo" arr-index="',h+=e(b),h+="-",h+=e(c),h+='" col="col3"> <img class="lazy" data-original="',h+=e(a.index),h+='" src="',h+=e(a.index),h+='" /> </div> <h5 class="theme">',h+=e(a.theme),h+='</h5> <p class="author"><a href="',h+=e(a.link),h+='" target="_blank">',h+=e(a.author),h+='<i class="iconfont">&#xe603;</i></a></p> </div> '}),h+=" "}),h+=" </div> </div> </div> </section> ",new k(h)}),/*v:2*/
a("project",function(a){"use strict";var b=this,c=(b.$helpers,a.language),d="";return d+=0==c?' <ul class="project-list"> <li> <a href="/projects/Cube/cube_horizon.html">Cube-Horizon</a> <a href="/projects/Cube/cube_vertical.html">Cube-Vertical</a> </li> <li> <a href="/pages/gallery.html">Gallery</a> </li> <li> <a href="/pages/photos.html">Photo Wall</a> </li> <li> <a href="/projects/Countdown/countdown_canvas.html">Countdown-Canvas</a> <a href="/projects/Countdown/countdown_rotate.html">Countdown-Rotate</a> </li> </ul> ':' <ul class="project-list"> <li> <a href="/projects/Cube/cube_horizon.html">\u6c34\u5e73\u65cb\u8f6c\u7acb\u65b9\u4f53</a> <a href="/projects/Cube/cube_vertical.html">\u5782\u76f4\u65cb\u8f6c\u7acb\u65b9\u4f53</a> </li> <li> <a href="/pages/gallery.html">\u56fe\u7247\u753b\u5eca</a> </li> <li> <a href="/pages/photos.html">\u56fe\u7247\u5899</a> </li> <li> <a href="/projects/Countdown/countdown_canvas.html">\u5012\u8ba1\u65f6-Canvas</a> <a href="/projects/Countdown/countdown_rotate.html">\u5012\u8ba1\u65f6-Rotate</a> </li> </ul> ',new k(d)})}();