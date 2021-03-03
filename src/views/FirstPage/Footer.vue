<template>
  <div class="footer__content">
    <div class="footer__trees"></div>
    <div class="footer__rectangle">
      <div class="footer__title">
        Расскажите всем
      </div>
      <div class="footer__links">
        <div class="footer__list">
          <div class="footer__list-item" id="tg"></div>
          <div class="footer__list-item" id="wp"></div>
          <div class="footer__list-item" id="vb"></div>
          <div class="footer__list-item" id="fb"></div>
          <div class="footer__list-item" id="vk"></div>
        </div>
        <Button class="footer__link" :getLink="getLink"></Button>
      </div>
      <div class="footer__conditions">
        Условия подписки Плюс Мульти см. здесь
        https://yandex.ru/legal/yandex_plus_conditions/. 60 дней подписки Плюс
        Мульти - бесплатно, далее автопродление - 299 руб./мес. Требуется
        указание данных банковской карты. Предложение до 31.03.2021 г. только
        для новых пользователей, ранее не оформлявших подписку Плюс Мульти.
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  data: () => ({
    getLink: 'Получить ссылку',
  }),
  components: {
    Button,
  },
}
</script>
