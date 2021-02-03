<template>
    <div class="container-page">
      <Header :isHome="false" ></Header>
      <transition name="fade" appear>
        <main>
          <slot/>
        </main>
      </transition>
      <Footer/>
    </div>
</template>

<style>
  main{
    margin-bottom: 100px;
  }
  .container-page{
    width: 93%;
    margin: auto;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>