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
        // this.expanded = true;
        this.children = [];
        this.nestedLayers = [];
        this.nestedLayerGroups = [];
    }
    Ng2ol3LayergroupComponent.prototype.ngOnInit = function () {
        this.expanded = this.layerGroup.getExpanded();
        this.fontIcon = this.expanded ? "ms-directory-open" : "ms-directory";
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
    /**Expands or closes the layergroup */
    Ng2ol3LayergroupComponent.prototype.toggleExpanded = function () {
        this.expanded = !this.expanded;
        this.fontIcon = this.expanded ? "ms-directory-open" : "ms-directory";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _index_1.Ng2ol3LayerGroup)
    ], Ng2ol3LayergroupComponent.prototype, "layerGroup", void 0);
    Ng2ol3LayergroupComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-layergroup',
            template: "\n        <md-list dense>\n            <md-list-item>\n                <md-icon md-list-avatar fontSet=\"ms\" fontIcon=\"{{fontIcon}}\" class=\"md-24 pointer\" (click)=\"toggleExpanded()\"></md-icon>\n                <h3 md-line>{{layerGroup.name | uppercase}}</h3>\n                <p md-line class=\"plus-info\">{{nestedLayerGroups.length}} layer group(s), {{nestedLayers.length}} layer(s)</p>\n                <p md-line>\n                    <ng2ol3-layertree-details [element]=\"layerGroup\"></ng2ol3-layertree-details>\n                </p>\n            </md-list-item>\n        </md-list>\n        <div class=\"children\" *ngIf=\"expanded\">\n            <!--<ng2ol3-layergroup *ngFor=\"let lg of nestedLayerGroups\" [layerGroup]=\"lg\"></ng2ol3-layergroup>-->\n            <ng2ol3-layer *ngFor=\"let l of nestedLayers\" [layer]=\"l\"></ng2ol3-layer>\n        </div>\n    ",
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