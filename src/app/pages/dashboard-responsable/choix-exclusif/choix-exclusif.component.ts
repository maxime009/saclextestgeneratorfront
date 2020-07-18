import {Component, OnInit} from '@angular/core';
import {Question} from "../../../models/question";
import {StgService} from "../../../appl/stg.service";
import {Categorie} from "../../../models/categorie";
import {Role} from "../../../models/role";

@Component({
  selector: 'app-choix-exclusif',
  templateUrl: './choix-exclusif.component.html',
  styleUrls: ['./choix-exclusif.component.css']
})
export class ChoixExclusifComponent implements OnInit {

  constructor(private stgService: StgService) { }
  vrai: exclu.vrai;
  faux: exclu.faux;
  ck: any;
  q = 0;
  cat: Categorie = {
    idCategorie: 2,
    libelle: 'blaz',
    description: null,
    respCat: null,
    theme: {
      id_theme: 3,
      libelle: 'theme2',
      description: '',
      dateCreation: null,
      dateModification: null,
      utilisateur: {
        id: 2,
        nom: 'Fodjo',
        prenom: 'Maxime',
        email: 'fodjomaximejr@gmail.com',
        dateNaissance: '1999-12-12',
        login: 'MAX',
        password: '1234',
        role: Role.RESPONSABLE_CATEGORIE,
        sexe: Sexe.masculin,
        isActive: true,
        telephone: null,
        dat: null,
        adresse: null,
        description: ''
      }
    },
    dateCreation: null,
    dateModification: null
  };
  questionModel: Question = {
    idQuestion: null,
    libelle: '',
    score: null,
    duree: null,
    typeQuestion: null,
    categorie: this.cat,
    dateCreation: null,
    dateModification: null,
    reponses: null,
    difficulte: null
  };



  ngOnInit(): void {
  }

  addQuestion(): void{
    this.ck = typeof this.questionModel;
    this.stgService.addQuestion(this.questionModel).subscribe(
      res => {
        alert('question sauvegardée');
        this.q = 1;
        this.questionModel = res;
      },
      err => {
        alert('error saving questions');
      }
    );
  }
  addReponse(){
    return false;
  }

  modQuestion() {
    return false;
  }

}

enum Sexe {
  masculin,
  feminin
}
enum exclu{
  vrai,
  faux
}
