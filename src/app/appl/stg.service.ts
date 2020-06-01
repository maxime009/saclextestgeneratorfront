import { Injectable } from '@angular/core';
import {UtilisateurModel} from '../pages/connexion/connexion.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from "../models/utilisateur";
import {Theme} from "../models/theme";
import {Categorie} from "../models/categorie";



@Injectable({
  providedIn: 'root'
})
export class StgService {

  public base = 'http://localhost:8086/';
  private listTheme = this.base + 'listerTheme';
  private connexion = this.base + 'login';
  private creatAccount = this.base + 'all/creerUtilisateur';
  private listUser = this.base + 'admin/listerUtilisateur';
  private deleteUser = this.base + 'admin/supprimerUtilisateur/';
  private modofyAccount = this.base + 'modifierUtilisateur';//probleme avec cette fxn l'id
  private unUser = this.base + 'UnUtilisateur/';
  private listCategorieParTheme = this.base + 'listerCategoriesparTheme';
  private compteCategorieParTheme = this.base + 'countCategoriesparTheme';


  constructor(private http: HttpClient) { }

  /*login1(utilisateur: UtilisateurModel): Observable<Any>{
    return this.http.post(this.connexion, utilisateur);
    // return this.http.post(this.connexion, personne);
  }*/
  getAllThemes(): Observable<Theme[]>{
    return this.http.get<Theme[]>(this.listTheme);
  }

  getAllUser(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.listUser);
  }

  nbCategorieByTheme(ThemeId: string): Observable<string>{
    return this.http.get<string>(this.compteCategorieParTheme + ThemeId);
  }

  getUnUserService(UtilisateurId: string): Observable<Utilisateur>{
    return this.http.get<Utilisateur>(this.unUser + UtilisateurId);
  }

  AddTheme(theme: Theme): Observable<Theme>{
    return null;
  }

}
