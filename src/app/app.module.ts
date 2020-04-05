import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './post/create/create.component';
import { AuthenticationService } from './shared/services/authentication.service';
import { RouterModule } from '@angular/router';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CategoryPostComponent } from './post/category-post/category-post.component';
import { PostInfoComponent } from './post/post-info/post-info.component';
import { DetailsPostComponent } from './post/details-post/details-post.component';
import { MyPostsComponent } from './post/my-posts/my-posts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    CreateComponent,
    CreateCategoryComponent,
    CategoryPostComponent,
    PostInfoComponent,
    DetailsPostComponent,
    MyPostsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
