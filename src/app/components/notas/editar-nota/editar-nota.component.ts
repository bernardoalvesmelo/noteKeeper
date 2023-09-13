import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../nota';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit{
  nota: Nota;
  constructor(
    private route: ActivatedRoute,
    private notaService: NotaService,
    private router: Router,
    private toastService: ToastrService) {
    this.nota = {id: 0, titulo: '', conteudo: '', tema: 'dark'}
  }

  ngOnInit(): void {
    this.notaService.selecionarPorId(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe((n) => {
      this.nota = n;
     });
  }

  editarNota() {
    this.notaService.editarNota(this.nota).subscribe((nota) => {
    this.toastService.success(`Nota ${nota.titulo} editada com sucesso`, 'Success');
    this.router.navigate(['/notas', 'listar']);
    });
  }
}
