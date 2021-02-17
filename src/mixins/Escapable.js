export const Escapable = {
  created() {
    if (process.isClient) {
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
}