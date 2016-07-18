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
const ng2ol3_container_component_1 = require('./ng2ol3-container.component');
const ng2ol3config_1 = require('../classes/ng2ol3config');
const ng2ol3view_1 = require('../classes/ng2ol3view');
const ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
let Ng2ol3Component = class Ng2ol3Component {
    constructor() {
        this.myConfig = new ng2ol3config_1.Ng2ol3Config();
        // CONFIGURE THE APP, THIS IS ALL YOU HAVE TO DO
        this.title = "This is my first <b>ng2ol3</b> map!";
        this.renderer = 'webgl';
        this.domId = 'map';
        this.view = new ng2ol3view_1.Ng2ol3View({
            center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: 7
        });
        this.layers = [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ];
        // LET NG2OL3 DO THE JOB FROM HERE...
        this.myConfig.setAppTitle(this.title);
        this.myConfig.setAppMapRenderer(this.renderer);
        this.myConfig.setAppMapDomId(this.domId);
        this.myConfig.setAppView(this.view);
        this.myConfig.setAppLayers(this.layers);
    }
};
Ng2ol3Component = __decorate([
    core_1.Component({
        selector: 'ng2ol3',
        template: `
      <alert type="info">
        <span><img src="../etc/img/logo/apple-touch-icon-57x57.png"></span>
        <span [innerHTML]="title"></span>
      </alert>
      <ng2ol3-container
        [config]="myConfig">
      </ng2ol3-container>
    `,
        styleUrls: [''],
        directives: [ng2_bootstrap_1.AlertComponent, ng2ol3_container_component_1.Ng2ol3ContainerComponent]
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3Component);
exports.Ng2ol3Component = Ng2ol3Component;
//# sourceMappingURL=ng2ol3.component.js.map