#### How to implement canActivate

```
import { Injectable } from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
 
@Injectable()
export class AuthguardService  implements CanActivate  {
 
  constructor(private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let roles = route.data["roles"] as Array<string>;
    // console.log('data roles : '+roles[0]);
    // console.log(route);
    if (localStorage.getItem('currentUser')) {
        var currentuser:any;
        currentuser =JSON.parse(localStorage.getItem('currentUser'));
        if(currentuser.level >= roles[0]){
          return true;
        }
    }
    this.router.navigate(['/logout'], { queryParams: { returnUrl: state.url }});
    return false;
  }
 
}
```