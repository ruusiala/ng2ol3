/// <reference path="../../definitely_typed/openlayers/openlayers.d.ts" />

export class Ng2ol3Map extends ol.Map {
  title: string;

  setTitle(title: string): void {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }

}
