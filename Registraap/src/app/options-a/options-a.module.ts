import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsAPageRoutingModule } from './options-a-routing.module';

import { OptionsAPage } from './options-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsAPageRoutingModule
  ],
  declarations: [OptionsAPage]
})
export class OptionsAPageModule {}
