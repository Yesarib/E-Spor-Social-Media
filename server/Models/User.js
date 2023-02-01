import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type:String,
            required: true,
            min:2,
        },
        lastName: {
            type:String,
            required: true,
            min:2,
        },
        nick: {
            type:String,
            required: true,
            min:2,
        },
        email: {
            type:String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type:String,
            required: true,
            min:6,
        },
        picture: {
            type:String,
            default: "",

        },
        follow : {
            type: Number,
            default: 0,
        },
        follower : {
            tpye: Number,
            default: 0,
        }
    }, {timestamps : true}
);

const User = mongoose.model("User",UserSchema);
export default User;