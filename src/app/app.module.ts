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
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
    UnThemeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
