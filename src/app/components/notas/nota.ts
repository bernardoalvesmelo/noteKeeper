export class Nota {
    id?: number;
    titulo: string;
    conteudo: string;
    tema: Tema;
    categoriaId?: number;

    constructor(titulo: string, conteudo: string, tema: Tema, id? : number, categoriaId? : number) {
      this.id = id;
      this.titulo = titulo;
      this.conteudo = conteudo;
      this.tema = tema;
      this.categoriaId = categoriaId ?? 1; 
    }
  }

type Tema = 'info' | 'warning' | 'danger' | 'dark';
