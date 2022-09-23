import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';


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
    private toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }
    async Aceptar(opciones: HTMLInputElement, opcioness: HTMLInputElement)
  {
    if(opciones.value == "")
    {
      
      const toast = await this.toastController.create({
        message : "Llene todos los campos",
        duration: 1000,
      })
      toast.present();
      return;
    }

    else if(opcioness.value == "")
    {
      const toast = await this.toastController.create({
        message : "Ingrese contraseña",
        duration: 1000
      })
      toast.present();
      return;
    }

    else 
    {
      this.router.navigate(['/qr']);
    };            
  }
  
   
}