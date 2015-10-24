require(['template', 'modules/browser', 'lazyload'], function (template, browser) {
	// in order to improve the speed of image, the size of the first image should be smaller

	var photoWallObj = {
		col1: [
			[{
				author: "丁一小学生",
				theme: "众里寻你",
				avatar: "../images/ydy.jpg",
				index: "../images/flower1/index.jpg",
				link: "http://weibo.com/u/1976341311", 
				social: "Weibo",
				photoArr: ["flower1/small.jpg","flower1/1.jpg","flower1/2.jpg","flower1/3.jpg","flower1/4.jpg","flower1/5.jpg","flower1/6.jpg","flower1/7.jpg"]
			}],
			[{
				author: "丁一小学生",
				theme: "洛水之滨，许以百年期限",
				avatar: "../images/ydy.jpg",
				index: "../images/flower2/index.jpg",
				link: "http://weibo.com/u/1976341311", 
				social: "Weibo",
				photoArr: ["flower2/small.jpg","flower2/1.jpg","flower2/2.jpg","flower2/3.jpg","flower2/4.jpg","flower2/5.jpg"]
			}],
			[{
				author: "Style",
				theme: "天沧海",
				avatar: "",
				index: "../images/sea/index.jpg",
				link: "http://weibo.com/u/1839602901", 
				social: "Weibo",
				photoArr: ["sea/small.jpg","sea/1.jpg","sea/2.jpg","sea/3.jpg","sea/4.jpg","sea/5.jpg"]
			}]
		],
		col2: [
			[{
				author: "Style",
				theme: "Chicago",
				avatar: "",
				index: "../images/Chicago/index.jpg",
				link: "http://weibo.com/u/1839602901", 
				social: "Weibo",
				photoArr: ["Chicago/small.jpg","Chicago/1.jpg","Chicago/2.jpg","Chicago/3.jpg","Chicago/4.jpg","Chicago/5.jpg","Chicago/6.jpg","Chicago/7.jpg","Chicago/8.jpg","Chicago/9.jpg","Chicago/10.jpg"]
			}],
			[{
				author: "Style",
				theme: "Las Vegas",
				avatar: "",
				index: "../images/Las Vegas/index.jpg",
				link: "http://weibo.com/u/1839602901", 
				social: "Weibo",
				photoArr: ["Las Vegas/small.jpg","Las Vegas/1.jpg","Las Vegas/2.jpg","Las Vegas/3.jpg","Las Vegas/4.jpg","Las Vegas/5.jpg","Las Vegas/6.jpg","Las Vegas/7.jpg","Las Vegas/8.jpg","Las Vegas/9.jpg"]
			}],
			[{
				author: "Style",
				theme: "San Francisco",
				avatar: "",
				index: "../images/San Francisco/index.jpg",
				link: "http://weibo.com/u/1839602901", 
				social: "Weibo",
				photoArr: ["San Francisco/small.jpg","San Francisco/1.jpg","San Francisco/2.jpg","San Francisco/3.jpg","San Francisco/4.jpg","San Francisco/5.jpg","San Francisco/6.jpg","San Francisco/7.jpg","San Francisco/8.jpg","San Francisco/9.jpg"]
			}]
		],
		col3: [
			[{
				author: "Style",
				theme: "Route One",
				avatar: "",
				index: "../images/Route One/index.jpg",
				link: "http://weibo.com/u/1839602901", 
				social: "Weibo",
				photoArr: ["Route One/small.jpg","Route One/1.jpg","Route One/2.jpg","Route One/3.jpg","Route One/4.jpg","Route One/5.jpg","Route One/6.jpg","Route One/7.jpg","Route One/8.jpg","Route One/9.jpg","Route One/10.jpg","Route One/11.jpg","Route One/12.jpg"]
			}],
			[{
				author: "Style",
				theme: "Los Angeles",
				avatar: "",
				index: "../images/Los Angeles/index.jpg",
				link: "http://weibo.com/u/1839602901", 
				social: "Weibo",
				photoArr: ["Los Angeles/small.jpg","Los Angeles/1.jpg","Los Angeles/2.jpg","Los Angeles/3.jpg","Los Angeles/4.jpg","Los Angeles/5.jpg","Los Angeles/6.jpg","Los Angeles/7.jpg","Los Angeles/8.jpg","Los Angeles/9.jpg","Los Angeles/10.jpg","Los Angeles/11.jpg","Los Angeles/12.jpg","Los Angeles/13.jpg","Los Angeles/14.jpg"]
			}],
			[{
				author: "Style",
				theme: "Grand Canyon",
				avatar: "",
				index: "../images/Grand Canyon/index.jpg",
				link: "http://weibo.com/u/1839602901", 
				social: "Weibo",
				photoArr: ["Grand Canyon/small.jpg","Grand Canyon/1.jpg","Grand Canyon/2.jpg","Grand Canyon/3.jpg","Grand Canyon/4.jpg","Grand Canyon/5.jpg","Grand Canyon/6.jpg","Grand Canyon/7.jpg"]
			}]
		]
	};

	var photoWall = {
		imageObj: new Image(),
		lazyImg: function () { 
			$('.lazy').lazyload({ 
			    effect:'fadeIn' 
			});
		},
		selectAction: function () { // event binding
			// show big photos
			$(".row").on("click", ".photo", function () {

				photoWall.appendOriginPhoto($(this).attr("arr-index"), $(this).attr("col"));
				photoWall.preloadImage($(this).attr("arr-index"), $(this).attr("col"));

				$(".popup-loading").show();
				$(".popup-photo-wall").show();
				$(".photo-wall").hide();
			});

			// close big photo
			$(".popup-photo-wall").on("click", ".close", function () {
				$(".photo-wall").show();
				$(".popup-photo-wall").hide();
				$(".popup-loading").hide();

				$(".origin-img img").attr("src", "");
			});
			// next photo
			$(".popup-photo-wall").on("click", ".next", function () {
				var arrIndex = $(".origin-img").attr("arr-index"),
					col = $(".origin-img").attr("col"),
					arr = arrIndex.split("-"),
					index = $(".origin-img img").attr("index"),
					src = "";

				$(".popup-loading").css("height", $(".origin-img").outerHeight(true) + "px").show();

				if (arrIndex && index) {
					var photoArr = photoWallObj[col][arr[0]][arr[1]]["photoArr"];

					if (index != (photoArr.length - 1)) { // not the last photo
						src = "../images/" + photoArr[parseInt(index) + 1];

						photoWall.showCompletePhoto(src, parseInt(index) + 1);
					} else { // the last photo
						src = "../images/" + photoArr[1]; // jump small picture

						photoWall.showCompletePhoto(src, "1");
					}
				}
			});
			// prev photo
			$(".popup-photo-wall").on("click", ".prev", function () {
				var arrIndex = $(".origin-img").attr("arr-index"),
					col = $(".origin-img").attr("col"),
					arr = arrIndex.split("-"),
					index = $(".origin-img img").attr("index"),
					src = "";

				$(".popup-loading").css("height", $(".origin-img").outerHeight(true) + "px").show();

				if (arrIndex && index) {
					var photoArr = photoWallObj[col][arr[0]][arr[1]]["photoArr"];

					if (index == "0") { // the first photo
						src = "../images/" + photoArr[photoArr.length - 2]; // show the last but second photo

						photoWall.showCompletePhoto(src, photoArr.length - 2);
					} else if (index == "1") { // the second photo
						src = "../images/" + photoArr[photoArr.length - 1]; // show the last photo

						photoWall.showCompletePhoto(src, photoArr.length - 1);
					} else { // the prev photo
						src = "../images/" + photoArr[parseInt(index) - 1];

						photoWall.showCompletePhoto(src, parseInt(index) - 1);
					}
				}
			});
		},
		showCompletePhoto: function (path, index) { // show the completed photo
			var image = new Image();

			photoWall.imageObj.src = path;
			
			photoWall.timer = setInterval( function () {
				if (photoWall.imageObj.complete) {
					$(".origin-img img").attr("src", path).attr("index", index);
					$(".popup-loading").hide();

					clearInterval(photoWall.timer)
				}
			}, 1000);

		},
		appendOriginPhoto: function (arrIndex, col) { // show origin photo
			var arr = arrIndex.split("-"),
				src = "../images/" + photoWallObj[col][arr[0]][arr[1]]["photoArr"][0];

			$(".origin-img").attr("arr-index", arrIndex).attr("col", col);

			photoWall.showCompletePhoto(src, "0");
		},
		preloadImage: function (arrIndex, col) { // preload the current group of photos
			var arr = arrIndex.split("-");

			for (var i = 1, len = photoWallObj[col][arr[0]][arr[1]]["photoArr"].length; i < len; i++) {
				var image = new Image();
				image.src = "../images/" + photoWallObj[col][arr[0]][arr[1]]["photoArr"][i];
			}
			
		},
		init: function () { // init
			// header
			$("#header").html(template('header', browser));
			//footer
			$("#footer").html(template('footer'));
			// 
			$("#page").html(template('photo_wall', photoWallObj));

			photoWall.lazyImg();
			photoWall.selectAction(); // event binding
		}
	};

	photoWall.init();
});

