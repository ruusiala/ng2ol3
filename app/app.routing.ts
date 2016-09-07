import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoSimpleComponent} from './demo/demo-simple';
import {Demo4326Component} from './demo/demo-4326';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/demo-simple',
        pathMatch: 'full'
    },
    {
        path: 'demo-simple',
        component: DemoSimpleComponent
    },
    {
        path: 'demo-4326',
        component: Demo4326Component
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);