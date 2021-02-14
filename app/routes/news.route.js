module.exports = app => {
    const News = require("../controllers/News.controller.js");
  
  // Create a news entry [C]
   app.post("/news", News.create);
   //get all news [R]
   app.get("/news",News.findAll);
  //get News By id [R]
   app.get("/news/:NewsId",News.findOne);
  //update news [U]
  app.put("/news/:NewsId",News.update);
   //delete all news [D]
  app.delete("/news",News.deleteAll);
   //delete by id as parameter [D]
   app.delete("/news/:NewsId",News.delete);
   
}