import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { Ng2ol3Module } from './src/components/@index';

import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import {
    DemoFullComponent,
    DemoMapComponent,
    DemoSidebarComponent,
    DemoLayertreeComponent,
    DemoMeasureComponent,
    DemoPrintComponent
} from './demo/@index';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        Ng2ol3Module,
        routing
    ],
    declarations: [
        AppComponent,
        DemoFullComponent,
        DemoMapComponent,
        DemoSidebarComponent,
        DemoLayertreeComponent,
        DemoMeasureComponent,
        DemoPrintComponent
    ],
    providers: [
        appRoutingProviders,
        { provide: Window, useValue: window },
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }