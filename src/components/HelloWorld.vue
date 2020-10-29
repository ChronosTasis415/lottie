<template>
  <div class="hello">
    <lottie-web class="lottie-web"></lottie-web>
    <lottie-player class="lottie-player"></lottie-player>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LottieWeb from '@/components/LottieWeb.vue';
import LottiePlayer from '@/components/LottiePlayer.vue';

@Component({
  components: { LottieWeb, LottiePlayer }
})
export default class HelloWorld extends Vue {
  //
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .lottie-web {
    width: 300px;
    height: 300px;
    border: 1px solid #dddddd;
  }
  .lottie-player {
    width: 300px;
    height: 300px;
    margin-top: 30px;
    border: 1px solid #dddddd;
  }
}
</style>
