import {Evaluation} from './evaluation';
import {Question} from './question';
import {ReponseEval} from './reponse-eval';

export class EvalQuestRep {
  id: number;
  eval: Evaluation;
  quest: Question;
  statut: string;
  tempsMis = 0;
  repEval: ReponseEval[];
}
