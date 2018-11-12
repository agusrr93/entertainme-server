const router = require('express').Router()
const entertainmeRouter = require('./entertainme')


router.use('/entertainme', entertainmeRouter)
router.get('/',(req,res)=>{
    res.send('welcome to express')
})
module.exports = router