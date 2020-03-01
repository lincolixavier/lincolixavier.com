<template>
    <div :class="{open : show}" class="container-menu">
      <div @click="closeMenu" class="close-menu">

      </div>
      <nav class="nav-menu">
        <div @click="closeMenu" class="link">
          <g-link @click="closeMenu"  to="/">home</g-link>
        </div>
        <div @click="closeMenu" class="link">
          <g-link @click="closeMenu" to="/work-and-play/">work & play </g-link>
        </div>
        <div @click="closeMenu" class="link">
          <g-link @click="closeMenu"  to="/about/">sobre</g-link>
        </div>
        <div class="link">
          <a href="">blog</a>
        </div>
      </nav>
      <div class="contact">
        <a target="_blank" href="https://github.com/lincolixavier" class="contact-icon is-github"></a>
        <a target="_blank" href="https://twitter.com/lincolixavier" class="contact-icon is-twitter"></a>
        <a target="_blank" href="https://www.linkedin.com/in/lincoli-xavier/" class="contact-icon is-linkedin"></a>
        <a target="_blank" href="https://www.instagram.com/lincolimonteiro/" class="contact-icon is-instagram"></a>
        <a target="_blank" href="https://dribbble.com/lincolixavier" class="contact-icon is-dribbble"></a>
        <a target="_blank" href="https://www.shutterstock.com/g/lincolimonteiro" class="contact-icon is-shutterstock"></a>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5571982706092&text=Oi!%20Posso%20te%20ajudar%20com%20seu%20projeto%20digital!%20%3DD%20Vamos%20conversar!" class="contact-icon is-whatsapp"></a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  props:{
    show: false,
    closeMenu: Function
  }
}
</script>

<style lang="scss">
.container-menu{
  position: fixed;
  height: 95vh;
  width: 95vw;
  border-radius: 13px;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  bottom: 0;
  z-index: 999;
  background-color: rgba(239, 100, 100, 0.9);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-evenly;
  transform: scale(1.1);
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  transition: all 0.2s ease-in-out;
  &.open{
    transform: scale(1);
    opacity: 1;
    visibility: visible;
    z-index: 99;
  }
}
.close-menu{
    width: 40px;
    height: 22px;
    position: absolute;
    left: 37px;
    top: 39px;
    cursor: pointer;
    &:after, &:before{
      content: '';
      position: absolute;
      left: 0;
      background: #FFF;
      height: 4px;
      width: 100%;
      transform-origin: center;
      transform: rotate(45deg);
    }
    &:before{
      transform: rotate(-45deg);
    }
}
.nav-menu{
  height: 73%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .link{
    width: 100%;
    cursor: pointer;
  }
  a{
    font-size: 76px;
    font-weight: 300;
    color: #FFF; 
    position: relative; 
    display: block;
    width: fit-content;
    text-align: center;
    margin: auto;
    text-decoration: none;
    cursor: pointer;
    &:hover:before{
      width: 117%;
    }
    &:before{
      content: '';
      position: absolute;
      height: 15px;
      width: 0;
      background: #AF0A0A;
      opacity: 0.39;
      top: 50%;
      left: -9%;
      z-index: -1;
      transition: all 0.2s ease-in-out;

    }
  }
}
.contact{
  border-top:1px solid #FFF;
  padding: 20px 0;
  display: flex;
  width: 90%;
  max-width: 530px;
  margin: auto;
  justify-content: center;
  .contact-icon{
    width: 60px;
    height: 57px;
    display: block;
    margin: 0 5px;
    background: url(../assets/sprite_social.svg) no-repeat;
    &.is-github{
      background-position: 0 0;
    }
    &.is-twitter{
      background-position: -68px 0;
    }
    &.is-linkedin{
      background-position: -135px 0;
    }
    &.is-instagram{
      background-position: -201px 0;
    }
    &.is-dribbble{
      background-position: -266px 0;
    }
    &.is-shutterstock{
      background-position: -330px 0;
    }
    &.is-whatsapp{
      background-position: -396px 0;
    } 
  }
}
@media screen and (max-width: 950px){
  .nav-menu a {
    font-size: 47px;
  }
  .contact {
    width: 100%;
    max-width: 90%;
    justify-content: space-between;
  }
}

@media screen and (max-width: 550px){
  .close-menu {
    width: 27px;
    left: 13px;
    top: 25px;
  }
  .nav-menu {
    height: 55%;
  }
  .nav-menu a {
    font-size: 35px;
  }
  .contact  {
    flex-wrap: wrap;
    justify-content: center;
  }
  .contact .contact-icon {
    transform: scale(0.6);
  }
}

</style>
