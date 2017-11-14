   $(function(){
        $('[data-toggle="tooletip"]').tooltip()
    });
    $(function(){
            var $input=$('[data-search="search"]');
            function search(){
                var keyword=$input.val();
                var $warn=$("[data-search='warn']")
                console.log($warn);
                if($input.val()!=null){
                    $.get("data/search.php",{kw:keyword})
                        .then(function(data){
                            console.log(data);
                            if(data.code==1){
                                $input.attr("value","");
                                sessionStorage.setItem("sid",data.sid);
                                location.href="college.html";
                            }
                            else
                                $warn.html(data.msg);
                        })
                }
            }
        $input.keydown(function(e){
            var keyCode=e.keyCode ? e.keyCode : e.which ? e.which : e.charCode; 
            if(keyCode==13){
                search();
            }
        });
      
    })