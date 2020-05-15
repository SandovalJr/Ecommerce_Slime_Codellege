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
import { CaballeroComponent } from './components/home/products/caballero/caballero.component';
import { DamaComponent } from './components/home/products/dama/dama.component';
import { KidsComponent } from './components/home/products/kids/kids.component';
import { BuyProductsComponent } from './components/home/products/buy-products/buy-products.component';
import { ZapatosComponent } from './components/home/products/zapatos/zapatos.component';
import { ChatComponent } from './components/home/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    InicioComponent,
    AboutComponent,
    ContactComponent,
    CaballeroComponent,
    DamaComponent,
    KidsComponent,
    BuyProductsComponent,
    ZapatosComponent,
    ChatComponent,
  ],
  imports: [BrowserModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
