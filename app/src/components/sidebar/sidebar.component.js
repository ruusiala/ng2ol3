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
var Ng2ol3SidebarComponent = (function () {
    function Ng2ol3SidebarComponent() {
    }
    Ng2ol3SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarClosed = false;
        this.hasToolbar = this.options.hasOwnProperty("toolbar");
        this.hasLayertree = this.hasToolbar && this.options.toolbar.hasOwnProperty("layertree");
        this.map.updateSize();
    };
    Ng2ol3SidebarComponent.prototype.toggleSidebar = function () {
        this.sidebarClosed = !this.sidebarClosed;
        console.log("sidebar will be closed: " + this.sidebarClosed);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2ol3SidebarComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _index_1.Ng2ol3Map)
    ], Ng2ol3SidebarComponent.prototype, "map", void 0);
    Ng2ol3SidebarComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-sidebar',
            template: "\n      <div class=\"sidebar-main\">\n          <!--<div class=\"close-button pointer\" \n                  (click)=\"toggleSidebar()\" \n                  [@sidebarClosed]=\"sidebarClosed\" \n                  *ngIf=\"false\">\n              <i class=\"fa fa-angle-double-left\"></i>\n          </div>-->\n          <ng2ol3-toolbar \n                  *ngIf=\"hasToolbar\"\n                  [options]=\"options.toolbar\">\n          </ng2ol3-toolbar>\n          <div class=\"sidebar-content\">\n              <ng2ol3-layertree \n                      *ngIf=\"hasLayertree\" \n                      [map]=\"map\">\n              </ng2ol3-layertree>\n          </div>\n      </div>\n    ",
            host: {
                class: 'ng2ol3-sidebar'
            },
            animations: [
                core_1.trigger('sidebarClosed', [
                    core_1.state('true', core_1.style({
                        transform: 'scale(1.0)'
                    })),
                    core_1.state('false', core_1.style({
                        transform: 'scale(1.0)'
                    })),
                    core_1.transition('true => false', core_1.animate('100ms ease-in')),
                    core_1.transition('false => true', core_1.animate('100ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3SidebarComponent);
    return Ng2ol3SidebarComponent;
}());
exports.Ng2ol3SidebarComponent = Ng2ol3SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map