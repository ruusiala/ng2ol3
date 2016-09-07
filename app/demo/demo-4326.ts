import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'demo-4326',
    template: `
      <ng2ol3 [config]="config"></ng2ol3> 
    `
})
export class Demo4326Component implements OnInit {
    config: any;

    public ngOnInit(): any {

        this.config = {
            map: {
                renderer: 'canvas',
                target: 'demo-4326-map',
                view: {
                    projection: "EPSG:4326",
                    center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:4326"),
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