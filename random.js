/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global $, document, this*/
$(document).ready(function () {
	"use strict";
	var i, count;
	count = 30;
	function random_gif (id_selector) {
		$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC', function (data) {
			if (data.meta.msg === "OK" && data.meta.status === 200) {
				$(id_selector).append('<img class="gif" src="' + data.data.image_original_url + '" alt="some random gif" />');
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
		$('#count').html('Gif refresh in ' + count + ' s ... You can click the refresh icon if you want new gifs !! <img id="refresh" src="refresh.png" alt="refresh_icon" />');
		count = count - 1;
		if (count <= 0) {
			send_random_gif('#gif');
			count = 30;
		}
	}, 1000);
	$('body').on('click', '#refresh', function (event) {
		event.preventDefault();
		send_random_gif('#gif');
		count = 30;
	});
	send_random_gif('#gif');
});