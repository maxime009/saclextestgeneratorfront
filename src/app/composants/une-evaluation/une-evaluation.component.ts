import {Component, Input, OnInit} from '@angular/core';
import {Evaluation} from '../../models/evaluation';
import {EvalQuestRep} from '../../models/eval-quest-rep';
import {Utilisateur} from '../../models/utilisateur';

@Component({
  selector: 'app-une-evaluation',
  templateUrl: './une-evaluation.component.html',
  styleUrls: ['./une-evaluation.component.css']
})
export class UneEvaluationComponent implements OnInit {

  @Input() evaluation: Evaluation;
  @Input() listEqr: EvalQuestRep[];
  @Input() moi: Utilisateur;
  pourcentageReussite: any;

  constructor() { }

  ngOnInit(): void {
    // this.pourcentageReussite = (this.evaluation.totalObtenu / this.evaluation.total) * 100;
    console.log(this.pourcentageReussite);
    console.log(this.listEqr);
    console.log(this.evaluation);
  }

}
