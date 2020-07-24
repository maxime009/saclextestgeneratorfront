import {Injectable, PipeTransform} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Utilisateur} from "../models/utilisateur";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Theme} from "../models/theme";
import {SortColumn, SortDirection} from '../directive/sortable.directive';
import {DecimalPipe} from '@angular/common';
import {tap} from 'rxjs/internal/operators/tap';
import {debounceTime, delay} from 'rxjs/operators';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {StgService} from './stg.service';
import {of} from 'rxjs/internal/observable/of';

interface SearchResult {
  utilisateurs: Utilisateur[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(utilisateurs: Utilisateur[], column: SortColumn, direction: string): Utilisateur[] {
  if (direction === '' || column === '') {
    return utilisateurs;
  } else {
    return [...utilisateurs].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(utilisateur: Utilisateur, term: string, pipe: PipeTransform) {
  return utilisateur.nom.toLowerCase().includes(term.toLowerCase())
    || utilisateur.prenom.toLowerCase().includes(term)
    || utilisateur.email.toLowerCase().includes(term);
}

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private search$ = new Subject<void>();
  private _utilisateurs$ = new BehaviorSubject<Utilisateur[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
  public base = 'http://localhost:8088/';
  private getresponsablesCategorie = this.base + 'utilisateur/listerResponsableCategorie';
  private getAprenant = this.base + 'utilisateur/listerApprenant';
  private getresponsablesTheme = this.base + 'utilisateur/listerResponsableTheme';
  public moi: Utilisateur;

  private userConnect = new BehaviorSubject<Utilisateur>(this.moi);
  user = this.userConnect.asObservable();
  lrt: Utilisateur[] = new Array(0);
  private pipe: PipeTransform;

  constructor(private http: HttpClient, pipe: DecimalPipe, stgService: StgService) {
    const listResponsableTheme = stgService.getRespoTheme();
    listResponsableTheme.subscribe(
      res => {
        console.log(res);
        this.lrt = res;
      },
      err => {
        alert('error');
      }
    );
    this.search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this.search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._utilisateurs$.next(result.utilisateurs);
      this._total$.next(result.total);
    });

    this.search$.next();
  }


  get loading$(): BehaviorSubject<boolean> {
    return this._loading$;
  }

  set loading$(value: BehaviorSubject<boolean>) {
    this._loading$ = value;
  }

  get utilisateurs$(): BehaviorSubject<Utilisateur[]> {
    return this._utilisateurs$;
  }

  set utilisateurs$(value: BehaviorSubject<Utilisateur[]>) {
    this._utilisateurs$ = value;
  }

  get total$(): BehaviorSubject<number> {
    return this._total$;
  }

  set total$(value: BehaviorSubject<number>) {
    this._total$ = value;
  }

  get state(): State {
    return this._state;
  }

  set state(value: State) {
    this._state = value;
  }



  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this.search$.next();
  }

  private search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let utilisateurs = sort(this.lrt, sortColumn, sortDirection);

    // 2. filter
    utilisateurs = utilisateurs.filter(utilisateur => matches(utilisateur, searchTerm, this.pipe));
    const total = utilisateurs.length;

    // 3. paginate
    utilisateurs = utilisateurs.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({utilisateurs, total});
  }

  getRespoCateg(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.getresponsablesCategorie);
  }

  getApp(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.getAprenant);
  }
  getRespoTheme(token: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.getresponsablesTheme);
  }

}
