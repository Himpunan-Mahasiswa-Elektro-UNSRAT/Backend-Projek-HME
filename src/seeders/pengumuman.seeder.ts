import { MongoClient } from "mongodb";
import { Pengumuman } from "../entities/Pengumuman";

async function pengumumanSeed(){

    const client = new MongoClient("mongodb://localhost:27017/hme-db");

    try {
        await client.connect();
        const db = client.db();

        const pengumumanCollection = db.collection<Pengumuman>('Pengumuman');

        const pengumuman = [
            { 
                title: 'Penerimaan Anggota Baru angkatan 2024',
                date: new Date('2024-06-24'), 
                author: 'Admin',
                tag: 'HME', 
                content: { 
                    photo: 'https://contoh.com/foto.jpg',
                    text: 'lorem ipsum dolor amet', 
                }
            },
            { 
                title: 'Arak-arakan untuk wisudawan 2024',
                date: new Date('2024-11-24'), 
                author: 'Pengurus',
                tag: 'Mahasiswa', 
                content: { 
                    photo: 'https://contoh.com/foto2.jpg',
                    text: 'lorem ipsum dolor amet', 
                }
            }
        ];

        await pengumumanCollection.insertMany(pengumuman);
        console.log("success")
    } catch(error){
        console.log(error)
    }
}

pengumumanSeed();