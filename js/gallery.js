require(['template', 'modules/browser', 'bootstrap', 'lazyload'], function (template, browser) {
	
	var imgsArr = [
			["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
			["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
			["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg"]
		];

	var data = {
			imgs: imgsArr
	    };


	var thanksArr = [
			{avatar: "../images/ydy.jpg", nickname: "_DeAth_TrAp", url: "http://weibo.com/u/1976341311", social: "Weibo"},
			{},
			{}
		];

	var gallery = {
		num: 0, // click num
		rotateYDeg: 0, // rotateY
		transZDistance: 0, // translateZ
		initMusic: function () {
			var audio = document.getElementById("music");
			audio.src = "../medias/moment.mp3";
			audio.loop = true; // 歌曲循环
			audio.play(); // 歌曲播放
		},
		lazyImg: function () { 
			$('.lazy').lazyload({ 
			    effect:'fadeIn' 
			});
		},
		appendSpinImg: function (index) {
			var arr = imgsArr[index],
			    str = "",
			    thankStr = "";

			for (var i = 0, len = imgsArr[index].length; i < len; i++) {
				str += '<img src="../images/gallery/small/' + imgsArr[index][i] + '" />';
			}
			$(".spin").html(str);

			if ("avatar" in thanksArr[index]) {
				thankStr += "Photos by: "
						 +      '<a class="share" href="' + thanksArr[index].url + '" target="_blank">'
						 +			'<img src="' + thanksArr[index].avatar +'" />'
						 +			'<span>' + 	thanksArr[index].nickname	    
						 + 			'<i class="iconfont">&#xe603;</i>' + thanksArr[index].social
						 +		'</a>';	 
			}
			$(".thank").html(thankStr);
			
		},
		spinImg: function (index) {
			var width = $(".carousel-3d").width(), // carousel's width
				imgsNum = imgsArr[index].length,
				zDistance = 0;

				gallery.rotateYDeg = 360 / imgsNum;
				gallery.transZDistance = Math.round((width / 2) / (Math.tan(Math.PI / imgsNum) ) );	

				zDistance = '-' + gallery.transZDistance + 'px';

			$(".spin").css("transform", "translateZ(" + zDistance + ")");
			$(".spin img").each( function (index, item) {
				var rotYDeg = index * gallery.rotateYDeg;
					cssStyle = {
						// '-moz-transform': 'rotateY(' + rotYDeg + 'deg)' + ' translateZ(' + gallery.transZDistance + 'px)',
						// '-webkit-transform': 'rotateY(' + rotYDeg + 'deg)' + ' translateZ(' + gallery.transZDistance + 'px)',
						transform: 'rotateY(' + rotYDeg + 'deg)' + ' translateZ(' + gallery.transZDistance + 'px)'
					};

				$(this).css(cssStyle);
			});
		},
		selectAction: function () {
			$(".row").on("click", ".photo", function () {
				var arrIndex = $(this).attr("arr-index"), // eg: imgsArr index 1-2 
					arr = arrIndex.split("-"); // [1, 2]

				gallery.num = -arr[1];
				gallery.appendSpinImg(arr[0]);
				gallery.spinImg(arr[0])
				gallery.changeSpin(-arr[1]);

				$(".gallery").hide();
				$(".popup").show();
			});

			// music
			$(".icon-music").on("click", function () {
				var className = $(this).attr("class"),
					audio = document.getElementById("music");
				
				if (className.indexOf("pause") > -1) { // start
					audio.play();
					$(this).removeClass("pause");
					$(this).html("&#xe605;");
				} else { // pause
					audio.pause();
					$(this).addClass("pause");
					$(this).html("&#xe606;");
				}
			});

			// carousel 3D
			$(".popup").on("click", ".prev", function () {
				gallery.num++;

				gallery.changeSpin(gallery.num);
			});
			$(".popup").on("click", ".next", function () {
				gallery.num--;

				gallery.changeSpin(gallery.num);
			});
			$(".popup").on("click", ".close", function () {
				$(".gallery").show();
				$(".popup").hide();
			});

			// large image
			$(".spin").on("click", "img", function () {
				var imgSrc = $(this).attr("src");

				$(".img-large img").attr("src", imgSrc.replace("small", "large"));
				$(".popup").hide();
				$(".popup-large").show();
				// $(".popup-large").css("height", $(".img-large").height() + "px");
			});

			$(".popup-large").on("click", ".close", function () {
				$(".popup-large").hide();
				$(".popup").show();
			});
		},	
		changeSpin: function (index) {
			var rotYDeg = index * gallery.rotateYDeg,
				cssStyle = {
					// '-moz-transform': 'translateZ(-' + gallery.transZDistance + 'px)' + ' rotateY(' + rotYDeg + 'deg)',
					// '-webkit-transform': 'translateZ(-' + gallery.transZDistance + 'px)' + ' rotateY(' + rotYDeg + 'deg)',
					transform: 'translateZ(-' + gallery.transZDistance + 'px)' + ' rotateY(' + rotYDeg + 'deg)'
				};

			$(".spin").css(cssStyle);
		},
		init: function () {
			// header
			$("#header").html(template('header', browser));
			//footer
			$("#footer").html(template('footer'));
			// 
			$("#page").html(template('gallery', data));

			gallery.lazyImg();
			gallery.selectAction();

			gallery.initMusic();
		}
	};

	gallery.init();
});