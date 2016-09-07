import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Ng2ol3Module} from './src/components/@index';

import {AppComponent} from './app.component';

import {routing, appRoutingProviders} from './app.routing';
import {DemoSimpleComponent} from './demo/demo-simple';
import {Demo4326Component} from './demo/demo-4326';

@NgModule({
    imports: [
        BrowserModule, 
        Ng2ol3Module, 
        routing
    ],
    declarations: [
        AppComponent, 
        DemoSimpleComponent,
        Demo4326Component
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }