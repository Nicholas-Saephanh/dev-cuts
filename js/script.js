// Makes it so that when you click a link on the nav bar it stays on the one clicked.
$("li").click(function(){
	$(this).addClass('active');
	$(this).siblings().removeClass("active");
})


