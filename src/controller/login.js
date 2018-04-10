var $=require('jquery');
var check = (function () {

    var $tip1 = $('#tip1');
    var $tip2 = $('#tip2');
    var $user = $('#user');
    var $pwd = $('#password');

// 阻止页面跳转
$(".button").click(function(event){
    event.preventDefault();
  });

//用户账号
    function checkUser() {
        var user = $user.val();
        if (user === undefined || user === "") {
            $tip1.show();
            return ;
        }
        var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@sina.cn$/;
        var flag = reg.test(user);

        if (!flag) {
            $tip1.show();
        }else {
            $tip1.hide();
            return user;
        }
    }

//用户密码
    function checkPwd() {
        var password = $pwd.val();
        if (password === undefined || password === "") {
            $tip2.show();
            console.log('123');
            return ;//退出函数
           
        } else{  
            console.log('hi');  
            return password; 
        }         
     }

//都成立时进行判断
    function checkAll(){
        // var user = $user.val();
        // var password = $pwd.val();
        // console.log('pig');
        if(checkPwd()&&checkUser()){
                $.ajax({
                    type:'POST', 
                    url:'../login.php',
                    data:{
                        user:checkUser(),
                        password:checkPwd()
                    }, 
                    // dataType:'json',
                    success:function(data){     
                      alert('success');
                    },
                    error:function(){
                      alert("请求失败");
                    }
                   })
                   console.log("a");
            }  
        }

//init 开始;监听
    function init(){
        $user.on('blur', function () {
            checkUser();
        });
        $pwd.on('blur',function(){
            checkPwd();
        });
        $('.button').on('click',function(){
            // console.log('love');
            checkAll();
        });
}

return {
    init: init
}

})(); 

module.exports = check;


