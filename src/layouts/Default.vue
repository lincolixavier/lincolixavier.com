<template>
  <div class="py-5">
    <div class="container">
      <Header :isHome="false" ></Header>
      <transition name="fade" appear>
        <main>
          <slot/>
        </main>
      </transition>
    </div>
    <!-- <div class="container">
      <Footer />
    </div> -->
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