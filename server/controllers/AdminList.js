import AdminList from "../models/AdminListModel.js";
import bcrypt, { hash } from "bcrypt";

export const getAdmins = async(req, res) => {
    try {
        const response = await AdminList.findAll({
            attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getAdminById = async(req, res) => {
    try {
        const response = await AdminList.findOne({
            attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'role'],
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
    const admin = await AdminList.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!admin) return res.status(404).json({msg: "Admin not found"});
    const { firstname, lastname, email, phone, password, confPassword, role } = req.body;
    let hashPassword;
    if (password === "" || password === null){
        hashPassword = admin.password
    }
    else {
        hashPassword = await bcrypt.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password doesn't match"});
    try {
        await AdminList.update({
            firstName: firstname,
            lastName: lastname,
            email: email,
            phone: phone,
            password: hashPassword,
            role: role
        }, {
            where: {
                id: admin.id
            }
        })
        res.status(200).json({msg: "Admin updated successfully"});
    } catch (error) {
        res.status(400).json({msg: error.message});
        
    }

}
export const deleteAdmin = async(req, res) => {
    const admin = await AdminList.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!admin) return res.status(404).json({msg: "Admin not found"});
    try {
        await AdminList.destroy({
            where: {
                id: admin.id
            }
        })
        res.status(200).json({msg: "Admin deleted successfully"});
    } catch (error) {
        res.status(400).json({msg: error.message});
        
    }
}
