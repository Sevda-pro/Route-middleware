const express = require('express');
const app = express();
const middleware= require('./middleware');



app.get('/', middleware,(res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});

app.get('/about', (res, resp) => {
    resp.send('Welcome to About page')
});
app.get('/contact', (res, resp) => {
    resp.send('Welcome to contact page')
});


app.get("*",(req,res)=>{
    res.status(404).send("page not found");
})

app.listen(5000)