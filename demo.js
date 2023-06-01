var http = require('http')
var fs = require("fs")
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://saurabh:Saurabh1@cluster0.ay8sfaw.mongodb.net/?retryWrites=true&w=majority";
// http.createServer(function(req,res){
//      fs.readFile("Form.html",function(error,data){
//     res.writeHead(200, {'Content-Type':'text/html'})
// res.write(data);
//    return res.end();
//      })
// }).listen(5000)
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// var input =  process.argv
// fs.writeFileSync(input[2], input[3])

// //CRUD OPERATION :-
//  const path = require('path')
//  const dirpath = path.join(__dirname,'crud')
//  const filePath = `${dirpath}/apple.txt`
//  // Create and write on  file 
// fs.writeFileSync(filePath,"This IS NEW FILE WE CREATE")

// // Read Operation on file

// fs.readFile(filePath,'utf-8',(error,data)=>{
//     if(error) {
//         return console.log("Hello World")

//     }
//     console.log(data)
// })

// // Update a file

// fs.appendFile(filePath , 'This is line append by Saurabh Negi',(error)=>{
//   if(!error) console.log('File is Updated') 
// })

// // Delete a file
// fs.unlink(filePath)


// PROMISE:
// var prom = new Promise((res, rej)=>{
// setTimeout(()=>{
//   res(30)
// },2000)

// })
// prom.then((data)=>{
//   console.log(data)
// })
  
// //NODE.JS ARCHITECTURE


// // EVENT LOOP :- 
// `CALL STACK                    NODE-API                        CALLBACKQUEUE

// EVERY FUNCTION REGISTER IN     Func which is                     Holds the data from nodeAPI And 
// CALL STACK                     inherit from c,C++, not core      wait for node stack to be empty so execution go ahead.
//                                register in Node API





// `

const express = require('express')
const app = express()

const path = require('path')
const htmlFile = path.join(__dirname,'crud')


app.get('',(req , res)=>{
  console.log("DATA SENT",req.query.name)
  res.sendFile(`${htmlFile}/index.html`)
})  

//This tell the node the we are using ejs in our project or file
app.set('view engine', 'ejs')

// app.get('/dynamic',(req, res=>{
//    res.sendFile('')
// }))


app.get('/profile',(req , res)=>{
  const data = {
    name:'Saurabh',
    age: 20,  }
  //This will automatically find 'views folder and render send the param or data
  res.render('profile',{data})
})
app.get('/profile1',(req , res)=>{
  const data = {
    name:'Saurabh',
    age: 20,  }
  //This will automatically find 'views folder and render send the param or data
  res.render('profile');
})

app.get('/help',(req , res)=>{
  // res.sendFile(`${htmlFile}/Form.html`)
  var data = {name:"Saurabh",age:'19',email:"saurabh102.com"}

    res.writeHead(200, {'Content-Type':'application\json'})
res.write(JSON.stringify(data));
res.end();
})



//For 404 pages 
app.get('*',(req , res)=>{
  res.sendFile(`${htmlFile}/Error.html`)
})

app.listen(5000);


//REMOVE THE EXTENSION:


//Middlewares 
`function which is used with route and used to modify res and req, like validation in form response Authentication and block the site for other countries.




`