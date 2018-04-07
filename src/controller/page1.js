
var $=require('jquery');

var page1=(function(){
    function init() {
        var isShow = false;
        $('.preButton').on('click',function(){
            if (!isShow) {
                isShow = !isShow;
                $('.win').show();
            }else if (isShow) {
                isShow = !isShow;
                $('.win').hide();
            }
        });
    }
    return {
        init: init
    }
})();
// page1.init()
module.exports = page1;