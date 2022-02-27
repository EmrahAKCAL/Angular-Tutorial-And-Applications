import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService,
        private router: Router
        ){

    }
    canActivate(){
        return this.authService.isAuthenticated()
        .then((authenticated: Boolean)=>{
            if(authenticated){
                return true;
            }
            else{
                this.router.navigate(['/']); //kullanıcı anasayfaya yönlendirilecek
                return false;
            }
        })  
        .catch()//bir hata varsa catch ile yakalarız.
    }
}