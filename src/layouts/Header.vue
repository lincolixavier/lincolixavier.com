<template>
    <header class="header" :class="{ 'is-home' : isHome !== true }">
      <div @click="toggleMenu" class="header-menu"></div>
      <Menu :show="showMenu"  style="position:fixed;"  :closeMenu="this.toggleMenu" />
      <g-link class="header-logo"  to="/">
       <Logo />
      </g-link>
      <a href="mailto:hello@lincolixavier.com" class="header-mailme">
        <img src="../assets/mail.svg" alt="Email Me">
      </a>
    </header>
</template>

<script>

import Menu from '@/components/Menu.vue';
import closeMixin from '@/mixins/close.js';

export default {
  mixins: [closeMixin],
  name: 'Header',
  components: {
    Menu,
  },
  props:{
    isHome: false,
  },
  data(){
    return{
      showMenu: false,
    };
  },
  methods:{
    toggleMenu(){
      this.showMenu = !this.showMenu;
    },
    close() {
      this.showMenu = false;
    }
  },
  updated() {
    this.closeEsc();
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">


.header{
  display: flex;
  padding: 40px;
  justify-content: space-between;
  .header-menu{
    width: 40px;
    height: 22px;
    display: block;
    position: relative;
     cursor: pointer;
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
.is-home{
  .header-logo{
    width: 263px;
    svg{
      width: 100%;
    }
  }
}

@media screen and (max-width: 1220px){
  .header{
    padding: 32px 20px 0px 22px;
    height: 101px;
    .header-mailme {
      margin-top: 0;
    }
  }
  .header-logo svg{
    width: 229px;
    top: -41px;
    position: relative;
  }
}

@media screen and (max-width: 450px){
  .header {
    padding: 32px 15px 0px 15px;
    .header-menu {
      width: 32px;
      height: 18px;
      &:after, &:before{
        height: 3px;
      }
    }
  }
  .is-home .header-logo{
    text-align: center;
  }
  .header-logo svg,.is-home .header-logo svg{
    width: 190px;
  }



}


</style>
