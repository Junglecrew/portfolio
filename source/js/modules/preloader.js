export default function() {
	var images = document.images,
		images_total = images.length,
		images__loaded = 0,
		preloader = document.querySelector('.preloader'),
		preloader__percents = document.querySelector('.preloader__percents');
		console.log(images_total);

	if (images_total > 0) { 
		for (var i = 0; i < images_total; i++) {
			var image_clone = new Image();
			image_clone.onload = imageLoaded;
			// image_clone.onerror = imageLoaded();
			image_clone.src = images[i].src
		}
		console.log(images_total)
		console.log(images__loaded)

		function imageLoaded() {
			images__loaded++;
			preloader__percents.innerHTML = (((100 / images_total) * images__loaded) << 0) + '%';
			console.log(preloader__percents.innerHTML);
			if (images__loaded >= images_total || images_total == 0) {
				setTimeout(function(){
					if(!preloader.classList.contains('visuallyHidden')){
						preloader.classList.add('visuallyHidden');
					}
				}, 1000);
			}
		}
	} else {
		preloader.classList.add('visuallyHidden');
	}
}