import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ng2ol3-toolbar',
    template: `
      <div>
          <i class="ms ms-layers pointer" *ngIf="hasLayertree"></i>
      </div>
    `,
    host: {
        class: 'ng2ol3-toolbar'
    }
})
export class Ng2ol3ToolbarComponent implements OnInit {

    @Input() options: any;

    hasLayertree: boolean;

    public ngOnInit(): any {
        this.hasLayertree = this.options.hasOwnProperty("layertree");
    }

}