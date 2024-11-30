//entry表示需编译的文件，output表示产出文件
const path = require('path');
module.exports = {
    entry:'./src/main.js',
    output:{
        //动态获取路径
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}