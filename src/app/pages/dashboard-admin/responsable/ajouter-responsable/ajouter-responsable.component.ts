import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Utilisateur} from "../../../../models/utilisateur";
import {StgService} from "../../../../appl/stg.service";

@Component({
  selector: 'app-ajouter-responsable',
  templateUrl: './ajouter-responsable.component.html',
  styleUrls: ['./ajouter-responsable.component.css']
})
export class AjouterResponsableComponent implements OnInit {

  responsableModel: Utilisateur ={
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

  @Output() getResponsablesTheme: EventEmitter<any> = new EventEmitter();
  @ViewChild('closeAddRespoTModal') closeAddRespoTModal: ElementRef;


  constructor(private stgService: StgService) { }

  ngOnInit(): void {
  }

  saveResponsableTheme(): void {
    this.stgService.saveRespoTheme(this.responsableModel).subscribe(
      res => {
        this.closeAddRespoTModal.nativeElement.click();
        this.responsableModel = {
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
        this.getResponsablesTheme.emit();
        // alert('le responsable a été ajouté');
      },
      err => {
        alert('error saving responsable');
      }
    );
  }

  saveResponsableCategorie(): void {
    this.stgService.saveRespoTheme(this.responsableModel).subscribe(
      res => {
        this.responsableModel = {
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
        // alert('le responsable a été ajouté');
      },
      err => {
        alert('error saving responsable');
      }
    );
  }

}
