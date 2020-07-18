import { Component, OnInit } from '@angular/core';
import {Theme} from '../../../models/theme';
import {ThemeService} from '../../../appl/theme.service';

@Component({
  selector: 'app-list-theme-par-user',
  templateUrl: './list-theme-par-user.component.html',
  styleUrls: ['./list-theme-par-user.component.css']
})
export class ListThemeParUserComponent implements OnInit {
  themerespo: Theme[];

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.getThemeDuResponsable();
  }

  getThemeDuResponsable(){
    const y: number = + localStorage.getItem('id');
    this.themeService.getThemesDeResponsable(y).subscribe(
      res => {
        this.themerespo = res;
      },
      err => {
        alert('error gettx theme du responsable');
      }
    );
  }

  recupererTheme(theme: Theme) {

  }
}
