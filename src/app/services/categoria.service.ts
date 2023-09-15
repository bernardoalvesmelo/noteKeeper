import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categoria } from "../models/categoria";


@Injectable({
    providedIn: 'root',
})
export class CategoriaService  {

    private API_URL = 'http://localhost:3000/categorias';

    constructor(private http: HttpClient) {}
 
    public criarCategoria(categoria: Categoria) {
        return this.http.post<Categoria>(this.API_URL, categoria);
    }

    public selecionarTodos() {
      return this.http.get<Categoria[]>(this.API_URL);
    }

    public editarCategoria(categoria: Categoria) {
      return this.http.put<Categoria>(this.API_URL + `/${categoria.id}`, categoria);
    }

    public excluirCategoria(categoria: Categoria) {
      return this.http.delete<Categoria>(this.API_URL + `/${categoria.id}`);
    }

    public selecionarPorId(id: number) {
      return this.http.get<Categoria>(this.API_URL + `/${id}`);
    }
}