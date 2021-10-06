import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private readonly authService: AuthService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('Auth guard');
    // console.log('AuthService', this.authService);
    return this.authService.isLoggedIn;
  }
}
