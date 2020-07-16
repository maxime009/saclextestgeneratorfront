import { Component, OnInit } from '@angular/core';
import {Theme} from '../../models/theme';
import {ThemeService} from '../../appl/theme.service';
import {CategorieService} from '../../appl/categorie.service';
import {Categorie} from '../../models/categorie';


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

  constructor(private themeService: ThemeService,
              private categorieService: CategorieService) {}
  ngOnInit(): void {
    this.getThemes();
  }

  public getThemes(){
    this.themeService.getAllThemes().subscribe(
      res => {
        this.themes = res;
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





}
