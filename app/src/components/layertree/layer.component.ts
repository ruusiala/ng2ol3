import { Component, Input, OnInit } from '@angular/core';

import {Ng2ol3LayerGroup, Ng2ol3Layer} from '../../models/@index';

@Component({
    selector: 'ng2ol3-layer',
    template: `
        <div>
            <span class="layer-name">{{layer.name}}</span>
            <span class="layer-properties"><i class="ms ms-processes"></i></span>
        </div>
    `,
    host: {
        class: 'ng2ol3-layer'
    }
})
export class Ng2ol3LayerComponent implements OnInit {

    @Input() layer: Ng2ol3Layer;

    public ngOnInit(): any {

    }

}