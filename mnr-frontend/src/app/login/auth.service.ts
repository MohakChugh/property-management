import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // let roles = route.data["roles"] as Array<string>;

    // if (localStorage.getItem('currentUser')) {
    //   var currentuser: any;
    //   currentuser = JSON.parse(localStorage.getItem('currentUser'));
    //   if (currentuser.level >= roles[0]) {
        return true;
    //   }
    // }
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    // return false;
  }

}
