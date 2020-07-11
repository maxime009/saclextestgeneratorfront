import {Utilisateur} from './utilisateur';

export interface Theme {
  id_theme: number;
  libelle: string;
  description: string;
  dateCreation: string;
  dateModification: string;
  utilisateur: Utilisateur;
}
