import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Ng2ol3LayergroupComponent } from './layergroup.component';

import {Ng2ol3LayerModule} from'./layer.module';

@NgModule({
  imports: [CommonModule, Ng2ol3LayerModule],
  declarations: [Ng2ol3LayergroupComponent],
  exports: [Ng2ol3LayergroupComponent]
})
export class Ng2ol3LayergroupModule {
}
