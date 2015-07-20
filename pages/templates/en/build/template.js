/*TMODJS:{"version":"1.0.0"}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^/]+\1\.\.\1/,d=("./"+a).replace(/[^/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},"function"==typeof define?define(function(){return a}):"undefined"!=typeof exports?module.exports=a:this.template=a,/*v:3*/
a("about",'<div class="about"> <h1>About me</h1> <div class="intro"> <p> Hi, I am Dongyang Li. </p> <p> My nickname is Style. I am a Front-End Web Developer. I have been doing web development for several years using technologies like HTML, CSS, Javascript, JQuery and Java. </p> <p> Fashion is temporary, style is forever. </p> </div> <dl class="intro-dl"> <dt>Hobbies:</dt> <dd> <p>Sports</p> <P>Photography</P> <p>Travel</p> </dd> </dl> <p> <span class="email">Email: </span> lidongyang23@gmail.com </p> <p> <a href="https://github.com/stylever"> <i class="iconfont icon-github">&#xe600;</i>Github </a> </p> <div class="share"> <img class="qrimg" src="../images/github_blog.png" alt="Style blog" /> </div> </div>'),/*v:1*/
a("footer","Copyrights \xa9 2015 Style Dongyang Li. All Rights Reserved."),/*v:3*/
a("header",'<nav class="navbar navbar-style"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="/">Style</a> </div> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav"> <li class="active"> <a href="/">Home <span class="sr-only">(current)</span> </a> </li> <li> <a href="/pages/project.html">Projects</a> </li> <li> <a href="/pages/blog.html">Blog</a> </li> <li> <a href="/pages/about.html">About</a> </li> </ul> </div> </div> </nav>'),/*v:1*/
a("project","")}();