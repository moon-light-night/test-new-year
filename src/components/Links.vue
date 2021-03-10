<template>
  <div class="footer__list">
    <div class="footer__list-item">
      <svg class="icon">
        <use class="circle" xlink:href="#telega-circle"></use>
        <use class="path" xlink:href="#telega-fill"></use>
      </svg>
    </div>
    <div class="footer__list-item">
      <svg class="icon">
        <use class="circle" xlink:href="#whatsapp-circle"></use>
        <use class="path" xlink:href="#whatsapp-fill"></use>
      </svg>
    </div>
    <div class="footer__list-item">
      <svg class="icon">
        <use class="circle" xlink:href="#viber-circle"></use>
        <use class="path" xlink:href="#viber-fill"></use>
      </svg>
    </div>
    <div class="footer__list-item">
      <svg class="icon">
        <use class="circle" xlink:href="#fb-circle"></use>
        <use class="path" xlink:href="#fb-fill"></use>
      </svg>
    </div>
    <div class="footer__list-item">
      <svg class="icon">
        <use class="circle" xlink:href="#vk-circle"></use>
        <use class="path" xlink:href="#vk-fill"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.icon {
  width: 42px;
  height: 42px;
  &:hover {
    .path {
      transition-duration: 0.5s;
      fill: white;
    }
    .circle {
      fill: #505dd7;
    }
  }
}
.path {
  fill: #3d3d3d;
}
.circle {
  fill: none;
}
</style>
