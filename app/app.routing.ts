import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoSimpleComponent} from './demo/demo-simple';
import {DemoSidebarComponent} from './demo/demo-sidebar';
import {DemoLayertreeComponent} from './demo/demo-layertree';

const appRoutes: Routes = [
    {
        path: '',
        // redirectTo: '/demo-sidebar',
        component: DemoSimpleComponent,
        pathMatch: 'full'
    },    {
        path: 'demo-simple',
        component: DemoSimpleComponent
    },    {
        path: 'demo-sidebar',
        component: DemoSidebarComponent
    },    {
        path: 'demo-layertree',
        component: DemoLayertreeComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);