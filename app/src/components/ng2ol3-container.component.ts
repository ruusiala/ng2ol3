import {Component, Input, OnInit} from '@angular/core';

import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3View} from '../classes/ng2ol3view';
import {Ng2ol3Config} from '../classes/ng2ol3config';
import {Ng2ol3Sidebar} from '../classes/ng2ol3sidebar';
import {Ng2ol3Header} from '../classes/ng2ol3header';

@Component({
    selector: 'ng2ol3-container',
    template: `
      <ng2ol3-map
        [map]="map"
        [config]="config">
      </ng2ol3-map>
    `
})

export class Ng2ol3ContainerComponent implements OnInit {
    @Input() config: Ng2ol3Config;
    map: Ng2ol3Map;
    header: Ng2ol3Header;
    sidebar: Ng2ol3Sidebar;

    ngOnInit() {
        this.map = new Ng2ol3Map({
            target: 'map',
            renderer: this.config.getAppMapRenderer() || 'canvas',
            view: this.config.getAppView() || new Ng2ol3View({
                center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
                zoom: 7
            }),
            layers: this.config.getAppLayers() || [new ol.layer.Tile({
                source: new ol.source.OSM()
            })],
        });
        this.header = this.config.getAppHeader() || null;
        this.sidebar = this.config.getAppSidebar() || null;
    }

    onResize(event) {
        let newWidth: number = event.target.innerWidth;
        //TODO: resize sidebar
    }

}
