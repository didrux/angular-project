import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  canActivate() {
    if (localStorage.getItem('auth') != 'true') {
      this.router.navigate(['login']);
      console.log('Unlogged');
    }
    return true;
  }
  constructor(private router: Router) {}
}

export class AuthorizationGuardService {
  constructor() {}
}
