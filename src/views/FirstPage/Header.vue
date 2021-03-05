<template>
  <div class="header__content">
    <div class="header__lights"></div>
    <NavList></NavList>
    <div class="header__gradient"></div>
  </div>
</template>

<script>
import NavList from '@/components/NavList'
export default {
  components: {
    NavList,
  },
}
</script>
