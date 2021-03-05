<template>
  <div class="main">
    <div class="main__header">
      <Header></Header>
    </div>
    <div class="main__body">
      <Body></Body>
    </div>
    <div class="main__footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import YandexSecond from '@/components/YandexSecond'
export default {
  components: {
    Header,
    Footer,
    Body,
    YandexSecond,
  },
}
</script>

<style lang="scss">
/* Sr-only */

.sr-only {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  white-space: nowrap;

  border: 0;

  clip-path: inset(50%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
