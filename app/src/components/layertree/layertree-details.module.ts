import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { Ng2ol3LayertreeDetailsComponent } from './layertree-details.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot()],
    declarations: [Ng2ol3LayertreeDetailsComponent],
    exports: [Ng2ol3LayertreeDetailsComponent]
})
export class Ng2ol3LayertreeDetailsModule {
}
