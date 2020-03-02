<template>
  <div class="container">

    <!-- <ul>
      <li v-for="item of documents" :key="item.id">
        {{ item.data.title[0].text }} 
      </li>
    </ul> -->
    <Header :isHome="true" ></Header>
    <div class="rwd">
      <img src="../assets/rwd.png" alt="Code Design Side" lazyload="true">
    </div>
    <div @mousemove="mouseEnter"  @mouseleave="mouseLeave"  class="skillset-presentation">
      <div class="skillset-art">        
        <div class="skillset-side skillset-code-side">
          <img src="../assets/codeart.png" alt="Code Side" lazyload="true">
          <input class="text-code"  value="<logic /> 👨🏻‍💻" type="text" disabled>
        </div>

        <div class="laptop laptop-coder"></div>

        <div class="laptop laptop-designer">
        </div>

        <div class="skillset-side skillset-design-side">
          <img src="../assets/designerart.png" alt="Design Side" lazyload="true">
          <h1 class="text-art">art 👨🏻‍🎨</h1> 
        </div>
      </div>
    </div>
    <div class="button-toportfolio">
      <g-link  class="arrow" to="/work-and-play/">Veja meu trabalho</g-link>
    </div>
  </div>
</template>


<script>
import Vue from 'vue';
// import PrismicVue from 'prismic-vue';

// Vue.use(PrismicVue, {
//   endpoint: 'https://lincoli-xavier.cdn.prismic.io/api/v2',
// })

export default {
  metaInfo: {
    title: 'Lincoli Xavier | Frontend Developer & UI Designer'
  },
  data(){
    return{
      designX:'',
      boxRight: '',
      hover: false,
      transition: false,
      relMouseX: 640,
      xp: 640,
      documents: null,

    };
  },
  // beforeCreate () {
  //   // GET POSTS
  //   this.$prismic.client.query(
  //     this.$prismic.Predicates.at('document.id', 'Xkw6-xEAACMAcjYD'),
  //     // { orderings : '[my.blog_post.date desc]' }
  //   ).then((response) => {
  //     // response is the response object, response.results holds the documents
  //     console.log(response);
  //      this.documents = response.results;
  //   });
  //   // POST UNIQUE
  //   this.$prismic.client.query(
  //     this.$prismic.Predicates.at('document.id', 'Xkw6-xEAACMAcjYD'),
  //     // { orderings : '[my.blog_post.date desc]' }
  //   ).then((response) => {
  //     // response is the response object, response.results holds the documents
  //     console.log(response);
  //      this.documents = response.results;
  //   });
  // },
  methods:{
    mouseLeave(){
      let laptopCoder = document.querySelector('.laptop-coder');
      let laptopDesigner = document.querySelector('.laptop-designer');
      let artCode = document.querySelector('.skillset-code-side');
      let artDesign = document.querySelector('.skillset-design-side');
      artCode.className = 'skillset-side skillset-code-side';
      artDesign.className = 'skillset-side skillset-design-side';
      laptopDesigner.className = 'laptop laptop-designer';
      laptopCoder.className = 'laptop laptop-coder';
    },
    mouseEnter(event){
      let mouseX = event.clientX;
      let laptopCoder = document.querySelector('.laptop-coder');
      let laptopDesigner = document.querySelector('.laptop-designer');

      let artCode = document.querySelector('.skillset-code-side');
      let artDesign = document.querySelector('.skillset-design-side');


      let sizeWidthHalf = window.innerWidth / 2;
      if(mouseX < this.currentX && this.currentX < sizeWidthHalf  ){

        laptopDesigner.classList.remove('open');
        laptopCoder.classList.add('open');
        laptopCoder.classList.remove('close');
        laptopDesigner.classList.add('close');

        artCode.classList.remove('close');
        artCode.classList.add('open');
        
        artDesign.classList.remove('open');
        artDesign.classList.add('close');

      } else if(mouseX > this.currentX && this.currentX > sizeWidthHalf ) {
        laptopDesigner.classList.add('open');
        laptopCoder.classList.add('close');
        laptopCoder.classList.remove('open');
        laptopDesigner.classList.remove('close');

        artCode.classList.add('close');
        artCode.classList.remove('open');

        artDesign.classList.remove('close');
        artDesign.classList.add('open');
      }
      this.currentX = mouseX;
    },
  }
}



