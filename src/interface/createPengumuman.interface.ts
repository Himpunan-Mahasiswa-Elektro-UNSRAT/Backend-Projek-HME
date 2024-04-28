export interface CreatePengumumanInput {
    title: string;
    date: Date; 
    author: string;
    tag: string; 
    content: { 
        photo: string;
        text: string; 
    };
}
