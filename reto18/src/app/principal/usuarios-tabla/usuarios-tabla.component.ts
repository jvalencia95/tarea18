import { Component } from '@angular/core';
import { UsuariosTablaService } from '../services/usuarios-tabla.service';

@Component({
  selector: 'app-usuarios-tabla',
  templateUrl: './usuarios-tabla.component.html',
  styleUrls: ['./usuarios-tabla.component.css']
})
export class UsuariosTablaComponent {

  listado:any = new Array()

  constructor(private usuariosTablaService: UsuariosTablaService) { }

  ngOnInit(): void {

    this.usuariosTablaService.getUsers().subscribe({
      next: users => this.listado = users
    })
  }
}
