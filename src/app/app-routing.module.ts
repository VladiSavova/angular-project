import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './post/create/create.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CategoryPostComponent } from './post/category-post/category-post.component';
import { DetailsPostComponent } from './post/details-post/details-post.component';
import { MyPostsComponent } from './post/my-posts/my-posts.component';
import { FavouritePostsComponent } from './post/favourite-posts/favourite-posts.component';
import { AnonymousGuard } from './guards/anonymous.guard';
import { IsAuthGuard } from './guards/is-auth.guard';


const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
 
  {
    path: 'home/:id',
    component: CategoryPostComponent
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

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
