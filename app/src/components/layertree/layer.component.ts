import { Component, Input, OnInit } from '@angular/core';

import {Ng2ol3LayerGroup, Ng2ol3Layer} from '../../models/@index';

@Component({
    selector: 'ng2ol3-layer',
    template: `
        <div class="layer-header">
            <span class="layer-name" (click)="toggleVisibility()">{{layer.name}}</span>
            <span class="layer-properties" (click)="toggleDetailsExpanded()"><i class="ms ms-processes"></i></span>
        </div>
        <div class="layer-details"
            *ngIf="detailsExpanded">layer details will come here</div>
    `,
    host: {
        class: 'ng2ol3-layer'
    }
})
export class Ng2ol3LayerComponent implements OnInit {

    @Input() layer: Ng2ol3Layer;

    detailsExpanded: boolean;

    constructor() {
        this.detailsExpanded = false;
    }

    public ngOnInit(): any {

    }

    public toggleVisibility(): any {
        this.layer.setVisible(!this.layer.getVisible());
    }

    public toggleDetailsExpanded(): any {
        this.detailsExpanded = !this.detailsExpanded;
    }

}