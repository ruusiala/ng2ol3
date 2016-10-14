import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

import { Ng2ol3LayerGroup, Ng2ol3Layer } from '../../models/@index';

@Component({
    selector: 'ng2ol3-layergroup',
    template: `
	    <div>
	    	<div (mouseover)="showDetails()" (mouseout)="hideDetails()">
		    	<md-list dense>
		            <md-list-item>
		                <md-icon md-list-avatar fontSet="ms" fontIcon="{{fontIcon}}" class="md-24 pointer" (click)="toggleExpanded()"></md-icon>
		                <h3 md-line>{{layerGroup.name | uppercase}}</h3>
		                <p md-line class="plus-info">{{nestedLayerGroups.length}} layer group(s), {{nestedLayers.length}} layer(s)</p>
		            </md-list-item>
                    <ng2ol3-layertree-details [element]="layerGroup" [hovered]="detailsVisible"></ng2ol3-layertree-details>
		        </md-list>
		    </div>
	        <div class="children" *ngIf="expanded">
	            <!--<ng2ol3-layergroup *ngFor="let lg of nestedLayerGroups" [layerGroup]="lg"></ng2ol3-layergroup>-->
	            <ng2ol3-layer *ngFor="let l of nestedLayers" [layer]="l"></ng2ol3-layer>
	        </div>
	    </div>
    `,
    host: {
        class: 'ng2ol3-layergroup'
    }
})
export class Ng2ol3LayergroupComponent implements OnInit {

    @Input() layerGroup: Ng2ol3LayerGroup;

    expanded: boolean;
    children: any[];
    nestedLayers: Ng2ol3Layer[];
    nestedLayerGroups: Ng2ol3LayerGroup[];
    fontIcon: string;
    detailsVisible: boolean;

    constructor() {
        this.children = [];
        this.nestedLayers = [];
        this.nestedLayerGroups = [];
        this.detailsVisible = false;
    }

    public ngOnInit(): any {
        this.expanded = this.layerGroup.getExpanded();
        this.fontIcon = this.expanded ? "ms-directory-open" : "ms-directory";
        this.children = this.layerGroup.getChildren();
        for (let i = 0; i < this.children.length; i++) {
            let children = this.children[i];
            if (children instanceof Ng2ol3Layer) {
                this.nestedLayers.push(children);
            } else if (children instanceof Ng2ol3LayerGroup) {
                this.nestedLayerGroups.push(children);
            }
        }
    }

    /**Expands or closes the layergroup */
    public toggleExpanded(): void {
        this.expanded = !this.expanded;
        this.fontIcon = this.expanded ? "ms-directory-open" : "ms-directory";
    }

    public showDetails(): void {
        this.detailsVisible = true;
    }

    public hideDetails(): void {
        this.detailsVisible = false;
    }

}