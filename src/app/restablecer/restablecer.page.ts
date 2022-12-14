import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  formularioRestablecer: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private router:Router) {
    this.formularioRestablecer = this.fb.group({
      'nombre' : new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required
      )
    });
   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRestablecer.value;
      if(this.formularioRestablecer.invalid){
        const alert = await this.alertController.create({
          header: 'Datos Incompletos',
          message: 'Complete todos los datos',
          buttons: ['Aceptar']
        });

        await alert.present();
        return;
      }
      else 
      {
        this.router.navigate(['/log-alumno'])
      }
      var usuario = {
        nombre: f.nombre,
        password: f.password
      }
      localStorage.setItem('usuario',JSON.stringify(usuario));
  }
  
}