import { Component, OnInit } from '@angular/core';
import {StgService} from '../../appl/stg.service';
import {Utilisateur} from '../../models/utilisateur';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {

  constructor(private stgService: StgService) { }

  model: NgbDateStruct;
  sexef = Sexe.feminin;
  sexem = Sexe.masculin;
  template = true;
  year: any;
  month: any;
  day: any;
  pic: any;

  m: any;

  userModel: Utilisateur = {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: null,
    dat: null,
    adresse: '',
    login: '',
    password: '',
    isActive: null,
    role: null,
    sexe: null,
    description: ''
};

  ngOnInit(): void {
  }

  saveUser(): void {
    this.pic.valueOf();
    this.year = this.model.year.toString();
    this.month = this.model.month.toString();
    this.day = this.model.day.toString();
    this.userModel.dat = this.year + '-' + this.month + '-' + this.day ;
    this.userModel.dateNaissance = this.userModel.dat;
    this.stgService.saveUserService(this.userModel).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('error saving user');
      }
    );
  }

}

enum Role {
  administrateur,
  apprenant,
  responsable_theme
}

enum Sexe {
  masculin,
  feminin
}
