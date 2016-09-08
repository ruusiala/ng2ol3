import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoSimpleComponent} from './demo/demo-simple';
import {DemoSidebarComponent} from './demo/demo-sidebar';

const appRoutes: Routes = [
    {
        path: '',
        // redirectTo: '/demo-sidebar',
        component: DemoSimpleComponent,
        pathMatch: 'full'
    },
    {
        path: 'demo-simple',
        component: DemoSimpleComponent
    },
    {
        path: 'demo-sidebar',
        component: DemoSidebarComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);