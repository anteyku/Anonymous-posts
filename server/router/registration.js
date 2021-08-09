let {Router} = require(`express`);
const User = require(`../models/User`);
const bcrypt = require(`bcrypt`);
const nodemailer = require(`nodemailer`);
const sendMail = require(`../emails/sendMail`);
const crypto = require(`crypto`);
let router = Router();

let transporter = nodemailer.createTransport({
    service: `gmail`,
    auth: {
        user: `annaparmizanova@gmail.com`,
        pass: `N/DXOuwa~KzHjj4NfVI1i~UGki?DzWbkgU0KHetBUZ#fh$1gxsGU3rs"RY~r`
    }
})


// Account confirmation in the database when switching from mail
router.get(`/:token/accept`, async (req,res)=>{
    if (!req.params.token) {
        return;
    }

    // Token validation
    let check = await User.findOne({
        resetActive: req.params.token,
        resetActiveExp: {$gt: Date.now()}
    })




    if(check){
        check.resetActive = undefined;
        check.resetActiveExp = undefined;
        check.active = true;

        await check.save();
        console.log(`Succesful confirm account`);
    }


})


// Post request creating user
router.post(`/`, async (req,res)=>{
    req.body.password = await bcrypt.hash(req.body.password, 10);

    // Checking for the existence of the entered email in the database
    let user = await User.findOne({email: req.body.email});


    if(user){
        res.send(`User with this email already exists`);
    } else {

        new User({
            email: req.body.email,
            password: req.body.password
        }).save().then((s)=>{
            console.log(s);
        }).catch((e)=>{
            console.log(e);
        })


        // Generating a token and sending it to the mail to confirm the account
        crypto.randomBytes(32, async(err, buffer)=>{

            let token = buffer.toString(`hex`);

            let user = await User.findOne({email: req.body.email});

            user.resetActive = token;
            user.resetActiveExp = Date.now() + 60 * 60 * 1000;

            await user.save();

            await transporter.sendMail(sendMail(req.body.email, token))

        })

    }



})

module.exports = router;