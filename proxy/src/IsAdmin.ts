import { Request, Response } from 'express';
import axios from "axios";

export default function IsAdmin(req: Request, res: Response, next: Function) {
    axios.get("http://nginx/api/user",{
        headers: {
        'Authorization': req.headers.authorization
        }})
    .then((onfulfilled) => {
        var arr = onfulfilled.data.roles;
        var yes = false;

        for(var i = 0; i < arr.length; i++) {
            if (arr[i] == "ROLE_ADMIN") {
                yes = true;
                break;
            }
        }

        if (yes) next();
        else return res.status(400).json({ message: 'User isn\'t admin.' });
    })
    .catch((onrejected) => {
        console.log(onrejected.response.data)
        return res.status(400).json({ message: 'User isn\'t admin.' });
    });
    
}