/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var login = __webpack_require__(10);
__webpack_require__(8);

login.init();

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var check = function () {

    var $tip1 = $('#tip1');
    var $tip2 = $('#tip2');
    var $user = $('#user');
    var $pwd = $('#password');

    // 阻止页面跳转
    $(".button").click(function (event) {
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
        } else {
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
            return; //退出函数
        } else {
            // console.log('hi');  
            return true;
        }
    }

    //都成立时进行判断
    function checkAll(password, user) {
        var user = $user.val();
        var password = $pwd.val();
        console.log('pig');
        if (checkPwd(password) && checkUser(user)) {

            $.ajax({
                type: 'post',
                url: '../login.php',
                data: {
                    user: checkUser(),
                    password: checkPwd()
                },
                dataType: 'json',
                success: function success(data) {
                    alert('success');
                },
                error: function error() {
                    alert("请求失败");
                }
            });
            //    console.log("a");
        }
    }

    //init 开始;监听
    function init() {
        $user.on('blur', function () {
            checkUser(user);
        });
        $pwd.on('blur', function () {
            checkPwd(password);
        });
        $('.button').on('click', function () {
            // console.log('love');
            checkAll(user, password);
        });
    }

    return {
        init: init
    };
}();

module.exports = check;

// $.ajax({
//     url:Url,
//     data:{checkname:enco,categoryId:cateId},//传入后台的两组数组数据值,根据个人需求传值
//     type:"get",
//     traditional:true,
//     success : function(data){
//          eval("var mydata="+data);
//           $.each(mydata,function(i,item)

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });