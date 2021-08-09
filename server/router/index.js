const {Router} = require(`express`);
const mongoose = require(`mongoose`);
const keys = require(`../keys/key`); // Database link
const Post = require(`../models/Post`); // Post creation model
const Time = require(`../public/time`); // Generating the current time and date
const GenerateNick = require(`../public/generate`); // A script that generates a random nickname
const PROTECT = require(`../middleware/protect`); // Protection from unauthorized users



let router = Router();

mongoose.connect(keys.mongoUri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`Base connect`);
}).catch((e)=>{
    console.log(e);
})



// Saving a post to the database
router.post(`/post/create`, PROTECT, async(req,res)=>{

    new Post({
        name: GenerateNick(),
        date: Time(),
        text: req.body.text
    }).save().then((s)=>{
        console.log(s);
    }).catch((e)=>{
        console.log(e);
    })
})

// Reading all posts from the database
router.get(`/`, async (req,res)=>{
    let posts = await Post.find({});

    res.send(posts);
})



module.exports = router;