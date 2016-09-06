import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Ng2ol3MapComponent } from './map.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Ng2ol3MapComponent],
  exports: [Ng2ol3MapComponent]
})
export class Ng2ol3MapModule {
}
