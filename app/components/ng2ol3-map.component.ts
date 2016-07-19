/// <reference path="../../node_modules/@types/openlayers/index.d.ts" />

import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3Config} from '../classes/ng2ol3config';

@Component({
    selector: 'ng2ol3-map',
    template: `
      <div id="map"></div>
    `,
    host: {
        class: 'ng2ol3-map'
    }
})

export class Ng2Ol3MapComponent implements OnInit, OnDestroy {
    @Input() map: Ng2ol3Map;
    @Input() config: Ng2ol3Config;

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}
