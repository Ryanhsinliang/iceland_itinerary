/**
 * 冰島自助自駕旅遊 2027/1/22–2/3 行程資料模組
 * 依據《冰島自助旅遊參考行程.pptx》（共 61 頁）完整更新
 */
const ICELAND_ITINERARY = {
  metadata: {
    title: "冰島冬季自駕環島巡禮",
    dateRange: "2027/1/22（五）– 2/3（三）",
    totalDays: 13,
    totalDistance: "約 1,975 km",
    travelers: "7 人・兩台四驅 SUV（Toyota RAV4 ＋ Toyota Land Cruiser）",
    description: "涵蓋雷克雅維克、斯奈山半島、銀圈、黃金圈、南岸瀑布群、瓦特納冰川健行、天然水晶藍冰洞與藍湖溫泉。",
    daylightNote: "1 月底冰島日出約 10:30，日落約 16:30（僅約 6 小時有效日照）。請把握白天行車觀景，嚴格避免夜間行駛易結黑冰或暴風雪山路。"
  },

  // 實用連結與即時安全
  safetyResources: [
    { name: "Safetravel.is", desc: "即時天氣警戒、路況警報、登山行程登記", url: "https://safetravel.is/" },
    { name: "Road.is (Vegagerðin)", desc: "全國公路即時積雪、結冰、強風與封路即時監控", url: "https://www.road.is/" },
    { name: "Vedur.is", desc: "冰島氣象局即時天氣、強風警報與極光指數預報", url: "https://en.vedur.is/" },
    { name: "112 緊急救援", desc: "冰島官方緊急求救電話 (亦可使用 112 Iceland App 發送 GPS)", url: "tel:112" }
  ],

  // 每日詳細行程 (Day 1 - Day 13)
  days: [
    {
      dayNumber: 1,
      date: "1/22",
      weekday: "五",
      title: "機場 → Costco 採購 → 首都住宿",
      region: "首都圈 & 機場",
      driveInfo: "1.0 hr・50 km",
      morningSchedule: "ICN 前晚 23:00 起飛，赫爾辛基轉機",
      afternoonSchedule: "15:55 抵達 KEF → Lotus Car Rental 取車 → Costco 採買 → 首都住宿",
      nightSchedule: "晚餐 ＋ 等待極光 ＋ 充足休息",
      isFlightDay: true,
      flightOrTransitInfo: "航班資訊：1/21 23:00 ICN 出發，赫爾辛基轉機；1/22 15:55 抵達 KEF 機場",
      tags: ["抵達日", "機場取車", "Costco 大採購", "首都夜巡"],
      mapUrl: "https://maps.app.goo.gl/qiia2znjzdpjXEUR8",
      mapImage: "iceland_assets/images/map-day-1.jpeg",
      accommodation: {
        name: "Downtown Reykjavík Apartments",
        address: "Rauðarárstígur 31, Reykjavík",
        specs: "4 房 2 衛・專屬免費停車位",
        notes: "市區優質公寓，專屬免費停車，步行可至主街 Laugavegur"
      },
      tips: [
        "15:55 抵達 KEF，出關後至 Lotus Car Rental 櫃檯取車，到燈光下繞車拍照錄影，仔細調整座椅與後視鏡。",
        "冰島法規要求不分晝夜【全天開啟車頭大燈】（手動開啟，避免誤用自動導致尾燈未亮）。",
        "雷克雅維克市區路邊停車以 Parka 或 EasyPark App 繳納（21:00–09:00 免費）。",
        "夜間市區散步戴好帽子手套，留意人行道黑冰防滑倒。"
      ],
      spots: [
        {
          name: "Costco Iceland 採買前半段食材",
          desc: "採買前半段必備食材（羊排、牛肉、雞蛋、蔬菜、泡麵乾糧），營業時間至 21:00。憑實體會員卡入場，可順路自助加油。"
        },
        {
          name: "首都首夜散步巡禮（約 4 km）",
          desc: "散步路線：購物主街 Laugavegur → 哈爾格林姆教堂夜景 → 彩虹街 → 哈帕音樂廳夜光 → 太陽航行者（Sólfar）鋼雕。"
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
      nightSchedule: "自煮晚餐 ＋ 戶外露台守候極光 ＋ 充足休息",
      isFlightDay: false,
      tags: ["地標巡禮", "360景觀台", "農場冰淇淋", "連住2晚"],
      mapUrl: "https://maps.app.goo.gl/6n8Wum3DaHmKc8FX7",
      mapImage: "iceland_assets/images/map-day-2.jpeg",
      accommodation: {
        name: "Grímsstaðir holiday home",
        address: "Reykholt",
        specs: "5 房 2 衛・BBQ 設備・免費停車",
        notes: "連住 2 晚・寬敞戶外露台，周圍無光害非常適合觀賞星空與極光"
      },
      tips: [
        "中午前結束首都散策，下午提早啟程北上避免冬季摸黑開車。",
        "途經 Borgarnes 務必在超市買齊接下來 2 晚的全部食材（Reykholt 當地僅有極小雜貨店）。",
        "Erpsstaðir 牧場冬季經常僅在週末 13:00–17:00 開放，出發前先致電 +354 868 0357 確認。"
      ],
      spots: [
        {
          name: "哈爾格林姆教堂 Hallgrímskirkja",
          sub: "雷克雅維克地標・玄武岩柱狀靈感",
          image: "iceland_assets/images/spot-d2-1-hallgrimskirkja.jpeg",
          origin: "1945 年動工、1986 年完工，前後歷時 41 年。建築師 Guðjón Samúelsson 以冰島玄武岩柱狀節理為靈感，遠看像火箭，也像管風琴。",
          highlights: "搭電梯登上鐘塔，360° 俯瞰彩色鐵皮屋頂與海灣；堂內管風琴有 5,275 根音管；門前矗立探險家萊夫・埃里克松（Leif Erikson）的雕像。",
          tips: "大廳免費，登塔約 1,400–1,500 ISK；開放約 10:00–17:00，禮拜或音樂會暫停登塔；停留 45–60 分；週六 10:00–21:00 周邊路邊停車計費（P1 約 630 ISK/小時，上限 3 小時），用咪表或 EasyPark 繳費。"
        },
        {
          name: "哈帕音樂廳 Harpa Concert Hall",
          sub: "舊港邊的玻璃璀璨結晶",
          image: "iceland_assets/images/spot-d2-2-harpa.jpeg",
          origin: "2011 年啟用，由丹麥 Henning Larsen 事務所與藝術家 Olafur Eliasson 合作；外牆以數千片幾何蜂巢狀玻璃磚拼成，在港邊映著海面波光。",
          highlights: "玻璃隨天氣與日光變幻光影，室內拍照絕佳；頂層走廊可遠眺海灣與 Esja 雪山；館內設有設計選品店與景觀咖啡廳。",
          tips: "公共區域免費參觀；開放約 10:00–18:00（週三至六常延長至 20:00）；停留 30–60 分；地下停車場約 510 ISK/小時（前 15 分鐘免費），車牌自動辨識計費。"
        },
        {
          name: "珍珠樓 Perlan",
          sub: "丘頂的玻璃穹頂・冰島自然地貌體驗",
          image: "iceland_assets/images/spot-d2-3-perlan.webp",
          origin: "坐落在 Öskjuhlíð 丘陵頂，1991 年落成。前身是儲存地熱熱水的水塔，加上巨型玻璃穹頂後，改造成複合展覽與 360 度景觀台。",
          highlights: "4 樓 360° 戶外景觀台望見整座城市與火山地形；百公尺真實冰洞用逾 350 噸冰川冰打造，可當冰川預習；另設有震撼 8K 極光天文秀。",
          tips: "1 樓大廳免費，進展區需購票，聯票線上約 7,090 ISK；開放 09:00–21:00；深度參觀約 1.5–2.5 小時，只看景觀台約 45 分；停車場依現場指示或 App 繳費。"
        },
        {
          name: "Erpsstaðir 酪農牧場",
          sub: "牧場現做新鮮乳製品與冰淇淋",
          image: "iceland_assets/images/spot-d2-4-erpsstadir.webp",
          origin: "家族經營的傳統酪農場與乳製品工坊，位在 Búðardalur 附近的 60 號公路旁，以自產自製天然純淨乳製品聞名全冰島。",
          highlights: "農場現做的純濃手工冰淇淋、Skyr 巧克力糖與自製起司；可參觀牛舍、乳牛與擠乳機，常有山羊、小兔子與牧羊犬陪你逛。",
          tips: "冬季常只在週末 13:00–17:00 開放；出發前請先致電 +354 868 0357 確認營業情況。"
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
      afternoonSchedule: "Sturlureykir 馬場品嚐地熱麵包、德爾達圖赫菲地熱湧泉、Krauma 精品浴場泡湯",
      nightSchedule: "自煮晚餐 ＋ 戶外露台守候極光 ＋ 充足休息",
      isFlightDay: false,
      tags: ["熔岩管洞穴", "蒂芬妮藍雙瀑", "冰島純種馬", "精品地熱浴場"],
      mapUrl: "https://maps.app.goo.gl/jmU4BWhTrD58kW9W6",
      mapImage: "iceland_assets/images/map-day-3.jpeg",
      accommodation: {
        name: "Grímsstaðir holiday home",
        address: "Reykholt",
        specs: "連住第 2 晚・5 房 2 衛",
        notes: "當天往返無需整理行李，傍晚回屋享用自煮大餐，戶外露台守候極光"
      },
      tips: [
        "維德格爾米爾洞（Víðgelmir）須參加導覽，洞內恆溫約 2°C，務必穿著防寒衣物並戴妥帽子手套。",
        "Krauma 精品地熱浴場建議先線上預約入場時段；入池前依冰島文化規定須全身淋浴潔淨。",
        "德爾達圖赫菲湧泉水溫近 100°C 沸點，蒸氣瀰漫，請嚴格留在木棧道內以防燙傷。"
      ],
      spots: [
        {
          name: "維德格爾米爾洞穴 Víðgelmir",
          sub: "冰島體積最大的火山熔岩管地宮",
          image: "iceland_assets/images/spot-d3-1-vidgelmir.jpeg",
          origin: "約西元 900 年火山噴發形成，藏在 Hallmundarhraun 熔岩原地下，全長約 1.58 公里，最高處達 15.8 公尺。",
          highlights: "熔岩牆面色彩斑斕，遍佈熔岩鐘乳石與石筍；洞裡曾出土維京時代的骨骼與珠寶飾品（現存冰島國家博物館）；冬季洞內還會長出晶瑩冰柱與冰石筍。",
          tips: "必須參加導覽進洞（Cave Explorer 約 1.5 小時）；成人約 7,500 ISK，7–15 歲約 4,000 ISK，7 歲以下免費；現場提供安全帽與頭燈，洞內鋪設木棧道，常年約 2°C，備好帽子手套。"
        },
        {
          name: "熔岩瀑布 Hraunfossar（含兒童瀑布 Barnafoss）",
          sub: "從玄武岩裂縫湧出的千層絲絹",
          image: "iceland_assets/images/spot-d3-2-hraunfossar.jpeg",
          origin: "朗格冰原（Langjökull）的融雪冷泉滲入熔岩田，從約 900 公尺長的黑色岩壁裂縫湧出，匯入 Hvítá 冰川河中。",
          highlights: "成百上千道乳白色細流滑過黑色玄武岩，匯成極其夢幻的蒂芬妮藍河面；沿步道往上游步行約 5 分鐘為兒童瀑布（Barnafoss），水勢洶湧，流傳著兩個孩子的淒美傳說。",
          tips: "景點免費參觀；停車場旁觀景台步行 1 分鐘即達；設有咖啡廳與付費洗手間（約 1,000 ISK）；停車場可能收費（備好 Parka 或 EasyPark）；停留 45–60 分鐘；從 Borgarnes 走 50 號轉 518 號公路。"
        },
        {
          name: "Sturlureykir 溫泉冰島馬場",
          sub: "五步態純種馬 ＆ 地熱蒸氣烘烤黑麥麵包",
          image: "iceland_assets/images/spot-d3-3-sturlureykir.jpeg",
          origin: "家族世代經營的傳統純種馬場，位在 518 號公路旁，距離 Deildartunguhver 與 Krauma 僅約 5 分鐘車程。",
          highlights: "可進馬廄梳理、撫摸、親自餵食溫馴可愛的冰島馬，聽馬主解說純正血統與獨特五種步態（含 Tölt）；更可品嚐利用天然地熱蒸氣慢烤 24 小時的自製裸麥黑麵包搭配奶油現吃。",
          tips: "農場參觀加麵包品嚐約 45–60 分鐘，成人約 2,500–3,000 ISK；騎馬體驗約 11,000–12,000 ISK 起（需預約）；冬季名額有限，出發前先確認或 Email 預約。"
        },
        {
          name: "Krauma 地熱浴場",
          sub: "歐洲最大湧泉 Deildartunguhver 旁之現代精品溫泉",
          image: "iceland_assets/images/spot-d3-4-krauma.webp",
          origin: "引入歐洲出水量最大地熱湧泉 Deildartunguhver（97–100°C 沸水），混入曾為冰川之 Okjökull 冰涼純淨雪泉水，精準調配出舒適宜人的泡湯水溫。",
          highlights: "設有 5 座不同溫度的天然熱水池與 1 座 5–8°C 極致冷水池，另備有地熱蒸氣室、紅外線桑拿烤箱，以及配備真火燃木壁爐的景觀放鬆室；池水採快速流動循環保持純淨。",
          tips: "每日營業 11:00–21:00；成人約 6,500–7,500 ISK，建議先線上訂票預約時段；入池前務必先全身淋浴潔淨；現場可租借浴巾、泳裝與浴袍。"
        }
      ]
    },
    {
      dayNumber: 4,
      date: "1/25",
      weekday: "一",
      title: "Reykholt → 斯奈山南岸 → 格倫達菲厄澤",
      region: "斯奈山半島 Snæfellsnes",
      driveInfo: "3.0 hrs・180 km",
      morningSchedule: "退房出發 → Ytri Tunga 金黃海豹沙灘",
      afternoonSchedule: "孤絕黑色木造 Búðir 教堂 → 穿越山脈抵達草帽山小鎮住宿",
      nightSchedule: "自煮晚餐 ＋ 等待極光 ＋ 充足休息",
      isFlightDay: false,
      tags: ["野生海豹", "黑教堂", "草帽山窗景", "洗衣烘衣日"],
      mapUrl: "https://maps.app.goo.gl/C8nQEGttxNBcFmSH7",
      mapImage: "iceland_assets/images/map-day-4.jpeg",
      accommodation: {
        name: "Two bathrooms Free parking Beds for 9 pers",
        address: "Grundargata 43, Grundarfjörður",
        specs: "3 房 2 衛・窗景正對草帽山（Kirkjufell）・2 洗 2 烘",
        notes: "附 2 台洗衣機與 2 台烘衣機，此為整趟旅程最佳衣物洗烘據點（連住 2 晚）"
      },
      tips: [
        "退房後啟程，若需補充生鮮食材可繞經 Borgarnes 的 Bónus 超市買足。",
        "終點 Grundarfjörður 小鎮上僅有小超市 Kjörbúðin，品項較少且打烊早。",
        "海豹沙灘於乾潮退潮時段較易觀察到海豹，停車收費約 1,000 ISK。",
        "進入斯奈山半島山區前，務必隨時查詢 Safetravel 最新路況通報。"
      ],
      spots: [
        {
          name: "海豹沙灘 Ytri Tunga",
          sub: "斯奈山半島南岸的野生港海豹棲息地",
          image: "iceland_assets/images/spot-d4-1-ytri-tunga.jpeg",
          origin: "Ytri Tunga 為斯奈山半島南岸的一處農場，門前的海岸礁石與金色海藻灘是野生港海豹的休憩樂園，退潮時成群海豹會爬上岩礁曬太陽，是冰島少數能近距離觀察野生海豹的地點。",
          highlights: "海豹懶洋洋趴在黑色熔岩礁與海藻上，有的翻身仰躺、有的抬頭好奇望著遊客；背襯藍色海灣與白雪遠山，攜帶長焦鏡頭可捕捉絕美生動畫面。",
          tips: "停車約 650–1,000 ISK（checkit.is 或現場機台繳納，依現場告示）；退潮時較易看見，數量隨潮汐天候而變，冬季不保證全數出現；停留約 30–45 分；請保持安全距離、輕聲細語，切勿靠近或餵食；礁岩濕滑務必穿著防滑靴。"
        },
        {
          name: "黑教堂 Búðakirkja",
          sub: "荒原雪嶺之間的黑色木造傳奇教堂",
          image: "iceland_assets/images/spot-d4-2-budakirkja.png",
          origin: "最早建於 1703 年，現存木造教堂落成於 1848 年；外牆特別塗佈黑色焦油以抵禦強烈海風與潮濕鹽霧，如今成為斯奈山半島最著名、最具孤絕美感的地標。",
          highlights: "全黑的木造外牆鑲嵌白色窗框與典雅小門，強烈色彩對比襯托著白雪覆蓋的 Búðahraun 熔岩原；旁邊有座寧靜小墓園，晴朗時遠方斯奈菲爾冰川（Snæfellsjökull）清晰可見。",
          tips: "免費參觀外觀；教堂內部無暖氣、無洗手間，通常不對外開放；停留 20–30 分；沿海空曠風勢極大，開關車門務必雙手抓緊，拍照穿著防風防寒。"
        }
      ]
    },
    {
      dayNumber: 5,
      date: "1/26",
      weekday: "二",
      title: "格倫達菲厄澤 ↔ 斯奈山半島巡禮（當天往返）",
      region: "斯奈山半島 Snæfellsnes",
      driveInfo: "2.0 hrs・125 km",
      morningSchedule: "教會山（草帽山）拍照、Kirkjufellsfoss 瀑布、隱密玄武岩 Svöðufoss 瀑布",
      afternoonSchedule: "紅頂 Ingjaldshóll 教堂、Arnarstapi 巨人石像海蝕洞、Lóndrangar 海蝕巨柱",
      nightSchedule: "自煮晚餐 ＋ 把握洗烘衣機全面洗衣 ＋ 充足休息",
      isFlightDay: false,
      tags: ["草帽山", "玄武岩壁瀑布", "海蝕洞奇觀", "巨石柱"],
      mapUrl: "https://maps.app.goo.gl/TDWiXPDqowiaksLj8",
      mapImage: "iceland_assets/images/map-day-5.jpeg",
      accommodation: {
        name: "Two bathrooms Free parking Beds for 9 pers",
        address: "Grundargata 43, Grundarfjörður",
        specs: "連住第 2 晚・正對草帽山窗景",
        notes: "連住第 2 晚，今晚利用 2 洗 2 烘將衣物全面洗烘乾淨，為後半段行程準備"
      },
      tips: [
        "草帽山（Kirkjufell）每年 9/1–翌年 6/15 全面禁止攀登，遊客只走山腳步道。",
        "沿海懸崖區（Arnarstapi、Lóndrangar）停車時車頭務必迎風，開關車門雙手抓穩。",
        "瀑布步道周邊冬季嚴重結冰，全員請務必穿上簡易冰爪；瀑布旁停車約 1,000 ISK。"
      ],
      spots: [
        {
          name: "教會山（草帽山）Kirkjufell 與 Kirkjufellsfoss",
          sub: "格倫達菲厄澤旁的經典箭頭峰",
          image: "iceland_assets/images/spot-d5-1-kirkjufell.jpeg",
          origin: "Kirkjufell 意為「教會山」，海拔約 463 公尺，孤立在峽灣海岸旁；尖錐形山峰酷似草帽也如箭頭，是冰島最常入鏡的神山，亦為《冰與火之歌》中的箭頭山（Arrowhead Mountain）。",
          highlights: "山前的 Kirkjufellsfoss 為多段清澈小瀑布，冬季半結冰呈幽藍絲絹；日出日落時天空染成粉紫色，山、瀑布與白雪同框入鏡是全球攝影家的夢幻構圖。",
          tips: "草帽山 9/1–6/15 禁止攀登，僅可在山底與瀑布步道觀賞；瀑布旁停車約 1,000 ISK（EasyPark 繳納，設有車牌監控），山下小鎮側小停車場免費；步道結冰務必套冰爪；停留 30–45 分。"
        },
        {
          name: "紅色教堂 Ingjaldshóll",
          sub: "斯奈山半島西側的紅頂白牆經典教堂",
          image: "iceland_assets/images/spot-d5-2-ingjaldsholl.jpeg",
          origin: "坐落於 Hellissandur 附近的坡地之上，現存建築落成於 1903 年；該區域在冰島古歷史上名聲顯赫，相傳探險家哥倫布曾於 1477 年到訪此地收集航海情報。",
          highlights: "雪白外牆配鮮紅屋頂，孤傲矗立於開闊雪原之上，背景為斯奈菲爾雪山冰川；從筆直長路的盡頭望向教堂，構圖縱深極佳，天候陰鬱時紅頂更顯醒目震撼。",
          tips: "以外觀拍照為主，冬季內部多半不對外開放；停留約 15–20 分鐘；路面積雪結冰時請放慢車速，停車時切勿阻擋進出便道。"
        },
        {
          name: "玄武岩瀑布 Svöðufoss",
          sub: "Ólafsvík 附近的柱狀節理玄武岩峭壁瀑布",
          image: "iceland_assets/images/spot-d5-3-svodufoss.webp",
          origin: "Svöðufoss 隱身於 Ólafsvík 鄰近山谷，融雪水源自一整面工整壯麗的柱狀節理玄武岩壁頂端奔瀉而下，落差約 10 公尺；熔岩緩慢冷卻收縮裂成多角形石柱，構成這面雄奇岩壁。",
          highlights: "黝黑工整的玄武岩石柱襯著四周皚皚白雪，水流自中央深谷躍下，冬季兩側常凝結垂掛晶瑩冰柱；沿著前方木棧道眺望層次分明，遠觀整體氣勢尤為磅礡。",
          tips: "停車場免費開放；自停車場步行木棧道約 5 分鐘即達，步道結冰濕滑需穿冰爪；停留約 20–30 分鐘；寒冬瀑布水氣極大易凝結冰霜，切勿過度貼近瀑布底部。"
        },
        {
          name: "巨人石像 Arnarstapi",
          sub: "守護斯奈山半島的半人半神石砌雕像",
          image: "iceland_assets/images/spot-d5-4-arnarstapi.jpeg",
          origin: "石像紀念傳說中斯奈菲爾半島的守護神 Bárður Snæfellsás（半人半巨人傳奇），其史詩載於古代冰島傳說《Bárðar saga》；由冰島雕刻大師 Ragnar Kjartansson 以巨大石塊層層堆砌而成，高達約 9 公尺。",
          highlights: "粗獷巨石堆疊的身軀長滿歲月青苔，背襯白雪皚皚的山脈，尺度宏大極具神話威嚴；繞行至側面可近觀石塊巧妙嵌合的工法。",
          tips: "免費參觀，停車場即在 Arnarstapi 小港旁；停留 20–30 分鐘；順著海岸景觀木棧道漫步可抵達 Gatklettur 著名天然海蝕拱門；海風猛烈，走在懸崖棧道上務必步步為營。"
        },
        {
          name: "海蝕巨柱 Lóndrangar",
          sub: "斯奈山半島南岸拔海而起的玄武岩古岩頸",
          image: "iceland_assets/images/spot-d5-5-londrangar.jpeg",
          origin: "Lóndrangar 為遠古火山噴發後殘留的硬質玄武岩漿管道通道（火山栓），周遭鬆軟岩層經大西洋巨浪千百年劇烈沖蝕殆盡，留下兩根黑色巨柱，高分別約 75 與 61 公尺。",
          highlights: "兩座宛若中世紀暗黑古堡尖塔的海蝕巨岩雄峙於峭壁邊陲，厚實苔蘚熔岩原一路蔓延至波濤洶湧的海岸；遠方白色 Malarrif 燈塔同框入鏡，驚濤拍岸濺起白色雪浪，氣象萬千。",
          tips: "自 Malarrif 遊客中心附近的景觀木棧道遠眺即可，切勿靠近陡峭脆弱崖邊；停留 20–30 分鐘；強勁海風極大，開關車門雙手緊抓；岩柱嚴禁攀爬。"
        }
      ]
    },
    {
      dayNumber: 6,
      date: "1/27",
      weekday: "三",
      title: "格倫達菲厄澤 → Costco 補給 → Selfoss 湖景木屋",
      region: "西部至南部門戶",
      driveInfo: "3.5 hrs・250 km",
      morningSchedule: "退房出發 → 途經 Borgarnes 品嚐知名電影取景肉桂捲",
      afternoonSchedule: "Costco Iceland 大採買（營業 10:00–21:00）→ 抵達 Selfoss 湖景木屋入住",
      nightSchedule: "晚餐 ＋ 私人別墅 Hot tub 泡湯與桑拿 ＋ 等待極光 ＋ 充足休息",
      isFlightDay: false,
      tags: ["長途移動日", "後半程物資採買", "私人溫泉浴池", "桑拿烤箱"],
      mapUrl: "https://maps.app.goo.gl/GkLPr4FMAVue4WPh9",
      mapImage: "iceland_assets/images/map-day-6.jpeg",
      accommodation: {
        name: "Cozy Cabin with Hot Tub & Sauna",
        address: "Selfoss / Veiðilundur 湖景渡假區",
        specs: "2024 年全新建造・私人戶外地熱 Hot Tub・室內獨立桑拿房 (Sauna)",
        notes: "湖畔開闊環境，無光害極光絕佳觀賞地（連住 2 晚）"
      },
      tips: [
        "本日為長途移動日（約 250 km），請早點出發保持充裕行車時間。",
        "Costco Iceland 採買重點：買齊未來 5–6 天南岸偏遠路段所需食材（生鮮肉品最後拿，結帳後馬上裝袋保溫防凍）。",
        "酒精飲料只能在國營專賣店 Vínbúðin 購買，平日通常 18:00 前打烊，請提早安排。"
      ],
      spots: [
        {
          name: "Geirabakarí 烘焙坊",
          sub: "《白日夢冒險王》電影經典取景咖啡館",
          image: "iceland_assets/images/spot-d6-1-geirabakari.webp",
          origin: "電影《白日夢冒險王》（2013）拍攝地：主角華特抵達冰島後一邊吃點心一邊與客服通電話的「Papa John's 披薩店」，即劇組將這家烘焙坊精心改裝而成，店內至今保留珍貴電影劇照與拍攝花絮。",
          highlights: "招牌現烤北歐肉桂捲（Kanilsnúðar）外酥內濕潤、肉桂香氣濃郁，淋上巧克力醬或糖霜，搭配滾燙黑咖啡絕配；大片落地窗正對博爾加峽灣與對岸雪白群山。",
          tips: "座落於 1 號環島公路旁，設有免費寬敞停車場與乾淨洗手間，是長途公路旅行的最佳休憩補給點；清晨 07:00 起營業；停留 30–45 分鐘。"
        },
        {
          name: "Costco Iceland 大採買（營業 10:00–21:00）",
          desc: "價格親民齊全的批發商場，一次買齊南岸偏遠地區難以補給的優質生鮮食材（牛排、羊排、火鍋料、雞蛋、泡麵乾糧與水果）。"
        },
        {
          name: "入住 Selfoss 湖景別墅享受私人 Hot Tub 泡湯與桑拿",
          desc: "在極致嚴寒的冰島冬夜，泡在天然滾燙的戶外熱水浴池中，仰望滿天星斗甚至極光舞動，舒緩旅途疲憊。"
        }
      ]
    },
    {
      dayNumber: 7,
      date: "1/28",
      weekday: "四",
      title: "Selfoss ↔ 黃金圈精華四大奇景（當天往返）",
      region: "黃金圈 Golden Circle",
      driveInfo: "2.5 hrs・190 km",
      morningSchedule: "辛格韋德利國家公園（板塊交界世界遺產）、藍色瀑布 Brúarfoss",
      afternoonSchedule: "史托克間歇泉 Strokkur 噴發奇觀、黃金瀑布 Gullfoss",
      nightSchedule: "自煮晚餐 ＋ 木屋泡 Hot tub ＋ 守候極光 ＋ 充足休息",
      isFlightDay: false,
      tags: ["世界遺產", "板塊大裂谷", "高頻間歇泉", "雙層黃金大瀑布"],
      mapUrl: "https://maps.app.goo.gl/uWBRneFTkuDSVJc68",
      mapImage: "iceland_assets/images/map-day-7.jpeg",
      accommodation: {
        name: "Cozy Cabin with Hot Tub & Sauna",
        address: "Selfoss / Veiðilundur 湖景渡假區",
        specs: "連住第 2 晚・私人戶外 Hot Tub ＆ 桑拿房",
        notes: "當天往返無須搬行李，傍晚可於木屋享受自煮大餐與熱水池"
      },
      tips: [
        "黃金圈各景點人潮眾多，步道嚴重結冰濕滑，請全員備妥簡易冰爪穿戴行進。",
        "Gullfoss 與 Geysir 遊客中心設施齊備，可品嚐熱羊肉湯並採買特色羊毛伴手禮。",
        "今晚晚餐食材可於回程順路在 Selfoss 市區超市（Krónan 或 Bónus）補足。"
      ],
      spots: [
        {
          name: "辛格韋德利國家公園 Þingvellir National Park",
          sub: "歐亞與北美板塊交界裂谷 ＆ 古老議會舊址",
          image: "iceland_assets/images/spot-d7-1-thingvellir.jpeg",
          origin: "西元 930 年冰島人在此成立世界上最早的議會之一 Alþingi，2004 年列入聯合國世界文化遺產；公園橫跨於歐亞大陸板塊與北美洲板塊張裂交界處，兩大板塊每年以約 2 公分速度持續拉開。",
          highlights: "漫步進入宏偉的 Almannagjá 巨石隘口，親身行走在兩大洲板塊裂谷縫隙之間；法律石（Lögberg）為古維京宣讀法典集會之所；園區內更有白雪環抱的 Öxarárfoss 瀑布。",
          tips: "入園免費，P1、P2、P5 停車場收費（小客車約 1,000 ISK，付費一次當天三處停車場通用，由 Parka 繳納）；園區全年 24 小時開放；完整步道漫遊約 2–3 小時；步道積雪結冰務必穿上冰爪。"
        },
        {
          name: "藍色瀑布 Brúarfoss（備用推薦景點）",
          sub: "冰川融水染成的夢幻蒂芬妮乳藍絲絹",
          image: "iceland_assets/images/spot-d7-2-bruarfoss.jpeg",
          origin: "水源來自朗格冰川（Langjökull）純淨融水，含有豐富冰川粉末與微量礦物質，呈現極具魔幻質感的純淨乳藍色；Brúar 在冰島語中意為「橋」，相傳 17 世紀此處天然石拱橋曾因歷史變故坍塌。",
          highlights: "無數條深淺不一的細小雪白水道匯聚成經典 U 形瀑布，墜落匯入中央深邃的黑色火山玄武岩裂谷，冰川藍水與黑岩對比強烈；河谷上方鋪設全新木製人行木橋，是拍照絕佳視角。",
          tips: "導航至新建 Brúarfoss Parking，沿平緩碎石新步道步行約 5–10 分鐘即達；停車費約 750 ISK＋系統服務費 86 ISK（以 Parka App 繳納，含 4 小時停留，超時每小時加收 2,000 ISK）；現場無洗手間與垃圾桶；岩石潮濕結冰，切勿太靠近河岸。"
        },
        {
          name: "史托克間歇泉 Strokkur Geyser",
          sub: "Haukadalur 地熱區高頻爆發的滾燙沸泉水柱",
          image: "iceland_assets/images/spot-d7-3-strokkur.png",
          origin: "冰島最為活躍的高頻噴發間歇泉，約每 4–10 分鐘便劇烈噴發一次；鄰近古老的大蓋錫爾間歇泉（Geysir）目前已停止定期噴發，Strokkur 因而成為整個地熱谷最具人氣的主角。",
          highlights: "噴發前地表水面會先劇烈翻騰凹陷形成巨大藍色水泡，隨後以雷霆萬鈞之勢將滾燙沸水柱直衝雲霄 15–20 公尺（歷史最高紀錄達 40 公尺）；地表熱泉水溫約 90–95°C，地下深處甚至達 130°C。",
          tips: "園區全年 24 小時開放、免收門票；大停車場收費約 1,000 ISK（Parka 繳費）；地下水溫極高，務必嚴格留在安全圍欄之內以防燙傷意外；對面遊客中心規模大，可購買羊毛伴手禮。"
        },
        {
          name: "黃金瀑布 Gullfoss Waterfall",
          sub: "雙層奔騰跌入深谷之黃金圈壓軸巨瀑",
          image: "iceland_assets/images/spot-d7-4-gullfoss.png",
          origin: "源自朗格冰原的 Hvítá 冰川河在此分兩層奔騰落下。20 世紀初曾有外資財團企圖收購興建水力發電廠，當地女性先驅 Sigríður Tómasdóttir 誓死護水抗議，瀑布天然原始風貌方得以完整保留至今。",
          highlights: "雙層瀑布落差分別約 11 公尺與 21 公尺，總高約 32 公尺，磅礡墜入深達 70 公尺的玄武岩深谷；冬日水霧凝結成龐大幽藍冰雕景觀，雪景水勢交融極具磅礡魄力。",
          tips: "全年 24 小時開放、免門票，停車費各來源不一（現場依最新告示牌以 App 繳納約 750 ISK）；上層觀景台緊鄰遊客中心好走，下層步道冬季常因嚴重結冰結霜封閉；遊客中心供應熱羊肉湯。"
        }
      ]
    },
    {
      dayNumber: 8,
      date: "1/29",
      weekday: "五",
      title: "Selfoss → 兩大瀑布 → 教堂鎮",
      region: "南岸瀑布群 South Coast",
      driveInfo: "2.5 hrs・200 km",
      morningSchedule: "退房啟程 → 水濂洞塞里雅蘭瀑布（Seljalandsfoss）",
      afternoonSchedule: "攀登 527 階抵達斯科加爾瀑布（Skógafoss）頂端觀景台 → 經 Vík 補給 → 抵達教堂鎮住宿",
      nightSchedule: "自煮晚餐（煮湯麵火鍋）＋ 守候極光 ＋ 充足休息",
      isFlightDay: false,
      tags: ["水濂洞瀑布", "彩虹巨瀑", "關鍵大補給日", "黑沙灘前哨"],
      mapUrl: "https://maps.app.goo.gl/GsAg2cGENyhGNQLB8",
      mapImage: "iceland_assets/images/map-day-8.jpeg",
      accommodation: {
        name: "The Holiday Houses by Stay in Iceland",
        address: "教堂鎮（Kirkjubæjarklaustur）以西山坡",
        specs: "獨棟景觀小木屋・簡易廚房（無烤箱，適合煮熱湯麵或火鍋）",
        notes: "座落於高地開闊山坡，視野極佳，為進入冰河湖區域的重要前哨站"
      },
      tips: [
        "【關鍵補給日】：教堂鎮至冰河湖沿途完全沒有大超市，僅有高價加油站小店，出發前務必在 Selfoss（或途中 Vík 的 Krónan 超市）買齊未來 2–3 天食材與飲水。",
        "瀑布周圍水霧極大，請穿上防風防水衝鋒外套褲與簡易冰爪，相機鏡頭備好乾拭布。",
        "出發前請再次透過 Safetravel 與 Road.is 檢查 1 號環島公路南段風速與路面結冰狀況。"
      ],
      spots: [
        {
          name: "塞里雅蘭瀑布 Seljalandsfoss",
          sub: "可繞行至水幕後方的經典水濂洞瀑布",
          image: "iceland_assets/images/spot-d8-1-seljalandsfoss.jpeg",
          origin: "落差約 60 公尺，水源來自 Seljalandsá 河，上游連通著 Eyjafjallajökull 冰川；崖壁底部向內深凹，水流直瀉而下形成一條可繞至瀑布水幕後方的步道空間。",
          highlights: "從水幕後方由內向外眺望南岸平原是冰島最經典的攝影視角；歌手賈斯汀・比伯《I'll Show You》MV 曾在此步道取景；順著步道往旁步行約 10 分鐘，還有一座隱身於岩隙內的秘境瀑布 Gljúfrabúi。",
          tips: "冬季瀑布後方步道常因步道嚴重結厚冰而封閉，請依現場告示牌為準；水霧極大，務必穿著防水外套與簡易冰爪；停留 30–45 分鐘；停車約 1,000 ISK（現場機台或 checkit.is 繳費）。"
        },
        {
          name: "斯科加爾瀑布 Skógafoss",
          sub: "南岸最寬闊雄偉的巨幅白色水幕",
          image: "iceland_assets/images/spot-d8-2-skogafoss.jpeg",
          origin: "寬約 25 公尺、落差高達 60 公尺，水源 Skógá 河來自 Eyjafjallajökull 冰川；民間傳說最早的維京移民首領 Þrasi 曾將一整箱寶藏藏進瀑布後方的深邃岩洞之中。",
          highlights: "沿著瀑布旁側修建的 527 階木梯登上懸崖頂端觀景台，俯瞰瀑布縱身躍入南岸平原注入大西洋；晴日下瀑布激起的水霧常映出美麗雙彩虹；《白日夢冒險王》與《雷神索爾 2》均曾在此取景。",
          tips: "水霧瀰漫，務必穿著防水外套；木階梯與瀑布前方地面極易結冰，請備妥冰爪；停車收費約 1,000 ISK（Parka App 繳費）；停留 30–45 分鐘；下午續往維克鎮（Vík）進行超市與紀念品補給後開往教堂鎮。"
        },
        {
          name: "維克熔岩秀（備選行程）",
          desc: "若遇南岸強風大雨天候不佳，可在途經維克（Vík）時購票體驗室內真實熔岩秀，近距離感受 1100°C 岩漿高溫與冷卻過程。"
        }
      ]
    },
    {
      dayNumber: 9,
      date: "1/30",
      weekday: "六",
      title: "教堂鎮 → 熔岩苔原 → 羽毛峽谷 → 斷橋 → 小冰河湖",
      region: "東南峽谷與冰川前緣",
      driveInfo: "2.5 hrs・200 km",
      morningSchedule: "Eldhraun 熔岩苔原景觀、探訪權力遊戲取景地羽毛峽谷 Fjaðrárgljúfur",
      afternoonSchedule: "Skeiðará 斷橋紀念碑 → Fjallsárlón 寧靜小冰河湖",
      nightSchedule: "自煮晚餐 ＋ 連住 2 晚不搬行李 ＋ 等待極光 ＋ 充足休息",
      isFlightDay: false,
      tags: ["火星苔原", "權力遊戲峽谷", "冰川洪水遺址", "連住2晚"],
      mapUrl: "https://maps.app.goo.gl/NyTLmXirpXkECQ3P9",
      mapImage: "iceland_assets/images/map-day-9.jpeg",
      accommodation: {
        name: "The Potato Storage",
        address: "Svínafell 1, Skaftafell 地區",
        specs: "現代化高質感公寓式渡假屋・連住 2 晚",
        notes: "連住 2 晚・距明日冰川健行集合點僅 10–15 分鐘車程，免去行李搬遷勞頓"
      },
      tips: [
        "羽毛峽谷步道冬季積雪結冰嚴重，全員必須在停車場套上簡易冰爪再出發；停車約 1,000 ISK。",
        "峽谷頂端風勢強烈，務必戴妥防風保暖帽與手套；嚴格遵守現場告示留在步道與觀景台。",
        "Eldhraun 熔岩原生態極脆弱，苔蘚生長需百年以上，【嚴禁踏入或踩踏苔原】，只在步道觀賞。",
        "Skeiðará 斷橋位於開闊火山沙原，強陣風威力驚人，開車門雙手握緊門把。"
      ],
      spots: [
        {
          name: "Eldhraun 熔岩苔原",
          sub: "鋪滿厚實地衣苔蘚的南岸龐大熔岩原",
          image: "iceland_assets/images/spot-d9-1-eldhraun.jpeg",
          origin: "1783–1784 年拉基火山（Laki）毀滅性裂隙噴發，熔岩漫流鋪出約 565 平方公里的巨大熔岩原，是人類史上最大規模的熔岩流之一；歷經數百年雨雪滋養，被厚厚灰綠色毛茸苔蘚覆蓋。",
          highlights: "軟綿綿的厚苔蘚宛如綠色地毯鋪滿黑色岩塊，冬季覆雪後呈現綠、黑、白交錯的超現實畫面；1960 年代美國阿波羅太空人曾專程來此進行登月地質訓練，模擬月球荒涼地貌。",
          tips: "苔蘚生長極慢，踩踏破壞需數十年方能復原，請只走在木棧道或觀景台，【嚴禁踏入苔原】；停留 15–30 分鐘；公路旁停車點冬季常有暗冰，下車請先踏實確認地面。"
        },
        {
          name: "羽毛峽谷 Fjaðrárgljúfur",
          sub: "冰川融水千百年深切出的蜿蜒絕美峽谷",
          image: "iceland_assets/images/spot-d9-2-fjadrargljufur.jpeg",
          origin: "峽谷長約 2 公里、深達 100 公尺，由 Fjaðrá 河在冰河時期結束後長年劇烈切割沖蝕而成，柔和起伏的峭立岩壁與彎曲蜿蜒的河道為其最鮮明的標誌特徵。",
          highlights: "沿著峽谷邊緣修建的景觀步道漫步至觀景台，俯瞰清澈河流如藍帶般蜿蜒切入黑色玄武岩深谷；歌手賈斯汀・比伯《I'll Show You》MV 曾在此懸崖頂端取景，使其在全球爆紅。",
          tips: "冬季步道積雪結冰，全員務必穿上簡易冰爪；峽谷頂端強風呼嘯，戴好防風毛帽與手套；依現場告示只在步道與觀景台上活動；停留 1–1.5 小時；停車約 1,000 ISK（Parka 繳費，設有車牌辨識監控）。"
        },
        {
          name: "Skeiðará 斷橋紀念碑 Skeiðará Bridge Monument",
          sub: "見證冰川洪水泥石流毀滅力量的扭曲鋼樑",
          image: "iceland_assets/images/spot-d9-3-skeidara.jpeg",
          origin: "Skeiðará 橋落成於 1974 年，是冰島環島 1 號公路全線貫通的最後一道關鍵工程；1996 年格里姆火山（Grímsvötn）冰下大噴發引發驚人冰川洪水泥石流，滔天洪流將鋼橋硬生生扭斷沖垮，殘存鋼樑保留為歷史紀念地標。",
          highlights: "被巨力扭曲變形的龐大鋼樑橫臥在蒼茫雪原之上，旁邊設有詳細地質解說牌，背景是浩瀚壯闊的瓦特納冰原（Vatnajökull）與雪峰，讓人直觀感受大自然毀天滅地的威力。",
          tips: "路旁設有小型停車場，停留約 10–15 分鐘；火山沖積沙原風勢劇烈，開關車門務必雙手抓緊；冬季周邊地面常有黑冰，走近殘骸時請放慢腳步。"
        },
        {
          name: "小冰河湖 Fjallsárlón",
          sub: "安寧幽靜、緊貼冰舌的冰川潟湖",
          image: "iceland_assets/images/spot-d9-4-fjallsarlon.jpeg",
          origin: "Fjallsárlón 坐落於厄賴法耶庫德火山（Öræfajökull）山腳下，由瓦特納冰原的出口冰舌 Fjallsjökull 後退留下的水域形成，距離著名大冰河湖約 10 公里，湖面規模較小但冰川離岸邊更近。",
          highlights: "巨大蔚藍的冰舌直接傾瀉落入湖面，縱橫交錯的裂隙冰牆就在眼前震撼矗立；相較大冰河湖這裡遊客少許多，可靜靜聆聽浮冰裂開落入湖水的微響，拍照清幽純粹。",
          tips: "湖邊碎石步道冬季濕滑結冰，請備妥冰爪；切勿過度靠近水邊，【嚴禁攀爬浮冰】；西側停車場約 1,000 ISK（Parka 繳納），東側大停車場免費；建議停留 40–50 分鐘。"
        }
      ]
    },
    {
      dayNumber: 10,
      date: "1/31",
      weekday: "日",
      title: "冰河湖附近 ↔ 冰川健行＋藍冰洞＋冰河湖巡禮",
      region: "瓦特納冰川與傑古沙龍",
      driveInfo: "1.5 hrs・100 km",
      morningSchedule: "參加專業冰川嚮導團：探索純天然水晶藍冰洞＋瓦特納冰川健行",
      afternoonSchedule: "傑古沙龍冰河湖（Jökulsárlón）浮冰巡禮、漫步黑沙灘撿拾冰晶鑽石",
      nightSchedule: "回房洗熱水澡放鬆 ＋ 火鍋大餐 ＋ 守候極光 ＋ 充足休息",
      isFlightDay: false,
      tags: ["整趟高潮", "天然水晶藍冰洞", "冰川健行", "黑沙灘鑽石碎冰"],
      mapUrl: "https://maps.app.goo.gl/7MaMzrc8goiMFiwg6",
      mapImage: "iceland_assets/images/map-day-10.jpeg",
      accommodation: {
        name: "The Potato Storage",
        address: "Svínafell 1, Skaftafell 地區",
        specs: "連住第 2 晚",
        notes: "體力消耗大的一天，結束後快速回到溫暖木屋洗熱水澡放鬆"
      },
      tips: [
        "本日為整趟冰島之行最高強度體能活動日，前一晚早睡確保充沛體力。",
        "冰川健行著硬底高筒登山鞋（便於扣上專業冰爪）、多層次排汗保暖防風防寒衣物，隨身帶保溫瓶裝熱水與換洗衣物。",
        "今日三餐使用 1/29 在 Selfoss 預先備妥的食材烹調，無需在偏遠地區尋找餐館。",
        "鑽石沙灘海浪極度危險（瘋狗浪），觀賞黑沙灘上的晶瑩碎冰塊時，【切勿背對大海】，絕不可冒險爬上浮冰！"
      ],
      spots: [
        {
          name: "天然水晶藍冰洞 Crystal Ice Cave",
          sub: "深入瓦特納冰川底下的幽藍幻境",
          image: "iceland_assets/images/spot-d10-1-ice-cave.jpeg",
          origin: "每年夏季冰川融水在冰原深處沖刷出隧道，冬季水退後留下天然冰洞；厚重冰層受壓緊實、氣泡極少，光線穿透時吸收紅光，散射出深邃純淨的幽藍色。冰洞每年形狀與位置皆不相同，僅約 11 月至翌年 3 月開放。",
          highlights: "頭頂如凝固海浪般的純淨水晶藍色冰壁是整趟旅程最大亮點；鄰近的 Svínafellsjökull 冰川更為電影《星際效應》曼恩星球與《蝙蝠俠：開戰時刻》的著名取景地。",
          tips: "必須跟隨當地專業嚮導團，【嚴禁自行進入冰川冰洞】；抓地冰爪與安全帽通常由嚮導公司提供；冰洞狀況每天依氣溫水位判定，行前務必確認集合時間；前一晚早睡、備好保暖與換洗衣物。"
        },
        {
          name: "傑古沙龍冰河湖 Jökulsárlón",
          sub: "漂浮著蔚藍千年浮冰的巨大潟湖",
          image: "iceland_assets/images/spot-d10-2-jokulsarlon.jpeg",
          origin: "Breiðamerkurjökull 冰舌後退，約自 1935 年起逐漸形成這座巨大潟湖，並隨冰川融蝕持續擴大；湖水深達約 250 公尺，是冰島最深的第一大湖泊。",
          highlights: "無數龐大如幽藍寶石的冰山在湖面悠悠漂浮，部分順著短短的 Jökulsá 河緩緩漂入大西洋；冬季常可見野生海豹在浮冰間探頭呼吸；《007 首部曲》《古墓奇兵》均在此取景。",
          tips: "冬季日照極短，午後光線最美但天黑得快；湖邊風大寒冷，保暖務必做足；【嚴禁爬上浮冰】；停車約 1,000 ISK（Parka 繳費，當日有效，與對面鑽石沙灘共用同一收費，付一次即可）；停留約 1–1.5 小時。"
        },
        {
          name: "鑽石沙灘 Diamond Beach",
          sub: "大西洋黑沙灘上晶瑩剔透的冰塊鑽石",
          image: "iceland_assets/images/spot-d10-3-diamond-beach.jpeg",
          origin: "冰河湖碎裂的萬年浮冰隨 Jökulsá 河漂入大西洋，受猛烈海浪沖刷拋回黑色火山沙灘上，在黑色天鵝絨般的沙灘上晶瑩閃耀，因而得名鑽石沙灘；位置即在冰河湖對面、跨過 1 號公路另一側。",
          highlights: "冰塊的大小與造型每天隨潮水變幻莫測；日出與日落時陽光透射過冰晶，呈現橘紅與粉紫色光輝，為黃金攝影時段；部分冰塊被海水長年打磨成圓潤剔透的晶球。",
          tips: "大西洋暗湧極度危險，會無預警湧上沙灘（瘋狗浪 Sneaker Waves），【嚴禁背對大海、嚴禁爬上冰塊、切勿太靠近水線】；地面潮濕滑溜，備好冰爪；停車費與冰河湖共用（當日付一次即可）；停留 30–45 分鐘。"
        }
      ]
    },
    {
      dayNumber: 11,
      date: "2/1",
      weekday: "一",
      title: "冰河湖附近 → 維克熔岩秀 → 迪霍拉里 → 海拉",
      region: "南岸黑沙灘與海拉",
      driveInfo: "3.0 hrs・240 km",
      morningSchedule: "長途返回南岸 → 維克（Vík）享用熱熱午餐 ＋ 室內真實熔岩秀",
      afternoonSchedule: "登上海岬 Dyrhólaey 俯瞰黑沙灘與天然拱門 → 抵達海拉沿河別墅入住",
      nightSchedule: "75 吋大螢幕環繞音響看電影放鬆 ＋ 自煮晚餐 ＋ 守候極光 ＋ 休息",
      isFlightDay: false,
      tags: ["海岬俯瞰", "黑沙灘全景", "熔岩秀", "家庭影音享受"],
      mapUrl: "https://maps.app.goo.gl/DD44QEwEjxkUjHX4A",
      mapImage: "iceland_assets/images/map-day-11.jpeg",
      accommodation: {
        name: "Hella - Riverbank",
        address: "5 Þrúðvangur, Hella",
        specs: "寬敞水岸景觀住宅・配備 75 吋大電視與頂級環繞音響",
        notes: "長途跋涉後最佳休憩地，夥伴們今晚可齊聚在客廳沙發一同觀賞精彩電影，徹底放鬆身心"
      },
      tips: [
        "長途折返南岸（約 240 km），上午請早點出發保持充裕時間。",
        "維克鎮商圈齊全：可在 Krónan 補充零食乾糧，並於大型 Icewear 旗艦店挑選採買冰島羊毛手套、毛帽等伴手禮。",
        "Dyrhólaey 風速若超過 15 m/s 建議留在下層觀景台；崖頂開車門雙手握緊門把，步道備好冰爪。"
      ],
      spots: [
        {
          name: "維克熔岩秀 Lava Show Vík",
          sub: "近距離感受 1100°C 真實滾燙熔岩流動",
          image: "iceland_assets/images/spot-d11-1-lava-show.jpeg",
          origin: "2018 年在南岸門戶維克鎮開幕的震撼室內展演，使用高達約 1,100°C 的真實熔岩，在特製展間中重現火山噴發劇烈過程，由專業解說員深度講解冰島地質與火山歷史。",
          highlights: "通紅滾燙的岩漿自爐口緩緩流入展間，近距離便能感受到撲面而來的熾熱熱浪與嘶嘶聲響；整場演出約 45 分鐘，冬日嚴寒在溫暖室內欣賞最為舒適受用。",
          tips: "務必先到官網預約時段，冬季場次有限；建議安排在維克午餐前後，與 Krónan 超市及 Icewear 旗艦店補給位在同一商圈；入場前先確認報到時間。"
        },
        {
          name: "迪霍拉里 Dyrhólaey",
          sub: "可俯瞰壯闊黑沙灘的巨型海蝕拱門岬角",
          image: "iceland_assets/images/spot-d11-2-dyrholaey.jpeg",
          origin: "名字在冰島語意為「門洞之丘」，是高約 120 公尺的巨大玄武岩海岬；大西洋巨浪千萬年侵蝕出龐大天然拱門，寬闊到小船可安然穿過。",
          highlights: "站在崖頂觀景台可居高臨下俯瞰 Reynisfjara 黑沙灘一望無際的黑沙白浪與遠方雷尼斯德蘭格（Reynisdrangar）海蝕柱；《星際大戰外傳：俠盜一號》《權力遊戲》第 7 季均在此取景（海鸚夏天才有）。",
          tips: "海崖風勢極大，若風速超過 15 m/s 請留在下層觀景台；崖頂開關車門雙手務必抓緊防吹折，備妥冰爪；上層燈塔道路冬季常依天候封閉，依現場告示牌為準；停車費依現場告示以 App 繳納約 750 ISK；停留 45–60 分鐘。"
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
      nightSchedule: "收拾行李 ＋ 充足休息（明日清晨早起退房步行至航廈）",
      isFlightDay: true,
      tags: ["最後採買", "藍湖夢幻溫泉", "加滿油還車", "機場飯店零時差"],
      mapUrl: "https://maps.app.goo.gl/CSAqe86Ecy9tXtj38",
      mapImage: "iceland_assets/images/map-day-12.jpeg",
      accommodation: {
        name: "Aurora Hotel at KEF",
        address: "Blikavöllur 2, Keflavík",
        specs: "機場園區飯店・步行 2–5 分鐘直達 KEF 航廈・清晨 04:00 起供應熱早餐",
        notes: "今晚先加滿油將租賃車輛歸還，今夜收拾行李安心入睡，明日清晨從容步入航廈"
      },
      tips: [
        "藍湖溫泉（Blue Lagoon）為全球最熱門景點，必須事先在官網預約確認入場時段。",
        "藍湖泉水中富含礦物質矽泥，入池前請務必在頭髮抹滿飯店提供的免費潤髮乳（不沖掉）以防髮質乾澀，並取下項鍊、手錶等金屬飾品以防氧化發黑。",
        "還車前請於機場周邊加油站將油箱【完全加滿】，並妥善保留加油收據。",
        "尚未買足的冰島特色烈酒、海鹽與伴手禮，在 KEF 機場出境免稅店購買最齊全且直接免稅。"
      ],
      spots: [
        {
          name: "首都雷克雅維克悠閒散策",
          desc: "補逛第一天未盡興之托寧湖（Tjörnin）、市政廳、特羅姆瑟設計品店，或品嚐著名的羊肉熱狗堡（Bæjarins Beztu Pylsur）。"
        },
        {
          name: "藍湖溫泉 Blue Lagoon",
          sub: "黑色熔岩原上的夢幻乳藍色地熱仙境",
          image: "iceland_assets/images/spot-d12-1-blue-lagoon.jpeg",
          origin: "1976 年鄰近 Svartsengi 地熱發電廠排出之天然地熱海水在周圍黑色熔岩原上積聚成湖，富含二氧化矽、礦物質與微細藻類，泉水常年維持在 37–39°C 舒適水溫，光線散射呈現迷人乳藍色。",
          highlights: "冬日在皚皚白雪與熱氣蒸騰中泡湯最有北歐風情；池內提供天然白矽泥面膜與水中飲料吧台（票券含特調飲品一杯）；藍湖頂級護膚品與火山泥面膜可現場購買，KEF 免稅店亦有販售。",
          tips: "必須事先於官網預訂預約入場時段；入池前頭髮務必抹滿潤髮乳且不沖洗，取下所有金屬首飾；冬季出水瞬間極其寒冷，浴袍與大浴巾先放好；停留約 2.5–3 小時；距離 KEF 機場約 20 分鐘車程。"
        },
        {
          name: "加滿油並前往 Lotus Car Rental 順利還車",
          desc: "於機場旁加油站將油箱完全加滿，前往 Lotus 車行交車檢查，確認合約結案，輕鬆步行前往隔壁 Aurora Hotel 機場飯店入住。"
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
      nightSchedule: "2/4 12:25 抵達首爾仁川，平安歸國！",
      isFlightDay: true,
      spotsSectionHeader: "返程航班與轉機安排",
      tags: ["完滿收官", "芬蘭航空", "免稅購物", "平安歸國"],
      accommodation: {
        name: "Aurora Hotel at KEF",
        address: "Blikavöllur 2, Keflavík",
        specs: "清晨退房・步行 2–5 分鐘進入航廈出發大廳",
        notes: "租賃車輛已於昨日加滿油歸還完畢，今日無交通焦慮"
      },
      tips: [
        "班機 07:30 起飛，飯店每日清晨 04:00 起供應熱早餐，建議 05:00 用餐，05:20 步行抵達航廈進行行李託運與安檢。",
        "飯店距航廈僅步行 2–5 分鐘，沿風雨遮道或人行道步行即可達。",
        "市區退稅單（若未現場退稅），可於機場退稅櫃檯掃描或蓋章後投入專用退稅信箱。"
      ],
      spots: [
        {
          name: "07:30 KEF 起飛 → HEL 赫爾辛基（AY816，飛行 3 小時 30 分）",
          desc: "搭乘芬蘭航空客機告別冰島，航向芬蘭赫爾辛基萬塔國際機場。"
        },
        {
          name: "HEL 赫爾辛基轉機等候時光（等候 4 小時 35 分）",
          desc: "赫爾辛基機場連續獲選歐洲最舒適機場之一，可在轉機區逛嚕嚕米（Moomin）專賣店、品嚐北歐肉桂捲或於貴賓室放鬆休息。"
        },
        {
          name: "17:35 HEL 出發 → ICN 首爾仁川（AY041 Finnair，飛行約 11 小時 50 分）",
          desc: "搭乘長程寬體客機穿越歐亞大陸返回首爾。"
        },
        {
          name: "2/4 12:25 平安抵達首爾仁川國際機場（ICN）",
          desc: "圓滿結束 13 天難忘精彩的冰島冬季極光與冰雪奇蹟之旅！"
        }
      ]
    }
  ],

  // 住宿詳細清單 (7 大精選渡假屋與飯店)
  accommodations: [
    {
      nights: "1/22（第 1 晚）",
      name: "Downtown Reykjavík Apartments",
      location: "雷克雅維克市區",
      address: "Rauðarárstígur 31, 105 Reykjavík",
      specs: "4 房 2 衛・專屬免費停車位",
      features: ["專屬免費停車", "步行至主街", "完善廚房設備", "乾洗滌設施"],
      desc: "抵達冰島首晚入住，位於市區寧靜街區，附設難能可貴的專屬免費停車位，步行即可抵達購物主街與哈爾格林姆教堂。",
      link: "https://www.booking.com/hotel/is/downtown-rekjavik-apartment.zh-tw.html?aid=964694&checkin=2027-01-22&checkout=2027-01-23&dest_id=-2651804&dest_type=city&group_adults=7&group_children=0&label=hotel_details-QRmFPh%401784279093-Share-kpyT8a%401788742537-Share-P1ZS45S%401788747225&no_rooms=1&req_adults=7&req_children=0"
    },
    {
      nights: "1/23 – 1/24（連住 2 晚）",
      name: "Grímsstaðir holiday home",
      location: "Reykholt 西部郊區",
      address: "Grímsstaðir, Reykholt",
      specs: "5 房 2 衛・BBQ 設備・免費停車",
      features: ["連住 2 晚免搬遷", "開闊戶外露台", "完全無光害", "BBQ 燒烤設備"],
      desc: "位於西部銀圈核心鄉野，座落於無光害的大自然之中，大露台是守候極光與滿天銀河的絕佳舞台；5 房配置讓 7 人享有充裕舒適睡眠空間。",
      link: "https://www.booking.com/hotel/is/grimsstadir-guesthose-family-friendly.zh-tw.html?aid=964694&checkin=2027-01-23&checkout=2027-01-25&dest_id=-2646442&dest_type=city&group_adults=7&group_children=0&label=hotel_details-QRmFPh%401784279093-Share-kpyT8a%401788742537&no_rooms=1&req_adults=7&req_children=0"
    },
    {
      nights: "1/25 – 1/26（連住 2 晚）",
      name: "Two bathrooms Free parking Beds for 9 pers",
      location: "斯奈山半島 Grundarfjörður",
      address: "Grundargata 43, Grundarfjörður",
      specs: "3 房 2 衛・2 台洗衣機 ＋ 2 台烘衣機・正對草帽山",
      features: ["窗景正對草帽山", "2 洗 2 烘強大洗衣", "連住 2 晚", "小鎮中心好停車"],
      desc: "整趟旅程的最強補給與後勤中樞！客廳與臥房窗景正對草帽山（Kirkjufell），室內更罕見配備 2 台洗衣機與 2 台烘衣機，旅程中段洗烘所有衣物。",
      link: "https://www.booking.com/hotel/is/two-bathrooms-beds-for-9-pers-great-view.zh-tw.html?aid=964694&checkin=2027-01-25&checkout=2027-01-27&group_adults=7&group_children=0&label=hotel_details-ERhNq9%401784298129-Share-gID6HUH%401788752664&no_rooms=1"
    },
    {
      nights: "1/27 – 1/28（連住 2 晚）",
      name: "Cozy Cabin with Hot Tub & Sauna",
      location: "Selfoss / Veiðilundur 湖景渡假區",
      address: "Veiðilundur, Selfoss 湖畔",
      specs: "2024 新建・私人戶外地熱 Hot Tub・室內獨立桑拿 (Sauna)",
      features: ["私人地熱 Hot Tub", "室內專屬桑拿房", "湖畔清幽", "連住 2 晚黃金圈中心"],
      desc: "2024 年全新完工的高級渡假木屋，擁有私人專屬戶外滾燙熱水池與乾蒸桑拿烤箱，長途駕駛後泡湯仰望星空與極光，堪稱整趟旅程最高享受之一。",
      link: "https://www.booking.com/hotel/is/hot-tub-sauna-lake-view-2024-built-cabin.zh-tw.html?aid=964694&checkin=2027-01-27&checkout=2027-01-29&dest_id=900054849&dest_type=city&group_adults=7&group_children=0&label=room_list-KrEdQUf%401784298227-Share-gUSpxw%401788763230-Share-JPVz7c%401789367251&no_rooms=1&req_adults=7&req_children=0"
    },
    {
      nights: "1/29（第 8 晚）",
      name: "The Holiday Houses by Stay in Iceland",
      location: "教堂鎮（Kirkjubæjarklaustur）",
      address: "教堂鎮以西開闊山坡",
      specs: "獨棟景觀小木屋・簡易廚房・無烤箱",
      features: ["高地絕佳視野", "無遮蔽極光展望", "進入冰河湖前哨", "安靜溫馨"],
      desc: "座落於高地開闊山坡，視野居高臨下，為進入東南部冰河湖區域的最重要前哨休憩站，今夜最適合煮鍋熱騰騰的湯麵或火鍋溫暖身心。",
      link: "https://www.booking.com/hotel/is/the-holiday-houses-kirkjubaejarklaustur.zh-tw.html?aid=964694&checkin=2027-01-29&checkout=2027-01-30&group_adults=7&group_children=0&label=hotel_details-OAaIATP%401784298597-Share-DkgjF8%401788770467-Share-48JJVT%401789354570&no_rooms=1"
    },
    {
      nights: "1/30 – 1/31（連住 2 晚）",
      name: "The Potato Storage",
      location: "Skaftafell 冰川地區",
      address: "Svínafell 1, Skaftafell",
      specs: "現代化高質感公寓・連住 2 晚・距冰川集合點 10 分鐘",
      features: ["距冰川集合點極近", "連住 2 晚免搬家", "完善自炊廚房", "高質感北歐設計"],
      desc: "緊鄰瓦特納冰川國家公園入口與 Svínafell 冰舌，距離隔日冰川健行與藍冰洞集合點僅約 10–15 分鐘車程，免去連日搬遷行李，活動後快速返屋熱水澡。",
      link: "https://www.booking.com/hotel/is/the-potato-storage-holiday-apartments.zh-tw.html?aid=964694&checkin=2027-01-30&checkout=2027-02-01&group_adults=7&group_children=0&label=hotel_details-OAaIATP%401784298597-Share-DkgjF8%401788770467-Share-3K4rj4t%401789355137&no_rooms=1"
    },
    {
      nights: "2/1（第 11 晚）",
      name: "Hella - Riverbank",
      location: "海拉（Hella）水岸",
      address: "5 Þrúðvangur, Hella",
      specs: "水岸景觀住宅・75 吋大螢幕電視 ＋ 環繞音響",
      features: ["75 吋巨幕劇院音響", "舒適沙發客廳", "長途折返最佳中繼", "鄰近河畔視野開闊"],
      desc: "自東南海岸長途折返南岸後的最佳身心療癒地，配備 75 吋大電視與頂級環繞音響，今晚全員可齊聚在客廳沙發一同觀賞精彩電影，回味滿滿冒險回憶。",
      link: "https://www.booking.com/hotel/is/hella-riverbank.zh-tw.html?aid=304142&checkin=2027-02-01&checkout=2027-02-02&dest_id=-2646179&dest_type=city&group_adults=7&group_children=0&label=gen173nr-10CAEoggI46AdIM1gEaOcBiAECmAEzuAEJyAER2AED6AEB-AEBiAIBqAIBuALT_ejSBsACAdICJGZkOTM5N2Y4LWFjNGQtNDNmNi1iM2Q1LTE3N2M5ODUzZDBjOdgCAeACAQ-z9NSZ8%401784299288-Share-FpDI5eo%401788771096-Share-KgKVE8%401788829057-Share-RACqbI%401789356773-Share-H9Sd4u%401789373250&no_rooms=1&req_adults=7&req_children=0"
    },
    {
      nights: "2/2（第 12 晚）",
      name: "Aurora Hotel at KEF",
      location: "凱夫拉維克國際機場園區",
      address: "Blikavöllur 2, Keflavík Airport",
      specs: "機場園區飯店・步行 2–5 分鐘直達航廈・04:00 起供應早餐",
      features: ["步行 2-5 分鐘到航廈", "04:00 起供應熱早餐", "車已加滿油歸還", "出境零趕路壓力"],
      desc: "座落於機場園區內，今晚先將車輛加滿油歸還 Lotus 車行，入住後安心整理行李；明晨 04:00 即可享用豐盛熱早餐，從容步行 3 分鐘直接進入航廈報到！",
      link: "https://www.booking.com/hotel/is/airport-sma-ri.zh-tw.html?aid=304142&checkin=2027-02-02&checkout=2027-02-03&dest_id=338&dest_type=airport&group_adults=7&group_children=0&label=gen173nr-10CAEoggI46AdIM1gEaOcBiAECmAEzuAEJyAER2AED6AEB-AEBiAIBqAIBuALT_ejSBsACAdICJGZkOTM5N2Y4LWFjNGQtNDNmNi1iM2Q1LTE3N2M5ODUzZDBjOdgCAeACAQ-z9NSZ8%401784299288-Share-FpDI5eo%401788771096-Share-KgKVE8%401788829057-Share-RACqbI%401789356773-Share-p21hTy%401789357112&no_rooms=1&req_adults=7&req_children=0"
    }
  ],

  // 雙車配置與自駕注意事項 (Slides 51, 58)
  vehicleInfo: {
    teamSize: "7 人同行",
    vehicles: [
      {
        model: "Toyota RAV4 (AWD)",
        role: "先鋒靈活車",
        features: "車身較輕、轉向靈活、AWD 起步抓地力佳，配備雪地模式可在結冰路面啟用",
        cautions: "底盤離地高度比 Land Cruiser 低，深雪與厚積雪路面【切勿硬衝】；滿載時煞車距離變長，必須保持更大跟車距離（4–5 秒以上）。"
      },
      {
        model: "Toyota Land Cruiser (4WD)",
        role: "主力重裝車",
        features: "車身重、底盤離地高、通過性與脫困能力極強；具備低速四驅模式（用於深雪或陡坡起步，一般路面切勿使用）",
        cautions: "車重較大導致煞車距離更長，下坡與彎道必須【更早提早減速】；車身高、側面積大，行經橋樑與開闊沙原時【強陣側風影響極為明顯】。"
      }
    ],
    luggageRules: [
      "每人行李上限為【1 件大型行李箱＋1 個隨身背包】。",
      "軟質行李袋（Duffel Bag）比硬殼行李箱更好塞入車廂夾縫空間。",
      "Land Cruiser 若第三排立起載人，後行李廂空間將大幅縮減，取車時務必先分配座位與行李載量。",
      "強烈不建議加裝車頂箱：冰島冬季陣風常達 20–30 m/s，車頂箱極易受強風掀翻受損，且租車保險通常不予理賠。",
      "過夜換宿時只攜帶當晚所需衣物小包進屋，大件行李留於後車廂並拉上遮物簾遮蓋隱蔽。"
    ]
  },

  // 冬季自駕與安全守則核心模組 (Slides 53–59)
  winterDrivingRules: [
    {
      category: "🛣️ 路況即時查閱與警報等級",
      items: [
        "每日出發前與換點前，必查 <strong>road.is</strong> 即時路況顏色：綠色＝通行良好、黃色＝部分路段結冰、橘色＝路面滑溜、藍色＝極度光滑、紅色＝封閉禁止通行。",
        "每日必查 <strong>vedur.is</strong> 氣象局強風警報：黃色/橘色/紅色警戒，當預報【陣風超過 20 m/s】時切勿強行上路，以免車身失控吹翻。",
        "出發前在 <strong>safetravel.is</strong> 登記每日目的地與行車路線，並分享給留台家人。"
      ]
    },
    {
      category: "💨 強風開關車門防吹翻法則",
      items: [
        "冰島最常見的重大車損即為【車門被強陣風吹翻變形】，風損通常屬於除外責任，一般車險多不理賠（需賠償數十萬 ISK）。",
        "停車時車頭務必【正對迎風面】停放，避免強風從車尾順推吹開車門。",
        "開門與下車時，雙手必須全程緊緊握住門把，切勿放手任其彈開！"
      ]
    },
    {
      category: "🧊 致命黑冰（Black Ice）預防與開車心法",
      items: [
        "看似乾燥黝黑的柏油路面，極可能凝結了一層透明極滑的「黑冰」，尤其好發於橋樑（南岸單線窄橋）、背陰處、下坡與風口路段。",
        "行經彎道與橋樑前提早鬆開油門，利用低檔引擎煞車降速，【切忌急踩煞車、切忌急打方向盤】，否則輪胎瞬間鎖死打滑失控。",
        "行進中跟車距離拉長至 4–5 秒以上；結冰積雪路段車速自主降至 30–50 km/h；【全程嚴禁使用定速巡航】！"
      ]
    },
    {
      category: "🅿️ 景點停車繳費與罰款防範",
      items: [
        "【無閘門不代表免費】：塞里雅蘭瀑布、羽毛峽谷、冰河湖、辛格韋德利等停車場均裝設高解析車牌自動辨識攝影機。",
        "進場後當天內必須以 <strong>Parka App</strong> 或 <strong>EasyPark App</strong> 完成線上繳費。",
        "若離場忘記繳費，罰單會直接寄送至租車公司，車行將從信用卡額外扣除【高額行政手續費（每筆約 3,000–5,000 ISK）】。"
      ]
    },
    {
      category: "⛽ 自助加油技巧與避免大額圈存",
      items: [
        "冰島自助加油機必須輸入【4 碼 PIN 碼】（即信用卡預借現金密碼），出國前務必向台灣發卡銀行確認已開通設定完成。",
        "加油機螢幕請選擇【固定金額】（例如 5,000 ISK），【切勿選擇 Fill Up（加滿）】，以免銀行端被預扣圈存數萬台幣高額保證金，影響後續刷卡額度。",
        "鄉村小鎮加油站間隔距離極長，油箱指針剩半桶就順路加滿，切勿等到亮紅燈！"
      ]
    },
    {
      category: "🌊 特殊景點安全（黑沙灘瘋狗浪 ＆ 瀑布水簾）",
      items: [
        "黑沙灘（Reynisfjara、鑽石沙灘）：【嚴禁背對大海】！隨時警惕毫無徵兆無預警撲上海灘的「瘋狗浪（Sneaker Waves）」，海浪極易將人捲入冰冷大西洋；嚴格遵守現場警告燈號與浪線保持安全距離。",
        "塞里雅蘭瀑布：冬季水幕後方步道常因嚴重結冰結厚霜而封閉，切勿跨越護欄強行攀爬；下車前將外層防水衝鋒衣褲拉緊防濕，並套上冰爪。"
      ]
    },
    {
      category: "❄️ 卡雪受困自救四步驟",
      items: [
        "1. 保持冷靜，方向盤打直，輕踩油門，【切忌猛踩油門空轉】，空轉只會讓輪胎在雪坑中越挖越深。",
        "2. 下車用雪鏟清開四個輪胎前後積雪，將車內腳踏墊抽出來墊在驅動輪前方增加摩擦抓地力。",
        "3. 若仍無法脫困，使用 <strong>112 Iceland App</strong> 或撥打 112 專線求助，全員留在車內保暖等待救援。",
        "4. 在車內開啟暖氣等待時，務必先下車確認【排氣管未被積雪堵塞】，以防一氧化碳中毒！"
      ]
    },
    {
      category: "🍲 食材保溫、自炊與防凍技巧",
      items: [
        "冬季低溫要【防凍也要防熱】：隨車自備折疊保冷袋，冷凍肉類與海鮮以厚衣物或毛巾包裹；怕凍的蔬果、雞蛋、牛奶放車內乘客座位區，切勿放後車廂凍壞，也勿貼近暖氣出風口。",
        "夜間抵達住宿時，車上所有食材、瓶裝水、罐頭與玻璃瓶醬料【務必全數搬進室內】，留在零下車內會結冰膨脹破裂。",
        "保溫悶燒罐技巧：早上裝食物前，先注入滾水預熱內膽 3–5 分鐘再倒掉，再裝入滾燙食材，保溫效果可維持至中午，在荒郊野外零下低溫也能吃上一口熱飯熱湯。"
      ]
    }
  ],

  // 打勾清單資料庫 (Slides 60, 61)
  checklists: {
    documentsAndApps: [
      { id: "c-passport", text: "護照（離境申根區當日起效期 6 個月以上）＋ 影本分開存放", cat: "證件自駕" },
      { id: "c-driver-tw", text: "台灣汽車駕照正本（取車必須出示，僅持國際駕照無法取車）", cat: "證件自駕" },
      { id: "c-driver-idp", text: "國際駕照 IDP（在有效期限內）", cat: "證件自駕" },
      { id: "c-credit-card", text: "主駕駛英文姓名之實體信用卡（額度足夠供租車預授權押金）", cat: "證件自駕" },
      { id: "c-second-driver", text: "第二駕駛人：台灣駕照正本 ＋ 國際駕照 IDP", cat: "證件自駕" },
      { id: "c-credit-pin", text: "信用卡 4 碼 PIN 碼（加油預借現金密碼，已向銀行開通測試）", cat: "證件自駕" },
      { id: "c-backup-card", text: "備用實體信用卡至少 1–2 張（一張刷押金、一張日常消費）", cat: "證件自駕" },
      { id: "c-insurance-med", text: "申根醫療保險英文證明（保額至少 3 萬歐元，包含緊急醫療轉送）", cat: "保險憑證" },
      { id: "c-insurance-trip", text: "旅遊平安險與不便險保單（特別確認涵蓋暴風雪班機延誤與行李損害）", cat: "保險憑證" },
      { id: "c-insurance-car", text: "租車保險英文保單（確認涵蓋 CDW/SCDW、GP、SAAP 與風損）", cat: "保險憑證" },
      { id: "c-flight-voucher", text: "機票行程確認單（含赫爾辛基轉機段行程）", cat: "保險憑證" },
      { id: "c-hotel-vouchers", text: "7 大住宿確認單、地址、Check-in 時間與鑰匙盒密碼", cat: "保險憑證" },
      { id: "c-activity-vouchers", text: "冰川健行＋藍冰洞、藍湖溫泉、維克熔岩秀預約憑證", cat: "保險憑證" },
      { id: "c-costco-card", text: "Costco 實體會員卡（Garðabær 門市採買與自助加油必備）", cat: "保險憑證" },
      { id: "c-app-parka", text: "Parka App 下載並註冊帳號（拿到車牌後第一時間綁定）", cat: "App通訊" },
      { id: "c-app-easypark", text: "EasyPark App 下載（首都路邊停車備用）", cat: "App通訊" },
      { id: "c-app-112", text: "112 Iceland App 下載（一鍵回報 GPS 求救）", cat: "App通訊" },
      { id: "c-esim", text: "歐洲跨國上網 eSIM / 實體 SIM 卡測試就緒", cat: "App通訊" },
      { id: "c-offline-maps", text: "Google Maps 冰島全國離線地圖預先下載至手機", cat: "App通訊" },
      { id: "c-safetravel-reg", text: "出發前於 safetravel.is 完成自駕行程登記", cat: "App通訊" }
    ],
    clothingAndEquipment: [
      { id: "c-hat", text: "保暖防風毛帽（能完整包覆雙耳）", cat: "頭頸足部" },
      { id: "c-neck", text: "保暖圍脖 / 魔術頭巾（強風中不移位、不吹散）", cat: "頭頸足部" },
      { id: "c-sunglasses", text: "偏光抗 UV 太陽眼鏡（雪地與冰川反光極強，必備防雪盲）", cat: "頭頸足部" },
      { id: "c-gloves-inner", text: "內層觸控薄手套（滑手機照相不凍手）", cat: "頭頸足部" },
      { id: "c-gloves-outer", text: "外層防風防水滑雪保暖厚手套", cat: "頭頸足部" },
      { id: "c-boots", text: "高筒硬底防水登山健行靴（冰川健行強制要求硬底支撐，球鞋會被拒絕）", cat: "頭頸足部" },
      { id: "c-spikes", text: "簡易防滑冰爪（鏈條式或多爪矽膠套，結冰步道防滑必備）", cat: "頭頸足部" },
      { id: "c-socks", text: "厚磅美麗諾羊毛健行襪數雙", cat: "頭頸足部" },
      { id: "c-swimwear", text: "泳衣、泳褲與速乾毛巾（藍湖溫泉、木屋 Hot Tub、桑拿必備）", cat: "頭頸足部" },
      { id: "c-base-layer", text: "內層：美麗諾羊毛或機能排汗保暖衣褲（嚴禁棉質）", cat: "身體三層" },
      { id: "c-mid-layer", text: "中層：厚抓絨衣、刷毛保暖衣或輕量羽絨外套", cat: "身體三層" },
      { id: "c-shell-jacket", text: "外層：GORE-TEX 等級防風防水連帽衝鋒外套", cat: "身體三層" },
      { id: "c-shell-pants", text: "外層：防風防水防雪衝鋒褲（牛仔褲棉褲濕了會急速失溫，切勿穿著）", cat: "身體三層" },
      { id: "c-food-jar", text: "保溫悶燒罐 ＋ 隨身保溫瓶（早上自煮熱食熱湯，中午車上午餐）", cat: "自炊隨身" },
      { id: "c-cutlery-box", text: "個人便攜餐具、環保餐盒、食物夾鏈袋、折疊保冷袋", cat: "自炊隨身" },
      { id: "c-adapter", text: "歐規 Type C / F 轉接頭數個 ＋ 多孔延長線", cat: "電力3C" },
      { id: "c-powerbank", text: "大容量行動電源（低溫耗電快，貼身保暖攜帶，隨身行李）", cat: "電力3C" },
      { id: "c-car-charger", text: "車用手機導航支架、車充點菸器轉接頭、多孔 USB 充電線", cat: "電力3C" },
      { id: "c-headlamp", text: "頭燈或強光手電筒（午後4點天黑開鑰匙盒、雪地尋極光）", cat: "電力3C" },
      { id: "c-warmers", text: "暖暖包數十包（手握式、腳底貼片、貼手機背面防低溫關機）", cat: "保健護理" },
      { id: "c-lip-balm", text: "高保濕護唇膏、護手霜、身體乳液（冰島冬季極度乾燥寒冷）", cat: "保健護理" },
      { id: "c-medicine", text: "個人常備藥品（感冒、止痛、腸胃藥、暈車藥、痠痛貼布）", cat: "保健護理" },
      { id: "c-duffel-bag", text: "軟質行李袋（每人限 1 大型行李＋1 隨身背包，好塞車廂）", cat: "自炊隨身" }
    ]
  }
};

// 暴露給全域 window 使用
if (typeof window !== "undefined") {
  window.ICELAND_ITINERARY = ICELAND_ITINERARY;
}
