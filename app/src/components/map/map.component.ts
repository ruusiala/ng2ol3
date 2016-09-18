import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';

import { Ng2ol3MapService } from '../../services/@index';
import { Ng2ol3Map, Ng2ol3Config, Ng2ol3View } from '../../models/@index';

@Component({
    selector: 'ng2ol3-map',
    template: `
      <div [attr.id]="target" class="ng2ol3-map-div"></div>
    `,
    host: {
        class: 'ng2ol3-map'
    },
    providers: [Ng2ol3MapService]
})
export class Ng2ol3MapComponent implements AfterViewInit, OnInit {

    @Input() options: any;

    @Output() mapCreated = new EventEmitter();

    map: Ng2ol3Map;
    view: ol.View;
    target: string;

    constructor(private mapService: Ng2ol3MapService) {

    }

    public ngOnInit(): any {
        this.target = this.options.target;
        this.view = new ol.View({
            projection: this.options.view.projection || 'EPSG:900913',
            center: this.options.view.center || ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: this.options.view.zoom || 7
        });
    }

    public ngAfterViewInit(): any {
        this.map = new Ng2ol3Map({
            layers: [],
            target: this.target,
            view: this.view
        });

        //register the map in the injectable mapService
        this.mapService.addMap(this.map);

        this.map.addLayersAndLayerGroups(this.options.layers);
        this.mapCreated.emit(this.map);
        this.map.updateSize();
    }

}