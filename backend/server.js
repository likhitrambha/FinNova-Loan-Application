const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Mongo Connected');
    console.log('Database:', mongoose.connection.name);
})
.catch((error) => {
    console.log(error);
});


// ==========================
// Loan Application
// ==========================

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
});

const User = mongoose.model('User', user_schema);


app.post('/api/user', async (req, res) => {

    console.log(req.body);

    try {

        const user = await User.create(req.body);

        res.json({
            message: "Data received Sucessefully",
            data: req.body
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to save data",
            error: error.message
        });
    }
});


// ==========================
// Contact Us
// ==========================

const contact_schema = new mongoose.Schema({
    name: String,
    email: String,
    query: String
});

const Contact = mongoose.model('Contact', contact_schema);


app.post('/api/contact', async (req, res) => {

    console.log(req.body);

    try {

        const contact = await Contact.create(req.body);

        res.json({
            message: "Message sent successfully",
            data: contact
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to save message",
            error: error.message
        });
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend Running on port ${PORT}`);
});