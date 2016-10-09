import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3ToolbarComponent } from './toolbar.component';

import { Ng2ol3LayertreeModule } from '../layertree/layertree.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    Ng2ol3LayertreeModule,
  ],
  declarations: [Ng2ol3ToolbarComponent],
  exports: [Ng2ol3ToolbarComponent]
})
export class Ng2ol3ToolbarModule {
}
