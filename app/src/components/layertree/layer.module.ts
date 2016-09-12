import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Ng2ol3LayerComponent } from './layer.component';

@NgModule({
    imports: [CommonModule],
    declarations: [Ng2ol3LayerComponent],
    exports: [Ng2ol3LayerComponent]
})
export class Ng2ol3LayerModule {
}
