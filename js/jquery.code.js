(function() {
		
	$.fn.code = function() {

		return this.each(function() {

			var
			$this = $(this),
			src = $this.attr("src");

			$.ajax({
				url: src,
				complete: function(response) {

					$this.html(response.responseText);

				}
			});

		});

	};

})();