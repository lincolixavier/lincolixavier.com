<template>
  <Layout>
    <div class="title-page title-about">{{ $t("titlePageAbout") }}</div>

    <section class="about-me">
      <img
        class="profile-img"
        src="../assets/profile.png"
        alt="Foto: Lincoli Xavier"
      />
      <div class="personal-description">
        <p>
          {{ $t("aboutMe") }}
        </p>
      </div>
    </section>

    <section class="skills">
      <h1 class="title-section">{{ $t("likeTodo") }}</h1>
      <div class="skills-set">
        <h3 class="topic">UI/UX</h3>
        <ul class="skills-list">
          <li class="skill-item">Gestalt</li>
          <li class="skill-item">Nielsen's Heuristics</li>
          <li class="skill-item">Photoshop</li>
          <li class="skill-item">Illustrator</li>
          <li class="skill-item">Adobe XD</li>
        </ul>
      </div>
      <div class="skills-set">
        <h3 class="topic">Frontend</h3>
        <ul class="skills-list">
          <li class="skill-item">HTML</li>
          <li class="skill-item">CSS</li>
          <li class="skill-item">JS/TS</li>
          <li class="skill-item">Angular</li>
          <li class="skill-item">Vue, Vuex Pinia, Gridsome</li>
          <li class="skill-item">React, GatsbyJs</li>
          <li class="skill-item">React Native + Expo</li>
        </ul>
      </div>
      <div class="skills-set">
        <h3 class="topic">Backend</h3>
        <ul class="skills-list">
          <li class="skill-item">PHP</li>
          <li class="skill-item">NodeJS</li>
          <li class="skill-item">Wordpress</li>
          <li class="skill-item">Woocommerce</li>

          <li class="skill-item">Strapi</li>
          <li class="skill-item">MongoDB</li>
          <li class="skill-item">Firebase</li>
        </ul>
      </div>
      <div class="skills-set">
        <h3 class="topic">{{ $t("daily") }}</h3>
        <ul class="skills-list">
          <li class="skill-item">Terminal</li>
          <li class="skill-item">Git</li>
          <li class="skill-item">Jest</li>
          <li class="skill-item">Cypress</li>
          <li class="skill-item">eXtreme Programming</li>
          <li class="skill-item">Netlify</li>
          <li class="skill-item">Wakatime</li>
          <li class="skill-item">Discord, Slack</li>
          <li class="skill-item">Spotify 🎶 & Café ☕</li>
        </ul>
      </div>
      <div class="skills-set">
        <h3 class="topic">{{ $t("inTo") }}</h3>
        <ul class="skills-list">
          <li class="skill-item">Rust</li>
          <li class="skill-item">Elixir</li>
          <li class="skill-item">Agda</li>
          <li class="skill-item">Proof theory</li>
          <li class="skill-item">Design Thinking</li>
          <li class="skill-item">UX Research</li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Sobre Mim",
  },
  data() {
    return {
      BIRTH_YEAR: 1993,
      FIRST_YEAR_OF_WORK: 2012,
      age: this.currentYear - this.BIRTH_YEAR,
      xp: this.currentYear - this.FIRST_YEAR_OF_WORK,
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
.title-about {
  color: #7488ec;
  &:after {
    background: #7488ec;
  }
}

.about-me {
  display: flex;
  align-items: flex-start;
  .profile-img {
    width: 90%;
    max-width: 445px;
  }
  .personal-description {
    margin-left: 35px;
    p {
      font-size: 23px;
      line-height: 33px;
      color: #5d5a5a;
      font-weight: 100;
      margin-bottom: 15px;
    }
  }
}

.title-section {
  font-weight: bold;
  color: #7488ec;
  font-size: 34px;
  margin: 30px 0;
  width: 100%;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.skills-set {
  width: 20%;
  .topic {
    font-weight: bold;
    color: #5d5a5a;
    font-size: 24px;
    position: relative;
    margin-bottom: 17px;
    &:after {
      content: "";
      width: 40px;
      height: 1px;
      position: absolute;
      bottom: -2px;
      left: 3px;
      background: #7488ec;
    }
  }
  .skills-list {
    margin-left: 24px;
  }
  .skill-item {
    font-weight: 100;
    color: #5d5a5a;
    font-size: 20px;
    font-style: italic;
    list-style: none;
    position: relative;
    &:before {
      content: "-";
      position: absolute;
      top: -3px;
      left: -17px;
    }
  }
}

@media screen and (max-width: 950px) {
  .about-me {
    flex-wrap: wrap;
    justify-content: center;
    img {
      width: 166px;
      margin-bottom: 17px;
    }
    .personal-description {
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
  .skills-set {
    width: 100%;
    text-align: center;
    margin: 3px 20px 21px 18px;
    .topic {
      font-size: 17px;
      &:after {
        width: 29px;
        margin: auto;
        right: 0;
        left: 0;
      }
    }
    ul {
      margin: 0;
    }
    .skill-item {
      font-size: 18px;
      margin: auto;
      width: fit-content;
    }
  }
}
</style>
