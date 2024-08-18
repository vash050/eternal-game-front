<script>
import {useEventListener} from "@vueuse/core";
import * as PIXI from 'pixi.js';


export default {
  // eslint-disable-next-line vue/multi-word-component-names

  name: 'GameMap',

  data() {
    return {
      playerPosX: 100,
      playerPosY: 100,
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
      await PIXI.Assets.load('/src/assets/img/knight_2.png');
      const sprite = PIXI.Sprite.from('/src/assets/img/map.png');
      app.stage.addChild(sprite);

      let player = PIXI.Sprite.from('/src/assets/img/knight_2.png');
      player.scale = .3;
      player.x = this.playerPosX;
      player.y = this.playerPosY;
      app.stage.addChild(player);

      

      //let elapsed = 0.0;
      //app.ticker.add((ticker) => {
       // elapsed += ticker.deltaTime;
       // player.x = 100.0 + Math.cos(elapsed/150.0) * 100.0;
      //});

      app.stage.addEventListener('click', (e) => {
        console.log(e.global);
        // mapMain.position.x = e.global.x;
        // mapMain.position.y = e.global.y;
      });




      useEventListener('keydown', (e) => {
        switch (e.key) {
          case 'w':
            if (sprite.position.y >= player.position.y) {
              break;
            }
            sprite.position.y += 5;
            break;
          case 's':
            if (sprite.position.y <= (player.position.y - sprite.height + player.height)){
              break;
            }
            sprite.position.y -= 5;
            break;
          case 'a':
            if (sprite.position.x >= player.position.x) {
              break;
            }
            if (sprite.position.x >= player.position.x) {
              break;
            }
            sprite.position.x += 5;
            break;
          case 'd':
            if (sprite.position.x <= (player.position.x - sprite.width + player.width)) {
              break;
            }
            sprite.position.x -= 5;
            break;
        }
      });


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
