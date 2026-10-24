// ============================================================================
// 🧠 Leo 的知識進化艙 × 世界大事日報 — 專題科普與成長筆記資料庫
// 檔案位置：data/articles.js
// 說明：採用與「世界大事日報」一致的 <mark> 暖金螢光筆重點標記與報紙級排版風格。
// ============================================================================

window.KNOWLEDGE_CATEGORIES = [
  { id: "all", name: "全部專題知識", icon: "📚" },
  { id: "life-finance", name: "生活科學與理財", icon: "⚡" },
  { id: "business", name: "創業與店務經營", icon: "🏪" },
  { id: "growth", name: "思維模型與成長", icon: "🧠" },
  { id: "tech", name: "數位工具與科技", icon: "💻" }
];

window.DEFAULT_ARTICLES = [
  {
    id: "linear-vs-logarithmic-thinking-guide",
    flag: "📈",
    country: "認知升級專刊",
    category: "growth",
    categoryLabel: "🧠 思維模型與成長",
    type: "article",
    sentiment: "positive",
    sentimentLabel: "🌟 頂尖認知模型",
    importance: "底層邏輯必讀",
    title: "【深度圖解】線性思維 vs. 對數曲線思維：為什麼我們總在「前 20% 狂喜、後 80% 焦慮」？",
    originalTitle: "Linear vs. Logarithmic Thinking: Mastering Diminishing Marginal Returns, the 80/20 Plateau, and Multi-Curve Growth",
    source: "認知科學 × 經濟學邊際效用 × 跨界成長實戰指南",
    subtitle: "人類大腦天生只懂「1+1=2」的直線，卻活在一個由「對數曲線（先暴衝後高原）」與「指數曲線（先潛伏後爆發）」統治的真實世界。透過 6 大生活實例與 3 張全彩圖解，徹底升級你的學習、經營與財富決策！",
    createdAt: "2026-10-23",
    readTime: "9 分鐘深度閱讀",
    difficulty: "白話好懂 · 含互動模擬器",
    coverImage: "assets/images/linear_vs_log_overview.jpg",
    tags: ["線性思維", "對數曲線思維", "邊際效應遞減", "80/20法則", "高原期破局", "認知升級"],
    summary: "人類在遠古演化中養成了<mark>「線性思維（Linear Thinking）」：以為投入 1 分努力就該固定換回 1 分收穫</mark>。然而真實世界的技能學習、店面經營、財富幸福感與感官知覺，幾乎都遵循<mark>「對數曲線（Logarithmic Curve, y = log x）」——初期投入 20% 精力就能暴衝到 80 分（甜蜜紅利期），但從 80 分到 99 分卻要耗費 80% 甚至十倍以上的苦功（高原停滯期）</mark>。看懂對數曲線的人，懂得用「跨界疊加三條 80 分曲線」或「鎖定核心戰場死磕最後 10%」來破局！",
    keyTakeaway: "別用「線性預期」折磨處於「對數高原期」的自己！核心本業（如店內招牌產品）要耐住性子死磕對數高原的 90→99 分建立護城河；非核心外圍技能（如 AI 工具、攝影、基礎理財）則善用對數曲線前段紅利，花 20% 時間快速拿到 80 分即可跨界組合！",
    keyTakeaways: [
      "【線性思維的錯覺】大腦天生喜歡直線（$y = x$），以為「第 1 個月背單字進步 30 分，第 2、3 個月也該各進步 30 分」。一旦撞上成長變慢的平緩期，就會誤以為自己沒天賦而半途而廢。",
      "【對數曲線的真相】對數曲線（$y = \\log x$）的特徵是<mark>「開局斜率極陡（暴衝期），隨後迅速彎折進入平坦高原（邊際報酬遞減）」</mark>——前 20% 的努力能換來 80% 的成果；但後 80% 的努力只能換來最後 20% 的精進。",
      "【六大生活與自然實例】從<mark>① 烤雞蛋糕/學新技能的高原期、② 財富與快樂感（月入 3 萬變 6 萬極樂 vs. 身價 1 億變 1.03 億無感）、③ 店面廣告投放飽和、④ 健身增肌、⑤ 聲音分貝（dB）到 ⑥ 地震規模</mark>，全都是對數曲線！",
      "【兩大破局實戰策略】面對對數曲線高原期，你有兩條路：<mark>策略 A「職人深挖」</mark>——在別人放棄的 85~99 分高原區死磕細節，形成無法複製的護城河；<mark>策略 B「跨界疊加（T 型/π 型人才）」</mark>——摘完 A 技能前段 80 分的甜美果實後，立刻跳去開啟 B 技能與 C 技能的對數陡坡（$80分 \\times 80分 \\times 80分 = 跨界無敵$）！"
    ],
    content: `
      <div class="article-section" id="sec-intro-curves">
        <h2>一、 為什麼你常覺得「明明很努力，進步卻越來越慢」？</h2>
        <p>想像兩個生活場景：</p>
        <ul class="styled-list">
          <li><strong>場景 A（學烤雞蛋糕或學吉他）</strong>：第一週你連麵糊比例都不懂、烤出來全焦；但只要抓對溫度跟配方，<strong>短短兩週內你就從 0 分進步到 80 分</strong>，做出像樣好吃的成品！這時你信心爆棚，心想：「照這個速度，再過兩週我就能變成 100 分的米其林大師！」結果接下來整整半年，你每天微調發泡時間、麵粉筋度，卻覺得自己卡在 85 分動彈不得，挫敗感排山倒海而來。</li>
          <li><strong>場景 B（減肥與重訓）</strong>：剛開始控制飲食的第一個月，體重狂掉 4 公斤，臥推重量每週都在破紀錄；結果到了第三個月，吃得一樣少、練得一樣累，體重計卻連續三週紋絲不動。</li>
        </ul>
        <p>為什麼會這樣？不是因為你偷懶，也不是因為你沒天賦，而是因為<mark>你用人類天生的「線性思維（直線）」，去期待一個本質上是「對數曲線（先陡後平）」的真實世界！</mark></p>

        <figure class="article-figure">
          <img src="assets/images/linear_vs_log_overview.jpg" alt="線性思維、對數曲線思維與指數複利曲線三大模型對照圖" loading="lazy" />
          <figcaption>▲ 認知升級必備的三張底層地圖：左為大腦最習慣的「線性直線（一分耕耘一分收穫）」；中為技能與效用最常見的「對數曲線（初期暴衝、後期高原）」；右為資產複利與長期品牌的「指數曲線（前期沉寂、後期爆發）」。</figcaption>
        </figure>

        <h3>🔍 三大思維曲線 30 秒一眼看懂</h3>
        <div class="info-cards-grid">
          <div class="info-card">
            <div class="info-card-badge badge-amber">1. 人腦預設模式</div>
            <h4>📏 線性思維（Linear, <code>y = ax</code>）</h4>
            <p><strong>核心特徵：等比例增減、斜率固定。</strong><br>就像時薪打工（做 1 小時領 200 元、做 10 小時領 2,000 元）。人類在遠古狩獵採集時代養成了這種直覺：<mark>「走兩倍的路，就該摘到兩倍的果子」</mark>。它是我們焦慮與誤判的最大來源。</p>
          </div>
          <div class="info-card highlight-card">
            <div class="info-card-badge badge-emerald">2. 本篇核心主角</div>
            <h4>⛰️ 對數曲線思維（Logarithmic, <code>y = log(x)</code>）</h4>
            <p><strong>核心特徵：先陡峭暴衝，後平緩高原。</strong><br>從 0 到 1 進步神速（新手紅利期），但越往上走，每提升 1 分所需的代價呈倍數暴增（<mark>邊際報酬遞減定律</mark>）。理解它，你才能同時掌握「80/20 快速上手」與「職人高原耐力」。</p>
          </div>
          <div class="info-card">
            <div class="info-card-badge badge-blue">3. 對數的鏡像雙胞胎</div>
            <h4>🚀 指數曲線思維（Exponential, <code>y = a^x</code>）</h4>
            <p><strong>核心特徵：先平緩潛伏，後垂直噴發。</strong><br>在數學上，指數與對數互為「反函數」（把 X 軸與 Y 軸對調）。股票複利、自媒體口碑、病毒傳播都屬於此類——<mark>前 80% 時間看似毫無動靜（失望之谷），跨過拐點後瞬間爆發</mark>。</p>
          </div>
        </div>
      </div>

      <div class="article-section" id="sec-interactive-curve">
        <h2>二、 🎛️ 互動實驗室：親手拉動滑桿，感受「線性 vs. 對數」的震撼差距！</h2>
        <p>光看文字不夠直覺，請直接拉動下方模擬器的<strong>「投入努力／資源量（X 軸）」</strong>滑桿，觀察當你投入 10%、20%、50% 到 100% 的努力時，<strong>「線性預期」</strong>與真實的<strong>「對數曲線成果」</strong>會產生多麼巨大的心理落差：</p>

        <!-- 互動元件：線性 vs 對數曲線動態模擬器 -->
        <div id="widget-cognitive-curves" class="interactive-widget"></div>
      </div>

      <div class="article-section" id="sec-six-examples">
        <h2>三、 大量真實舉例：原來我們身邊到處都是「對數曲線」！</h2>
        <p>只要你戴上「對數曲線」的眼鏡看世界，你會驚訝地發現：從經濟學、心理學、餐飲經營到物理學，底層規律竟然全部長得一模一樣！</p>

        <figure class="article-figure">
          <img src="assets/images/log_life_examples.jpg" alt="對數曲線在財富幸福感、技能學習、分貝感官與地震規模的四大生活實例圖解" loading="lazy" />
          <figcaption>▲ 對數曲線無所不在：① 財富與快樂的邊際遞減、② 技能學習的 80/20 高原期、③ 人耳分貝（dB）的感官壓縮保護機制、④ 地震芮氏規模的能量倍增。</figcaption>
        </figure>

        <div class="info-cards-grid two-cols">
          <div class="info-card border-emerald">
            <div class="info-card-badge badge-emerald">實例 1 · 財富與心理學</div>
            <h4>💰 金錢與快樂感（邊際效用遞減）</h4>
            <p>經濟學家早就發現，<strong>「快樂程度 ＝ log（財富）」</strong>：</p>
            <ul>
              <li>當你存款從 <strong>0 元變成 10 萬元</strong>（不用再擔心下一餐與房租），你的幸福感會從 0 分暴衝到 60 分！</li>
              <li>從 <strong>10 萬變成 100 萬元</strong>，幸福感升到 80 分。</li>
              <li>但當一個億萬富翁身價從 <strong>1 億元變成 1 億零 10 萬元</strong>，同樣是增加 10 萬元，他的快樂曲線幾乎是水平線（毫無感覺）。</li>
            </ul>
            <p class="text-sm text-muted">💡 <strong>啟示</strong>：<mark>對數曲線告訴我們，要想獲得等量的快樂，所需的金錢刺激必須以「10 倍（數量級）」往上跳</mark>；這也是為什麼單靠買奢侈品很快就會陷入麻木。</p>
          </div>

          <div class="info-card border-amber">
            <div class="info-card-badge badge-amber">實例 2 · 餐飲與店務經營</div>
            <h4>🧇 產品研發與店面廣告投放</h4>
            <p>以經營一家雞蛋糕或特色美食店為例：</p>
            <ul>
              <li><strong>產品研發</strong>：花前 20 小時調配麵糊、買好模具，就能做出「外酥內Q、贏過路邊 80% 攤位」的 85 分產品（<strong>對數陡坡期</strong>）。但若想從 85 分推升到 98 分（冷掉 2 小時依然酥脆、香氣層次極致），可能需要試錯 500 次配方（<strong>對數高原期</strong>）。</li>
              <li><strong>廣告行銷</strong>：剛開始在在地社團發傳單或投 3,000 元廣告，附近沒吃過的客人馬上湧入（回報率極高）；但當附近居民都認識你之後，你就算把廣告費加倍到 3 萬元，新客增長也會變得極為平緩。</li>
            </ul>
          </div>

          <div class="info-card">
            <div class="info-card-badge badge-blue">實例 3 · 讀書考試與技能學習</div>
            <h4>📚 考 80 分很容易，考 98 分卻要命</h4>
            <p>回想學生時代或考證照：</p>
            <ul>
              <li><strong>0 分 ➔ 80 分（陡坡區）</strong>：只要掌握課本裡最核心的 20% 基礎觀念與考古題，花 2 週就能穩拿 80 分。</li>
              <li><strong>80 分 ➔ 95 分（緩坡區）</strong>：必須把整本課本的冷門細節全部背熟，時間要多花 3 倍。</li>
              <li><strong>95 分 ➔ 100 分（極限高原）</strong>：連課本小字註解、出題老師的刁鑽陷阱都要滴水不漏，多花 10 倍心力也只多拿那 5 分。</li>
            </ul>
          </div>

          <div class="info-card">
            <div class="info-card-badge badge-purple">實例 4 · 健身、重訓與減脂</div>
            <h4>💪 「新手蜜月期」vs.「老手平台期」</h4>
            <p>健身房裡最明顯的對數曲線：</p>
            <ul>
              <li><strong>第 1 年（新手福利期）</strong>：從來沒舉過鐵的人，第一年認真練加上補充蛋白質，肌肉量可以暴增 6～8 公斤，力量翻倍。</li>
              <li><strong>第 3～5 年（老手高原期）</strong>：動作標準度、飲食控制都比第一年嚴格十倍，但一年下來能長出 0.5～1 公斤純肌肉就已經是頂尖高手了！</li>
            </ul>
            <p class="text-sm text-muted">💡 許多人在第 6 個月退訂健身房，就是因為用「第一個月的線性速度」去期待後面的人生。</p>
          </div>

          <div class="info-card">
            <div class="info-card-badge badge-emerald">實例 5 · 人體感官的驚人設計</div>
            <h4>🔊 為什麼聲音「分貝（dB）」是對數？</h4>
            <p>心理物理學著名的<strong>「韋伯-費希納定律（Weber-Fechner Law）」</strong>指出：<mark>人類的耳朵、眼睛對外界刺激的感受，天生就是對數曲線！</mark></p>
            <ul>
              <li>樹葉沙沙聲是 <code>20 分貝</code>，一般講話是 <code>60 分貝</code>，搖滾演唱會是 <code>100 分貝</code>。</li>
              <li>線性思維會以為：「60 分貝只是 20 分貝的 3 倍大聲」。</li>
              <li><strong>真實物理能量</strong>：每增加 10 分貝，聲音能量是<strong>放大 10 倍</strong>！所以 60 分貝的能量是 20 分貝的 <strong>10,000 倍（$10^4$）</strong>！因為人耳用了「對數壓縮」，我們才既能聽見針掉在地上的聲音，又不會在聽演唱會時耳膜直接震碎。</li>
            </ul>
          </div>

          <div class="info-card">
            <div class="info-card-badge badge-amber">實例 6 · 大自然與地震規模</div>
            <h4>🌋 芮氏規模 6 級 vs. 7 級差多少？</h4>
            <p>台灣人最熟悉的地震報告，也是標準的對數尺規：</p>
            <ul>
              <li>當新聞播報「規模 5.0 地震」變成「規模 7.0 地震」，數字看起來只多了 <code>2.0</code>（線性錯覺覺得還好）。</li>
              <li>實際上，芮氏規模每往上加 <code>1.0</code>，釋放的地震波能量就暴增約 <strong>31.6 倍</strong>；規模差 <code>2.0</code>，能量整整差了 <strong>1,000 倍</strong>！這就是用對數把天文數字壓縮成 1～9 方便人類理解的經典應用。</li>
            </ul>
          </div>
        </div>

        <h3>📋 一表對照：線性思維 vs. 對數曲線思維 vs. 指數複利思維</h3>
        <div class="table-responsive">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>比較維度</th>
                <th>📏 線性思維 (Linear)</th>
                <th class="col-highlight">⛰️ 對數曲線思維 (Logarithmic)</th>
                <th>🚀 指數曲線思維 (Exponential)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>數學公式與形狀</strong></td>
                <td><code>y = a · x</code><br>斜率固定的 45 度直線</td>
                <td class="col-highlight"><code>y = log(x)</code><br><mark>先垂直暴衝，後趨於平坦高原</mark></td>
                <td><code>y = a^x</code><br>先貼地潛伏，後垂直衝向天際</td>
              </tr>
              <tr>
                <td><strong>初期感受（前 20% 時間）</strong></td>
                <td>穩定獲得 20% 回報，毫無驚喜</td>
                <td class="col-highlight"><strong>極度爽快！</strong>投入 20% 心力就拿到 80% 成果（新手紅利期）</td>
                <td><strong>極度痛苦！</strong>投入 20% 心力卻只看到 1% 回報（失望之谷）</td>
              </tr>
              <tr>
                <td><strong>後期感受（後 80% 時間）</strong></td>
                <td>穩定獲得 80% 回報（理想化幻想）</td>
                <td class="col-highlight"><strong>極度焦慮！</strong>投入 80% 心力卻只進步最後 15%（高原磨練期）</td>
                <td><strong>奇蹟爆發！</strong>複利拐點出現，後期回報呈百倍噴發</td>
              </tr>
              <tr>
                <td><strong>最常見的真實案例</strong></td>
                <td>時薪打工、工廠計件流水線、等速運動</td>
                <td class="col-highlight"><mark>學習新技能、產品調校、財富邊際快樂、減肥健身、廣告投放</mark></td>
                <td>長期指數投資複利、技術護城河（如台積電）、品牌口碑裂變</td>
              </tr>
              <tr>
                <td><strong>最容易犯的致命錯誤</strong></td>
                <td>用打工換錢的邏輯看待所有事情，不敢投資長期資產</td>
                <td class="col-highlight"><strong>在初期暴衝時過度自信；在進入高原期時誤以為自己沒天賦而放棄</strong></td>
                <td>在拐點來臨前的「平緩潛伏期」失去耐心，提早下車</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="article-section" id="sec-strategy-playbook">
        <h2>四、 實戰破局指南：看懂對數曲線後，我們該如何做決策？</h2>
        <p>知道「萬事萬物皆對數」之後，最重要的問題來了：<strong>當我們在學習、工作或經營事業撞上「對數高原期（80 分之後越來越難進步）」時，到底該繼續死磕，還是該轉換陣地？</strong></p>
        <p>頂尖高手會根據「這件事是不是你的核心命脈」，採取兩套截然不同的破局策略：</p>

        <figure class="article-figure">
          <img src="assets/images/cognitive_curve_strategy.jpg" alt="對數曲線高原期的兩大破局策略：職人深挖護城河 vs 跨界疊加第二曲線" loading="lazy" />
          <figcaption>▲ 面對 80 分高原期的兩條黃金路徑：【路徑 A】在核心主業死磕 90→99 分，把高原變成別人跨不過的護城河；【路徑 B】在輔助技能善用 80/20 法則，摘完前段甜美果實後立刻跳躍開啟「第二、第三條對數曲線」，打造跨界複合優勢！</figcaption>
        </figure>

        <div class="info-cards-grid two-cols">
          <div class="info-card border-emerald">
            <div class="info-card-badge badge-emerald">破局策略 A · 針對「核心本業」</div>
            <h4>💎 職人深挖法：把「高原期」變成你的護城河！</h4>
            <p>既然從 0 到 80 分誰都能在兩週內學會，代表<mark>「80 分毫無門檻，誰都能抄襲你」</mark>！</p>
            <p>這就像我們上一篇討論的<strong>台積電</strong>：做出實驗室晶片（80 分）很多國家都行，但要把良率從 70% 推到 90%（對數高原期最痛苦的那一段），需要千百位工程師日夜死磕細節。<strong>正因為高原期太痛苦，95% 的競爭對手都會在這裡放棄！</strong></p>
            <p>👉 <strong>行動準則</strong>：對於你賴以維生的<strong>「唯一核心招牌（例如店內主打產品的口感、良率與品管）」</strong>，當你進入高原期時，不要焦慮，反而要興奮——因為你每往前推進 1 分，都是在築起對手追不上的高牆！</p>
          </div>

          <div class="info-card border-amber">
            <div class="info-card-badge badge-amber">破局策略 B · 針對「外圍技能」</div>
            <h4>🚀 跨界疊加法：連開三條「80 分對數曲線」！</h4>
            <p>相反地，如果你不是要當攝影大師、也不是要當程式設計師，你千萬不要在輔助技能的高原期浪費 80% 的人生！</p>
            <p>聰明人會完美利用對數曲線<strong>「前段極度陡峭（花 20% 精力拿 80 分）」</strong>的特性，快速收割多條曲線的甜美紅利：</p>
            <ul>
              <li><strong>第 1 條曲線（烘焙手藝）</strong>：推到 <strong>90 分</strong>（核心立身之本）</li>
              <li><strong>第 2 條曲線（手機美食攝影與排版）</strong>：花 20 小時衝到 <strong>80 分</strong>就停手（不用去跟專業攝影師死磕 99 分）</li>
              <li><strong>第 3 條曲線（AI 數位工具與成本理財）</strong>：花 20 小時衝到 <strong>80 分</strong>就夠用</li>
            </ul>
            <p>👉 <strong>行動準則</strong>：<mark>單一技能從 80 分練到 99 分要花 10 年；但把三個互補技能各自練到 80 分只要半年，合起來就能擊敗 99% 只懂單一領域的同行！</mark>（這就是《呆伯特》作者史考特·亞當斯著名的「天賦疊加 Talent Stacking」法則）。</p>
          </div>
        </div>

        <div class="callout callout-emerald">
          <div class="callout-title">🌟 終極進化：如何把「對數曲線」接力變成「指數複利曲線」？</div>
          <p>當你不斷開啟新的對數曲線（每學一項新認知、每存下一篇知識進化艙筆記、每優化一次店務流程），單看每一件事都是「先快後慢的對數曲線」；但當這些 80 分的能力在時間軸上<strong>互相串聯、產生化學反應</strong>時，你整個人生的總價值就會從「對數高原」躍遷為<strong>「指數級複利成長（Exponential Growth）」</strong>！</p>
        </div>

        <h3>✅ 自我檢核：把「對數曲線思維」內化到日常的 4 個問題</h3>
        <div class="checklist-box">
          <label class="checklist-item">
            <input type="checkbox" checked />
            <span><strong>【區分主戰場與副戰場】</strong>我現在卡關焦慮的這件事，是我的「核心護城河（該死磕過高原）」，還是「輔助工具（拿 80 分就該換下一題）」？</span>
          </label>
          <label class="checklist-item">
            <input type="checkbox" checked />
            <span><strong>【破除三分鐘熱度自責】</strong>學新東西第 3 週開始變慢時，提醒自己：「這不是我變笨了，而是我已經順利爬完對數陡坡，正式進入高手的精雕高原區！」</span>
          </label>
          <label class="checklist-item">
            <input type="checkbox" />
            <span><strong>【善用 20% 黃金啟動期】</strong>遇到不懂的新領域（如電表計費、半導體估值、AI 工具），先用費曼學習法與知識庫花 30 分鐘抓取最關鍵的 80% 核心骨架。</span>
          </label>
          <label class="checklist-item">
            <input type="checkbox" />
            <span><strong>【拒絕無效的邊際消耗】</strong>在已經飽和的舊習慣或無效社交上，果斷停止投入過多資源，把精力拿去開啟人生的「第二條對數陡坡」。</span>
          </label>
        </div>
      </div>
    `
  },
  {
    id: "tsmc-moat-2nm-and-stock-valuation-analysis",
    flag: "🔬",
    country: "半導體與投資思維",
    category: "life-finance",
    categoryLabel: "⚡ 生活科學與理財",
    type: "article",
    sentiment: "neutral",
    sentimentLabel: "📊 深度客觀剖析",
    importance: "投資必讀",
    title: "【深度問答】台積電無可撼動只因 2 奈米？若各國因 AI 追上 1 奈米且產能相當，股價會跌多少？",
    originalTitle: "TSMC's True Moat Beyond 2nm & Valuation Impact Under a 1nm Commoditization Scenario",
    source: "Leo × AI 客觀直白問答實錄",
    subtitle: "打破「單靠製程節點領先」的迷思：深度拆解良率規模、CoWoS 先進封裝與純代工信任三大護城河，並用戴維斯雙殺模型試算「獨佔稀缺性消失」後的真實股價跌幅。",
    createdAt: "2026-10-22",
    readTime: "6 分鐘閱讀",
    difficulty: "產業與財務邏輯",
    coverImage: "assets/images/smart_saving.jpg",
    tags: ["台積電TSMC", "半導體護城河", "2奈米與1奈米", "戴維斯雙殺", "股票估值分析", "AI與晶圓製造"],
    summary: "台積電無可撼動的地位，「擁有 2 奈米技術」只對了一半不到。真正的三大護城河是<mark>「80% 以上高良率與規模量產能力」、「CoWoS / SoIC 先進封裝生態系」與「絕對中立不與客戶競爭的商業信任」</mark>。但若未來各國真能突破物理限制，在 1 奈米的良率與產能完全追平，台積電將失去定價權並遭遇<mark>「戴維斯雙殺（EPS 腰斬 × 本益比從 20 倍下修至 11 倍）」，股價從高點暴跌 50%～70%</mark> 完全符合財務邏輯。",
    keyTakeaway: "台積電的高股價與 55% 高毛利 100% 建立在「先進製程與封裝的獨佔稀缺性」上；一旦稀缺性被打破變成標準品，獲利與估值雙殺將導致股價修正 50%～70%。但 AI 需要海量生產數據閉環，短期內反而更有利於台積電拉開良率差距。",
    keyTakeaways: [
      "【破除 2 奈米迷思】技術節點只是入場券！台積電真正讓對手絕望的三大護城河是：<mark>① 每月十萬片且良率 80%+ 的量產能力、② CoWoS/SoIC 先進封裝生態系、③ 不與客戶（Apple/NVIDIA）競爭的純代工中立性</mark>。",
      "【稀缺性消失的衝擊】若對手在 1 奈米良率與產量完全追平，台積電將從「絕對獨佔（Monopoly）」退化為「寡佔價格戰（Oligopoly）」，<mark>大客戶必轉單 30%~50% 分散風險並砍價，55% 超高毛利率將崩跌回 35%~40%</mark>。",
      "【股價跌幅財務試算】遭遇「戴維斯雙殺」：<mark>淨利（EPS）衰退約 45%（剩 0.55 倍）× 本益比（P/E）從 20 倍下修至 11 倍（剩 0.55 倍）＝ 0.3025</mark>，股價暴跌 50%～70% 完全合乎財務邏輯（如同當年 Intel 跌落神壇）。",
      "【AI 能否幫對手彎道超車？】AI 能加速「晶片設計與材料模擬」，但跨不過「EUV 幾千道物理化學試錯地獄」；且<mark>訓練晶圓製造 AI 所需的海量良率數據（Data Flywheel）掌握在台積電手裡</mark>，5 年內極難被翻盤，10 年以上才需提防光子/量子晶片世代洗牌。"
    ],
    content: `
      <div class="article-section" id="sec-qa-prompt">
        <h2>💬 原始提問（Leo 的核心思考）</h2>
        <div class="callout callout-info">
          <div class="callout-title">❓ 思考命題：如果「獨佔稀缺性」被打破，台積電會跌落神壇嗎？</div>
          <p>「目前台積電無可撼動的地位是因為擁有晶片二奈米的技術對嗎？也就是說如果日後因為 AI 的快速發展而導致其他國家迎頭追上二奈米甚至到一奈米、且產量也能與台積電相比，那台積電的地位是否就會受到衝擊且股價暴跌？畢竟目前一枝獨秀是因為獨佔市場的稀缺性，一旦稀缺性的優勢被拿走是否就會暫居第二，目前的股價可能會跌落多少？請以非常客觀的角度觀看分析並直白地討論。」</p>
        </div>
      </div>

      <div class="article-section" id="sec-true-moat">
        <h2>一、 台積電無可撼動的地位是因為擁有 2 奈米技術對嗎？</h2>
        <p>直接切入核心、不講場面話：<strong>這個說法只對了一半，甚至不到一半。</strong></p>
        <p>技術節點（2 奈米、1.4 奈米）只是「入場券」，台積電真正讓對手絕望的護城河有三個，按重要性排列如下：</p>

        <div class="info-cards-grid">
          <div class="info-card highlight-card">
            <div class="info-card-badge badge-emerald">護城河 1 · 決定性差距</div>
            <h4>🏭 良率與規模量產能力（Yield & Scale）</h4>
            <p>三星（Samsung）早在 3 奈米就比台積電更早宣稱導入 GAA 架構量產，但為什麼輝達（NVIDIA）、蘋果（Apple）、高通（Qualcomm）還是全部擠在台積電？因為<mark>「實驗室做出來」跟「每個月穩定產出十萬片、且良率 80% 以上」是兩個世界</mark>。做不出良率，客戶的晶片成本就會暴增、交期就會延誤。</p>
          </div>
          <div class="info-card">
            <div class="info-card-badge badge-blue">護城河 2 · 系統級綁定</div>
            <h4>🧩 先進封裝生態系（CoWoS / SoIC）</h4>
            <p>現在 AI 晶片的瓶頸早就過了「單一晶片做多小」，而是<mark>「怎麼把好幾顆晶片跟高頻寬記憶體（HBM）完美縫合在一起」</mark>。台積電的 CoWoS 和 3D 封裝技術把頂級客戶綁得死死的。</p>
          </div>
          <div class="info-card">
            <div class="info-card-badge badge-amber">護城河 3 · 商業信任</div>
            <h4>🤝 「絕對中立」的商業模式（Pure-play Foundry）</h4>
            <p>三星和 Intel 自己都有設計晶片、賣手機或賣伺服器 CPU。今天你是 Apple 或 NVIDIA，你敢把最核心的 1 奈米設計圖交給隨時可能抄襲你、跟你在終端市場搶生意的對手代工嗎？<mark>「不與客戶競爭」是台積電在商業信任上極難被複製的優勢。</mark></p>
          </div>
        </div>
      </div>

      <div class="article-section" id="sec-impact-analysis">
        <h2>二、 若假設成真：對手追上 2奈米/1奈米，且產量與良率並駕齊驅</h2>
        <p>如果真的因為 AI 輔助材料研發、或是新型光刻技術突破，讓 Intel、三星、日本 Rapidus 甚至其他國家，在<strong>「1 奈米的良率、產能、先進封裝」完全追平台積電</strong>，那會發生什麼事？</p>

        <h3>1. 台積電的地位會不會受衝擊？會不會退居第二？</h3>
        <p><strong>地位一定會受到毀滅性衝擊，但不一定會退居第二，而是從<mark>「絕對獨佔（Monopoly）」變成「寡佔價格戰（Oligopoly）」</mark>。</strong></p>
        <ul class="styled-list">
          <li><strong>定價權（Pricing Power）瞬間消失</strong>：台積電現在之所以能維持 <strong>53%～55% 甚至更高</strong> 的驚人毛利率，是因為輝達、蘋果沒有別的選擇（無替代性），台積電說漲價 10%，客戶只能吞下去。一旦對手良率與產能追上，蘋果和輝達<mark>第一件事就是「分散風險（Second Source）」，把 30%～50% 的訂單轉給對手</mark>，並拿對手的報價來砍台積電的價。</li>
          <li><strong>從「科技成長股」變成「重資產景氣循環股」</strong>：晶圓代工本質上是極度燒錢的重工業（一台 High-NA EUV 光刻機超過 3.5 億美金，建一座廠動輒 200 億美金）。當大家技術跟產量都一樣時，晶圓代工就會步上 <strong>面板業、記憶體（DRAM）或成熟製程（如聯電、中芯）</strong> 的後塵——殺價搶產能稼動率。</li>
        </ul>

        <h3>2. 股價會跌落多少？（客觀財務模型拆解：戴維斯雙殺）</h3>
        <p>如果稀缺性紅利被拔除，台積電的股價會遭遇恐怖的<mark>「戴維斯雙殺」（獲利能力下滑 ＋ 本益比估值下修）</mark>。我們可以用很直白的算術來算：</p>

        <div class="table-responsive">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>財務評估維度</th>
                <th class="col-highlight">🟢 目前獨佔狀態（稀缺紅利期）</th>
                <th>🔴 假設 1nm 被追平後（寡佔殺價期）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>先進製程市佔率</strong></td>
                <td class="col-highlight">接近 <strong>90%+</strong> 絕對獨佔</td>
                <td>大客戶轉單 30%~40% 分散風險，營收直接減少 <strong>25%~30%</strong></td>
              </tr>
              <tr>
                <td><strong>毛利率（Gross Margin）</strong></td>
                <td class="col-highlight">長期穩居 <strong>53% ～ 57%</strong></td>
                <td>代工價格戰開打＋千億美金折舊壓力，跌回硬體製造業區間 <mark>35% ～ 40%</mark></td>
              </tr>
              <tr>
                <td><strong>每股盈餘（EPS）變化</strong></td>
                <td class="col-highlight">基準值 <code>1.0x</code>（持續創高）</td>
                <td>營收下滑＋毛利崩跌，<strong>淨利（EPS）直接腰斬（下跌 40%～50%，剩約 <code>0.55x</code>）</strong></td>
              </tr>
              <tr>
                <td><strong>市場本益比（Forward P/E）</strong></td>
                <td class="col-highlight">約 <strong>18 倍 ～ 23 倍</strong>（AI 軍火庫估值）</td>
                <td>淪為高資本支出傳統製造商，本益比下修至 <mark>10 倍 ～ 12 倍（剩約 <code>0.55x</code>）</mark></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-amber">
          <div class="callout-title">📉 綜合跌幅試算結論：暴跌 50% ～ 70%（腰斬再打折）</div>
          <p>把「獲利衰退」與「估值下修」相乘：</p>
          <ul>
            <li><strong>EPS 剩原本的 0.55 倍</strong>（獲利衰退 45%）</li>
            <li><strong>本益比剩原本的 0.55 倍</strong>（從 20 倍殺到 11 倍）</li>
            <li><code>0.55 × 0.55 = 0.3025</code>（市值僅剩高點的 30%～50% 左右）</li>
          </ul>
          <p>也就是說，如果這個情境真的「完全發生」，台積電的股價從高點<mark>暴跌 50% 到 70%（腰斬再打折）</mark>是完全符合財務邏輯的，絕非危言聳聽。當年 Intel 從製程霸主神壇跌落、被台積電與 AMD 超車時，股價就是一路從 68 美元跌到剩 19 美元（跌幅超過 70%）。</p>
        </div>
      </div>

      <div class="article-section" id="sec-ai-reality-check">
        <h2>三、 回到現實：AI 真的能讓其他國家「快速追上」晶圓製造嗎？</h2>
        <p>這是最後一個需要客觀戳破的迷思：<mark>AI 可以加速「晶片設計」與「材料模擬」，但很難瞬間跨過「物理製造的試錯地獄」。</mark></p>

        <div class="info-cards-grid two-cols">
          <div class="info-card border-amber">
            <div class="info-card-badge badge-amber">現實壁壘 1</div>
            <h4>🔬 軟硬體的物理鴻溝</h4>
            <p>AI 可以幫你在電腦裡算出更好的電晶體結構，但當你要用極紫外光（EUV）在矽晶圓上曝光、蝕刻、沉積，牽涉到的是<strong>幾千道物理與化學工序、光阻劑的純度、機台微米級震動與極端溫控</strong>，這些無法單靠演算法在虛擬世界跳過。</p>
          </div>
          <div class="info-card border-emerald">
            <div class="info-card-badge badge-emerald">現實壁壘 2</div>
            <h4>🔄 數據閉環（Data Flywheel）在台積電手上</h4>
            <p>就算要用 AI 來優化晶圓廠的良率，<mark>訓練 AI 需要海量的「生產失敗與成功數據」</mark>。台積電每天在線上跑的先進製程晶圓數量是全世界的總和好幾倍，等於「最龐大的訓練資料庫」也在台積電手裡。因此，AI 工具反而更容易讓台積電把良率拉得更高，而不是讓沒有生產數據的落後者瞬間彎道超車。</p>
          </div>
        </div>

        <div class="callout callout-emerald">
          <div class="callout-title">🎯 最終總結與長期觀察指標</div>
          <p>你的邏輯推演完全正確：<strong>台積電現在的高股價與高毛利，100% 建立在「先進製程與封裝的獨佔稀缺性」上。</strong>只要這個稀缺性被打破、變成各國都能大量生產的標準品，它的股價至少會修正 <strong>50%～70%</strong>。</p>
          <p>只是這個「追上」的條件，不是單純突破「2 奈米或 1 奈米的理論技術」就夠了，對手必須同時解決<mark>「80% 以上良率」、「龐大工程師文化與爆肝供應鏈」、「不與客戶競爭的信任感」</mark>這三座大山。在未來 5 年內，這三座山被同時鏟平的機率極低；但如果拉長到 <strong>10 年以上</strong>（當矽基半導體走到物理極限，進入<strong>量子晶片、光子晶片或全新材料時代</strong>），台積電就真的有可能面臨「世代洗牌」的危機。</p>
        </div>
      </div>
    `
  },
  {
    id: "taiwan-electricity-meter-guide",
    flag: "⚡",
    country: "台灣生活科普",
    category: "life-finance",
    categoryLabel: "⚡ 生活科學與理財",
    type: "article",
    sentiment: "positive",
    sentimentLabel: "🌟 實用省錢攻略",
    importance: "家庭必備",
    title: "台灣電表種類與「二段式 vs. 三段式」時間電價全貌圖解",
    originalTitle: "Taiwan Smart Meters (AMI) & Two-Stage vs. Three-Stage Time-of-Use Tariffs Complete Guide",
    source: "台電最新電價表與居家節能實戰指南",
    subtitle: "一次看懂我們家的二段式智慧電表、液晶螢幕代碼 04/05/07、非夏月午間離峰亮點，以及如何靠「對的時段用電」聰明省下大筆電費！",
    createdAt: "2026-10-19",
    readTime: "7 分鐘閱讀",
    difficulty: "輕鬆好懂 · 實戰必備",
    coverImage: "assets/images/meter_comparison.jpg",
    tags: ["台電科普", "二段式電表", "三段式時間電價", "智慧電表AMI", "家庭省電攻略"],
    summary: "大家常說的「二段式電表、三段式電表」，其實<mark>硬體都是同一顆「數位／智慧電表（AMI）」，差別只在向台電申請的「時間電價計費方案」不同</mark>。只要看懂電表液晶螢幕跳動的 <mark>04（總度數）、05（尖峰）、07（離峰）</mark> 代碼，並把握<mark>週六日 24 小時全日離峰（約 2 元/度）與非夏月平日中午 11:00~14:00 太陽能離峰</mark>，就能在不犧牲生活品質的前提下大幅降低電費支出！",
    keyTakeaway: "夏天傍晚 16:00~22:00 家裡若有人吹冷氣、煮晚餐，絕對要維持「二段式（5.16元/度）」；若貿然換成三段式，這 6 小時會被收 7.13 元/度的懲罰性高價！",
    keyTakeaways: [
      "【硬體 vs. 方案】大家常說的「二段式電表、三段式電表」，其實<mark>硬體都是同一種「數位／智慧電表（AMI）」</mark>，差別只在向台電申請的「時間電價計費方案」不同。",
      "【電表螢幕密碼】數位電表液晶螢幕會自動輪播數字，只要看左上角兩位數代碼：<mark>04＝總累積度數、05＝尖峰度數（貴）、07＝離峰度數（便宜）</mark>；而 06（半尖峰）在二段式永遠顯示 0。",
      "【兩大超爽離峰福利】① <mark>週六、週日與國定假日「全天 24 小時都是離峰價（約 2 元/度）」</mark>！② 非夏月（10月~5月）平日除了半夜，連<mark>「中午 11:00~14:00」也是便宜離峰電</mark>！",
      "【二段 vs. 三段關鍵決策】<mark>夏天傍晚 16:00~22:00 家裡若有人吹冷氣、煮飯，絕對要維持「二段式（5.16元/度）」</mark>；若換成三段式，這 6 小時會被收 7.13 元/度的懲罰性高價！"
    ],
    content: `
      <div class="article-section" id="sec-concept">
        <h2>一、 先破除迷思：「電表硬體」跟「幾段式計費」是兩回事！</h2>
        <p>很多人在看家門口的電表時，會疑惑：「我們家裝的是二段式電表，那跟別人家的傳統電表、三段式電表到底差在哪？」</p>
        <p>其實只要記住一個最簡單的比喻：<mark>「電表硬體」就像是手機機身，「幾段式電價」則是你向電信商辦的資費方案。</mark>我們家現在裝的「二段式電表」，硬體本質上是<strong>「電子式／智慧型數位電表」</strong>，裡面設定了台電的<strong>「二段式時間電價」</strong>方案。</p>

        <figure class="article-figure">
          <img src="assets/images/meter_comparison.jpg" alt="傳統機械式圓盤電表與現代智慧型數位電表對照圖" loading="lazy" />
          <figcaption>▲ 左：傳統機械式電表（鋁盤旋轉，只能算總度數累進電價）｜右：現代智慧電表 AMI（液晶螢幕分段紀錄 04/05/07，支援二段式與三段式時間電價並可連線手機 App）</figcaption>
        </figure>

        <h3>🔍 台灣常見電表「硬體種類」30 秒全覽</h3>
        <div class="info-cards-grid">
          <div class="info-card">
            <div class="info-card-badge badge-amber">第一代 · 傳統型</div>
            <h4>⚙️ 傳統機械式電表（圓盤表）</h4>
            <p>玻璃罩內有一個<strong>金屬鋁製圓盤</strong>不停旋轉。它非常單純，只知道「從裝表到現在總共轉了幾圈（幾度電）」，<mark>完全不知道你是在大白天還是半夜三點用電</mark>，因此只能使用一般的「累進電價」。</p>
          </div>
          <div class="info-card">
            <div class="info-card-badge badge-blue">第二代 · 數位型</div>
            <h4>📟 電子式數位電表（無通訊）</h4>
            <p>改用<strong>液晶螢幕（LCD）</strong>顯示數字，內建時鐘晶片，可以精準切分「尖峰、半尖峰、離峰」時段並分開累加度數。但沒有無線網路模組，仍需台電抄表員每兩個月到現場看螢幕抄表。</p>
          </div>
          <div class="info-card highlight-card">
            <div class="info-card-badge badge-emerald">第三代 · 主流現況</div>
            <h4>📡 智慧電表（AMI 通訊數位表）</h4>
            <p>目前台電全面換裝的主力！不僅具備液晶螢幕分段紀錄功能，還內建通訊模組，<mark>每 15 分鐘自動將用電數據傳回台電雲端</mark>。不用換硬體，就能自由申請「累進電價」、「二段式」或「三段式」時間電價！</p>
          </div>
        </div>

        <div class="callout callout-info">
          <div class="callout-title">💡 補充小百科：電表上的「單相」與「三相」是什麼意思？</div>
          <p>除了機械表與智慧表之分，電表外殼上還會標示<strong>供電相數</strong>：</p>
          <ul>
            <li><strong>單相三線式（1Φ3W，110V / 220V）</strong>：<mark>台灣 95% 以上一般家庭住宅都是這種</mark>，提供一般插座（110V）與冷氣（220V）。</li>
            <li><strong>三相三線／四線式（3Φ3W / 3Φ4W，220V / 380V）</strong>：像是<strong>有電梯的透天厝、餐飲店面、烘焙坊</strong>或有大型商用馬達設備的場所才會安裝，用來承受極大功率負載。</li>
          </ul>
        </div>
      </div>

      <div class="article-section" id="sec-tou-overview">
        <h2>二、 為什麼要裝二段式電表？認識「累進電價 vs. 時間電價」</h2>
        <p>台灣住宅與小商店的電費計價，主要分成兩大門派：</p>
        <ol class="styled-list">
          <li><strong>一般「非時間電價（累進電價）」</strong>：不管你幾點用電都一樣，但<mark>「整個月總度數用越多，單價越貴」</mark>（共分 6 個級距，夏月從第一級 1.78 元一路飆到第六級 <strong>8.46 元/度</strong>）。</li>
          <li><strong>住商型「簡易時間電價（二段式／三段式）」</strong>：也就是我們家目前的計費方式！<mark>打破累進級距，改為「看你幾點幾分用電」來算錢</mark>——白天電力吃緊時比較貴（尖峰），半夜、週末或太陽能充足時超級便宜（離峰，每度只要約 <strong>2 元</strong>）。</li>
        </ol>

        <figure class="article-figure">
          <img src="assets/images/tou_lifestyle.jpg" alt="家庭全天候尖峰與離峰時段智慧用電生活示意圖" loading="lazy" />
          <figcaption>▲ 時間電價的核心哲學：避開傍晚用電高峰，善用「非夏月午間太陽能離峰（11:00-14:00）」、「深夜離峰（00:00-09:00）」與「週末 24 小時全日離峰」。</figcaption>
        </figure>

        <h3>🎛️ 互動圖解：24 小時「二段式 vs. 三段式」時段與單價切換器</h3>
        <p>點擊下方按鈕切換<strong>「我們家的二段式」</strong>與<strong>「三段式」</strong>，以及不同季節與平日／假日，直接看懂一天 24 小時每一格的電費單價：</p>

        <!-- 互動元件 1：24小時時段視覺化切換器 -->
        <div id="widget-tou-timeline" class="interactive-widget"></div>

        <h3>📋 台電最新「二段式 vs. 三段式」完整費率對照表</h3>
        <div class="table-responsive">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>比較項目</th>
                <th class="col-highlight">🟢 我們家目前：簡易二段式</th>
                <th>🟠 對照方案：簡易三段式</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>計費時段結構</strong></td>
                <td class="col-highlight">只分 <strong>「尖峰」</strong>、<strong>「離峰」</strong> 2 種價格<br><span class="text-muted">（簡單直覺，傍晚不怕天價）</span></td>
                <td>分為 <strong>「尖峰」</strong>、<strong>「半尖峰」</strong>、<strong>「離峰」</strong> 3 種價格<br><span class="text-muted">（白天微降，但夏月傍晚極貴）</span></td>
              </tr>
              <tr>
                <td><strong>每月固定基本費</strong></td>
                <td class="col-highlight">每戶每月 <strong>75 元</strong></td>
                <td>每戶每月 <strong>75 元</strong></td>
              </tr>
              <tr>
                <td><strong>☀️ 夏月（6/1 ~ 9/30）<br>週一至週五</strong></td>
                <td class="col-highlight">
                  <span class="tag-pill pill-red">尖峰</span> <code>09:00 ~ 24:00</code> ➔ <strong>5.16 元/度</strong><br>
                  <span class="tag-pill pill-green">離峰</span> <code>00:00 ~ 09:00</code> ➔ <strong>2.06 元/度</strong>
                </td>
                <td>
                  <span class="tag-pill pill-darkred">尖峰</span> <code>16:00 ~ 22:00</code> ➔ <mark>7.13 元/度 ⚠️</mark><br>
                  <span class="tag-pill pill-amber">半尖峰</span> <code>09:00~16:00</code>、<code>22:00~24:00</code> ➔ <strong>4.69 元/度</strong><br>
                  <span class="tag-pill pill-green">離峰</span> <code>00:00 ~ 09:00</code> ➔ <strong>2.06 元/度</strong>
                </td>
              </tr>
              <tr>
                <td><strong>🍂 非夏月（10/1 ~ 5/31）<br>週一至週五</strong></td>
                <td class="col-highlight">
                  <span class="tag-pill pill-red">尖峰</span> <code>06:00~11:00</code>、<code>14:00~24:00</code> ➔ <strong>4.93 元/度</strong><br>
                  <span class="tag-pill pill-green">離峰</span> <code>00:00~06:00</code>、<mark><code>11:00~14:00</code> ➔ 1.99 元/度</mark>
                </td>
                <td>
                  <span class="tag-pill pill-gray">無尖峰時段！</span><br>
                  <span class="tag-pill pill-amber">半尖峰</span> <code>06:00~11:00</code>、<code>14:00~24:00</code> ➔ <strong>4.48 元/度</strong><br>
                  <span class="tag-pill pill-green">離峰</span> <code>00:00~06:00</code>、<mark><code>11:00~14:00</code> ➔ 1.99 元/度</mark>
                </td>
              </tr>
              <tr>
                <td><strong>🎉 週六、週日<br>及國定假日</strong></td>
                <td class="col-highlight"><mark>全天 24 小時皆為「離峰」！</mark><br><span>（夏月 2.06 元/度、非夏月 1.99 元/度）</span></td>
                <td><mark>全天 24 小時皆為「離峰」！</mark><br><span>（夏月 2.06 元/度、非夏月 1.99 元/度）</span></td>
              </tr>
              <tr>
                <td><strong>超度數附加費</strong></td>
                <td class="col-highlight">每月總度數超過 2,000 度時，<strong>超出的部分每度加收 1.04 元</strong></td>
                <td>每月總度數超過 2,000 度時，<strong>超出的部分每度加收 1.04 元</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-emerald">
          <div class="callout-title">🌟 超重要亮點：為什麼非夏月「中午 11:00 ~ 14:00」是便宜的離峰電？</div>
          <p>以前大家都以為只有半夜才是離峰電，但台電近年改制後，因為台灣中午 11 點到下午 2 點<mark>太陽能光電發電量達到最高峰，電力非常充裕</mark>！因此台電在非夏月（10月～隔年5月）把離峰時段拆成兩段：<strong>半夜 <code>00:00~06:00</code></strong> 與 <strong>中午 <code>11:00~14:00</code></strong>。這整整一年當中有 8 個月的平日中午，開冷暖氣、洗烘衣、烤東西每度電都只要 <strong>1.99 元</strong>！</p>
        </div>
      </div>

      <div class="article-section" id="sec-lcd-guide">
        <h2>三、 實戰解碼：如何看懂我們家「二段式電表」液晶螢幕？</h2>
        <p>走到家門口的二段式數位電表前，您會看到液晶螢幕每隔約 5 秒鐘自動跳換一組數字。不用被滿滿的數字嚇到，<mark>只要看螢幕左上角（或左方）的「2 位數項目代碼」，就能一秒讀懂全貌！</mark></p>
        <p>👇 <strong>點擊下方模擬器的代碼按鈕（<code>04</code>、<code>05</code>、<code>06</code>、<code>07</code>），親自體驗電表螢幕顯示的意思：</strong></p>

        <!-- 互動元件 2：數位電表 LCD 模擬器 -->
        <div id="widget-lcd-simulator" class="interactive-widget"></div>

        <div class="callout callout-amber">
          <div class="callout-title">📱 懶人必備：不用每天跑去看電表，直接綁定「台灣電力 App」！</div>
          <p>既然家裡已經是二段式智慧電表（AMI），只要在手機下載台電官方<strong>「台灣電力 App」</strong>，輸入電費帳單上的「11 碼電號」完成認證，就能直接在手機上看<mark>每小時、每天、每月的「尖峰 vs. 離峰」長條圖</mark>，連昨天半夜冷氣用了幾度電都一清二楚！</p>
        </div>
      </div>

      <div class="article-section" id="sec-two-vs-three">
        <h2>四、 深度評估：我們家該維持「二段式」，還是換「三段式」？</h2>
        <p>很多裝了二段式電表的人會好奇：「三段式在白天的半尖峰（4.69元）比二段式的尖峰（5.16元）便宜，而且非夏月完全沒有尖峰，那我是不是該換成三段式？」</p>
        <p>答案取決於一個最關鍵的時段——<mark>夏天傍晚 16:00 ~ 22:00 這 6 個小時！</mark></p>

        <div class="info-cards-grid two-cols">
          <div class="info-card border-emerald">
            <div class="info-card-badge badge-emerald">👍 適合維持「二段式」（我們家目前方案）</div>
            <h4>🏠 一般正常作息家庭（傍晚 16:00~22:00 有人在家）</h4>
            <p>只要夏天下午 4 點到晚上 10 點之間，家裡有人下班下課回來<strong>開冷氣、煮晚餐、看電視、洗熱水澡</strong>，二段式能幫您把這段時間鎖定在 <strong>5.16 元/度</strong>。</p>
            <p class="text-sm text-muted">👉 若貿然換成三段式，<mark>這 6 小時每度電高達 7.13 元（貴了將近 40%），夏天電費反而會暴增！</mark></p>
          </div>
          <div class="info-card border-amber">
            <div class="info-card-badge badge-amber">🔄 適合改申請「三段式」的特殊族群</div>
            <h4>🌙 夜貓族／早市店家（16:00~22:00 完全不用大電）</h4>
            <p>如果您家在<mark>下午 4 點到晚上 10 點幾乎空無一人、完全不開冷氣</mark>（例如：下午 4 點前打烊的早午餐店、或者晚上 10 點後才回家開冷氣＋半夜充電動車的人），那麼換成三段式就能享受整天 4.48~4.69 元的半尖峰優惠！</p>
          </div>
        </div>

        <h3>🧮 互動試算器：拉動滑桿，10 秒測出我們家哪種方案最省！</h3>
        <!-- 互動元件 3：電價方案試算器 -->
        <div id="widget-tariff-calculator" class="interactive-widget"></div>
      </div>

      <div class="article-section" id="sec-action-plan">
        <h2>五、 我們家的「二段式電表」黃金省電實戰清單</h2>
        <figure class="article-figure">
          <img src="assets/images/smart_saving.jpg" alt="智慧家庭週末全日離峰與定時排程省電策略圖" loading="lazy" />
          <figcaption>▲ 掌握「週末 24 小時離峰」與「家電預約定時」，不用痛苦忍耐不開冷氣，也能輕鬆把平均電價壓到最低！</figcaption>
        </figure>

        <p>既然我們家已經裝好二段式電表，不需要委屈自己不吹冷氣，只要把<strong>「高耗電的時間點移位」</strong>，就能發揮二段式電表的最大威力（可點擊下方清單打勾檢視）：</p>

        <div class="checklist-box" id="meter-action-checklist">
          <label class="checklist-item">
            <input type="checkbox" checked />
            <span><strong>【週末狂歡省電法】把大掃除、烘被單全部集中在週六、週日：</strong><mark>週六、週日及國定假日 24 小時全天都是離峰（每度僅約 2 元）</mark>！洗脫烘衣機、除濕機大開、烤箱烘焙、燉湯全部放在週末做，費用直接打 4 折。</span>
          </label>
          <label class="checklist-item">
            <input type="checkbox" checked />
            <span><strong>【夏月早晨 9 點前黃金線】善用 00:00 ~ 09:00 離峰：</strong><mark>夏天早上 9 點前都還是便宜的離峰電（2.06元/度）</mark>！把洗碗機、洗衣機設定在半夜或清晨 6~8 點自動洗完，早上出門前吹頭髮、烤吐司、客廳開冷氣也都在便宜時段內。</span>
          </label>
          <label class="checklist-item">
            <input type="checkbox" />
            <span><strong>【非夏月午間小確幸】10月~5月把握平日中午 11:00 ~ 14:00：</strong>長達 8 個月的非夏月期間，<mark>平日中午 11 點到下午 2 點是離峰時段（1.99元/度）</mark>，中午在家開空調、洗烘衣服或備料用電最划算！</span>
          </label>
          <label class="checklist-item">
            <input type="checkbox" />
            <span><strong>【一年一度健檢】去台電 App 點擊「電價表試算評估」：</strong>智慧電表會完整記錄您家過去 12 個月每一小時的真實用電，台電系統能直接幫您算出「維持二段式 vs. 改三段式 vs. 改回累進」一年各是多少錢（注意：每次更改方案需綁約滿 1 年）。</span>
          </label>
        </div>
      </div>
    `
  },
  {
    id: "business-scam-defense-line",
    flag: "🛡️",
    country: "店務防詐實錄",
    category: "business",
    categoryLabel: "🏪 創業與店務經營",
    type: "note",
    sentiment: "warning",
    sentimentLabel: "⚠️ 詐騙推銷預警",
    importance: "店主必讀",
    title: "【店務防詐實錄】自稱「LINE 官方帳號人員」要來店裡做 10 分鐘升級講解？",
    originalTitle: "Merchant Security Alert: Fake LINE Official Account In-Store Upgrade Scam Analysis",
    source: "店內電話實戰紀錄 (0983-517-201)",
    subtitle: "來自店裡專屬電話的真實案例剖析：為什麼 LINE 官方絕不會派人跑來小店面？拆解背後三大目的與防禦守則。",
    createdAt: "2026-10-19",
    readTime: "3 分鐘閱讀",
    difficulty: "創業防身必讀",
    coverImage: "assets/images/smart_saving.jpg",
    tags: ["店務經營", "防詐實錄", "LINE官方帳號", "雞蛋糕店務", "資安防護"],
    summary: "店裡專屬手機接到 <code>0983-517-201</code> 自稱「LINE 官方人員」，宣稱系統升級要親自到店講解 10 分鐘。事實上，<mark>台灣 LINE 官方絕不會主動打私人手機要求派員到微型店面做升級教學</mark>！其真實目的多為<mark>「假冒官方推銷數萬元第三方外掛合約」或「當面借老闆手機偷加管理員權限盜取帳號」</mark>。",
    keyTakeaway: "接到自稱 LINE、Google 商家或 Meta 要求到店拜訪升級，一律回覆：「請發官方系統信到我的後台，本店不接待現場訪客」並立即封鎖！",
    keyTakeaways: [
      "【100% 非官方】台灣 LINE 官方（LINE Biz-Solutions）所有功能升級一律透過「線上後台公告或官方認證信箱」，<mark>絕對不會主動打私人手機說要派業務去小店面做 10 分鐘升級講解</mark>。",
      "【三大真實目的】① <mark>假冒官方推銷高價代操／第三方外掛系統（動輒數萬元綁約）</mark>；② 現場騙取店長手機操作「掃描不明 QR Code 或設為管理員」盜取帳號；③ 探勘店面與蒐集負責人個資。",
      "【店面防禦鐵律】只要接到要求「到店拜訪升級」或「電話中給驗證碼」，一律回覆：「請發官方認證信件到我的後台信箱，我們不接待現場訪客」並直接掛斷封鎖。"
    ],
    content: `
      <div class="article-section">
        <h2>一、 事件還原與異常點分析</h2>
        <p>店裡專屬手機接到陌生來電（<code>0983-517-201</code>），對方自稱是<strong>「LINE 官方的人」</strong>，宣稱因為 LINE 官方系統有升級，要親自到店裡做 10 分鐘的現場講解。</p>
        <div class="callout callout-amber">
          <div class="callout-title">🚨 為什麼這件事一眼就能判定極高機率是詐騙／惡意推銷？</div>
          <ul>
            <li><strong>成本完全不符商業邏輯</strong>：LINE 在台灣有超過數十萬家中小企業與微型店家。<mark>官方若每次升級功能都要派真人專員全台跑透透去雞蛋糕小店面講解 10 分鐘，人事成本早就破產了！</mark></li>
            <li><strong>使用一般私人行動電話（0983 開頭）</strong>：LINE 台灣官方總機為市話代表號，且所有針對商家的通知都會直接顯示在「LINE Official Account Manager 後台鈴鐺通知」與「綠盾牌官方通知帳號」。</li>
          </ul>
        </div>

        <h2>二、 對方堅持「親自來店裡 10 分鐘」的三大目的</h2>
        <div class="info-cards-grid">
          <div class="info-card">
            <div class="info-card-badge badge-amber">目的 1 · 最常見</div>
            <h4>💸 魚目混珠的「高額外掛推銷」</h4>
            <p>電話裡故意講得很像「LINE 總公司規定要升級」，等你答應讓他進店裡後，他才會拿出平板說：「現在升級要搭配我們的點餐／集點模組」，<mark>誘騙店家簽下每年 3 萬～10 萬元不等的分期融資合約</mark>。</p>
          </div>
          <div class="info-card">
            <div class="info-card-badge badge-red">目的 2 · 最危險</div>
            <h4>🔓 當面騙取後台「管理員權限」</h4>
            <p>有些不肖集團會趁老闆忙著顧烤爐、做雞蛋糕無暇細看時，說「老闆你手機借我點一下幫你開通升級」，趁機在後台<mark>新增他們的帳號為「管理員」或掃描釣魚 QR Code</mark>，直接把店家的客群帳號整碗端走。</p>
          </div>
          <div class="info-card">
            <div class="info-card-badge badge-blue">目的 3 · 資訊刺探</div>
            <h4>🕵️ 確認店面營業狀況與老闆身分</h4>
            <p>透過電話與實地走訪，確認這支手機號碼背後是不是老闆本人、店面規模與忙碌時段，作為後續精準行銷或商業詐騙的名單。 </p>
          </div>
        </div>

        <h2>三、 店長標準應對 SOP（3 句話秒殺法）</h2>
        <ol class="styled-list">
          <li><strong>不給承諾、不約時間</strong>：「我們店面空間小、現場在備料烤蛋糕不方便接待訪客。」</li>
          <li><strong>要求走官方後台管道</strong>：「如果是官方升級，我自己登入 OA Manager 後台看公告就好，或請你們從 LINE 官方系統發通知信給我。」</li>
          <li><strong>立刻封鎖＋Whoscall 回報</strong>：掛斷電話後直接將該號碼加入封鎖名單，保護店務專線清淨！</li>
        </ol>
      </div>
    `
  },
  {
    id: "taipower-smart-meter-video-note",
    flag: "🎬",
    country: "影音學習範本",
    category: "life-finance",
    categoryLabel: "⚡ 生活科學與理財",
    type: "video",
    sentiment: "neutral",
    sentimentLabel: "🎬 雙軌影音筆記",
    importance: "功能教學",
    title: "【影音學習範例】時間電價與居家節能觀念（支援 YouTube 與本地 MP4 影片）",
    originalTitle: "Video Learning Template: Dual-Engine YouTube & Local MP4 Player with Study Notes",
    source: "Leo 的知識進化艙 · 內建雙軌播放器",
    subtitle: "這是一張「影片學習卡」範本！以後看到值得重複觀看的 YouTube 教學影片，或放進 assets/videos 資料夾的 MP4 影片，都能像這樣邊看邊記重點。",
    createdAt: "2026-10-19",
    readTime: "影片學習",
    difficulty: "影音筆記範本",
    coverImage: "assets/images/tou_lifestyle.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["影音筆記", "時間電價", "使用方法教學"],
    summary: "本網站內建<mark>「YouTube 網址自動嵌入」與「本地 MP4 離線播放」雙軌影音引擎</mark>。您可以把想重複觀看的教學短片丟進 <code>assets/videos/</code> 資料夾，或直接貼上 YouTube 連結，在下方寫下時間戳記與個人心得。",
    keyTakeaway: "點擊右上角「＋ 新增知識 / 影片」，選擇「🎬 影片學習筆記」，即可輕鬆建立屬於自己的影音學習清單！",
    keyTakeaways: [
      "【如何新增 YouTube 影片】點擊網站右上角「＋ 新增知識 / 影片」，選擇「🎬 影片學習筆記」，<mark>直接貼上任何 YouTube 網址，系統就會自動轉換為內嵌播放器</mark>！",
      "【如何播放電腦／手機裡的 MP4 影片】只要<mark>把影片檔丟進 Leo個人知識庫/assets/videos/ 資料夾</mark>（例如 my_video.mp4），在影片網址欄輸入 assets/videos/my_video.mp4 即可離線流暢播放！",
      "【重複觀看與筆記】每部影片下方都可以隨時記錄您的觀看心得與時間軸重點，並點擊「已複習 +1」追蹤學習次數。"
    ],
    content: `
      <div class="article-section">
        <h2>🎬 如何使用「影片學習筆記」功能？</h2>
        <p>為了讓這個網站成為您真正的<strong>個人成長與雙重記憶庫</strong>，系統特別內建了<strong>雙軌影片播放引擎</strong>：</p>
        <div class="info-cards-grid two-cols">
          <div class="info-card">
            <h4>🌐 方式 A：直接貼上 YouTube 連結</h4>
            <p>不管是財經科普、烘焙教學、商業思維還是紀錄片，只要複製 YouTube 網址（支援一般網址、<code>youtu.be</code> 短網址），貼入新增表單，就會自動嵌入高畫質播放器。</p>
          </div>
          <div class="info-card">
            <h4>📂 方式 B：放入本地資料夾離線觀看</h4>
            <p>如果您有自己錄製的教學影片或下載好的 <code>.mp4</code> 檔案，只要放進 <code>Leo個人知識庫/assets/videos/</code> 資料夾，路徑填寫 <code>assets/videos/檔名.mp4</code>，不連網也能隨時打開觀看！</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "feynman-learning-method",
    flag: "🧠",
    country: "認知思維模型",
    category: "growth",
    categoryLabel: "🧠 思維模型與成長",
    type: "article",
    sentiment: "positive",
    sentimentLabel: "🌟 終身成長心法",
    importance: "底層邏輯",
    title: "費曼學習法（Feynman Technique）：如何把看過的知識變成真正的底層實力？",
    originalTitle: "The Feynman Technique: How to Turn Information into Deep, Lasting Mastery",
    source: "諾貝爾物理學獎得主 Richard Feynman 學習心法",
    subtitle: "當你能用連小學生都聽得懂的白話文解釋一個複雜概念，這項知識才真正屬於你。",
    createdAt: "2026-10-19",
    readTime: "4 分鐘閱讀",
    difficulty: "核心思維模型",
    coverImage: "assets/images/meter_comparison.jpg",
    tags: ["費曼學習法", "自我成長", "讀書方法", "思維模型"],
    summary: "多數人看書或看影片覺得「我看懂了」，其實只是記住了專有名詞的名稱。諾貝爾物理學獎得主費曼提出<mark>「以教代學（Learning by Teaching）」四步驟：鎖定概念 ➔ 用白話文講給外行人聽 ➔ 卡殼時回頭查漏補缺 ➔ 精煉比喻並定期複習</mark>，讓知識留存率提升至 90% 以上。",
    keyTakeaway: "每次請 AI 科普一個新領域（如台灣電表與二段式時間電價），存進知識庫後隔幾天抽出來複習，並在下方筆記欄寫下一句自己的白話總結！",
    keyTakeaways: [
      "【假性理解陷阱】多數人看書或看影片覺得「我看懂了」，其實只是記住了專有名詞的名稱，一被問到「為什麼」就卡住。",
      "【費曼四步驟】<mark>① 選定目標概念 ➔ ② 假裝教給一個完全不懂的人（用最白話的比喻） ➔ ③ 卡殼時回頭查漏補缺 ➔ ④ 簡化語言並建立生活連結</mark>。",
      "【結合本網站的實踐法】每次請 AI 幫您科普一個新領域（像這次的台灣電表與二段式時間電價），存進這個知識庫後，隔幾天用「隨機複習」抽出來看一遍，並在下方筆記欄寫下一句自己的白話總結！"
    ],
    content: `
      <div class="article-section">
        <h2>為什麼我們看了很多文章與影片，過兩週卻忘光光？</h2>
        <p>現代人每天滑手機接收大量資訊，但大腦對於<strong>「被動接收的零碎資訊」</strong>留存率不到 10%。諾貝爾物理學獎得主理查・費曼（Richard Feynman）提出了一個極為強大的認知升級工具——<mark>「以教代學（Learning by Teaching）」</mark>。</p>

        <h3>🚀 費曼學習法 4 個核心步驟</h3>
        <div class="info-cards-grid two-cols">
          <div class="info-card">
            <div class="info-card-badge badge-blue">Step 1 · 鎖定概念</div>
            <h4>🎯 拿出一張白紙（或開一張知識卡）</h4>
            <p>寫下你今天想徹底搞懂的一個主題，例如：「台灣二段式電表 vs. 三段式電表差在哪？」</p>
          </div>
          <div class="info-card">
            <div class="info-card-badge badge-emerald">Step 2 · 模擬教學</div>
            <h4>🗣️ 用「店裡聊天」的白話文講出來</h4>
            <p>想像對面坐著一位完全不懂電學的朋友，不用複雜術語，而是用<mark>「手機機身 vs. 電信資費」來比喻「智慧電表硬體 vs. 二段式時間電價」</mark>。</p>
          </div>
          <div class="info-card">
            <div class="info-card-badge badge-amber">Step 3 · 修正卡點</div>
            <h4>🔍 發現講不清楚的地方，精準回頭查資料</h4>
            <p>如果講到一半發現：「咦？那非夏月的中午為什麼也是離峰？」這時候回頭看文章，記憶會比平常深刻 10 倍！</p>
          </div>
          <div class="info-card">
            <div class="info-card-badge badge-purple">Step 4 · 內化複習</div>
            <h4>🔁 定期回顧，讓知識產生複利</h4>
            <p>利用本網站的<strong>「已讀複習打卡」</strong>與<strong>「個人隨手筆記」</strong>，把好文章重複讀 3 次以上，它就會變成你直覺反應的一部分。</p>
          </div>
        </div>
      </div>
    `
  }
];
