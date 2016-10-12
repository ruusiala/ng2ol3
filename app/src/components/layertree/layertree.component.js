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
var _index_1 = require('../../models/@index');
var Ng2ol3LayertreeComponent = (function () {
    function Ng2ol3LayertreeComponent() {
    }
    Ng2ol3LayertreeComponent.prototype.ngOnInit = function () {
        this.layerGroups = this.map.getNg2ol3LayerGroups();
        this.layers = this.map.getNg2ol3Layers();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _index_1.Ng2ol3Map)
    ], Ng2ol3LayertreeComponent.prototype, "map", void 0);
    Ng2ol3LayertreeComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-layertree',
            template: "\n      <ng2ol3-layer *ngFor=\"let l of layers\"></ng2ol3-layer>\n      <ng2ol3-layergroup \n              *ngFor=\"let lg of layerGroups\" \n              [layerGroup]=\"lg\">\n      </ng2ol3-layergroup>\n      \n      <!--<md-list dense>\n        <h3 md-subheader>LAYERS</h3>\n        <md-list-item>\n            <md-icon md-list-avatar>note</md-icon>\n              <h3 md-line>this is a layer</h3>\n              <p md-line class=\"demo-2\"> wms layer </p>\n        </md-list-item>\n        <h3 md-subheader>LAYER GROUPS</h3>\n           <md-list-item>\n               <md-icon md-list-avatar>folder</md-icon>\n               <h3 md-line>a layergroup</h3>\n              <p md-line class=\"demo-2\"> 23 layers, 2 layer groups </p>\n           </md-list-item>\n        </md-list>-->\n    ",
            host: {
                class: 'ng2ol3-layertree'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3LayertreeComponent);
    return Ng2ol3LayertreeComponent;
}());
exports.Ng2ol3LayertreeComponent = Ng2ol3LayertreeComponent;
//# sourceMappingURL=layertree.component.js.map