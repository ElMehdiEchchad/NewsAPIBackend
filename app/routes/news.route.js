module.exports = app => {
    const News = require("../controllers/News.controller.js");
  
    // Create a new Customer
   app.post("/news", News.create);
   //get all news
   app.get("/news",News.findAll);

   
  // app.get("/news/:NewsId",News.findById);
   


}