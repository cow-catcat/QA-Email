const $ = require('jquery');
const test = (() => {

    const _opt = {
        el: '.data'
    }
    let $el = $(_opt.el); // array
    let dataArr = [];

    function getData() {
        $el.each((index, item) => {
            dataArr.push($(item).val());
        });
    }

    function render(dataArr) {
        let template = `
            <h1>${dataArr[0]}</h1>
            <p>${dataArr[1]}</p>
            <ul>
                <li>${dataArr[2]}</li>
                <li>${dataArr[3]}</li>
                <li>${dataArr[4]}</li>
            </ul>
        `
        $('#app').html(template);
    }

    function init() {        
        $('#btn').on('click', () => {
            getData();
            // console.log(dataArr);
            render(dataArr);
        });
    }

    return {
        init: init
    }
})();

module.exports = test;