import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Theme} from "../../../../models/theme";
import {StgService} from "../../../../appl/stg.service";
import {Utilisateur} from "../../../../models/utilisateur";
import {ThemeService} from "../../../../appl/theme.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  themes: Theme[] = [];
  themeChoisi: Theme;
  user: Utilisateur;
  question: any;
  carte: any;
  categorie: any;
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.getThemes();
  }

  public getThemes(){
    this.themeService.getAllThemes().subscribe(
      res => {
        this.themes = res;
        if (this.themes != null){
          this.themeChoisi = this.themes[0];
          this.user = this.themes[0].utilisateur;
          this.getQuestion(this.themes[0].id_theme);
          this.getCarte(this.themes[0].id_theme);
          this.getCategorie(this.themes[0].id_theme);
        }
      },
      err => {
        alert('error');
      }
    );
  }

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
        alert('error question');
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

  choisirTheme(th: Theme) {
    this.themeChoisi = th;
    this.getQuestion(th.id_theme);
    this.getCarte(th.id_theme);
    this.getCategorie(th.id_theme);
    this.user = th.utilisateur;
  }
}
