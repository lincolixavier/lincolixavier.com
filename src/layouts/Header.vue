<template>
    <header class="header">
      <div @click="toggleMenu" class="header-menu"></div>
      <Menu :show="showMenu" style="position:absolute;"  :closeMenu="this.toggleMenu" />
      <div class="header-logo">
        <Logo />
      </div>
      <div class="header-mailme">
        <img src="../assets/mail.svg" alt="Email Me">
      </div>
    </header>
</template>

<script>

import Menu from '@/components/Menu.vue';
export default {
  name: 'Header',
  components: {
    Menu,
  },
  data(){
    return{
      showMenu: false,
    };
  },
  methods:{
    toggleMenu(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
*,div{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.header{
  display: flex;
  padding: 40px;
  justify-content: space-between;
  .header-menu{
    width: 40px;
    height: 22px;
    display: block;
    position: relative;
    &:after, &:before{
      content: '';
      position: absolute;
      left: 0;
      background: #E13242;
      height: 4px;
      width: 100%;
    }
    &:before{
      width: 70%;
      bottom: 0;
    }
  }
  .header-mailme{
    margin-top: 10px;
  }
}


</style>
