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
        this.children = [];
        this.nestedLayers = [];
        this.nestedLayerGroups = [];
        this.detailsVisible = false;
        this.detailsHeight = '0';
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
    Ng2ol3LayergroupComponent.prototype.showDetails = function () {
        this.detailsVisible = true;
        this.detailsHeight = '25px';
    };
    Ng2ol3LayergroupComponent.prototype.hideDetails = function () {
        this.detailsVisible = false;
        this.detailsHeight = '0';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _index_1.Ng2ol3LayerGroup)
    ], Ng2ol3LayergroupComponent.prototype, "layerGroup", void 0);
    Ng2ol3LayergroupComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-layergroup',
            template: "\n\t    <div>\n\t    \t<div class=\"element-header\" (mouseover)=\"showDetails()\" (mouseout)=\"hideDetails()\" [class.expanded]=\"expanded\">\n                <div>\n                    <div class=\"element-icon\">\n                        <button md-mini-fab (click)=\"toggleExpanded()\">\n                            <md-icon md-list-avatar fontSet=\"ms\" fontIcon=\"{{fontIcon}}\" class=\"md-24 pointer\"></md-icon>\n                        </button>\n                    </div>\n                    <div class=\"element-content\">\n                        <div class=\"element-name\">{{layerGroup.name | uppercase}}</div>\n                        <div class=\"element-details\">{{nestedLayerGroups.length}} layer group(s), {{nestedLayers.length}} layer(s)</div>\n                    </div>\n                </div>\n                <ng2ol3-layertree-details type=\"layergroup\" [element]=\"layerGroup\" [class.detailsVisible]=\"detailsVisible\" [detailsHeight]=\"detailsHeight\"></ng2ol3-layertree-details>\n\t\t    </div>\n            <div class=\"children\" *ngIf=\"expanded\">\n                <ng2ol3-layer *ngFor=\"let l of nestedLayers\" [layer]=\"l\"></ng2ol3-layer>\n            </div>\n\t    </div>\n    ",
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