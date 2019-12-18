

(function($){
 const btn = $('.btn');
 const nextBtn = btn.children('.next');
 const hello = $('.hello');
 const goodBye = $('.goodbye');

 nextBtn.on('click',function(){
 	hello.toggle();
 	goodBye.toggle();
 });


})(jQuery);