import {Component, Input, OnInit} from '@angular/core';
import {Theme} from '../../../../models/theme';
import {Utilisateur} from '../../../../models/utilisateur';
import {$} from 'protractor';
import {NgForm} from '@angular/forms';
import {StgService} from '../../../../appl/stg.service';
import {ThemeService} from '../../../../appl/theme.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  //public moi: Utilisateur;

  themeModel: Theme = {
    id_theme: null,
    libelle: '',
    description: '',
    dateCreation: '',
    dateModification: '',
    utilisateur :null
  };
  user: Utilisateur;


  @Input() moi: Utilisateur;
  @Input() responsablesThemes: Utilisateur[];
  constructor(private themeService: ThemeService, private stg: StgService) { }

  ngOnInit(): void {
    /*if ( localStorage.getItem('id') != null){
      this.getConnectedUser();
    }*/
  }



  saveTheme(): void {
    const token = localStorage.getItem('token');
    // this.themeModel.utilisateur = this.moi;
    this.themeService.addThemme(this.themeModel, token).subscribe(
      res => {
        location.reload();
        alert('Theme ajouté');
      },
      err => {
        alert('error saving theme');
      }
    );
  }

  /*getConnectedUser(): void{
    const y: number = + localStorage.getItem('id');
    this.stg.getUnUserService(y).subscribe(
      res => {
        this.moi = res;
      },
      err => {
        alert('error gettx user');
      }
    );
  }*/
}
