const express = require('express')

app = express()

//setup a view engine 
app.set('view engine', 'ejs')

PORT  = 3000

const userRouter  = require('./routes/users')

app.use(express.static('public'))
// middle ware to access data from html form 
app.use(express.urlencoded({extended: true}))
app.use('/users', userRouter)

// app.get("/", (req, res) =>{
//     // res.send('hi')
//     // sending json with status code 
//     // res.status(200).json({messgage: 'helo'})
//     // sending a file that can be downloaded
//     // res.download(server.js)
//     // to render html file 
//     res.render('index', {text: 'cool'})
// })



app.listen(PORT , () => {
    console.log('Server Started on PORT:',PORT)
})