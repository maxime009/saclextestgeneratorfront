import { Component, OnInit } from '@angular/core';
import {EvaluationService} from "../../appl/evaluation.service";
import {QuestionReponse} from "../../models/question-reponse";
import {Evaluation} from '../../models/evaluation';
import {TypeEvaluation} from "../../models/type-evaluation";
import {Utilisateur} from "../../models/utilisateur";
import {StatutEval} from "../../models/statu-eval.enum";
import {UtilisateursService} from '../../appl/utilisateurs.service';
import {StgService} from "../../appl/stg.service";
import {ResultatEvaluation} from "../../models/resultat-evaluation";
import {EvalQuestRep} from "../../models/eval-quest-rep";
import {Reponse} from "../../models/reponse";
import {ReponseEval} from "../../models/reponse-eval";
import {CategorieService} from "../../appl/categorie.service";
import {Categorie} from "../../models/categorie";
import {ThemeService} from '../../appl/theme.service';
import {Theme} from '../../models/theme';

@Component({
  selector: 'app-dashboard-aprenant',
  templateUrl: './dashboard-aprenant.component.html',
  styleUrls: ['./dashboard-aprenant.component.css']
})
export class DashboardAprenantComponent implements OnInit {

  resultatEvaluation: ResultatEvaluation = {
    eqr : new Array(0),
    reponses : new Array(0)
  };
  moi: Utilisateur;
  g: any;
  go = 'hello';
  test  =  2;
  themes: Theme[] = new Array(0);
  themeChoisi: Theme;
  categorieChoisi: Categorie;
  nbQuest: number;
  resultat: EvalQuestRep[];
  private personConnected: Utilisateur;
  listEqr: EvalQuestRep[];
  constructor(private evaluationService: EvaluationService,
              private utilisateurService: UtilisateursService,
              private stg: StgService,
              private categorieService: CategorieService,
              private themeService: ThemeService) { }
  active = 'top';
  eval: Evaluation = {
    idEvaluation: null,
    typeEvaluation: null,
    total: null,
    dateCreation: null,
    dateModification: null,
    user: this.moi,
    intitule: null,
    totalObtenu: null,
    statut: null
  };
  questionReponses: QuestionReponse[] = new Array(0);
  questionReponse: QuestionReponse;
  e: any;
  evalQuestRep: EvalQuestRep;
  reponsesUser: ReponseEval[];
  questionActu: number;
  questionDisplayed: EvalQuestRep;
  reponseEval: ReponseEval;
  categories: Categorie[] = new Array(0);
  categorieDisplay: Categorie;
  formEvaluation = false;
  temps: number;
  reussi = StatutEval.Reussi;
  echoue = StatutEval.Echoue;
  star: StatutEval;
  statut: StatutEval.Reussi;
  listEvaluations: Evaluation[] = new Array(0);
  evaluation: Evaluation;


  ngOnInit(): void {
    if (localStorage.getItem('id')){
      this.getConnectedUser();
    }
    this.listCategorie();
    this.getThemes();
    this.getMesEvaluation();
  }

  listCategorie(){
    this.categorieService.getAllCategorie().subscribe(
      res => {
        this.categories = res;
        if (this.categories){
          this.categorieDisplay = this.categories[0];
        }
      },
      err => {
        alert('error gettx categories');
      }
    );
  }

  creerEvaluation(categorie: number, nbQuest: number){
    const token = localStorage.getItem('token');
    const id: number = + localStorage.getItem('id');
    this.evaluationService.createEvaluation(id, categorie, nbQuest, token, this.eval).subscribe(
      res => {
        this.questionReponses = res;
        console.log(this.questionReponses);
        this.questionReponse = this.questionReponses[0];
        this.questionReponse.eqr.quest.reponses = this.shufleRep(this.questionReponse.eqr.quest.reponses);
        this.questionActu = 0;
        alert('eval crée');
      },
      err => {
        alert('error creatx evaluation');
      }
    );
  }

  getConnectedUser(): void{
    let personne = localStorage.getItem('moi');
    let pers = JSON.parse(personne);
    this.moi = pers;
    /*const y: number = + localStorage.getItem('id');
    this.stg.getUnUserService(y).subscribe(
      res => {
        this.moi = res;
        this.g = this.resultatEvaluation.eqr.length;
      },
      err => {
        alert('error gettx user');
      }
    );*/
  }

  initQuestionReponses(){
    this.questionReponses = new Array(0);
    // this.resultat ;
  }

  nextQuestion() {
    this.questionActu += 1;
    this.questionReponse = this.questionReponses[this.questionActu];
  }

  previousQuestion() {
    this.questionActu -= 1;
    this.questionReponse = this.questionReponses[this.questionActu];
  }

  receiveRes($event){
    this.resultat = $event;
  }

  getMesEvaluation(){
    const y: number = + localStorage.getItem('id');
    this.evaluationService.mesEvaluations(y).subscribe(
      res => {
        this.listEvaluations = res;
        this.evaluation = this.listEvaluations[0];
        this.getEqrDeEvaluation(this.evaluation.idEvaluation);
        console.log(this.listEqr);
        console.log(this.evaluation);
      },
      err => {
        alert('error gettx evaluations');
      }
    );
  }

  getEqrDeEvaluation(idEvaluation: number){
    this.evaluationService.eqrEvaluation(idEvaluation).subscribe(
      res => {
        this.listEqr = res;
        },
      err => {
        alert('error gettx eqr');
      }
    );
  }

  getCategorie(categorie: Categorie) {
    this.categorieDisplay = categorie;
  }

  afficherformEvaluation() {
    this.formEvaluation = !this.formEvaluation;
  }

  public getThemes(){
    this.themeService.getAllThemes().subscribe(
      res => {
        this.themes = res;
      },
      err => {
        alert('error');
      }
    );
  }

  getCategorieduTheme() {
    this.categorieService.getCategoriedeTheme(this.themeChoisi.id_theme).subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert('error gettx categorie du theme');
      }
    );
  }

  shufleRep(listRep: Reponse[]){
    var m = listRep.length, t, i;
    while (m){
      i = Math.floor(Math.random() * m--);
      t = listRep[m];
      listRep[m] = listRep[i];
      listRep[i] = t;
    }
    return listRep;
  }

  getEvaluation(e: Evaluation) {
    this.evaluation = e;
    this.getEqrDeEvaluation(e.idEvaluation);
  }
}
