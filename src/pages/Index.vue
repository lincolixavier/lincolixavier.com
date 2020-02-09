<template>
  <div class="container">

    <Header></Header>
    <div @mousemove="mouseEnter"  @mouseleave="mouseLeave"  class="skillset-presentation">
      <div class="skillset-art">        
        <div class="skillset-side skillset-code-side">
          <img src="../assets/codeart.png">
        </div>

        <div class="laptop laptop-coder"></div>

        <div class="laptop laptop-designer">
        </div>

        <div class="skillset-side skillset-design-side">
        <!-- style="`transform: translateX(${currentX});`" -->
          <img src="../assets/designerart.png" alt="">
        </div>
      </div>
    </div>

    <div class="button-toportfolio">
      <a href="" class="arrow">
        Veja meu trabalho
      </a>
    </div>


  </div>


</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data(){
    return{
      designX:'',
      boxRight: '',
      hover: false,
      currentX: 0,
      relMouseX: 640,
      xp: 640,

    };
  },
  methods:{
    mouseLeave(){
      let laptopCoder = document.querySelector('.laptop-coder');
      let laptopDesigner = document.querySelector('.laptop-designer');
      let artCode = document.querySelector('.skillset-code-side');
      let artDesign = document.querySelector('.skillset-design-side');
      this.designX = 'SIM';
      artCode.className = 'skillset-side skillset-code-side';
      artDesign.className = 'skillset-side skillset-design-side';
      laptopDesigner.className = 'laptop laptop-designer';
      laptopCoder.className = 'laptop laptop-coder';
    },
    mouseEnter(event){
      this.designX = 'NAO';
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
    }
  }
}


</script>

<style lang="scss">
*{
  font-family: 'Quicksand', sans-serif;
}
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
  &.open{
    left: -32px;
    opacity: 1;
  }
  &.close{
    left: -62px;
    opacity: 0;
  }

}
.skillset-design-side{
  right: -67px;
  position: absolute;
  transition: all 0.9s ease-in-out;
  &.open{
    right: -32px;
    opacity: 1;
  }
  &.close{
    right: -62px;
    opacity: 0;
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



</style>
