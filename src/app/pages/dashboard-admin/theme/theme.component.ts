import { Component, OnInit } from '@angular/core';
import {Theme} from '../../../models/theme';
import {Role} from '../../../models/Role';
import {StgService} from '../../../appl/stg.service';
import {Utilisateur} from '../../../models/utilisateur';
import {Categorie} from '../../../models/categorie';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {ThemeService} from "../../../appl/theme.service";
import {CategorieService} from "../../../appl/categorie.service";
import {UtilisateursService} from "../../../appl/utilisateurs.service";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  admin = Role.ADMINISTRATEUR;
  moi: Utilisateur;

  theme: Theme = {
    id_theme: null,
    libelle: '',
    description: '',
    dateCreation: '',
    dateModification: '',
    utilisateur : this.moi
  };
  t: Theme[];
  tt: Theme[];
  themeChoisi: Theme = this.theme;
  user: Utilisateur;
  question: any;
  carte: any;
  categorie: any;
  themeModel: Theme = this.theme;
  themeModif: Theme = this.theme;

  public categ: Categorie = {
    idCategorie: null,
    libelle: '',
    description: '',
    theme: null,
    dateCreation: null,
    dateModification: null,
    respCat: null
  };
  public responsablesTheme: Utilisateur[] = new Array(0);
  public responsablesCategorie: Utilisateur[] = new Array(0);
  categories: Categorie[] = new Array(0);

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private stg: StgService,
    private cat: CategorieService,
    private utilisateursService: UtilisateursService) { }

  ngOnInit(): void {
    this.recupererPersonneConncte();
    this.getThemes();
    if ( localStorage.getItem('id') != null){
      this.getConnectedUser();
    }
    this.getResponsableC();
    this.getResponsableT();
  }

  public getThemes(){
    this.themeService.getAllThemes().subscribe(
      res => {
        this.t = res;
        if (this.t != null){
          this.themeChoisi = this.t[0];
          this.themeModel = this.t[0];
          this.themeModif = this.t[0];
          this.getCategorieduTheme();
          /*this.getQuestion(this.t[0].id_theme);
          this.getCarte(this.t[0].id_theme);
          this.getCategorie(this.t[0].id_theme);*/
        }
      },
      err => {
        alert('error');
      }
    );
  }

  getCategorieduTheme() {
    this.cat.getCategoriedeTheme(this.themeChoisi.id_theme).subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert('error gettx categorie du theme');
      }
    );
  }
  getConnectedUser(): void{
    const y: number = + localStorage.getItem('id');
    this.stg.getUnUserService(y).subscribe(
      res => {
        this.moi = res;
      },
      err => {
        alert('error gettx user');
      }
    );
  }

  choisirTheme(th: Theme) {
    this.themeChoisi = th;
    this.themeModif = this.themeChoisi;
    this.getCategorieduTheme();
  }



  modifierTheme() {
    const token = localStorage.getItem('token');
    console.log(this.themeModif)
    this.themeService.modThemme(this.themeModif, token).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('error saving theme');
      }
    );
  }

  supprimerTheme(theme: Theme) {
    const token = localStorage.getItem('token');
    this.themeService.supThemme(theme.id_theme, token).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error occurred while deleting the theme');
      }
      );
  }

  ajouterCategorie() {
    const token = localStorage.getItem('token');
    //this.categ.respCat = this.moi;
    this.cat.addCategorie(this.categ, token).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('La catégorie pas ajouté');
      }
    );
  }

  getResponsableT(){
    const token = localStorage.getItem('token');
    this.utilisateursService.getRespoTheme(token).subscribe(
      res => {
        this.responsablesTheme = res;
      },
      err => {
        alert('error gettx respos theme');
      }
    );
  }
  getResponsableC(){
    const token = localStorage.getItem('token');
    this.utilisateursService.getRespoCateg().subscribe(
      res => {
        this.responsablesCategorie = res;
      },
      err => {
        alert('error gettx respos categ');
      }
    );
  }

  recupererPersonneConncte(){
    let personne = localStorage.getItem('moi');
    let pers = JSON.parse(personne);
    this.moi = pers;
  }

  /*
  public getQuestion(idTheme: number){
    this.themeService.getnbQuestParTheme(idTheme).subscribe(
      res => {
        this.question = res;
      },
      err => {
        alert('error question');
      }
    );
  }

  public getCarte(idTheme: number){
    this.themeService.getnbCarteParTheme(idTheme).subscribe(
      res => {
        this.carte = res;
      },
      err => {
        alert('error question' +
          '');
      }
    );
  }

  public getCategorie(idTheme: number){
    this.themeService.getnbCategorieParTheme(idTheme).subscribe(
      res => {
        this.categorie = res;
      },
      err => {
        alert('error question');
      }
    );
  }
  * */
}


