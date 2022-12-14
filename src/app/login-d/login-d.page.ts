import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-d',
  templateUrl: './login-d.page.html',
  styleUrls: ['./login-d.page.scss'],
})
export class LoginDPage implements OnInit {
  usuario    : any;
  contrasena : any;
  mensaje    : String;

  constructor(private alertController: ToastController,
    private toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }
    async Aceptar(usuario: HTMLInputElement, contrasena: HTMLInputElement)
  {
    if(usuario.value == "")
    {
      
      const toast = await this.toastController.create({
        message : "Ingrese algún usuario",
        duration: 1000,
      })
      toast.present();
      return;
    }

    else if(contrasena.value == "")
    {
      const toast = await this.toastController.create({
        message : "Ingrese contraseña",
        duration: 1000
      })
      toast.present();
      return;
    }
    else if(usuario.value != "p.@pro.duocuc.cl")
    {
      const toast = await this.toastController.create({
        message : "Usuario invalido",
        duration: 1000
      })
      toast.present();
      return;
    }
    else if(contrasena.value != "1234")
    {
      const toast = await this.toastController.create({
        message : "Contraseña invalida",
        duration: 1000
      })
      toast.present();
      return;
    }

    else if (usuario.value == "p.@pro.duocuc.cl", contrasena.value == "1234")
    {
      this.router.navigate(['/options-d']);
    };            
  }
}
  

