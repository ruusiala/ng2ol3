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
var Ng2ol3PrintComponent = (function () {
    function Ng2ol3PrintComponent() {
    }
    Ng2ol3PrintComponent.prototype.ngOnInit = function () {
        this.dims = {
            a0: [1189, 841],
            a1: [841, 594],
            a2: [594, 420],
            a3: [420, 297],
            a4: [297, 210],
            a5: [210, 148]
        };
    };
    //http://stackoverflow.com/questions/31956403/printing-in-openlayers-3-pdf
    Ng2ol3PrintComponent.prototype.print = function () {
        var map = this.map;
        var format = "a4";
        var resolution = 72;
        var dim = this.dims[format];
        var width = Math.round(dim[0] * resolution / 25.4);
        var height = Math.round(dim[1] * resolution / 25.4);
        var size = map.getSize();
        var extent = map.getView().calculateExtent(size);
        map.once('postcompose', function (event) {
            var interval;
            interval = setInterval(function () {
                clearInterval(interval);
                var canvas = event['context']['canvas'];
                var data = canvas.toDataURL('image/jpeg');
                var pdf = new jsPDF('landscape', undefined, format);
                pdf.addImage(data, 'JPEG', 0, 0, dim[0], dim[1]);
                pdf.save('map.pdf');
                map.setSize(size);
                map.getView().fit(extent, size);
                map.renderSync();
            }, 100);
        });
        map.setSize([width, height]);
        map.getView().fit(extent, (map.getSize()));
        map.renderSync();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _index_1.Ng2ol3Map)
    ], Ng2ol3PrintComponent.prototype, "map", void 0);
    Ng2ol3PrintComponent = __decorate([
        core_1.Component({
            selector: 'ng2ol3-print',
            template: "\n      <div>\n          <button md-raised-button (click)=\"print()\">print to file</button>\n          <div class=\"dev\">PDF in A4 format with 72 dpi resolution. Detailed printing options will come soon.</div>\n      </div>\n    ",
            host: {
                class: 'ng2ol3-print'
            },
            animations: []
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ol3PrintComponent);
    return Ng2ol3PrintComponent;
}());
exports.Ng2ol3PrintComponent = Ng2ol3PrintComponent;
//# sourceMappingURL=print.component.js.map