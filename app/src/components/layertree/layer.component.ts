import { Component, Input, OnInit } from '@angular/core';

import {Ng2ol3LayerGroup, Ng2ol3Layer} from '../../models/@index';

@Component({
    selector: 'ng2ol3-layer',
    template: `
        <div>
	    	<div class="element-header" (mouseover)="showDetails()" (mouseout)="hideDetails()">
                <div>
                    <button class="element-icon" md-mini-fab (click)="toggleExpanded()">
                        <md-icon md-list-avatar fontSet="ms" fontIcon="{{fontIcon}}" class="md-24 pointer"></md-icon>
                    </button>
                    <div class="element-name">{{layer.name}}</div>
                </div>
                <ng2ol3-layertree-details type="layer" [element]="layer" [class.detailsVisible]="detailsVisible"></ng2ol3-layertree-details>
		    </div>
	    </div>
	    <!--<div (mouseover)="showDetails()" (mouseout)="hideDetails()">
	        <md-list dense>
	            <md-list-item>
	                <md-icon md-list-avatar fontSet="ms" fontIcon="{{fontIcon}}" class="md-24 pointer" (click)="toggleVisibility()"></md-icon>
	                <h3 md-line>{{layer.name}}</h3>
	            </md-list-item>
	            <ng2ol3-layertree-details [element]="layer" [hovered]="detailsVisible"></ng2ol3-layertree-details>
	        </md-list>
	    </div>-->
    `,
    host: {
        class: 'ng2ol3-layer'
    }
})
export class Ng2ol3LayerComponent implements OnInit {

    @Input() layer: Ng2ol3Layer;

    fontIcon: string;
    detailsVisible: boolean;

    constructor() {
        this.detailsVisible = false;
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
    }

    public hideDetails(): void {
        this.detailsVisible = false;
    }



}