import { Component, OnInit } from '@angular/core';

declare var ammap: any;
declare var worldLow: any;
declare var AmCharts:any;

@Component({
  selector: 'app-world-map',
  template:`<div id="mapdiv" style="width: 100%; height: 400px;"></div>`,
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createMap();
  }

  createMap() {
    AmCharts.makeChart( "mapdiv", {
      /**
       * this tells amCharts it's a map
       */
      "type": "map",

      /**
       * create data provider object
       * map property is usually the same as the name of the map file.
       * getAreasFromMap indicates that amMap should read all the areas available
       * in the map data and treat them as they are included in your data provider.
       * in case you don't set it to true, all the areas except listed in data
       * provider will be treated as unlisted.
       */
      "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
      },

      /**
       * create areas settings
       * autoZoom set to true means that the map will zoom-in when clicked on the area
       * selectedColor indicates color of the clicked area.
       */
      "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000"
      },

      /**
       * let's say we want a small map to be displayed, so let's create it
       */
      "smallMap": {}
    } );

  }



}
