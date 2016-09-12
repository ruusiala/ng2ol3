import { Component, Input, OnInit } from '@angular/core';

import {Ng2ol3LayerGroup, Ng2ol3Layer} from '../../models/@index';

@Component({
    selector: 'ng2ol3-layergroup',
    template: `
      <div class="layergroup-header"><i class="ms ms-directory"></i>{{layerGroup.name}}</div>
      <div class="layergroup-children">
          <ng2ol3-layer 
                  *ngFor="let l of nestedLayers" 
                  [layer]="l">
          </ng2ol3-layer>
          <ng2ol3-layergroup 
                  *ngFor="let lg of nestedLayerGroups" 
                  [layerGroup]="lg">
          </ng2ol3-layergroup>
      </div>
    `,
    host: {
        class: 'ng2ol3-layergroup'
    }
})
export class Ng2ol3LayergroupComponent implements OnInit {

    @Input() layerGroup: Ng2ol3LayerGroup; 
    children: any[];
    nestedLayers: Ng2ol3Layer[];
    nestedLayerGroups: Ng2ol3LayerGroup[];

    constructor() {
        this.children = [];
        this.nestedLayers = [];
        this.nestedLayerGroups = [];
    }

    public ngOnInit(): any {
        this.children = this.layerGroup.getChildren();
        for(let i=0; i<this.children.length; i++) {
            let children = this.children[i];
            if(children instanceof Ng2ol3Layer) {
                this.nestedLayers.push(children);
            } else if(children instanceof Ng2ol3LayerGroup) {
                this.nestedLayerGroups.push(children);
            }
        }
    }

}