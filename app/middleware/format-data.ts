export default () => {
    return async function formatData(ctx, next) {
        await next();
        ctx.body = {
            data: Object.assign([], ctx.body),
            succ: true
        };
    };
};
