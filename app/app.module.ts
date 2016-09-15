import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Ng2ol3Module } from './src/components/@index';

import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import {
    DemoMapComponent,
    DemoSidebarComponent,
    DemoToolbarComponent,
    DemoLayertreeComponent
} from './demo/@index';

@NgModule({
    imports: [
        BrowserModule,
        Ng2ol3Module,
        routing
    ],
    declarations: [
        AppComponent,
        DemoMapComponent,
        DemoSidebarComponent,
        DemoToolbarComponent,
        DemoLayertreeComponent
    ],
    providers: [
        appRoutingProviders,
        { provide: Window, useValue: window },
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }