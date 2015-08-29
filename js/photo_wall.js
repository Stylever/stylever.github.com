require(['template', 'jquery'], function (template) {
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
		[]]
	};

	var photoWall = {
		selectAction: function () { // event binding
			// show big photos
			$(".row").on("click", ".photo", function () {
				// var arrIndex = $(this).attr("arr-index"), // eg: imgsArr index 1-2 
				// 	arr = arrIndex.split("-"); // [1, 2]

				photoWall.appendOriginPhoto($(this).attr("arr-index"));
				// gallery.num = -arr[1];
				// gallery.appendSpinImg(arr[0]);
				// gallery.spinImg(arr[0])
				// gallery.changeSpin(-arr[1]);
				$(".popup").show();
				$(".photo-wall").hide();

				photoWall.autoHeight();
			});

			// close big photo
			$(".popup").on("click", ".close", function () {
				$(".photo-wall").show();
				$(".popup").hide();
			});
			// next photo
			$(".popup").on("click", ".next", function () {
				var arrIndex = $(".origin-img").attr("arr-index"),
					arr = arrIndex.split("-"),
					index = $(".origin-img img").attr("index");

				if (arrIndex && index) {
					var photoArr = photoWallObj["photos"][arr[0]][arr[1]]["photoArr"];

					if (index != (photoArr.length - 1)) { // not the last photo
						$(".origin-img img").attr("src", "../images/" + photoArr[parseInt(index) + 1]).attr("index", parseInt(index) + 1);
					} else { // the last photo
						$(".origin-img img").attr("src", "../images/" + photoArr[0]).attr("index", "0");
					}
					photoWall.autoHeight();
				}
			});
			// prev photo
			$(".popup").on("click", ".prev", function () {
				var arrIndex = $(".origin-img").attr("arr-index"),
					arr = arrIndex.split("-"),
					index = $(".origin-img img").attr("index");

				if (arrIndex && index) {
					var photoArr = photoWallObj["photos"][arr[0]][arr[1]]["photoArr"];

					if (index != "0") { // not the first photo
						$(".origin-img img").attr("src", "../images/" + photoArr[parseInt(index) - 1]).attr("index", parseInt(index) - 1);
					} else { // the first photo
						$(".origin-img img").attr("src", "../images/" + photoArr[photoArr.length - 1]).attr("index", photoArr.length - 1);
					}
					photoWall.autoHeight();
				}
			});
		},
		autoHeight: function () { // caculate the height of orign-img element
			setTimeout(function () { // add height
				var height = $(".origin-img").outerHeight(true);
				$(".popup").css('height',  height + 'px');
			}, 1000);
		},
		appendOriginPhoto: function (arrIndex) { // show origin photo
			var arr = arrIndex.split("-"),
				path = photoWallObj["photos"][arr[0]][arr[1]]["photoArr"][0];

			$(".origin-img").attr("arr-index", arrIndex);
			$(".origin-img img").attr("src", "../images/" + path).attr("index", "0");
		},
		init: function () { // init
			// header
			$("#header").html(template('header'));
			//footer
			$("#footer").html(template('footer'));
			// 
			$("#page").html(template('photo_wall', photoWallObj));

			photoWall.selectAction(); // event binding
		}
	};

	photoWall.init();
});

