const mongoose = require('mongoose')
const {Schema} = mongoose;

const applicationSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    collegeId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "College"
    },
    courseName : {
        type: String,
        required: true
    },
    cetScore: Number,
    status: {
        type: String,
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default : Date.now
    }
},{
    timestaps: true
}
)

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;