var vm = new Vue({
  el: "#managementMenu",
  data: {
    // ■サロンマネジメントを学ぶ
    salonManagementMenus: [
      {
        id: 1,
        salon: "Cocoon",
        stylist: "VAN/SAKURA",
        text: "Cocconやお互いについて<br>深掘りしていく指定対談",
        imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
        imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
      {
        id: 2,
        salon: "VeLO",
        stylist: "鳥羽 直泰/赤松 美和",
        text: "二人の世界観を<br>紐解くパートナー対談",
        imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
        imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
      {
        id: 3,
        salon: "SHIMA",
        stylist: "神納 裕貴/金田 和樹",
        text: "「SHIMA」の強さをテーマに、<br>それぞれの思いや考え方を<br>語り合うスタイリスト対談",
        imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
        imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
    ],
    // ■セルフマネジメントを学ぶ
    selfManagementMenus: [
      {
        id: 1,
        salon: "SIX",
        stylist: "久保 雄司",
        text: "#クボイズム 美容師の可能性",
        imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
        imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
        url: "#",
      },
    ],
  },
});
