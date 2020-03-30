import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.authService.isAdmin())
    if(this.authService.isAdmin()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}