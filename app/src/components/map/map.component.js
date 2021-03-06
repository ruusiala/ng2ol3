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
var _index_1 = require('../../services/@index');
var _index_2 = require('../../models/@index');
var Ng2ol3MapComponent = (function () {
    function Ng2ol3MapComponent(mapService) {
        this.mapService = mapService;
        this.mapCreated = new core_1.EventEmitter();
        this.sidebarToggled = new core_1.EventEmitter();
        this.zoomDuration = 500;
    }
    Ng2ol3MapComponent.prototype.ngOnInit = function () {
        this.hasSidebar = this.options.hasOwnProperty("sidebar");
        this.target = this.options.map.target;
        this.view = new ol.View({
            projection: this.options.map.view.projection || 'EPSG:900913',
            center: this.options.map.view.center || ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: this.options.map.view.zoom || 7
        });
    };
    Ng2ol3MapComponent.prototype.ngAfterViewInit = function () {
        this.map = new _index_2.Ng2ol3Map({
            layers: [],
            target: this.target,
            view: this.view
        });
        //register the map in the injectable mapService
        this.mapService.addMap(this.map);
        this.map.addLayersAndLayerGroups(this.options.map.layers);
        this.mapCreated.emit(this.map);
        this.map.updateSize();
    };
    Ng2ol3MapComponent.prototype.zoomIn = function () {
        var zoom = ol.animation.zoom({
            duration: this.zoomDuration,
            resolution: this.map.getView().getResolution()
        });
        this.map.beforeRender(zoom);
        this.map.getView().setResolution(this.map.getView().getResolution() * 0.5);
    };
    Ng2ol3MapComponent.prototype.zoomOut = function () {
        var zoom = ol.animation.zoom({
            duration: this.zoomDuration,
            resolution: this.map.getView().getResolution()
        });
        this.map.beforeRender(zoom);
        this.map.getView().setResolution(this.map.getView().getResolution() * 2);
    };
    Ng2ol3MapComponent.prototype.toggleSidebar = function () {
        this.sidebarToggled.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2ol3MapComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ol3MapComponent.prototype, "mapCreated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2ol3MapComponent.prototype, "sidebarToggled", void 0);
    Ng2ol3MapComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-map',
            template: "\n        <div>\n            <div class=\"custom-buttons\">\n                <div class=\"zoom-in\" (click)=\"zoomIn()\">\n                    <button md-mini-fab>\n                        <md-icon class=\"md-12\">add</md-icon>\n                    </button>\n                </div>\n                <div class=\"zoom-out\" (click)=\"zoomOut()\">\n                    <button md-mini-fab>\n                        <md-icon class=\"md-24\">remove</md-icon>\n                    </button>\n                </div>\n                <div class=\"sidebar\" *ngIf=\"hasSidebar\" (click)=\"toggleSidebar()\">\n                    <button md-mini-fab>\n                        <md-icon class=\"md-24\">reorder</md-icon>\n                    </button>\n                </div>\n            </div>\n            <div [attr.id]=\"target\" class=\"ng2ol3-map-div\"></div>\n        </div>\n    ",
            host: {
                class: 'ng2ol3-map'
            },
            providers: [_index_1.Ng2ol3MapService]
        }), 
        __metadata('design:paramtypes', [_index_1.Ng2ol3MapService])
    ], Ng2ol3MapComponent);
    return Ng2ol3MapComponent;
}());
exports.Ng2ol3MapComponent = Ng2ol3MapComponent;
//# sourceMappingURL=map.component.js.map