import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraAPageRoutingModule } from './camara-a-routing.module';

import { CamaraAPage } from './camara-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraAPageRoutingModule
  ],
  declarations: [CamaraAPage]
})
export class CamaraAPageModule {}
