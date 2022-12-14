import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { ActivatedRoute } from '@angular/router'; // para capturar el id


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  datos :any; 
  listado = [];
  constructor(private api:ApirestService, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.leer(); 
  }

  async leer()
  {
    let id = "";   
    this.activatedRoute.paramMap.subscribe(async parametros => {
      id = parametros.get("id"); 
    })
    await this.api.getUser(id); 
    this.datos = this.api.item;
    console.log(this.datos); 

  }

  // listar()
  // {
  //   this.api.getUser(); // carga los datos a listado del servicio
  //   this.listado = this.api.listado;
  // }

}
