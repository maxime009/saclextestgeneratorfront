// import {resolveSrv} from "dns";

enum Role {
  administrateur,
  apprenant,
  responsable_theme
}

enum Sexe {
  masculin,
  feminin
}

export interface Utilisateur {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateDeNaissance: Date;
  adresse: string;
  login: string;
  password: string;
  isActive: boolean;
  role: Role;
  sexe: Sexe;
}
