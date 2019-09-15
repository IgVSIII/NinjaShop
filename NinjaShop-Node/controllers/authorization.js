const sessions = require('../sessions');


module.exports.authorization = async function authorization(ctx, next) {
    const {token} = ctx.query;
    if (!token) {
        ctx.throw(401, 'Unauthorized');
    }

    if (!sessions[token]) {
        ctx.throw(401, 'Incorrect or old token id');
    } else {
        return next();
    }


};