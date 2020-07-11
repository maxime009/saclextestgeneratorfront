import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {StgService} from '../appl/stg.service';
import {Utilisateur} from '../models/utilisateur';
import {Role} from '../models/role';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']

})

export class NavigationComponent implements OnInit {
  activeId: 1;
  moi: Utilisateur = {
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
  rolAD: Role.ADMINISTRATEUR;
  rolRT: Role.RESPONSABLE_THEME;
  rolRC: Role.RESPONSABLE_CATEGORIE;
  rolA: Role.APPRENANT;
  id: any;
  i: number;
  m: boolean;



  constructor(
    private stg: StgService
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem('id')){
      this.getConnectedUser();
    }
    this.m = this.isLoggedIn();
  }

  public isLoggedIn() {
    return moment().isBefore(localStorage.getItem('expires_at'));
  }

  getConnectedUser(): void{
    const y: number = + localStorage.getItem('id');
    this.stg.getUnUserService(y).subscribe(
      res => {
        this.moi = res;
      },
      err => {
        alert('error gettx user');
      }
    );
  }

}
