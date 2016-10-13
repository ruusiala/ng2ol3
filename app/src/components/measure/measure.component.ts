import {
    Component, Input, Output, OnInit
} from '@angular/core';


import {Ng2ol3Map} from '../../models/@index';

@Component({
    selector: 'ng2ol3-measure',
    template: `
      <div>
      	<div class="dev">Measure options will come soon.</div>
      </div>
    `,
    host: {
        class: 'ng2ol3-measure'
    },
    animations: []
})

export class Ng2ol3MeasureComponent implements OnInit {

	@Input() map: Ng2ol3Map;

    constructor() {

    }

    public ngOnInit(): any {
    
    }

}