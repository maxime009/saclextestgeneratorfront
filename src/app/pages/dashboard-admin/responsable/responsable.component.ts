import {Component, EventEmitter, Input, OnInit, Output, PipeTransform, QueryList, ViewChildren} from '@angular/core';
import {StgService} from '../../../appl/stg.service';
import {Utilisateur} from '../../../models/utilisateur';
import {FormControl} from '@angular/forms';
import {DecimalPipe} from '@angular/common';
import {startWith} from 'rxjs/internal/operators/startWith';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UtilisateursService} from '../../../appl/utilisateurs.service';
import {SortableDirective, SortEvent} from '../../../directive/sortable.directive';

/*import {Role} from '../../../models/role';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}*/
@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  providers: [DecimalPipe],
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent implements OnInit {
  utilisateur$: Observable<Utilisateur[]>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  /*countries$: Observable<Country[]>;
  filter = new FormControl('');*/
  filter2 = new FormControl('');

  responsablesTheme: Utilisateur[] = new Array(0);
  respons: Utilisateur[] = new Array(0);
  responsablesTheme$: Observable<Utilisateur[]>;
  responsablesCategorie: Utilisateur[] = new Array(0);
  apprenants: Utilisateur[];
  private listResponsableTheme: Observable<Utilisateur[]>;
  private test: Utilisateur[] =new Array(0);

  constructor(private stgService: StgService,
              pipe: DecimalPipe,
              public utilisateurService: UtilisateursService) {
    this.utilisateur$ = utilisateurService.utilisateurs$;
    this.utilisateur$.subscribe(
      res => {
        console.log(res);
      },
      error1 => {}
    );
    this.total$ = utilisateurService.total$;
    // jhjkl
    this.listResponsableTheme = stgService.getRespoTheme();
    this.listResponsableTheme.subscribe(
      res => {
        this.test = res;
        console.log(this.test);
      },
      err => {
        alert('error');
      }
    );
    /*this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );*/
    this.responsablesTheme$ = this.filter2.valueChanges.pipe(
      startWith(' '),
      map(text => this.searchRT(text, pipe))
    );
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.utilisateurService.state.sortColumn = column;
    this.utilisateurService.state.sortDirection = direction;
  }

/*
  COUNTRIES: Country[] = [
    {
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754
    },
    {
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199
    },
    {
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463
    },
    {
      name: 'China',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397
    }
  ];
*/
/*
  r: Utilisateur[] = [
    {
      id: 5,
      nom: 'Dabbagh',
      prenom: 'Elie',
      email: 'elie@gmail.com',
      dateNaissance: null,
      login: 'elie',
      password: '$2a$10$I41b8EJCtme64g1vivwYdOcNrQDSXTy4LUuC0oa.IwcLLTZ2oXxxK',
      description: null,
      role: null,
      sexe: null,
      isActive: true,
      telephone: null,
      dat: null,
      adresse: null
    },
    {
      id: 5,
      nom: 'Dabbagh',
      prenom: 'Elie',
      email: 'elie@gmail.com',
      dateNaissance: null,
      login: 'elie',
      password: '$2a$10$I41b8EJCtme64g1vivwYdOcNrQDSXTy4LUuC0oa.IwcLLTZ2oXxxK',
      description: null,
      role: null,
      sexe: null,
      isActive: true,
      telephone: null,
      dat: null,
      adresse: null
    },
    {
      id: 5,
      nom: 'Dabbagh',
      prenom: 'Elie',
      email: 'elie@gmail.com',
      dateNaissance: null,
      login: 'elie',
      password: '$2a$10$I41b8EJCtme64g1vivwYdOcNrQDSXTy4LUuC0oa.IwcLLTZ2oXxxK',
      description: null,
      role: null,
      sexe: null,
      isActive: true,
      telephone: null,
      dat: null,
      adresse: null
    }
  ];
*/
  // filter = new FormControl('');

  ngOnInit(): void {
    this.getResponsablesTheme();
    this.getResponsablesCategorie();
    this.getApprenants();
    console.log(this.responsablesTheme);
    console.log(this.responsablesCategorie);
    console.log(this.responsablesTheme$);
  }

  getResponsablesTheme(): Utilisateur[] {
    this.stgService.getRespoTheme().subscribe(
      res => {
        this.responsablesTheme = res;
      },
      err => {
        alert('Une erreur est survnue');
      }
    );
    console.log(this.responsablesTheme);
    return this.responsablesTheme;
  }

  getApprenants(): Utilisateur[] {
    this.utilisateurService.getApp().subscribe(
      res => {
        this.apprenants = res;
      },
      err => {
        alert('Une erreur est survnue');
      }
    );
    console.log(this.responsablesTheme);
    return this.responsablesTheme;
  }

  /*search(text: string, pipe: PipeTransform): Country[] {
    console.log(this.COUNTRIES);
    return this.COUNTRIES.filter(country => {
      const term = text.toLowerCase();
      console.log(country);
      return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
    });
  }*/
  searchRT(text: string,  pipe: PipeTransform): Utilisateur[] {
    console.log(this.getResponsablesTheme());
    return this.getResponsablesTheme().filter(rt => {
      const terms = text.toLowerCase();
      console.log(rt);
      return rt.nom.toLowerCase().includes(terms)
        || rt.prenom.toLowerCase().includes(terms)
        || rt.email.toLowerCase().includes(terms);
    });
  }
/*
  search(text: string, pipe: PipeTransform): Utilisateur[] {
    return this.responsablesTheme.filter(respoTheme => {
      const term = text.toLowerCase();
      return respoTheme.nom.toLowerCase().includes(term)
        || pipe.transform(respoTheme.prenom).includes(term)
        || pipe.transform(respoTheme.email).includes(term);
    });
  }
*/




  /*getResponsablesTheme(){
    this.stgService.getRespoTheme().subscribe(
      res => {
        this.responsablesTheme = res;
      },
      err => {
        alert('Une erreur est survnue');
      }
    );
  }*/

  getResponsablesCategorie(){
    this.stgService.getRespoCategorie().subscribe(
      res => {
        this.responsablesCategorie = res;
      },
      err => {
        alert('Une erreur est survnue');
      }
    );
  }
}
enum Sexe {
  masculin,
  feminin
}
