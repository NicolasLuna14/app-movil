import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camara-a',
  templateUrl: './camara-a.page.html',
  styleUrls: ['./camara-a.page.scss'],
})
export class CamaraAPage implements OnInit {
  picture: string;
  constructor() { }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl, 
    });

    this.picture = image.dataUrl;
  }

  ngOnInit() {
  }
}
 

