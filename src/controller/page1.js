
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
            <p>Dear all,</p>
            <p><span>${dataArr[0]}</span>测试已完成，详见以下内容:</p>
            <p>测试结论：<span>${dataArr[1]}</span></p>
            <p>测试过程中发现的问题:<span>${dataArr[2]}</span></p>
            <p>测试说明：<span">${dataArr[3]}</span></p>
            <p>测试内容：${dataArr[4]}</p>
            <button class="submitBtn">提交</button>
        `
        $('.pop').html(template);
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
                success:function(data){     
                alert('success');
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