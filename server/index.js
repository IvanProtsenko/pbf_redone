//let index = require('./build/Release/index.node');
let index = require('bindings')('index');
let fib = 1;

function cur_fib(next) {
    let next_num = index.get(next);
    return next_num;
}

function get_fib(next) {
    this.fib++;
    let next_num = index.get(next);
    return next_num;
}

function set_fib() {
    this.fib = 1;
}

exports.index = {
    fib,
    cur_fib,
    get_fib,
    set_fib
};