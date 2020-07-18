import {TypeQuestion} from './type-question';
import {Categorie} from './categorie';
import {Reponse} from "./reponse";
import {Difficulte} from './difficulte.enum';

export interface Question {
  idQuestion: number;
  libelle: string;
  score: number;
  duree: number;
  typeQuestion: TypeQuestion;
  categorie: Categorie;
  dateCreation: Date;
  dateModification: Date;
  reponses: Reponse[];
  difficulte: Difficulte;
}
