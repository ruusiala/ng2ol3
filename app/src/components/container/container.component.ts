import {Component, Input, OnInit} from '@angular/core';

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

export class Ng2ol3ContainerComponent implements OnInit {
    
    @Input() config: any;
    
    map: ol.Map;

    public ngOnInit(): any {
        
    }

    public mapCreated(map) {
        this.map = map;
    }

}
