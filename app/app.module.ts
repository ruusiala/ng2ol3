import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Ng2ol3Module} from './src/components/@index';

import {AppComponent} from './app.component';

import {routing, appRoutingProviders} from './app.routing';
import {DemoSimpleComponent} from './demo/demo-simple';
import {DemoSidebarComponent} from './demo/demo-sidebar';

@NgModule({
    imports: [
        BrowserModule, 
        Ng2ol3Module, 
        routing
    ],
    declarations: [
        AppComponent, 
        DemoSimpleComponent,
        DemoSidebarComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }