import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../models/question';
import {StgService} from '../../../appl/stg.service';
import {Reponse} from '../../../models/reponse';
import {Categorie} from '../../../models/categorie';
import {Role} from "../../../models/role";
import {Difficulte} from '../../../models/difficulte.enum';


@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QCMComponent implements OnInit {

  constructor(private stgService: StgService) { }
  @Input() categorie: Categorie;

  ck: any;

  r: Reponse[] = new Array(0);
  q = 0;
  form1 = 0;
  reponse1: Reponse = {
    idReponse: null,
  libelleRep: '',
  description: '',
  valeur: null,
  media: null,
  libelle: '',
  question_associee: null,
    choisi: false
  };
  reponse2: Reponse = {
  idReponse: null,
  libelleRep: '',
  description: '',
  valeur: null,
  media: null,
  libelle: '',
  question_associee: null,
    choisi: false
};
  reponse3: Reponse = {
    idReponse: null,
    libelleRep: '',
    description: '',
    valeur: null,
    media: null,
    libelle: '',
    question_associee: null,
    choisi: false
  };
  reponse4: Reponse = {
    idReponse: null,
    libelleRep: '',
    description: '',
    valeur: null,
    media: null,
    libelle: '',
    question_associee: null,
    choisi: false
  };
  updateReponse: Reponse = {
    idReponse: null,
    libelleRep: '',
    description: '',
    valeur: null,
    media: null,
    libelle: '',
    question_associee: null,
    choisi: false
  };
  val: number;
  b = true;
  reponses: Reponse[]  = new Array(0);
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
    duree: 0,
    typeQuestion: null,
    categorie: this.cat,
    dateCreation: null,
    dateModification: null,
    reponses: null,
    difficulte: null
  };
  //public labelDifficulte = labelDifficulte;
  difficultes = Difficulte;
  public niveauDifficulte = [];

  addReponse1(rep: Reponse): void{
    rep.question_associee = this.questionModel;
    console.log(rep);
    this.stgService.addRepons(rep).subscribe(
      res => {
        this.form1 = 1;
        alert('réponse sauvegardée');
        this.reponse4 = {
          idReponse: null,
          libelleRep: '',
          description: '',
          valeur: null,
          media: null,
          libelle: '',
          question_associee: null,
          choisi: false
        };
        this.getRep();
      },
      err => {
        alert('une erreur est survenue en sauvegardant la réponse');
      }
    );
  }

  addListReponse(): void{
    this.reponse1.question_associee = this.questionModel;
    this.reponse2.question_associee = this.questionModel;
    this.reponse3.question_associee = this.questionModel;
    this.reponses = [this.reponse1, this.reponse2, this.reponse3];
    this.stgService.addListRepons(this.reponses).subscribe(
      res => {
        alert('réponse sauvegardée');
        this.form1 = 1;
        this.q = 0;
        this.getRep();
      },
      err => {
        alert('une erreur est survenue en sauvegardant la réponse');
      }
    );
  }

  public getRep(){
    this.stgService.listRepQuest(this.questionModel.idQuestion).subscribe(
      res => {
        this.r = res;
        console.log(this.r);
      },
      err => {
        alert('error');
      }
    );
  }

  ngOnInit(): void {
  this.niveauDifficulte = Object.keys(this.difficultes);
  console.log(this.niveauDifficulte);
  }
  addQuestion(): void{
    this.questionModel.categorie = this.categorie;
    console.log(this.ck);
    this.stgService.addQuestion(this.questionModel).subscribe(
      res => {
        alert('question sauvegardée');
        this.q = 1;
        this.questionModel = res;
        console.log(this.questionModel);
      },
      err => {
        alert('error saving questions');
      }
    );
  }

  modQuestion() {
    console.log(this.questionModel);
    this.stgService.modifQuestion(this.questionModel).subscribe(
      res => {
        alert('question modifiée');
        // this.q = 1;
        this.questionModel = res;
      },
      err => {
        alert('error saving questions');
      }
    );
  }

  modReponse() {
    this.stgService.modifReponse(this.updateReponse).subscribe(
      res => {
        alert('réponse modifiée');
        //this.getRep();
      },
      err => {
        alert('error modifying answer');
      }
    );
  }


  recup(repo: Reponse) {
    this.updateReponse = repo
  }

  supprimerReponse(repo: Reponse) {
    this.stgService.deleteReponse(repo.idReponse).subscribe(
      res => {
        alert('réponse supprimée');
        this.getRep();
      },
      err => {
        alert('error modifying answer');
      }
    );  }
}


enum Sexe {
  masculin,
  feminin
}

