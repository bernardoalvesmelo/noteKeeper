import { Injectable } from "@angular/core";
import { Nota } from "./nota";
import { HttpClient } from "@angular/common/http";

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

    editarNota(nota: Nota) {
      return this.http.put<Nota>(this.API_URL + `/${nota.id}`, nota);
    }

    excluirNota(nota: Nota) {
      return this.http.delete<Nota>(this.API_URL + `/${nota.id}`);
    }

    selecionarPorId(id: number) {
      return this.http.get<Nota>(this.API_URL + `/${id}`);
    }
}