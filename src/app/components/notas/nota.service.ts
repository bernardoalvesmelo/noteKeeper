import { Injectable } from "@angular/core";
import { Nota } from "./nota";

@Injectable({
    providedIn: 'root',
})
export class NotaService  {
    notas: Nota[] = [
        {
          id: 0,
          titulo: 'Nota criada 1',
          conteudo: 'Nota de teste',
          tema: 'dark',
        },
        {
          id: 1,
          titulo: 'Nota criada 2',
          conteudo: 'Nota de teste',
          tema: 'warning',
        },
      ]; 

    public criarNota(nota: Nota): void{
        nota.id = this.notas.length;
        this.notas.push(nota);
    }

    public selecionarTodos() {
        return this.notas;
    }
}