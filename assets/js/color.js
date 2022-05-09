var vm = new Vue({
    el: '#colorMenu',
    data: {
        // ■カラーテクニックを学習する
        colorTechniques: [
            {
                id: 1,
                salon: "カラー理論",
                stylist: null,
                text: "確実に狙った色を出すための薬剤知識・<br>日本人のアンダートーンを知る・<br>ヘアカラーの色彩学",
                imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
                imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
                url: "#"
               },
               {
                id: 2,
                salon: "suburbia",
                stylist: "黒柳 剛",
                text: "外国人風カラーのポイントがこれでわかる！<br>suburbia流ノウハウを完全公開！",
                imgBefore: "assets/images/before-after/kmax_before&after_33-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_33-before.png",
                url: "#"
               },
          ],
          designColors: [
            {
                id: 1,
                salon: "カラー理論",
                stylist: null,
                text: "確実に狙った色を出すための薬剤知識・<br>日本人のアンダートーンを知る・<br>ヘアカラーの色彩学",
                imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
                imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
                url: "#"
               },
               {
                id: 2,
                salon: "Wille",
                stylist: "志賀 尚之",
                text: "2.5Dカラーでつくる<br>アニメのキャラクタースタイル",
                imgBefore: "assets/images/before-after/kmax_before&after_35-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_35-before.png",
                url: "#"
               },
               {
                id: 3,
                salon: "SHACHU",
                stylist: "みやち のりよし",
                text: "みやちのりよし流・<br>感覚でつくる新トレンドカラー",
                imgBefore: "#",
                imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
                url: "#"
               }
          ],
        //   ■ペール系の高明度カラーを学習する
        paleColors: [
            {
                id: 1,
                salon: "カラー理論",
                stylist: null,
                text: "確実に狙った色を出すための薬剤知識・<br>日本人のアンダートーンを知る・<br>ヘアカラーの色彩学",
                imgBefore: "#",
                imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
                url: "#"
               },
               {
                id: 2,
                salon: "Beleza",
                stylist: "RYUSEI",
                text: "ワンブリーチ・リタッチで見せる<br>ハイトーン渋谷トレンド",
                imgBefore: "assets/images/before-after/kmax_before&after_38-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_38-before.png",
                url: "#"
               },
               {
                id: 3,
                salon: "iLe",
                stylist: "酒井元樹",
                text: "高明度カラーをMAXキレイに見せる<br>必見ブリーチテクニック",
                imgBefore: "#",
                imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
                url: "#"
               }
        ],
        foreignerColors: [
            {
                id: 1,
                salon: "カラー理論",
                stylist: null,
                text: "確実に狙った色を出すための薬剤知識・<br>日本人のアンダートーンを知る・<br>ヘアカラーの色彩学",
                imgBefore: "#",
                imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
                url: "#"
               },
               {
                id: 2,
                salon: "suburbia",
                stylist: "黒柳 剛",
                text: "外国人風カラーのポイントがこれでわかる！<br>suburbia流ノウハウを完全公開！",
                imgBefore: "#",
                imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
                url: "#"
               }
        ]

    }
});