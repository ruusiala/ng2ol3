import {NgModule} from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import {Ng2ol3Component} from './main';

import {Ng2ol3ContainerComponent} from './components/ng2ol3-container.component';
import {Ng2ol3HeaderComponent} from './components/ng2ol3-header.component';
import {Ng2ol3MapComponent} from './components/ng2ol3-map.component';
import {Ng2ol3SidebarComponent} from './components/ng2ol3-sidebar.component';

import {Ng2ol3Config} from './classes/ng2ol3config';
import {Ng2ol3Header} from './classes/ng2ol3header';
import {Ng2ol3Logo} from './classes/ng2ol3logo';
import {Ng2ol3Map} from './classes/ng2ol3map';
import {Ng2ol3Sidebar} from './classes/ng2ol3sidebar';
import {Ng2ol3View} from './classes/ng2ol3view';

@NgModule({
    declarations: [Ng2ol3Component],
    imports: [
        BrowserModule,
        Ng2ol3HeaderComponent,
        Ng2ol3MapComponent,
        Ng2ol3SidebarComponent,
        Ng2ol3Config,
        Ng2ol3Header,
        Ng2ol3Logo,
        Ng2ol3Map,
        Ng2ol3Sidebar,
        Ng2ol3View
    ],
    bootstrap: [Ng2ol3Component]
})
export class AppModule { }