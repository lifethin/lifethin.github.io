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
            <button onClick="window.open('https://lihi1.com/6f8FO')">
                <img src="images/button_call.png" />
            </button>
            <button onClick="window.open('https://lihi1.com/It57O')">
                <img src="images/button_facebook.png" />
            </button>
            <button onClick="window.open('https://lihi1.com/lzw8w')">
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
			  <div class="home-head-image">
				  <picture>
					<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_1.jpg?ver=1.3" />
					<img src="images/20210714_home_phone_1.jpg?ver=1.3" />
				  </picture>
			  </div>
			  
			  <div class="home-intro-wrapper">
				<div class="home-intro">
					<h2>一個都會人必吃的優質餐點</h2>
					<div class="home-intro_logo">
					  <picture>
						<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_2_logo.png?ver=1.3" />
						<img src="images/20210714_home_phone_2_logo.png?ver=1.3" />
					  </picture>
					</div>
					更健康的身體&nbsp;&nbsp;更均衡的營養
					<br>
					更完美的享受
					<br>
					各大企業訂購&nbsp;&nbsp;美味送到辦公室
					<br>
					<button
						onClick="window.open('https://lihi1.com/NXj6k')"
						class="home-intro_button">
						立即Line預訂
					</button>
				</div>
			  </div>
			  
			  <div class="home-we-know">
				  <div class="home-we-know_left">
					  <h1>外食族的痛，我們懂！</h1>	
					  <p>上班外食，下班也外食，三餐加宵夜都吃外食，熱量不知有多少、看起來油膩膩、鹹死人不償命、鈉過多、肚子越來越大、新冠狀肺炎沒選擇，只好就近買飯盒。
					  </p>
				  </div>
				  
				  <div class="home-we-know_right">
					  <picture>
						<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_4.jpg?ver=1.4" />
						<img src="images/20210714_home_phone_4.jpg?ver=1.4" />
					  </picture>
				  </div>
			  </div>
			  
			  <div class="home-logo-special">
				  <picture>
					<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_5.jpg?ver=1.4" />
					<img src="images/20210714_home_phone_5.jpg?ver=1.4" />
				  </picture>
			  </div>
			  
			  <div class="home-points">
			  
				<div class="home-points_line home-points_line_1">
					<div class="home-points_item home-points_item-image">
					  <picture>
						<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_6.jpg?ver=1.3" />
						<img src="images/20210714_home_phone_6.jpg?ver=1.3" />
					  </picture>
					</div>
					<div class="home-points_item home-points_item-text home-points_item-text_1">
					  <h1>
						  <picture>
							<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_7_logo.jpg?ver=1.3" />
							<img src="images/20210714_home_phone_7_logo.jpg?ver=1.3" />
						  </picture>
						締造時代健康流
					  </h1>	
					  <p>「GI值」(Glycemic Index)稱為「升糖指數」，是一種「造成血糖上升」的指數，而低GI飲食飲食法，近年風行日本，吃低GI飲食可避免糖尿病患血糖大幅波動，有助於控制血糖；低GI食物還可提供飽足感，再加上消化吸收速度比較緩慢，較不容易感到飢餓，也有助於減重族控制體重。
					  </p>
					</div>
				</div>
					
				<div class="home-points_line home-points_line_2">
					<div class="home-points_item home-points_item-image">
					  <picture>
						<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_8.jpg?ver=1.4" />
						<img src="images/20210714_home_phone_8.jpg?ver=1.4" />
					  </picture>
					</div>
					<div class="home-points_item home-points_item-text home-points_item-text_2">
					  <h1>舒肥的魅力在哪裡？</h1>	
					  <p>法文中的sous vide，指的是真空儲存的過程，1970年代由法國人提出，藉由將空氣抽掉的方式避免食材因氧化而破壞品質，舒肥法實際是將食材密封在真空袋中，放進舒肥低溫烹調機內加熱，低溫烹調的溫度通常約落在 40℃ ∼ 70℃區間。藉由對時間和溫度的精準控制，能讓食材均勻受熱，並保留住最多的養分、水分與自然風味。
					  </p>
					</div>
				</div>
					
				<div class="home-points_line home-points_line_3">
					<div class="home-points_item home-points_item-image">
					  <picture>
						<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_10.jpg?ver=1.4" />
						<img src="images/20210714_home_phone_10.jpg?ver=1.3" />
					  </picture>
					</div>
					<div class="home-points_item home-points_item-text home-points_item-text_3">
					  <h1>歐美沙拉的驚艷在這裡</h1>	
					  <p>吃膩了台灣單調乏味的沙拉?歐美沙拉傭有不同層次的風味，起司的濃郁，搭配比例恰到的多色蔬果，以及獨特的醬料，在視覺和味覺上給你全新的感受。
					  </p>
					</div>
				</div>
					
				<div class="home-points_line home-points_line_4">
					<div class="home-points_item">
					  <picture>
						<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_12.jpg?ver=1.4" />
						<img src="images/20210714_home_phone_12.jpg?ver=1.3" />
					  </picture>
					  
					
						<div class="home-points_item-inner-text home-points_item home-points_item-text home-points_item-text_4">
						  <h1>專業營養師設計餐點</h1>	
						  <p>均衡的營養餐點設計，每份餐點都有熱量標示，讓您控制熱量好簡單，輕鬆享壽享瘦
						  </p>
						</div>
					</div>
					
					<div class="home-points_item">
					  <picture>
						<source media="(min-width: 465px)" srcset="images/20210714_home_desktop_14.jpg?ver=1.4" />
						<img src="images/20210714_home_phone_14.jpg?ver=1.3" />
					  </picture>
						  
						<div class="home-points_item-inner-text home-points_item home-points_item-text home-points_item-text_5">
						  <h1>當日新鮮食材</h1>	
						  <p>每一份拿到的餐點，皆為大廚親自挑選優質食材，當日烹煮而成，絕不拿隔夜菜販售
						  </p>
						</div>
					</div>
				</div>
			  </div>
			  
			  <div class="home-goods">
				<div class="home-goods_title">
					<div class="home-goods_title_inner">
						<h1>吃低G.I.餐效果</h1>
					</div>
				</div>
				<ul class="home-goods_list">
					<li>
						<img src="images/explain_1.jpg?ver=1.3" />
						<p>
						降低罹患代謝症候群、糖尿病、心血管疾病等慢性病的機率
						</p>
					</li>
					<li>
						<img src="images/explain_2.jpg?ver=1.3" />
						<p>
						幫助控制體重
						</p>
					</li>
					<li>
						<img src="images/explain_3.jpg?ver=1.3" />
						<p>
						降低三酸甘油脂、不好的膽固醇（LDL），提升好的膽固醇（HDL）
						</p>
					</li>
				</ul>
			  </div>
			  
			  <div class="home-people_1">
				<h1>
				各行各業的實際回應
				</h1>
				<div class="home-people_item">
					<div class="home-people_img">
						<img src="images/head_1.png?ver=1.3" />
					</div>
					
					<div>
						<div class="home-people_text">
							<h2>社工師 曾小姐</h2>
							<p>
							我吃的是義式雞肉GI餐，裡面有至少8菜加1主餐，再搭配紫米飯，水煮不加調味料，吃起來很順口好吃，份量對女生是剛好，若你像我一樣食量大，可以透過健康餐來改變飲食習慣，吃完大約7-8分飽，而且裡面都有水果哦!對於想吃健康又希望吃多樣化的食物來說，覺得這間是便當中的第一名^^¥
							</p>
						</div>
					</div>
				</div>
				<div class="home-people_item">
					<div class="home-people_img">
						<img src="images/head_2.png?ver=1.3" />
					</div>
					
					<div>
						<div class="home-people_text">
							<h2>護理師 李小姐</h2>
							<p>
							之前面對GI餐，總是有個成見，覺得蔬菜太多我應該無法接受，但有次跟朋友一起訂了壽瘦GI酮的餐來吃，意外的不錯吃耶！菜也是滿多的，但有不同的種類，而且吃得到菜甜甜的原味，對於常吃外食的我來說，偶爾吃些健康系列便當對舌頭來說很療癒呢!知道自己吃下這些對身體細胞來說沒有很大的負擔，心情也愉悅起來了~
							</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="home-people_2">
			
				<div class="home-people_item">
					<div class="home-people_img">
						<img src="images/head_3.png?ver=1.3" />
					</div>
					
					<div>
						<div class="home-people_text">
							<h2>World Gym資深會員 林先生</h2>
							<p>
							我推薦低GI餐蒜泥白肉，裡面配菜健康度非常之高，跟一般市面上的便當相比，低鈉的GI餐更適合我食用，足夠的蛋白質跟豐富的配菜，讓我愛不釋手。
							</p>
						</div>
					</div>
				</div>
				
				<div class="home-people_item">
					<div class="home-people_img">
						<img src="images/head_4.png?ver=1.3" />
					</div>
					
					<div>
						<div class="home-people_text">
							<h2>藥劑師 石小姐</h2>
							<p>
							吃得到食物原味的新鮮，清爽卻很飽口的各色蔬菜，搭配紫米飯覺得很有嚼勁^0^ 完全一週可以吃好幾次！
							</p>
						</div>
					</div>
				</div>
				
			  </div>
			  
			  <div class="home-buy-info">
				<h1>訂購須知</h1>
				<ol>
					<li>每日午餐需前一晚23:00前預訂，晚餐則為13:00。</li>
					<li>訂購滿10份即可洽談外送，距店10分鐘內距離免費外送，10~15分鐘酌收$5/份運費，15分鐘以上請先來電洽詢。</li>
				</ol>
			  </div>
			  
			  <div class="home-buy-now">
				<h1>立即訂購</h1>
				<p>就從今天起，讓每一餐吃得更健康</p>
				<button onClick="window.open('https://lihi1.com/d6B3R')">
					Line訂購
				</button>
			  </div>
			  
			  <div class="home-supporters">
				<h1>感謝各大企業訂購</h1>
				<ul>
					<li><img src="images/support_1.jpg?ver=1.4" /></li>
					<li><img src="images/support_2.jpg?ver=1.4" /></li>
					<li><img src="images/support_3.jpg?ver=1.4" /></li>
					<li><img src="images/support_4.jpg?ver=1.4" /></li>
					<li><img src="images/support_5.jpg?ver=1.4" /></li>
					<li><img src="images/support_6.jpg?ver=1.4" /></li>
					<li><img src="images/support_7.jpg?ver=1.4" /></li>
					<li><img src="images/support_8.jpg?ver=1.4" /></li>
					<li><img src="images/support_9.jpg?ver=1.4" /></li>
					<li><img src="images/support_10.jpg?ver=1.4" /></li>
					<li><img src="images/support_11.jpg?ver=1.4" /></li>
				</ul>
			  </div>
			  
			  <div class="address-block">
				<div class="address-block-wrapper">
					<div class="address-col">
						<div class="address-head color-blue">★</div>
							南區: 學府路135巷1號B1
							<br>Tel: 04-2223-7607
							<br>Phone: 0982-955415
					</div>
					<div style="clear: both"></div>
				</div>
			  </div>
			  <div class="bottom-message-block">
					配合政府二級管制
					<br>
					<span class="bottom-message-block2">店內用餐人數有管制 | 請先預約訂位</span>
			  </div>
			  <div class="bottom-logo-block">
					<div class="inline-block bottom-logo-block__text">© 2021</div>
					<img class="inline-block" src="images/bottom_logo.jpg?ver=1.1" />
			  </div>
            </v-tab-item>
			
            <v-tab-item key="2">
			  <div class="purple-bg-logo">
				  <picture>
					<source media="(min-width: 465px)" srcset="images/20210714_menu_desktop_1.jpg?ver=1.3" />
					<img src="images/20210714_menu_phone_1.jpg?ver=1.3" />
				  </picture>
			  </div>
			  
			  <div class="menu-item">
				<div class="menu-item_name">(舒肥雞胸)</div>
				<div class="menu-item_price">$110</div>
				<div class="menu-item_image"><img src="images/menu_1.jpg?ver=1.4" /></div>
			  </div>
			  <div class="menu-item">
				<div class="menu-item_name">(蒜泥白肉)</div>
				<div class="menu-item_price">$110</div>
				<div class="menu-item_image"><img src="images/menu_2.jpg?ver=1.4" /></div>
			  </div>
			  <div class="menu-item">
				<div class="menu-item_name">(煎薄鹽鯖魚)</div>
				<div class="menu-item_price">$120</div>
				<div class="menu-item_image"><img src="images/menu_3.jpg?ver=1.4" /></div>
			  </div>
			  <div class="menu-item">
				<div class="menu-item_name">(舒肥牛排)</div>
				<div class="menu-item_price">$169</div>
				<div class="menu-item_image"><img src="images/menu_4.jpg?ver=1.4" /></div>
			  </div>
			  
			  <div class="menu-info clear-both">
			    <div class="menu-info_wrapper">
					<div class="menu-info_item menu-info_item-left">
						<h1>單主餐</h1>
						<p>紙盒包裝加$5元</p>
					</div>
					<div class="menu-info_item menu-info_item-right">
						<h1>低GI雙主餐</h1>
						<p>請洽店內</p>
					</div>
					<div class="clear-both"></div>
				</div>
			  </div>
			  
			  <div class="purple-bg-logo">
				  <picture>
					<source media="(min-width: 465px)" srcset="images/20210714_menu_desktop_3.jpg?ver=1.3" />
					<img src="images/20210714_menu_phone_3.jpg?ver=1.3" />
				  </picture>
			  </div>
			  
			  <div class="menu-salad">
				  <picture>
					<source media="(min-width: 465px)" srcset="images/20210714_menu_desktop_4_1.jpg?ver=1.4" />
					<img src="images/20210714_menu_phone_4_1.jpg?ver=1.4" />
				  </picture>
				  
				  <picture>
					<source media="(min-width: 465px)" srcset="images/20210714_menu_desktop_4_2.jpg?ver=1.4" />
					<img src="images/20210714_menu_phone_4_2.jpg?ver=1.4" />
				  </picture>
				
				  <div style="clear: both"></div>
			  </div>
			  
			  <div class="menu-salad-info">
				<div class="menu-salad-info_item">
					<h1>基底沙拉</h1>
					<ul>
						<li>小盒 $110</li>
						<li>中盒 $145 (2人份)</li>
						<li>大盒 $195 (3人份)</li>
					</ul>
				</div>
				<div class="menu-salad-info_item">
					<h1>酪梨沙拉</h1>
					<ul>
						<li>小盒 $140</li>
						<li>中盒 $185 (2人份)</li>
						<li>大盒 $245 (3人份)</li>
					</ul>
				</div>
				<div class="menu-salad-info_item">
					<h1>沙拉加肉區</h1>
					<ul>
						<li>+牛排 $90 (120g)</li>
						<li>+雞排 $60 (100g)</li>
						<li>+德國香腸 $30 (100g)</li>
					</ul>
				</div>
			  </div>
			  
			  <div class="menu-salad-info2">
				沙拉：13種菜 + 起司粉 + 蛋 + 橄欖油
			  </div>
			  
			  <div class="menu-special-points_wrapper">
				<div class="menu-special-points">
					<h1>飲食特點</h1>
					<ol>
						<li>時尚生酮G.I.同溫層的最愛</li>
						<li>所有香料醬汁紅酒醋類等配料全從歐美進口</li>
						<li>符合健康瘦身長壽的規格與設計</li>
						<li>一流廚師精選所有蔬菜水果等佐料</li>
						<li>是改變體質甦醒幹細胞增長免疫力的上上之選</li>
					</ol>
				</div>
			  </div>
			  
			  <div class="menu-each-points_wrapper">
				<div class="menu-each-point">
					<h1>GI餐</h1>
					<p>主食清淡少鹽，青菜川燙，無鹽無油，使用健康米，少調味</p>
				</div>
				<div class="menu-each-point">
					<h1>類GI餐</h1>
					<p>主食肉和菜本身有些微味道，有GI的好處，味道稍微清淡些</p>
				</div>
				<div class="menu-each-point">
					<h1>健康餐</h1>
					<p>為了滿足味蕾，本身有味道，但比市面上健康一些，以適當的油跟鹽處理和調味，肉和菜也會有調味料的味道</p>
				</div>
				<div class="menu-each-point">
					<h1>沙拉</h1>
					<p>天然香料，透由手工製作沙拉醬去呈現更不一樣的風味和特色</p>
				</div>
			  </div>
			  
			  <div class="address-block">
				<div class="address-block-wrapper">
					<div class="address-col">
						<div class="address-head color-blue">★</div>
							南區: 學府路135巷1號B1
							<br>Tel: 04-2223-7607
							<br>Phone: 0982-955415
					</div>
					<div style="clear: both"></div>
				</div>
			  </div>
			  <div class="bottom-message-block">
					配合政府二級管制
					<br>
					<span class="bottom-message-block2">店內用餐人數有管制 | 請先預約訂位</span>
			  </div>
			  <div class="bottom-logo-block">
					<div class="inline-block bottom-logo-block__text">© 2021</div>
					<img class="inline-block" src="images/bottom_logo.jpg?ver=1.1" />
			  </div>
            </v-tab-item>
			
            <v-tab-item key="3">
              <picture>
                <source media="(min-width: 465px)" srcset="images/20210714_party_desktop_1.jpg?ver=1.1" />
                <img src="images/20210714_party_phone_1.jpg?ver=1.1" />
              </picture>
              <picture>
                <source media="(min-width: 465px)" srcset="images/20210714_party_desktop_2.jpg?ver=1.1" />
                <img src="images/20210714_party_phone_2.jpg?ver=1.1" />
              </picture>
              <picture>
                <source media="(min-width: 465px)" srcset="images/20210714_party_desktop_3.jpg?ver=1.1" />
                <img src="images/20210714_party_phone_3.jpg?ver=1.1" />
              </picture>
			  <div class="address-block">
				<div class="address-block-wrapper">
					<div class="address-col">
						<div class="address-head color-blue">★</div>
							南區: 學府路135巷1號B1
							<br>Tel: 04-2223-7607
							<br>Phone: 0982-955415
					</div>
					<div style="clear: both"></div>
				</div>
			  </div>
			  <div class="bottom-message-block">
					配合政府二級管制
					<br>
					<span class="bottom-message-block2">店內用餐人數有管制 | 請先預約訂位</span>
			  </div>
			  <div class="bottom-logo-block">
					<div class="inline-block bottom-logo-block__text">© 2021</div>
					<img class="inline-block" src="images/bottom_logo.jpg?ver=1.1" />
			  </div>
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
      mainTab: 0,
      isMobile: true
    };
  },
  mounted() {
    // Get current route name
    if (this.$router.history.current.path == '/menu') {
       this.mainTab = 1;
    } else if (this.$router.history.current.path == '/partyservice') {
       this.mainTab = 2;
    } else {
       this.mainTab = 0;
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
