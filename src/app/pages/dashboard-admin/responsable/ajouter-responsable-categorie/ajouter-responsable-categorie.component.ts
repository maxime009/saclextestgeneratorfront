import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Utilisateur} from '../../../../models/utilisateur';
import {StgService} from '../../../../appl/stg.service';

@Component({
  selector: 'app-ajouter-responsable-categorie',
  templateUrl: './ajouter-responsable-categorie.component.html',
  styleUrls: ['./ajouter-responsable-categorie.component.css']
})
export class AjouterResponsableCategorieComponent implements OnInit {

  responsableCModel: Utilisateur ={
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

  @Output() getResponsablesCategorie: EventEmitter<any> = new EventEmitter();
  @ViewChild('closeAddRespoCModal') closeAddRespoCModal: ElementRef;

  constructor(private stgService: StgService) { }

  ngOnInit(): void {
  }
  saveResponsableCategorie(): void {
    this.stgService.saveRespoCategorie(this.responsableCModel).subscribe(
      res => {
        this.closeAddRespoCModal.nativeElement.click();
        this.getResponsablesCategorie.emit();
        // alert('le responsable a été ajouté');
      },
      err => {
        alert('error saving responsable');
      }
    );
  }

  initR(){
    this.responsableCModel = {
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
  }
}
