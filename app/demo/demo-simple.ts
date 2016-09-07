import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'demo-simple',
    template: `
      <ng2ol3 [config]="config"></ng2ol3> 
    `
})
export class DemoSimpleComponent implements OnInit {
    config: any;

    public ngOnInit(): any {

        this.config = {
            map: {
                renderer: 'canvas',
                target: 'demo-simple-map',
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