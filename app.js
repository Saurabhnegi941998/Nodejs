const express = require('express');
const  middleWare = require('./middleware');
const app = express();
const path = require('path')

const route = express.Router();
const htmlFile = path.join(__dirname,'crud')

// const middleWare = (res,req,next)=>{
//     console.log('middleware install')
//     next()
// }



// app.use(middleWare)
route.use(middleWare);

app.get('/help',middleWare,function(req, res){
    res.send('REturning the hello ')
})

app.get('/contact',(req , res)=>{
    res.send('Without getting calls ')
  })
  app.get('/new',(req , res)=>{
    res.sendFile(`${htmlFile}/Form.html`)
  })

  route.get('/fill',(req , res)=>{
    res.send('Router callsss ')
  })
  route.get('/till',(req , res)=>{
    res.send('router call ')
  })

  app.use('/',route)
  app.listen(5000)
  
