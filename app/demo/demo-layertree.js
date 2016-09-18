"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DemoLayertreeComponent = (function () {
    function DemoLayertreeComponent() {
    }
    DemoLayertreeComponent.prototype.ngOnInit = function () {
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
                                opacity: 0.5,
                                layer: new ol.layer.Tile({
                                    source: new ol.source.OSM()
                                })
                            }
                        ]
                    },
                    {
                        type: 'layergroup',
                        name: 'Hungary',
                        expanded: true,
                        visible: true,
                        children: [
                            {
                                type: 'layer',
                                name: 'main roads',
                                visible: true,
                                opacity: 1.0,
                                layer: new ol.layer.Tile({
                                    source: new ol.source.TileWMS({
                                        url: "http://188.166.116.137:8080/geoserver/gwc/service/wms",
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
                                visible: true,
                                opacity: 1.0,
                                layer: new ol.layer.Tile({
                                    source: new ol.source.TileWMS({
                                        url: "http://188.166.116.137:8080/geoserver/gwc/service/wms",
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
                                visible: true,
                                opacity: 1.0,
                                layer: new ol.layer.Tile({
                                    source: new ol.source.TileWMS({
                                        url: "http://188.166.116.137:8080/geoserver/gwc/service/wms",
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
                toolbar: {
                    layertree: {
                        active: true,
                        disabled: false
                    }
                }
            }
        };
    };
    DemoLayertreeComponent = __decorate([
        core_1.Component({
            selector: 'demo-layertree',
            template: "\n      <ng2ol3 [config]=\"config\"></ng2ol3> \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DemoLayertreeComponent);
    return DemoLayertreeComponent;
}());
exports.DemoLayertreeComponent = DemoLayertreeComponent;
//# sourceMappingURL=demo-layertree.js.map