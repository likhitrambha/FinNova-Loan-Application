const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('Mongo Connected');
    console.log('Database:', mongoose.connection.name);
})
.catch((error)=>{
    console.log(error)
})

const user_schema = new mongoose.Schema({
    name: String,
    mobile: Number,
    dob: String,
    email: String,
    pan: String,
    address: String,
    loanType: String,
    loanAmount: String,
    employmentType: String,
    monthlyIncome: String
    
})

const User = mongoose.model('User', user_schema)

app.post('/api/user', async (req,res) => {
    console.log(req.body);

    try{
        const user = await User.create(req.body)
        res.json({
            message: "Data received Sucessefully",
            data: req.body
        });
    }catch(error){
        console.log(error);
    }

})

app.listen(5000, ()=> {
    console.log('Backend Running')
})