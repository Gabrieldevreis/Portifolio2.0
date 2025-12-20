import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SiderbarComponent } from './pages/siderbar/siderbar.component';
import { CertificatesComponent } from './pages/certifications/certificates.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectsComponent,
    SiderbarComponent,
    SiderbarComponent,
    CertificatesComponent,
    TechnologiesComponent,
    NavigationComponent,
    ExperiencesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
