import { Component, OnInit } from '@angular/core';
import {StgService} from "../../../appl/stg.service";
import {Utilisateur} from "../../../models/utilisateur";

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent implements OnInit {

  respos: Utilisateur[];
  constructor(private stgService: StgService) { }

  ngOnInit(): void {
  }

  getResponsables(){
    this.stgService.getRespo().subscribe(
      res => {
        this.respos = res;
      },
      err => {
        alert('Une erreur est survnue');
      }
    );
  }

}
