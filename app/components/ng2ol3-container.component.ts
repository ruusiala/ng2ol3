/// <reference path="../../node_modules/@types/openlayers/index.d.ts" />

import {Component, Input, OnInit} from '@angular/core';

import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3View} from '../classes/ng2ol3view';
import {Ng2ol3Config} from '../classes/ng2ol3config';
import {Ng2ol3Sidebar} from '../classes/ng2ol3sidebar';

import {Ng2ol3SidebarComponent} from './ng2ol3-sidebar.component';
import {Ng2Ol3MapComponent} from './ng2ol3-map.component';

@Component({
    selector: 'ng2ol3-container',
    template: `
      <ng2ol3-sidebar
        *ngIf="sidebar !== null"
        [map]="map"
        [config]="config">
      </ng2ol3-sidebar>
      <ng2ol3-map
        [map]="map"
        [config]="config">
      </ng2ol3-map>
    `,
    styleUrls: ['dist/css/components/ng2ol3-container.component.css'],
    directives: [Ng2ol3SidebarComponent, Ng2Ol3MapComponent]
})

export class Ng2ol3ContainerComponent implements OnInit {
    @Input() config: Ng2ol3Config;
    map: Ng2ol3Map;
    sidebar: Ng2ol3Sidebar;

    ngOnInit() {
        this.map = new Ng2ol3Map({
            target: this.config.getAppMapDomId() || 'map',
            renderer: this.config.getAppMapRenderer() || 'canvas',
            view: this.config.getAppView() || new Ng2ol3View({
                center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
                zoom: 7
            }),
            layers: this.config.getAppLayers() || [new ol.layer.Tile({
                source: new ol.source.OSM()
            })],
        });
        this.sidebar = this.config.getAppSidebar() || null;
    }

}
