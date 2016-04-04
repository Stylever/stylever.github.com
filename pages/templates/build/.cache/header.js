/*TMODJS:{"version":3,"md5":"554f842cc250384362df9d839e197f6f"}*/
template('header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,language=$data.language,$out='';$out+='<nav class="navbar navbar-style"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="/">Style</a> </div> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> ';
if(language == 0){
$out+=' <ul class="nav navbar-nav"> <li class="active"> <a href="/">Home <span class="sr-only">(current)</span> </a> </li> <li> <a href="/pages/project.html">Projects</a> </li> <li> <a href="/web-cookbook">Blog</a> </li> <li> <a href="/pages/about.html">About</a> </li> </ul> ';
}else{
$out+=' <ul class="nav navbar-nav"> <li class="active"> <a href="/">首页 <span class="sr-only">(current)</span> </a> </li> <li> <a href="/pages/project.html">项目</a> </li> <li> <a href="/web-cookbook">博客</a> </li> <li> <a href="/pages/about.html">关于</a> </li> </ul> ';
}
$out+=' </div> </div> </nav>';
return new String($out);
});