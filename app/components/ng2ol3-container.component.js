/// <reference path="../../definitely_typed/openlayers/openlayers.d.ts" />
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
const ng2ol3map_1 = require('../classes/ng2ol3map');
const ng2ol3view_1 = require('../classes/ng2ol3view');
let Ng2ol3ContainerComponent = class Ng2ol3ContainerComponent {
    constructor() {
        this.layers = [];
        this.view = new ng2ol3view_1.Ng2ol3View({
            center: ol.proj.fromLonLat([19, 47], "EPSG:900913"),
            zoom: 7
        });
        this.layers.push(new ol.layer.Tile({
            source: new ol.source.OSM()
        }));
        this.map = new ng2ol3map_1.Ng2ol3Map({
            target: 'map',
            renderer: "webgl",
            view: this.view,
            layers: this.layers,
        });
        this.map.setTitle("This is a demo app created by ng2ol3.");
        console.log(this.map.getTitle());
    }
};
Ng2ol3ContainerComponent = __decorate([
    core_1.Component({
        selector: 'ng2ol3-container',
        template: ``,
        styleUrls: ['']
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3ContainerComponent);
exports.Ng2ol3ContainerComponent = Ng2ol3ContainerComponent;
//# sourceMappingURL=ng2ol3-container.component.js.map