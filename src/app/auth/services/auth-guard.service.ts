import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthApiService } from 'src/app/api';
import { map } from 'rxjs/operators';
import { Observable, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthApiService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return merge([this.service.isTokenValid(), this.service.isLoggedIn]).pipe(
      map(data => {
        if (data) {
          return true;
        }
        this.router.navigate(['login']);
        return false;
      })
    );
  }
}
