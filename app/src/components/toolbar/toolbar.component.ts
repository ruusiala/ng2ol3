import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ng2ol3-toolbar',
    template: `
        <div class="toolbar-div">
            <md-toolbar [color]="myColor">
                <md-icon *ngIf="hasLayertree" fontSet="ms" fontIcon="ms-layers" class="pointer md-24"></md-icon>
            </md-toolbar>
        </div>
    `,
    host: {
        class: 'ng2ol3-toolbar'
    }
})
export class Ng2ol3ToolbarComponent implements OnInit {

    @Input() options: any;

    myColor: string = "primary";
    
    hasLayertree: boolean;

    public ngOnInit(): any {
        this.hasLayertree = this.options.hasOwnProperty("layertree");
    }

}