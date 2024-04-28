import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

const client = new MongoClient(url);

export async function connectToDatabase() {
	try {
		await client.connect();
		return client.db(dbName);
	} catch (error) {
		throw error;
	}
}

export async function closeDatabaseConnection() {
	await client.close();
}
