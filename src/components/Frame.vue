<template>
  <div class="column is-one-quarter" @click="$emit('remove-quote')">
    <app-frame-quote>
      <slot></slot>
    </app-frame-quote>
  </div>
</template>

<script>
import FrameQuote from "./FrameQuote";

export default {
  components: {
    appFrameQuote: FrameQuote
  }
};
</script>