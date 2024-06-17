import userModel from "../models/userModal.js";
import jwt from "jsonwebtoken"
import bycrypt from "bcrypt"
import validator from "validator"


//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User Doesn't exist" })
        }
        const isMatch = await bycrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const token = createToken(user._id);
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }

}
const createToken = (id) => {
    return jwt.sign({ id }, process.env.Jwt_SECRET)
}

//register user

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // checking is already already exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "user already exists" })
        }
        // vlidating email formate and strong password

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter a valid email" })
        }
        //checking strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter strong password" })
        }

        //hashing user password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)


        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })



    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error!" })

    }

}

export { loginUser, registerUser }
