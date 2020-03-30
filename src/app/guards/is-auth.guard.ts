import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.authService.isAuth())
    if(!this.authService.isAdmin() && this.authService.isAuth()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
