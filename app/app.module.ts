import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Ng2ol3ContainerComponent} from './src/components/ng2ol3-container.component';
import {Ng2ol3MapComponent} from './src/components/ng2ol3-map.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, Ng2ol3ContainerComponent, Ng2ol3MapComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}