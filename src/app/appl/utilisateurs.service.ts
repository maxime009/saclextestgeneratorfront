import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Utilisateur} from "../models/utilisateur";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Theme} from "../models/theme";

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  public base = 'http://localhost:8088/';
  private getresponsablesCategorie = this.base + 'utilisateur/listerResponsableCategorie';
  private getresponsablesTheme = this.base + 'utilisateur/listerResponsableTheme';
  public moi: Utilisateur;

  private userConnect = new BehaviorSubject<Utilisateur>(this.moi);
  user = this.userConnect.asObservable();

  constructor(private http: HttpClient) { }

  getRespoCateg(): Observable<Utilisateur[]> {
    //const headers = {'Authorization' : token };
    return this.http.get<Utilisateur[]>(this.getresponsablesCategorie);
  }
  getRespoTheme(token: string): Observable<Utilisateur[]> {
    //const headers = {'Authorization' : token };
    return this.http.get<Utilisateur[]>(this.getresponsablesTheme);
  }

}