</script>

<style lang="scss">

.skillset-presentation{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.skillset-art{
  width: 640px;  
  margin: auto;
  position: relative;
  height: 439px;
  .skillset-side{
    width: 50%;
  }
}
.skillset-code-side{
  left: -57px;
  z-index: 9;
  position: absolute;
  transition: all 1s ease-in-out;
  opacity: 0.4;
  &.open{
    left: -32px;
    opacity: 1;
  }
  &.close{
    left: -62px;
    opacity: 0;
  }
  .text-code{
    font-size: 40px;
    color: #2b2b2b;
    position: absolute;
    top: 50%;
    background: transparent;
    left: -78%;
    border: none;
    width: 227px;
  }

}
.skillset-design-side{
  right: -67px;
  position: absolute;
  transition: all 0.9s ease-in-out;
  opacity: 0.4;
  &.open{
    right: -32px;
    opacity: 1;
  }
  &.close{
    right: -62px;
    opacity: 0;
  }
  .text-art{
    font-size: 40px;
    color: #FF5858;
    position: absolute;
    top: 50%;
    right: -67%;
    width: 119px;
  }
}
.laptop{
  transition: all 0.9s ease-in-out;
  background: url('../assets/notebooks.png') no-repeat;
  width: 285px;  
  height: 394px;
  position: absolute;
  top: 0;
  display: block;
  z-index: 9;
  &.laptop-designer{
    background-position: 100% 0;
    right: 40px;
    &.open{
      right: 150px;
      width: 562px;

    }
    &.close{
      right: -63px;
      width: 0px;
    }
  }

  &.laptop-coder{
    background-position: 0 100%;
    left:40px;
    &.open{
      left: 143px;
      width: 562px;

    }
    &.close{
      left: -70px;
    }
  }
}

.button-toportfolio{
    width: 100%;
    a{
      color: #FF5858;
      width: 250px;
      display: block;
      margin: auto;
      font-size: 22px;
      padding: 10px;
      border-radius: 4px;
      text-decoration: none;
      position: relative;
      overflow: hidden;
      transition: all 0.2s ease-in-out;
      &:hover:after{
        width: 100%;
      }
      &:after{
        content: '';
        position: absolute;
        left: 0px;
        bottom: 0;
        height: 2px;
        width: 0;
        background: #FF5858;
        transition: all 0.2s ease-in-out;

      }
      &:hover:before{
        right: 2px;
      }
      &:before{
        content: '';
        position: absolute;
        height: 100%;
        top: 0;
        right: 6px;
        z-index: 2;
        width: 40px;
        background: url('../assets/arrow.svg') no-repeat;
        background-position: center;
        transition: all 0.25s ease-in-out;
      }
    }
  }
  .rwd{
    display: none;
  }

@media screen and (max-width: 1220px){
  .skillset-presentation {
    transform: scale(0.75);
  }
  
}
@media screen and (max-width: 950px){
  .skillset-presentation {
    margin-top: -60px;
  }
  .skillset-code-side .text-code {
    font-size: 30px;
    left: -26%;
  }
  .skillset-design-side .text-art {
    font-size: 30px;
    right: -46%;
  }
  
}

@media screen and (max-width: 670px){
  .skillset-presentation {
    display: none;
  }
  .skillset-code-side .text-code,.skillset-design-side .text-art  {
    display: none;
  }
  .rwd {
    padding: 30px;
    display: block;
    text-align: center;
    img{
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 450px){
  .container{
    overflow: hidden;
  }
  .rwd {
    padding: 0px;
    display: flex;
    justify-content: center;
    img{
      max-width: 134%;
      margin: auto;
    }
  }
  .button-toportfolio {
    margin: 30px 0;
  }
}

</style>
