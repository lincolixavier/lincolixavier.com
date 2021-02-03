<template>
    <article class="post">
        <label class="time-to-read">{{ `${post.date} - ${post.timeToRead} min de leitura`}}</label>
        <g-link :to="post.path" class="read">
            <h1 class="title" v-html="post.title"/>
        </g-link>
        <p class="description" v-html="post.description"/>
    </article>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post: Object,
        },
    }
</script>

<style lang="scss">

.post{
    max-width: 990px;
    margin: auto;
    width: 90%;
    .read{
        text-decoration: none;
    }
    .title{
        color: #ff6b00;
        font-size: 39px;
        letter-spacing: 4px;
    }
    .date, .time-to-read{
        color:#8f8f8f;
        font-size: 14px;
    }
    .description{
        color:#333;
        font-size: 20px;
    }

}
</style>