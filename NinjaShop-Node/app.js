const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const {login} = require('./controllers/login');
const {categoryList} = require('./controllers/categories');
const {addOrder} = require('./controllers/order');
const {productsList} = require('./controllers/products');
const {authorization} = require('./controllers/authorization');


const app = new Koa();
app.use(cors());
app.use(require('koa-bodyparser')());

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err.status) {
            ctx.status = err.status;
            ctx.body = {error: err.message};
        } else {
            console.log(err);
            ctx.status = 500;
            ctx.body = {error: 'Internal server error'};
        }
    }

});

const router = new Router({prefix: '/api'});

router.get('/products', authorization, productsList);
router.get('/categories', authorization, categoryList);
router.post('/login', login);
router.post('/order', authorization, addOrder);

app.use(router.routes());


module.exports = app;