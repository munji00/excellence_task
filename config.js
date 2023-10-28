 import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mydb_1';

//db connection
export const connection = async() =>{
    try {
        await client.connect();
        console.log("database connected successfully");
         const db = client.db(dbName);
        const users = db.collection('users');
        const userProfiles = db.collection('userProfiles');

        return {users, userProfiles};

    } catch (error) {
        console.log("error during connecting database");
        return error;
    }

} 