import { Component } from "@angular/core";
import { Nota } from "../nota";
import { NotaService } from "../nota.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from "../../categorias/categoria.service";
import { Categoria } from "../../categorias/categoria";



@Component({
    selector: 'app-criar-nota',
    templateUrl: './criar-nota.component.html',
    styleUrls: ['./criar-nota.component.css']
})

export class CriarNotaComponent {
    nota: Nota;
    categorias: Categoria[] = [];

    constructor(
        private notaService: NotaService,
        private categoriaService: CategoriaService,
        private router: Router,
        private toastService: ToastrService
        ) 
        {
            this.nota = {
                id: 0,
                titulo: 'Padrão',
                conteudo: 'Conteúdo Padrão',
                tema: 'dark',
                categoriaId: 1,
            }
        }

      
    ngOnInit(): void {
        this.categoriaService.selecionarTodos().subscribe((categoriasLista) => {
            this.categorias = categoriasLista;
        });
    }

    criarNota() {
        this.notaService.criarNota(this.nota).subscribe((nota) => {
            this.toastService
            .success(`Nota ${nota.titulo} criada com sucesso`, 'Success');
            
            this.router.navigate(['/notas', 'listar']);
        });
    }
}