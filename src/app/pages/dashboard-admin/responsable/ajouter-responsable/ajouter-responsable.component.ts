import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../../../models/utilisateur";
import {StgService} from "../../../../appl/stg.service";

@Component({
  selector: 'app-ajouter-responsable',
  templateUrl: './ajouter-responsable.component.html',
  styleUrls: ['./ajouter-responsable.component.css']
})
export class AjouterResponsableComponent implements OnInit {

  responsableModel: Utilisateur ={
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

  saveResponsable(): void {
    this.stgService.saveRespo(this.responsableModel).subscribe(
      res => {
        alert('le responsable a été ajouté');
      },
      err => {
        alert('error saving responsable');
      }
    );
  }

}
