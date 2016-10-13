import {
    Component, Input, Output, OnInit
} from '@angular/core';

import { Ng2ol3Map } from '../../models/@index';

declare var jsPDF;

@Component({
    selector: 'ng2ol3-print',
    template: `
      <div>
          <button md-raised-button (click)="print()">print to file</button>
          <div class="dev">PDF in A4 format with 72 dpi resolution. Detailed printing options will come soon.</div>
      </div>
    `,
    host: {
        class: 'ng2ol3-print'
    },
    animations: []
})
export class Ng2ol3PrintComponent implements OnInit {

    @Input() map: Ng2ol3Map;
    dims: any;

    constructor() {

    }

    public ngOnInit(): any {
        this.dims = {
            a0: [1189, 841],
            a1: [841, 594],
            a2: [594, 420],
            a3: [420, 297],
            a4: [297, 210],
            a5: [210, 148]
        };
    }

    //http://stackoverflow.com/questions/31956403/printing-in-openlayers-3-pdf
    public print(): void {
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
    }

}