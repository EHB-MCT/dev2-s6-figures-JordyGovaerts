"use strict";

import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle {
    constructor(name, size) {
        super(name);
        this.size = size;

    }

    get area() {
        return this.size * this.size;
    }

    get circumference() {
        return this.size * 4;
    }

    get htmlString() {
        document.querySelector("#results").innerHTML =
            `<div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this.size} px</dd>
      
            <dt>Width</dt>
            <dd>${this.size} px</dd>
      
            <dt>Area</dt>
            <dd>${this.area} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>
      </div>`

    }
}