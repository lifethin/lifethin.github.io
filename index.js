const router = new VueRouter({
  routes: [
    { path: '/index' },
    { path: '/menu' },
    { path: '/partyservice' },
  ]
});

const dgiApp = new Vue({
  template: `
  <v-app id="v-app">
    <div class="app_wrapper">
      <header>
        <v-toolbar id="app-top-navbar" style="height: 7px;">
          <v-tabs v-model="mainTab" class="top-menu-tab">
             <v-tab v-for="tab of tabs" :key="tab.id" @click="updateRoute(tab.route)">
               {{tab.name}}
             </v-tab>
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
          <v-tabs grow="grow" background-color="#3c5c1d" dark v-model="mainTab" class="menu-tab">
             <v-tab v-for="tab of tabs" :key="tab.id" @click="updateRoute(tab.route)">
               {{tab.name}}
             </v-tab>
          </v-tabs>
          <v-tabs-items v-model="mainTab" class="content-area">
            <v-tab-item key="1">
              <picture>
                <source media="(min-width: 465px)" srcset="images/20210714_home_desktop.jpg?ver=1.3" />
                <img src="images/20210714_home_phone.jpg?ver=1.3" />
              </picture>
            </v-tab-item>
            <v-tab-item key="2">
              <picture>
                <source media="(min-width: 465px)" srcset="images/20210714_menu_desktop.jpg?ver=1.3" />
                <img src="images/20210714_menu_phone.jpg?ver=1.3" />
              </picture>
            </v-tab-item>
            <v-tab-item key="3">
              <picture>
                <source media="(min-width: 465px)" srcset="images/20210714_party_desktop.jpg?ver=1.3" />
                <img src="images/20210714_party_phone.jpg?ver=1.3" />
              </picture>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </main>
    </div>
  </v-app>
  `,
  el: "#dgi-app",
  router,
  vuetify: new Vuetify(),
  data: function() {
    return {
      tabs: [
        { id: 1, route: '/index', name: '首頁' },
        { id: 2, route: '/menu', name: '餐點介紹' },
        { id: 3, route: '/partyservice', name: '派對外燴服務' }
      ],
      mainTab: 1,
      isMobile: true
    };
  },
  mounted() {
    console.log(4444);//test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(this.$router.history.current.path);//test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Get current route name
    if (this.$router.history.current.path == '/menu') {
       this.mainTab = 2;
    } else if (this.$router.history.current.path == '/partyservice') {
       this.mainTab = 3;
    } else {
       this.mainTab = 1;
    }

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
    },
    updateRoute (route) {
      this.$router.push({ path: route })
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
});
