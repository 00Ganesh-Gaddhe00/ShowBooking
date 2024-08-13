const express = require('express')
const router = express.Router()

const Theatre = require('../models/Theatremodel')


//add theatre

router.post('/add-theatre', async(req, res)=>{
    try{
         const newtheatre = new Theatre(req.body)
         await newtheatre.save()
         res.send({
            success:true,
            message: "Theatre Added"
         })
    }
    catch(error){
     res.send({
        success:false,
        message: error.message
     })
    }
})

router.put('/update-theatre',  async (req, res) => {
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
        // console.log(req.body.theatreId)
        res.send({
            success: true,
            message: "Theatre has been updated!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

router.delete('/delete-theatre', async (req, res) => {
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId);
        res.send({
            success: true,
            message: "The theatre has been deleted!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});

router.get('/get-all-theatres', async(req, res)=>{
    try{
          const alltheatres = await Theatre.find().populate('owner')
          res.send({
            success:true,
            message: 'all theatres successfully fetched',
            data:alltheatres
          })
    }
    catch(err){
         res.send({
            success:false,
            message: err.message
         })
    }
})

router.post('/get-all-theatres-by-owner', async(req, res)=>{
    try{
        const allTheatres = await Theatre.find({owner: req.body.owner});
        // console.log(allTheatres)
       res.send({
        success: true,
        message: "users listed Theatres fecthed",
        data:allTheatres
       })
    }
    catch(err){
             res.send({
                success:false,
                message:err.message
             })
    }
})



module.exports = router;