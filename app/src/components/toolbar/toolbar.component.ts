import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng2ol3-toolbar',
    template: `
        <div class="toolbar-div">
			<md-list>
            	<md-list-item *ngFor="let element of elements">
                    <button md-mini-fab [class.active]="element.active" [disabled]="element.disabled" (click)="activateElement(element)">
                    	<md-icon fontSet="{{element.fontSet}}" fontIcon="{{element.fontIcon}}"></md-icon>
                    </button>
                </md-list-item>
            </md-list>
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
        if (this.options.hasOwnProperty("layertree")) {
            let obj: any = this.options.layertree;
            this.elements.push({
                type: "layertree",
                title: obj.hasOwnProperty("title") ? obj.title : "Layer manager",
                fontSet: obj.hasOwnProperty("fontSet") ? obj.fontSet : "ms",
                fontIcon: obj.hasOwnProperty("fontIcon") ? obj.fontIcon : "ms-layers",
                active: obj.hasOwnProperty("active") ? obj.active : true,
                disabled: obj.hasOwnProperty("disabled") ? obj.disabled : false
            });
        }
        if (this.options.hasOwnProperty("measure")) {
            let obj: any = this.options.measure;
            this.elements.push({
                type: "measure",
                title: obj.hasOwnProperty("title") ? obj.title : "Measure",
                fontSet: obj.hasOwnProperty("fontSet") ? obj.fontSet : "ms",
                fontIcon: obj.hasOwnProperty("fontIcon") ? obj.fontIcon : "ms-measure-distance",
                active: obj.hasOwnProperty("active") ? obj.active : true,
                disabled: obj.hasOwnProperty("disabled") ? obj.disabled : false
            });
        }
        if (this.options.hasOwnProperty("print")) {
            let obj: any = this.options.print;
            this.elements.push({
                type: "print",
                title: obj.hasOwnProperty("title") ? obj.title : "Print",
                fontSet: obj.hasOwnProperty("fontSet") ? obj.fontSet : "ms",
                fontIcon: obj.hasOwnProperty("fontIcon") ? obj.fontIcon : "ms-printer",
                active: obj.hasOwnProperty("active") ? obj.active : true,
                disabled: obj.hasOwnProperty("disabled") ? obj.disabled : false
            });
        }
        //set active the first active element
        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i].active === true && this.elements[i].disabled === false) {
                this.activateElement(this.elements[i]);
                break;
            }
        }
    }

    public activateElement(element): any {
        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i] === element) {
                this.elements[i].active = true;
                this.elementActivated.emit(element);
            } else {
                this.elements[i].active = false;
            }
        }

    }

}