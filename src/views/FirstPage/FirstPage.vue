<template>
  <div class="main">
    <div class="main__header"></div>
    <div class="main__body">
      <div class="body__row1">
        <div class="body__yandex"></div>
      </div>
      <div class="body__row2">
        <div class="body__ellipse">
          <div class="body__ellipse-info">
            <div class="body__ellipse-title"><p>Новогоднее Чудо!</p></div>
            <div class="body__ellipse-text">
              <p>
                Заполните форму и получите новогоднее именное поздравление для
                вашего ребенка
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="body__row3">
        <div class="body__form-wrap">
          <form class="body__form">
            <input
              class="body__form-inp"
              type="text"
              id="name"
              placeholder="Как зовут ребенка?"
            />
            <div class="body__form-row">
              <input
                class="body__form-inp_short"
                type="text"
                id="age"
                placeholder="Возраст"
              />
              <select
                class="body__form-inp_short select-gender"
                type="text"
                id="gender"
              >
                <option disabled selected>Пол</option>
                <option>text</option>
                <option>text</option>
              </select>
            </div>
            <select
              class="body__form-inp select-praise"
              type="text"
              id="praise"
              placeholder="За что похвалить?"
            >
              <option disabled selected>За что похвалить?</option>
              <option>text</option>
              <option>text</option>
            </select>

            <input
              class="body__form-inp"
              type="text"
              id="email"
              placeholder="Email родителя"
            />
            <textarea
              class="body__form-inp"
              type="text"
              id="text"
              placeholder="Ваш текст"
            />
            <a class="body__form-btn">Поздравить!</a>
          </form>
        </div>
        <div class="body__tree"></div>
        <div class="body__person"></div>
      </div>
    </div>
    <div class="main__footer">
      <div class="footer__content">
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
          <div class="footer__link">
            Скопировать ссылку
          </div>
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
  </div>
</template>
