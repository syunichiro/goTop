//ページ右下にページ・トップへをつける


$(function(){

	//右下ミニナビ
	var spaTop="/";//今回のセールトップURL　トップのURLを入れる！
	var miniNavi;	//mininami object 枠生成
	miniNavi= $('<div id="miniNavi"></div>')
		.css({"position":"fixed",
		"z-index":"10",
		"box-shadow": "0px 0px 5px 5px rgba(0,0,0,0.1)",
		"border-radius":"4px 0 0 4px/4px 0 0 4px",
		"right":"0",
		"bottom":"10px"})
		
	//ページトップへ
	miniNavi.append($('<div class="btn" id="mnGoPTop">ページトップへ</div>')
		.click(function(){
			var hash = ".navTop";
			if(!hash || hash == "#")return false;
			$('html , body').animate({scrollTop: $(hash).offset().top}, 800, "swing");
			return false;
	
		}))


	//コンテンツトップへ
	miniNavi.append($('<div class="btn" id="mnSpaTop">コンテンツトップへ/div>')
		.click(function(){
			window.location.href=spaTop;	
	
		}))
	
	$('.btn',miniNavi)
		.css({
		"width":"54px",
		"height":"50px",
		"bottom":"10px"})
	
	if($('body').attr('id')!='spaTop')$('body').append(miniNavi);

	var showFlag = false;
	var topBtn = $('#miniNavi');	
	topBtn.css('bottom', '-100px');
	var showFlag = false;


	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (showFlag == false) {
				showFlag = true;
				topBtn.stop().animate({'bottom' : '20px'}, 200); 
			}
		} else {
			if (showFlag) {
				showFlag = false;
				topBtn.stop().animate({'bottom' : '-100px'}, 200); 
			}
		}
	});




});