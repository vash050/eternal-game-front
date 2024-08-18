<script>
import * as PIXI from 'pixi.js';

export default {
  // eslint-disable-next-line vue/multi-word-component-names

  name: 'GameMap',

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
      const pageCanvas = document.getElementById('pixi');
      const map = document.getElementById('map');

      const app = new PIXI.Application();
      await app.init({
        background: '#fff',
        width: 500,
        height: 500,
        canvas: pageCanvas,
      });

      map.appendChild(app.canvas);

      await PIXI.Assets.load('/src/assets/img/map.png');
      const sprite = PIXI.Sprite.from('/src/assets/img/map.png');
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
