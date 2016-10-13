import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3MeasureComponent } from './measure.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [Ng2ol3MeasureComponent],
  exports: [Ng2ol3MeasureComponent]
})
export class Ng2ol3MeasureModule {
}
