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
let Ng2ol3LayerComponent = class Ng2ol3LayerComponent {
    constructor() {
        this.detailsExpanded = false;
    }
    ngOnInit() {
    }
    toggleVisibility() {
        this.layer.setVisible(!this.layer.getVisible());
    }
    toggleDetailsExpanded() {
        this.detailsExpanded = !this.detailsExpanded;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', _index_1.Ng2ol3Layer)
], Ng2ol3LayerComponent.prototype, "layer", void 0);
Ng2ol3LayerComponent = __decorate([
    core_1.Component({
        selector: 'ng2ol3-layer',
        template: `
        <div class="layer-header">
            <span class="layer-name" (click)="toggleVisibility()">{{layer.name}}</span>
            <span class="layer-properties" (click)="toggleDetailsExpanded()"><i class="ms ms-processes"></i></span>
        </div>
        <div class="layer-details"
            *ngIf="detailsExpanded">layer details will come here</div>
    `,
        host: {
            class: 'ng2ol3-layer'
        }
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3LayerComponent);
exports.Ng2ol3LayerComponent = Ng2ol3LayerComponent;
//# sourceMappingURL=layer.component.js.map