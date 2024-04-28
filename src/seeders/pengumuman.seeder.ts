import { MongoClient } from "mongodb";
import { Pengumuman } from "../entities/Pengumuman";

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
                "title": "Seminar Teknologi Terbaru",
                "date": new Date("2024-05-15"), 
                "author": "HME",
                "tag": "HME", 
                "content": { 
                    "photo": "https://contoh.com/foto3.jpg",
                    "text": "Seminar tentang perkembangan teknologi terbaru.", 
                }
            },
            { 
                "title": "Pelatihan Kepemimpinan",
                "date": new Date("2024-07-20"), 
                "author": "Mahasiswa",
                "tag": "Mahasiswa", 
                "content": { 
                    "photo": "https://contoh.com/foto4.jpg",
                    "text": "Pelatihan untuk meningkatkan kemampuan kepemimpinan.", 
                }
            },
            { 
                "title": "Kumpul Bareng Alumni",
                "date": new Date("2024-08-10"), 
                "author": "Admin",
                "tag": "Wisudawan", 
                "content": { 
                    "photo": "https://contoh.com/foto5.jpg",
                    "text": "Acara kumpul bareng alumni angkatan 2020 hingga 2024.", 
                }
            },
            { 
                "title": "Orientasi Penerimaan Anggota Baru",
                "date": new Date("2024-09-01"), 
                "author": "Admin",
                "tag": "PAB", 
                "content": { 
                    "photo": "https://contoh.com/foto6.jpg",
                    "text": "Orientasi untuk anggota baru angkatan 2024.", 
                }
            },
            { 
                "title": "Workshop Pemrograman Dasar",
                "date": new Date("2024-10-12"), 
                "author": "HME",
                "tag": "HME", 
                "content": { 
                    "photo": "https://contoh.com/foto7.jpg",
                    "text": "Workshop untuk pemrograman dasar bagi mahasiswa baru.", 
                }
            },
            { 
                "title": "Wisuda Angkatan 2024",
                "date": new Date("2024-12-20"), 
                "author": "Admin",
                "tag": "Wisudawan", 
                "content": { 
                    "photo": "https://contoh.com/foto8.jpg",
                    "text": "Upacara wisuda untuk angkatan 2024.", 
                }
            },
            { 
                "title": "Pendaftaran Lomba Mahasiswa",
                "date": new Date("2024-06-30"), 
                "author": "Mahasiswa",
                "tag": "Mahasiswa", 
                "content": { 
                    "photo": "https://contoh.com/foto9.jpg",
                    "text": "Pendaftaran lomba kreatifitas mahasiswa.", 
                }
            },
            { 
                "title": "Pelatihan Soft Skill",
                "date": new Date("2024-07-25"), 
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
    }
}

pengumumanSeed();