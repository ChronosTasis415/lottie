<template>
  <div class="lottie-web" ref="lottie-web"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import lottie from 'lottie-web';
import lottieJson from '@/assets/lottie.json';

@Component
export default class LottieWeb extends Vue {
  lottier: typeof lottie | null = null

  mounted(): void {
    console.log(typeof lottie);
    if (!this.lottier) {
      this.lottier = lottie.loadAnimation({
        container: this.$refs['lottie-web'] as HTMLElement, // the dom element that will contain the animation
        renderer: 'svg',
        name: 'test',
        loop: true,
        autoplay: false,
        animationData: lottieJson
      });
    }
    this.lottier!.play();
    this.lottier!.setDirection(-1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//
</style>
