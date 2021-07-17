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
  <v-tabs grow="grow" background-color="#3c5c1d" dark v-model="tab" class="menu-tab">
    <v-tab key="Main">首頁</v-tab>
    <v-tab key="Three">餐點介紹</v-tab>
    <v-tab key="Four">派對外燴服務</v-tab>
  </v-tabs>

  <v-tabs-items v-model="tab" class="content-area">
    <v-tab-item key="Main">
      <img src="images/20210714_home_phone.jpg?ver=1.2">
    </v-tab-item>
    <v-tab-item key="Three">
      <img src="images/20210714_menu_phone.jpg?ver=1.2">
    </v-tab-item>
    <v-tab-item key="Four">
      <img src="images/20210714_party_phone.jpg?ver=1.2">
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
    this.initFirebase();
  },
  methods: {
    checkIsMobile: function() {
      if (navigator.userAgent.indexOf("obile") === -1) {
        this.isMobile = false;
      }
    },
    initFirebase: function() {
      const firebaseConfig = {
        apiKey: "AIzaSyAJlHb0qtw0gjp009vv6rHNkgP9ZHybAmM",
        authDomain: "shoushou-dgi.firebaseapp.com",
        databaseURL: "https://shoushou-dgi.firebaseio.com",
        projectId: "shoushou-dgi",
        storageBucket: "shoushou-dgi.appspot.com",
        messagingSenderId: "563968978705",
        appId: "1:563968978705:web:df8a9187860ef5658ee6b0",
        measurementId: "G-8NBCPBSVXW"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }
  }
});
