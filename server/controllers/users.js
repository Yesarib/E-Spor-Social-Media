import User from "../Models/User.js";

export const getUser = async(req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getUserFollow = async (req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const follow = await Promise.all(
            user.follow.map((id) => User.findById(id))
        );
        const formatted =follow.map(
            ({_id,firstName,lastName,nick,picture}) => {
                return {_id,firstName,lastName,nick,picture}
            }
        );
        res.status(200).json(formatted);
    } catch (error) {
        res.status(404).json({message:error.message})  
    }
    
}

export const addRemoveFollow = async (req,res) => {
    try {
        const { id, followId } = req.params;
        const user = await User.findById(id);
        const follow = await User.findById(followId);

        if (user.follow.includes(followId)){
            user.follow = user.follow.filter((id) => id !== followId);
            user.follow = follow.follow.filter((id) => id !== id);
        } else {
            user.follow.push(followId);
            follow.follow.push(id);
        }
        await user.save();
        await follow.save();

        const follows = await Promise.all(
            user.follow.map((id) => User.findById(id))
        );
        const formatted =follows.map(
            ({_id,firstName,lastName,nick,picture}) => {
                return {_id,firstName,lastName,nick,picture}
            }
        );
        res.status(200).json(formatted);

    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}