var vm = new Vue({
    el: '#cutMenu',
    data: {
      menus: [
        {
            id: 1,
            salon: "ABBEY",
            stylist: "小田嶋 信人",
            text: "シルエットを綺麗に見せるニューベーシックショート",
            imgBefore: "assets/images/before-after/kmax_before&after_01-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_01-before.png",
            url: "#"
           },
           {
            id: 2,
            salon: "ABBEY",
            stylist: "松永 英樹",
            text: "スタイルチェンジのポイント理解！<br>重めのグラボブからショートグラに簡単チェンジ",
            imgBefore: "assets/images/before-after/kmax_before&after_02-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_02-before.png",
            url: "#"
           },
           {
            id: 3,
            salon: "PEEK-A -BOO",
            stylist: "堀内 邦雄",
            text: "フォルムを綺麗に見せる、<br>骨格補正を用いたトレンドツーセクション",
            imgBefore: "assets/images/before-after/kmax_before&after_03-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_03-before.png",
            url: "#"
           }
      ],
      designMenus: [
        // 4
        {
            id: 1,
            salon: "grico",
            stylist: "エザキ ヨシタカ",
            text: "後頭部のフォルムを自然に見せる簡単ショートヘア",
            imgBefore: "assets/images/before-after/kmax_before&after_04-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_04-before.png",
            url: "#"
           },
          //  5
           {
            id: 2,
            salon: "ANNE.",
            stylist: "澤野 秀樹",
            text: "骨格をキレイにみせるマッシュショート",
            imgBefore: "assets/images/before-after/kmax_before&after_05-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_05-before.png",
            url: "#"
           },
          //  6
           {
            id: 3,
            salon: "GOALD",
            stylist: "中村 トメ吉",
            text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
            imgBefore: "assets/images/before-after/kmax_before&after_06-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-before.png",
            url: "#"
           }
      ],
    //   ■ミディアムのカットを学習する
      mediumCuts: [
        // 7
        {
            id: 1,
            salon: "SHEA.",
            stylist: "坂狩 トモタカ",
            text: "長さを変えずに女性像を変える必見テクニック",
            imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
            imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
            url: "#"
           },
          //  8
           {
            id: 2,
            salon: "suburbia",
            stylist: "石川 ヒデノリ",
            text: "外国人風スタイルを完全攻略！<br>suburbia流のノウハウを一挙公開！",
            imgBefore: "assets/images/before-after/kmax_before&after_08-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_08-before.png",
            url: "#"
           },
      ],
    //   ■ロングのカットを学習する
      longCuts: [
        // 9
        {
            id: 1,
            salon: "NORA Journey",
            stylist: "田中 衛",
            text: "カウンセリングから導く<br>スタイル提案とテクニック",
            imgBefore: "assets/images/before-after/kmax_before&after_09-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_09-before.png",
            url: "#"
           },
          //  10
           {
            id: 2,
            salon: "C・crew",
            stylist: "森田 怜",
            text: "人気の顔まわりスタイル・前髪から繋ぐ<br>レイヤーカット&アレンジ",
            imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
            imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
            url: "#"
           },
      ],
    //   ■カウンセリングを活かしたカット技術を学ぶ
      counselingCuts: [
        // 11
        {
            id: 1,
            salon: "Cocoon",
            stylist: "SAKURA",
            text: "ネガティブ要素を取り除く、<br>スタイル提案の極意！",
            imgBefore: "assets/images/before-after/kmax_before&after_11-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_11-before.png",
            url: "#"
           },
          //  12
           {
            id: 2,
            salon: "NORA Journey",
            stylist: "田中 衛",
            text: "カウンセリングから導く<br>スタイル提案とテクニック",
            imgBefore: "assets/images/before-after/kmax_before&after_09-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_09-before.png",
            url: "#"
           },
      ],
    //   ■似合わせカットを学習する
      matchingCuts: [
        {
            id: 1,
            salon: "VeLO",
            stylist: "赤松 美和",
            text: "コンプレックスをプラスに変える、<br>似合わせテクニック",
            imgBefore: "assets/images/before-after/kmax_before&after_13-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_13-before.png",
            url: "#"
           },
           {
            id: 2,
            salon: "salon dakota",
            stylist: "小谷 英智香",
            text: "トータルコーディネイトで魅せる<br>オマージュスタイル",
            imgBefore: "assets/images/before-after/kmax_before&after_14-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_14-before.png",
            url: "#"
           },
      ],
    //   ■外国人風スタイルのカット技術を理解する
      fstyleCuts: [
        // 15
        {
            id: 1,
            salon: "suburbia",
            stylist: "石川 ヒデノリ",
            text: "外国人風スタイルを完全攻略！<br>suburbia流のノウハウを一挙公開！",
            imgBefore: "assets/images/before-after/kmax_before&after_08-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_08-before.png",
            url: "#"
           },
          //  16 (10)
           {
            id: 2,
            salon: "C・crew",
            stylist: "森田 怜",
            text: "人気の顔まわりスタイル・前髪から<br>繋ぐレイヤーカット&アレンジ",
            imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
            imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
            url: "#"
           },
      ],
    //   ■ニースタンダードなカット技術を学習する
      newstandardCuts: [
        // 17
        {
            id: 1,
            salon: "ABBEY",
            stylist: "小田嶋 信人",
            text: "シルエットを綺麗に見せる<br>ニューベーシックショート",
            imgBefore: "assets/images/before-after/kmax_before&after_01-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_01-before.png",
            url: "#"
           },
          //  18
           {
            id: 2,
            salon: "JENO",
            stylist: "堀江 昌樹",
            text: "カット×「TOKIKATA」でつくる<br>モード可愛いミニボブスタイル",
            imgBefore: "assets/images/before-after/kmax_before&after_18-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_18-before.png",
            url: "#"
           },
          //  19
           {
            id: 3,
            salon: "Cocoon",
            stylist: "VAN",
            text: "ノンブローカットでつくるシースルーマッシュ",
            imgBefore: "assets/images/before-after/kmax_before&after_19-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_19-before.png",
            url: "#"
           },
      ],
    //   ■リアリティブなレイヤーカットを学ぶ
      layerCuts: [
        // 20
        {
            id: 1,
            salon: "ABBEY",
            stylist: "松永 英樹",
            text: "ウルフレイヤーで魅せる技術と思考",
            imgBefore: "assets/images/before-after/kmax_before&after_20-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_20-before.png",
            url: "#"
           },
          //  21
           {
            id: 2,
            salon: "PEEK-A-BOO",
            stylist: "福井 達真",
            text: "レイヤーボブ×クリエイティブワーク",
            imgBefore: "https://dummyimage.com/150x150/cf0d85/fff.png&text=Before",
            imgAfter: "https://dummyimage.com/150x150/ef9056/fff.png&text=after",
            url: "#"
           }
        ],
        // ■リアリティブなショートカットを学ぶ
        shortCuts: [
          // 22
            {
                id: 1,
                salon: "CARNIVAL",
                stylist: "kazu",
                text: "なじみ感・フィット感をつくりだす、<br>一発切りショートスタイル",
                imgBefore: "assets/images/before-after/kmax_before&after_22-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_22-before.png",
                url: "#"
               },
              //  23
               {
                id: 2,
                salon: "MINX",
                stylist: "池戸 裕二",
                text: "カットで魅せる「トーキョージェンダーレス」",
                imgBefore: "assets/images/before-after/kmax_before&after_23-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_23-before.png",
                url: "#"
               },
        ],
        // "■フォルムコントロールを学ぶ	"
        formControls: [
          // 24
            {
                id: 1,
                salon: "grico",
                stylist: "エザキ ヨシタカ",
                text: "後頭部のフォルムを自然に見せる<br>簡単ショートヘア",
                imgBefore: "assets/images/before-after/kmax_before&after_04-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_04-before.png",
                url: "#"
               },
              //  25
               {
                id: 2,
                salon: "ABBEY",
                stylist: "小田嶋 信人",
                text: "シルエットを綺麗に見せる<br>ニューベーシックショート",
                imgBefore: "assets/images/before-after/kmax_before&after_01-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_01-before.png",
                url: "#"
               }
        ],
        // "■骨格を補正するカット技術を学ぶ	"
        structuralCuts: [
          // 26
            {
                id: 1,
                salon: "ANNE",
                stylist: "澤野 秀樹",
                text: "骨格をキレイにみせるマッシュショート",
                imgBefore: "assets/images/before-after/kmax_before&after_05-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_05-before.png",
                url: "#"
               },
              //  27
               {
                id: 2,
                salon: "PEEK-A-BOO",
                stylist: "堀内 邦雄",
                text: "フォルムを綺麗に見せる、<br>骨格補正を用いたトレンドツーセクション",
                imgBefore: "assets/images/before-after/kmax_before&after_27-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_27-before.png",
                url: "#"
               },
              //  28
               {
                id: 3,
                salon: "GOALD",
                stylist: "中村 トメ吉",
                text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
                imgBefore: "assets/images/before-after/kmax_before&after_06-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-before.png",
                url: "#"
               },
        ],
        // ■メンズカットを学習する
        mensCuts: [
          // 29
            {
                id: 1,
                salon: "GOALD",
                stylist: "中村 トメ吉",
                text: "機能性と再現性を実現する、<br>骨格を活かしたボックス型スクエアショート",
                imgBefore: "assets/images/before-after/kmax_before&after_06-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_06-before.png",
                url: "#"
               },
              //  30
               {
                id: 2,
                salon: "Men's Lapis",
                stylist: "KUNI",
                text: "スキンフェードとダレルパーマでつくる<br>フルバックショート",
                imgBefore: "assets/images/before-after/kmax_before&after_55-after.png",
                imgAfter: "assets/images/before-after/kmax_before&after_55-before.png",
                url: "#"
               },
              //  31
               {
                id: 3,
                salon: "syn",
                stylist: "齋藤 正太",
                text: "トータルケアで創り上げる<br>ジェンダーレススタイル",
                imgBefore: "assets/images/before-after/kmax_before&after_31-after.png",
            imgAfter: "assets/images/before-after/kmax_before&after_31-before.png",
                url: "#"
               }
        ]
    }
});