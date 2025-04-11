import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"


export const signup = async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcryptjs.hash(password, 10);
  
      const newUser = new User({
        fullname,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      res.status(201).json({
        message: "User created successfully",
        user: {
          _id: newUser._id,
          fullname: newUser.fullname,
          email: newUser.email,
        },
      });
  
    } catch (error) {
      console.error("Signup error:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  


export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // Validate input
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      const user = await User.findOne({ email });
      
      // Better error messages
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password" });
      }
  
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email
        }
      });
      
    } catch (error) {
      console.error("Login error:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }