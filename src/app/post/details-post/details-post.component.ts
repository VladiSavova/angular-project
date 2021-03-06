import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/shared/services/list.service';
import { CreateService } from 'src/app/shared/services/create.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss']
})
export class DetailsPostComponent implements OnInit {

  @Input() posts;
  @Input() currentUser;
  @Input() show;
  @Input() hide;
  @Input() isAdmin;
  @Input() details;
  @Input() categoryName;
  currentUserId;

  // posts;
  // currentUser;
  // show;
  // hide;
  // details;
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
