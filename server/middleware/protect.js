// To leave a post, you need to log in to your account
module.exports = function (req,res,next){
    if(!req.session.accept){
        res.send(`To leave a post, you need to log in to your account`);
        console.log(`dont session`);
        return;
    }

    next();
}