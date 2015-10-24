/*TMODJS:{"version":2,"md5":"9cd9484c0e768f587ebb9fa7b641fb78"}*/
template('about',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,language=$data.language,$out='';if(language == 0){
$out+=' <div class="about"> <h1>About me</h1> <div class="intro"> <p> Hi, I am Dongyang Li. </p> <p> My nickname is Style. I am a Front-End Web Developer. I have been doing web development for several years using technologies like HTML, CSS, Javascript, JQuery and Java. </p> <p> Fashion is temporary, style is forever. </p> </div> <dl class="intro-dl"> <dt>Hobbies:</dt> <dd> <p>Sports</p> <P>Photography</P> <p>Travel</p> </dd> </dl> <p> <span class="email">Email: </span> lidongyang23@gmail.com </p> <p> <a href="https://github.com/stylever"> <i class="iconfont icon-github">&#xe600;</i>Github </a> </p> <div class="share"> <img class="qrimg" src="../images/blog_qrcode.png" alt="Style blog" /> </div> </div> ';
}else{
$out+=' <div class="about"> <h1>关于我</h1> <div class="intro"> <p> 李东洋，网名风格。 </p> <p> Web前端开发工程师, 主攻HTML, CSS, Javascript语言, 略懂Java，Nodejs。 </p> <p> 时光总是太匆匆，珍惜时间，去做些自己想做的事。 </p> </div> <dl class="intro-dl"> <dt>兴趣爱好：</dt> <dd> <p>运动</p> <p>摄影</p> <p>旅行</p> </dd> </dl> <p> <span class="email">邮箱: </span> lidongyang23@gmail.com </p> <p> <a href="https://github.com/stylever"> <i class="iconfont icon-github">&#xe600;</i>Github </a> </p> <div class="share"> <img class="qrimg" src="../images/blog_qrcode.png" alt="Style blog" /> </div> </div> ';
}
return new String($out);
});