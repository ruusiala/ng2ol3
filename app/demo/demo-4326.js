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
const core_1 = require('@angular/core');
let Demo4326Component = class Demo4326Component {
    ngOnInit() {
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
        };
    }
};
Demo4326Component = __decorate([
    core_1.Component({
        selector: 'demo-4326',
        template: `
      <ng2ol3 [config]="config"></ng2ol3> 
    `
    }), 
    __metadata('design:paramtypes', [])
], Demo4326Component);
exports.Demo4326Component = Demo4326Component;
//# sourceMappingURL=demo-4326.js.map