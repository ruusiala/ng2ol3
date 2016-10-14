import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3LayerComponent } from './layer.component';

import { Ng2ol3LayertreeDetailsModule } from './layertree-details.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
        Ng2ol3LayertreeDetailsModule],
    declarations: [Ng2ol3LayerComponent],
    exports: [Ng2ol3LayerComponent]
})
export class Ng2ol3LayerModule {
}
