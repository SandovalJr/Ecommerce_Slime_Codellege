import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/shared/navbar/navbar.component';
import { NotFoundComponent } from './components/home/shared/not-found/not-found.component';
import { FooterComponent } from './components/home/shared/footer/footer.component';

// rutas



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
