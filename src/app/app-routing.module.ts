import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './post/create/create.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CategoryPostComponent } from './post/category-post/category-post.component';
import { DetailsPostComponent } from './post/details-post/details-post.component';
import { MyPostsComponent } from './post/my-posts/my-posts.component';
import { AnonymousGuard } from './guards/anonymous.guard';
import { IsAuthGuard } from './guards/is-auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { 
    path: "",
    pathMatch: "full",
    component: HomeComponent 
  },
  {
    path: "home",
    children: [
      { 
        path: "",
       component: HomeComponent 
      },
      { 
        path: ":id",
        component: CategoryPostComponent 
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuard]
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AnonymousGuard]
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [IsAuthGuard]
  },
  {
    path: 'category',
    component: CreateCategoryComponent,
    canActivate: [IsAuthGuard]

  },
  {
    path: 'details/:id',
    component: DetailsPostComponent

  },
  {
    path: 'myPosts/:id',
    component: MyPostsComponent,
    canActivate: [IsAuthGuard]

  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
