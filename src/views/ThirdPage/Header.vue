<template>
  <header class="header">
    <h1 class="sr-only">Новогоднее чудо!</h1>

    <nav class="nav header__nav">
      <h2 class="sr-only">Навигация</h2>

      <NavList></NavList>
    </nav>
  </header>
</template>

<script>
import NavList from '@/components/NavList'
export default {
  components: {
    NavList,
  },
}
</script>
