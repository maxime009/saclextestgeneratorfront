import { Component, OnInit } from '@angular/core';
import {Theme} from "../../../models/theme";
import {ThemeService} from "../../../appl/theme.service";
import {Utilisateur} from "../../../models/utilisateur";
import {Categorie} from "../../../models/categorie";
import {CategorieService} from "../../../appl/categorie.service";

@Component({
  selector: 'app-theme-responsable',
  templateUrl: './theme-responsable.component.html',
  styleUrls: ['./theme-responsable.component.css']
})
export class ThemeResponsableComponent implements OnInit {

  themerespo: Theme[];

  userModel: Utilisateur = {
    id: null,
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: null,
    dat: null,
    adresse: '',
    login: '',
    password: '',
    isActive: null,
    role: null,
    sexe: null,
    description: ''
  };

  theme: Theme = {
    id_theme: null,
    libelle: '',
    description: '',
    dateCreation: '',
    dateModification: '',
    utilisateur : this.userModel
  };

  public themeChoosed: Theme = this.theme;
  categories: Categorie[];

  constructor(private themeService: ThemeService,
              private categorieService: CategorieService ) { }

  ngOnInit(): void {
    this.getThemeDuResponsable();
  }

  getThemeDuResponsable(){
    const y: number = + localStorage.getItem('id');
    this.themeService.getThemesDeResponsable(y).subscribe(
      res => {
        this.themerespo = res;
        this.themeChoosed = this.themerespo[0];
        this.getCategorieduTheme();
      },
      err => {
        alert('error gettx theme du responsable');
      }
    );
  }

  recupererTheme(theme: Theme) {
    this.themeChoosed = theme;
    this.getCategorieduTheme();

  }

  getCategorieduTheme(){
    //const y: number = + localStorage.getItem('id');
    this.categorieService.getCategoriedeTheme(this.themeChoosed.id_theme).subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert('error gettx categorie du theme');
      }
    );
  }

}
