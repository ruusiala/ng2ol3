import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

import { Ng2ol3LayerGroup, Ng2ol3Layer } from '../../models/@index';

@Component({
    selector: 'ng2ol3-layergroup',
    template: `
        <md-list dense>
            <md-list-item (click)="toggleExpanded()" class="pointer">
                <md-icon md-list-avatar fontSet="ms" fontIcon="{{fontIcon}}" class="md-24"></md-icon>
                <h3 md-line>{{layerGroup.name | uppercase}}</h3>
                <p md-line class="plus-info">{{nestedLayerGroups.length}} layer group(s), {{nestedLayers.length}} layer(s)</p>
                <p md-line>
                    <ng2ol3-layertree-details></ng2ol3-layertree-details>
                </p>
            </md-list-item>
        </md-list>
        <div class="children" *ngIf="expanded">
            <!--<ng2ol3-layergroup *ngFor="let lg of nestedLayerGroups" [layerGroup]="lg"></ng2ol3-layergroup>-->
            <ng2ol3-layer *ngFor="let l of nestedLayers" [layer]="l"></ng2ol3-layer>
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

    constructor() {
        // this.expanded = true;
        this.children = [];
        this.nestedLayers = [];
        this.nestedLayerGroups = [];
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

}