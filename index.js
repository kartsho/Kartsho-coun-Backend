const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

// mongodb Connection 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.luwsauw.mongodb.net/?appName=Cluster0`).then(() => {
    console.log('MongoDb Connected');
}).catch((error) => console.log("Error connecting to MongoDB", error));


const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const application = require('./routes/applicationRoutes');


// route 
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use(application);

console.log(port);

app.get("/", (req, res) => {
    res.send("Hello Backend Server")
});

app.listen(port, () => {
    console.log("server Running");
})
