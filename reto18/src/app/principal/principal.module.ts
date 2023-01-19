import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosTablaComponent } from './usuarios-tabla/usuarios-tabla.component';



@NgModule({
  declarations: [
    UsuariosTablaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UsuariosTablaComponent
  ]
})
export class PrincipalModule { }
