/*TMODJS:{"version":2,"md5":"c2b17c902ed842950ca10cd25ad8895d"}*/
template('blog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,language=$data.language,$out='';if(language == 0){
$out+=' <ul class="blog-list"> <li> <a href="/pages/blog/create_blog.html">Using Github Pages to Build A Blog</a> </li> </ul> ';
}else{
$out+=' <ul class="blog-list"> <li> <a href="/pages/blog/create_blog.html">如何搭通过Github Pages来搭建博客</a> </li> </ul> ';
}
return new String($out);
});