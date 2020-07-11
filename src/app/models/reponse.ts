import {Question} from './question';

export class Reponse {
  idReponse: number;
  libelleRep: string;
  description: string;
  valeur: boolean;
  media: Blob;
  libelle: string;
  question_associee: Question;
}
