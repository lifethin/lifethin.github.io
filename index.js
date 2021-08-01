Vue.component("app-static-content", {
  template: `
  <div class="app_wrapper">
    <header>
      <v-toolbar id="app-top-navbar" style="height: 7px;">
        <v-tabs background-color="#3c5c1d" v-model="tab" class="top-menu-tab">
          <v-tab key="Main">首頁</v-tab>
          <v-tab key="Menu">餐點介紹</v-tab>
          <v-tab key="Party">派對外燴服務</v-tab>
        </v-tabs>
        <div class="toolbar-links">
          <button>
              <img src="images/button_call.png" />
          </button>
          <button>
              <img src="images/button_facebook.png" />
          </button>
          <button>
              <img src="images/button_line.png" />
          </button>
        </div>
      </v-toolbar>
    </header>
    <main>
      <div id="app-static-content" style="padding: 0px;">
        <v-tabs grow="grow" background-color="#3c5c1d" dark v-model="tab" class="menu-tab">
          <v-tab key="Main">首頁</v-tab>
          <v-tab key="Menu">餐點介紹</v-tab>
          <v-tab key="Party">派對外燴服務</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="content-area">
          <v-tab-item key="Main">
            <picture>
              <source media="(min-width: 465px)" srcset="images/20210714_home_desktop.jpg?ver=1.3" />
              <img src="images/20210714_home_phone.jpg?ver=1.3" />
            </picture>
          </v-tab-item>
          <v-tab-item key="Menu">
            <picture>
              <source media="(min-width: 465px)" srcset="images/20210714_menu_desktop.jpg?ver=1.3" />
              <img src="images/20210714_menu_phone.jpg?ver=1.3" />
            </picture>
          </v-tab-item>
          <v-tab-item key="Party">
            <picture>
              <source media="(min-width: 465px)" srcset="images/20210714_party_desktop.jpg?ver=1.3" />
              <img src="images/20210714_party_phone.jpg?ver=1.3" />
            </picture>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </main>
  </div>
  `,
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
