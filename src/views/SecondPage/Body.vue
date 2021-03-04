<template>
  <div class="second-body__content">
    <div class="second-body__title">
      А еще мы дарим
    </div>
    <div class="second-body__cards">
      <div class="second-body__card second-body__card-kinopoisk">
        <div
          class="second-body__card-icon second-body__card-icon-kinopoisk"
        ></div>
        <div class="second-body__card-text">Новогодняя детская подборка</div>
      </div>

      <div class="second-body__card second-body__card-music">
        <div class="second-body__card-icon second-body__card-icon-music"></div>
        <div class="second-body__card-text">Детские плейлисты на новый год</div>
      </div>
      <div class="second-body__card second-body__card-plus">
        <div class="second-body__promo">
          <div class="second-body__promo-text">Для новых пользователей</div>
          <div class="second-body__promo-code">NEWYEAR21</div>
        </div>
        <div class="second-body__card-text second-body__card-text_center">
          Промокод на Яндекс Плюс
        </div>
        <Button class="second-page__link" :active="active"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  data: () => ({
    active: 'Активировать',
  }),
  components: {
    Button,
  },
}
</script>
