import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {QuestionReponse} from "../models/question-reponse";
import {Evaluation} from "../models/evaluation";
import {EvalQuestRep} from '../models/eval-quest-rep';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  public base = 'http://localhost:8088/';
  private creerEvaluation = this.base + 'evaluation/creerEvaluation/';
  private corrigerEvaluation = this.base + 'evaluation/correction/';
  private myEvaluation = this.base + 'evaluation/evaluationByUser/';
  private eqrEval= this.base + 'evalquest/evalquestbyeval/';

  constructor(private http: HttpClient) { }

  createEvaluation(idUser: number, idCategorie: number, nbreQuestions: number, token: string, evaluation: Evaluation): Observable<any>{
    const headers = {'Authorization' : token };
    return this.http.post<any>(this.creerEvaluation + idUser + '/' + idCategorie + '/' + nbreQuestions , evaluation, {headers});
  }

  correction(questionReponses: QuestionReponse[]): Observable<EvalQuestRep[]> {
    return this.http.post<any>(this.corrigerEvaluation, questionReponses);
  }

  mesEvaluations(idUtilisateur: number): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.myEvaluation + idUtilisateur);
  }

  eqrEvaluation(idEvaluation: number): Observable<EvalQuestRep[]> {
    return this.http.get<EvalQuestRep[]>(this.eqrEval + idEvaluation);
  }
}
