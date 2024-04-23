// src/db.ts
import mongoose, { Connection } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGOURL = process.env.MONGO_URL || "cuKI";

if (!MONGOURL) {
  console.error('MongoDB URI is not specified in the .env file');
  process.exit(1);
}


// Gunakan tipe tersebut saat menghubungkan ke database
mongoose.connect(MONGOURL)
.then(() =>
	{
		console.log("Database Connect");
	
	}).catch((error) => console.log(error));
    const dbConnection: Connection = mongoose.connection;

    export default dbConnection;