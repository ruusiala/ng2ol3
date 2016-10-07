import {Component, Input} from '@angular/core';

@Component({
    selector: 'ng2ol3',
    template: `
        <div class="outer-container">
            <div class="inner-container">
                <ng2ol3-sidebar 
                    *ngIf="config.sidebar && map" 
                    [options]="config.sidebar" 
                    [map]="map">
                </ng2ol3-sidebar>
                <ng2ol3-map 
                    *ngIf="config.map" 
                    [options]="config.map"
                    (mapCreated)="mapCreated($event)">
                </ng2ol3-map>
            </div>
        </div>
    `,
    host: {
        class: 'ng2ol3-container'
    }
})

export class Ng2ol3ContainerComponent {

    @Input() config: any;

    map: ol.Map;

    public mapCreated(map): void {
        this.map = map;
    }

}
