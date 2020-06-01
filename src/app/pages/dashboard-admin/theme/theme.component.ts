import { Component, OnInit } from '@angular/core';
import {Theme} from '../../../models/theme';
import {StgService} from '../../../appl/stg.service';
import {Utilisateur} from '../../../models/utilisateur';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  themes: Theme[] = [];
  users: Utilisateur[];
  user: Utilisateur;
  selectedTheme: Theme;
  them: Theme;
  u: any;
  c: any;
  r: any;
  re: any;

  constructor(private stgService: StgService) { }

  ngOnInit(): void {
    this.getAllThemes();
  }

  public getAllThemes(){
    this.stgService.getAllThemes().subscribe(
      res => {
        this.themes = res;
      },
      err => {
        alert('Une erreur est survenue');
      }
    );
  }

  getAllUsers(){
    this.stgService.getAllUser().subscribe(
      res => {
        this.users = res;
      },
      err => {
        alert('Une erreur est survnue');
      }
    );
  }

  /*getUnUser(utilisateurId){
    this.stgService.getUnUserService(utilisateurId).subscribe(
      res => {
        this.user = res;
      },
      err => {
        alert('Une erreur est survenue');
      }
    );
  }*/


  selectTheme(theme: Theme) {
    this.selectedTheme = theme;
    this.u = this.selectedTheme.utilisateur;
    this.r = this.nbrCatTheme(theme.id);
    this.re = theme;
    // TODO
  }

  nbrCatTheme(id: string): any{
    this.stgService.nbCategorieByTheme(id).subscribe(
      res => {
        this.c = res;
      },
      err => {
        alert('Une erreur est survenue');
      }
    );
  }
}
