import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPostComponent } from './category-post/category-post.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { FavouritePostsComponent } from './favourite-posts/favourite-posts.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { MyPostsComponent } from './my-posts/my-posts.component';




@NgModule({
  declarations: [CategoryPostComponent, DetailsPostComponent, FavouritePostsComponent, PostInfoComponent, MyPostsComponent],
  imports: [
    CommonModule,
   

  ]
})
export class PostModule { }
