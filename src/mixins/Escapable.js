export const Escapable = {
  created() {
      const escapeHandler = (e) => {
          if (e.keyCode === 27 && this.show) {
              this.escapeHandler();
          }
      }
      document.addEventListener('keydown', escapeHandler);
      this.$once('hook:destroyed', () => {
          document.removeEventListener('keydown', escapeHandler);
      });
  }
}