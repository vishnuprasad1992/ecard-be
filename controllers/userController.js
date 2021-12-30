const { addNewUser, getUserCheck, getUser, gettingAllUser } = require("../helpers/userHelper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const registerNewUser = async (req, res) => {
    try {
        const { name, email, mobile, address, password, confirmPassword } = req.body
        const check = await getUserCheck(email);
        if (check === true) {
            return res.status(401).json({
                status: "error",
                message: " User already exists"
            })
        }
        else {
            if (password === confirmPassword) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt)
                const dataToRegsiter = {
                    name,
                    email,
                    mobile,
                    password: hashedPassword
                }
                const userDetails = await addNewUser(dataToRegsiter)
                console.log(userDetails);
                if (userDetails) {
                    return res.status(201).json({
                        status: "success",
                        message: " User Register successfully"
                    })
                } else {
                    return res.status(500).json({
                        status: "error",
                        message: "something went wrong"
                    })
                }
            }
            else {
                return res.status(500).json({
                    status: "error",
                    message: "Passwords not matching"
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await getUser(email);
        if (user.email === email) {
            const verifiedPassword = await bcrypt.compare(password, user.password)
            if (verifiedPassword) {

                const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {
                    expiresIn: "1d",
                   });

                const dataToBeSend = {
                    token,
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }

                return res.status(201).json({
                    status: "success",
                    authUser: dataToBeSend
                })
            } else {
                return res.status(401).json({
                    status: "error",
                    message: "invalid credentials"
                })
            }
        }
        else {
            return res.status(401).json({
                status: "error",
                message: "invalid credentials"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await gettingAllUser();
        if (users) {
            return res.status(201).json({
                status: "success",
                users
            })
        }
        else {
            return res.status(401).json({
                status: "error",
                message: "invalid credentials"
            })
        }
    } catch (error) {
        console.log(error)
    }
}




module.exports = {
    registerNewUser,
    loginUser,
    getAllUsers
}