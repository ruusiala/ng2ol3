import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMapComponent, DemoSidebarComponent, DemoLayertreeComponent, DemoMeasureComponent, DemoFullComponent } from './demo/@index';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/demo-full',
        //component: DemoMapComponent,
        pathMatch: 'full'
    }, {
        path: 'demo-map',
        component: DemoMapComponent
    }, {
        path: 'demo-sidebar',
        component: DemoSidebarComponent
    }, {
        path: 'demo-layertree',
        component: DemoLayertreeComponent
    }, {
        path: 'demo-measure',
        component: DemoMeasureComponent
    }, {
        path: 'demo-full',
        component: DemoFullComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);