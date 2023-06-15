import mongoose from "mongoose"

const PrepaidModelSchema = mongoose.Schema;

let PrepaidModel = new PrepaidModelSchema({
    userDetails:{
        fullName:{
            type:String,
            trim:true,
        },
        dob:{
            type:new Date(),
        }
    },
    contactDetails:{
        phoneNumber:{
            type:String,
            trim:true
        }
    }
});

const PrepaidCardModel = mongoose.model("prepaidcards",PrepaidModel);
module.exports = PrepaidCardModel
