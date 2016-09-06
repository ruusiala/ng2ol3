import {Component, Input, OnInit} from '@angular/core';

import { Ng2ol3Config } from './src/models/config';
import {Ng2ol3View} from './src/models/view';

@Component({
    selector: 'ng2ol3',
    template: `
      <ng2ol3-container [config]="config"></ng2ol3-container> 
    `,
    host: {
        class: 'ng2ol3'
    }
})
export class AppComponent implements OnInit {
    config: any;

    public ngOnInit(): any {

        this.config = {
            map: {
                renderer: 'canvas',
                target: 'appmap',
                view: {
                    projection: "EPSG:900913",
                    center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
                    zoom: 7
                },
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ]
            }
        }

    }



}