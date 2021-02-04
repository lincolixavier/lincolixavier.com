const doc = document;
export default {
  created() {
      let that = this;
      doc.addEventListener('keyup', function (evt) {
          if (evt.keyCode === 27) {
              that.close();
          }
      });
  },
};