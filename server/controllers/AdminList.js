import AdminList from "../models/AdminListModel.js";
import bcrypt from "bcrypt";

export const getAdmins = async(req, res) => {
    try {
        const response = await AdminList.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getAdminById = async(req, res) => {
    try {
        const response = await AdminList.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const createAdmin = async(req, res) => {
    const { firstname, lastname, email, phone, password, confPassword, role } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password doesn't match"});
    
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    try {
        await AdminList.create({
            firstName: firstname,
            lastName: lastname,
            email: email,
            phone: phone,
            password: hashPassword,
            role: role
        })
        res.status(201).json({msg: "registration successful"});
    } catch (error) {
        res.status(400).json({msg: error.message});
        
    }
}
export const updateAdmin = async(req, res) => {
    try {
        const response = await AdminList.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const deleteAdmin = async(req, res) => {
    try {
        const response = await AdminList.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
