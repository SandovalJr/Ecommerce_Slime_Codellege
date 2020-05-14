import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/shared/navbar/navbar.component';
import { NotFoundComponent } from './components/home/shared/not-found/not-found.component';
import { FooterComponent } from './components/home/shared/footer/footer.component';
import { InicioComponent } from './components/home/inicio/inicio.component';
import { AboutComponent } from './components/home/about/about.component';

// rutas
import { APP_ROUTES } from './app.routes';
import { ContactComponent } from './components/home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    InicioComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
