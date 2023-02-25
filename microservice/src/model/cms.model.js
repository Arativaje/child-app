const mongoose = require('mongoose');

const cmsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    }
});

module.export = mongoose.model("cms",cmsSchema);