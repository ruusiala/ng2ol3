import { Component, Input, OnInit } from '@angular/core';

import {Ng2ol3LayerGroup, Ng2ol3Layer} from '../../models/@index';

@Component({
    selector: 'ng2ol3-layer',
    template: `
        <md-list dense>
            <md-list-item>
                <md-icon md-list-avatar fontSet="ms" fontIcon="ms-tiles" class="md-24"></md-icon>
                <h3 md-line>{{layer.name}}</h3>
            </md-list-item>
        </md-list>
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