const mongoose = require('mongoose')
const validator = require('validator')

const ReportSchema = new mongoose.Schema({  
    report:{
        type: Array
    }
})

const Report = mongoose.model('Report', ReportSchema)
module.exports = Report