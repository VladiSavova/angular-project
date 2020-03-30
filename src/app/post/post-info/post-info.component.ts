import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CreateService } from 'src/app/services/create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss']
})
export class PostInfoComponent implements OnInit {

  @Input() posts;
  @Input() currentUser;
  @Input() show;
  @Input() hide;
  @Input() isAdmin;
  @Input() details;
  @Input() categoryName;
  currentUserId;

  constructor(
    private authService: AuthenticationService,
    private crudService: CreateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentUserId = this.authService.isAuth();
  }

  deletePost(id) {
    this.crudService.deletePost(id).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

  removeFromFavourites(postId, userId) {
    this.crudService.removeFromFavourites(postId, userId).subscribe((data) => {
      this.router.navigate(['/home']);
    })
  }

  addToFavourites(postId, userId) {
    this.crudService.addToFavourites(postId, userId).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home']);
     
    });
  }
}
