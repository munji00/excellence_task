import {connection} from '../config.js'
import { ageFinder } from '../ageFinder.js';

const {users, userProfiles} = await connection();
export const requestHandler1 =async(req, res)=>{
    const data = await userProfiles.find({}).toArray();
    let total_age=0;
    for(let i =0; i<data.length; i++)
    {
        total_age+=ageFinder(data[i].dob)
    }
    console.log(total_age/data.length);
    res.end(`${total_age/data.length}`);
    
}

export const requestHandler2 = async(req, res) =>{
    const original_data =[];
    const res_data = await userProfiles.find({}).toArray();
    const filter_data = res_data.filter((item)=> ageFinder(item.dob)>25);
    for(let i=0; i<filter_data.length; i++)
    {
         await users.deleteOne({_id:filter_data[i].user_id});
    }
    res.end('user deleted successfully');
}