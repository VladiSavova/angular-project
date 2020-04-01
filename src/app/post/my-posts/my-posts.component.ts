import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateService } from 'src/app/shared/services/create.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  posts;
  currentUser;
  show;
  hide;
  details;

  constructor(private listService: ListService,
     private authService: AuthenticationService, 
     private crudService: CreateService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('userId');
    this.show = true;
    this.hide = false;
    this.details = false;
    this.listService.getMyPosts(this.authService.isAuth()).subscribe((data) => {
      this.posts = data['posts']
      this.posts = this.posts.filter(a => a !== null);
    })
  }

}

