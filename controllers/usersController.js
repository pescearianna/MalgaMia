
import {validateUser,validateUserLogIn} from "../schemas/usersSchemas.js";
import bcrypt from 'bcrypt';

export class UsersController{
    constructor ({usersModel}){
            this.usersModel = usersModel
    }
    
    getAll = async (req,res) => {
        const users = await this.usersModel.getAll();
        res.json(users);
        
    }

    getById = async (req,res) => {
        const {id} = req.params;
        const user = await this.usersModel.getById({id})
        if (!user) {
        return res.status(404).json({ error: 'Order not found' });
        }
        res.json(user);
    }

    // auth

    logIn = async (req,res) => {
        try{
            const userLog = validateUserLogIn(req.body);
            if(userLog.error){
                return res.status(400).json({ error: userLog.error.format() });
            }
            const {email,password} = userLog.data
            const user = await this.usersModel.getByEmail({ email });
            if (!user) {
                return res.status(401).json({ error: "Credenziali non valide" });
            }
            const isValid = await bcrypt.compare(password, user.password)
            if(!isValid){ 
                return res.status(401).json({ error: "Credenziali non valide"})
            }
            const {password:_, ...publicUser} = user
            res.status(200).json(publicUser)
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }


    }


    logOut = async (req,res) => {
        
    }


    register = async (req,res) => {
        try{
            const validUser = validateUser(req.body);
            if(validUser.error){
                return res.status(400).json({ error: console.log(validUser.error.format()) });
            }
            const {email,password,role} = validUser.data
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await this.usersModel.newUser({email,password:hashedPassword,role})
            res.status(201).json(newUser)
        } catch (error) {
            return res.status(500).json({ error:    error.message });
        }
    }

    protected = async (req,res) => {
        
    }
}