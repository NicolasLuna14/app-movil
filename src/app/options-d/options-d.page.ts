import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-options-d',
  templateUrl: './options-d.page.html',
  styleUrls: ['./options-d.page.scss'],
})
export class OptionsDPage implements OnInit {

  opciones   : any;
  opcioness  : any;
  mensaje    : String;

  constructor(private alertController: ToastController,
    private toastController: ToastController, private router:Router, private api:ApirestService) { }
    listado = [];

    ngOnInit() {
      this.listar(); 
    }
    listar()
    {
      this.api.getUsersp(); // carga los datos a listado del servicio
      this.listado = this.api.listado;
    }
  

  
   
}