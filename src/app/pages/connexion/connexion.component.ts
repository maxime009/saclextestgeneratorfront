import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {StgService} from '../../appl/stg.service';
// import * as moment from 'moment';
import * as moment from 'moment';
import {Utilisateur} from '../../models/utilisateur';
import {Role} from '../../models/role';
import {UtilisateursService} from "../../appl/utilisateurs.service";
// import { AuthenticationService } from './auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {
  moi: Utilisateur;
  u: any;
  a: any;
  id: number;

  model: LoginViewModel = {
    username: '',
    password: ''
  };

  utilisateur: Utilisateur =  {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    login: '',
    adresse: '',
    password: '',
    isActive : null,
    role : null,
    sexe : null,
    dateNaissance: null,
    dat: null,
    description: null
  };


  constructor(
    private router: Router,
    private stg: StgService,
    private userService: UtilisateursService
  ) { }

  ngOnInit(): void {
  }

  login(): void{
    this.stg.connec(this.model).subscribe(
      res => {
          this.setSession(res);
          this.userService.moi = res.body;
          this.u = res.body.nom;
          this.id = res.body.id;
          localStorage.setItem('nom', this.u.toString());
          localStorage.setItem('id', this.id.toString());
          if (res.body.role === 'ADMINISTRATEUR'){
            this.router.navigate(['/admin']);
          }
          if (res.body.role === 'RESPONSABLE_THEME') {
            this.router.navigate(['/responsableTheme']);
          }
          if (res.body.role === 'RESPONSABLE_CATEGORIE') {
            this.router.navigate(['/responsable']);
          }
          if (res.body.role === 'APPRENANT') {
            this.router.navigate(['/apprenant']);
          }
      },
      err => {
        alert('mdp ou email incorrect');
      }
    );
  }

  private setSession(authResult: any){
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('token', authResult.headers.get('Authorization'));
    localStorage.setItem('expires_at', authResult.headers.get('Dateexpiration') );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nom');
    localStorage.removeItem('id');
    localStorage.removeItem('expires_at');

  }

  public isLoggedIn() {
    return moment().isBefore(localStorage.getItem('expires_at'));

  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}

export interface LoginViewModel {
  username: string;
  password: string;
}
