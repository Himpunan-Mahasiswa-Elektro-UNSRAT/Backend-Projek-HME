export interface Pengumuman {
    uuid: string;
    title: string;
    date: string; 
    author: string;
    tag: string; 
    content: { 
        photo: string;
        text: string; 
    };
}
