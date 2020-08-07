module.exports = () => {
    return async function changType(ctx, next) {
        next();
        ctx.body = {
            data: Object.assign({}, ctx.body),
            success: true,
        };
    };
};
