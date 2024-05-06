export interface CreatePengumumanInput {
    title: string;
    author: string;
    tag: string; 
    content: { 
        photo: string;
        text: string; 
    };
}
