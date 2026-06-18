const mongoose = require('mongoose')
const {Schema} = mongoose;

const collegeSchema = new Schema({
    collegeName: {
        type: String,
        required: true,
        // unique : true 
    },
    location : String,
    courses : [
        {
            courseName : String,
            fees : Number,
            seats: Number,
            duration : String
        }
    ]
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;