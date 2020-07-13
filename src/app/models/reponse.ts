import {Question} from './question';

export class Reponse {
  idReponse: number;
  libelleRep: string;
  description: string;
  valeur: boolean;
  media: Blob;
  libelle: string;
  question_associee: Question;
  // choisi est la variable utilisé pour savoir si la reponse à été choisit par l'apprenant
  choisi = false;
}
