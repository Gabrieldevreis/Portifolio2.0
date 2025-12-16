import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CertificatesComponent } from './pages/certifications/certificates.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';

const routes: Routes = [
 
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'technologies',
        component: TechnologiesComponent,
      },
      {
        path: 'certificates',
        component: CertificatesComponent,
      },
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
