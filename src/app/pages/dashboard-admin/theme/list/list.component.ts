import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Theme} from "../../../../models/theme";
import {StgService} from "../../../../appl/stg.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  themes: Theme[] = [];
  constructor(private stgService: StgService) { }

  ngOnInit(): void {
    this.getAllThemes();
  }

  public getAllThemes(){
    this.stgService.getAllThemes().subscribe(
      res => {
        this.themes = res;
      },
      err => {
        alert('Une erreur est survenue');
      }
    );
  }

}
