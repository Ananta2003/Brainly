import { Router } from "express";
import { Habbit, User } from "../db.js";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { middleware } from "../middleware.js";

dotenv.config()
const JWT_PASSWORD: any = process.env.JWT_PASSWORD


const userRouter = Router()

userRouter.post('/signup', async (req, res) => {

    const { username, password, email } = req.body

    if (!username || !password || !email) {
        return res.status(401).json({
            message: "Please Fill All Mentioned Feilds"
        })
    }

    const hashlength = 10
    const hashedPassword = await bcrypt.hash(password, hashlength)

    if (!hashedPassword) {
        return res.status(501).json({
            message: "Failed Hashing Password"
        })
    }

    try {
        const data = await User.create({
            username,
            password: hashedPassword,
            email
        })

        if (!data) {
            res.status(500).json({
                message: "Err in Server "
            })
        }

        res.status(200).json({
            message: "User Account Created "
        })
    } catch (err) {
        res.status(401).json({
            err
        })
    }
})

userRouter.post('/signin', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(401).json({
            message: "Please Fill All Mentioned Feilds"
        })
    }

    const user = await User.findOne({ username: username })

    if (!user) {
        return res.status(400).json({
            message: "No User Found "
        })
    }

    const bycryptedPassword = await bcrypt.compare(password, user.password)
    if (!bycryptedPassword) {
        return res.status(401).json({
            message: "Incorrect Password "
        })
    }

    try {
        const token = jwt.sign({
            userId: user._id
        }, JWT_PASSWORD)

        res.status(201).json({
            token
        })
    } catch (err) {
        res.status(501).json({
            message: "Failed to signup ",
            err
        })
    }

})

userRouter.post('/crate', middleware, async (req, res) => {
    const { title, link, type } = req.body
    const userId = req.userId

    if (!title || !link || !type) {
        return res.status(401).json({
            message: "Please Fill all Inputs "
        })
    }

    if (!userId) {
        return res.status(401).json({
            message: " Unable to Extract token please signin in again"
        })
    }

    try {
        const data = await Habbit.create({
            userId: userId,
            title: title,
            link: link,
            type: type
        })

        if (!data) {
            res.status(500).json({
                message: "Server Error "
            })
        }

        res.status(200).json({
            message: "Success",
            data
        })
    } catch (err) {
        res.json({
            err
        })
    }
})

userRouter.delete("/delete", middleware, async (req, res) => {
    const habbitId = req.body.habbitId

    try {
        const result = await Habbit.deleteOne({ _id: habbitId })
        res.json({
            message: "Content Deleted",
            result
        })
    } catch (err) {
        res.json({
            err
        })
    }

})

userRouter.delete("/delete-many", middleware, async (req, res) => {
    const userId = req.userId

    if (!userId) {
        return res.status(401).json({
            message: "Unauthorized User"
        })
    }

    try {
        await Habbit.deleteMany({ userId: userId })
        res.json({
            message: "Content Deleted"
        })
    } catch (err) {
        res.json({
            err
        })
    }

})

userRouter.get('/bulk', middleware, async (req, res) => {
    const userId = req.userId

    if (!userId) {
        return res.status(401).json({
            message: " Unable to Extract token please signin in again"
        })
    }

    try {
        const data = await Habbit.find({ userId: userId }).populate("userId", "username")
        res.json({
            data
        })

        if (!data) {
            res.status(500).json({
                message: "Server Error "
            })
        }
    } catch (err) {
        res.json({
            err
        })
    }
})

userRouter.post('/sort', middleware, async (req, res) => {
    const userId = req.userId
    const {type} = req.body 

    if (!userId) {
        return res.status(401).json({
            message: " Unable to Extract token please signin in again"
        })
    }

    try {
        const data = await Habbit.find({ type: type }).populate("type", "type")
        res.json({
            data
        })

        if (!data) {
            res.status(500).json({
                message: "Server Error "
            })
        }
    } catch (err) {
        res.json({
            err
        })
    }
})


export default userRouter