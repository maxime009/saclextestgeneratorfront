import {ReponseEval} from './reponse-eval';
import {EvalQuestRep} from './eval-quest-rep';

export class QuestionReponse {
  eqr: EvalQuestRep = {
      id: null,
      eval: null,
      quest: null,
    statut: null,
    tempsMis: null,
    repEval: null
    };
  reponses: ReponseEval[] = new Array(0);
}
