var vm = new Vue({
  el: "#makeMenu",
  data: {
    // ■撮影現場で通用するヘアメイクを学習する
    locationMenus: [
      // 61
      {
        id: 1,
        salon: "SUNVALLEY",
        stylist: "朝日光輝",
        text: 'キレイさ倍増！"魅力”を引き出す血色メイク',
        imgBefore: "assets/images/before-after/kmax_before&after_61-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_61-before.png",
        url: "#",
      },
    ],
    // ■サロンスタイルのヘアメイクを学習する
    salonstyleMenus: [
      // 62
      {
        id: 2,
        salon: "SYAN",
        stylist: "野々口 祐子",
        text: "スマホ撮影で可愛く見せるカットとヘアメイク",
        imgBefore: "assets/images/before-after/kmax_before&after_62-after.png",
        imgAfter: "assets/images/before-after/kmax_before&after_62-before.png",
        url: "#",
      },
      // 63 (7)
      {
        id: 3,
        salon: "SHEA.",
        stylist: "坂狩 トモタカ",
        text: "長さを変えずに女性像を変える必見テクニック",
        imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
        imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
    ],
  },
});
