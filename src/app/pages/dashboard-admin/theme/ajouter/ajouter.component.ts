import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Theme} from '../../../../models/theme';
import {Utilisateur} from '../../../../models/utilisateur';
import {$} from 'protractor';
import {NgForm} from '@angular/forms';
import {StgService} from '../../../../appl/stg.service';
import {ThemeService} from '../../../../appl/theme.service';
import { ViewChild, ElementRef} from '@angular/core';
// import {EventEmitter} from 'events';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  // public moi: Utilisateur;

  themeModel: Theme = {
    id_theme: null,
    libelle: '',
    description: '',
    dateCreation: '',
    dateModification: '',
    utilisateur : null
  };
  user: Utilisateur;


  @Input() moi: Utilisateur;
  @Input() responsablesThemes: Utilisateur[];
  @Output('getThemes') getThemes: EventEmitter<any> = new EventEmitter();
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  constructor(private themeService: ThemeService, private stg: StgService) { }

  ngOnInit(): void {
    /*if ( localStorage.getItem('id') != null){
      this.getConnectedUser();

      import { ViewChild, ElementRef} from '@angular/core';
      @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
      this.closeAddExpenseModal.nativeElement.click();
    }*/
  }



  saveTheme(): void {
    const token = localStorage.getItem('token');
    this.themeService.addThemme(this.themeModel, token).subscribe(
      res => {
        this.getThemes.emit();
        this.closeAddExpenseModal.nativeElement.click();
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
  getRespo(responsablesTheme: Utilisateur) {
    console.log(responsablesTheme);
    this.themeModel.utilisateur = responsablesTheme;
  }
}
