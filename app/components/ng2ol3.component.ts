import {Component} from '@angular/core';
import {Ng2ol3ContainerComponent} from './ng2ol3-container.component';

@Component({
  selector: 'ng2ol3',
  template: `
    <ng2ol3-container
      [title]="myTitle"
      [createHeader]="myCreateHeader">
    </ng2ol3-container>
  `,
  styleUrls: [''],
  directives: [Ng2ol3ContainerComponent]
})

export class Ng2ol3Component {
  myTitle: string;
  myCreateHeader: boolean;

  constructor() {
    this.myTitle = "This is my first ng2ol3 map!";
    this.myCreateHeader = true;
  }

}
