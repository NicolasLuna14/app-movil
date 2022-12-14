import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsAPage } from './options-a.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsAPageRoutingModule {}
