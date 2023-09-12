import { Component } from "@angular/core";
import { Nota } from "../nota";
import { NotaService } from "../nota.service";
import { Router } from "@angular/router";



@Component({
    selector: 'app-criar-nota',
    templateUrl: './criar-nota.component.html',
    styleUrls: ['./criar-nota.component.css']
})

export class CriarNotaComponent {
    nota: Nota;

    constructor(
        private notaService: NotaService,
        private router: Router
        ) 
        {
            this.nota = {
                id: 0,
                titulo: 'Padrão',
                conteudo: 'Conteúdo Padrão',
                tema: 'dark'
            }
        }

    criarNota() {
        this.notaService.criarNota(this.nota);
    
        this.router.navigate(['/notas', 'listar']);
    }
}