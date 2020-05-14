import { Routes, RouterModule } from '@angular/router';
// COMPONENTES
import { InicioComponent } from './components/home/inicio/inicio.component';
import { NotFoundComponent } from './../app/components/home/shared/not-found/not-found.component';
import { AboutComponent } from './components/home/about/about.component';
import { ContactComponent } from './components/home/contact/contact.component';

const rutas: Routes = [
  { path: '', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // SIEMPRE RUTA DEFAULT
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'notFound' },
];

export const APP_ROUTES = RouterModule.forRoot(rutas);
