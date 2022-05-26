import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PaginaService } from './service/pagina.service';
import { PersonasComponent } from './components/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    Pagina2Component,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [// importar servicio
  PaginaService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
