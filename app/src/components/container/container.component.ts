import {Component, Input} from '@angular/core';

@Component({
    selector: 'ng2ol3',
    template: `
        <md-sidenav-layout>
            <md-sidenav #start *ngIf="config.sidebar && map" align="start" (open)="updateMap()" (close)="updateMap()" opened="true" mode="side">
                <ng2ol3-sidebar 
                    [options]="config.sidebar" 
                    [map]="map">
                </ng2ol3-sidebar>
                <button md-button #mybutton (click)="start.close()">Close</button>
            </md-sidenav>
            <ng2ol3-map 
                *ngIf="config.map" 
                [options]="config.map"
                (mapCreated)="mapCreated($event)">
            </ng2ol3-map>
        </md-sidenav-layout>
    `,
    host: {
        class: 'ng2ol3-container'
    }
})

export class Ng2ol3ContainerComponent {

    @Input() config: any;

    map: ol.Map;

    isOpened: boolean = true;

    public mapCreated(map): void {
        this.map = map;
        this.map.updateSize();
    }

    updateMap(): void {
        this.map.updateSize();
    }

    
}
