<script>
import * as PIXI from "pixi.js";
import map_1 from "@/assets/img/map.png";

export default {
  // eslint-disable-next-line vue/multi-word-component-names

  name: "GameMap",

  data() {
    return {
      //playerPosX: 450,
      //playerPosY: 250,
      mapX: 0,
      mapY: 0,
    };
  },

  methods: {
    async drawPixi() {
      let canvas = document.getElementById("pixi");
      let map = document.getElementById("map");

      const app = new PIXI.Application();
      await app.init({
        background: "#fff",
        width: 500,
        height: 500,
        view: canvas,
      });

      map.appendChild(app.canvas);

      const container = new PIXI.Container({
        x: app.screen.width / 2,
        y: app.screen.height / 2,
      });

      //const mapMain = createMap(this.mapX, this.mapY);
      // app.stage.addChild(container);
      await PIXI.Assets.load('/src/assets/img/map.png');
      let sprite = PIXI.Sprite.from('/src/assets/img/map.png');
      app.stage.addChild(sprite);
    },
  },
  mounted() {
    this.$nextTick().then(this.drawPixi);
  },
};
</script>

<template>
  <div class="MapApp" id="map">
    <canvas id="pixi"></canvas>
  </div>
</template>
