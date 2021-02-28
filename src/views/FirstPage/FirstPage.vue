<template>
  <div class="main">
    <!-- <div class="main__form-wrap">
      <form class="main__form">
        <input type="text" placeholder="Как зовут ребенка?" />
        <input type="text" placeholder="Возраст?" />
        <input type="text" placeholder="За что похвалить?" />
        <input type="text" placeholder="Email?" />
        <input type="text" placeholder="Ваш текст" />
      </form>
    </div>
    <div class="main__ellipse">
      <div class="main__ellipse-text"></div>
    </div>
    <div class="main__tree"></div> -->
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
              <input
                class="body__form-inp_short"
                type="text"
                id="gender"
                placeholder="Пол"
              />
            </div>
            <input
              class="body__form-inp"
              type="text"
              id="praise"
              placeholder="За что похвалить?"
            />

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
        <div class="body__pidor"></div>
      </div>
    </div>
    <div class="main__footer"></div>
  </div>
</template>
