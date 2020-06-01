import {Question} from './question';

export class Reponse {
  idReponse: number;
  libelle: string;
  description: string;
  valeur: boolean;
  media: Blob;
  question_associee: Question;
}
