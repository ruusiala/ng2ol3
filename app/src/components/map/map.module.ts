import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3MapComponent } from './map.component';

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot()],
  declarations: [Ng2ol3MapComponent],
  exports: [Ng2ol3MapComponent]
})
export class Ng2ol3MapModule {
}
