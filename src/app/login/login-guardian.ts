import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class loginGuardian implements CanActivate{

    constructor(private loginService:LoginService, private router:Router){}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        if(this.loginService.estaLogeado()){
            return true;
        }
        else{
            this.router.navigate(['login']);
            return false;//porque no estas logueado
        }
    }
    
}