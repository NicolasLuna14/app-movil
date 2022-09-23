import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-alumno',
  templateUrl: './log-alumno.page.html',
  styleUrls: ['./log-alumno.page.scss'],
})
export class LogAlumnoPage implements OnInit {
  usuario    : any;
  password   : any;
  mensaje    : String;

  constructor(private alertController: ToastController,
    private toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }
    async Ingresar(usuario: HTMLInputElement, password: HTMLInputElement)
  {
    if(usuario.value == "")
    {
      
      const toast = await this.toastController.create({
        
        message : "Ingrese algún usuario",
        duration: 1000
      })
      toast.present();
      return;
    }

    else if(password.value == "")
    {
      const toast = await this.toastController.create({
        message : "Ingrese contraseña",
        duration: 1000
      })
      toast.present();
      return;
    }
    else if(usuario.value != "a.nunez@duocuc.cl")
    {
      const toast = await this.toastController.create({
        message : "Usuario invalido",
        duration: 1000
      })
      toast.present();
      return;
    }
    else if(password.value != "1234")
    {
      const toast = await this.toastController.create({
        message : "Contraseña invalida",
        duration: 1000
      })
      toast.present();
      return;
    }

    else if(usuario.value == "a.nunez@duocuc.cl", password.value == "1234")
    {
      this.router.navigate(['/options-a']);
    };            
  }
}