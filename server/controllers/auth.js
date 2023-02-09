import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';

export const register = async (req,res) => {
    try {
        const {
            firstName,
            lastName,
            nick,
            email,
            password,
            picture,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            lastName,
            nick,
            email,
            password: passwordHash,
            picture,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const login = async (req,res) => {
    try {
        const { email,password} = req.body;
        const user = await User.findOne({email:email})
        if (!user) return res.status(400).json({msg : 'No User'})

        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(400).json({msg : 'Invalid'})

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        delete user.password;
        res.status(200).json({token,user});
        
    } catch (error) {
        res.status(500).json({error:error.message});
        
    }
}