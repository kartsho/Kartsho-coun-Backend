const College = require('../model/college');

const addCollege = async (req, res) => {
    const college = req.body;
     const query = { collegeName: college.collegeName};
    try{
        const existingCollege = await College.findOne(query);
        if(existingCollege){
            res.status(400).json({message: "This College Already Register"});
        } 
        const result = await College.create(college);
        res.status(200).json({message: " College Name has added "})
    } catch(error) {
        res.status(500).json({  message : error.message})
    }
}

const getCollege = async (req, res) => {
  try{
    const college = await College.find({});
    return res.status(200).json(college);
  } catch (error) {
    res.status(500).json( {message : error.message})
  }
}

const updateCollege = async (req, res) => {
    const collegeId = req.params.id;
    const { collegeName, courses, } = req.body;
    try{
        const collegeUpdate = await College.findByIdAndUpdate(collegeId,{
            collegeName, courses, location
        }, {new : true, runValidator : true});

        if(!collegeUpdate){
            return res.status(404).json({ message : "College not Found"})
        }

        res.status(200).json(collegeUpdate)
    } catch(error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    addCollege,
    getCollege,
    updateCollege,
}