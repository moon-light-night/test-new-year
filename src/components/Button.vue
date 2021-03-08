<template>
  <a>{{ msg || getLink || send || active }}</a>
</template>

<script>
export default {
  props: ['msg', 'getLink', 'send', 'active'],
}
</script>

<style lang="scss">
@import '@/profile/variables.scss';
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 29px 0 40px 0;
  width: 100%;
  height: 60px;
  color: white;
  background-color: rgba(80, 93, 215, 1);
  border-radius: 12px;
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgb(62, 73, 175);
  }
}
</style>
