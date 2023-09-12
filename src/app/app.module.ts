import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { CardNotasComponent } from './components/notas/card-notas/card-notas.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarNotasComponent,
    CardNotasComponent,
    CriarNotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}