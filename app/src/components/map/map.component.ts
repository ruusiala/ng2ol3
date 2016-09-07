import {Component, Input, OnInit, AfterViewInit, AfterContentInit} from '@angular/core';

import {Ng2ol3Map, Ng2ol3Config, Ng2ol3View} from '../../models/@index';

@Component({
    selector: 'ng2ol3-map',
    template: `
      <div [attr.id]="target" class="ng2ol3-map-div"></div>
    `,
    host: {
        class: 'ng2ol3-map'
    }
})
export class Ng2ol3MapComponent implements AfterViewInit, OnInit {
    @Input() config: any;
    map: ol.Map;
    view: ol.View;
    target: string;

    public ngOnInit(): any {
        this.target = this.config.map.target;
        this.view = new ol.View({
            projection: this.config.map.view.projection || 'EPSG:900913',
            center: this.config.map.view.center || ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: this.config.map.view.zoom || 7
        });
    }

    public ngAfterViewInit(): any {
        this.map = new ol.Map({
            layers: [],
            target: this.target,
            view: this.view
        });
        for(let i=0; i<this.config.map.layers.length; i++) {
            this.map.addLayer(this.config.map.layers[i]);
        }
        this.map.updateSize();
    }


}