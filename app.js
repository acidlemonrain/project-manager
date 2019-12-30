
const express = require('express')
const app = express()


let total = 0 ;
let today = 0 ;

setInterval(() => {
    today = 0
}, 1000*60*60*24);

app.get('/server',()=>{
    today++;
    total++
})

app.get('/',(req,res)=>{
    res.json({
        today:today,
        total:total
    })
})

app.listen(7777)