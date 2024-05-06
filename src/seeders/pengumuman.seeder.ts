import { MongoClient } from "mongodb";
import { Pengumuman } from "../entities/Pengumuman";
import { v4 as uuidv4 } from "uuid";
async function pengumumanSeed(){

    const client = new MongoClient("mongodb://localhost:27017/hme-db");

    try {
        await client.connect();
        const db = client.db();

        const pengumumanCollection = db.collection<Pengumuman>('Pengumuman');
        await pengumumanCollection.deleteMany({});

        const pengumuman = 
        [
            {
                "uuid": uuidv4(), 
                "title": "Seminar Teknologi Terbaru",
                "date": "15-05-2024",
                "author": "HME",
                "tag": "HME", 
                "content": { 
                    "photo": "https://contoh.com/foto3.jpg",
                    "text": "Seminar tentang perkembangan teknologi terbaru.", 
                }
            },
            { 
                "uuid": uuidv4(),
                "title": "Pelatihan Kepemimpinan",
                "date": "20-07-2024", 
                "author": "Mahasiswa",
                "tag": "Mahasiswa", 
                "content": { 
                    "photo": "https://contoh.com/foto4.jpg",
                    "text": "Pelatihan untuk meningkatkan kemampuan kepemimpinan.", 
                }
            },
            { 
                "uuid": uuidv4(),
                "title": "Kumpul Bareng Alumni",
                "date": "10-08-2024", 
                "author": "Admin",
                "tag": "Wisudawan", 
                "content": { 
                    "photo": "https://contoh.com/foto5.jpg",
                    "text": "Acara kumpul bareng alumni angkatan 2020 hingga 2024.", 
                }
            },
            { 
                "uuid": uuidv4(),
                "title": "Orientasi Penerimaan Anggota Baru",
                "date": "01-09-2024", 
                "author": "Admin",
                "tag": "PAB", 
                "content": { 
                    "photo": "https://contoh.com/foto6.jpg",
                    "text": "Orientasi untuk anggota baru angkatan 2024.", 
                }
            },
            {
                "uuid": uuidv4(), 
                "title": "Workshop Pemrograman Dasar",
                "date": "12-10-2024", 
                "author": "HME",
                "tag": "HME", 
                "content": { 
                    "photo": "https://contoh.com/foto7.jpg",
                    "text": "Workshop untuk pemrograman dasar bagi mahasiswa baru.", 
                }
            },
            { 
                "uuid": uuidv4(),
                "title": "Wisuda Angkatan 2024",
                "date": "02-11-2024", 
                "author": "Admin",
                "tag": "Wisudawan", 
                "content": { 
                    "photo": "https://contoh.com/foto8.jpg",
                    "text": "Upacara wisuda untuk angkatan 2024.", 
                }
            },
            { 
                "uuid": uuidv4(),
                "title": "Pendaftaran Lomba Mahasiswa",
                "date": "22-02-2024", 
                "author": "Mahasiswa",
                "tag": "Mahasiswa", 
                "content": { 
                    "photo": "https://contoh.com/foto9.jpg",
                    "text": "Pendaftaran lomba kreatifitas mahasiswa.", 
                }
            },
            { 
                "uuid": uuidv4(),
                "title": "Pelatihan Soft Skill",
                "date": "17-08-2024", 
                "author": "Admin",
                "tag": "PAB", 
                "content": { 
                    "photo": "https://contoh.com/foto10.jpg",
                    "text": "Pelatihan soft skill bagi anggota baru.", 
                }
            }
        ];
        

        await pengumumanCollection.insertMany(pengumuman);
        console.log("success")
    } catch(error){
        console.log(error)
    } finally {
        await client.close();
        console.log("done ngab")
    }
}

pengumumanSeed();