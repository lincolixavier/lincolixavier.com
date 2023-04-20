<template>
  <article class="post">
    <label class="time-to-read">{{
      `${post.date} - ${post.timeToRead} min de leitura`
    }}</label>
    <g-link :to="post.path" class="read">
      <h1 class="title" v-html="post.title" />
    </g-link>
    <p class="description" v-html="post.description" />
  </article>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>

<style lang="scss">
.post {
  max-width: 990px;
  margin: auto;
  width: 90%;
  position: relative;
  padding: 20px;
  .read {
    text-decoration: none;
  }
  .title {
    color: #ff6b00;
    font-size: 39px;
    letter-spacing: 4px;
    line-height: 41px;
    margin-bottom: 14px;
  }
  .date,
  .time-to-read {
    color: #8f8f8f;
    font-size: 14px;
    font-style: italic;
  }
  .description {
    color: #333;
    font-size: 20px;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    opacity: 0;
    transition: all 170ms ease-in-out;
    transform: rotate(6deg) translate(40px, -15px);
  }
  &:hover {
    cursor: pointer;
    &:after {
      opacity: 1;
      transform: rotate(0deg) translate(0px, 0px);
      border-color: #ff6b00;
    }
  }
}

@media screen and (max-width: 900px) {
  .post .title {
    font-size: 27px;
    line-height: 30px;
    margin: 3px 0 10px;
  }
  .post .description {
    color: #333;
    font-size: 15px;
  }
}
</style>
