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
var Ng2ol3LayergroupComponent = (function () {
    function Ng2ol3LayergroupComponent() {
        this.expanded = true;
        this.children = [];
        this.nestedLayers = [];
        this.nestedLayerGroups = [];
    }
    Ng2ol3LayergroupComponent.prototype.ngOnInit = function () {
        this.expanded = this.layerGroup.getExpanded();
        this.children = this.layerGroup.getChildren();
        for (var i = 0; i < this.children.length; i++) {
            var children = this.children[i];
            if (children instanceof _index_1.Ng2ol3Layer) {
                this.nestedLayers.push(children);
            }
            else if (children instanceof _index_1.Ng2ol3LayerGroup) {
                this.nestedLayerGroups.push(children);
            }
        }
    };
    Ng2ol3LayergroupComponent.prototype.toggleExpanded = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _index_1.Ng2ol3LayerGroup)
    ], Ng2ol3LayergroupComponent.prototype, "layerGroup", void 0);
    Ng2ol3LayergroupComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-layergroup',
            template: "\n      <div class=\"layergroup-header\">\n          <i class=\"ms\" \n                [ngClass]=\"{'ms-directory': !expanded, 'ms-directory-open': expanded}\"\n                (click)=\"toggleExpanded()\"></i>\n          <span>{{layerGroup.name}}</span>\n      </div>\n      <div class=\"layergroup-children\" *ngIf=\"expanded\">\n          <ng2ol3-layer \n                  *ngFor=\"let l of nestedLayers\" \n                  [layer]=\"l\">\n          </ng2ol3-layer>\n          <ng2ol3-layergroup \n                  *ngFor=\"let lg of nestedLayerGroups\" \n                  [layerGroup]=\"lg\">\n          </ng2ol3-layergroup>\n      </div>\n    ",
            host: {
                class: 'ng2ol3-layergroup'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3LayergroupComponent);
    return Ng2ol3LayergroupComponent;
}());
exports.Ng2ol3LayergroupComponent = Ng2ol3LayergroupComponent;
//# sourceMappingURL=layergroup.component.js.map