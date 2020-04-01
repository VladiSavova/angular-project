import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateService } from 'src/app/shared/services/create.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  form: FormGroup;
  constructor(private service: CreateService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      photo: ['', [Validators.required]]
    })
  }

  createCategory() {
    this.service.createCategory(this.form.value).subscribe((data) => {
      this.router.navigate(['/home'])
    })

  }

}
