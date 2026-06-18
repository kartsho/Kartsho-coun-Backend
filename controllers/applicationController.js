const Application = require("../model/applicationForm");

const applyForCounselling = async (req, res) => {
  // const newForm = req.body;
  try {
    const userId = req.decoded.id;

    const { collegeId, courseName, cetScore } = req.body;

    const application = await Application.create({
      userId,
      collegeId,
      courseName,
      cetScore,
      status: "Pending",
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const applications = async (req, res) => {
  try {
    const forms = await Application.find({})
    .populate("userId", "-password")
    .populate("collegeId", "collegeName")
    .sort({ createdAt: -1 });
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  applyForCounselling,
  applications,
};
