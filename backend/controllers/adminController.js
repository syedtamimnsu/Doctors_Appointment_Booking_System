import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import jwt from 'jsonwebtoken'
import validator from 'validator'
import doctorModel from '../models/doctorModel.js'

// API for add doctors

const addDoctor = async (req,res) => {
    try {

        const {name, email, password, speciality, degree, experience, about, fees, address} = req.body;
        const imageFile = req.file

        //checkig for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address ){
            return res.json({success:false, message:"Missing Details"})
        }

        //validation email format
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }

        //valid strong password
        if (password.length < 8) {
            return res.json({success:false, message:"Please enter a strong password"})
            
        }

        //hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //uploading image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url


        //creating data formate
        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }


        //store doctor info in database
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true, message:"Doctor Added"})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}






//API for the admin login

const loginAdmin = async(req,res) => {
    try {
        const {email, password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})
        }else{
            res.json({success:false, message:"Invalid email or password"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}







export { addDoctor, loginAdmin }

