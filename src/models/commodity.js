const mongoose = require('mongoose')
const validator = require('validator')

const CommoditySchema = new mongoose.Schema({  
    userID:{
        type: String,
        required: true,
        trim: true
    },
    marketID:{
        type: String,
        required: true,
        trim: true
    },
    marketName:{
        type: String,
        required: true,
        trim: true
    },
    cmdtyID:{
        type: String,
        required: true,
        trim: true,
    },
    marketType:{
        type: String,
        required: true,
        trim: true
    },
    cmdtyName:{
        type: String,
        required: true,
        trim: true
    },
    priceUnit:{
        type: String,
        required: true
    },
    convFctr:{
        type: Number,
        required: true
    },
    minPrice:{
        type: Number,
        required: true
    },
    maxPrice:{
        type: Number,
        required: true
    }    
})

const Commodity = mongoose.model('Commodity', CommoditySchema)
module.exports = Commodity