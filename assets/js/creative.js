var vm = new Vue({
  el: "#creativeMenu",
  data: {
    // ■クリエイティブワークを理解する
    creativeMenus: [
      // 58
      {
        id: 1,
        salon: "STRAMA",
        stylist: "豊田 永秀",
        text: "クリエイティブワークで魅せるビックシルエット",
        imgBefore: "assets/images/before-after/kmax_before&after_58-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_58-before.png",
        url: "#",
      },
      // 59
      {
        id: 2,
        salon: "PEEK-A-BOO",
        stylist: "福井 達真",
        text: "レイヤーボブ×クリエイティブワーク",
        imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
        imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
      // 60
      {
        id: 3,
        salon: "LONESS",
        stylist: "片山 良平",
        text: "リアルヘアメイク・撮影チームと創るクリエイティブワークの現場",
        imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
        imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
    ]
  },
});
