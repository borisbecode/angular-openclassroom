import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authStatus: boolean;

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    this.authStatus = this.AuthService.isAuth;
  }

  /*  onSignIn() {
    this.AuthService.signIn().then(() => {
      console.log('connexion reussie');
      this.authStatus = this.AuthService.isAuth;
    });
  } */
  onSignIn() {
    this.AuthService.signIn();
    this.authStatus = this.AuthService.isAuth;
  }
  onSignOut() {
    this.AuthService.signOut();
    this.authStatus = this.AuthService.isAuth;
  }
}
