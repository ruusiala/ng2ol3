import { Component, Input, OnInit } from '@angular/core';

import {Ng2ol3LayerGroup, Ng2ol3Layer} from '../../models/@index';

@Component({
    selector: 'ng2ol3-layer',
    template: `
        <div>
	    	<div class="element-header" (mouseover)="showDetails()" (mouseout)="hideDetails()">
                <div>
                    <div class="element-icon">
                        <button md-mini-fab (click)="toggleVisibility()">
                            <md-icon md-list-avatar fontSet="ms" fontIcon="{{fontIcon}}" class="md-24 pointer"></md-icon>
                        </button>
                    </div>
                    <div class="element-content">
                        <div class="element-name">{{layer.name}}</div>
                    </div>
                </div>
                <ng2ol3-layertree-details type="layer" [element]="layer" [class.detailsVisible]="detailsVisible" [detailsHeight]="detailsHeight"></ng2ol3-layertree-details>
		    </div>
	    </div>
    `,
    host: {
        class: 'ng2ol3-layer'
    }
})
export class Ng2ol3LayerComponent implements OnInit {

    @Input() layer: Ng2ol3Layer;

    fontIcon: string;
    detailsVisible: boolean;
    detailsHeight: string;

    constructor() {
        this.detailsVisible = false;
        this.detailsHeight = '0';
    }

    public ngOnInit(): any {
        this.fontIcon = this.layer.getVisible() ? "ms-tiles" : "ms-tiles-o";
    }

    public toggleVisibility(): any {
        this.layer.setVisible(!this.layer.getVisible());
        this.fontIcon = this.layer.getVisible() ? "ms-tiles" : "ms-tiles-o";
    }

    public showDetails(): void {
        this.detailsVisible = true;
        this.detailsHeight = "25px";
    }

    public hideDetails(): void {
        this.detailsVisible = false;
        this.detailsHeight = "0";
    }



}