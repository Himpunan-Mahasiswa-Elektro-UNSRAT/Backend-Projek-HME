export interface Pengumuman {
    uuid: string;
    title: string;
    date: Date; 
    author: string;
    tag: string; 
    content: { 
        photo: string;
        text: string; 
    };
}
