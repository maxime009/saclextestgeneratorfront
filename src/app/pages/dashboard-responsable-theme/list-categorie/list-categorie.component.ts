import {Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {Theme} from "../../../models/theme";
import {ThemeService} from "../../../appl/theme.service";
import {Categorie} from "../../../models/categorie";
import {CategorieService} from "../../../appl/categorie.service";
import {Utilisateur} from "../../../models/utilisateur";
import {UtilisateursService} from "../../../appl/utilisateurs.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  @Input() themeChoisi: Theme;
  @Input() categories: Categorie[];
  @Output('getCategorieduTheme') getCategorieduTheme: EventEmitter<any> = new EventEmitter();
  responsablesCategories: Utilisateur[];
  categorieModel: Categorie = {
    idCategorie: null,
    libelle: '',
    description: '',
    respCat: null,
    dateCreation: null,
    dateModification: null,
    theme: null
  };
  categorieModif: Categorie = {
    idCategorie: null,
    libelle: '',
    description: '',
    respCat: null,
    dateCreation: null,
    dateModification: null,
    theme: null
  };
  @ViewChild('closeModCatModal') closeModCatModal: ElementRef;
  @ViewChild('closeAddCatModal') closeAddCatModal: ElementRef;
  @ViewChild('closeDelCatModal') closeDelCatModal: ElementRef;

  constructor(
    private themeService: ThemeService,
    private categorieService: CategorieService,
    private utilisateursService: UtilisateursService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.getCategorieduTheme();
    this.getResponsablesCat();
    /*this.fcatM = this.fb.group({
      catRespControl: [this.responsablesCategories[1]]
    });*/
  }

  ajouterCatgorie(theme: Theme){
    const token = localStorage.getItem('token');
    this.categorieModel.theme = theme;
    console.log(this.categorieModel)
    this.categorieService.addCategorie(this.categorieModel, token).subscribe(
      res => {
        this.closeAddCatModal.nativeElement.click();
        this.getCategorieduTheme.emit();
      },
      err => {
        alert('error creatx categorie');
      }
    );
  }

  modifierCatgorie(categorie: Categorie){
    const token = localStorage.getItem('token');
    console.log(categorie);
    this.categorieService.modCategorie(categorie, token).subscribe(
      res => {
        //location.reload();
        this.closeModCatModal.nativeElement.click();
        this.getCategorieduTheme.emit();
      },
      err => {
        alert('error modifyx categorie');
      }
    );
  }

  getResponsablesCat(){
    this.utilisateursService.getRespoCateg().subscribe(
      res => {
        this.responsablesCategories = res;
      },
      err => {
        alert('error gettx resp categorie');
      }
    );
  }

  supprimerCategorie(categorie: Categorie) {
    const token = localStorage.getItem('token');
    this.categorieService.supCategorie(categorie.idCategorie, token).subscribe(
      res => {
        this.closeDelCatModal.nativeElement.click();
        this.getCategorieduTheme.emit();
      },
      err => {
        alert('An error occurred while deleting the theme');
      }
    );
  }

    getCategorieAModifier(cat: Categorie){
    console.log(cat);
    this.categorieModif = cat;
  }

  /*getCategorieduTheme(){
    //const y: number = + localStorage.getItem('id');
    this.categorieService.getCategoriedeTheme(this.themeChoisi.id_theme).subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert('error gettx categorie du theme');
      }
    );
    import { ViewChild, ElementRef} from '@angular/core';
      @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
      this.closeAddExpenseModal.nativeElement.click();
  }*/

}
