import {
    Component, Input, OnInit
} from '@angular/core';

import {Ng2ol3Map} from '../../models/@index';

@Component({
    selector: 'ng2ol3-layertree',
    template: `
      <div>this is the layertree</div>
    `,
    host: {
        class: 'ng2ol3-layertree'
    }
})
export class Ng2ol3LayertreeComponent implements OnInit {

    public ngOnInit(): any {
        
    }

}