import { Routes, RouterModule } from '@angular/router';
// COMPONENTES
import { InicioComponent } from './components/home/inicio/inicio.component';
import { NotFoundComponent } from './../app/components/home/shared/not-found/not-found.component';
const rutas: Routes = [
  { path: '', component: InicioComponent },

  // SIEMPRE RUTA DEFAULT
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'notFound' },
];

export const APP_ROUTES = RouterModule.forRoot(rutas);
