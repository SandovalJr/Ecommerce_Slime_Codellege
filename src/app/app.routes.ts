import { Routes, RouterModule } from '@angular/router';
// COMPONENTES
import { InicioComponent } from './components/home/inicio/inicio.component';
import { NotFoundComponent } from './../app/components/home/shared/not-found/not-found.component';
import { AboutComponent } from './components/home/about/about.component';
import { ContactComponent } from './components/home/contact/contact.component';

// TIENDA COMPONENTES
import { CaballeroComponent } from './components/home/products/caballero/caballero.component';
import { DamaComponent } from './components/home/products/dama/dama.component';
import { KidsComponent } from './components/home/products/kids/kids.component';
import { BuyProductsComponent } from './components/home/products/buy-products/buy-products.component';
import { ZapatosComponent } from './components/home/products/zapatos/zapatos.component';

const rutas: Routes = [
  { path: '', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // TIENDA
  { path: 'caballero', component: CaballeroComponent },
  { path: 'dama', component: DamaComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'buyProducts/:id', component: BuyProductsComponent },
  { path: 'zapatos', component: ZapatosComponent },

  // SIEMPRE RUTA DEFAULT
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'notFound' },
];

export const APP_ROUTES = RouterModule.forRoot(rutas);
