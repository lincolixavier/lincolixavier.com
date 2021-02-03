<template>
    <section class="contact-me">
      <h1 class="title-section">Vamos conversar 🤝🏽</h1>
      <div class="contact-socialmedia">
        <a target="_blank" href="https://github.com/lincolixavier" class="contact-icon is-github"></a>
        <a target="_blank" href="https://twitter.com/lincolixavier" class="contact-icon is-twitter"></a>
        <a target="_blank" href="https://www.linkedin.com/in/lincoli-xavier/" class="contact-icon is-linkedin"></a>
        <a target="_blank" href="https://www.instagram.com/lincolimonteiro/" class="contact-icon is-instagram"></a>
        <a target="_blank" href="https://www.behance.net/lincolixavier1" class="contact-icon is-behance"></a>
        <a target="_blank" href="https://www.shutterstock.com/g/lincolimonteiro" class="contact-icon is-shutterstock"></a>
      </div>
    </section>
</template>

<script>

export default {
  name: 'Footer',
  props:{
    color: '#000',
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

.contact-me{
  width: 90%;
  margin: 50px auto;
  h1{
    text-align: center;
    color: #db3535;
  }
}
.contact-socialmedia{
  padding: 20px 0;
  display: flex;
  width: 90%;
  margin: 20px auto;
  justify-content: space-around;
  .contact-icon{
    width: 60px;
    height: 57px;
    display: block;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    background: url(../assets/sprite_social.svg) no-repeat;
    position: relative;
    &:before{
      top: 0;
      padding: 3px;
      border-radius: 6px;
      color: #FFF;
      position: absolute;
      opacity: 0;
      transition: all 150ms ease-in-out;
    }
    &:hover:before{
      opacity: 1;
      top: -26px;
    }
    &.is-github{
      background-position: 0 -68px;
      &:before{
        content: 'Github';
        background: #6d6d6d;
      }
    }
    &.is-twitter{
      background-position: -68px -68px;
      &:before{
        content: 'Twitter';
        background: #68bbff;
      }
    }
    &.is-linkedin{
      background-position: -135px -68px;
      &:before{
        content: 'LinkedIn';
        background: #3d62db;
      }
    }
    &.is-instagram{
      background-position: -201px -68px;
      &:before{
        content: 'Instagram';
        background: #630a6e;
      }
    }
    &.is-behance{
      background-position: -266px -68px;
      &:before{
        content: 'Behance';
        background: #5017f0;
      }
    }
    &.is-shutterstock{
      background-position: -330px -68px;
      &:before{
        content: 'Shutterstock';
        background: #db3535;
      }
    }
    &.is-whatsapp{
      background-position: -396px -68px;
      &:before{
        content: 'WhatsApp';
        background: #20cf46;
      }
    } 
  }
}

@media screen and (max-width: 650px){
  .contact-socialmedia {
    padding: 0px 0;
    justify-content: center;
    flex-wrap: wrap;
    a{
      transform: scale(0.7);
    }
  }
}


</style>
