import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-favourite-posts',
  templateUrl: './favourite-posts.component.html',
  styleUrls: ['./favourite-posts.component.scss']
})
export class FavouritePostsComponent implements OnInit {

  posts;
  currentUser;
  show;
  hide;
  details;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('userId');
    this.show = false;
    this.hide = true;
    this.details = false;
    this.listService.getFavouritePosts(this.currentUser).subscribe((data) => {
      this.posts = data['posts'];
    })
  }


}
