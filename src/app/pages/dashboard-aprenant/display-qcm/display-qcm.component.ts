import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EvalQuestRep} from '../../../models/eval-quest-rep';
import {Question} from '../../../models/question';
import {QuestionReponse} from '../../../models/question-reponse';
import {Reponse} from '../../../models/reponse';
import {ReponseEval} from '../../../models/reponse-eval';
import {FormGroup} from "@angular/forms";
import {StatutEval} from "../../../models/statu-eval.enum";
import * as moment from 'moment';
import {EvaluationService} from '../../../appl/evaluation.service';


@Component({
  selector: 'app-display-qcm',
  templateUrl: './display-qcm.component.html',
  styleUrls: ['./display-qcm.component.css']
})
export class DisplayQCMComponent implements OnInit {
  go = 'hjhf';

  public count = 1;

  constructor(private evaluationService: EvaluationService) {
  }


  questionModel: Question = {
    idQuestion: null,
    libelle: '',
    score: null,
    duree: null,
    typeQuestion: null,
    categorie: null,
    dateCreation: null,
    dateModification: null,
    reponses: null,
    difficulte: null
  };

  test = '12,23';

  repon: Reponse[] = new Array(0);


  @Input() evalQuestRep: EvalQuestRep = {
    id: null,
    eval: null,
    quest: this.questionModel,
    statut: null,
    tempMis: null
  };
  e: EvalQuestRep = {
    id: null,
    eval: null,
    quest: this.questionModel,
    statut: null,
    tempMis: null
  };

  @Input() questionReponses: QuestionReponse[] = new Array(0);
  @Input() questionReponse: QuestionReponse = {
    eqr : this.e,
    reponses : null
  };
  @Output('initQuestionReponses') initQuestionReponses: EventEmitter<any> = new EventEmitter();
  @Output() sendResultat = new EventEmitter<EvalQuestRep>()
  @Input() temps: number;
  @Input() questionActu: number;
  show = false;
  reponseEval: ReponseEval = {
    id: null,
    evalId: null,
    rep: null
  };

  bonneReponses: Reponse[] = new Array(0);

  reponseUser: ReponseEval;
  myGroup: FormGroup;
  counterStart: 1;
  duree = 0;
  dureeSup = 0;
  tempsTotal = 0;
  resultat: any;

  ngOnInit(): void {
  }

  repondre() {
    return false;
  }


  nextQuestion() {
    this.show = false;
    for (let i = 0; i < this.questionReponse.eqr.quest.reponses.length; i++) {
      if (this.questionReponse.eqr.quest.reponses[i].choisi) {
        let repEval = new ReponseEval();
        repEval.evalId = this.questionReponse.eqr;
        repEval.rep = this.questionReponse.eqr.quest.reponses[i];
        console.log(repEval);
        this.questionReponses[this.questionActu].reponses.push(repEval);
      }
    }
    console.log(this.questionReponses);
    this.questionActu += 1;
    // this.questionReponse = this.questionReponses[this.questionActu];
    if (this.questionActu === this.questionReponses.length){
      alert('vous êtes à la derniere question');
      this.questionActu -= 1;
    } else {
       this.questionReponse = this.questionReponses[this.questionActu];
       this.questionReponse.eqr.quest.reponses = this.shufleRep(this.questionReponse.eqr.quest.reponses);
     }
  }

  previousQuestion() {
    for (let i = 0; i < this.questionReponse.eqr.quest.reponses.length; i++) {
      if (this.questionReponse.eqr.quest.reponses[i].choisi) {
        let repEval = new ReponseEval();
        repEval.evalId = this.questionReponse.eqr;
        repEval.rep = this.questionReponse.eqr.quest.reponses[i];
        this.questionReponses[this.questionActu].reponses.push(repEval);
      }
    }

    this.questionActu -= 1;

    if (this.questionActu < 0) {
      alert('vous êtes à la premiere question');
      this.questionActu += 1;
    } else {
      this.questionReponse = this.questionReponses[this.questionActu];

    }
  }

  endExam() {
    this.tempsTotal = this.duree + this.dureeSup;
    this.evaluationService.correction(this.questionReponses).subscribe(
      res => {
        this.resultat = res;
        console.log(this.resultat);
        this.questionReponses = new Array(0);
        this.initQuestionReponses.emit();
        this.sendRes();
      },
      err => {
        alert('error correctx exam');
      }
    );
  }

  sendRes(){
    this.sendResultat.emit(this.resultat);
  }

    /*forval(){
      for (const r of this.repon){
        this.reponseEval.id = null;
        this.reponseEval.rep = r;
        this.reponseEval.id = this.questionReponse.eqr.id;
        console.log(this.reponseEval);
        this.questionReponse.reponses.push(this.reponseEval);
        console.log(this.questionReponse);
      }
    }*/

    answerQuestion(reponse: Reponse): Reponse{
      reponse.choisi = !reponse.choisi;

      return reponse;
      console.log(this.questionReponse);
      console.log(reponse);
    }


  showRightAnswer() {
    this.show = true;
  }

  counter(){
      return false;
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
  // recuperer les bonnes réponses
  /*testRep(){
    for(let i = 0; i < this.questionReponse.eqr.quest.reponses.length; i++) {
      if (this.questionReponse.eqr.quest.reponses[i].valeur) {
        this.test += this.questionReponse.eqr.quest.reponses[i].idReponse.toString();
      }
    }
  }*/

}
