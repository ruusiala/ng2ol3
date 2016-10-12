import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3LayerComponent } from './layer.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot()],
    declarations: [Ng2ol3LayerComponent],
    exports: [Ng2ol3LayerComponent]
})
export class Ng2ol3LayerModule {
}
