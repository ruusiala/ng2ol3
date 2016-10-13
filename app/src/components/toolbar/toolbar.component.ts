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
        if(this.options.hasOwnProperty("layertree")) {
            this.elements.push({
                type: "layertree",
                title: this.options.layertree.title || "Layer manager",
                fontSet: this.options.layertree.fontSet || "ms",
                fontIcon: this.options.layertree.fontIcon || "ms-layers",
                active: this.options.layertree.active || false,
                disabled: this.options.layertree.disabled || false
            });
        }
        if(this.options.hasOwnProperty("measure")) {
            this.elements.push({
                type: "measure",
                title: this.options.measure.title || "Measure",
                fontSet: this.options.measure.fontSet || "ms",
                fontIcon: this.options.measure.fontIcon || "ms-measure-distance",
                active: this.options.measure.active || false,
                disabled: this.options.measure.disabled || false
            });
        }
        //set active the first active element
        for(let i=0; i<this.elements.length; i++) {
            if(this.elements[i].active === true && this.elements[i].disabled === false) {
				this.elementActivated.emit(this.elements[i]);
                break;
            }
        }
    }

    public activateElement(element): any {
        for(let i=0; i<this.elements.length; i++) {
            if(this.elements[i] === element) {
                this.elements[i].active = true;
				this.elementActivated.emit(element);
            } else {
                this.elements[i].active = false;
            }
        }
        
    }

}