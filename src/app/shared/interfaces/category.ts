import { Post } from './post';

export interface Category {
    id: string;
    name: string;
    posts: Array<Post>;
    photo: string;
}