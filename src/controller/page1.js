
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
            <p><span>${dataArr[1]}</span><span>${dataArr[2]}</span>。</p>
            <p>测试过程中发现的问题:<span">${dataArr[3]}</span></p>
            <p>测试说明：<span">${dataArr[4]}</span></p>
            <p>测试内容：${dataArr[5]}</p>
        `
        $('.pop').html(template);
    }

    function init() {
        var isShow = false;
        $('.preButton').on('click',function(){
            if (!isShow) {
                isShow = !isShow;
                $('.pop').show();
                getData();
                render(dataArr);

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