<template>
<Layout>
     <section class="posts">
        <h1 class="title-page title-blog">blog</h1>
        <Post v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
</Layout>



    <!-- <section class="contact-me">
      <h1 class="title-section">Entre em contato: </h1>
      <div class="contact-socialmedia">
        <a target="_blank" href="https://github.com/lincolixavier" class="contact-icon is-github"></a>
        <a target="_blank" href="https://twitter.com/lincolixavier" class="contact-icon is-twitter"></a>
        <a target="_blank" href="https://www.linkedin.com/in/lincoli-xavier/" class="contact-icon is-linkedin"></a>
        <a target="_blank" href="https://www.instagram.com/lincolimonteiro/" class="contact-icon is-instagram"></a>
        <a target="_blank" href="https://www.behance.net/lincolixavier1" class="contact-icon is-behance"></a>
        <a target="_blank" href="https://www.shutterstock.com/g/lincolimonteiro" class="contact-icon is-shutterstock"></a>
      </div>
    </section> -->
    
 
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
                    date (format: "D MMMM YYYY")
                    path
                }
            }
        }
    }
</page-query>
<script>
import Post from '@/components/Post';

export default {
    components: { Post },
    metaInfo: {
        title: 'Blog'
    }
}
</script>

<style lang="scss">

.title-blog{
    color: #ff6b00;
    &:after{
        background: #ff6b00;
    }
}

</style>