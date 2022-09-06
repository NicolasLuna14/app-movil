import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login-d',
  templateUrl: './login-d.page.html',
  styleUrls: ['./login-d.page.scss'],
})
export class LoginDPage implements OnInit {
  usuario    : string;
  contrasena : string;
  mensaje    : String;

  constructor(private alertController: ToastController,
    private toastController: ToastController) { }

  ngOnInit() {
  }
    async Aceptar(usuario: HTMLInputElement, contrasena: HTMLInputElement)
  {
    if(usuario.value == "")
    {
      
      const toast = await this.toastController.create({
        message : "Ingrese algún usuario",
        duration: 2000
      })
      toast.present();
    }
    else if(contrasena.value == "")
    {
      const toast = await this.toastController.create({
        message : "Ingrese contraseña",
        duration: 2000
      })
      toast.present();
    }
    else
    {
      this.mensaje = "";
      const alert = await this.alertController.create({
        header    : 'Mensaje de la app',
        message   : 'Los datos fueron guardados con éxito',
        buttons   : ['Ok'],
      });
      await alert.present();
    }
  }
  


}

