import { Category } from './category';

export interface Post {
    _id: string;    
    name: string;
    category: Category;
    photo: string;
    creator: string,
    description: string;
} 