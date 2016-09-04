import {Component} from '@angular/core';

import {Ng2ol3Config} from './src/classes/ng2ol3config';
import {Ng2ol3Header} from './src/classes/ng2ol3header';
import {Ng2ol3Logo} from './src/classes/ng2ol3logo';
import {Ng2ol3Map} from './src/classes/ng2ol3map';
import {Ng2ol3View} from './src/classes/ng2ol3view';
import {Ng2ol3Sidebar} from './src/classes/ng2ol3sidebar';

@Component({
    selector: 'ng2ol3',
    template: `
      <ng2ol3-container
        [config]="myConfig">
      </ng2ol3-container>
    `
})
export class AppComponent {
    ol: any;
    myConfig: Ng2ol3Config;
    userLang: string;
    header: Ng2ol3Header;
    logo: Ng2ol3Logo;
    title: string;
    renderer: string;
    view: Ng2ol3View;
    layers: any[];
    // sidebar: Ng2ol3Sidebar;

    constructor() {
        this.renderer = "webgl";
        this.view = new Ng2ol3View({
            center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: 7
        });
        this.layers = [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ];
        this.myConfig = new Ng2ol3Config();
        this.myConfig.setAppMapRenderer(this.renderer);
        this.myConfig.setAppView(this.view);
        this.myConfig.setAppLayers(this.layers);
    }
}