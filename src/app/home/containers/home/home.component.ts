import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: string = null;
  rightButtonElevation = 1;
  leftButtonElevation = 1;

  constructor(private authService: AuthApiService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.currentLoggedUser;
  }

  goToCreator() {
    this.router.navigate(['create']);
  }

  goToQuizes() {
    this.router.navigate(['quizes']);
  }

  logout() {
    this.authService.removeToken();
    this.authService.isLoggedIn.next(false);
    this.router.navigate(['login']);
  }
}
