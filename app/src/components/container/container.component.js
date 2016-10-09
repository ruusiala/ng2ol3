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
var Ng2ol3ContainerComponent = (function () {
    function Ng2ol3ContainerComponent() {
    }
    Ng2ol3ContainerComponent.prototype.ngOnInit = function () {
        this.isOpened = true;
    };
    Ng2ol3ContainerComponent.prototype.mapCreated = function (map) {
        this.map = map;
        this.map.updateSize();
    };
    Ng2ol3ContainerComponent.prototype.sidebarToggled = function () {
        this.isOpened = !this.isOpened;
        console.log(this.isOpened);
    };
    Ng2ol3ContainerComponent.prototype.updateMap = function () {
        this.map.updateSize();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2ol3ContainerComponent.prototype, "config", void 0);
    Ng2ol3ContainerComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3',
            template: "\n        <md-sidenav-layout>\n            <md-sidenav #start *ngIf=\"config.sidebar && map\" align=\"start\" (open)=\"updateMap()\" (close)=\"updateMap()\" opened=\"isOpened\" mode=\"side\">\n                <ng2ol3-sidebar \n                    [options]=\"config.sidebar\" \n                    [map]=\"map\">\n                </ng2ol3-sidebar>\n                <button md-button #mybutton (click)=\"start.close()\">Close</button>\n            </md-sidenav>\n            <ng2ol3-map \n                *ngIf=\"config.map\" \n                [options]=\"config\"\n                (mapCreated)=\"mapCreated($event)\"\n                (sidebarToggled)=\"sidebarToggled($event)\">\n            </ng2ol3-map>\n        </md-sidenav-layout>\n    ",
            host: {
                class: 'ng2ol3-container'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3ContainerComponent);
    return Ng2ol3ContainerComponent;
}());
exports.Ng2ol3ContainerComponent = Ng2ol3ContainerComponent;
//# sourceMappingURL=container.component.js.map