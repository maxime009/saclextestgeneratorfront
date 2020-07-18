import {Component, OnInit} from '@angular/core';
// import { CKEditorModule } from 'ckeditor4-angular';
import {Reponse} from '../../models/reponse';
import {Question} from '../../models/question';
import {Categorie} from '../../models/categorie';
import {StgService} from '../../appl/stg.service';
import {Role} from "../../models/role";
import {CategorieService} from "../../appl/categorie.service";


@Component({
  selector: 'app-dashboard-responsable',
  templateUrl: './dashboard-responsable.component.html',
  styleUrls: ['./dashboard-responsable.component.css'],
  // providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class DashboardResponsableComponent implements OnInit {

  constructor(private stgService: StgService,
              private categorieService: CategorieService) { }
  qcm = 0;
  categories: Categorie[];
  exclu = 0;
  trou = 0;
  sexef = Sexe.feminin;
  sexem = Sexe.masculin;

  questionModel: Question = {
    idQuestion: null,
    libelle: '',
    score: null,
    duree: null,
    typeQuestion: null,
    categorie: null,
    dateCreation: null,
    dateModification: null,
    reponses: null,
    difficulte: null
  };



  categorieModel: Categorie = {
    idCategorie: null,
    libelle: '',
    description: '',
    dateCreation: null,
    dateModification: null,
    respCat: null,
    theme: {
      id_theme: 2,
      libelle: 'Theme 1t',
      description: 'gdhjshds',
      dateCreation: '',
      dateModification: '',
      utilisateur: {
        id: 1,
        nom: 'Fodjo',
        prenom: 'Maxime',
        email: 'fodjomaximejr@gmail.com',
        telephone: '656531071',
        login: 'MAX',
        adresse: 'mendong',
        password: '1234',
        dateNaissance: null,
        dat: null,
        isActive: null,
        role: Role.RESPONSABLE_THEME,
        sexe: Sexe.masculin,
        description: ''
      }
    }
  };


  bonne: Reponse[];
  b: number;
  public model = {
    editorData: null
  };

  ngOnInit(): void {
    this.getCategorieDuResponsable();
    this.b = 0;
  }

  getCategorieDuResponsable(){
    const y: number = + localStorage.getItem('id');
    this.categorieService.getCategoriedeUser(y).subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert('error gettx cat du responsable');
      }
    );
  }

  nbBonne(b: number){
    this.bonne.length = b;
  }


  addCat(): void{
    this.stgService.addCategorie(this.categorieModel).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('error saving categorie');
      }
    );
  }

  fqcm(){
    this.qcm = 1;
    this.exclu = 0;
    this.trou = 0;
  }

  fexclu(){
    this.exclu = 1;
    this.qcm = 0;
    this.trou = 0;
  }

  ftrou(){
    this.exclu = 0;
    this.qcm = 0;
    this.trou = 1;
  }

}

enum Sexe {
  masculin,
  feminin
}


