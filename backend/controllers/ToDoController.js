const ToDoModel=require('../models/ToDo_Model')
module.exports.getToDo=async(req,res)=>{
    const toDo=await ToDoModel.find()
    res.send(toDo)
}
module.exports.saveToDo=async(req,res)=>{
    const{text}=req.body
    ToDoModel.create({text})
    .then((data)=>{
        console.log("Added Successfully ")
        res.send(data) 
    })
}
module.exports.updateToDo=async (req,res)=>{
    const{_id,text}=req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=>res.send("updated successfully"))
    .catch((err)=>console.log(err))
}
module.exports.deleteToDo=async (req,res)=>{
    const{_id}=req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((err)=>console.log(err))
}
// module.exports.saveToDo = async (req, res) => {
//     try {
//         const { text } = req.body;
//         const newToDo = await ToDoModel.create({ text });
//         console.log("Added Successfully");
//         res.status(201).json(newToDo);
//     } catch (error) {
//         console.error("Error while saving todo:", error);
//         res.status(500).json({ error: "Failed to save todo" });
//     }
// };
