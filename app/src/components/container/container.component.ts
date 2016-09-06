import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ng2ol3-container',
    template: `
      <ng2ol3-map [config]="config"></ng2ol3-map>
    `,
    host: {
        class: 'ng2ol3-container'
    }
})

export class Ng2ol3ContainerComponent implements OnInit {
    @Input() config: any;

    public ngOnInit(): any {
        
    }

}
