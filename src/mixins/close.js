

export default {
  created() {
      let that = this;
      if(window){
        window.addEventListener('keyup', function (evt) {
          if (evt.keyCode === 27) {
              that.close();
          }
        });
      }
      
  },
};
