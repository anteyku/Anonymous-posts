const express = require('express');
const Index = require(`./router/index`); // Home page
const Auth = require(`./router/auth`); // Auth form
const Registration = require(`./router/registration`); // Registration form
const session = require(`express-session`);
const MongoStore = require(`connect-mongodb-session`)(session);
const keys = require(`./keys/key`);


let cors = require("cors");
let app = express();
let store = new MongoStore({
    collection: `sessions`, // Названия базы данных с сессиями
    uri: keys.mongoUri // Ссылка на нашу базу данных mongoDB
})


app.use(cors({"origin": "*"}));
app.use(express.static(`public`));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: keys.secret,
    resave: false,
    saveUninitialized: false,
    store: store
}))



app.use(`/`, Index); // Router from home page
app.use(`/auth`, Auth); // Auth-form authorization
app.use(`/registration`, Registration); // Registration-form




app.listen(5000, ()=>{
    console.log(`Sever Started`);
})




