import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { CardNotasComponent } from './components/notas/card-notas/card-notas.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { EditarNotaComponent } from './components/notas/editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './components/notas/excluir-nota/excluir-nota.component';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { CriarCategoriaComponent } from './components/categorias/criar-categoria/criar-categoria.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './components/categorias/excluir-categoria/excluir-categoria.component';
import { FiltroNotasComponent } from './components/notas/filtro-notas/filtro-notas.component';
import { ListarNotasArquivadasComponent } from './components/notas/listar-notas-arquivadas/listar-notas-arquivadas.component';
import { FormularioNotaComponent } from './components/notas/formulario-nota/formulario-nota.component';
import { FormularioCategoriaComponent } from './components/categorias/formulario-categoria/formulario-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarNotasComponent,
    CardNotasComponent,
    CriarNotaComponent,
    EditarNotaComponent,
    ExcluirNotaComponent,
    ListarCategoriasComponent,
    CriarCategoriaComponent,
    EditarCategoriaComponent,
    ExcluirCategoriaComponent,
    FiltroNotasComponent,
    ListarNotasArquivadasComponent,
    FormularioNotaComponent,
    FormularioCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}