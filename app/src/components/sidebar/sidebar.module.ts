import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3SidebarComponent } from './sidebar.component';

import { Ng2ol3ToolbarModule } from '../toolbar/toolbar.module';
import { Ng2ol3LayertreeModule } from '../layertree/layertree.module';
import { Ng2ol3MeasureModule } from '../measure/measure.module';
import { Ng2ol3PrintModule } from '../print/print.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    Ng2ol3ToolbarModule,
    Ng2ol3LayertreeModule,
    Ng2ol3MeasureModule,
    Ng2ol3PrintModule
  ],
  declarations: [Ng2ol3SidebarComponent],
  exports: [Ng2ol3SidebarComponent]
})
export class Ng2ol3SidebarModule {
}
