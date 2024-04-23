import express from "express";
import app from './routes/auth.routh';
import morganMiddleware from "./config/morganMiddleware";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routh'; // Mengimpor rute dari direktori routes
import User from './entities/user.models';
import db from './routes/dbconnection.route';




dotenv.config();


const port = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL || "cuKI";

	
	  




app.use(morganMiddleware);
app.get("/", (req, res) => {
	res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
	console.log(
		`Server is running on http://localhost:${port} ${MONGOURL} `
	);
	db.once('open', async () => {
		try {
		  // Ambil semua pengguna dari database
		  const users = await User.find({}, { email: 1 }); // Hanya ambil properti email
	  
		  // Cetak email setiap pengguna
		  users.forEach(user => {
			console.log('Email:', user.email);
		  });
	  
		  // Keluar dari aplikasi setelah selesai mencetak
		  
		} catch (error) {
		  console.error('Error fetching users:', error);
		  process.exit(1);
		}
	  });
	  
});
