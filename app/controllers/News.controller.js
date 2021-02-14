const News = require('../models/News.model');
exports.create=(req,res)=>{

};
exports.findAll=(req,res)=>{
        News.getAll((err, data) => {
          if (err){
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving news."
            });}
          else res.json(data);
        });

};