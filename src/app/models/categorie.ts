import {Theme} from './theme';
import {Utilisateur} from "./utilisateur";
import {RespCat} from './resp-cat';

export interface Categorie {
  idCategorie: number;
  libelle: string;
  description: string;
  theme: Theme;
  respCat: Utilisateur;
  dateCreation: any;
  dateModification: any;
}
