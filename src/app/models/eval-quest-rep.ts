import {Evaluation} from './evaluation';
import {Question} from './question';
import {StatutEval} from "./statu-eval.enum";

export class EvalQuestRep {
  id: number;
  eval: Evaluation;
  quest: Question;
  //reponse: number;
  statut: StatutEval;
}
