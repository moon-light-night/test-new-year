<template>
  <div class="second-header__content">
    <div class="second-header__arrow-down"></div>
    <div class="second-header__row">
      <Yandex class="second-header__logo-yandex"></Yandex>
    </div>
    <div class="second-header__video-wrap">
      <div class="second-header__video-content"></div>
      <div class="second-header__video-share">
        <div class="second-header__share margin_zero">
          Поделитесь с друзьями
        </div>
        <Links class="header__link margin_zero"></Links>
        <Button class="footer__link margin_zero" :send="send"></Button>
      </div>
    </div>
    <div class="second-header__icicles"></div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Links from '@/components/Links'
import Yandex from '@/components/Yandex'
export default {
  data: () => ({
    send: 'Отравить на почту',
  }),
  components: {
    Button,
    Links,
    Yandex,
  },
}
</script>
