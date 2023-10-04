import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreacPage } from './preac.page';

const routes: Routes = [
  {
    path: '',
    component: PreacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreacPageRoutingModule {}
