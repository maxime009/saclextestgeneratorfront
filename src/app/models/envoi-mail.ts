import {Mail} from './mail';
import {Utilisateur} from './utilisateur';
import {TypeQuestion} from './type-question';
import {Categorie} from './categorie';

export interface EnvoiMail {
  idQuestion: number;
  libelle: string;
  score: number;
  duree: number;
  typeQuestion: TypeQuestion;
  categorie: Categorie;
  dateCreation: Date;
  dateModification: Date;
}
