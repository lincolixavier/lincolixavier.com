<template>
    <Layout>
        <h1 class="title-page title-blog">blog</h1>
        <article class="container-post">
            <div class="post-title">
                <h1 class="title">{{$page.post.title}}</h1>
                <p class="post-date"> {{ $page.post.date}} - {{$page.post.timeToRead}} min de leitura</p>
            </div>
            <article class="post-content"  v-html="$page.post.content" />
            <g-link to="/blog" class="back-button">  &larr; Todos os posts</g-link>

        </article>
        <div class="comments-area">
            <h2 class="comments-title">Comentários 💬</h2>
            <Disqus shortname="www-lincolixavier-com" :identifier="$page.post.title" />
        </div>

    </Layout>


</template>
<page-query>
    query Post ($path: String!) {
        post: post (path: $path) {
            id
            title
            content
            date (format: "DD\\/MM\\/YYYY",locale:"pt-BR")
            timeToRead
        }
    }
</page-query>
<script>
    export default {
        name: "Post"
    }
</script>

<style lang="scss">

.title-blog{
    color: #ff6b00;
    &:after{
        background: #ff6b00;
    }
}
.back-button{
    text-decoration: none;
    color: #f55700;
    margin: 30px 0;
    display: block;
}
.container-post{
    max-width: 990px;
    margin: auto;
    width: 90%;
    position: relative;
}
.post-title{
    margin-bottom: 20px;
}
.title{
    color: #ff6b00;
    font-size: 44px;
    letter-spacing: 4px;
    line-height: 45px;
    margin-bottom: 14px;
}

.post-content{
    h2,h3,h5,h6{
        color: #545454;
        margin-bottom: 20px;
    }
    h4{
        color: #545454;
        margin: 20px 0;
    }
    p{
        color: #545454;
        font-size: 19px;
        margin-bottom: 20px;
        line-height: 29px;
    }
    a{
        background: #ff6b00;
        color:#FFF;
        text-decoration: none;
    }
}
.comments-title{
    color: #ff6b00;
    font-size: 25px;
}
.comments-area{
    max-width: 990px;
    margin: 30px auto;
    width: 90%;
}

</style>