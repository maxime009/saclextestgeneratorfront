import {Component, Input, OnInit} from '@angular/core';
import {Theme} from "../../../../models/theme";

@Component({
  selector: 'app-detail-theme',
  templateUrl: './detail-theme.component.html',
  styleUrls: ['./detail-theme.component.css']
})
export class DetailThemeComponent implements OnInit {

  @Input() themeChoisi: Theme;
  constructor() { }

  ngOnInit(): void {
  }

}
