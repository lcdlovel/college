/**
 * Created by web-01 on 2017/10/18.
 */
$(function(){
    var $login= $('[data-toggle="login"]'),
        $register=$('[data-toggle="register"]');
    var text=sessionStorage.getItem("chose");
    var span=$('[data-click="click"]').children().children();
    function changeColor(e) {
        e.addClass("selected");
        e.parent().siblings().children()
            .removeClass("selected");
    }
    if(text!=null){
        if (text=="登录"){
            $login.show();
            $register.hide();
        }else{
            $login.hide();
            $register.show();
        }
    }
    for(var i=0;i<span.length;i++){
        var obj=$(span[i]);
        if($(span[i]).text()==text){
            changeColor(obj);
        }
    }
    sessionStorage.clear();
   $('[data-click="click"]').on("click","span",function (e){
      var e=$(e.target);
       e.addClass("selected");
        e.parent().siblings().children()
           .removeClass("selected");
       if (e.text()=="登录"){
           $login.show();
           $register.hide();
       }else{
           $login.hide();
           $register.show();
       }
   })
});

//登录部分
$(function () {
    $('[data-login="btn"]').click(function () {

        var uname=$('[name="uname"]').val();
        var upwd=$('[name="upwd"]').val();

        if(uname!=""){
            if(upwd!=""){
                $.get("data/login.php",{phone:uname,upwd:upwd})
                    .then(function (data) {
                        if(data.istrue){
                            if(data.row!=null) {
                                sessionStorage['name'] = data.row['uname'];
                                $('[data-warn="upwd"]').hide();
                                location.href = "college_list.html";
                            }else{
                                $('[data-warn="upwd"]').show();
                            }
                        }
                    })
            }else{
                $('[data-warn="upwd"]').show();
            }
        }

    })
});

//注册部分
$(function()  {
    var uname=$('[data-form="name"]'),
        upwd=$('[data-form="upwd"]'),
        phone=$('[data-form="phone"]');
    var patternUpwd=/^[a-zA-Z]\w{5,17}/;
    var patternPhone=/^1[3|4|5|8][0-9]\d{4,8}$/;
    var $register=$('[data-toggle="register"]');
    var $login= $('[data-toggle="login"]');
    var $show=$('[data-show="login"]');
    function unameText(){
            $.post("data/text.php",{uname:uname.val()}, (data)=>{
                if(data.istrue){
                    uname.next().show();
                }else{
                    console.log("可注册");
                    uname.next().hide();
                }
            });
        }
    function phoneText(){

        var text1=patternPhone.test(phone.val());
        if(text1){
            $.post("data/textPhone.php",{phone:phone.val()})
                .then((data)=>{
                    if(data.istrue){
                        phone.next().show();
                    }else{
                        phone.next().hide();
                    }
                });
        }else{
              phone.next().show();
        }
    }
    function upwdText(){
        var text2=patternUpwd.test(upwd.val());
        if(text2){
            upwd.next().hide();
            return true;
        }else{
            upwd.next().show();
            return false;
        }
    }

    uname.blur(function(){
        unameText()
    });
    phone.blur(function(){
        phoneText();
    });
    upwd.blur(function(){
        upwdText()
    });

    $('[data-toggle="register"]').on("click","button",function(){
        if(uname.val()!="") {
            if (phone.val()!= ""){
                if(upwd.val()!=""){
										
		                $show.addClass("selected");
                    $show.parent().siblings().children()
                        .removeClass("selected");
                    $login.show();
                    $register.hide();
                    $.post("data/register.php",
											{uname:uname.val(),upwd:upwd.val(),phone:phone.val()});
										uname[0].value="";
										upwd[0].value="";
										phone[0].value="";
                }
            }
        }
    })
});