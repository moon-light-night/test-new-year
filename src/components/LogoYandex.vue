<template>
  <div class="yandex-body__wrap">
    <ul class="yandex-body">
      <div class="yandex__plus"><a href="#"></a></div>
      <div class="yandex__kino"><a href="#"> </a></div>
      <div class="yandex__music"><a href="#"></a></div>
    </ul>
    <img
      src="@/assets/FirstPage/yandex-icicles-big.png"
      alt="img"
      class="yandex__icicles_big"
    />
    <img
      src="@/assets/FirstPage/yandex-icicles-small.png"
      alt="img"
      class="yandex__icicles_small"
    />
  </div>
</template>

<style lang="scss">
@import '@/profile/variables.scss';

.yandex-body__wrap {
  z-index: 4;
  background-image: url('~@/assets/FirstPage/yandex-ellipse.png');
  background-size: 100% 139px;
  background-repeat: no-repeat;
  width: 377px;
  height: 177px;
  display: flex;
  flex-direction: column;
  padding-top: 53px !important;

  // @media (max-width: $breakpoint_phone) {
  //   margin: -195px auto 0 auto;
  //   width: 310px;
  // }
  // @media (max-width: $breakpoint_mini) {
  //   margin: -12px auto 0 auto;
  // }
  @media (max-width: $breakpoint_mini_second_page) {
    width: 200px;
    padding-top: 37px !important;
    height: auto;
    background-size: 100% 104px;
  }
}
.yandex-body {
  display: flex;
  justify-content: space-evenly;
}
.yandex__plus {
  background-image: url('~@/assets/FirstPage/yandex-plus.png');
  background-size: 100% 100%;
  width: 183.6px;
  height: 38.79px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: $breakpoint_mini_second_page) {
    width: 118px;
    height: 25px;
  }
}
.yandex__kino {
  background-image: url('~@/assets/FirstPage/yandex-kino.png');
  background-size: 100% 100%;
  width: 38.79px;
  height: 38.79px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: $breakpoint_mini_second_page) {
    width: 25px;
    height: 25px;
  }
}
.yandex__music {
  background-image: url('~@/assets/FirstPage/yandex-music.png');
  background-size: 100% 100%;
  width: 38.79px;
  height: 38.79px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: $breakpoint_mini_second_page) {
    width: 25px;
    height: 25px;
  }
}
.yandex__icicles_big {
  background-repeat: no-repeat;
  width: 49px;
  margin-left: 97px;
  margin-top: 35.32px;
  @media (max-width: $breakpoint_mini_second_page) {
    display: none;
  }
}
.yandex__icicles_small {
  display: none;
  background-repeat: no-repeat;
  width: 49px;
  margin-left: 17px;
  margin-top: 11px;
  @media (max-width: $breakpoint_mini_second_page) {
    display: block;
    margin-top: 32px;
    margin-top: 22px;
  }
}
</style>
