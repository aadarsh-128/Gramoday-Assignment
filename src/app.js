const express = require('express')
require('./db/mongoose')

const Commodity = require('./models/commodity')
const Report = require('./models/report')
const app = express()

app.use(express.json())

// Routes
app.post('/reports', (req,res)=>{
    const comm = new Commodity(req.body)

    comm.save().then(()=>{
        res.send({"status":"Sucess", "reportID": comm._id })
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get('/reports/:id', (req,res)=>{
    Commodity.find({cmdtyID : req.params.id}).then((report)=>{
        if(!report){
            return res.status(404).send()
        }
        let response = new Array()
        let map = new Map()
        for(let i=0; i<report.length; i++){
            let temp={
                "cmdtyName":report[i].cmdtyName,
                "cmdtyID":report[i].cmdtyID,
                "marketID":report[i].marketID,
                "marketName":report[i].marketName,
                "users": [report[i].userID],
                "timestamp":new Date(),
                "priceUnit":"Kg",
                "minPrice":report[i].minPrice/report[i].convFctr,
                "maxPrice":report[i].maxPrice/= report[i].convFctr
            }
            
            if(!map.get(temp.marketID)){
                map.set(temp.marketID, temp)
            }else{
                map.get(temp.marketID).users.push(temp.users[0])
                map.get(temp.marketID).minPrice = (map.get(temp.marketID).minPrice+temp.minPrice)/2
                map.get(temp.marketID).maxPrice = (map.get(temp.marketID).maxPrice+temp.maxPrice)/2 
            }        
        }
        
        for (const [key, value] of map) {
            response.push(value)
        }
        const repo = new Report({"report":response})
        repo.save().then((data)=>{
            res.send(data)
        }).catch((e)=>{
            res.status(500).send()
        })
    }).catch((e)=>{
        console.log(e)
        res.status(500).send()
    })
})

// Listining to the server
app.listen(3000, ()=>{
    console.log("Server is up on port 3000")
})
module.exports = app