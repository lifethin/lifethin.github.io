const appContainer = new Vue({
  el: "#app-container",
  data: {
    textList: {
      YiGeDuHuiRen: "一個都會人必吃的優質餐點",
      ShouShou: "壽瘦GI · 酮 專賣店",
      GengJianKang: "更健康的身體，更均衡的營養，更完美的享受",
      GeDaQiYe: "各大企業訂購，美味送到辦公室",
      LiJiDianHua: "立即電話訂購",
      WaiShiZu: "外食族的痛，我們很懂！",
      ShangBanWaiShi:
        "上班外食，下班也外食，三餐加宵夜都吃外面，熱量不知道多少、看起來油膩膩、鹹死人不償命、過多鈉、肚子越來越大、新冠肺炎不敢外出買餐。",
      HuiYing: "各行各業的實際回應",
      DingGouXuZhi: "訂購須知",
      MeiRiWuCan:
        "1. 每日午餐於當天早上9:00結單，晚餐則為13:00<br>2. 訂購滿10份即可洽談外送，距店10分鐘內距離免費外送<br>10-15分鐘酌收$5/份運費，15分鐘以上請先來電洽詢。",
      LiJiDingGou: "立即訂購",
      JiuCongJinTianQi: "就從今天起，讓每一餐吃得更健康",
      GanXie: "感謝各大企業訂購"
    },
    feedbackList: [
      {
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/shoushou-dgi.appspot.com/o/images%2FavatarU1.jpg?alt=media&token=d8771a1c-da74-482d-935d-7cf31a1dfb71",
        header: "社工師 曾小姐",
        content:
          "我吃的是義式雞肉GI餐，裡面有至少8菜加1主餐，再搭配紫米飯，水煮不加調味料，但是我吃起來是很順口好吃，份量對女生來說是剛好的，若你像我一樣食量大，可以透過健康餐來改變飲食習慣，我吃完大約7-8分飽，而且裡面都有水果哦！對於我想吃健康又希望吃多樣化的食物來說，覺得這間是便當中的第一名^^¥"
      },
      {
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/shoushou-dgi.appspot.com/o/images%2FavatarU2.jpg?alt=media&token=16c918b0-aa0a-4034-bd91-a204bd693185",
        header: "護理師 李小姐",
        content:
          "之前面對GI餐，總是有個成見，覺得蔬菜太多我應該無法接受，但有次跟朋友一起訂了壽瘦GI酮的餐來吃，意外的不錯吃耶！菜也是滿多的，但有不同的種類，而且吃得到菜甜甜的原味，對於常吃外食的我來說，偶爾吃些健康系列便當對舌頭來說很療癒呢！知道自己吃下這些對身體細胞來說沒有很大的負擔，心情也愉悅起來了～"
      },
      {
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/shoushou-dgi.appspot.com/o/images%2FavatarU3.jpg?alt=media&token=f4a5a416-06c0-4318-a851-da2f06fe7a39",
        header: "World Gym資深會員 林先生",
        content:
          "我推薦低GI餐蒜泥白肉，裡面配菜健康度非常之高，跟一般市面上的便當相比，低鈉的GI餐更適合你食用，足夠的蛋白質跟豐富的配菜，讓我愛不釋手。"
      },
      {
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/shoushou-dgi.appspot.com/o/images%2FavatarU4.jpg?alt=media&token=b9ab11a1-99e4-4b17-ad67-772aaaf920e8",
        header: "藥劑師 石小姐",
        content:
          "吃得到食物原味的新鮮，清爽卻很飽口的各色蔬菜，搭配紫米飯覺得很有嚼勁^0^ 完全一週可以吃好幾次！"
      }
    ]
  },
  mounted() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
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
});
