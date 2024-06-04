import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

@Injectable()
export class LoginService {

  constructor(private router: Router) {}

  token: string;

  Login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.router.navigate(['/']);
          }
        )
      }
    ).catch(error => {
      console.error('Error during login:', error);
    });
  }

  getIdToken() {
    return this.token;
  }
}
