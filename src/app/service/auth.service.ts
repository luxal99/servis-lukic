import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public http: HttpClient, public router: Router) { }

  auth(admin) {
    return this.http.post("/admin/auth",admin,{responseType:'json'})
  }

  checkToken(token){
    return this.http.post("/admin/",token,{responseType:'json'})
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if (localStorage.getItem('token')) { // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
