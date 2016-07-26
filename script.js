$(document).ready(function() {
	openGallery_01();
	closeGallery();
});

function openGallery_01() {
	$('.box_01').on('click', function() {
		$('.gallery_01').slideDown(500);
		$('.box_01').css('display', 'none');
	});
}

function closeGallery() {
	$('.closeGallery').on('click', function() {
		$('.gallery_01').slideUp(500);
		$('.box_01').css('display', 'block');
	});
}