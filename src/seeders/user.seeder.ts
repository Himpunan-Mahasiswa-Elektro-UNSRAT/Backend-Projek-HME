import { MongoClient } from "mongodb";
import { User } from "../entities/User";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from "uuid";

async function userSeed(){

    const client = new MongoClient("mongodb://localhost:27017/hme");
    const hashedPass = await bcrypt.hash("123456789", 10)
    try {
        await client.connect();
        const db = client.db();

        const userCollection = db.collection<User>('users');
        await userCollection.deleteMany({});

        const users = 
        [
            {
                "id": uuidv4(),
                "nim": 220211060001,
                "email": "namasatu@student.unsrat.ac.id",
                "pass": hashedPass,
                "role": 'anggota',
                "bio": {
                    "fullName": "Nama Satu",
                    "year": 2022,
                    "birthData": new Date("2004-11-05"),
                    "gender": 'laki-laki',
                    "address": "alamat satu"
                },
                "contact": {
                    "phoneNumber": "081212341234",
                    "instagram": "namasatu",
                    "linkedin": "Nama Satu",
                    "github": "namasatu",
                },
                "isActive": true,
            },
            { 
                "id": uuidv4(),
                "nim": 220211060001,
                "email": "namadua@student.unsrat.ac.id",
                "pass": hashedPass,
                "role": 'anggota',
                "bio": {
                    "fullName": "Nama Satu",
                    "year": 2022,
                    "birthData": new Date("2004-11-05"),
                    "gender": 'laki-laki',
                    "address": "alamat satu"
                },
                "contact": {
                    "phoneNumber": "081212341234",
                    "instagram": "namasatu",
                    "linkedin": "Nama Satu",
                    "github": "namasatu",
                },
                "isActive": true,
            },
        ];
        

        await userCollection.insertMany(users);
        console.log("success")
    } catch(error){
        console.log(error)
    } finally {
        await client.close();
        console.log("done ngab")
    }
}

userSeed();