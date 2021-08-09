let {Router} = require(`express`);
const User = require(`../models/User`);
const bcrypt = require(`bcrypt`);
let router = Router();

router.get(`/`, function(req,res){
    console.log(`Page auth loading`);
});


// Issuing a session to an authorized user
router.post(`/login`, async (req,res)=>{

    let check = await User.findOne({
        email: req.body.email,
    })

    if(check){
        let pass = await bcrypt.compare(req.body.password, check.password);

        if(pass){
            req.session.accept = true;
            req.session.user = check;
            req.session.save(()=>{
                console.log(`Session authorization succesful`);
            })

        } else {
            res.send(`Wrong login or password`);
            return;
        }
    } else {
        res.send(`Wrong login or password`);
        return;
    }
})

module.exports = router;