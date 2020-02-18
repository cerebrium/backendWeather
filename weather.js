require('dotenv').config()
const express = require('express')
const axios = require('axios')
const router = express.Router()

router.post('/current', (req, res) => {
        axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/${req.body.latitude},${req.body.longitude}`)
        .then( response => {
            res.json(response.data)
    })
})

module.exports = router
