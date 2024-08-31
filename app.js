const express= require('express')
const morgan= require('morgan')
const mongoose= require('mongoose')


const login_signup= requiregit('./models/login_signup');
const SignUpschema = require('./models/login_signup');
const { result } = require('lodash');
// var UserModel = mongoose.model('User', login_signup);
const UserModel = require('./models/login_signup');
const path = require('path')

const app = express()

// const dbURI= 'mongodb+srv://Chinmay:test1234@cluster0.s3maqiv.mongodb.net/?retryWrites=true&w=majority'
const dbURI= 'mongodb+srv://ratneshdubey:ratnesh@cluster0.vj5w2ea.mongodb.net/'

mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true} )
    .then((result)=>{
        console.log("connected")
    })
    .catch((err)=>console.log(err))
 
app.set('view engine', 'ejs');
// let path= './views/';
// app.use(express.static("public"));
app.use(express.json());
 app.use(morgan('dev'));
 app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    // path += 'login.html'
    console.log('ruinning')
    res.render('login.ejs')
})

app.post('/',async(req,res)=>{

    try{
        const check=await UserModel.findOne({name:req.body.name})
        
        if(check.password===req.body.password){
            res.render('index')
            console.log("done")
        }
        else{
            res.send("Wrong Password")
        }
    }
    catch{
        res.send("wrong details")
    }
})


app.post('/signup',async(req,res)=>{
    const data={
        username:req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirm_pass: req.body.confirm_pass
    }

    try {
        // Create a new user document using the UserModel and save it to the database
        const user = new UserModel(data);
        await user.save();

        res.render('index');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating user");
    }
    // await login_signup.insertMany([SignUpschema])
    // res.render("index")
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.get('/quizz1',(req,res)=>{
    res.render('quizz1')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.get('/analysis',(req,res)=>{
    res.render('analysis')
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.get('/game2',(req,res)=>{
    res.render('game2')
})
app.get('/select',(req,res)=>{
    res.render('select')
})
app.get('/info',(req,res)=>{
    res.render('info')
})

app.use((req,res)=>{
    res.status(404).render('404')
})
app.listen(5000,'localhost',()=>{
    console.log('listening on port 5000');
})