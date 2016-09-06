import { NgModule } from '@angular/core';

import { ComponentsHelper } from './utils/components-helper.service';

import { Ng2ol3DummyModule } from './dummy/dummy.module';
import { Ng2ol3MapModule } from './map/map.module';
import { Ng2ol3ContainerModule } from './container/container.module';

@NgModule({
    exports: [
        Ng2ol3DummyModule,
        Ng2ol3MapModule,
        Ng2ol3ContainerModule
    ],
    providers: [
        { provide: ComponentsHelper, useClass: ComponentsHelper }
    ]
})
export class Ng2ol3Module {
}
