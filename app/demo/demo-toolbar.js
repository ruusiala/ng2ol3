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
var DemoToolbarComponent = (function () {
    function DemoToolbarComponent() {
    }
    DemoToolbarComponent.prototype.ngOnInit = function () {
        this.config = {
            map: {
                renderer: 'canvas',
                target: 'demo-toolbar-map',
                view: {
                    projection: "EPSG:900913",
                    center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
                    zoom: 7
                },
                layers: [
                    {
                        type: 'layergroup',
                        name: 'Base layers',
                        children: [
                            {
                                type: 'layer',
                                name: 'OpenStreetMap layer',
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
                opened: true,
                toolbar: {}
            }
        };
    };
    DemoToolbarComponent = __decorate([
        core_1.Component({
            selector: 'demo-toolbar',
            template: "\n      <ng2ol3 [config]=\"config\"></ng2ol3> \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DemoToolbarComponent);
    return DemoToolbarComponent;
}());
exports.DemoToolbarComponent = DemoToolbarComponent;
//# sourceMappingURL=demo-toolbar.js.map