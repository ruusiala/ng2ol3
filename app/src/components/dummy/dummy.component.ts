import {Component, EventEmitter, Input, OnInit, Output, ElementRef, Renderer} from '@angular/core';

@Component({
    selector: 'ng2ol3-dummy',
    template: `
      <div>this is a dummy component called <b><i>{{dummyProperty}}</i></b></div>
    `,
    host: {
        class: 'ng2ol3-dummy'
    }
})
export class Ng2ol3DummyComponent implements OnInit {
    @Input() dummyProperty: string;

    public ngOnInit(): any {
        console.log("dummy component created");
    }

}