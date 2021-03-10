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
export default {
  components: {
    Header,
    Footer,
    Body,
  },
}
</script>
