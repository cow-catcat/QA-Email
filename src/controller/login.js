
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
    function checkUser(user) {
        var user = $user.val();
        if (user === undefined || user === "") {
            $tip1.show();
            return user;
        }
        var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@sina.com$/;
        var flag = reg.test(user);

        if (!flag) {
            $tip1.show();
        }else {
            $tip1.hide();
            return password;
        }
    }

//用户密码
    function checkPwd(password) {
        var password = $pwd.val();
        if (password === undefined || password === "") {
            $tip2.show();
            // console.log('123');
            return;//退出函数
           
        } else{  
            // console.log('hi');  
            return true; 
        }         
     }

//都成立时进行判断
    function checkAll(password,user){
        var user = $user.val();
        var password = $pwd.val();
        console.log('pig');
        if(checkPwd(password)&&checkUser(user)){
            
                $.ajax({
                    type:'post', 
                    url:'../login.php',
                    data:{
                        user:checkUser(),
                        password:checkPwd()
                    }, 
                    dataType:'json',
                    success:function(data){     
                      alert('success');
                    },
                    error:function(){
                      alert("请求失败");
                    }
                   })
                //    console.log("a");
            }  
        }

//init 开始;监听
    function init(){
        $user.on('blur', function () {
            checkUser(user);
        });
        $pwd.on('blur',function(){
            checkPwd(password);
        });
        $('.button').on('click',function(){
            // console.log('love');
            checkAll(user,password);
        });
}

return {
    init: init
}

})(); 

module.exports = check;


// $.ajax({
//     url:Url,
//     data:{checkname:enco,categoryId:cateId},//传入后台的两组数组数据值,根据个人需求传值
//     type:"get",
//     traditional:true,
//     success : function(data){
//          eval("var mydata="+data);
//           $.each(mydata,function(i,item)
