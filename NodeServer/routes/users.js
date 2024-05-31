const express = require('express')
const router = express.Router()

const users = [{name: 'abc', }, {name: 'kyle'}]

router.get('/', (req,res)=>{
    res.send('users')
    console.log("Users List")
})

router.get('/form', (req,res)=>{
    console.log('users form')
})

router.get("/:id", (req,res)=>{
    console.log(req.user)
    res.send(`Get user with id: ${req.params.id} ${req.user.name}`)
})


router.param('id' , (req,res, next, id)=>{
    req.user = users[id]
    console.log('id', id)
    next()
})

module.exports = router


// use router.route() to club curd operations for same url