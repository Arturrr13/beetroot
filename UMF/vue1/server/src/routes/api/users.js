const express = require('express')
const mongodb = require('mongodb')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post('/', async (req, res) => {
    try{
        const name = req.body.name, mail = req.body.mail
        const users = await loadPosts()
        const userName = await users.findOne({name}), userMail = await users.findOne({mail})
        if(userName){
            return res.status(404).json({message: "A user with that name already exists"})
        } else if(userMail){
            return res.status(404).json({message: "This email is already registered"})
        } else {
            const userPassword = await bcrypt.hash(req.body.password, 8)
            const token = jwt.sign({mail: req.body.mail}, "secretKey", {expiresIn: '30d'})
            await users.insertOne({
                token: token,
                name: name,
                mail: mail,
                password: userPassword
            })
            return res.json({
                token
            })
        }
    } catch (e) {
        res.send({message: "Server error"})
    }
})

router.get('/', async (req, res) => {
    const { header1 } = req.headers
    const { header2 } = req.headers
    if(header2){
        const users = await loadPosts()
        const user = await users.findOne({header2})
        console.log(user)
        return
    }
    if(header1){
        try {
            const decoded = jwt.verify(header1, 'secretKey');
            console.log(decoded)
            res.send({status: true})
        } catch(e) {
            res.send({status: false})
        }
    } else {
        const users = await loadPosts()
        const mail = req.query.mail, password = req.query.password
        const user = await users.findOne({mail})
        if(user){
            const checkPas = await bcrypt.compare(password, user.password)
            if(checkPas){
                const token = jwt.sign({id: user._id}, "secretKey", {expiresIn: '30d'})
                return res.json({
                    token
                })
            } else {
                return res.status(404).json({message: "Incorrect password"})
            }
        } else {
            return res.status(404).json({message: "User with this email not found"})
        }
    }
})

async function loadPosts(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://artur:artur@cluster0.hq9um8x.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return client.db('test').collection('users')
}

module.exports = router