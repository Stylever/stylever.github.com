require(['template', 'lazyload'], function (template) {
	var photoWallObj = {
		photos: [[{
			author: "_DeAth_TrAp",
			theme: "众里寻你",
			avatar: "../images/ydy.jpg",
			index: "../images/flower1/index.jpg",
			link: "http://weibo.com/u/1976341311", 
			social: "Weibo",
			photoArr: ["flower1/1.jpg","flower1/2.jpg","flower1/3.jpg","flower1/4.jpg","flower1/5.jpg","flower1/6.jpg","flower1/7.jpg"]
		}],
		[{
			author: "_DeAth_TrAp",
			theme: "洛水之滨，许以百年期限",
			avatar: "../images/ydy.jpg",
			index: "../images/flower2/index.jpg",
			link: "http://weibo.com/u/1976341311", 
			social: "Weibo",
			photoArr: ["flower2/1.jpg","flower2/2.jpg","flower2/3.jpg","flower2/4.jpg","flower2/5.jpg"]
		}],
		[{
			author: "Style",
			theme: "天沧海",
			avatar: "",
			index: "../images/sea/index.jpg",
			link: "http://weibo.com/u/1839602901", 
			social: "Weibo",
			photoArr: ["sea/1.jpg","sea/2.jpg","sea/3.jpg","sea/4.jpg","sea/5.jpg"]
		}]]
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

				photoWall.appendOriginPhoto($(this).attr("arr-index"));
				photoWall.preloadImage($(this).attr("arr-index"));

				$(".popup-loading").show();
				$(".popup-photo-wall").show();
				$(".photo-wall").hide();
			});

			// close big photo
			$(".popup-photo-wall").on("click", ".close", function () {
				$(".photo-wall").show();
				$(".popup-photo-wall").hide();
				$(".popup-loading").hide();
			});
			// next photo
			$(".popup-photo-wall").on("click", ".next", function () {
				var arrIndex = $(".origin-img").attr("arr-index"),
					arr = arrIndex.split("-"),
					index = $(".origin-img img").attr("index"),
					src = "";

				$(".popup-loading").css("height", $(".origin-img").outerHeight(true) + "px").show();

				if (arrIndex && index) {
					var photoArr = photoWallObj["photos"][arr[0]][arr[1]]["photoArr"];

					if (index != (photoArr.length - 1)) { // not the last photo
						src = "../images/" + photoArr[parseInt(index) + 1];

						photoWall.showCompletePhoto(src, parseInt(index) + 1);
					} else { // the last photo
						src = "../images/" + photoArr[0];

						photoWall.showCompletePhoto(src, "0");
					}
				}
			});
			// prev photo
			$(".popup-photo-wall").on("click", ".prev", function () {
				var arrIndex = $(".origin-img").attr("arr-index"),
					arr = arrIndex.split("-"),
					index = $(".origin-img img").attr("index"),
					src = "";

				$(".popup-loading").css("height", $(".origin-img").outerHeight(true) + "px").show();

				if (arrIndex && index) {
					var photoArr = photoWallObj["photos"][arr[0]][arr[1]]["photoArr"];

					if (index != "0") { // not the first photo
						src = "../images/" + photoArr[parseInt(index) - 1];

						photoWall.showCompletePhoto(src, parseInt(index) - 1);
					} else { // the first photo
						src = "../images/" + photoArr[photoArr.length - 1];

						photoWall.showCompletePhoto(src, photoArr.length - 1);
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
		appendOriginPhoto: function (arrIndex) { // show origin photo
			var arr = arrIndex.split("-"),
				src = "../images/" + photoWallObj["photos"][arr[0]][arr[1]]["photoArr"][0];

			$(".origin-img").attr("arr-index", arrIndex);

			photoWall.showCompletePhoto(src, "0");
		},
		preloadImage: function (arrIndex) { // preload the current group of photos
			var arr = arrIndex.split("-");

			for (var i = 1, len = photoWallObj["photos"][arr[0]][arr[1]]["photoArr"].length; i < len; i++) {
				var image = new Image();
				image.src = "../images/" + photoWallObj["photos"][arr[0]][arr[1]]["photoArr"][i];
			}
			
		},
		init: function () { // init
			// header
			$("#header").html(template('header'));
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

