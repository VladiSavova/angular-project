import { Post } from '../models/post';

export interface Category {
    id: string;
    name: string;
    posts: Array<Post>;
    photo: string;
}