/*TMODJS:{"version":1,"md5":"f077de3b7f9360d8df77175e5e9b853c"}*/
template('photo_wall',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,col1=$data.col1,value=$data.value,i=$data.i,val=$data.val,j=$data.j,$escape=$utils.$escape,col2=$data.col2,col3=$data.col3,$out='';$out+='<section class="photo-wall"> <div class="container-fluid"> <div class="row"> <div class="col-xs-6 col-md-4"> ';
$each(col1,function(value,i){
$out+=' ';
$each(value,function(val,j){
$out+=' <div class="model"> <div class="photo" arr-index="';
$out+=$escape(i);
$out+='-';
$out+=$escape(j);
$out+='" col="col1"> <img class="lazy" data-original="';
$out+=$escape(val.index);
$out+='" src="';
$out+=$escape(val.index);
$out+='" /> </div> <h5 class="theme">';
$out+=$escape(val.theme);
$out+='</h5> <p class="author"><a href="';
$out+=$escape(val.link);
$out+='" target="_blank">';
$out+=$escape(val.author);
$out+='<i class="iconfont">&#xe603;</i></a></p> </div> ';
});
$out+=' ';
});
$out+=' </div> <div class="col-xs-6 col-md-4"> ';
$each(col2,function(value,i){
$out+=' ';
$each(value,function(val,j){
$out+=' <div class="model"> <div class="photo" arr-index="';
$out+=$escape(i);
$out+='-';
$out+=$escape(j);
$out+='" col="col2"> <img class="lazy" data-original="';
$out+=$escape(val.index);
$out+='" src="';
$out+=$escape(val.index);
$out+='" /> </div> <h5 class="theme">';
$out+=$escape(val.theme);
$out+='</h5> <p class="author"><a href="';
$out+=$escape(val.link);
$out+='" target="_blank">';
$out+=$escape(val.author);
$out+='<i class="iconfont">&#xe603;</i></a></p> </div> ';
});
$out+=' ';
});
$out+=' </div> <div class="col-xs-6 col-md-4"> ';
$each(col3,function(value,i){
$out+=' ';
$each(value,function(val,j){
$out+=' <div class="model"> <div class="photo" arr-index="';
$out+=$escape(i);
$out+='-';
$out+=$escape(j);
$out+='" col="col3"> <img class="lazy" data-original="';
$out+=$escape(val.index);
$out+='" src="';
$out+=$escape(val.index);
$out+='" /> </div> <h5 class="theme">';
$out+=$escape(val.theme);
$out+='</h5> <p class="author"><a href="';
$out+=$escape(val.link);
$out+='" target="_blank">';
$out+=$escape(val.author);
$out+='<i class="iconfont">&#xe603;</i></a></p> </div> ';
});
$out+=' ';
});
$out+=' </div> </div> </div> </section> ';
return new String($out);
});