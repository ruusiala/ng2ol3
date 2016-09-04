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
const ng2ol3map_1 = require('../classes/ng2ol3map');
const ng2ol3config_1 = require('../classes/ng2ol3config');
let Ng2ol3MapComponent = class Ng2ol3MapComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let mapElement = this.el.nativeElement.children[0];
        // Adjust the map size a header
        if (this.config.getAppHeader()) {
            let headerHeight = document.getElementsByClassName("header-content")[0].clientHeight;
            this.renderer.setElementStyle(mapElement, 'padding-top', `${headerHeight}px`);
        }
        // Adjust the map size a sidebar
        if (this.config.getAppSidebar()) {
            let sidebarWidth = document.getElementsByClassName("sidebar-content")[0].clientWidth;
            this.renderer.setElementStyle(mapElement, 'padding-left', `${sidebarWidth}px`);
        }
        this.map.updateSize();
    }
    ngOnDestroy() {
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', ng2ol3map_1.Ng2ol3Map)
], Ng2ol3MapComponent.prototype, "map", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', ng2ol3config_1.Ng2ol3Config)
], Ng2ol3MapComponent.prototype, "config", void 0);
Ng2ol3MapComponent = __decorate([
    core_1.Component({
        selector: 'ng2ol3-map',
        template: `
      <div id="map" styled-map></div>
    `,
        host: {
            class: 'ng2ol3-map'
        }
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
], Ng2ol3MapComponent);
exports.Ng2ol3MapComponent = Ng2ol3MapComponent;
//# sourceMappingURL=ng2ol3-map.component.js.map