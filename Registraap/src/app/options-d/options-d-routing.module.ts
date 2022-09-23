import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsDPage } from './options-d.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsDPageRoutingModule {}
