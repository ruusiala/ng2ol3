import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoSimpleComponent} from './demo/demo-simple';
import {DemoSidebarComponent} from './demo/demo-sidebar';
import {DemoToolbarComponent} from './demo/demo-toolbar';

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
        path: 'demo-toolbar',
        component: DemoToolbarComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);