import { Component, Input, OnInit } from '@angular/core';

import {Ng2ol3Map, Ng2ol3LayerGroup, Ng2ol3Layer} from '../../models/@index';

@Component({
    selector: 'ng2ol3-layertree',
    template: `
      <ng2ol3-layer *ngFor="let l of layers"></ng2ol3-layer>
      <ng2ol3-layergroup 
              *ngFor="let lg of layerGroups" 
              [layerGroup]="lg">
      </ng2ol3-layergroup>
    `,
    host: {
        class: 'ng2ol3-layertree'
    }
})
export class Ng2ol3LayertreeComponent implements OnInit {

    @Input() map: Ng2ol3Map;
    layerGroups: Ng2ol3LayerGroup[];
    layers: Ng2ol3Layer[];

    public ngOnInit(): any {
        this.layerGroups = this.map.getNg2ol3LayerGroups();
        this.layers = this.map.getNg2ol3Layers();
    }
}