import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/shared/navbar/navbar.component';
import { NotFoundComponent } from './components/home/shared/not-found/not-found.component';
import { FooterComponent } from './components/home/shared/footer/footer.component';
import { InicioComponent } from './components/home/inicio/inicio.component';

// rutas
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    InicioComponent,
  ],
  imports: [BrowserModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
