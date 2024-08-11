

const appModel=require("../models/appoinmentModel")


const studentData=async(req,res)=>{
    try {
        const {teacher,gender,date,time}=req.body
        console.log(gender);
       const student=await appModel.create({
        teacher:teacher,
        gender:gender,
        date:date,
        time:time,
         status:false
       })
    //   console.log(student)
       res.status(201).json("data insert in backend..")
    } catch (error) {
       console.error("somthing wrong..",error) 
    }
}

const displayData=async(req,res)=>{
    try {
               
          
        await appModel.find().then((data)=>{
       res.status(201).json(data);

        })
    } catch (error) {
       console.error("somthing wrong..",error)
        
    }
}
const statusData=async(req,res)=>{
    try {
        let Id=req.body.id
        // console.log(id);
        const responce=await appModel.findByIdAndUpdate(Id,{status:true});
        res.status(201).json(responce.status)
      
    } catch (error) {
       console.error("somthing wrong..",error)
        
    }
}
module.exports={
    studentData,
    displayData,
    statusData
}