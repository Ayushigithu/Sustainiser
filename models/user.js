const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            Required: true,
        },
        email: {
            type: String,
            Required: true,
        },
        password: {
            type: String,
            Required: true,
        },
        image: {
            public_id: {
                type: String,
                // required: true,
            },
            url: {
                type: String,
                // required: true,
            }
        },
        score:{
            type:Number,
            default:0
        },
        Challenges:{
            type:Number,
            default:0
        },
        link:{
            type:String,
            Required:true
        },
        Daily:{
            type:Number,
            default:0
        },
        Weekly:{
            type:Number,
            default:0
        },
        Monthly:{
            type:Number,
            default:0
        },
        Special:{
            type:Number,
            default:0
        },
        Domain:{
            type:[String]                      // Changed
        },
        token: {
            type: String,
        },
        isVerified: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
