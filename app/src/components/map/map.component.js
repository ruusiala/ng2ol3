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
let Ng2ol3MapComponent = class Ng2ol3MapComponent {
    ngOnInit() {
        this.target = this.options.target;
        this.view = new ol.View({
            projection: this.options.view.projection || 'EPSG:900913',
            center: this.options.view.center || ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: this.options.view.zoom || 7
        });
    }
    ngAfterViewInit() {
        this.map = new ol.Map({
            layers: [],
            target: this.target,
            view: this.view
        });
        for (let i = 0; i < this.options.layers.length; i++) {
            this.map.addLayer(this.options.layers[i]);
        }
        this.map.updateSize();
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], Ng2ol3MapComponent.prototype, "options", void 0);
Ng2ol3MapComponent = __decorate([
    core_1.Component({
        selector: 'ng2ol3-map',
        template: `
      <div [attr.id]="target" class="ng2ol3-map-div"></div>
    `,
        host: {
            class: 'ng2ol3-map'
        }
    }), 
    __metadata('design:paramtypes', [])
], Ng2ol3MapComponent);
exports.Ng2ol3MapComponent = Ng2ol3MapComponent;
//# sourceMappingURL=map.component.js.map