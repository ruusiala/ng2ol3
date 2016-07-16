/// <reference path="../../definitely_typed/openlayers/openlayers.d.ts" />

import {Component, Input, OnInit} from '@angular/core';

import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3View} from '../classes/ng2ol3view';

@Component({
  selector: 'ng2ol3-container',
  template: ``,
  styleUrls: ['']
})

export class Ng2ol3ContainerComponent {
  @Input() title: string;
  @Input() createHeader: boolean;

  map: Ng2ol3Map;
  view: Ng2ol3View;
  layers: any[] = [];

  ngOnInit() {
    this.view = new Ng2ol3View({
      center: ol.proj.fromLonLat([19, 47], "EPSG:900913"),
      zoom: 7
    });

    this.layers.push(new ol.layer.Tile({
      source: new ol.source.OSM()
    }));

    this.map = new Ng2ol3Map({
      target: 'map',
      renderer: "webgl",
      view: this.view,
      layers: this.layers,
    });

    this.map.setTitle(this.title);
    console.log(this.map.getTitle());

  }

}
