import { Component, OnInit } from '@angular/core';
import {Theme} from '../../../../models/theme';
import {Utilisateur} from "../../../../models/utilisateur";

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  model: Theme = {
    id: '',
    libelle: '',
    description: '',
    dateCreation: '2020-05-31',
    dateModification: '2020-05-31',
    utilisateur: '1'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
