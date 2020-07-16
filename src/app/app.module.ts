import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { ThemeComponent } from './pages/dashboard-admin/theme/theme.component';
import { ListComponent } from './pages/dashboard-admin/theme/list/list.component';
import { AjouterComponent } from './pages/dashboard-admin/theme/ajouter/ajouter.component';
import { DeleteConsulterModiferComponent } from './pages/dashboard-admin/theme/delete-consulter-modifer/delete-consulter-modifer.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ResponsableComponent } from './pages/dashboard-admin/responsable/responsable.component';
import { AjouterResponsableComponent } from './pages/dashboard-admin/responsable/ajouter-responsable/ajouter-responsable.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConModalComponent } from './pages/con-modal/con-modal.component';
import { InsModalComponent } from './pages/ins-modal/ins-modal.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { UnThemeComponent } from './pages/dashboard-admin/theme/ajouter/un-theme/un-theme.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from "@angular/common";
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import { DashboardResponsableComponent } from './pages/dashboard-responsable/dashboard-responsable.component';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
//import {CKEditorModule} from "ckeditor4-angular";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QCMComponent } from './pages/dashboard-responsable/qcm/qcm.component';
import { ChoixExclusifComponent } from './pages/dashboard-responsable/choix-exclusif/choix-exclusif.component';
import { QuestionTrouComponent } from './pages/dashboard-responsable/question-trou/question-trou.component';
import { DashboardAprenantComponent } from './pages/dashboard-aprenant/dashboard-aprenant.component';
import { DashboardResponsableCategorieComponent } from './pages/dashboard-responsable-theöe/dashboard-responsable-categorie.component';
import { DashboardResponsableThemeComponent } from './pages/dashboard-responsable-theme/dashboard-responsable-theme.component';
import { ThemeResponsableComponent } from './pages/dashboard-responsable-theme/theme-responsable/theme-responsable.component';
import { ListThemeParUserComponent } from './pages/dashboard-responsable-theme/list-theme-par-user/list-theme-par-user.component';
import { DetailThemeComponent } from './pages/dashboard-responsable-theme/theme-responsable/detail-theme/detail-theme.component';
import { ListCategorieComponent } from './pages/dashboard-responsable-theme/list-categorie/list-categorie.component';
import { DisplayQCMComponent } from './pages/dashboard-aprenant/display-qcm/display-qcm.component';
import {CounterModule} from "ngx-counter";
import { InformationSurCtegorieComponent } from './pages/dashboard-aprenant/information-sur-ctegorie/information-sur-ctegorie.component';



const appRoutes: Routes = [
  {
    path: 'admin',
    component: DashboardAdminComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'theme',
    component: ThemeComponent
  },
  {
    path: 'responsable',
    component: DashboardResponsableComponent
  },
  {
    path: 'apprenant',
    component: DashboardAprenantComponent
  },
  {
    path: 'responsableCategorie',
    component: DashboardResponsableCategorieComponent
  },
  {
    path: 'responsableTheme',
    component: DashboardResponsableThemeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardAdminComponent,
    AdminLayoutComponent,
    SidebarComponent,
    ThemeComponent,
    ListComponent,
    AjouterComponent,
    DeleteConsulterModiferComponent,
    ConnexionComponent,
    ResponsableComponent,
    AjouterResponsableComponent,
    InscriptionComponent,
    ConModalComponent,
    InsModalComponent,
    AccueilComponent,
    UnThemeComponent,
    DashboardResponsableComponent,
    QCMComponent,
    ChoixExclusifComponent,
    QuestionTrouComponent,
    DashboardAprenantComponent,
    DashboardResponsableCategorieComponent,
    DashboardResponsableThemeComponent,
    ThemeResponsableComponent,
    ListThemeParUserComponent,
    DetailThemeComponent,
    ListCategorieComponent,
    DisplayQCMComponent,
    InformationSurCtegorieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RichTextEditorModule,
    AngularEditorModule,
    NgbModule,
    ReactiveFormsModule,
    CounterModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
