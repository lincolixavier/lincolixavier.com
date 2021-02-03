<template>
  <Layout>
      <div class="title-page title-about">
        sobre mim
      </div>
     <section class="about-me">
      <img src="../assets/profile.png" alt="Foto: Lincoli Xavier" class="picture">
      <div class="description">
        <p>
          Olá! Meu nome é Lincoli, eu projeto e programo belas interfaces pra Web e Mobile, 
          às vezes indo para o backend e sou apaixonado pelo que faço. 
        </p>
        <p>
          Eu sou muito animado \o/, naturalmente curioso, mochileiro e nômade digital que não para no lugar nem de 
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
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Angular</li>
          <li>Vue, Gridsome (Esse site =)</li>
          <li>React, GatsbyJs</li>
          <li>React Native + Expo</li>

        </ul>
      </div>
      <div class="skills-set">
        <h3>Backend</h3>
        <ul>
          <li>Wordpress</li>
          <li>Woocommerce</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>Firebase</li>
        </ul>
      </div>
      <div class="skills-set">
        <h3>Ferramentas/Mentalidade</h3>
        <ul>
           <li>Terminal</li>
           <li>Git</li>
           <li>Manifesto Ágil</li>
           <li>eXtreme Programming</li>
           <li>Netlify</li>
           <li>Heroku</li>
           <li>Toggl</li>
           <li>Wakatime</li>
           <li>Discord, Slack</li>
           <li>Spotify 🎶 </li>
           <li>Café ☕</li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Sobre Mim'
  }
}
</script>

<style lang="scss">

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
</style>
