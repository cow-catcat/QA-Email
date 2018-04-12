
var $=require('jquery');

//array
var page1=(function(){
    const _opt={
        element:'.dataItem'
    }
    let $element = $(_opt.element);
    let dataArr=[];
    function getData(){
        // console.log('hi');
        $element.each(function(index,item){
            dataArr.push($(item).val());
        });  
    }

//渲染
    function render(dataArr){
        let template = `
            <div class="item title">
                <div class="titlePic"></div>
                <span><div class="btitle">Title title title</div></span>
            </div>
            <div class="item sayhello">
                <div class="fonts titleFonts">Dear all,</div>
                <div>
                    <p>xxxx在xxxx环境测试已完成，详见以下内容。</p>
                </div>
            </div>

            <div class="item conclusion">
                <div class="titleFonts">测试结论</div>
                <p>xxxx在xxx环境中测试通过。</p>
            </div>

            <div class="item unsolve">
                <div class="titleFonts">遗留问题</div>
                <div class="unContent"></div>
            </div>
            <div class="item shuoming">
                <div class="titleFonts">测试说明</div>
                <div class="testsm"></div>
            </div>
            <div class="item jianrong">
                <div class="titleFonts">兼容性测试</div>
                <div class="jrContent"></div>
            </div>
            <div class="item content">
                <div class="titleFonts">测试内容</div>
                <div class="testContent"></div>
            </div>
        `
        $('.popContent').html(template);
    }

//发送
    function send(){
        $('.submitBtn').on('click',function(){
            $.ajax({
                type:'post', 
                url:'../sendemail.php',
                data:{  
                    render:render(dataArr)
                }, 
                // dataType:'json',
                success:function(){ 
                    if(retcode=="true"){
                        $('.showtips').html(message);
                    }else{
                        $('.showtips').html(message);
                    }
                },
                error:function(){
                alert("请求失败");
                }
            })
        }
        )
    }


    function init() {
        var isShow = false;
        $('.preButton').on('click',function(){
            if (!isShow) {
                isShow = !isShow;
                $('.pop').show();
                getData();
                render(dataArr);
                send();

            }else if (isShow) {
                isShow = !isShow;
                $('.pop').hide();
            }
        });
    }
    return {
        init: init
    }
})();
// page1.init()
module.exports = page1;