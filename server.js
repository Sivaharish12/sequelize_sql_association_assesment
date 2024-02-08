const express=require('express')
const app=express()
const db=require('./models/index')
const userSubscription=require('./models/usersubscription')
const{Op}=require('sequelize')
const route=require('./routers/route')

app.use('/',route)
app.use('/',route)


app.use('/',(err,req,res,next)=>{
    console.log(err);
})
app.listen(5000);