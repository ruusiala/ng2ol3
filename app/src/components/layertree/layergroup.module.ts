import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3LayergroupComponent } from './layergroup.component';

import {Ng2ol3LayerModule} from'./layer.module';
import { Ng2ol3LayertreeDetailsModule } from './layertree-details.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(), 
    Ng2ol3LayerModule,
    Ng2ol3LayertreeDetailsModule],
  declarations: [Ng2ol3LayergroupComponent],
  exports: [Ng2ol3LayergroupComponent]
})
export class Ng2ol3LayergroupModule {
}
