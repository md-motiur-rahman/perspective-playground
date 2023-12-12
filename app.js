Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotatex: 0,
      rotatey: 0,
      rotatez: 0,
      copiedText: ''
    };
  },
  computed: {
    box() {
      return {
        transform: `perspective(${this.perspective}px)
        rotateX(${this.rotatex}deg)
        rotateY(${this.rotatey}deg)
        rotateZ(${this.rotatez}deg)`,
      };
    },
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotatex = 0;
      this.rotatey = 0;
      this.rotatez = 0;
      this.copiedText = ''
    },
    copy() {
        let text = `transform: ${this.box.transform}`;
        navigator.clipboard.writeText(text);
        this.copiedText = text;
        alert('Copied to clipboard');
    }
  },
}).mount("#app");

