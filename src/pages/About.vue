<template>
  <div class="container-about">
    
    <Header :isHome="false" ></Header>
    <div class="container-page">
      <div class="title-page title-about">
      sobre mim
    </div>
    <section class="about-me">
      <img src="../assets/profile.png" alt="Foto: Lincoli Xavier" class="picture">
      <div class="description">
        <p>
          Olá! Meu nome é Lincoli, eu projeto e programo belas interfaces pra Web e/ou Mobile, 
          às vezes indo para o backend e sou apaixonado pelo que faço.
        </p>
        <p>
          Eu sou muito animado \o/, naturalmente curioso, mochileiro que não para no lugar nem de 
          buscar o melhor como pessoa e profissional.
        </p>
        <p>
          Quando não estou desenhando algo ou programando eu passo o 
          tempo fotografando, tocando violão, lendo livros, mangás,
          quadrinhos... ou planejando a próxima viagem =) 
        </p>
      </div>
      
    </section>

    <section class="skills">
      <h1 class="title-section">O que eu gosto de fazer: </h1>
      <div class="skills-set">
        <h3>UI/UX</h3>
        <ul>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Adobe XD</li>

        </ul>
      </div>
      <div class="skills-set">
        <h3>Front-end</h3>
        <ul>
          <li>Html</li>
          <li>CSS3 (Sass, Bulma, Styled Components) </li>
          <li>Design Responsivo</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Angular</li>
          <li>Vue</li>
          <li>React</li>
          <li>React Native</li>
          <li>Gridsome (Esse site =)</li>
          <li>GatsbyJs</li>

        </ul>
      </div>
      <div class="skills-set">
        <h3>Backend</h3>
        <ul>
          <li>Wordpress</li>
          <li>Woocommerce</li>
          <li>MySQL</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div class="skills-set">
        <h3>Ferramentas/Mentalidade</h3>
        <ul>
           <li>Terminal</li>
           <li>Git</li>
           <li>PostMan</li>
           <li>Netlify</li>
           <li>Heroku</li>
           <li>Toggl</li>
           <li>Manifesto Ágil</li>
           <li>Extreme Programming</li>
           <li>Spotify 🎶 </li>
           <li>Café ☕</li>
        </ul>
      </div>
    </section>

    <section class="contact-me">
      <h1 class="title-section">Entre em contato: </h1>
      <div class="contact-socialmedia">
        <a target="_blank" href="https://github.com/lincolixavier" class="contact-icon is-github"></a>
        <a target="_blank" href="https://twitter.com/lincolixavier" class="contact-icon is-twitter"></a>
        <a target="_blank" href="https://www.linkedin.com/in/lincoli-xavier/" class="contact-icon is-linkedin"></a>
        <a target="_blank" href="https://www.instagram.com/lincolimonteiro/" class="contact-icon is-instagram"></a>
        <a target="_blank" href="https://www.behance.net/lincolixavier1" class="contact-icon is-behance"></a>
        <a target="_blank" href="https://www.shutterstock.com/g/lincolimonteiro" class="contact-icon is-shutterstock"></a>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5571982706092&text=Oi!%20Posso%20te%20ajudar%20com%20seu%20projeto%20digital!%20%3DD%20Vamos%20conversar!" class="contact-icon is-whatsapp"></a>
      </div>
    </section>
    </div>
    

  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Sobre Mim'
  }
}
</script>

<style lang="scss">
.container-page{
  width: 93%;
  margin: auto;
}
.title-about{
  color: #7488ec;
  &:after{
    background: #7488ec;
  }
}

.about-me{
  display: flex;
  align-items: flex-start;
  .description{
    margin-left: 35px;
    p{
      font-size: 23px;
      line-height: 33px;
      color: #5D5A5A;
      font-weight: 100;
      margin-bottom: 15px;
    }
  }
}

.title-section{
  font-weight: bold;
  color: #7488ec;
  font-size: 34px;
  margin: 30px 0;
  width: 100%;
}
.skills{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.skills-set{
  h3{
    font-weight: bold;
    color: #5D5A5A;
    font-size: 24px;
    position: relative;
    margin-bottom: 17px;
    &:after{
      content: '';
      width: 40px;
      height: 1px;
      position: absolute;
      bottom: -2px;
      left: 3px;
      background: #7488ec;
    }
  }
  ul{
    margin-left: 24px;
  }
  li{
    font-weight: 100;
    color: #5D5A5A;
    font-size: 24px;
    font-style: italic;
    list-style: none;
    position: relative;
    &:before{
      content: '-';
      position: absolute;
      top: -3px;
      left: -17px;
    }
  }
}

.contact-me{
  margin-bottom: 70px;
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

@media screen and (max-width: 950px){
  .about-me {
    flex-wrap: wrap;
    justify-content: center;
    img{
      width: 166px;
      margin-bottom: 17px;
    }
    .description{
      margin-left: 0;
      width: 100%;
      p {
        font-size: 17px;
        line-height: 24px;
      }
   }
  }
  .title-section {
    font-size: 23px;
    margin: 20px 0;
    text-align: center;
  }
  .skills-set{
    width: 100%;
    text-align: center;
    margin: 3px 20px 21px 18px;
    h3{
      font-size: 17px;
      &:after{
        width: 29px;
        margin: auto;
        right: 0;
        left: 0;
      }
    }
    ul{
      margin:0;
    }
    li{
      font-size: 18px;
      margin: auto;
      width: fit-content;
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
