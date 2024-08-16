import * as PIXI from 'pixi.js'
import knight1 from "@/assets/img/knight_1.png";
import map_1 from "@/assets/img/map.png"


function createMap(x, y) {
    const background = PIXI.Sprite.from(map_1);
    background.position.set(x, y);
    return background;
}

function createPlayerUnit(x, y) {
    const unit = PIXI.Sprite.from(knight1);
    unit.position.set(x, y);
    return unit;
}


export default {createMap, createPlayerUnit}
