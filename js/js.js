hot_lb(); /*焦点推荐轮播*/
jc_lb(); /*精彩轮播*/
/*******************焦点推荐轮播*****************************/
function hot_lb() {
	var li = $('.hot_nav li');
	var ul = $('.ul_f ul');
	var last = $('.last');
	var next = $('.next');
	var img_w = $('.hot_img_size').width();
	var x = 1;

	/*自动循环事件*/
	var hot_time = setInterval(mov_l, 2000);
	/*上一个下一个按钮注册*/
	last.click(mov_r);
	next.click(mov_l);
	/*鼠标进入轮播图*/
	$('.hot').hover(function() {
		clearInterval(hot_time);
	}, function() {
		hot_time = setInterval(mov_l, 2000);
	});
	/*鼠标在轮播导航悬浮*/
	li.hover(li_hover);
	/*轮播函数开始*/
	function li_hover() {
		$(this).attr('id', 'on').siblings().attr('id', ' ');
		x = $(this).index();
		x++;
		$(ul).stop().animate({
			left: -x * img_w + 'px'
		}, 200);
	}
	/*ul向左，轮播图向右*/
	function mov_l() {
		x++;
		if(x == 9) {
			ul.animate({
				left: "-660px"
			}, 0);
			x = 2;

		}
		ul.animate({
			left: -x * img_w + 'px'
		}, 300, function() {
			if(x == 8) {
				li.eq(0).attr('id', 'on').siblings().attr('id', ' ');
			} else {
				var y = x - 1;
				li.eq(y).attr('id', 'on').siblings().attr('id', ' ');
			}

		});
	}
	/*ul向右，轮播图向左*/
	function mov_r() {
		x--;
		if(x == 0) {
			ul.animate({
				left: '-5280px'
			}, 0);
			li.eq(0).attr('id', 'on').siblings().attr('id', ' ');
			x = 7;
		}
		ul.animate({
			left: -x * img_w + 'px'
		}, 300, function() {
			var y = x - 1;
			li.eq(y).attr('id', 'on').siblings().attr('id', ' ');
		});
	}
	/*轮播函数结束*/
}

/*******************精彩聚焦轮播*****************************/
function jc_lb() {
	var ul2 = $('.ul_f2');
	var li2 = $('.jc_nav li');
	var last2 = $('.last2');
	var next2 = $('.next2');
	var x = 1;
	var time = setInterval(mov_l, 8000)
	li2.hover(li2_hover);
	last2.click(mov_r);
	next2.click(mov_l);
	$('.recommend').hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(mov_l, 8000)
	});

	function mov_l() {
		x++;
		if(x == 3) {
			ul2.animate({
				left: '0px'
			}, 0);

			x = 1;
		}
		ul2.animate({
			left: -x * 952 + 'px'
		}, 2000, function() {
			if(x == 2) {
				li2.eq(1).attr({
					id: 'on'
				}).siblings().attr({
					id: ' '
				});
			} else {
				li2.eq(0).attr({
					id: 'on'
				}).siblings().attr({
					id: ' '
				});
			}
		});
	}

	function li2_hover() {
		$(this).attr('id', 'on').siblings().attr('id', ' ');
		x = $(this).index();
		x++;
		ul2.stop().animate({
			left: -x * 952 + 'px'
		}, 2000);
	}

	function mov_r() {
		x--;
		if(x == -1) {
			ul2.animate({
				left: '-1904px'
			}, 0);

			x = 1;
		}

		ul2.animate({
			left: -x * 952 + 'px'
		}, 2000, function() {
			if(x == 0) {
				li2.eq(1).attr({
					id: 'on'
				}).siblings().attr({
					id: ' '
				});

			} else {
				li2.eq(0).attr({
					id: 'on'
				}).siblings().attr({
					id: ' '
				});
			}
		});
	}
}