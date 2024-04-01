import AdminList from "../models/AdminListModel.js";
import bcrypt from "bcrypt";

export const Login = async (req, res) => {
    const admin = await AdminList.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!admin) return res.status(404).json({msg: "Admin not found"});
    const match = await bcrypt.verify(admin.password, req.body.password);
    if (!match) return res.status(404).json({msg: "Wrong Password"});
    req.session.adminsId = admin.id;
    const id = admin.id;
    const firstName = admin.firstName;
    const lastName = admin.lastName;
    const email = admin.email;
    const phone = admin.phone;
    const role = admin.role;

    res.status(200).json({id, firstName, lastName, email, phone, role})
}

export const Me = async (req, res) => {
    if(!req.session.id) {
        return res.status(401).json({msg: "You need to login first"})
    }
    const admin = await AdminList.findOne({
        attributes:['id', 'firstName', 'lastName', 'email', 'phone', 'role'],
        where: {
            id: req.body.admin.id
        }
    });
    if (!admin) return res.status(404).json({msg: "Admin not found"});
    res.status(200).json(admin)
    
}

export const LogOut = (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.status(400).json({msg: "You can't logout"});
        res.status(200).json({msg: "Logged out successfully"})
    })
}