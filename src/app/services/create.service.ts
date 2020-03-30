import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private readonly createCategoryUrl = 'http://localhost:8000/create/createCategory';
  private readonly createPostUrl = 'http://localhost:8000/create/addPost'; 
  private readonly deletePostUrl = 'http://localhost:8000/create/deletePost/';
  private readonly addToFavouritesUrl = 'http://localhost:8000/view/addToFavourites/'; //postId userId 
  private readonly removeFromFavouritesUrl = 'http://localhost:8000/view/removePost/'


  constructor(private http: HttpClient) { }

  createCategory(category) {
    return this.http.post(this.createCategoryUrl, category);
  }

  createPost(post) {
    return this.http.post(this.createPostUrl, post);
  }

  deletePost(id) {
    return this.http.get(this.deletePostUrl + id);
  }

  addToFavourites(postId, userId) {
    return this.http.get(this.addToFavouritesUrl + postId + '/' + userId); 
  }

  removeFromFavourites(postId, userId) {
    return this.http.get(this.removeFromFavouritesUrl + postId + '/' + userId);
  }


}
