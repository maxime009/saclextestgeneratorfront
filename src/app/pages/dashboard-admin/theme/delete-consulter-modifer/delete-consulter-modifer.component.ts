import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Theme} from "../../../../models/theme";
import {Utilisateur} from "../../../../models/utilisateur";
import {ThemeService} from "../../../../appl/theme.service";

@Component({
  selector: 'app-delete-consulter-modifer',
  templateUrl: './delete-consulter-modifer.component.html',
  styleUrls: ['./delete-consulter-modifer.component.css']
})
export class DeleteConsulterModiferComponent implements OnInit {

  moi: Utilisateur;
  theme: Theme = {
    id_theme: null,
    libelle: '',
    description: '',
    dateCreation: '',
    dateModification: '',
    utilisateur : this.moi
  };

  @Input() themeChoisi: Theme = this.theme;
  user: Utilisateur;
  @Input() themeModif: Theme;
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  modifierTheme() {
    const token = localStorage.getItem('token');
    this.themeService.modThemme(this.themeModif, token).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('error saving theme');
      }
    );
  }

  supprimerTheme(theme: Theme) {
    const token = localStorage.getItem('token');
    this.themeService.supThemme(theme.id_theme, token).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error occurred while deleting the theme');
      }
    );
  }

}
