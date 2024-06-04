import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class LoginService {

  constructor(private router: Router, private cookies:CookieService) {}

  token: string;

  Login(email: string, password: string) {
    //se autentica y se genera el token
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.cookies.set("token", this.token);//guarda en una cookie llamada token el valor del token
            this.router.navigate(['/']);
          }
        )
      }
    ).catch(error => {
      console.error('Error during login:', error);
    });
  }

  getIdToken() {
   // return this.token;
   return this.cookies.get("token");
  }
  estaLogeado(){
   // return this.token;
   return this.cookies.get("token");

  }

  logout(){
    firebase.auth().signOut().then(()=>{
      this.token="";//cuando hace logout se carga el token
      this.cookies.set("token", this.token);
      this.router.navigate(['/']);
      window.location.reload();
    })
  }
}
