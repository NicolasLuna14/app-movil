import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { ActivatedRoute } from '@angular/router'; // para capturar el id

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

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
    await this.api.getUserpr(id); 
    this.datos = this.api.item;
    console.log(this.datos); 

  }

}
