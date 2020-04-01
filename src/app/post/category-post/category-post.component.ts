import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.scss']
})
export class CategoryPostComponent implements OnInit {
  posts;
  categoryName;
  details;
  

  constructor(private service: ListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.details = true;
    this.route.params.subscribe((data) => {
      let id = data.id;
      this.service.getAllPosts(id).subscribe((data) => {
        this.posts = data['posts'];
        this.categoryName = data['categoryName'];
      })
    })
   
  }

}