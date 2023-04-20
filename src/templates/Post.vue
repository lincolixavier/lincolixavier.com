<template>
  <Layout>
    <h1 class="title-page title-blog">blog</h1>
    <article class="container-post">
      <div class="post-title">
        <h1 class="title">{{ $page.post.title }}</h1>
        <p class="post-date">
          {{ $page.post.date }} - {{ $page.post.timeToRead }} min de leitura
        </p>
      </div>
      <article class="post-content" v-html="$page.post.content" />
      <g-link to="/blog" class="back-button"> &larr; Todos os posts</g-link>
    </article>
    <div class="comments-area">
      <h2 class="comments-title">Comentários 💬</h2>
      <Disqus
        shortname="www-lincolixavier-com"
        :identifier="$page.post.title"
      />
    </div>
  </Layout>
</template>
<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      id
      title
      content
      date (format: "DD\\/MM\\/YYYY", locale:"pt-BR")
      timeToRead
    }
  }
</page-query>
<script>
export default {
  name: "Post",
};
</script>

<style lang="scss">
.title-blog {
  color: #ff6b00;
  &:after {
    background: #ff6b00;
  }
}
.back-button {
  text-decoration: none;
  color: #f55700;
  margin: 30px 0;
  display: block;
}
.container-post {
  max-width: 780px;
  margin: auto;
  width: 90%;
  position: relative;
}
.post-title {
  margin-bottom: 60px;
}
.container-post .title {
  color: #ff6b00;
  font-size: 44px;
  letter-spacing: 4px;
  line-height: 45px;
  margin-bottom: 14px;
}

.post-content {
  color: #545454;
  h2,
  h3,
  h5,
  h6 {
    color: currentColor;
    margin: 30px 0 10px;
  }
  h4 {
    color: currentColor;
    margin: 40px 0 20px;
  }
  em {
    font-size: 24px;
  }
  p {
    color: currentColor;
    font-size: 22px;
    margin-bottom: 15px;
    line-height: 39px;
    font-family: Lato;
  }
  a {
    background: #ff6b00;
    color: #fff;
    text-decoration: none;
  }
  img {
    max-width: 100%;
  }
  pre {
    margin-bottom: 25px;
  }
  blockquote {
    background: #f7f7f7;
    padding: 8px;
    margin: 0;
    border-left: 5px solid #ff6b00;
    p {
      margin: 0;
      font-size: 17px;
    }
  }
}
.comments-title {
  color: #ff6b00;
  font-size: 25px;
}
.comments-area {
  max-width: 990px;
  margin: 30px auto;
  width: 90%;
}

@media screen and (max-width: 900px) {
  .container-post .title {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 5px;
  }
  .post-date {
    font-size: 13px;
  }
  .post-content {
    h3 {
      font-size: 15px;
    }
    p {
      font-size: 16px;
      margin-bottom: 10px;
      line-height: 23px;
    }
  }
  .post-title {
    margin-bottom: 40px;
  }
}
</style>
