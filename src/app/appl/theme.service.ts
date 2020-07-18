import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Theme} from '../models/theme';
import {Categorie} from '../models/categorie';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from "../models/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  public base = 'http://localhost:8088/';
  private listTheme = this.base + 'theme/listerTheme';
  private listCategorieParTheme = this.base + 'listerCategoriesparTheme';
  private nbCategorieParTheme = this.base + 'categoriesParTheme/';
  private nbQuestParTheme = this.base + 'questionsParTheme/';
  private nbCarteParTheme = this.base + 'cartesParTheme/';
  private saveTheme = this.base + 'theme/creerTheme';
  private modifierTheme = this.base + 'theme/modifierTheme';
  private delTheme = this.base + 'theme/supprimerTheme/';
  private themeDuResponsable = this.base + 'theme/themeParResponsable/';
  private listCategorieduTheme = this.base + 'theme/listcategoriesParTheme/';
  yo: any;

  getAllThemes(): Observable<Theme[]>{
    this.yo = this.http.get<Theme[]>(this.listTheme);
    return this.yo;
  }

  getThemesDeResponsable(user: number): Observable<Theme[]>{
    this.yo = this.http.get<Theme[]>(this.themeDuResponsable + user);
    return this.yo;
  }

  getCategoriedeTheme(user: number): Observable<Categorie[]>{
    this.yo = this.http.get<Categorie[]>(this.listCategorieduTheme + user);
    return this.yo;
  }

  addThemme(theme: Theme, token: string): Observable<any>{
    const headers = {'Authorization' : token };
    return this.http.post(this.saveTheme, theme, {headers});
  }

  getnbCategorieParTheme(themeid: number): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.nbCategorieParTheme + themeid);
  }

  getnbQuestParTheme(themeid: number): Observable<string>{
    return this.http.get<string>(this.nbQuestParTheme + themeid);
  }

  getnbCarteParTheme(themeid: number): Observable<string>{
    return this.http.get<string>(this.nbCarteParTheme + themeid);
  }



  modThemme(theme: Theme, token: string): Observable<Theme>{
    const headers = {'Authorization' : token };
    return this.http.put<Theme>(this.modifierTheme, theme, {headers});
  }

  supThemme(themeid: number, token: string){
    const headers = {'Authorization' : token };
    console.log(themeid);
    return this.http.delete(this.delTheme + themeid, {headers});
  }

  /*addCat(categ: Categorie) {

  }*/
}
