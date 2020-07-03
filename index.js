const dgiApp = new Vue({
  el: "#dgi-app",
  data: function() {
    return {
      isMobile: true
    };
  },
  mounted() {
    this.checkIsMobile();
  },
  methods: {
    checkIsMobile: function() {
      if (navigator.userAgent.indexOf("obile") === -1) {
        this.isMobile = false;
      }
    }
  }
});
