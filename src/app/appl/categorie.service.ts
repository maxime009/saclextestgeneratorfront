import { Injectable } from '@angular/core';
import {Theme} from "../models/theme";
import {Observable} from "rxjs";
import {Categorie} from "../models/categorie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  public base = 'http://localhost:8088/';
  private saveCategorie = this.base + 'categorie/creerCategorie';
  private modifyCategorie = this.base + 'categorie/modifierCategorie';
  private listCategorieduTheme = this.base + 'categorie/getCatByTheme/';
  yo: any;
  private delCategorie = this.base + 'categorie/supprimerCategorie/';
  private getCategorieUser = this.base + 'categorie/getCatByUser/';
  private getCategories = this.base + 'categorie/listerCategories/';

  constructor(private http: HttpClient) { }

  addCategorie(categorie: Categorie, token: string): Observable<any>{
    const headers = {'Authorization' : token };
    return this.http.post(this.saveCategorie, categorie, {headers});
  }

  modCategorie(categorie: Categorie, token: string): Observable<any>{
    const headers = {'Authorization' : token };
    return this.http.put(this.modifyCategorie, categorie, {headers});
  }

  getCategoriedeTheme(idTheme: number): Observable<Categorie[]>{
    this.yo = this.http.get<Categorie[]>(this.listCategorieduTheme + idTheme);
    return this.yo;
  }

  getCategoriedeUser(idUser: number): Observable<Categorie[]>{
    this.yo = this.http.get<Categorie[]>(this.getCategorieUser + idUser);
    return this.yo;
  }


  supCategorie(idCategorie: number, token: string) {
    const headers = {'Authorization' : token };
    return this.http.delete(this.delCategorie + idCategorie, {headers});
  }

  getAllCategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.getCategories);
  }
}
