<template>
    <div class="container">
      <Header :isHome="false" ></Header>
      <transition name="fade" appear>
        <main>
          <slot/>
        </main>
      </transition>
      <Footer/>
    </div>
</template>

  <static-query>
query {
  metaData {
    siteName
  }
  
}
</static-query>

<style>
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>