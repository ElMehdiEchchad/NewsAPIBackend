const { response, request } = require('express');
var express= require('express');
const bodyParser=require('body-parser');

const app=express();//initializing the express app

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //use application/json type

//processing the get actions

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });



app.get('/test',(request,response)=>{
    //the difference between resp.json and resp.send is that the second one 
    //sets the content sent to the client as text/html, and the res.json
    //sets it to json 
        response.json(
            {
                test:"test"
            }
        )}

);

//processing the post actions


require("./app/routes/news.route.js")(app);

app.listen(process.env.PORT || 5000 ,()=>console.log('server started '));