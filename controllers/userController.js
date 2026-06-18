const User = require("../model/User")
const generateToken = require('../utils/generateToken')
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
     const { firstName, lastName, mobileNumber, email, password } = req.body;
    // const User = req.body;

    try{
       const existingUser = await User.findOne({mobileNumber},{email});
       if(existingUser){
        return res.status(400).json({message: "User already exists!"});
       }
        const hashedPassword = await bcrypt.hash(password, 10);

    //    const result = await User.create(user);
    const user = new User({
        firstName,
        lastName,
        mobileNumber,
        email,
        password : hashedPassword
    });

    await user.save();
       res.status(201).json( {message : "User created successfully"});
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
};


const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(404).json({message : "User Not found"});
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){
           return res.status(404).json({message : "Invalid Password"});
        }

          const token = generateToken({
            id: user._id,
            email: user.email,
            role: 'user'
    });

    return res.status(200).json({
        message : 'Login Successful',
        token
    })

    } catch (error){
        res.status(500).json({message : error.message});
    }
}

const getProfile = async (req, res) => {
    try {
    const email = req.decoded.email;
    const user = await User.findOne({email}, {password: 0});

    if(!user) {
        return res.status(404).json({ message : "User not Found"})
    }
    return res.status(200).json(user);
} catch (error) {
    res.status(500).json({message : error.message});
}

};



module.exports = {
    createUser,
    loginUser,
    getProfile

}