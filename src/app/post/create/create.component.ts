import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../shared/interfaces/category';
import { ListService } from 'src/app/shared/services/list.service';
import { CreateService } from 'src/app/shared/services/create.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  categories$: Observable<Array<Category>>;
  form
  currentUser: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private listService: ListService,
    private createService: CreateService
  ) {}

 
  ngOnInit() {
    
    this.currentUser = localStorage.getItem('userId');
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      category: ['', [Validators.required]],
      photo: ['', [Validators.required] ],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)] ],
      creator: this.currentUser
    });
    console.log(this.currentUser)
  
  }


  onClick(category) {
    document.getElementById('chooseCategory').innerText = category.name;
    this.form.controls.category = category.name;
  }

  ngAfterContentInit() {
   this.categories$ = this.listService.getAllCategories();
  }

  createPost(data) {
    this.createService.createPost(this.form.value).subscribe((data) => {
      this.router.navigate(['/home']);
      console.log('create');
      
    })
  }

}
