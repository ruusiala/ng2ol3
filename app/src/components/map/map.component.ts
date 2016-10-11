import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';

import { Ng2ol3MapService, Ng2ol3SidebarService } from '../../services/@index';
import { Ng2ol3Map, Ng2ol3Config, Ng2ol3View } from '../../models/@index';

@Component({
    selector: 'ng2ol3-map',
    template: `
        <div>
            <div class="custom-buttons">
                <div class="zoom-in" (click)="zoomIn()">
                    <button md-mini-fab>
                        <md-icon class="md-12">add</md-icon>
                    </button>
                </div>
                <div class="zoom-out" (click)="zoomOut()">
                    <button md-mini-fab>
                        <md-icon class="md-24">remove</md-icon>
                    </button>
                </div>
                <div class="sidebar" *ngIf="hasSidebar" (click)="toggleSidebar()">
                    <button md-mini-fab>
                        <md-icon class="md-24">reorder</md-icon>
                    </button>
                </div>
            </div>
            <div [attr.id]="target" class="ng2ol3-map-div"></div>
        </div>
    `,
    host: {
        class: 'ng2ol3-map'
    },
    providers: [Ng2ol3MapService]
})
export class Ng2ol3MapComponent implements AfterViewInit, OnInit {

    @Input() options: any;

    @Output() mapCreated = new EventEmitter();
    @Output() sidebarToggled = new EventEmitter();

    map: Ng2ol3Map;
    view: ol.View;
    target: string;
    hasSidebar: boolean;
    zoomDuration: number = 500;

    constructor(private mapService: Ng2ol3MapService) {

    }

    public ngOnInit(): any {
        this.hasSidebar = this.options.hasOwnProperty("sidebar");
        this.target = this.options.map.target;
        this.view = new ol.View({
            projection: this.options.map.view.projection || 'EPSG:900913',
            center: this.options.map.view.center || ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: this.options.map.view.zoom || 7
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

        this.map.addLayersAndLayerGroups(this.options.map.layers);
        this.mapCreated.emit(this.map);
        this.map.updateSize();
    }

    public zoomIn(): void {
        let zoom = ol.animation.zoom({
            duration: this.zoomDuration,
            resolution: this.map.getView().getResolution()
        });
        this.map.beforeRender(zoom);
        this.map.getView().setResolution(this.map.getView().getResolution() * 0.5);
    }

    public zoomOut(): void {
        let zoom = ol.animation.zoom({
            duration: this.zoomDuration,
            resolution: this.map.getView().getResolution()
        });
        this.map.beforeRender(zoom);
        this.map.getView().setResolution(this.map.getView().getResolution() * 2);
    }

    public toggleSidebar(): void {
        this.sidebarToggled.emit();
    }

}