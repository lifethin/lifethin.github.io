Vue.component("app-top-navbar", {
  template: `<v-toolbar height="7%" id="app-top-navbar">
  
</v-toolbar>`,
});

Vue.component("app-fixed-buttom-navbar", {
  template: `<v-footer fixed id="app-fixed-buttom-navbar">
  <v-row justify="center" no-gutters>
    <v-col cols="4"></v-col>
    <v-col cols="4">
      <v-btn rounded elevation="20" color="warning" href="https://lihi1.com/4bBiU" target="_blank">立即報名</v-btn>
    </v-col>
    <v-col cols="4">
      <v-btn rounded elevation="20" color="warning" href="https://lihi1.com/9sdiA" target="_blank">電話聯絡</v-btn>
    </v-col>
  </v-row>
</v-footer>`,
});

Vue.component("app-static-content", {
  template: `<div id="app-static-content">
  <img src="images/0728-phone-01.jpg">
  <img src="images/0728-phone-02.jpg">
  </div>`,
});

const dgiApp = new Vue({
  el: "#dgi-app",
  vuetify: new Vuetify(),
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
