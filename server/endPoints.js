const { index } = require('./index');

const endPoints = (router) => {
    router.get('/cur', cur_fib);
    router.get('/next', next_fib);
    router.post('/begin', begin);

    return router;
}

const cur_fib = async (req, res) => {
    let fibs = index.fib;
    let result = index.cur_fib(fibs-1);
    res.json(result);
}

const next_fib = async (req, res) => {
    let fibs = index.fib;
    let result = index.get_fib(fibs);
    res.json(result);
}

const begin = async (req, res) => {
    index.set_fib();
    res.status(200);
}

module.exports = endPoints;