/*TMODJS:{"version":1,"md5":"c820c13d69f869b6ce752828bd70fc6c"}*/
template('gallery',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,imgs=$data.imgs,value=$data.value,i=$data.i,val=$data.val,j=$data.j,$escape=$utils.$escape,$out='';$out+='<section class="gallery"> <div class="container-fluid"> <div class="row"> ';
$each(imgs,function(value,i){
$out+=' <div class="col-xs-6 col-md-4"> ';
$each(value,function(val,j){
$out+=' <div class="photo" arr-index="';
$out+=$escape(i);
$out+='-';
$out+=$escape(j);
$out+='"> <img class="lazy" data-original="../images/gallery/small/';
$out+=$escape(val);
$out+='" src="" /> </div> ';
});
$out+=' </div> ';
});
$out+=' </div> </div> </section> <div class="popup"> <div class="carousel-3d"> <figure class="spin"> </figure> </div> <div class="iconfont close">&#xe601;</div> <div class="iconfont prev">&#xe602;</div> <div class="iconfont next">&#xe602;</div> </div> <div class="popup-large"> <div class="img-large"> <img src="" /> </div> <div class="iconfont close">&#xe601;</div> </div>';
return new String($out);
});