



(function($){
const sns = $(".sns");
const snsinput = sns.find('input');
const snsLink = sns.find('a');
const btn = $('.btn').find('a');

// console.log('haha')
snsinput.on("click",function(){
	let href = $(this).next('a').attr('href');
	console.log(href);
	btn.attr('href',href);
	let btnhref = btn.attr('href');
	console.log(btnhref);
});


})(jQuery);