/*TMODJS:{"version":2,"md5":"e55b68d821fa374c93906f96422ae12a"}*/
template('project',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,language=$data.language,$out='';if(language == 0){
$out+=' <ul class="project-list"> <li> <a href="/projects/Cube/cube_horizon.html">Cube-Horizon</a> <a href="/projects/Cube/cube_vertical.html">Cube-Vertical</a> </li> <li> <a href="/pages/gallery.html">Gallery</a> </li> <li> <a href="/pages/photos.html">Photo Wall</a> </li> <li> <a href="/projects/Countdown/countdown_canvas.html">Countdown-Canvas</a> <a href="/projects/Countdown/countdown_rotate.html">Countdown-Rotate</a> </li> </ul> ';
}else{
$out+=' <ul class="project-list"> <li> <a href="/projects/Cube/cube_horizon.html">水平旋转立方体</a> <a href="/projects/Cube/cube_vertical.html">垂直旋转立方体</a> </li> <li> <a href="/pages/gallery.html">图片画廊</a> </li> <li> <a href="/pages/photos.html">图片墙</a> </li> <li> <a href="/projects/Countdown/countdown_canvas.html">倒计时-Canvas</a> <a href="/projects/Countdown/countdown_rotate.html">倒计时-Rotate</a> </li> </ul> ';
}
return new String($out);
});