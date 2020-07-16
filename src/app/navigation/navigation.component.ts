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


  personConnected: Utilisateur;
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
  id: any;
  i: number;
  m: boolean;



  constructor(
    private stg: StgService
  ) { }

  ngOnInit(): void {
    this.recupererPersonneConncte();

    if (localStorage.getItem('id')){
      this.getConnectedUser();
    }
    this.m = this.isLoggedIn();
    // this.getPersonConnected();
  }

  public isLoggedIn() {
    return moment().isBefore(localStorage.getItem('expires_at'));
  }

  /*getPersonConnected(){
    let personCon = localStorage.getItem('moi');
    this.personConnected = personCon
  }*/

  getConnectedUser(): void{
    let personne = localStorage.getItem('moi');
    let pers = JSON.parse(personne);
    this.moi = pers;
  }

  recupererPersonneConncte(){
    let personne = localStorage.getItem('moi');
    let pers = JSON.parse(personne);
    this.personConnected = pers;
  }

}
