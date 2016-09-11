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
let Ng2ol3ContainerComponent = class Ng2ol3ContainerComponent {
    ngOnInit() {
    }
    mapCreated(map) {
        this.map = map;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], Ng2ol3ContainerComponent.prototype, "config", void 0);
Ng2ol3ContainerComponent = __decorate([
    core_1.Component({
        selector: 'ng2ol3',
        template: `
        <div class="outer-container">
            <div class="inner-container">
                <ng2ol3-sidebar 
                    *ngIf="config.sidebar && map" 
                    [options]="config.sidebar" 
                    [map]="map">
                </ng2ol3-sidebar>
                <ng2ol3-map 
                    *ngIf="config.map" 
                    [options]="config.map"
                    (mapCreated)="mapCreated($event)">
                </ng2ol3-map>
            </div>
        </div>
    `,
        host: {
            class: 'ng2ol3-container'
        }
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3ContainerComponent);
exports.Ng2ol3ContainerComponent = Ng2ol3ContainerComponent;
//# sourceMappingURL=container.component.js.map