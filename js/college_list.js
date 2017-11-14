$(function(){
    $('[data-cut="btn"]').click(function(){
       var $cut= $('[data-cut="cut"]');
       if($cut.css("display")=="block"){
           $cut.hide()
       }else{
           $cut.show()
       }
    });
    $('[data-cut="cut"]').on("click","span",function(e){
        e.preventDefault();
        $(e.target).addClass("act")
        .siblings().removeClass("act");
        if($(e.target).text()=="开"){
            $("body").css({"background-color":"black"});
            $('[data-abstract="abstruct"]').css("color","#C8C8C8")
        }else{
            $("body").css({"background-color":"#fff"});
            $('[data-abstract="abstruct"]').css("color","#000")
        }
    });
    $('[data-search="search"]').focus(function(){
        $(this).css("width",250);
        $("[data-search='cue']").css("visibility","visible");
    });
    $('[data-search="form"]').on("click","li",function(e){
        console.log(1);
        var $input=$('[data-search="search"]');
        var keyword=$(e.target).text();
        $.get("data/search.php",{kw:keyword})
            .then(function(data){
                $input.attr("value","");
                sessionStorage.setItem("sid",data.sid);
                location.href="college.html";
            })
    });
    $('[data-search="search"]') .blur(function(){
        $(this).css("width",180);
        setTimeout(function(){
            $("[data-search='cue']").css("visibility","hidden");
        },500);
    });
    function move(e,n,max) {
        if(n<max){
            e.css({"top":-n*214,"transition": "all .2s linear"});
        };
        if(n==max){
            e.css({"top":-max*210,"transition": "all .2s linear"});
            setTimeout(function () {
                setTimeout(function () {
                    e.css({"transition":""})
                },200);
                e.css({"top":0,"transition":""});
            },500)
        }
    };
    var $banner=$('[data-banner="banner"]');
    var n=0;
    setInterval(function () {
        move($banner,n,9);
        n++;
        if(n==10){
            n=0;
        }
    },2000)
});
$(function () {
   var cue=$('[data-search="cue"]');
   var offset=cue.offset();
   console.log(offset.top);
   console.log(offset.left);
   var width=cue.css("width");
   var height=cue.css("height");


});