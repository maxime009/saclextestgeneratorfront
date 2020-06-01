import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {StgService} from '../../appl/stg.service';
//import { AuthenticationService } from './auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  login: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  //model: any = {};

  model: UtilisateurModel={
    login:'',
    password:''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stg: StgService,
    private http: HttpClient,
    //private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
   // sessionStorage.setItem('token', '');
  }

  /*login(): void {
    this.stg.login1(this.model).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.model.login + ':' + this.model.password)
        );
        this.router.navigate(['']);
      } else {
        alert('Authentication failed.');
      }
    });
  }*/

  login1() {
    let url = 'http://localhost:8086/login';
    this.http.post<Observable<boolean>>(url, {
      login: this.model.login,
      password: this.model.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.model.login + ':' + this.model.password)
        );
        this.router.navigate(['']);
      } else {
        alert('Authentication failed.');
      }
    });
  }


}

export interface UtilisateurModel {
  login: string;
  password: string;
}
