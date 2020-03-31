import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from 'src/app/services/list.service';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories$: Observable<Array<Category>>;
  constructor(private service: ListService) {}

  ngOnInit() {
   this.categories$ = this.service.getAllCategories();

  //  this.service.getAllCategories().subscribe(data => {
  //   this.categories$ = data['categories'];
  }

}
