import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo-layertree',
    template: `
      <ng2ol3 [config]="config"></ng2ol3> 
    `
})
export class DemoLayertreeComponent implements OnInit {
    config: any;

    public ngOnInit(): any {

        this.config = {
            map: {
                renderer: 'canvas',
                target: 'demo-layertree-map',
                view: {
                    projection: "EPSG:900913",
                    center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
                    zoom: 7
                },
                layers: [
                    {
                        type: 'layergroup',
                        name: 'Base layers',
                        expanded: true,
                        visible: true,
                        children: [
                            {
                                type: 'layer',
                                name: 'OpenStreetMap layer',
                                visible: true,
                                opacity: 1.0,
                                layer: new ol.layer.Tile({
                                    source: new ol.source.OSM()
                                })
                            }
                        ]
                    }
                ]
            },
            sidebar: {
                collapsible: true,
                toolbar: {
                    layertree: {
                        active: true,
                        disabled: false
                    }
                }
            }
        }

    }

}