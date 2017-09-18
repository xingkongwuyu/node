/**
 * Created by yhg97p on 2017/8/22.
 */
console.log(__filename)
console.log(__dirname)
function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t =setTimeout(printHello, 2000);
clearTimeout(t);
process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");