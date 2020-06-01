import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilisateurModel} from './pages/connexion/connexion.component';

@Injectable({
  providedIn: 'root'
})
export class STGWebServiceService {

  private connexion = 'http://localhost:8086/login';


  constructor(private http: HttpClient) { }

  /*login1(personne: UtilisateurModel): Observable<UtilisateurModel>{
    return this.http.post(this.connexion, personne);
  }*/

}
