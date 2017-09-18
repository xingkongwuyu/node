//util.inherits
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);
//base
//Hello base
//{ name: 'base', base: 1991, sayHello: [Function] }
//sub
//{ name: 'sub' }
//Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
//同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。如果我们去掉 objSub.sayHello(); 这行的注释，将会看到：
//util.inspect
var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
//Person { name: 'byvoid', toString: [Function] }
/*
Person {
    name: 'byvoid',
        toString:
    { [Function]
        [length]: 0,
        [name]: '',
        [arguments]: null,
        [caller]: null,
        [prototype]: { [constructor]: [Circular] } } }
*/
//util.isArray
var util = require('util');

util.isArray([])
// true
util.isArray(new Array)
// true
util.isArray({})
// false
//util.isRegExp(object)
//util.isDate(object)
//util.isError(object)
var util = require('util');

util.isError(new Error())
// true
util.isError(new TypeError())
// true
util.isError({ name: 'Error', message: 'an error occurred' })
// false