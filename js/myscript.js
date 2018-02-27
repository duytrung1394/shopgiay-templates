$(document).ready(function () {

	$(".cart-select").click(function (e) {
		$('.popup__cart-body').fadeToggle();
		$('.popup__login-body').fadeOut();
		if ($(".cart__list-item").height() < 200) {
			$(".cart__list-item").css('overflow-y', "hidden");
		} else {
			$(".cart__list-item").css('overflow-y', "scroll");
		}
		e.stopPropagation(); //ngừng
	});

	//Khi click vao cart-body, ngừng đóng popup
	$(".popup__cart-body").click(function (e) {
		e.stopPropagation();
	});
	$(".search-box").click(function (e) {
		e.stopPropagation();
	});
	$(document).click(function () {
		$(".popup__cart-body").fadeOut();
		$('.popup__login-body').fadeOut();
		$('.search-result').fadeOut();
		//ẩn các alert khi dong popup
		$('.popup__login-body .alert').fadeOut();
	});
	$('.login-select').click(function (e) {
		$('.popup__login-body').fadeToggle();
		$(".popup__cart-body").fadeOut();
		e.stopPropagation();
		//ẩn các alert khi mở popup
		$('.popup__login-body .alert').hide();
	});
	$(".popup__login-body").click(function (e) {
		e.stopPropagation();
	});
	$('.close_popup_cart').click(function () {
		$(".popup__cart-body").fadeOut();
	});
	//show cart detail
	$('.show-siderbar__main').click(function () {
		$('.sidebar__main').slideToggle();
	});

	//nav
	$(".nav__sidebar a").click(function () {
		//slide tất cả các ul con
		$(".nav__sidebar ul ul").slideUp('fast');
		//Hiện gly down ở các ul khác
		$(".nav__sidebar ul li a span").removeClass('glyphicon-chevron-up');
		$(".nav__sidebar ul li a span").addClass('glyphicon-chevron-down');
		//Hiện gly up ở thẻ này
		$(this).children().addClass('glyphicon-chevron-down');
		$(this).children().removeClass('glyphicon-chevron-up');
		// nếu ul con không được hiện thỉ thì thả ul xuống khi click
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown('fast');

			// ul hiện thì thêm sly up
			$(this).children().addClass('glyphicon-chevron-up');
			$(this).children().removeClass('glyphicon-chevron-down');
		}
	});
	// nếu li được active thì hiện thị ul cha của li
	$('.active-li').closest('ul').slideDown('fast');
	// hiện gly up
	$('.active-li').closest('ul').prev().children().addClass('glyphicon-chevron-up');
	$('.active-li').closest('ul').prev().css('color', '#339999');
	$('.active-li').closest('ul').prev().children().css('color', '#333');
	$('.active-li').closest('ul').prev().children().removeClass('glyphicon-chevron-down');

	$('.product-submit-cart .disabled').closest('.a__submit').hover(function () {
		$(this).css('cursor', 'not-allowed');
	});
	//khi dong modal thì reload trang
	$('#myModal').on('hidden.bs.modal', function () {
		document.location.reload();
	});

	//DANG NHAP
	$('#form-login').submit(function (e) {
		e.preventDefault();
		var email = $('.popup__login-body .input-email').val();
		var password = $('.popup__login-body .input-password').val();
		var error = false;
		if (email == "") {
			$('.popup__login-body .input-email').next('.errors').fadeIn();
			error = true;
		}
		if (password == "") {
			$('.popup__login-body .input-password').next('.errors').fadeIn();
			error = true;
		}
	});
	//hide errors after press key on input
	$('.popup__login-body .input-email').keyup(function () {
		$(this).next('.errors').fadeOut();
		$('.login-messages').fadeOut();
	});
	$('.popup__login-body .input-password').keyup(function () {
		$(this).next('.errors').fadeOut();
		$('.login-messages').fadeOut();
	});

});
$("#img_01").elevateZoom({
	zoomType: "inner",
	cursor: "crosshair",
	constrainType: "height",
	constrainSize: 274,
	gallery: 'gallery_01',
	// cursor: 'pointer',
	// zoomWindowWidth:400,
	// zoomWindowHeight:500,
	galleryActiveClass: "active"
});

//pass the images to Fancybox
$("#img_01").bind("click", function (e) {
	var ez = $('#img_01').data('elevateZoom');
	$.fancybox(ez.getGalleryList());
	return false;
});

$('.field__input').on('input', function () {
	var field = $(this).closest('.field__input-wrapper');
	if (this.value) {
		field.addClass('field__input-active');
	} else {
		field.removeClass('field__input-active');
	}
});
