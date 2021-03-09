const { response, request } = require('express');
var express= require('express');
const bodyParser=require('body-parser');

const app=express();//initializing the express app
//Sending headers to the client and surpass the cors limitations
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5050, http://localhost:8089'); //here to be added the right frontend link, for more security. 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //use application/json type


//cors limitation 
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