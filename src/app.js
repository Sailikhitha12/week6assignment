const express=require('express');
const app=express();
app.use(express.json());
const cors=require('cors')
const port=3200;
app.use(cors());
const foodInformation=require('./db/models/foodinfo')
require('./db/conn');


app.get('/',(req,res)=>{
    res.send('<h1>WELCOME TO FOOD NUTRITION PAGE</h1>')
})

app.get('/getfooddata',async (req,res)=>{
    try{
        const getData=await foodInformation.find({});
        res.status(201).send(getData)
    }
    catch(e){
        console.log(e);
    }
})

app.post('/foods',async (req,res)=>{
    try{
        const addingfoodRecord=new foodInformation(req.body);
        console.log(addingfoodRecord);
        const insertData=await addingfoodRecord.save();
        console.log(insertData);
        res.status(201).send(insertData);

    }
    catch(e){
        console.log(e);
    }
})

app.listen(port,()=>{
    console.log('server is listening at port number ${port}');
})

