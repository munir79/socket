
import express from 'express';

const router=express.Router();

//get route 


router.get('/get-message',(req,res)=>{
    res.status(200).json({
        success:true,
        message:" socket i.o  backend is running"
    });

})


// 

router.post('/post-message',(req,res)=>{

    const {text,user}=req.body;
    if(!text || !user){
        return res.status(400).json({
            success:false,
            message:"mising text ou users"
        })
    }
    
    res.status(200).json({
        success:true,
        message:'mesage recieved successfully',
        data:{user,text}
    })
});

export const messageRouter= router;