var login = require('./controller/login.js');
var page1 = require('./controller/page1.js')
require('./views/login.less');
require('./views/page1.less');
page1.init();
login.init();


