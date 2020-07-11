import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {Utilisateur} from "../../models/utilisateur";
import {StgService} from "../../appl/stg.service";

@Component({
  selector: 'app-ins-modal',
  templateUrl: './ins-modal.component.html',
  styleUrls: ['./ins-modal.component.css']
})
export class InsModalComponent implements OnInit {

  model: NgbDateStruct;
  sexef = Sexe.feminin;
  sexem = Sexe.masculin;
  template = true;
  year: any;
  month: any;
  day: any;

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

  constructor(private stgService: StgService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
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

enum Sexe {
  masculin,
  feminin
}
