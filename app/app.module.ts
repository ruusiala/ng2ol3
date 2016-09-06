import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Ng2ol3Module} from './src/components/@index';

import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule, Ng2ol3Module],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}