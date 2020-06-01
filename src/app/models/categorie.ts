import {Theme} from './theme';

export interface Categorie {
  idCategorie: number;
  libelle: string;
  desciption: string;
  theme: Theme;
  dateCreation: Date;
  dateModification: Date;
}
