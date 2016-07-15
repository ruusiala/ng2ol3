/// <reference path="../../definitely_typed/openlayers/openlayers.d.ts" />

import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'ng2ol3-container',
  template: ``,
  styleUrls: ['']
})

export class Ng2ol3ContainerComponent {

  map: ol.Map;
  view: ol.View;
  layers: any[] = [];

  constructor() {




    this.view = new ol.View({
      center: ol.proj.fromLonLat([19, 47], "EPSG:900913"),
      // center: [19, 47],
      zoom: 7
    });

    this.layers.push(new ol.layer.Tile({
      source: new ol.source.OSM()
    }));

    this.map = new ol.Map({
      view: this.view,
      layers: this.layers,
      target: 'map'
    });
  }
}
