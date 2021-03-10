<template>
  <div class="second-wrap">
    <div class="second-header__arrow-back" @click="$router.push('/')">
      <p class="second-header__arrow-back-text">На главную</p>
    </div>

    <div class="second-main">
      <div class="second-main__header">
        <Header></Header>
      </div>
      <div class="second-main__body">
        <Body></Body>
      </div>
    </div>
    <div class="main__footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Body from './Body'
import Footer from '../../components/Footer'
export default {
  components: {
    Header,
    Body,
    Footer,
  },
}
</script>
