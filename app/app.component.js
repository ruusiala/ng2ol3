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
const ng2ol3config_1 = require('./src/classes/ng2ol3config');
const ng2ol3view_1 = require('./src/classes/ng2ol3view');
let AppComponent = class AppComponent {
    // sidebar: Ng2ol3Sidebar;
    constructor() {
        this.renderer = "webgl";
        this.view = new ng2ol3view_1.Ng2ol3View({
            center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: 7
        });
        this.layers = [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ];
        this.myConfig = new ng2ol3config_1.Ng2ol3Config();
        this.myConfig.setAppMapRenderer(this.renderer);
        this.myConfig.setAppView(this.view);
        this.myConfig.setAppLayers(this.layers);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'ng2ol3',
        template: `
      <ng2ol3-container
        [config]="myConfig">
      </ng2ol3-container>
    `
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map