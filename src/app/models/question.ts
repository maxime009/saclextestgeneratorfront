import {TypeQuestion} from './type-question';
import {Categorie} from './categorie';

export interface Question {
  idQuestion: number;
  libelle: string;
  score: number;
  duree: number;
  typeQuestion: TypeQuestion;
  categorie: Categorie;
  dateCreation: Date;
  dateModification: Date;
}
