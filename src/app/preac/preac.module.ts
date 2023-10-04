import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreacPageRoutingModule } from './preac-routing.module';

import { PreacPage } from './preac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreacPageRoutingModule
  ],
  declarations: [PreacPage]
})
export class PreacPageModule {}
