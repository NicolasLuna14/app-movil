import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsDPageRoutingModule } from './options-d-routing.module';

import { OptionsDPage } from './options-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsDPageRoutingModule
  ],
  declarations: [OptionsDPage]
})
export class OptionsDPageModule {}
