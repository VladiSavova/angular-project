import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  constructor(public authService: AuthenticationService, private router: Router) { }


  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['home']);
  }
}
