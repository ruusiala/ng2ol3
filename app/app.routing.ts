import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMapComponent } from './demo/demo-map';
import {DemoSidebarComponent, DemoToolbarComponent, DemoLayertreeComponent} from './demo/@index';

const appRoutes: Routes = [
    {
        path: '',
        // redirectTo: '/demo-sidebar',
        component: DemoMapComponent,
        pathMatch: 'full'
    }, {
        path: 'demo-map',
        component: DemoMapComponent
    }, {
        path: 'demo-sidebar',
        component: DemoSidebarComponent
    }, {
        path: 'demo-toolbar',
        component: DemoToolbarComponent
    }, {
        path: 'demo-layertree',
        component: DemoLayertreeComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);