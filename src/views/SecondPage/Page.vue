<template>
  <div class="second-main">
    <div class="second-main__header">
      <Header></Header>
    </div>
    <div class="second-main__body">
      <Body></Body>
    </div>
    <div class="second-main__footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
export default {
  components: {
    Header,
    Body,
    Footer,
  },
}
</script>
