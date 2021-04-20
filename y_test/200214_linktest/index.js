



(function ($) {
	const sns = $(".sns");
	const snsinput = sns.find('input');
	const snsLink = sns.find('a');
	const btn = $('.btn').find('a');

	// console.log('haha')
	snsinput.on("click", function () {
		let href = $(this).next('a').attr('href');
		console.log(href);
		btn.attr('href', href);
		let btnhref = btn.attr('href');
		console.log(btnhref);
	});



	const testInput = $(".testInput");

	testInput.on("keyup", function () {
		console.log(testInput.val());
		const value = testInput.val();
		// var patt = new RegExp(/^[0-9]+$/);
		// console.log(patt.test(value)); //숫자이면 true

		// var patt = new RegExp(/^\s+|\s+$/g);
		// console.log(patt.test(value)); //스페이스가 잇을때 true

		// var patt = new RegExp(/^[가-힣a-zA-Z]+$/);
		// console.log(patt.test(value)); //숫자일때 false
	});


	var checkNumVald = function (inpNu) {
		var patt = new RegExp(/^[0-9]+$/);
		return patt.test(inpNu);
		//숫자이면 true
	}
	var checkTxtVald = function (inpTx) {
		var patt = new RegExp(/^[가-힣a-zA-Z]+$/);
		return patt.test(inpTx);
		//문자일때 true
	}
	var checkSpacVald = function (inp) {
		var patt = new RegExp(/^\s+|\s+$/g);
		return patt.test(inp);
		//스페이스가 잇을때 true
	}

	$('.pay-detail').find('.input-base').each(function () {
		$('.feedback-empty').hide();
		$('.feedback-impos').hide();
		$(this).on('keyup', function () {
			var inpVal = $(this).val();
			console.log(inpVal);
			if ($(this).parent('.input-area').hasClass('owner-name')) {
				if (checkTxtVald(inpVal)) { //문자일때 true 
					$(this).css({ borderColor: '#cacdd4' });
					$('.feedback-empty').hide();
					$('.feedback-impos').hide();
					if (checkSpacVald(inpVal)) {
						$(this).css({ borderColor: '#e08000' });
						$('.feedback-empty').show();
					}	
				} else {
					$(this).css({ borderColor: 'e08000' });
					$('.feedback-impos').show();
				}
			} else {
				if (checkNuMVald(inpVal)) {//숫자이면 true
					$(this).css({ borderColor: '#cacdd4' });
					$('.feedback-empty').hide();
					$('.feedback-impos').hide();
					if (checkSpacVald(inpVal)) {
						$(this).css({ borderColor: '#e66006' });
						$('.feedback-empty').show();
					}
				} else {
					$(this).css({ borderColor: Ilte08006 });
					$('.feedback-impos').show();
				}
			}
		});
	});
})(jQuery);