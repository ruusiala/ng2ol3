import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng2ol3-toolbar',
    template: `
        <div class="toolbar-div">
            <md-toolbar [color]="myColor">
                <md-icon *ngFor="let element of elements" fontSet="{{element.fontSet}}" fontIcon="{{element.fontIcon}}" class="pointer md-24" (click)="activateElement(element)"></md-icon>
            </md-toolbar>
        </div>
    `,
    host: {
        class: 'ng2ol3-toolbar'
    }
})
export class Ng2ol3ToolbarComponent implements OnInit {

    @Input() options: any;
    @Output() elementActivated = new EventEmitter();

    myColor: string = "primary";
    elements: any[];

    constructor() {
        this.elements = [];
    }

    public ngOnInit(): any {
        if(this.options.hasOwnProperty("layertree")) {
            this.elements.push({
                type: "layertree",
                title: "Layer manager",
                fontSet: "ms",
                fontIcon: "ms-layers",
                active: this.options.layertree.active || false,
                disabled: this.options.layertree.disabled || false
            });
        }
        this.elementActivated.emit(this.elements[0]);
    }

    public activateElement(element): any {
        this.elementActivated.emit(element);
    }

}