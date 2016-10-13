import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3PrintComponent } from './print.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [Ng2ol3PrintComponent],
  exports: [Ng2ol3PrintComponent]
})
export class Ng2ol3PrintModule {
}
