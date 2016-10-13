import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoFullComponent, DemoMapComponent, DemoSidebarComponent, DemoLayertreeComponent, DemoMeasureComponent, DemoPrintComponent } from './demo/@index';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/demo-full',
        //component: DemoMapComponent,
        pathMatch: 'full'
    }, {
        path: 'demo-full',
        component: DemoFullComponent
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
        path: 'demo-print',
        component: DemoPrintComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);