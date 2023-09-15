import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Nota } from "../models/nota";
import { Categoria } from "../models/categoria";


@Injectable({
    providedIn: 'root',
})
export class NotaService  {

  private API_URL = 'http://localhost:3000/notas';

  constructor(private http: HttpClient) {}
 

    public criarNota(nota: Nota) {
        return this.http.post<Nota>(this.API_URL, nota);
    }

    public selecionarTodos() {
      return this.http.get<Nota[]>(this.API_URL);
    }

    public selecionarTodosComCategoria() {
      const URL = 'http://localhost:3000/notas?_expand=categoria'
      return this.http.get<Nota[]>(URL);
    }

    public editarNota(nota: Nota) {
      return this.http.put<Nota>(this.API_URL + `/${nota.id}`, nota);
    }

    public excluirNota(nota: Nota) {
      return this.http.delete<Nota>(this.API_URL + `/${nota.id}`);
    }

    public selecionarPorId(id: number) {
      return this.http.get<Nota>(this.API_URL + `/${id}`);
    }

    public selecionarTodasPorCategoria(categoria: Categoria) {
      const URL = 'http://localhost:3000/notas?_expand=categoria&&categoriaId=' + categoria.id ?? 0;
      return this.http.get<Nota[]>(URL);
    }
}