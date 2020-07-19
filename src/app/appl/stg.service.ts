import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {LoginViewModel} from '../pages/connexion/connexion.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../models/utilisateur';
import {Theme} from '../models/theme';
import {Categorie} from '../models/categorie';
import {Question} from '../models/question';
import {Reponse} from '../models/reponse';



@Injectable({
  providedIn: 'root'
})
export class StgService {

  public base = 'http://localhost:8088/';
  //private listTheme = this.base + 'listerTheme';
  private conne = this.base + 'login';
    //this.base + 'login';
  private addRespo = this.base + 'admin/creerUtilisateur';
  private listUser = this.base + 'admin/listerUtilisateur';
  private deleteUser = this.base + 'admin/supprimerUtilisateur/';
  private modofyAccount = this.base + 'modifierUtilisateur'; // probleme avec cette fxn l'id
  private unUser = this.base + 'utilisateur/UnUtilisateur/';
  /*private listCategorieParTheme = this.base + 'listerCategoriesparTheme';
  private nbCategorieParTheme = this.base + 'categoriesParTheme/';
  private nbQuestParTheme = this.base + 'questionsParTheme/';
  private nbCarteParTheme = this.base + 'cartesParTheme/';
  private saveTheme = this.base + 'admin/creerTheme';
  private modifierTheme = this.base + 'admin/modifierTheme';*/
  // private saveUtilisateur = this.base + 'all/creerUtilisateur';
  // private saveUtilisateur = 'http://localhost:8086/all/creerUtilisateur';
  private saveApprenant = this.base + 'all/creerApprenant';
  //private delTheme = this.base + 'admin/supprimerTheme/';
  // TODO create method to save responsable
  private listRespo = this.base + '';
  // TODO create method to list responsable && call on html in *ngFor && charge it also on theme for addix theme
  // TODO FAIRE LES TOFS DES EVALUATIONS
  private addQuest = this.base + 'question/creerQuestion';
  private modQuest = this.base + 'question/modifierQuestion';
  private addRep = this.base + 'reponse/creerReponse';
  private modRep = this.base + 'reponse/modifierReponse';
  private modRepb = this.base + 'reponse/modifierReponse';
  private delRep = this.base + 'reponse/supprimerReponse/';
  private delQuest = this.base + 'question/supprimerQuestion/';
  private addlistRep = this.base + 'reponse/savereponses';
  private addCat = this.base + 'responsable/creerCategorie';
  private listRep = this.base + 'question/listerReponses/';
  private listQuestion = this.base + 'question/questionCategorie/';
  private yo: any;
  public moi: Utilisateur;

  constructor(private http: HttpClient) { }

  connec(log: LoginViewModel): Observable<any>{
    return  this.http.post<Utilisateur>(this.conne, log, {observe: 'response'});
  }

  addQuestion(quest: Question): Observable<Question>{
    console.log(quest);
    return this.http.post<Question>(this.addQuest, quest);
  }

  modifQuestion(quest: Question): Observable<Question>{
    return this.http.put<Question>(this.modQuest, quest);
  }

  addRepons(rep: Reponse): Observable<Reponse>{
    return this.http.post<Reponse>(this.addRep, rep);
  }

  addListRepons(rep: Reponse[]): Observable<Reponse[]>{
    console.log(rep);
    return this.http.post<Reponse[]>(this.addlistRep, rep);
  }

  /*login1(utilisateur: UtilisateurModel): Observable<Any>{
    return this.http.post(this.connexion, utilisateur);
    // return this.http.post(this.connexion, personne);
  }*/


  getAllUser(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.listUser);
  }

  getUnUserService(UtilisateurId: number): Observable<Utilisateur>{
    return this.http.get<Utilisateur>(this.unUser + UtilisateurId);
  }



  saveUserService(user: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.saveApprenant, user);
  }

  saveRespo(responsable: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.addRespo, responsable);
  }

  getRespo(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.listRespo);
  }



  addCategorie(cat: Categorie): Observable<Categorie>{
    return this.http.post<Categorie>(this.addCat, cat);
  }

  listRepQuest(id: number): Observable<Reponse[]>{
    return this.http.get<Reponse[]>(this.listRep + id);
  }

  listerQuestionByCat(id: number): Observable<Question[]>{
    return this.http.get<Question[]>(this.listQuestion + id);
  }

  modifReponse(updateReponse: Reponse): Observable<Reponse> {
    console.log(updateReponse);
    return this.http.put<Reponse>(this.modRep, updateReponse);
  }

  modifReponse2(updateReponse: Reponse): Observable<Reponse> {
    console.log(updateReponse);
    return this.http.put<Reponse>(this.modRepb, updateReponse);
  }

  deleteReponse(idReponse: number) {
    return this.http.delete(this.delRep + idReponse);
  }

  deleteQuestion(idQuestion: number) {
    return this.http.delete(this.delQuest + idQuestion);
  }
}
