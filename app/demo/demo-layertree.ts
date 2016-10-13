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
                        expanded: false,
                        visible: true,
                        children: [
                            {
                                type: 'layer',
                                name: 'OpenStreetMap layer',
                                visible: true,
                                opacity: 1,
                                layer: new ol.layer.Tile({
                                    source: new ol.source.OSM()
                                })
                            }
                        ]
                    }, {
                        type: 'layergroup',
                        name: 'Hungary',
                        expanded: false,
                        visible: true,
                        children: [
                            {
                                type: 'layer',
                                name: 'main roads',
                                visible: false,
                                opacity: 1.0,
                                layer: new ol.layer.Tile({
                                    source: new ol.source.TileWMS({
                                        url: "http://188.166.116.137:8080/geoserver/wms",
                                        params: {
                                            LAYERS: "osmWsp:v_trunk_primary",
                                            SRS: "EPSG:900913",
                                            FORMAT: "image/png",
                                            TILED: true
                                        },
                                        serverType: "geoserver"
                                    })
                                })
                            }, {
                                type: 'layer',
                                name: 'highways',
                                visible: false,
                                opacity: 1.0,
                                layer: new ol.layer.Tile({
                                    source: new ol.source.TileWMS({
                                        url: "http://188.166.116.137:8080/geoserver/wms",
                                        params: {
                                            LAYERS: "osmWsp:v_motorway",
                                            SRS: "EPSG:900913",
                                            FORMAT: "image/png",
                                            TILED: true
                                        },
                                        serverType: "geoserver"
                                    })
                                })
                            },
                            {
                                type: 'layer',
                                name: 'border',
                                visible: false,
                                opacity: 1.0,
                                layer: new ol.layer.Tile({
                                    source: new ol.source.TileWMS({
                                        url: "http://188.166.116.137:8080/geoserver/wms",
                                        params: {
                                            LAYERS: "osmWsp:v_country",
                                            SRS: "EPSG:900913",
                                            FORMAT: "image/png",
                                            TILED: true
                                        },
                                        serverType: "geoserver"
                                    })
                                })
                            }
                        ]
                    }
                ]
            },
            sidebar: {
                collapsible: true,
                opened: true,
                toolbar: {
                    layertree: {}
                }
            }
        }

    }

}