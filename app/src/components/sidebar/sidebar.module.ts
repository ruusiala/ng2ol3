import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Ng2ol3SidebarComponent } from './sidebar.component';

import { Ng2ol3ToolbarModule } from '../toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    Ng2ol3ToolbarModule
  ],
  declarations: [Ng2ol3SidebarComponent],
  exports: [Ng2ol3SidebarComponent]
})
export class Ng2ol3SidebarModule {
}
