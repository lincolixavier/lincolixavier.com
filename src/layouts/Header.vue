<template>
  <header class="header" :class="{ 'is-home': isHome }">
    <g-link class="header-logo" to="/">
      <Logo />
    </g-link>
    <div class="mobile-menu">
      <div @click="showMenu = true" class="header-menu"></div>
      <Menu :show="showMenu" @closeMenu="toggle" style="position: fixed" />
    </div>
    <nav class="main-menu">
      <g-link class="link" to="/">home</g-link>
      <g-link class="link" :to="`/work-and-play/`">work & play </g-link>
      <g-link class="link" :to="`/about/`">about</g-link>
      <g-link class="link" to="/blog/">blog</g-link>
    </nav>
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Header",
  props: {
    isHome: false,
  },
  components: {
    Menu,
  },
  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.header {
  display: flex;
  padding: 40px;
  justify-content: center;
  flex-wrap: wrap;
  .languages {
    position: absolute;
    top: 7px;
    right: 20px;
    .toggle-language {
      border: none;
      background: transparent;
      font-size: 25px;
      margin: 0 3px;
      cursor: pointer;
      width: 36px;

      &.active {
        border: 1px solid #f27575;
        border-radius: 50%;
      }
    }
  }
  .main-menu {
    width: 100%;
    text-align: center;
    margin: 33px 0 26px;
    a {
      text-decoration: none;
      font-size: 18px;
      margin: 30px;
      color: #6e6e6e;
    }
  }
  .header-menu {
    width: 40px;
    height: 22px;
    display: block;
    position: relative;
    cursor: pointer;
    &:after,
    &:before {
      content: "";
      position: absolute;
      left: 0;
      background: #e13242;
      height: 4px;
      width: 100%;
    }
    &:before {
      width: 70%;
      bottom: 0;
    }
  }
  .header-mailme {
    margin-top: 10px;
  }
}
.is-home {
  .header-logo {
    width: 100%;
    text-align: center;
    svg {
      width: 100%;
    }
  }
}
.mobile-menu {
  display: none;
}

@media screen and (max-width: 1220px) {
  .header {
    padding: 32px 20px 0px 22px;
    height: 101px;
    .header-mailme {
      margin-top: 0;
    }
  }
  .header-logo svg {
    width: 229px;
    top: -41px;
    position: relative;
  }
}

@media screen and (max-width: 1024px) {
  .header .mobile-menu {
    display: block;
    position: absolute;
    left: 28px;
  }
  .header .main-menu {
    display: none;
  }
  .is-home .header-logo svg {
    width: 252px;
  }
}

@media screen and (max-width: 450px) {
  .header {
    padding: 32px 15px 0px 15px;
    .header-menu {
      width: 32px;
      height: 18px;
      &:after,
      &:before {
        height: 3px;
      }
    }
  }
  .is-home .header-logo {
    text-align: center;
  }
  .header-logo svg,
  .is-home .header-logo svg {
    width: 190px;
  }
}
</style>
