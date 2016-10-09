import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3LayertreeComponent } from './layertree.component';

import { Ng2ol3LayergroupModule } from './layergroup.module';
import { Ng2ol3LayerModule } from './layer.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(), 
        Ng2ol3LayergroupModule, 
        Ng2ol3LayerModule],
    declarations: [Ng2ol3LayertreeComponent],
    exports: [Ng2ol3LayertreeComponent]
})
export class Ng2ol3LayertreeModule {
}
