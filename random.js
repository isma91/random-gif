/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global $, document, this*/
$(document).ready(function () {
	"use strict";
	var i, count;
	count = 30;
	function random_gif (id_selector) {
		$.get('http://api.giphy.com/v1/gifs/random?api_key=GIPHY_API_KEY', function (data) {
			if (data.meta.msg === "OK" && data.meta.status === 200) {
				console.log(data);
				$(id_selector).append('<img class="gif" src="' + data.data.images.original.url + '" alt="some random gif" />');
			}
		});
	}
	function send_random_gif (id_selector) {
		"use strict";
		$(id_selector).html('');
		for (i = 0; i < 25; i = i + 1) {
			random_gif($(id_selector));
		}
	}
	setInterval(function () {
		$('#count').html('Gif refresh in ' + count + ' s ...');
		count = count - 1;
		if (count <= 0) {
			send_random_gif('#gif');
			count = 30;
		}
	}, 1000);
	send_random_gif('#gif');
});
