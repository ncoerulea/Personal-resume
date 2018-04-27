function index(){
    var imgPlay = $('.imgPlay');
    var imgWidth = $('.imgPlay').width();
    var length = $('.imgPlay ul li').length;
    var imgPageX = $('.imgPlay').position().left;
    var move = imgWidth/length;
    var num = 0;
    init();
    function init(){
        var timer = setInterval(auto,3000)
        function auto(){
            if(num >= length - 1){
                clearInterval(timer);
                num = 0;
                $('.imgPlay').css({'left':0});
                timer = setInterval(auto,3000);
            }
            num++;
            $('.imgPlay').animate({
                left:'-=7.5rem'
            },500)
        }
    }
}
index();
$(document).ready(function(){
    $(window).scroll(function(){
        var topp = $(document).scrollTop();
        if(topp > 100 & topp < 700){
            $('.skillBox div:eq(0)').addClass('ps');
            $('.skillBox div:eq(1)').addClass('ai');
            $('.skillBox div:eq(2)').addClass('cdr');
            $('.skillBox div:eq(3)').addClass('html');
            $('.skillBox div:eq(4)').addClass('css');
            $('.skillBox div:eq(5)').addClass('js');
        }else{
            $('.skillBox div:eq(0)').removeClass('ps');
            $('.skillBox div:eq(1)').removeClass('ai');
            $('.skillBox div:eq(2)').removeClass('cdr');
            $('.skillBox div:eq(3)').removeClass('html');
            $('.skillBox div:eq(4)').removeClass('css');
            $('.skillBox div:eq(5)').removeClass('js');
        }
    })
})