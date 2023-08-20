import express from 'express'
import algo ,{allStation } from './script.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
app.listen(3000);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/allStation',(req,res)=>{
    try{
        console.log('called');
    res.send({data : allStation});
    }
    catch(err)
    {
        res.json({message: err.message});
    }
});
app.post('/desiredRoute',(req,res)=>{
    try{
        const data = req.body
    res.send(algo(data.from,data.to));
    }
    catch(err)
    {
        res.json({message: err.message});
    }
});
