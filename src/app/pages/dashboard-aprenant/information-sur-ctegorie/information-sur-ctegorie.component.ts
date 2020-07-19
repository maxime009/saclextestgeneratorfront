import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from '../../../models/categorie';
import {Evaluation} from '../../../models/evaluation';

@Component({
  selector: 'app-information-sur-ctegorie',
  templateUrl: './information-sur-ctegorie.component.html',
  styleUrls: ['./information-sur-ctegorie.component.css']
})
export class InformationSurCtegorieComponent implements OnInit {

  @Input() categorieDisplay: Categorie = {
    idCategorie: null,
    libelle: '',
    description: '',
    respCat: null,
    dateCreation: null,
    dateModification: null,
    theme: null
  };

  eval: Evaluation = {
    idEvaluation: null,
    typeEvaluation: null,
    total: null,
    dateCreation: null,
    dateModification: null,
    user: null,
    intitule: null,
    totalObtenu: null,
    statut: null
  };



  constructor() { }

  ngOnInit(): void {
  }

}
