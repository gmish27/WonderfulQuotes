<template>
  <div class="card quote">
    <div class="card-content">
      <p class="subtitle">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

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

.quote {
  cursor: pointer;
  transition-property: background;
  transition-duration: 300ms;
  &:hover {
    background-color: lightcoral;
  }
}
</style>