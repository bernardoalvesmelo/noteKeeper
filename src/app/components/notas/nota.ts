export class Nota {
    id?: number;
    titulo: string;
    conteudo: string;
    tema: Tema;

    constructor(titulo: string, conteudo: string, tema: Tema, id? : number) {
      this.id = id;
      this.titulo = titulo;
      this.conteudo = conteudo;
      this.tema = tema; 
    }
  }

type Tema = 'info' | 'warning' | 'danger' | 'dark';
