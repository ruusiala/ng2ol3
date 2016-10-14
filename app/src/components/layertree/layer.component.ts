import { Component, Input, OnInit } from '@angular/core';

import {Ng2ol3LayerGroup, Ng2ol3Layer} from '../../models/@index';

@Component({
    selector: 'ng2ol3-layer',
    template: `
        <md-list dense>
            <md-list-item>
                <md-icon md-list-avatar fontSet="ms" fontIcon="{{fontIcon}}" class="md-24 pointer" (click)="toggleVisibility()"></md-icon>
                <h3 md-line>{{layer.name}}</h3>
                <p md-line>
                    <ng2ol3-layertree-details [element]="layer"></ng2ol3-layertree-details>
                </p>
            </md-list-item>
        </md-list>
    `,
    host: {
        class: 'ng2ol3-layer'
    }
})
export class Ng2ol3LayerComponent implements OnInit {

    @Input() layer: Ng2ol3Layer;

    fontIcon: string;

    constructor() {
        
    }

    public ngOnInit(): any {
        this.fontIcon = this.layer.getVisible() ? "ms-tiles" : "ms-tiles-o";
    }

    public toggleVisibility(): any {
        this.layer.setVisible(!this.layer.getVisible());
        this.fontIcon = this.layer.getVisible() ? "ms-tiles" : "ms-tiles-o";
    }

    public toggleDetailsExpanded(): any {
        // this.detailsExpanded = !this.detailsExpanded;
    }

}