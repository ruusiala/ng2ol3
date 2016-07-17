/// <reference path="../../definitely_typed/openlayers/openlayers.d.ts" />

import {Component, Input, OnInit} from '@angular/core';

import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3View} from '../classes/ng2ol3view';

import {Ng2ol3Config} from '../classes/ng2ol3config';

@Component({
    selector: 'ng2ol3-container',
    template: ``,
    styleUrls: ['']
})

export class Ng2ol3ContainerComponent {
    @Input() config: Ng2ol3Config;
    map: Ng2ol3Map;

    ngOnInit() {
        this.map = new Ng2ol3Map({
            target: this.config.getAppMapDomId() || 'map',
            renderer: this.config.getAppMapRenderer() || 'webgl',
            view: this.config.getAppView() || new Ng2ol3View({
                center: ol.proj.fromLonLat([19, 47], "EPSG:900913"),
                zoom: 7
            }),
            layers: this.config.getAppLayers() || [new ol.layer.Tile({
                source: new ol.source.OSM()
            })],
        });

    }

}
