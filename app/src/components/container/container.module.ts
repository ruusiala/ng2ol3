import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {Ng2ol3MapModule} from '../map/map.module';

import { Ng2ol3ContainerComponent } from './container.component';

@NgModule({
    imports: [CommonModule, Ng2ol3MapModule],
    declarations: [Ng2ol3ContainerComponent],
    exports: [Ng2ol3ContainerComponent]
})
export class Ng2ol3ContainerModule {
}
