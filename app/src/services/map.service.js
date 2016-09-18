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
var Ng2ol3MapService = (function () {
    function Ng2ol3MapService() {
        this.maps = [];
    }
    /**
     * Retrieves all the maps
     */
    Ng2ol3MapService.prototype.getMaps = function () {
        return this.maps;
    };
    /**
     * Returns a map object from the maps array
     */
    Ng2ol3MapService.prototype.getMapById = function (id) {
        var map = null;
        for (var i = 0; i < this.maps.length; i++) {
            if (this.maps[i].getTarget() === id) {
                map = this.maps[i];
                break;
            }
        }
        return map;
    };
    /**
     * Adds a new map to the maps array
     */
    Ng2ol3MapService.prototype.addMap = function (map) {
        this.maps.push(map);
    };
    Ng2ol3MapService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3MapService);
    return Ng2ol3MapService;
}());
exports.Ng2ol3MapService = Ng2ol3MapService;
//# sourceMappingURL=map.service.js.map