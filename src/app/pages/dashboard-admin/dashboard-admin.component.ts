import { Component, OnInit } from '@angular/core';
import {Theme} from '../../models/theme';
import {ThemeService} from '../../appl/theme.service';
import {CategorieService} from '../../appl/categorie.service';
import {Categorie} from '../../models/categorie';
import {StgService} from '../../appl/stg.service';
import {Question} from '../../models/question';
import {Utilisateur} from '../../models/utilisateur';


@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css', ]
})
export class DashboardAdminComponent implements OnInit {
  themes: Theme[] = new Array(0);
  categories: Categorie[] = new Array(0);
  themeChoisi: Theme;
  categorieChoisi: Categorie;
  formQuestion = false;
  listQuestion = false;
  themes2: Theme[] = new Array(0);
  categories2: Categorie[] = new Array(0);
  themeChoisi2: Theme;
  categorieChoisi2: Categorie;
  listeDeQuestion: Question[] = new Array(0);
  responsablesTheme: Utilisateur[] = new Array(0);

  constructor(private themeService: ThemeService,
              private categorieService: CategorieService,
              private stgService: StgService) {}
  ngOnInit(): void {
    this.getThemes();
    // this.getResponsablesTheme();
    console.log(this.responsablesTheme);
    console.log(this.themes);
  }

  public getThemes(){
    this.themeService.getAllThemes().subscribe(
      res => {
        this.themes = res;
        this.themes2 = res;
      },
      err => {
        alert('error');
      }
    );
  }

getCategorieduTheme() {
  this.categorieService.getCategoriedeTheme(this.themeChoisi.id_theme).subscribe(
    res => {
      this.categories = res;
      console.log(this.categories);
    },
    err => {
      alert('error gettx categorie du theme');
    }
  );
}

getCategorieduTheme2() {
  this.categorieService.getCategoriedeTheme(this.themeChoisi2.id_theme).subscribe(
    res => {
      this.categories2 = res;
      console.log(this.categories);
    },
    err => {
      alert('error gettx categorie du theme');
    }
  );
}

afficherFormQuestion(){
  this.formQuestion = !this.formQuestion;
  if (this.listQuestion){
    this.listQuestion = !this.formQuestion;
  }
}
afficherListQuestion(){
  this.listQuestion = !this.listQuestion;
  if (this.formQuestion){
    this.formQuestion = !this.listQuestion;
  }
}


  getQuestiondeCategorie() {
    this.stgService.listerQuestionByCat(this.categorieChoisi2.idCategorie).subscribe(
      res => {
        this.listeDeQuestion = res;
        console.log(this.listeDeQuestion);
      },
      err => {
        alert('error gettx questions');
      }
    );
  }

  getResponsablesTheme() {
    this.stgService.getRespoTheme().subscribe(
      res => {
        this.responsablesTheme = res;
      },
      err => {
        alert('Une erreur est survnue');
      }
    );
  }
}
