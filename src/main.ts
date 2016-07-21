// The usual bootstrapping imports
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {Component} from '@angular/core';
import {TranslateService, TranslateLoader, TranslateStaticLoader, TranslatePipe} from 'ng2-translate/ng2-translate';

import {Ng2ol3ContainerComponent} from './components/ng2ol3-container.component';
import {Ng2ol3Config} from './classes/ng2ol3config';
import {Ng2ol3Header} from './classes/ng2ol3header';
import {Ng2Ol3Logo} from './classes/ng2ol3logo';
import {Ng2ol3Map} from './classes/ng2ol3map';
import {Ng2ol3View} from './classes/ng2ol3view';
import {Ng2ol3Sidebar} from './classes/ng2ol3sidebar';

@Component({
    selector: 'ng2ol3',
    template: `
      <ng2ol3-container
        [config]="myConfig">
      </ng2ol3-container>
    `,
    directives: [Ng2ol3ContainerComponent],
    pipes: [TranslatePipe]
})

export class Ng2ol3Component {
    myConfig: Ng2ol3Config;
    userLang: string;
    header: Ng2ol3Header;
    logo: Ng2Ol3Logo;
    title: string;
    renderer: string;
    view: Ng2ol3View;
    layers: any[];
    sidebar: Ng2ol3Sidebar;

    constructor(public translate: TranslateService) {

        /*************************************************
         * CONFIGURE THE APP, THIS IS ALL YOU HAVE TO DO *
         *************************************************/
        // Set the language
        this.userLang = "en";

        // Set some map properties
        this.renderer = 'webgl';
        this.view = new Ng2ol3View({
            center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: 7
        });

        // Configure the layers
        this.layers = [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ];

        // Add an app header if you like
        this.header = new Ng2ol3Header();
        this.header.setTitle("This is my first ng2ol3 map");
        this.logo = new Ng2Ol3Logo();
        this.logo.setSrc("etc/img/logo/apple-touch-icon-57x57.png");
        this.logo.setWidth(57);
        this.logo.setHeight(57);
        this.header.setLogo(this.logo);

        // Configure a sidebar (optional)
        this.sidebar = new Ng2ol3Sidebar();

        /**************************************
         * LET NG2OL3 DO THE JOB FROM HERE *
         **************************************/
        this.userLang = /(en|hu)/gi.test(this.userLang) ? this.userLang : 'en';
        translate.use(this.userLang);
        this.myConfig = new Ng2ol3Config();
        this.myConfig.setAppLang(this.userLang);
        this.myConfig.setAppHeader(this.header);
        this.myConfig.setAppMapRenderer(this.renderer);
        this.myConfig.setAppView(this.view);
        this.myConfig.setAppLayers(this.layers);
        this.myConfig.setAppSidebar(this.sidebar);
    }

}

bootstrap(Ng2ol3Component, [
    HTTP_PROVIDERS, {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
    },
    TranslateService
]);
