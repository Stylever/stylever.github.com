require(['template', 'bootstrap', 'lazyload'], function (template) {
	
	var imgsArr = [
			["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
			["07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg"],
			["13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg"]
		];

	var data = {
			imgs: imgsArr
	    };




	var gallery = {
		num: 0, // click num
		rotateYDeg: 0, // rotateY
		transZDistance: 0, // translateZ
		lazyImg: function () { 
			$('.lazy').lazyload({ 
			    effect:'fadeIn' 
			});
		},
		appendSpinImg: function (index) {
			var arr = imgsArr[index],
			    str = "";

			for (var i = 0, len = imgsArr[index].length; i < len; i++) {
				str += '<img src="../images/gallery/small/' + imgsArr[index][i] + '" />';
			}

			$(".spin").html(str);

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

				console.log("arr:" + arr)
				gallery.num = -arr[1];
				gallery.appendSpinImg(arr[0]);
				gallery.spinImg(arr[0])
				gallery.changeSpin(-arr[1]);

				$(".gallery").hide();
				$(".popup").show();
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
			$("#header").html(template('header'));
			//footer
			$("#footer").html(template('footer'));
			// 
			$("#page").html(template('gallery', data));

			gallery.lazyImg();
			gallery.selectAction();
		}
	};

	gallery.init();
});