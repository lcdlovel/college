/**
 * Created by web-01 on 2017/10/18.
 */
$(function () {
    $('[data-login="chose"]').on("click","a",function (e) {
        e.preventDefault();
        var text=$(e.target).text();
        sessionStorage.setItem("chose",text);
        location.href="login.html"
    })
});
$(function () {
    var name=sessionStorage.getItem("name");
    if(name!=null){
        var html=`<li>
                    <a href="javascript:;">欢迎回来，${name}</a>
                  </li>
                  <li><a href="javascript:;">退出登录</a></li>`;
        $('[data-login="chose"]').html(html);
    }
});
