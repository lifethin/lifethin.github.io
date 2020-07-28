Vue.component("app-top-navbar", {
  template: `<nav class="navbar sticky-top navbar-expand-sm" id="app-top-navbar">
  
</nav>`,
});

Vue.component("app-fixed-buttom-navbar", {
  template: `<nav class="navbar fixed-buttom navbar-expand-sm row" id="app-fixed-buttom-navbar">
  <div class="col-4"></div>
  
  <a class="col-4" href="https://lihi1.com/4bBiU" target="_blank">
    <img src="images/fathersday-baoming.svg" style="width: 100%;">
  </a>
  <a class="col-4" href="https://lihi1.com/9sdiA" target="_blank">
    <img src="images/fathersday-dianhua.svg" style="width: 100%;">
  </a>


  </div>
</nav>`,
});

Vue.component("app-static-content", {
  template: `<div id="app-static-content">
  <img src="images/0728-phone-01.jpg">
  <img src="images/0728-phone-02.jpg">
  </div>`,
});

const dgiApp = new Vue({
  el: "#dgi-app",
  data: function () {
    return {
      isMobile: true,
    };
  },
  mounted() {
    this.checkIsMobile();
  },
  methods: {
    checkIsMobile: function () {
      if (navigator.userAgent.indexOf("obile") === -1) {
        this.isMobile = false;
      }
    },
  },
});
