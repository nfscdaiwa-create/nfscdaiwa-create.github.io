(function(){
function add(code,ui,page,seo){
  i18nTokens[code]={...i18nTokens.en,...ui};
  pageContentI18n[code]=page;
  brandStoryI18n[code]=brandStoryI18n.en;
  window.jpbuildSeo20=window.jpbuildSeo20||{}; window.jpbuildSeo20[code]=seo;
}
add('ru',{
 lbl_language:'Язык',nav_ledger:'Бренды-партнёры',nav_catalog:'Продукция',nav_product_finder:'Подбор продукции',nav_catalogues:'Официальные каталоги',nav_showroom:'Шоурум',nav_specguide:'Спецификации',nav_process:'Экспортный процесс',nav_quality:'Контроль качества',nav_contact:'Контакты',nav_brand_stories:'Истории брендов',
 ann_badge:'ГЛОБАЛЬНЫЙ ДИСТРИБЬЮТОР',ann_text:'EST Co., Ltd. — экспортный партнёр ведущих японских строительных брендов из Токио.',
 hero_tagline:'ЯПОНСКОЕ КАЧЕСТВО. ГЛОБАЛЬНЫЙ МАСШТАБ.',hero_title:'Японское качество для международных проектов.',hero_intro:'Отобранные японские материалы, мультибрендовый sourcing и координация экспорта с точностью, прослеживаемостью и вниманием японского производства.',
 trust_1:'10+ брендов-партнёров',trust_2:'Консолидация FCL / LCL',trust_3:'Контроль закупки из Токио',trust_4:'Координация документов',
 ledger_eyebrow:'РЕЕСТР БРЕНДОВ',ledger_h2:'Каждый заказ полностью документирован.',ledger_p:'Мы закупаем у ведущих японских производителей и консолидируем мультибрендовые грузы по оригинальному манифесту.',
 why_eyebrow:'ЯПОНСКИЙ КОНТРОЛЬ КАЧЕСТВА',why_h2:'Японская точность, документированная для экспорта.',why_p:'Приёмка, сверка спецификаций и предзагрузочная проверка фиксируются для каждого продукта и согласованного объёма.',
 process_eyebrow:'B2B ПРОЦЕСС',process_h2:'Структурированный путь закупки в Японии',process_p:'До подтверждения заказа мы согласуем требования рынка, спецификации, сроки и план загрузки.',
 step1_t:'1. Выберите категорию',step1_d:'Укажите категорию, бренды и требования страны.',step2_t:'2. Подтвердите образцы',step2_d:'Проверьте каталоги, цвета, образцы и официальные данные.',step3_t:'3. Сверьте спецификации',step3_d:'Проверьте документы, сертификаты и местные нормы.',step4_t:'4. Рассчитайте объём',step4_d:'Подтвердите MOQ, цену, срок и контейнерный план.',step5_t:'5. Консолидация и загрузка',step5_d:'Мы объединяем фабрики, проверяем, паллетируем и пломбируем.',step6_t:'6. Поддержка',step6_d:'Координируем таможенные документы и повторные заказы.',
 f_h2:'Начните запрос на оптовую поставку',f_p:'Отправьте спецификацию напрямую экспортному офису в Токио.',
 lbl_download_title:'Что нужно для расчёта',lbl_download_desc:'Пришлите продукт, направление и объём — мы проверим экспорт, срок и цену.',quote_product:'Модель, официальный URL или скриншот',quote_destination:'Страна, порт и местные нормы',quote_volume:'Количество, стадия проекта и срок',lbl_instant_desk:'Прямой sourcing desk',lbl_download_desc_2:'Свяжитесь напрямую с международной командой.',btn_chat_whatsapp:'Написать в WhatsApp ↗',btn_copy_email:'Скопировать e-mail ⎘',
 faq_eyebrow:'FAQ ПОКУПАТЕЛЯ',faq_h2:'Вопросы перед закупкой в Японии',faq_intro:'Экспорт, объём, спецификации, документы и доставка — без лишней неопределённости.'
},{
 supply:['ОБЪЁМ ПОСТАВКИ','Шесть категорий, десять производителей, один заказ.','Сравниваем характеристики, отделку и бюджет между брендами и объединяем в одну поставку.'],
 counts:['4 производителя','5 производителей','4 производителя','2 производителя','2 производителя','2 производителя'],
 titles:['Обои и декоративная плёнка','Напольные покрытия','Межкомнатные двери и хранение','Окна и входные двери','Кухни, ванные и умывальные зоны','Плиты и потолочные системы'],
 descs:['Коммерческий винил, нетканые покрытия и декоративная плёнка.','Инженерная и массивная древесина, LVT, винил и ковровая плитка.','Распашные/раздвижные двери, шкафы и системы хранения.','Алюминиевые, PVC и гибридные окна и входные двери.','Системные кухни, модульные ванные, умывальники, туалеты и смесители.','Стандартные, огнестойкие, влагостойкие и акустические плиты.'],
 choose:'ВЫБРАТЬ ИЗ',quote:'Запросить цену категории',catalogue:['ОФИЦИАЛЬНЫЕ КАТАЛОГИ','Выбирайте у источника, заказывайте через один офис.','Выберите модель и цвет на сайте производителя и пришлите коды для объединённого предложения.','ОФИЦИАЛЬНЫЙ КАТАЛОГ'],
 facilities:['ШОУРУМ И ЛОГИСТИКА · ТОКИО, ЯПОНИЯ','Реальный товар, реальный шоурум, отгрузка из Японии.','Шоурум в Токио используется для выбора, склад — для консолидации и загрузки.','ТУР ПО ШОУРУМУ','Токио — выберите до отправки','Представлены LIXIL, Panasonic, TOCLAS и библиотеки образцов Sangetsu, Lilycolor, Sincol.'],
 specGuide:['ТЕХНИЧЕСКИЕ ЗАМЕТКИ','Что меняется при выборе японских материалов?','Японские продукты выпускаются по японским нормам и модулям; важные различия проверяются до первого заказа.'],
 contactLabels:['Компания','Головной офис','Телефон','Факс','Сайт','Представитель','Экспортные центры'],quoteLabels:['01 · ПРОДУКТ','02 · НАПРАВЛЕНИЕ','03 · ОБЪЁМ'],footerLinks:['Бренды','Каталог','Процесс','Контакты'],footerText:'EST Co., Ltd. — дистрибьютор и глобальный партнёр японских производителей строительных материалов.',location:'Токио, Япония',lbl_language:'Язык'
},['Японские строительные материалы: дистрибьютор и экспорт | EST','Японские строительные материалы, мультибрендовая консолидация FCL/LCL и международная доставка из Японии.']);

add('de',{
 lbl_language:'Sprache',nav_ledger:'Markenpartner',nav_catalog:'Produkte',nav_product_finder:'Produktfinder',nav_catalogues:'Offizielle Kataloge',nav_showroom:'Showroom',nav_specguide:'Spezifikationsguide',nav_process:'Exportprozess',nav_quality:'Qualitätsstandard',nav_contact:'Kontakt',nav_brand_stories:'Markenstories',
 ann_badge:'GLOBALER DISTRIBUTOR',ann_text:'EST Co., Ltd. ist der Exportpartner aus Tokio für führende japanische Baumarken.',
 hero_tagline:'JAPANISCHE QUALITÄT. GLOBALE REICHWEITE.',hero_title:'Japanische Qualität, für die Welt spezifiziert.',hero_intro:'Ausgewählte japanische Baustoffe, Multimarken-Sourcing und Exportkoordination mit der Präzision und Rückverfolgbarkeit japanischer Fertigung.',
 trust_1:'10+ Partnermarken',trust_2:'FCL / LCL Konsolidierung',trust_3:'Sourcing-Kontrolle aus Tokio',trust_4:'Dokumentenkoordination',
 ledger_eyebrow:'MARKENREGISTER',ledger_h2:'Jede Bestellung vollständig dokumentiert.',ledger_p:'Wir beziehen von führenden japanischen Herstellern und bündeln Multimarken-Ladungen unter dem Originalmanifest.',
 why_eyebrow:'JAPANISCHE QUALITÄTSKONTROLLE',why_h2:'Japanische Präzision, für den Export dokumentiert.',why_p:'Wareneingang, Spezifikationsabgleich und Kontrolle vor der Verladung werden je Produkt und Auftragsumfang dokumentiert.',
 process_eyebrow:'B2B ABLAUF',process_h2:'Ein strukturierter Weg zum Japan-Sourcing',process_p:'Wir gleichen Zielmarkt, Spezifikation, Lieferzeit und Ladeplan vor der Bestellung ab.',
 step1_t:'1. Kategorie wählen',step1_d:'Kategorie, Marken und Zielanforderungen angeben.',step2_t:'2. Muster bestätigen',step2_d:'Kataloge, Farben, Muster und offizielle Daten prüfen.',step3_t:'3. Spezifikationen abgleichen',step3_d:'Datenblätter, Zertifikate und lokale Normen prüfen.',step4_t:'4. Volumen kalkulieren',step4_d:'MOQ, Preis, Lieferzeit und Containerplan bestätigen.',step5_t:'5. Konsolidieren & laden',step5_d:'Wir bündeln, prüfen, palettieren und versiegeln.',step6_t:'6. Support',step6_d:'Zolldokumente und Nachbestellungen koordinieren.',
 f_h2:'Starten Sie Ihre Containeranfrage',f_p:'Senden Sie Ihre Spezifikationsliste direkt an den Export Desk in Tokio.',
 lbl_download_title:'Was wir für ein Angebot benötigen',lbl_download_desc:'Produkt, Ziel und Menge senden; wir prüfen Exportfähigkeit, Zeit und Preis.',quote_product:'Modellcode, offizielle Seite oder Screenshot',quote_destination:'Land, Hafen und lokale Norm',quote_volume:'Menge, Projektphase und Termin',lbl_instant_desk:'Direkter Sourcing Desk',lbl_download_desc_2:'Direkter Kontakt mit unserem internationalen Team.',btn_chat_whatsapp:'WhatsApp Chat ↗',btn_copy_email:'Geschäfts-E-Mail kopieren ⎘',
 faq_eyebrow:'FAQ FÜR EXPORTKÄUFER',faq_h2:'Fragen vor dem Einkauf in Japan',faq_intro:'Klare Antworten zu Export, Volumen, Spezifikationen, Dokumenten und Versand.'
},{
 supply:['LIEFERUMFANG','Sechs Kategorien, zehn Hersteller, eine Bestellung.','Wir vergleichen Leistung, Oberfläche und Budget zwischen Herstellern und konsolidieren in einer Lieferung.'],
 counts:['4 Hersteller','5 Hersteller','4 Hersteller','2 Hersteller','2 Hersteller','2 Hersteller'],
 titles:['Wandbeläge & Dekorfolien','Bodenbeläge','Innentüren & Stauraum','Fenster & Eingangstüren','Küche, Bad & Waschtisch','Platten & Deckensysteme'],
 descs:['Objekt-Vinyl, Vlies und Dekorfolien für Projekte.','Mehrschicht-/Massivholz, LVT, Sicherheitsvinyl und Teppichfliesen.','Dreh-/Schiebetüren, Schränke und Stauraumsysteme.','Aluminium-, PVC- und Hybridsysteme plus Eingangstüren.','Systemküchen, Modulbäder, Waschtische, WCs und Armaturen.','Standard-, Brand-, Feuchte- und Akustikplatten.'],
 choose:'AUS DIESEN MARKEN WÄHLEN',quote:'Angebot für diese Kategorie',catalogue:['OFFIZIELLE HERSTELLERKATALOGE','An der Quelle spezifizieren, über einen Desk bestellen.','Modell und Farbe beim Hersteller wählen und Codes für ein gebündeltes Angebot senden.','OFFIZIELLER KATALOG'],
 facilities:['SHOWROOM & LOGISTIK · TOKIO, JAPAN','Echter Bestand, echter Showroom, Versand aus Japan.','Der Tokio-Showroom dient der Auswahl, das Lager der Konsolidierung und Verladung.','SHOWROOM-RUNDGANG','Tokio-Showroom — vor Versand auswählen','LIXIL, Panasonic, TOCLAS sowie Mustersammlungen von Sangetsu, Lilycolor und Sincol.'],
 specGuide:['SPEZIFIKATIONSHINWEISE FÜR INTERNATIONALE KÄUFER','Was ändert sich bei japanischen Materialien?','Japanische Produkte folgen japanischen Normen und Abmessungen; wichtige Unterschiede vor der ersten Bestellung prüfen.'],
 contactLabels:['Unternehmen','Hauptsitz','Telefon','Fax','Website','Vertreterin','Exportstandorte'],quoteLabels:['01 · PRODUKT','02 · ZIEL','03 · VOLUMEN'],footerLinks:['Marken','Katalog','Prozess','Kontakt'],footerText:'EST Co., Ltd. ist Distributor und globaler Lieferpartner japanischer Baustoffhersteller.',location:'Tokio, Japan',lbl_language:'Sprache'
},['Japanische Baustoffe: Distributor & Exporteur | EST','Japanische Baustoffe mit Multimarken-FCL/LCL-Konsolidierung und weltweitem Versand aus Japan.']);

add('ja',{
 lbl_language:'言語',nav_ledger:'取扱ブランド',nav_catalog:'製品',nav_product_finder:'製品選定',nav_catalogues:'公式カタログ',nav_showroom:'ショールーム',nav_specguide:'仕様ガイド',nav_process:'輸出プロセス',nav_quality:'品質基準',nav_contact:'お問い合わせ',nav_brand_stories:'ブランドストーリー',
 ann_badge:'グローバルディストリビューター',ann_text:'EST 株式会社は東京を拠点に、日本の主要建材ブランドの海外展開を支援します。',
 hero_tagline:'日本品質を、世界へ。',hero_title:'日本の品質を、世界の仕様へ。',hero_intro:'厳選した日本建材、複数ブランドの調達、輸出調整を、日本のものづくりに根ざした精度・追跡性・丁寧さで提供します。',
 trust_1:'10社以上の取扱ブランド',trust_2:'FCL / LCL 混載',trust_3:'東京本社で調達管理',trust_4:'適合資料の調整',
 ledger_eyebrow:'取扱ブランド',ledger_h2:'すべての注文を、資料とともに管理。',ledger_p:'日本の主要メーカーから調達し、元ブランドの明細を維持したまま複数ブランドを混載します。',
 why_eyebrow:'日本の品質管理',why_h2:'輸出のために記録された、日本の精度。',why_p:'入荷確認、仕様照合、積込前検査を、製品と合意した注文範囲に応じて記録します。',
 process_eyebrow:'B2B 取引フロー',process_h2:'日本調達を進めるための明確なプロセス',process_p:'仕向地基準、仕様、納期、積載計画を注文前に整理します。',
 step1_t:'1. カテゴリー選定',step1_d:'カテゴリー、ブランド、仕向地条件を共有してください。',step2_t:'2. サンプル確認',step2_d:'カタログ、色、サンプル、公式データを確認します。',step3_t:'3. 仕様照合',step3_d:'仕様書、証明書、現地基準を照合します。',step4_t:'4. 数量見積り',step4_d:'MOQ、価格、納期、積載計画を確認します。',step5_t:'5. 混載・積込',step5_d:'複数工場の貨物を検品し、パレット化して封印します。',step6_t:'6. サポート',step6_d:'通関書類と再注文を調整します。',
 f_h2:'コンテナ調達のご相談を開始',f_p:'仕様リストを東京の輸出窓口へ直接お送りください。',
 lbl_download_title:'見積りに必要な情報',lbl_download_desc:'製品、仕向地、数量をお送りいただければ、輸出可否、納期、価格を確認します。',quote_product:'品番、公式ページ URL、またはスクリーンショット',quote_destination:'国、港、現地規格',quote_volume:'数量、プロジェクト段階、希望時期',lbl_instant_desk:'直接調達窓口',lbl_download_desc_2:'海外供給チームへ直接ご連絡ください。',btn_chat_whatsapp:'WhatsApp で連絡 ↗',btn_copy_email:'メールアドレスをコピー ⎘',
 faq_eyebrow:'海外バイヤー FAQ',faq_h2:'日本から調達する前によくある質問',faq_intro:'輸出可否、数量、仕様、書類、輸送について明確にご案内します。'
},{
 supply:['供給範囲','6カテゴリー、10メーカー、1つの発注窓口。','性能、仕上げ、予算をメーカー横断で比較し、1つの出荷にまとめます。'],
 counts:['4メーカー','5メーカー','4メーカー','2メーカー','2メーカー','2メーカー'],
 titles:['壁紙・化粧フィルム','床材','室内ドア・収納','窓・玄関ドア','キッチン・浴室・洗面','ボード・天井システム'],
 descs:['プロジェクト向けビニル壁紙、不織布、化粧フィルム。','複合・無垢フローリング、LVT、長尺シート、タイルカーペット。','開き戸・引戸、収納、ドアセット。','アルミ、PVC、複合窓と玄関ドア。','システムキッチン、ユニットバス、洗面、トイレ、水栓。','標準、耐火、耐湿、吸音ボード。'],
 choose:'取扱ブランドから選択',quote:'このカテゴリーを見積依頼',catalogue:['メーカー公式カタログ','公式情報から選び、1つの窓口で発注。','メーカーサイトで品番と色を選び、コードをお送りください。','公式カタログ'],
 facilities:['ショールーム・物流 · 東京、日本','実在庫、実ショールーム、日本から出荷。','東京ショールームで選定し、倉庫で混載・積込を行います。','ショールーム案内','東京ショールーム — 出荷前に選定','LIXIL、Panasonic、TOCLAS と Sangetsu、Lilycolor、Sincol のサンプルを確認できます。'],
 specGuide:['海外バイヤー向け仕様ポイント','日本建材を指定すると何が変わる？','日本製品は日本の規格と寸法体系で作られます。初回発注前に重要な差異を確認します。'],
 contactLabels:['会社名','本社','電話','FAX','ウェブサイト','代表者','輸出拠点'],quoteLabels:['01 · 製品','02 · 仕向地','03 · 数量'],footerLinks:['ブランド','カタログ','プロセス','お問い合わせ'],footerText:'EST 株式会社は、日本の主要建材メーカーの販売・グローバル供給パートナーです。',location:'東京、日本',lbl_language:'言語'
},['日本建材の販売・輸出 | EST 株式会社','日本建材の複数ブランド混載、FCL/LCL、海外輸出を日本から一括対応します。']);

add('pcm',{
 lbl_language:'Language',nav_ledger:'Brand partners',nav_catalog:'Products',nav_product_finder:'Product finder',nav_catalogues:'Official catalogues',nav_showroom:'Showroom',nav_specguide:'Spec guide',nav_process:'Export process',nav_quality:'Quality standard',nav_contact:'Contact',nav_brand_stories:'Brand stories',
 ann_badge:'GLOBAL DISTRIBUTOR',ann_text:'EST Co., Ltd. na Tokyo export partner for leading Japan building brands.',
 hero_tagline:'JAPAN QUALITY. GLOBAL REACH.',hero_title:'Japan quality, ready for global specification.',hero_intro:'Selected Japan building materials, multi-brand sourcing and export coordination with the precision and traceability of Japan manufacturing.',
 trust_1:'10+ partner brands',trust_2:'FCL / LCL consolidation',trust_3:'Tokyo sourcing control',trust_4:'Compliance document support',
 ledger_eyebrow:'BRAND RECORD',ledger_h2:'Every order get full documentation.',ledger_p:'We source from leading Japan manufacturers and consolidate multi-brand shipments under original brand manifest.',
 why_eyebrow:'JAPAN QUALITY CONTROL',why_h2:'Japan precision, documented for export.',why_p:'Receiving checks, specification matching and pre-loading inspection dey recorded according to product and agreed order scope.',
 process_eyebrow:'B2B PROCESS',process_h2:'Clear process to source from Japan',process_p:'We align destination standard, specification, lead time and loading plan before order confirmation.',
 step1_t:'1. Choose category',step1_d:'Tell us category, brands and destination needs.',step2_t:'2. Confirm samples',step2_d:'Check catalogues, colours, samples and official data.',step3_t:'3. Match specification',step3_d:'Check spec sheets, certificates and local codes.',step4_t:'4. Quote volume',step4_d:'Confirm MOQ, price, time and container plan.',step5_t:'5. Consolidate & load',step5_d:'We combine factories, inspect, palletize and seal.',step6_t:'6. Support',step6_d:'We coordinate customs documents and reorders.',
 f_h2:'Start your wholesale container request',f_p:'Send your spec list direct to our Tokyo export desk.',
 lbl_download_title:'Wetin we need for quote',lbl_download_desc:'Send product, destination and volume; we go check export route, time and price.',quote_product:'Model code, official page or screenshot',quote_destination:'Country, port and local standard',quote_volume:'Quantity, project stage and timing',lbl_instant_desk:'Direct sourcing desk',lbl_download_desc_2:'Talk direct with our international supply team.',btn_chat_whatsapp:'Chat for WhatsApp ↗',btn_copy_email:'Copy business email ⎘',
 faq_eyebrow:'EXPORT BUYER FAQ',faq_h2:'Questions buyers dey ask before sourcing from Japan',faq_intro:'Clear answers about export, volume, spec, documents and shipping.'
},{
 supply:['SUPPLY SCOPE','Six categories, ten manufacturers, one purchase order.','We compare performance, finish and budget across manufacturers and consolidate into one shipment.'],
 counts:['4 manufacturers','5 manufacturers','4 manufacturers','2 manufacturers','2 manufacturers','2 manufacturers'],
 titles:['Wallcovering & decorative film','Flooring','Interior doors & storage','Windows & entrance doors','Kitchen, bath & washroom','Boards & ceiling systems'],
 descs:['Project vinyl, non-woven and decorative film.','Engineered/solid wood, LVT, safety vinyl and carpet tile.','Hinged/sliding doors, closets and storage sets.','Aluminium, PVC and hybrid windows and entry doors.','System kitchen, unit bath, vanity, toilet and tapware.','Standard, fire, moisture and acoustic boards.'],
 choose:'CHOOSE FROM',quote:'Request quote for this category',catalogue:['OFFICIAL MANUFACTURER CATALOGUES','Choose from source, order through one desk.','Pick model and colour on manufacturer site, send codes for one quote.','OFFICIAL CATALOGUE'],
 facilities:['SHOWROOM & LOGISTICS · TOKYO, JAPAN','Real stock, real showroom, shipping from Japan.','Tokyo showroom for selection; warehouse for consolidation and loading.','SHOWROOM TOUR','Tokyo showroom — choose before shipping','LIXIL, Panasonic, TOCLAS and Sangetsu, Lilycolor, Sincol sample libraries dey available.'],
 specGuide:['SPEC NOTES FOR INTERNATIONAL BUYERS','Wetin change when you choose Japan materials?','Japan products follow Japan standards and dimensions; important differences need check before first order.'],
 contactLabels:['Company','Head office','Phone','Fax','Website','Representative','Export hubs'],quoteLabels:['01 · PRODUCT','02 · DESTINATION','03 · VOLUME'],footerLinks:['Brands','Catalogue','Process','Contact'],footerText:'EST Co., Ltd. na distributor and global supply partner for Japan building material manufacturers.',location:'Tokyo, Japan',lbl_language:'Language'
},['Japan Building Materials Distributor & Exporter | EST','Japan building materials, multi-brand FCL/LCL consolidation and worldwide shipping from Japan.']);

add('mr',{
 lbl_language:'भाषा',nav_ledger:'ब्रँड भागीदार',nav_catalog:'उत्पादने',nav_product_finder:'उत्पादन निवड',nav_catalogues:'अधिकृत कॅटलॉग',nav_showroom:'शोरूम',nav_specguide:'स्पेसिफिकेशन गाईड',nav_process:'निर्यात प्रक्रिया',nav_quality:'गुणवत्ता मानक',nav_contact:'संपर्क',nav_brand_stories:'ब्रँड कथा',
 ann_badge:'जागतिक वितरक',ann_text:'EST Co., Ltd. टोकियोमधून जपानच्या प्रमुख बांधकाम ब्रँडचा निर्यात भागीदार आहे.',
 hero_tagline:'जपानी गुणवत्ता. जागतिक पोहोच.',hero_title:'जपानी गुणवत्ता, जगासाठी निर्दिष्ट.',hero_intro:'निवडक जपानी बांधकाम साहित्य, मल्टी-ब्रँड सोर्सिंग आणि निर्यात समन्वय—जपानी उत्पादनाच्या अचूकता व ट्रेसिबिलिटीसह.',
 trust_1:'10+ भागीदार ब्रँड',trust_2:'FCL / LCL एकत्रीकरण',trust_3:'टोकियो सोर्सिंग नियंत्रण',trust_4:'अनुपालन दस्तऐवज समन्वय',
 ledger_eyebrow:'ब्रँड नोंद',ledger_h2:'प्रत्येक ऑर्डर, पूर्ण दस्तऐवजीकरण.',ledger_p:'आम्ही जपानच्या प्रमुख उत्पादकांकडून सोर्स करून मूळ ब्रँड मॅनिफेस्टनुसार मल्टी-ब्रँड शिपमेंट हाताळतो.',
 why_eyebrow:'जपानी गुणवत्ता नियंत्रण',why_h2:'निर्यातीसाठी दस्तऐवजीकृत जपानी अचूकता.',why_p:'प्राप्ती तपासणी, स्पेसिफिकेशन जुळवणी आणि लोडिंगपूर्व तपासणी प्रत्येक उत्पादन व ठरलेल्या ऑर्डरनुसार नोंदवली जाते.',
 process_eyebrow:'B2B प्रक्रिया',process_h2:'जपान सोर्सिंगची संरचित प्रक्रिया',process_p:'गंतव्य मानके, स्पेसिफिकेशन, लीड टाइम व लोडिंग प्लॅन ऑर्डरपूर्वी जुळवतो.',
 step1_t:'1. श्रेणी निवडा',step1_d:'श्रेणी, ब्रँड आणि गंतव्य गरजा सांगा.',step2_t:'2. नमुने तपासा',step2_d:'कॅटलॉग, रंग, नमुने आणि अधिकृत डेटा पाहा.',step3_t:'3. स्पेसिफिकेशन जुळवा',step3_d:'स्पेक, प्रमाणपत्रे आणि स्थानिक कोड तपासा.',step4_t:'4. प्रमाण कोट करा',step4_d:'MOQ, किंमत, वेळ आणि कंटेनर प्लॅन निश्चित करा.',step5_t:'5. एकत्रीकरण व लोडिंग',step5_d:'माल तपासून पॅलेट आणि सील करतो.',step6_t:'6. सहाय्य',step6_d:'कस्टम्स कागदपत्रे आणि पुनःऑर्डर समन्वयित करतो.',
 f_h2:'तुमची होलसेल कंटेनर विनंती सुरू करा',f_p:'स्पेसिफिकेशन सूची थेट टोकियो निर्यात डेस्कला पाठवा.',
 lbl_download_title:'कोटेशनसाठी काय हवे',lbl_download_desc:'उत्पादन, गंतव्य व प्रमाण पाठवा; निर्यात, वेळ व किंमत तपासू.',quote_product:'मॉडेल कोड, अधिकृत पेज किंवा स्क्रीनशॉट',quote_destination:'देश, पोर्ट आणि स्थानिक मानक',quote_volume:'प्रमाण, प्रकल्प टप्पा आणि वेळ',lbl_instant_desk:'थेट सोर्सिंग डेस्क',lbl_download_desc_2:'आंतरराष्ट्रीय टीमशी थेट संपर्क करा.',btn_chat_whatsapp:'WhatsApp वर चॅट ↗',btn_copy_email:'व्यवसाय ईमेल कॉपी ⎘',
 faq_eyebrow:'निर्यात खरेदीदार FAQ',faq_h2:'जपानमधून खरेदीपूर्वी सामान्य प्रश्न',faq_intro:'निर्यात, प्रमाण, स्पेक, कागदपत्रे आणि शिपिंगबद्दल स्पष्ट उत्तरे.'
},{
 supply:['पुरवठा व्याप्ती','सहा श्रेणी, दहा उत्पादक, एक खरेदी आदेश.','कामगिरी, फिनिश आणि बजेटनुसार उत्पादकांची तुलना करून एकाच शिपमेंटमध्ये एकत्र करतो.'],
 counts:['4 उत्पादक','5 उत्पादक','4 उत्पादक','2 उत्पादक','2 उत्पादक','2 उत्पादक'],
 titles:['वॉलकव्हरिंग व डेकोरेटिव्ह फिल्म','फ्लोरिंग','इंटेरिअर दरवाजे व स्टोरेज','खिडक्या व प्रवेशद्वार','किचन, बाथ व वॉशरूम','बोर्ड व सीलिंग सिस्टिम'],
 descs:['प्रकल्पासाठी विनाइल, नॉन-वोवन व डेकोरेटिव्ह फिल्म.','इंजिनिअर्ड/सॉलिड लाकूड, LVT, सेफ्टी विनाइल व कार्पेट टाइल.','हिंग्ड/स्लाइडिंग दरवाजे, कपाटे व स्टोरेज.','अॅल्युमिनियम, PVC, हायब्रिड खिडक्या व प्रवेशद्वार.','सिस्टम किचन, युनिट बाथ, व्हॅनिटी, टॉयलेट व टॅपवेअर.','स्टँडर्ड, फायर, मॉइश्चर व अकौस्टिक बोर्ड.'],
 choose:'या ब्रँडमधून निवडा',quote:'या श्रेणीचे कोटेशन मागवा',catalogue:['अधिकृत निर्माता कॅटलॉग','मूळ स्रोतावरून निवडा, एका डेस्कवरून ऑर्डर करा.','निर्माता साइटवर मॉडेल/रंग निवडा व कोड पाठवा.','अधिकृत कॅटलॉग'],
 facilities:['शोरूम व लॉजिस्टिक्स · टोकियो, जपान','खरा स्टॉक, खरे शोरूम, जपानमधून शिपमेंट.','टोकियो शोरूम निवडीसाठी आणि वेअरहाउस एकत्रीकरण/लोडिंगसाठी.','शोरूम टूर','टोकियो शोरूम — शिपमेंटपूर्व निवड','LIXIL, Panasonic, TOCLAS आणि Sangetsu, Lilycolor, Sincol नमुने उपलब्ध.'],
 specGuide:['आंतरराष्ट्रीय खरेदीदारांसाठी स्पेक नोट्स','जपानी साहित्य निवडताना काय बदलते?','जपानी उत्पादने जपानी मानक व मोजमापांवर आधारित असतात; पहिल्या ऑर्डरपूर्व महत्त्वाचे फरक तपासा.'],
 contactLabels:['कंपनी','मुख्यालय','फोन','फॅक्स','वेबसाइट','प्रतिनिधी','निर्यात केंद्र'],quoteLabels:['01 · उत्पादन','02 · गंतव्य','03 · प्रमाण'],footerLinks:['ब्रँड','कॅटलॉग','प्रक्रिया','संपर्क'],footerText:'EST Co., Ltd. जपानी बांधकाम साहित्य उत्पादकांचा वितरक आणि जागतिक पुरवठा भागीदार आहे.',location:'टोकियो, जपान',lbl_language:'भाषा'
},['जपानी बांधकाम साहित्य वितरक व निर्यातदार | EST','जपानी बांधकाम साहित्य, मल्टी-ब्रँड FCL/LCL एकत्रीकरण आणि जगभर शिपिंग.']);
})();