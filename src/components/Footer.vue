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

<style lang="scss">
.footer {
  &__content {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 auto;
  }
  &__trees {
    background-image: url('~@/assets/FirstPage/footer-trees.png');
    background-repeat: no-repeat;
    background-position: center 8px;
    width: 100%;
    height: 114.09px;
  }
  &__rectangle {
    background-image: url('~@/assets/FirstPage/footer-rectangle.png');
    width: 100%;
    height: 281px;
  }
  &__title {
    font-size: 32px;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 25px;
    }
  }
  &__links {
    display: flex;
    justify-content: center;
    margin: 25.38px 0 33px 0;
    @media (max-width: 580px) {
      flex-direction: column;
      margin: 0;
    }
  }
  &__list {
    display: flex;
    margin-right: 40px;
    flex-wrap: wrap;
    @media (max-width: 650px) {
      margin-right: 0;
    }
    @media (max-width: 580px) {
      margin-right: 0;
      margin-bottom: 20px;
      justify-content: center;
    }
  }
  &__list-item {
    margin: 0 6px 0 6px;
    width: 42px;
    height: 42px;
    min-width: 42px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media (max-width: 580px) {
      margin: 0 2px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  &__link {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    min-width: 220px;
    margin-right: -90px;
    transition-duration: 0.3s;
    &:hover {
      cursor: pointer;
      background-color: #505dd7;
      color: white;
      border: none;
    }
    @media (max-width: 660px) {
      margin-right: -50px;
    }
    @media (max-width: 580px) {
      min-width: 205px;
      margin: 0 auto;
    }
    @media (max-width: 820px) {
      min-width: 220px !important;
    }
  }
  &__conditions {
    font-size: 13px;
    text-align: center;
    width: 761px;
    margin: 0 auto;
    @media (max-width: 800px) {
      font-size: 11px;
      line-height: 16px;
      width: 85%;
    }
  }
}
</style>
