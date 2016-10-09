import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ng2ol3',
    template: `
        <md-sidenav-layout>
            <md-sidenav #start *ngIf="config.sidebar && map" align="start" (open)="updateMap()" (close)="isOpened=false" opened="{{isOpened}}" mode="push">
                <ng2ol3-sidebar 
                    [options]="config.sidebar" 
                    [map]="map">
                </ng2ol3-sidebar>
                <!--<button md-button (click)="start.close()">Close</button>-->
            </md-sidenav>
            <ng2ol3-map 
                *ngIf="config.map" 
                [options]="config"
                (mapCreated)="mapCreated($event)"
                (sidebarToggled)="sidebarToggled($event)">
            </ng2ol3-map>
        </md-sidenav-layout>
    `,
    host: {
        class: 'ng2ol3-container'
    }
})

export class Ng2ol3ContainerComponent implements OnInit {

    @Input() config: any;
    map: ol.Map;
    isOpened: boolean;

    public ngOnInit(): any {
        try {
            this.isOpened = this.config.sidebar.opened;
        } catch(error) {
            this.isOpened = true;
        }
    }

    public mapCreated(map): void {
        this.map = map;
        this.map.updateSize();
    }

    public sidebarToggled(): void {
        this.isOpened = !this.isOpened;
    }

    public updateMap(): void {
        this.map.updateSize();
    }

    
}
