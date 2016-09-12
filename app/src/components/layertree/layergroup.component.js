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
const _index_1 = require('../../models/@index');
let Ng2ol3LayergroupComponent = class Ng2ol3LayergroupComponent {
    constructor() {
        this.expanded = true;
        this.children = [];
        this.nestedLayers = [];
        this.nestedLayerGroups = [];
    }
    ngOnInit() {
        this.expanded = this.layerGroup.getExpanded();
        this.children = this.layerGroup.getChildren();
        for (let i = 0; i < this.children.length; i++) {
            let children = this.children[i];
            if (children instanceof _index_1.Ng2ol3Layer) {
                this.nestedLayers.push(children);
            }
            else if (children instanceof _index_1.Ng2ol3LayerGroup) {
                this.nestedLayerGroups.push(children);
            }
        }
    }
    toggleExpanded() {
        this.expanded = !this.expanded;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', _index_1.Ng2ol3LayerGroup)
], Ng2ol3LayergroupComponent.prototype, "layerGroup", void 0);
Ng2ol3LayergroupComponent = __decorate([
    core_1.Component({
        selector: 'ng2ol3-layergroup',
        template: `
      <div class="layergroup-header">
          <i class="ms" 
                [ngClass]="{'ms-directory': !expanded, 'ms-directory-open': expanded}"
                (click)="toggleExpanded()"></i>
          <span>{{layerGroup.name}}</span>
      </div>
      <div class="layergroup-children" *ngIf="expanded">
          <ng2ol3-layer 
                  *ngFor="let l of nestedLayers" 
                  [layer]="l">
          </ng2ol3-layer>
          <ng2ol3-layergroup 
                  *ngFor="let lg of nestedLayerGroups" 
                  [layerGroup]="lg">
          </ng2ol3-layergroup>
      </div>
    `,
        host: {
            class: 'ng2ol3-layergroup'
        }
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3LayergroupComponent);
exports.Ng2ol3LayergroupComponent = Ng2ol3LayergroupComponent;
//# sourceMappingURL=layergroup.component.js.map