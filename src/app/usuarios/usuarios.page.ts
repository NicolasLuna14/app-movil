import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  listado = [];
  constructor( private api:ApirestService) { }

  ngOnInit() {
    this.listar(); 
  }
  listar()
  {
    this.api.getUsers(); // carga los datos a listado del servicio
    this.listado = this.api.listado;
  }

}
