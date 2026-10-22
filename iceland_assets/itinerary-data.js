/**
 * 冰島自助自駕旅遊 2027/1/22–2/3 行程資料模組
 * 結構化、高可讀性、易於維護與擴充
 */
const ICELAND_ITINERARY = {
  metadata: {
    title: "冰島冬季自駕環島巡禮",
    dateRange: "2027/1/22（五）– 2/3（三）",
    totalDays: 13,
    totalDistance: "約 1,840 km",
    travelers: "團隊自駕（約 9 人）",
    description: "涵蓋雷克雅維克、斯奈山半島、銀圈、黃金圈、南岸瀑布群、瓦特納冰川健行、藍冰洞與藍湖溫泉。",
    daylightNote: "1 月底冬季日照約 10:30 日出 – 16:30 日落（約 6 小時有效日照），請把握白天觀景並避免摸黑開車。"
  },

  // 實用連結與緊急救援
  safetyResources: [
    { name: "Safetravel.is", desc: "即時天氣警戒、路況警報、登山安全登記", url: "https://safetravel.is/" },
    { name: "Road.is (Vegagerðin)", desc: "全國公路即時積雪、結冰、強風與封路監控", url: "https://www.road.is/" },
    { name: "Vedur.is", desc: "冰島氣象局即時天氣與極光指數 (Aurora Forecast)", url: "https://en.vedur.is/" },
    { name: "112 緊急求助專線", desc: "冰島官方緊急報案電話 (亦可透過 Safetravel App 發送求救)", url: "tel:112" }
  ],

  // 每日行程詳細清單
  days: [
    {
      dayNumber: 1,
      date: "1/22",
      weekday: "五",
      title: "機場取車 → Costco 採買 → 首都住宿",
      region: "首都圈 & 機場",
      driveInfo: "1 hr・50 km",
      morningSchedule: "ICN 前晚 23:00 起飛，赫爾辛基轉機",
      afternoonSchedule: "15:55 抵達 KEF → Lotus 取車 → Costco 採買 → 首都住宿",
      isFlightDay: true,
      flightOrTransitInfo: "航班資訊：1/21 23:00 ICN 出發，赫爾辛基轉機；1/22 15:55 抵達 KEF 機場",
      tags: ["抵達日", "機場取車", "Costco 大採購", "極光夜遊"],
      accommodation: {
        name: "Downtown Reykjavík Apartments",
        address: "Rauðarárstígur 31, Reykjavík",
        specs: "4 房 2 衛・專屬免費停車位",
        notes: "市區公寓，步行可至主街 Laugavegur"
      },
      tips: [
        "15:55 抵達 KEF，順利出關後前往 Lotus Car Rental 取車，記得仔細檢查車況、調整座椅與後視鏡。",
        "冰島法規要求不分晝夜【全天開啟車頭大燈】。",
        "雷克雅維克市區路邊停車需使用 Parka 或 EasyPark App（夜間 21:00–09:00 免費）。",
        "冬季夜間市區散步保暖做好（防風帽、手套），並特別留意人行道上的「黑冰 (Black Ice)」以防滑倒。"
      ],
      spots: [
        {
          name: "Costco Iceland 採買前半段食材",
          desc: "採買前幾天必備食材（羊排、牛肉、雞蛋、蔬菜、麵包、零食與飲水），營業時間至 21:00。"
        },
        {
          name: "首都首夜散步巡禮（約 4 km）",
          desc: "路線：購物主街 Laugavegur → 哈爾格林姆教堂夜景 → 彩虹街 → 哈帕音樂廳夜光 → 太陽航行者鋼雕。"
        }
      ]
    },
    {
      dayNumber: 2,
      date: "1/23",
      weekday: "六",
      title: "首都散策 → 牧場冰淇淋 → Reykholt 渡假屋",
      region: "首都圈 & 西部",
      driveInfo: "3.0 hrs・200 km",
      morningSchedule: "首都經典散策：哈爾格林姆教堂、哈帕音樂廳、Perlan 珍珠樓",
      afternoonSchedule: "Erpsstaðir 牧場 → 經 Borgarnes 採買 → Reykholt 渡假屋入住",
      isFlightDay: false,
      tags: ["地標巡禮", "360景觀台", "農場起司", "連住2晚"],
      accommodation: {
        name: "Grímsstaðir holiday home",
        address: "Reykholt",
        specs: "5 房 2 衛・BBQ 設備・免費停車",
        notes: "連住 2 晚・寬敞戶外露台，周圍無光害非常適合觀賞星空與極光"
      },
      tips: [
        "中午前結束首都散策，下午儘早啟程北上，爭取在日落前抵達以避免冬季摸黑開山路。",
        "行經小鎮 Borgarnes 時務必在超市買齊接下來 2 晚的全部食材（Reykholt 當地僅有極小雜貨店）。",
        "Erpsstaðir 牧場冬季經常僅在週末 13:00–17:00 開放，建議出發前先致電 +354 868 0357 確認。"
      ],
      spots: [
        {
          name: "哈爾格林姆教堂 Hallgrímskirkja（鐘塔約 1,400–1,500 ISK）",
          desc: "1945 年動工、1986 年完工。搭電梯登鐘塔可 360 度俯瞰首都彩色屋頂與海灣；主大廳免費參觀（約 10:00–17:00 開放，遇禮拜或音樂會暫停登塔）；建議停留 45–60 分鐘；周邊路邊收費停車可用 EasyPark 或 Parka。"
        },
        {
          name: "哈帕音樂廳 Harpa（免費入內）",
          desc: "2011 年啟用，蜂巢狀玻璃外牆隨冰島天色光影變幻萬千；可搭手扶梯至頂層走廊遠眺海灣與 Esja 雪山；開放時間約 10:00–18:00（週三至六常延長至 20:00）；建議停留 30–60 分鐘；地下設有室內收費停車場。"
        },
        {
          name: "珍珠樓 Perlan（聯票約 7,090 ISK）",
          desc: "前身為地熱水塔儲存庫，1991 年改建為複合展館。4 樓設有 360° 環景戶外展望台、百公尺真實冰洞體驗及 8K 極光天文秀；開放 09:00–21:00；深度體驗約 1.5–2.5 小時，若僅參觀景觀台約 45 分鐘；停車場透過機台或 App 繳費。"
        },
        {
          name: "Erpsstaðir 酪農牧場手工冰淇淋",
          desc: "位於 Búðardalur 附近 60 號公路旁的家族酪農場，以純濃手工冰淇淋、Skyr 巧克力糖與自製起司聞名，還可參觀乳牛舍與自動擠乳機。冬季常僅在週末午後開放，前往請先電話確認。"
        }
      ]
    },
    {
      dayNumber: 3,
      date: "1/24",
      weekday: "日",
      title: "Reykholt ↔ 銀圈 Silver Circle 精華探索（當天往返）",
      region: "銀圈 Silver Circle",
      driveInfo: "1.5 hrs・80 km",
      morningSchedule: "探訪維德格爾米爾巨型熔岩洞穴、熔岩瀑布與兒童瀑布",
      afternoonSchedule: "Sturlureykir 冰島馬牧場、德爾達圖赫菲地熱湧泉、Krauma 地熱溫泉浴場",
      isFlightDay: false,
      tags: ["熔岩地洞", "雙瀑布奇景", "冰島矮種馬", "極致地熱溫泉"],
      accommodation: {
        name: "Grímsstaðir holiday home",
        address: "Reykholt",
        specs: "連住第 2 晚・5 房 2 衛",
        notes: "不需收拾行李，傍晚回屋烹飪大餐，戶外露台守候極光"
      },
      tips: [
        "維德格爾米爾熔岩洞（Víðgelmir）必須事先預約專人導覽，洞內常年恆溫約 2°C，務必穿著厚保暖衣物並戴好帽子手套。",
        "Krauma 地熱溫泉極為熱門，強烈建議提早上線預約入場時段；進池前依冰島文化規定須全身淋浴潔淨。",
        "德爾達圖赫菲（Deildartunguhver）湧出的泉水近 100°C 沸點，蒸氣瀰漫，請嚴格留在木棧道內以策安全。"
      ],
      spots: [
        {
          name: "維德格爾米爾巨型熔岩洞（Víðgelmir Cave）",
          desc: "冰島規模最宏偉的火山熔岩管洞穴之一，由專業嚮導帶領進入色彩斑斕的地下玄武岩地宮，導覽約需 1.5 小時。"
        },
        {
          name: "熔岩瀑布（Hraunfossar）＋兒童瀑布（Barnafoss）",
          desc: "清澈蔚藍的冰川泉水從一公里寬的熔岩孔隙中奔湧流出，匯入深邃峽谷，冬日藍冰與雪景交融，免費參觀，約停留 1 小時。"
        },
        {
          name: "Sturlureykir 溫泉冰島馬牧場",
          desc: "拜訪可愛溫順的冰島純種矮馬，農場更利用地熱自製烘焙裸麥麵包，體驗濃濃冰島鄉村人情味。"
        },
        {
          name: "德爾達圖赫菲湧泉 ＆ Krauma 地熱溫泉浴場",
          desc: "歐洲出水量最大的地熱溫泉，供應 Krauma 天然浴場多座不同水溫的純淨天然泡湯池與地熱蒸氣室，洗滌長途駕車疲憊。"
        }
      ]
    },
    {
      dayNumber: 4,
      date: "1/25",
      weekday: "一",
      title: "Reykholt → 斯奈山南岸景緻 → 格倫達菲厄澤",
      region: "斯奈山半島 Snæfellsnes",
      driveInfo: "3.0 hrs・180 km",
      morningSchedule: "退房出發 → 探訪 Ytri Tunga 海豹沙灘",
      afternoonSchedule: "孤絕夢幻 Búðir 黑教堂 → 穿越山脈抵達草帽山小鎮住宿",
      isFlightDay: false,
      tags: ["野生海豹", "黑教堂", "草帽山窗景", "洗衣烘衣日"],
      accommodation: {
        name: "Two bathrooms Free parking Beds for 9 pers",
        address: "Grundargata 43, Grundarfjörður",
        specs: "3 房 2 衛・客廳與臥房窗景正對草帽山（Kirkjufell）",
        notes: "附 2 台洗衣機與 2 台烘衣機，此為整趟旅程最佳衣物洗烘據點（連住 2 晚）"
      },
      tips: [
        "自 Reykholt 退房啟程，若需補充新鮮生鮮食材，可順路微幅繞進 Borgarnes 的 Bónus 粉紅豬超市買足。",
        "目的地 Grundarfjörður 小鎮上僅有一家小型 Kjörbúðin 超市，選擇較少且打烊早。",
        "Ytri Tunga 海豹沙灘於乾潮退潮時段較易近距離觀察海豹棲息於礁岩上，停車收費約 1,000 ISK。",
        "行經 54 號公路進入斯奈山半島山區前，務必隨時查詢 Safetravel 最新路面結冰與風速通報。"
      ],
      spots: [
        {
          name: "Ytri Tunga 金黃沙灘與野生海豹棲地",
          desc: "冰島少見的金色沙灘，常有成群海豹在離岸岩石上曬太陽或悠游，步道平緩，拍照請保持安全距離不可驚擾海豹。"
        },
        {
          name: "Búðir 黑教堂（Búðakirkja）",
          desc: "座落於狂野熔岩原與雪山之間的漆黑木造教堂，強烈對比極富神秘美感。注意：教堂內部不對外開放、周圍無暖氣及洗手間。"
        }
      ]
    },
    {
      dayNumber: 5,
      date: "1/26",
      weekday: "二",
      title: "格倫達菲厄澤 ↔ 斯奈山半島全覽巡禮",
      region: "斯奈山半島 Snæfellsnes",
      driveInfo: "2.0 hrs・125 km",
      morningSchedule: "經典草帽山拍照、Kirkjufellsfoss 瀑布、隱密玄武岩 Svöðufoss 瀑布",
      afternoonSchedule: "紅頂 Ingjaldshóll 教堂、Arnarstapi 巨人石像海蝕拱門、Lóndrangar 海蝕柱",
      isFlightDay: false,
      tags: ["白日夢冒險王", "教會山", "海蝕洞奇岩", "國家公園"],
      accommodation: {
        name: "Two bathrooms Free parking Beds for 9 pers",
        address: "Grundargata 43, Grundarfjörður",
        specs: "連住第 2 晚・正對草帽山窗景",
        notes: "把握今晚使用 2 洗 2 烘將換洗衣物全面洗滌烘乾，為後半段行程準備"
      },
      tips: [
        "草帽山於每年 9/1–翌年 6/15 冬春季全面嚴禁攀登，遊客請僅在山腳與瀑布旁觀景步道活動。",
        "沿海懸崖區（特別是 Arnarstapi 與 Lóndrangar）風勢極為猛烈，停車時請務必【車頭迎風停放】，開關車門雙手緊抓防吹折。",
        "景點步道冬季普遍有厚冰積雪，造訪瀑布時請所有人一律套上簡易冰爪以策安全；瀑布停車費約 1,000 ISK。"
      ],
      spots: [
        {
          name: "教會山（草帽山 Kirkjufell）與 Kirkjufellsfoss 經典瀑布",
          desc: "冰島最具代表性的經典明信片名勝，電影《白日夢冒險王》與《冰與火之歌》取景地，瀑布與對面神山在雪景映襯下無比震撼。"
        },
        {
          name: "紅頂教堂（Ingjaldshóll）",
          desc: "聳立於長長坡道頂端的唯美紅白教堂，背景為斯奈菲爾雪山冰川，構圖優美典雅。"
        },
        {
          name: "Svöðufoss 玄武岩柱壁瀑布",
          desc: "從整齊壯麗的柱狀玄武岩峭壁上一瀉而下的秘境瀑布，遊人相對稀少，步道平緩好走。"
        },
        {
          name: "Arnarstapi 濱海巨石與 Gatklettur 海蝕拱門",
          desc: "傳奇半人半神 Bárður 石像守護之地，沿著海崖木棧道漫步，可眺望驚濤拍岸的海蝕天然石橋與深淵海鳥巢穴。"
        },
        {
          name: "Lóndrangar 雄偉海蝕巨石柱",
          desc: "宛如兩座拔海而起的中世紀古堡尖塔，為古代火山口經千萬年海水侵蝕所殘留的玄武岩栓。"
        }
      ]
    },
    {
      dayNumber: 6,
      date: "1/27",
      weekday: "三",
      title: "格倫達菲厄澤 → Costco 大補給 → Selfoss 湖景木屋",
      region: "西部至南部門戶",
      driveInfo: "3.5 hrs・250 km",
      morningSchedule: "退房出發 → 沿途行經 Borgarnes 品嚐知名現烤肉桂捲",
      afternoonSchedule: "返抵首都圈 Costco 進行後半段食材大採購 → 抵達 Selfoss 渡假木屋放鬆泡湯",
      isFlightDay: false,
      tags: ["長途移動日", "後半程物資採買", "私人溫泉浴池", "桑拿房烤箱"],
      accommodation: {
        name: "Cozy Cabin with Hot Tub & Sauna",
        address: "Selfoss / Veiðilundur 湖景渡假區",
        specs: "2024 年全新建造・私人戶外地熱 Hot Tub・室內獨立桑拿房 (Sauna)",
        notes: "環境清幽鄰近湖畔，無光害極光絕佳觀賞地（連住 2 晚）"
      },
      tips: [
        "本日為長途移動日（約 250 公里），上午請儘早出發，保持充裕行車時間以策安全。",
        "Costco Iceland 採買重點：補齊未來 5–6 天在南部海岸所需的高熱量肉品、火鍋食材、雞蛋、泡麵與乾糧。",
        "冰島法規限定所有酒精飲料僅能在國營商店【Vínbúðin】購買（超市僅販售淡啤酒），Vínbúðin 平日大多 18:00 打烊，需提早規劃。"
      ],
      spots: [
        {
          name: "Borgarnes 烘焙坊暖心肉桂捲與咖啡",
          desc: "西岸熱門休息小鎮，來份新鮮出爐、香氣撲鼻的北歐肉桂捲，舒緩駕車疲倦。"
        },
        {
          name: "Costco Iceland 大採買（營業 10:00–21:00）",
          desc: "價格親民齊全的批發商場，一次買齊南岸偏遠地區難以補給的優質生鮮食材。"
        },
        {
          name: "入住 Selfoss 湖景木屋享用私人 Hot Tub 與桑拿",
          desc: "在極致嚴寒的冰島夜幕下，泡在天然滾燙的戶外熱水浴池中，仰望滿天星斗甚至極光舞動。"
        }
      ]
    },
    {
      dayNumber: 7,
      date: "1/28",
      weekday: "四",
      title: "Selfoss ↔ 黃金圈 Golden Circle 經典四大奇景",
      region: "黃金圈 Golden Circle",
      driveInfo: "2.5 hrs・190 km",
      morningSchedule: "辛格韋德利國家公園（板塊交界）、藍色瀑布 Brúarfoss",
      afternoonSchedule: "Geysir 間歇泉噴發奇觀、Gullfoss 黃金巨型瀑布",
      isFlightDay: false,
      tags: ["世界遺產", "板塊裂谷", "間歇泉爆發", "黃金大瀑布"],
      accommodation: {
        name: "Cozy Cabin with Hot Tub & Sauna",
        address: "Selfoss / Veiðilundur 湖景渡假區",
        specs: "連住第 2 晚・私人戶外 Hot Tub ＆ 桑拿房",
        notes: "當天往返無須搬行李，傍晚可於木屋享受自煮大餐與熱水池"
      },
      tips: [
        "黃金圈各景點人潮眾多，瀑布步道周邊因水氣凝結極度濕滑，必須全程套妥簡易冰爪走在指定標線內。",
        "Gullfoss 與 Geysir 遊客中心規模宏大，餐飲選擇多，亦是購買冰島羊毛紀念品與伴手禮的好去處。",
        "回程可順路在 Selfoss 市區超市（Krónan 或 Bónus）採買今晚與明日出發前的補充食材。"
      ],
      spots: [
        {
          name: "辛格韋德利國家公園（Þingvellir National Park）",
          desc: "聯合國教科文組織世界文化遺產，北美板塊與歐亞板塊拉裂形成的壯麗大裂谷，亦是西元 930 年冰島最古老議會所在地。"
        },
        {
          name: "藍色瀑布（Brúarfoss）",
          desc: "被譽為冰島最純淨美麗的秘境瀑布，冰川融水匯聚成宛如蒂芬妮藍的迷人絲絹，近年已鋪設全新步道與停車場。"
        },
        {
          name: "蓋錫爾間歇泉區（Geysir & Strokkur）",
          desc: "地熱蒸氣蒸騰，其中活躍的 Strokkur 間歇泉每隔 6–10 分鐘便會爆發噴射高達 20–30 公尺的滾燙沸水柱，令人嘆為觀止。"
        },
        {
          name: "黃金瀑布（Gullfoss）",
          desc: "冰島最壯觀雄渾的雙層巨型瀑布，奔騰的 Hvítá 河水咆哮落入深達 32 公尺的深邃峽谷，冬日巨浪凝霜景象極具魄力。"
        }
      ]
    },
    {
      dayNumber: 8,
      date: "1/29",
      weekday: "五",
      title: "Selfoss → 南岸雙瀑奇觀 → 教堂鎮景觀木屋",
      region: "南岸瀑布群 South Coast",
      driveInfo: "2.5 hrs・200 km",
      morningSchedule: "退房啟程 → 探訪水濂洞塞里雅蘭瀑布（Seljalandsfoss）",
      afternoonSchedule: "攀登 527 階抵達斯科加爾瀑布頂端 → 途經維克鎮 → 抵達教堂鎮住宿",
      isFlightDay: false,
      tags: ["水濂洞瀑布", "彩虹巨瀑", "關鍵補給日", "黑沙灘前哨"],
      accommodation: {
        name: "The Holiday Houses by Stay in Iceland",
        address: "教堂鎮（Kirkjubæjarklaustur）以西山坡地",
        specs: "獨棟景觀小木屋・簡易廚房（無大型烤箱，非常適合煮熱湯麵、火鍋或簡單煎煮）",
        notes: "座落於高地開闊山坡，視野極佳，為進入冰河湖區域的重要前哨站"
      },
      tips: [
        "【至關重要的補給日】：自教堂鎮一路往東至傑古沙龍冰河湖一帶，沿途完全沒有大型超市，只有極小且物價高昂的加油站雜貨鋪！",
        "今天上午出發前務必在 Selfoss（或中途行經 Vík 的 Krónan 超市）買齊未來 2–3 天在冰河湖區域的所有正餐食材、飲水與早餐！",
        "造訪兩大瀑布時迎風水氣極大，強烈建議穿著完整防水防風衝鋒衣褲並配戴冰爪，相機鏡頭需隨時擦拭防潮。",
        "出發前請再次透過 Safetravel 與 Road.is 檢查 1 號環島公路南段風速（特別注意火山黑沙平原強風通報）。"
      ],
      spots: [
        {
          name: "塞里雅蘭瀑布（Seljalandsfoss，落差 60 公尺）",
          desc: "著名可穿行至水幕後方的瀑布，冬季因後方步道嚴重結冰往往封閉，但在正面欣賞晶瑩剔透的冰柱群依然美不勝收。"
        },
        {
          name: "斯科加爾瀑布（Skógafoss，寬 25 公尺）",
          desc: "水勢磅礡的水幕常常映照出雙彩虹；旁側設有 527 級階梯可攀登至瀑布頂端觀景台，俯瞰南岸平原與河川奔流入海。"
        },
        {
          name: "維克熔岩秀（備選項目）",
          desc: "若遇強風或大雨天候不佳，可在途經維克（Vík）時購票體驗室內熔岩秀，近距離感受真實岩漿的高溫與冷卻過程。"
        }
      ]
    },
    {
      dayNumber: 9,
      date: "1/30",
      weekday: "六",
      title: "教堂鎮 → 綠色苔原 → 羽毛峽谷 → 斷橋遺址 → 小冰河湖",
      region: "東南峽谷與冰川前緣",
      driveInfo: "2.5 hrs・200 km",
      morningSchedule: "Eldhraun 巨幅熔岩苔原、探訪權力遊戲取景地羽毛峽谷",
      afternoonSchedule: "Skeiðará 斷橋紀念碑 → Fjallsárlón 寧靜小冰河湖",
      isFlightDay: false,
      tags: ["火星地貌", "絕美峽谷", "冰川洪水遺址", "連住2晚"],
      accommodation: {
        name: "The Potato Storage",
        address: "Svínafell 1, Skaftafell 地區",
        specs: "精緻現代化設計・距明日冰川健行集合點僅 10–15 分鐘車程",
        notes: "連住 2 晚・免去連日搬遷行李勞頓，備有完善廚房，非常適合冰川活動前後休息"
      },
      tips: [
        "羽毛峽谷（Fjaðrárgljúfur）步道冬日嚴重積雪結冰，所有人必須在停車場就穿妥冰爪再啟程；停車費約 1,000 ISK。",
        "峽谷頂端風勢強烈且氣溫偏低，保暖手套與防風毛帽不可離身。",
        "Eldhraun 熔岩原生態極為脆弱，苔蘚生長需百年以上，請務必僅在觀景台或鋪設走道停留，【嚴禁踩踏苔原】。",
        "Skeiðará 斷橋位於開闊火山沙原，強陣風威力驚人，上下車請緊拉車門。"
      ],
      spots: [
        {
          name: "Eldhraun 巨大熔岩苔原（停留 15–30 分鐘）",
          desc: "1783 年拉基火山大爆發形成的全球最大玄武岩熔岩原，覆蓋著厚厚毛茸茸的綠色地衣苔蘚，被雪花點綴如夢似幻。"
        },
        {
          name: "羽毛峽谷 Fjaðrárgljúfur（停留 1–1.5 小時）",
          desc: "歷經數百萬年冰川融水切割而成的曲折峽谷，深達百米，兩側奇岩聳立，宛如指環王中精靈王國的天然屏障。"
        },
        {
          name: "Skeiðará 斷橋紀念碑（停留 10–15 分鐘）",
          desc: "1996 年冰川下火山爆發引發毀滅性冰川洪水泥石流，沖毀當時最長鋼橋，將扭曲變形的巨型鋼樑保留作為紀念地標。"
        },
        {
          name: "Fjallsárlón 小冰河湖（停留 40–50 分鐘）",
          desc: "隱身於大冰河湖西南側的幽靜秘境，距離巨大冰舌極近，可近距離凝視巍峨傾瀉的藍白色冰川前緣。"
        }
      ]
    },
    {
      dayNumber: 10,
      date: "1/31",
      weekday: "日",
      title: "冰河湖周邊 ↔ 藍冰洞探險 ＋ 冰川健行 ＋ 鑽石沙灘",
      region: "瓦特納冰川與傑古沙龍",
      driveInfo: "1.5 hrs・100 km",
      morningSchedule: "參加專業冰川嚮導團：探索純天然水晶藍冰洞＋瓦特納冰川健行",
      afternoonSchedule: "傑古沙龍冰河湖（Jökulsárlón）浮冰巡禮、漫步黑沙灘撿拾冰晶鑽石",
      isFlightDay: false,
      tags: ["整趟高潮", "天然藍冰洞", "冰川健行", "黑沙灘鑽石碎冰"],
      accommodation: {
        name: "The Potato Storage",
        address: "Svínafell 1, Skaftafell 地區",
        specs: "連住第 2 晚",
        notes: "體力消耗大的一天，結束後快速回到溫暖宿舍洗熱水澡，煮碗熱騰騰的火鍋大餐"
      },
      tips: [
        "本日為整趟冰島之行最高強度體能活動日，前一晚務必提早就寢確保體力充沛。",
        "冰川健行請著硬底高筒登山鞋（便於扣上專業冰爪）、多層次排汗透氣防風防寒衣物，並隨身攜帶保溫瓶盛裝熱水。",
        "今日三餐使用 1/29 在 Selfoss 預先備妥的食材烹調，無需在偏遠地區尋找餐館。",
        "鑽石沙灘海浪極度危險（瘋狗浪），觀賞把玩黑沙灘上的晶瑩碎冰塊時，【切勿背對大海】，絕不可冒險站在水中浮冰上！"
      ],
      spots: [
        {
          name: "瓦特納冰川健行 ＆ 天然水晶藍冰洞探秘",
          desc: "穿戴安全吊帶、冰斧與專業抓地冰爪，踏上歐洲最大冰原，鑽入每年冬天才會自然形成的晶瑩剔透夢幻藍冰洞。"
        },
        {
          name: "傑古沙龍冰河湖（Jökulsárlón）",
          desc: "無數龐大宛若幽藍寶石的冰山從冰川崩落漂浮於湖面，隨潮流緩緩漂向大西洋，常可見野生海豹在浮冰間冒出頭呼吸。"
        },
        {
          name: "鑽石沙灘（Diamond Beach）",
          desc: "沖刷上海灘的巨大透明冰塊在火山黑沙的映襯下閃爍耀眼光芒，彷彿散落在黑色天鵝絨上的巨大鑽石顆粒。"
        }
      ]
    },
    {
      dayNumber: 11,
      date: "2/1",
      weekday: "一",
      title: "冰河湖區域 → 維克小鎮熔岩秀 → 迪霍拉里拱門 → 海拉小鎮",
      region: "南岸黑沙灘與海拉",
      driveInfo: "3.0 hrs・240 km",
      morningSchedule: "西行折返 → 抵達維克（Vík）享用熱熱午餐並欣賞室內真實熔岩秀",
      afternoonSchedule: "登上海蝕海岬 Dyrhólaey 俯瞰黑沙灘與天然拱門 → 傍晚入住海拉沿河別墅",
      isFlightDay: false,
      tags: ["海岬俯瞰", "黑沙灘全景", "熔岩秀", "家庭影音享受"],
      accommodation: {
        name: "Hella - Riverbank",
        address: "5 Þrúðvangur, Hella",
        specs: "寬敞水岸景觀住宅・配備 75 吋大螢幕電視與頂級環繞音響",
        notes: "長途跋涉後最佳休憩地，夥伴們今晚可齊聚在客廳沙發一同觀賞精彩電影，徹底放鬆身心"
      },
      tips: [
        "本日為自東南海岸返回西南部之長途車程（約 240 公里），建議上午準時啟程。",
        "維克鎮是南岸最重要的補給與商圈：可在 Krónan 補充零食，並於大型 Icewear 旗艦店挑選採買冰島羊毛手套、毛帽等伴手禮。",
        "迪霍拉里（Dyrhólaey）頂端懸崖開闊，若風速超過 15 m/s 建議留在下層觀景台，切勿強登燈塔頂端；停車開門抓緊，步道備妥冰爪。"
      ],
      spots: [
        {
          name: "維克午餐 ＆ 室內真實熔岩秀（Icelandic Lava Show）",
          desc: "全球唯一利用高達 1100°C 真實滾燙熔岩模擬火山噴發的室內教育秀，親身感受岩漿逼近時的熾熱狂野與嘶嘶聲響。"
        },
        {
          name: "迪霍拉里海岬（Dyrhólaey）與海蝕門",
          desc: "曾是一座火山島嶼，黑色的巨型天然海蝕拱門宛如大象飲水，高處更可將左右兩側無限延展的黑色沙灘與大西洋白浪盡收眼底。"
        },
        {
          name: "遠眺黑沙灘（Reynisfjara）與雷尼斯德蘭格海蝕玄武岩柱群",
          desc: "自迪霍拉里高台遠眺雷尼斯峭壁三巨石，海天一色氣象萬千。"
        }
      ]
    },
    {
      dayNumber: 12,
      date: "2/2",
      weekday: "二",
      title: "海拉 → 首都悠閒散策 → 藍湖溫泉療癒 → 機場飯店還車",
      region: "雷克雅內斯半島 & 機場",
      driveInfo: "2.5 hrs・160 km",
      morningSchedule: "退房啟程前往首都雷克雅維克，補逛第一天未盡興之特色商店或地標",
      afternoonSchedule: "前往藍湖溫泉（Blue Lagoon）享受天然白矽泥地熱泡湯 → 加滿油至 Lotus 還車 → 入住機場旁步行飯店",
      isFlightDay: true,
      tags: ["最後採買", "藍湖夢幻溫泉", "加滿油還車", "機場零時差"],
      accommodation: {
        name: "Aurora Hotel at KEF",
        address: "Blikavöllur 2, Keflavík",
        specs: "機場園區飯店・步行 2–5 分鐘直通 KEF 國際航廈・清晨 04:00 起供應豐盛熱早餐",
        notes: "今晚先加滿油將租賃車輛歸還，今夜收拾行李安心入睡，明日清晨從容步入航廈"
      },
      tips: [
        "藍湖溫泉（Blue Lagoon）為全球最熱門景點之一，必須事先在官網預約確認入場時段。",
        "藍湖泉水中富含礦物質矽泥，入池前請務必在頭髮抹滿飯店提供的免費潤髮乳（無需沖掉）以防髮質乾澀，並取下手錶、項鍊等所有金屬飾品。",
        "還車前請於機場周邊加油站將油箱【完全加滿】，並保留加油收據。",
        "尚未買足的冰島特色烈酒（如 Brennivín）、海鹽與伴手禮，在 KEF 機場出境免稅店購買通常最便宜且免退稅手續。"
      ],
      spots: [
        {
          name: "雷克雅維克市區巡禮與最後特色咖啡小歇",
          desc: "補逛托寧湖（Tjörnin）、市政廳、特羅姆瑟設計品店，或品嚐著名的 Bæjarins Beztu Pylsur 羊肉熱狗堡。"
        },
        {
          name: "藍湖天然地熱溫泉（Blue Lagoon，停留約 2.5–3 小時）",
          desc: "被黑色熔岩面包圍的牛奶藍仙境溫泉，敷上天然白矽泥面膜，喝著吧檯附贈特調飲品，為精彩冰島之旅劃下最療癒的句點。"
        },
        {
          name: "前往 Lotus Car Rental 順利還車",
          desc: "檢查隨身貴重物品是否遺漏於車上，確認車身狀態完成結案，輕鬆步行前往機場飯店。"
        }
      ]
    },
    {
      dayNumber: 13,
      date: "2/3",
      weekday: "三",
      title: "飯店退房 → 步行至航廈 → 赫爾辛基轉機 → 返抵首爾仁川",
      region: "國際返程航班",
      driveInfo: "步行 2–5 分鐘即達航廈",
      morningSchedule: "05:00 享用飯店早餐並步行至航廈報到 → 07:30 搭乘 AY816 起飛前往赫爾辛基",
      afternoonSchedule: "13:00 抵達赫爾辛基（轉機等候 4h35m）→ 17:35 搭乘 AY041 飛往首爾；2/4 12:25 抵達仁川 ICN",
      isFlightDay: true,
      spotsSectionHeader: "返程航班與轉機安排",
      tags: ["完滿收官", "芬蘭航空", "免退稅購物", "平安歸國"],
      accommodation: {
        name: "Aurora Hotel at KEF",
        address: "Blikavöllur 2, Keflavík",
        specs: "清晨退房・步行 2–5 分鐘進入航廈出發大廳",
        notes: "租賃車輛已於昨日加滿油歸還完畢，今日無交通焦慮"
      },
      tips: [
        "班機 07:30 起飛，建議 05:00 左右享用飯店熱早餐並辦理退房，05:20 步行抵達航廈進行行李託運與安檢。",
        "Aurora Hotel 每日清晨 04:00 起即貼心供應歐陸式早餐，請早起用餐儲備飛行體力。",
        "在冰島市區購買的退稅單（若未達現場退稅），可於機場退稅櫃檯掃描或蓋章後投入專用郵筒。"
      ],
      spots: [
        {
          name: "07:30 KEF 起飛 → HEL 赫爾辛基（AY816，飛行 3 小時 30 分）",
          desc: "搭乘芬蘭航空客機告別冰火之國，抵達芬蘭赫爾辛基機場萬塔航廈。"
        },
        {
          name: "HEL 赫爾辛基轉機等候時光（約 4 小時 35 分）",
          desc: "赫爾辛基機場連續獲選歐洲最舒適機場之一，可在轉機區逛嚕嚕米（Moomin）專賣店、品嚐北歐肉桂捲或於貴賓室放鬆休息。"
        },
        {
          name: "17:35 HEL 出發 → ICN 首爾仁川（AY041 Finnair，飛行約 11 小時 50 分）",
          desc: "搭乘長程寬體客機穿越歐亞大陸返回首爾。"
        },
        {
          name: "2/4 12:25 平安抵達首爾仁川國際機場（ICN）",
          desc: "圓滿結束 13 天難忘精彩的冰島極光與冰雪探險之旅！"
        }
      ]
    }
  ]
};

// 讓全域能存取
if (typeof window !== "undefined") {
  window.ICELAND_ITINERARY = ICELAND_ITINERARY;
}
