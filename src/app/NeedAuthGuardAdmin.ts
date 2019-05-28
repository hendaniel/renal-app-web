import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router/src/router_state";
import { UserInformationService } from "./services/user-information.service";

@Injectable()
export class NeedAuthGuardAdmin implements CanActivate {
  constructor(
    private services: UserInformationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = route["_routerState"]["url"];

    if (this.services.isLogged()) {
      if (this.services.isAdmin()) {
        return true;
      } else console.log("Not Admin");
    } else console.log("Not Logged");

    /*
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    
    */

    this.router.navigateByUrl("/login");

    return false;
  }
}
