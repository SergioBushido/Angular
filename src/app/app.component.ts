import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCkIJXspYhifTjY5grc8OIYeT7PsQ0imVs",
      authDomain: "mis-clientes-f97e0.firebaseapp.com",
      projectId: "mis-clientes-f97e0",
      storageBucket: "mis-clientes-f97e0.appspot.com",
      messagingSenderId: "190132073484",
      appId: "YOUR_APP_ID_HERE"
    });
  }
}
