import {TypeEvaluation} from "./type-evaluation";
import {Utilisateur} from "./utilisateur";
import {StatutEval} from "./statu-eval.enum";

export class Evaluation {
  idEvaluation: number;
  typeEvaluation: string;
  total: number;
  //statut: StatutEval;
  dateCreation: Date;
  dateModification: Date;
  user: Utilisateur;
  intitule: string;
  totalObtenu: number;
  statut: string;
  tempsEvaluation: number;
  tempsApprenant: number;
}
