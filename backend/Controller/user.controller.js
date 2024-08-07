import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashedPassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully", user:{
        id:createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email,
    }
    
 });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};



export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){
            res.status(401).json({message:"invalid Email or Password"})
        }
        else{
            res.status(200).json({message:"Login Successful",user:{
                id:user._id,
                fullname:user.fullname,
                email:user.email,
            }})
        }
    } catch (error) {
        console.log("Error",error.message);
        res.status(500).json({
            message:"Server Error",
        })
    }
}