// import {resolveSrv} from "dns";



import {Role} from './role';

enum Sexe {
  masculin,
  feminin
}

export interface Utilisateur {
  id: number;
  nom: string;
  prenom: any;
  email: string;
  telephone: string;
  dateNaissance: any;
  dat: string;
  adresse: string;
  login: string;
  password: string;
  isActive: boolean;
  role: Role;
  sexe: Sexe;
  description: string;
}
