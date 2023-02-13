import express from 'express'

const app = express();

const PORT = process.env.PORT || 3000;

//create simple route
// app.get("/",(req,res)=>{
//     res.json({
//         status: "success",
//         data: "successful"
//     })
// })

//create user
app.post("/users/create",(req,res)=>{
    try{
    res.json({
        status: "success",
        data: "user created successful"
    })
}catch(error){
    res.json(error.message);
}
})

//get all the user
app.get("/users",(req,res)=>{
    try{
    res.json({
        status: "success",
        data: "display all users successful"
    })
}catch(error){
    res.json(error.message);
}
})

//get specific user
app.get("/users/:id",(req,res)=>{
    try{
    res.json({
        status: "success",
        data: "display specific users successful"
    })
}catch(error){
    res.json(error.message);
}
})

//delete a specific user
app.delete("/users/:id",(req,res)=>{
    try{
    res.json({
        status: "success",
        data: "user deleted successfully"
    })
}catch(error){
    res.json(error.message);
}
})

//update user
app.put("/users/:id",(req,res)=>{
    try{
    res.json({
        status: "success",
        data: "user updated successful"
    })
}catch(error){
    res.json(error.message);
}
})

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})