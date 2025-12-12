import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URL: any = process.env.MONGO_URL
mongoose.connect(MONGO_URL)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

const habbitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:true
    }
})


export const User = mongoose.model('User', userSchema)
export const Habbit = mongoose.model('Habbit', habbitSchema)