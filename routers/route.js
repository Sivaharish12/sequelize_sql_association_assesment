const express=require('express')
const route=express.Router()
const control=require('../controller/control')

route.get('/ytmusic',control.ytmusic)
route.get('/yt',control.yt)

module.exports=route