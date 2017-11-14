/**
 * Created by web-01 on 2017/10/17.
 */
$('body').scrollspy({ target: '#navbar-example' });
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});

//渲染轮播图部分
$(function(){
    var $banner=$("[data-toggle='banner']"),
        sid=sessionStorage.getItem("sid");
    function innerHtml(para1){
        $.get("data/banner.php",{sid:para1})
            .then(function(data){
                var html="";
                for(var tmp in data){
                    html+=`
                        <img src="${data[tmp]}" alt="">
                        `;
                }
                $banner.html(html);
            })
    }
    if(sid!=null){
        innerHtml(sid);
    }else{
        innerHtml(1);
    }
});
//轮播图效果的实现
$(function(){
    var index=0;
    setInterval(function(){
        var $img=$(".main>img:eq("+index+")");
        if(index<=3){
            $img.fadeIn("slow");
            $img.siblings().fadeOut("slow");
        }
        index++;
        if(index>3){
            index=0;
        }
    },3000)
})