import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraAPage } from './camara-a.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraAPageRoutingModule {}
