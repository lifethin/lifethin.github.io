Vue.component("app-top-navbar", {
  template: `<v-toolbar height="7%" id="app-top-navbar">
  
</v-toolbar>`
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
</v-footer>`
});

Vue.component("app-static-content", {
  template: `<div id="app-static-content">
  <v-tabs grow="grow" background-color="#3c5c1d" dark v-model="tab">
    <v-tab key="One">父親節</v-tab>

    <v-tab key="Three">餐點介紹</v-tab>
    <v-tab key="Four">派對外燴服務</v-tab>
  </v-tabs>

  <v-tabs-items v-model="tab">
    <v-tab-item key="One">
      <img src="images/0728-phone-01.jpg">
      <img src="images/0728-phone-02.jpg">
    </v-tab-item>
    <v-tab-item key="Three">
      <img src="images/0702-02.jpg">
    </v-tab-item>
    <v-tab-item key="Four">
      <img src="images/0702-04.jpg">
    </v-tab-item>
  </v-tabs-items>
  
  </div>`,
  data: function() {
    return {
      tab: null
    };
  }
});

const dgiApp = new Vue({
  el: "#dgi-app",
  vuetify: new Vuetify(),
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
