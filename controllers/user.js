import { user } from "../models/user.js"

export const getAllUsers = async (req,res)=>{
    const users = await user.find({})

    console.log(req.query)
    const keyword = req.query.keyword

    console.log(keyword)

    res.json({
        success: true,
        users,
    })
}

export const getNewUsers = async (req,res)=>{

    const {name,email,password} = req.body 

    await user.create({
        name,
        email,
        password,
    })

    res.status(201).cookie("tempCookie","Lol").json({
        success: true,
        message: "Registered Successfully"
    })
}

export const special = (req,res)=>{
    res.json({
        success: true,
        message: "Joking"
    })
}

export const getUserDetails = async (req,res)=>{

    const {id} = req.params;
    const User = await user.findById(id)


    res.json({
        success: true,
        User,
    })
}