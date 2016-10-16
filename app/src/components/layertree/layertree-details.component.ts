import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Ng2ol3LayerGroup, Ng2ol3Layer } from '../../models/@index';

@Component({
    selector: 'ng2ol3-layertree-details',
    template: `
        <div [style.height]='detailsHeight'>
        	<md-grid-list cols="{{items.length}}" rowHeight="{{detailsHeight}}" gutterSize="0px">
            	<md-grid-tile *ngFor="let item of items" [colspan]="item.cols" [rowspan]="item.rows" [style.background]="item.color" [style.color]="'#484848'" class="pointer" (click)="onClick(item)">
                	<md-icon class="md-24" fontSet="{{item.fontSet}}" fontIcon="{{item.fontIcon}}"></md-icon>
  				</md-grid-tile>
            </md-grid-list>
            
        </div>
    `,
    host: {
        class: 'ng2ol3-layertree-details'
    }
})
export class Ng2ol3LayertreeDetailsComponent implements OnInit {

    @Input() element: any;
    @Input() hovered: boolean;
    @Input() detailsHeight: string;

    // @Output() expandClicked = new EventEmitter();
    // @Output() visibilityClicked = new EventEmitter();
    // @Output() opacityClicked = new EventEmitter();
    // @Output() styleClicked = new EventEmitter();
    // @Output() settingsClicked = new EventEmitter();

    items: any[];

    constructor() {
        this.items = [];
    }

    public ngOnInit(): any {
        this.items.push({ type: 'visibility', cols: 1, rows: 1, color: 'lightblue', fontSet: "fa", fontIcon: "fa-eye" });
        this.items.push({ type: 'opacity', cols: 1, rows: 1, color: 'lightgreen', fontSet: "ms", fontIcon: "ms-transparency" });
        if (this.element instanceof Ng2ol3LayerGroup) {
            this.items.push({ type: 'expand', cols: 1, rows: 1, color: '#ADBDF1', fontSet: "fa", fontIcon: "fa-expand" });
        } else if (this.element instanceof Ng2ol3Layer) {
            this.items.push({ type: 'style', cols: 1, rows: 1, color: 'lightpink', fontSet: "ms", fontIcon: "ms-style" });
        }
        this.items.push({ type: 'settings', cols: 1, rows: 1, color: '#DDBDF1', fontSet: "fa", fontIcon: "fa-cog" });
    };

    public onClick(item: any) {
        switch (item.type) {
            case "expand":
                console.log("todo expand change");
                break;
            case "visibility":
                console.log("todo visibility change");
                break;
            case "opacity":
                console.log("todo opacity change");
                break;
            case "style":
                console.log("todo style change");
                break;
            case "settings":
                console.log("todo settings change");
                break;
            default:
                break;
        }
    }

}