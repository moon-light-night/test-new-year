<template>
  <div class="body__content-wrap">
    <div class="body__content">
      <div class="body__text">
        <div class="body__title">
          Новогоднее Чудо!
        </div>
        <div class="body__description">
          Заполните форму и получите новогоднее именное поздравление для вашего
          ребенка
        </div>
      </div>
      <div class="body__section-form">
        <form class="form">
          <input
            class="form__input"
            type="text"
            id="name"
            placeholder="Как зовут ребенка?"
          />
          <div class="form__row">
            <input
              class="form__input_short"
              type="text"
              id="age"
              placeholder="Возраст"
            />
            <select
              class="form__input_short select-gender"
              type="text"
              id="gender"
            >
              <option disabled selected>Пол</option>
              <option>text</option>
              <option>text</option>
            </select>
          </div>
          <select
            class="form__input select-praise"
            type="text"
            id="praise"
            placeholder="За что похвалить?"
          >
            <option disabled selected>За что похвалить?</option>
            <option>text</option>
            <option>text</option>
          </select>

          <input
            class="form__input"
            type="text"
            id="email"
            placeholder="Email родителя"
          />
          <textarea
            class="form__input"
            type="text"
            id="text"
            placeholder="Ваш текст"
          />
          <Button class="btn btn-form" :msg="msg"></Button>
        </form>
        <img
          src="@/assets/FirstPage/form-icicles.png"
          alt="img"
          class="form__icicles"
        />
      </div>
    </div>
    <div class="body__tree"></div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  data: () => ({
    msg: 'Поздравить!',
  }),
  components: {
    Button,
  },
}
</script>
