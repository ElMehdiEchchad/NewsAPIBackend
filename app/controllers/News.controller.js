const News = require('../models/News.model');
//Post
exports.create=(req,res)=>{
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create news
  const news = new News({
    title: req.body.title,
    content: req.body.content
  });
  
  // Save news in the database
  News.create(news, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the news."
      });
    else {
      res.send(data);}
  });

};
//getAll
exports.findAll=(req,res)=>{
      const page=req.query.page;
      const limit=req.query.limit;
      const startIndex=(page-1)*limit;
      const endIndex= (page)*limit;

        News.getAll((err, data) => {
          if (err){
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving news."
            });}
          
          else {
            res.send(data);
          }
        });

};
//getNews By id
exports.findOne = (req, res) => {
  News.findById(req.params.NewsId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found News with id ${req.params.NewsId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving News with id " + req.params.NewsId
        });
      }
    } else res.send(data);
  });
};
//delete all news
exports.deleteAll = (req, res) => {
  News.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all news."
      });
    else res.send({ message: `All news were deleted successfully!` });
  });
};
exports.delete = (req, res) => {
  News.remove(req.params.NewsId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found news with id ${req.params.News}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete news with id " + req.params.NewsId
        });
      }
    } else res.send({ message: `news with id`+ req.params.NewsId+` deleted successfully!` });
  });
};
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  News.updateById(
    req.params.NewsId,
    new News(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found news with id ${req.params.NewsId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.NewsId
          });
        }
      } else res.send(data);
    }
  );
};
