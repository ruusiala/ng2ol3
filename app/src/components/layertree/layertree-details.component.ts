import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Ng2ol3LayerGroup, Ng2ol3Layer } from '../../models/@index';

@Component({
    selector: 'ng2ol3-layertree-details',
    template: `
        <div [style.height]='detailsHeight'>
        	<md-grid-list cols="{{items.length}}" rowHeight="{{detailsHeight}}" gutterSize="0px">
            	<md-grid-tile *ngFor="let item of items" [colspan]="item.cols" [rowspan]="item.rows" [style.background]="_calcRGBAColor(item.color)" [style.color]="'#484848'" class="pointer" (click)="onClick(item)">
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

    @Output() elementClicked = new EventEmitter();

    items: any[];

    bgOpacity: number;

    constructor() {
        this.items = [];
        this.bgOpacity = 0.6;
    }

    public ngOnInit(): any {
        this.items.push({ type: 'visibility', cols: 1, rows: 1, color: [173, 216, 230], fontSet: "fa", fontIcon: "fa-eye" });
        this.items.push({ type: 'opacity', cols: 1, rows: 1, color: [144, 238, 144], fontSet: "ms", fontIcon: "ms-transparency" });
        if (this.element instanceof Ng2ol3LayerGroup) {
            this.items.push({ type: 'expand', cols: 1, rows: 1, color: [173, 189, 241], fontSet: "fa", fontIcon: "fa-expand" });
        } else if (this.element instanceof Ng2ol3Layer) {
            this.items.push({ type: 'style', cols: 1, rows: 1, color: [255, 182, 193], fontSet: "ms", fontIcon: "ms-style" });
        }
        this.items.push({ type: 'settings', cols: 1, rows: 1, color: [221, 189, 241], fontSet: "fa", fontIcon: "fa-cog" });
    }

    _calcRGBAColor(rgbArray: number[]) {
        if(rgbArray.length !== 3) {
			rgbArray = [255, 255, 255];
        }
        return "rgba(" + rgbArray[0] + "," + rgbArray[1] + "," + rgbArray[2] + ", " + this.bgOpacity + ")";
    }

    public onClick(item: any) {
        var obj: any = {};
        obj.type = item.type;
        switch (obj.type) {
            case "expand":
                break;
            case "visibility":
                break;
            case "opacity":
                break;
            case "style":
                break;
            case "settings":
                break;
            default:
                break;
        }
        this.elementClicked.emit(obj);
    }

}