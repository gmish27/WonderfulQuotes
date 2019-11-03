<template>
  <div class="column is-one-quarter">
    <div class="card">
      <div class="card-content">
        <p class="subtitle">
          <slot></slot>
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <a href="#" @click="removeQuote">Delete</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quoteId"],
  methods: {
    removeQuote() {
      this.$emit("remove-quote", this.quoteId);
    }
  }
};
</script>

<style lang="less" scoped>
@import (css) url("https://fonts.googleapis.com/css?family=Lora&display=swap");

.subtitle {
  font-family: "Lora", sans-serif;
  font-style: italic;
  &::before,
  &::after {
    content: '"';
  }
}
</style>