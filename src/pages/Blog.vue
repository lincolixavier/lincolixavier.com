<template>
  <Layout>
    <section class="posts">
      <h1 class="title-page title-blog">blog</h1>
      <Post
        class="post-container"
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </section>
  </Layout>
</template>

<page-query>
  query {
    allPost {
      totalCount
      edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "DD\\/MM\\/YYYY",locale:"pt-BR")
        path
      }
    }
  }
}
</page-query>
<script>
import Post from "@/components/Post";

export default {
  components: { Post },
  metaInfo: {
    title: "Blog",
  },
};
</script>

<style lang="scss">
.title-blog {
  color: #ff6b00;
  &:after {
    background: #ff6b00;
  }
}
.post-container {
  margin-bottom: 15px;
}
</style>
