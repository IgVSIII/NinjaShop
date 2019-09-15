const uuid = require('uuid/v4');
const passport = require('../libs/passport');
const sessions = require('../sessions');


module.exports.login = async function login(ctx, next) {
    await passport.authenticate('local', async(err, user, info) => {
        if (err) throw err;

        if (!user) {
            ctx.status = 400;
            ctx.body = {error: info};
            return;
        }

        const token = uuid();
        sessions[token] = user;

        ctx.body = {token};
    })(ctx, next);
};