import {users_data, userProfiles_data} from '../dummyData.js';
import {connection} from '../config.js'
import md5 from 'md5';

const {users, userProfiles} = await connection();

export const insertUsers = async(req, res) =>{
    for(let i=0; i<users_data.length; i++){
      const hashed_password = md5(users_data[i].password);
      const {fistName, email, lastName, password} = users_data[i];
      const res = await users.insertOne({fistName, email, lastName, password:hashed_password});
      await userProfiles.insertOne({user_id:res.insertedId, dob:userProfiles_data[i].dob, mob_number:userProfiles_data[i].mob_number});
    }
};
