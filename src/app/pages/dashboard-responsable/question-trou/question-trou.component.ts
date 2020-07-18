import {Component, OnInit} from '@angular/core';
import {Reponse} from '../../../models/reponse';
import {Categorie} from '../../../models/categorie';
import {Question} from '../../../models/question';
import {StgService} from '../../../appl/stg.service';
import {Role} from '../../../models/role';

@Component({
  selector: 'app-question-trou',
  templateUrl: './question-trou.component.html',
  styleUrls: ['./question-trou.component.css']
})
export class QuestionTrouComponent implements OnInit {

  constructor(private stgService: StgService) { }

  ck: string[] = new Array(0);
  c: string[] = new Array(0);
  r: Reponse[];
  q = 0;
  reponse: any;
  reponseModel: Reponse  = {
    idReponse: null,
    libelle: null,
    libelleRep: '',
    description: '',
    valeur: null,
    media: null,
    question_associee: null,
    choisi: false
  };
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

  addReponse(): void{
    this.reponseModel.libelleRep = this.reponse;
    this.reponseModel.libelle = this.reponse;
    this.reponseModel.question_associee = this.questionModel;
    this.stgService.addRepons(this.reponseModel).subscribe(
      res => {
        alert('réponse sauvegardée');
      },
      err => {
        alert('une erreur est survenue en sauvegardant la réponse');
      }
    );
  }

  addQuestion(): void{
    this.ck = this.questionModel.libelle.split('...', 99);
    this.ck.pop();
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

  modQuestion() {
    return false;
  }

}

enum Sexe {
  masculin,
  feminin
}
