/// <reference path="../../node_modules/@types/openlayers/index.d.ts" />

import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

import {Ng2ol3ContainerComponent} from './ng2ol3-container.component';
import {Ng2ol3Config} from '../classes/ng2ol3config';
import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3View} from '../classes/ng2ol3view';
import {Ng2ol3Sidebar} from '../classes/ng2ol3sidebar';

@Component({
    selector: 'ng2ol3',
    template: `
      <alert type="info">
        <span><img src="../etc/img/logo/apple-touch-icon-57x57.png"></span>
        <span>{{'THIS_IS_MY_FIRST_APP' | translate:{value: title} }}</span>
      </alert>
      <ng2ol3-container
        [config]="myConfig">
      </ng2ol3-container>
    `,
    styleUrls: ['dist/css/components/ng2ol3.component.css'],
    directives: [AlertComponent, Ng2ol3ContainerComponent],
    pipes: [TranslatePipe]
})

export class Ng2ol3Component {
    myConfig: Ng2ol3Config = new Ng2ol3Config();
    title: string;
    renderer: string;
    domId: string;
    view: Ng2ol3View;
    layers: any[];
    sidebar: Ng2ol3Sidebar;
    userLang: string;

    constructor(public translate: TranslateService) {

        /*************************************************
         * CONFIGURE THE APP, THIS IS ALL YOU HAVE TO DO *
         *************************************************/
        // Set the language
        this.userLang = "en";
        // Add an app title
        this.title = "ng2ol3";
        // Set some map properties
        this.renderer = 'webgl';
        this.domId = 'map';
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
        // Configure a sidebar (optional)
        // this.sidebar = new Ng2ol3Sidebar();

        /**************************************
         * LET NG2OL3 DO THE JOB FROM HERE *
         **************************************/
        translate.use(this.userLang);
        this.myConfig.setAppLang(this.userLang);
        this.myConfig.setAppTitle(this.title);
        this.myConfig.setAppMapRenderer(this.renderer);
        this.myConfig.setAppMapDomId(this.domId);
        this.myConfig.setAppView(this.view);
        this.myConfig.setAppLayers(this.layers);
        this.myConfig.setAppSidebar(this.sidebar);

    }

}
