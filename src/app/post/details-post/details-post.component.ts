import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { CreateService } from 'src/app/services/create.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss']
})
export class DetailsPostComponent implements OnInit {

  posts;
  currentUser;
  show;
  hide;
  isAdmin;
  details;
  constructor(
    private route: ActivatedRoute,
    private service: ListService,
    private crud: CreateService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.isAuth();
    this.show = true;
    this.hide = false;
    this.details = false;
    this.isAdmin = this.authService.isAdmin();

    this.route.params.subscribe(data => {
      this.service.getPostDetails(data.id).subscribe(data => {
        this.posts = data["post"];
        this.posts = [this.posts];
      });
    });
  }

  deletePost(id) {
    this.crud.deletePost(id).subscribe(data => {
      this.router.navigate(["home"]);
    });
  }
}
