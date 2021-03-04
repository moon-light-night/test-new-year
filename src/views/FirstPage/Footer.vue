<template>
  <div class="footer__content">
    <div class="footer__trees"></div>
    <div class="footer__rectangle">
      <div class="footer__title">
        Расскажите всем
      </div>
      <div class="footer__links">
        <Links></Links>
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
import Links from '@/components/Links'
export default {
  data: () => ({
    getLink: 'Получить ссылку',
  }),
  components: {
    Button,
    Links,
  },
}
</script>
