import {Evaluation} from './evaluation';
import {Question} from './question';
import {StatutEval} from "./statu-eval.enum";
import {ReponseEval} from './reponse-eval';

export class EvalQuestRep {
  id: number;
  eval: Evaluation;
  quest: Question;
  //reponse: number;
  statut: StatutEval;
  tempMis: number;
  repEval: ReponseEval[];
}
