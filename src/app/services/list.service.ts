import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private readonly allCategoriesUrl = 'http://localhost:8000/view/allCategories';
  private readonly allPostsUrl = 'http://localhost:8000/view/allPosts/';
  private readonly getPostDetailsUrl = 'http://localhost:8000/view/details/';
  private readonly getMyPostsUrl = 'http://localhost:8000/view/myPosts/';
  private readonly getFavouritePostsUrl = 'http://localhost:8000/view/favouritePosts/' // id; 


  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.allCategoriesUrl);
  }

 
  getAllPosts(id): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.allPostsUrl + id);
  }

  getPostDetails(id):Observable<Post> {
    return this.http.get<Post>(this.getPostDetailsUrl + id);
  }

  getMyPosts(id): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.getMyPostsUrl + id);
  }

  getFavouritePosts(id) : Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.getFavouritePostsUrl + id);
  }


}
