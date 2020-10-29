<template>
  <lottie-player
    ref="lottie-player"
    autoplay
    :controls="false"
    :loop="true"
    class="lottie-player"
    mode="normal"
    src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
    style="width: 300px"
  >
  </lottie-player>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LottieWeb extends Vue {
  //
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//
</style>
