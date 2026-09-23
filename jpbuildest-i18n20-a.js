(function(){
function add(code,ui,page,seo){
  i18nTokens[code]={...i18nTokens.en,...ui};
  pageContentI18n[code]=page;
  brandStoryI18n[code]=brandStoryI18n.en;
  window.jpbuildSeo20=window.jpbuildSeo20||{};
  window.jpbuildSeo20[code]=seo;
}
add('ar',{
 lbl_language:'اللغة',nav_ledger:'شركاء العلامات',nav_catalog:'المنتجات',nav_product_finder:'اختيار المنتجات',nav_catalogues:'الكتالوجات الرسمية',nav_showroom:'صالة العرض',nav_specguide:'دليل المواصفات',nav_process:'عملية التصدير',nav_quality:'معيار الجودة',nav_contact:'اتصل بنا',nav_brand_stories:'قصص العلامات',
 ann_badge:'موزع عالمي',ann_text:'EST Co., Ltd. شريك تصدير من طوكيو لعلامات البناء اليابانية الرائدة.',
 hero_tagline:'جودة يابانية. وصول عالمي.',hero_title:'الجودة اليابانية، بمواصفات تناسب العالم.',hero_intro:'مواد بناء يابانية مختارة، توريد متعدد العلامات وتنسيق تصدير بدقة وتتبع وعناية التصنيع الياباني.',
 trust_1:'أكثر من 10 علامات شريكة',trust_2:'تجميع FCL / LCL',trust_3:'إدارة التوريد من طوكيو',trust_4:'تنسيق مستندات المطابقة',
 ledger_eyebrow:'سجل العلامات',ledger_h2:'كل طلبية موثقة بالكامل.',ledger_p:'نورد من أبرز المصنعين اليابانيين وندير شحنات متعددة العلامات وفق بيان العلامة الأصلي.',
 why_eyebrow:'ضبط الجودة الياباني',why_h2:'دقة يابانية موثقة للتصدير.',why_p:'الجودة تبدأ من التفاصيل: فحص الاستلام، مطابقة المواصفات وفحوص ما قبل التحميل. تُحدد المعايير لكل منتج ونطاق طلب.',
 process_eyebrow:'مسار التعاون B2B',process_h2:'مسار منظم للتوريد من اليابان',process_p:'نربط معايير السوق المحلي بالمواصفات والمهل وخطة الشحن قبل تأكيد الطلب.',
 step1_t:'1. اختيار الفئة',step1_d:'حدد الفئة والعلامات ومتطلبات الوجهة.',step2_t:'2. تأكيد العينات',step2_d:'راجع الكتالوجات والألوان والعينات والبيانات الرسمية.',step3_t:'3. مطابقة المواصفات',step3_d:'تحقق من المواصفات والشهادات ومتطلبات السوق.',step4_t:'4. تسعير الكمية',step4_d:'تأكيد الحد الأدنى والسعر والمهلة وخطة الحاوية.',step5_t:'5. التجميع والتحميل',step5_d:'نجمع بضائع عدة مصانع ونفحصها ونحزمها ونغلق الحاوية.',step6_t:'6. دعم ما بعد الشحن',step6_d:'تنسيق مستندات الجمارك وإعادة الطلب.',
 f_h2:'ابدأ طلب التوريد بالجملة',f_p:'أرسل قائمة المواصفات مباشرة إلى مكتب التصدير في طوكيو لبدء مطابقة المتطلبات والتسعير.',
 lbl_download_title:'ما نحتاجه لإعداد السعر',lbl_download_desc:'أرسل معلومات المنتج والوجهة والكمية لنراجع قابلية التصدير والمهلة والسعر.',quote_product:'رمز الموديل أو الرابط الرسمي أو لقطة شاشة',quote_destination:'الدولة والميناء وأي معيار محلي',quote_volume:'الكمية ومرحلة المشروع والموعد المطلوب',lbl_instant_desk:'مكتب التوريد المباشر',lbl_download_desc_2:'تواصل مباشرة مع فريق التوريد الدولي.',btn_chat_whatsapp:'محادثة WhatsApp ↗',btn_copy_email:'نسخ بريد الأعمال ⎘',
 faq_eyebrow:'أسئلة مشتري التصدير',faq_h2:'أسئلة شائعة قبل التوريد من اليابان',faq_intro:'إجابات واضحة حول التصدير والكمية والمواصفات والمستندات والشحن.',
 faq_q1:'هل يمكن تصدير مواد البناء اليابانية؟',faq_a1:'نعم. كثير من المصنعين يركزون على السوق المحلي. EST موزع وشريك تصدير لعشرة مصنعين يابانيين وينسق الشحن العالمي بالبيان الأصلي للعلامات.',
 faq_q2:'ما الحد الأدنى للطلب؟',faq_a2:'يمكن الشحن FCL أو LCL، ويمكن جمع منتجات عدة مصنعين في حاوية واحدة عندما لا تكفي علامة واحدة لحمولة كاملة.',
 faq_q3:'لماذا عرض ورق الجدران الياباني 92 سم؟',faq_a3:'الكسوات اليابانية غالباً 92 سم × 50 م، بخلاف المقاسات الأوروبية الشائعة. لذلك نوضح تحويل الكميات في العرض.',
 faq_q4:'ما المستندات والشهادات المتاحة؟',faq_a4:'تُراجع لكل بند وقد تشمل الفاتورة وقائمة التعبئة وشهادة المنشأ ووثائق JIS أو الحريق ودرجة انبعاث الفورمالديهايد وMSDS عند الحاجة.',
 faq_q5:'من أي موانئ يتم الشحن؟',faq_a5:'تعمل مكاتب التصدير عبر يوكوهاما وناغويا وأوساكا، وتُحدد الشروط والمسارات والتكاليف لكل استفسار.'
},{
 supply:['نطاق التوريد','ست فئات، عشرة مصنعين، طلب شراء واحد.','نقارن الأداء والتشطيب والميزانية عبر عدة مصنعين ثم نجمع الطلب في شحنة واحدة.'],
 counts:['4 مصنعين','5 مصنعين','4 مصنعين','مصنعان','مصنعان','مصنعان'],
 titles:['كسوات الجدران والأفلام الزخرفية','الأرضيات','الأبواب الداخلية والتخزين','النوافذ وأبواب الدخول','المطابخ والحمامات والمغاسل','الألواح وأنظمة الأسقف'],
 descs:['كسوات فينيل تجارية وتشطيبات غير منسوجة وأفلام زخرفية للمشروعات.','خشب هندسي وصلب وLVT وفينيل أمان وبلاط سجاد.','أبواب مفصلية ومنزلقة وخزائن ووحدات تخزين كاملة.','أنظمة ألمنيوم وPVC وهجينة مع أبواب دخول وحماية.','مطابخ نظامية وحمامات وحدات ومغاسل ومراحيض وصنابير.','ألواح قياسية ومقاومة للحريق والرطوبة وعازلة للصوت.'],
 choose:'اختر من هذه العلامات',quote:'اطلب سعراً لهذه الفئة',catalogue:['كتالوجات المصنع الرسمية','اختر من المصدر، واطلب عبر مكتب واحد.','اختر الموديل واللون من موقع المصنع ثم أرسل الرمز لنا لعرض موحد.','الكتالوج الرسمي'],
 facilities:['صالة العرض واللوجستيات · طوكيو، اليابان','مخزون حقيقي، صالة عرض حقيقية، وشحن من اليابان.','صالة طوكيو للاختيار والمستودع للتجميع وتحميل الحاويات.','جولة صالة العرض','صالة طوكيو — اختر قبل الشحن','تتوفر تجهيزات LIXIL وPanasonic وTOCLAS ومكتبات عينات Sangetsu وLilycolor وSincol.'],
 specGuide:['ملاحظات مواصفات للمشترين الدوليين','ما الذي يختلف عند اختيار مواد يابانية؟','المنتجات اليابانية تعتمد معايير وأبعاداً يابانية، وهناك فروق يجب مراجعتها قبل أول طلب.'],
 contactLabels:['الشركة','المقر','الهاتف','الفاكس','الموقع','الممثلة','مراكز التصدير'],quoteLabels:['01 · المنتج','02 · الوجهة','03 · الكمية'],footerLinks:['العلامات','الكتالوج','العملية','الاتصال'],footerText:'EST Co., Ltd. موزع وشريك توريد عالمي لمصنعي مواد البناء اليابانية، مع إدارة التجميع واللوجستيات من يوكوهاما وناغويا وأوساكا.',location:'طوكيو، اليابان',lbl_language:'اللغة'
},['موزع ومصدر مواد بناء يابانية | EST','توريد مواد بناء يابانية متعددة العلامات مع تجميع FCL/LCL وشحن عالمي من اليابان.']);

add('bn',{
 lbl_language:'ভাষা',nav_ledger:'ব্র্যান্ড অংশীদার',nav_catalog:'পণ্য',nav_product_finder:'পণ্য নির্বাচন',nav_catalogues:'সরকারি ক্যাটালগ',nav_showroom:'শোরুম',nav_specguide:'স্পেসিফিকেশন গাইড',nav_process:'রপ্তানি প্রক্রিয়া',nav_quality:'মান নিয়ন্ত্রণ',nav_contact:'যোগাযোগ',nav_brand_stories:'ব্র্যান্ড স্টোরি',
 ann_badge:'গ্লোবাল ডিস্ট্রিবিউটর',ann_text:'EST Co., Ltd. টোকিওভিত্তিক জাপানি নির্মাণ ব্র্যান্ডের রপ্তানি অংশীদার।',
 hero_tagline:'জাপানি মান। বিশ্বব্যাপী পৌঁছ।',hero_title:'জাপানি মান, বিশ্ববাজারের জন্য নির্দিষ্ট।',hero_intro:'নির্বাচিত জাপানি নির্মাণ সামগ্রী, মাল্টি-ব্র্যান্ড সোর্সিং ও রপ্তানি সমন্বয়—জাপানি উৎপাদনের নির্ভুলতা ও ট্রেসেবিলিটিসহ।',
 trust_1:'১০+ অংশীদার ব্র্যান্ড',trust_2:'FCL / LCL সমন্বয়',trust_3:'টোকিও থেকে সোর্সিং নিয়ন্ত্রণ',trust_4:'কমপ্লায়েন্স ডকুমেন্ট সমন্বয়',
 ledger_eyebrow:'ব্র্যান্ড রেজিস্টার',ledger_h2:'প্রতিটি অর্ডার, সম্পূর্ণ নথিভুক্ত।',ledger_p:'জাপানের শীর্ষ নির্মাতাদের কাছ থেকে সোর্স করে মূল ব্র্যান্ড ম্যানিফেস্ট অনুযায়ী মাল্টি-ব্র্যান্ড কনটেইনার পরিচালনা করি।',
 why_eyebrow:'জাপানি মান নিয়ন্ত্রণ',why_h2:'রপ্তানির জন্য নথিভুক্ত জাপানি নির্ভুলতা।',why_p:'গ্রহণ পরীক্ষা, স্পেসিফিকেশন মিল এবং লোডিং-পূর্ব যাচাই—প্রতিটি পণ্য ও সম্মত অর্ডারের জন্য নির্ধারিত।',
 process_eyebrow:'B2B সহযোগিতা প্রক্রিয়া',process_h2:'জাপান সোর্সিংয়ের কাঠামোবদ্ধ পথ',process_p:'গন্তব্যের মান, স্পেসিফিকেশন, লিড টাইম ও লোডিং পরিকল্পনা আগেই সামঞ্জস্য করি।',
 step1_t:'১. শ্রেণি নির্বাচন',step1_d:'শ্রেণি, ব্র্যান্ড ও গন্তব্যের চাহিদা জানান।',step2_t:'২. নমুনা যাচাই',step2_d:'ক্যাটালগ, রঙ, নমুনা ও সরকারি তথ্য পরীক্ষা করুন।',step3_t:'৩. স্পেসিফিকেশন মিল',step3_d:'স্পেক, সনদ ও স্থানীয় কোড যাচাই করুন।',step4_t:'৪. পরিমাণের কোটেশন',step4_d:'MOQ, মূল্য, লিড টাইম ও কনটেইনার পরিকল্পনা নিশ্চিত করুন।',step5_t:'৫. সমন্বয় ও লোডিং',step5_d:'বিভিন্ন কারখানার পণ্য পরীক্ষা, প্যালেট ও সিল করা হয়।',step6_t:'৬. সহায়তা',step6_d:'কাস্টমস নথি ও পুনরায় অর্ডার সমন্বয় করি।',
 f_h2:'আপনার পাইকারি কনটেইনার অনুরোধ শুরু করুন',f_p:'স্পেসিফিকেশন পাঠিয়ে টোকিও রপ্তানি ডেস্ক থেকে কমপ্লায়েন্স মিল ও মূল্যায়ন শুরু করুন।',
 lbl_download_title:'কোটেশনের জন্য যা দরকার',lbl_download_desc:'পণ্য, গন্তব্য ও পরিমাণ পাঠান; আমরা রপ্তানি, সময় ও মূল্য যাচাই করব.',quote_product:'মডেল কোড, সরকারি পেজ বা স্ক্রিনশট',quote_destination:'দেশ, বন্দর ও স্থানীয় মান',quote_volume:'পরিমাণ, প্রকল্প ধাপ ও সময়',lbl_instant_desk:'সরাসরি সোর্সিং ডেস্ক',lbl_download_desc_2:'আন্তর্জাতিক সাপ্লাই ডেস্কে সরাসরি যোগাযোগ করুন।',btn_chat_whatsapp:'WhatsApp-এ কথা বলুন ↗',btn_copy_email:'ব্যবসায়িক ইমেল কপি ⎘',
 faq_eyebrow:'রপ্তানি ক্রেতা FAQ',faq_h2:'জাপান থেকে কেনার আগে সাধারণ প্রশ্ন',faq_intro:'রপ্তানি, পরিমাণ, স্পেসিফিকেশন, নথি ও শিপিং সম্পর্কে পরিষ্কার উত্তর।'
},{
 supply:['সরবরাহ পরিসর','ছয় শ্রেণি, দশ প্রস্তুতকারক, একটি ক্রয় আদেশ।','একটি ব্র্যান্ড নয়—পারফরম্যান্স, ফিনিশ ও বাজেট অনুযায়ী একাধিক নির্মাতা মিলিয়ে এক চালানে কোট করি।'],
 counts:['৪ প্রস্তুতকারক','৫ প্রস্তুতকারক','৪ প্রস্তুতকারক','২ প্রস্তুতকারক','২ প্রস্তুতকারক','২ প্রস্তুতকারক'],
 titles:['ওয়ালকভারিং ও ডেকোরেটিভ ফিল্ম','ফ্লোরিং','ইন্টেরিয়র দরজা ও স্টোরেজ','জানালা ও প্রবেশদ্বার','কিচেন, বাথ ও ওয়াশরুম','বোর্ড ও সিলিং সিস্টেম'],
 descs:['প্রকল্পভিত্তিক ভিনাইল, নন-ওভেন ও ডেকোরেটিভ ফিল্ম।','ইঞ্জিনিয়ার্ড/সলিড উড, LVT, সেফটি ভিনাইল ও কার্পেট টাইল।','হিঞ্জড ও স্লাইডিং দরজা, ক্লোজেট ও স্টোরেজ সেট।','অ্যালুমিনিয়াম, PVC ও হাইব্রিড উইন্ডো এবং সিকিউরড এন্ট্রি ডোর।','সিস্টেম কিচেন, ইউনিট বাথ, ভ্যানিটি, টয়লেট ও ট্যাপওয়্যার।','স্ট্যান্ডার্ড, ফায়ার, ময়েশ্চার ও অ্যাকুস্টিক বোর্ড।'],
 choose:'এই ব্র্যান্ড থেকে বেছে নিন',quote:'এই শ্রেণির কোটেশন চাইুন',catalogue:['প্রস্তুতকারকের সরকারি ক্যাটালগ','উৎস থেকে নির্বাচন, এক ডেস্কে অর্ডার।','সরকারি সাইট থেকে মডেল ও রঙ বেছে কোড পাঠান; আমরা একীভূত কোটেশন দেব।','সরকারি ক্যাটালগ'],
 facilities:['শোরুম ও লজিস্টিকস · টোকিও, জাপান','বাস্তব স্টক, বাস্তব শোরুম, জাপান থেকে শিপমেন্ট।','টোকিও শোরুমে পণ্য নির্বাচন এবং গুদামে কনটেইনার সমন্বয় ও লোডিং করা হয়।','শোরুম ট্যুর','টোকিও শোরুম — শিপমেন্টের আগে নির্বাচন','LIXIL, Panasonic, TOCLAS এবং Sangetsu, Lilycolor, Sincol নমুনা লাইব্রেরি উপলভ্য।'],
 specGuide:['আন্তর্জাতিক ক্রেতার স্পেসিফিকেশন নোট','জাপানি উপকরণ বাছাইয়ে কী বদলে যায়?','জাপানি পণ্য জাপানি মান ও মডিউলে তৈরি; প্রথম অর্ডারের আগে কয়েকটি গুরুত্বপূর্ণ পার্থক্য যাচাই করুন।'],
 contactLabels:['কোম্পানি','প্রধান কার্যালয়','ফোন','ফ্যাক্স','ওয়েবসাইট','প্রতিনিধি','রপ্তানি কেন্দ্র'],quoteLabels:['01 · পণ্য','02 · গন্তব্য','03 · পরিমাণ'],footerLinks:['ব্র্যান্ড','ক্যাটালগ','প্রক্রিয়া','যোগাযোগ'],footerText:'EST Co., Ltd. জাপানি নির্মাণ সামগ্রী প্রস্তুতকারকদের পরিবেশক ও বৈশ্বিক সাপ্লাই অংশীদার।',location:'টোকিও, জাপান',lbl_language:'ভাষা'
},['জাপানি নির্মাণ সামগ্রী পরিবেশক ও রপ্তানিকারক | EST','জাপানি নির্মাণ সামগ্রী, মাল্টি-ব্র্যান্ড FCL/LCL সমন্বয় ও বিশ্বব্যাপী রপ্তানি।']);

add('pt',{
 lbl_language:'Idioma',nav_ledger:'Marcas parceiras',nav_catalog:'Produtos',nav_product_finder:'Seletor de produtos',nav_catalogues:'Catálogos oficiais',nav_showroom:'Showroom',nav_specguide:'Guia técnico',nav_process:'Processo de exportação',nav_quality:'Padrão de qualidade',nav_contact:'Contato',nav_brand_stories:'Histórias de marca',
 ann_badge:'DISTRIBUIDOR GLOBAL',ann_text:'EST Co., Ltd., parceira de exportação em Tóquio para grandes marcas japonesas de construção.',
 hero_tagline:'QUALIDADE JAPONESA. ALCANCE GLOBAL.',hero_title:'Qualidade japonesa, especificada para o mundo.',hero_intro:'Materiais japoneses selecionados, sourcing multimarcas e coordenação de exportação com precisão, rastreabilidade e cuidado da manufatura japonesa.',
 trust_1:'10+ marcas parceiras',trust_2:'Consolidação FCL / LCL',trust_3:'Controle de sourcing em Tóquio',trust_4:'Coordenação de conformidade',
 ledger_eyebrow:'REGISTRO DE MARCAS',ledger_h2:'Cada pedido, totalmente documentado.',ledger_p:'Compramos de fabricantes líderes do Japão e consolidamos cargas multimarcas sob o manifesto original.',
 why_eyebrow:'CONTROLE DE QUALIDADE JAPONÊS',why_h2:'Precisão japonesa, documentada para exportação.',why_p:'Recebimento, conferência de especificações e inspeção antes do carregamento são documentados conforme cada produto e escopo acordado.',
 process_eyebrow:'PROCESSO B2B',process_h2:'Um caminho estruturado para comprar no Japão',process_p:'Alinhamos padrões do destino, especificações, prazo e plano de carga antes da confirmação.',
 step1_t:'1. Selecionar categoria',step1_d:'Informe categoria, marcas e exigências do destino.',step2_t:'2. Confirmar amostras',step2_d:'Revise catálogos, cores, amostras e dados oficiais.',step3_t:'3. Alinhar especificações',step3_d:'Verifique fichas, certificados e códigos locais.',step4_t:'4. Cotar volume',step4_d:'Confirme MOQ, preço, prazo e plano do contêiner.',step5_t:'5. Consolidar e carregar',step5_d:'Consolidamos fábricas, inspecionamos, paletizamos e lacramos.',step6_t:'6. Suporte',step6_d:'Coordenamos documentos aduaneiros e recompras.',
 f_h2:'Inicie sua solicitação de contêiner',f_p:'Envie a lista de especificações diretamente à mesa de exportação de Tóquio.',
 lbl_download_title:'O que precisamos para cotar',lbl_download_desc:'Envie produto, destino e volume para verificarmos exportação, prazo e preço.',quote_product:'Código, página oficial ou captura',quote_destination:'País, porto e norma local',quote_volume:'Quantidade, fase do projeto e prazo',lbl_instant_desk:'Mesa direta de sourcing',lbl_download_desc_2:'Fale diretamente com nossa equipe internacional.',btn_chat_whatsapp:'Falar no WhatsApp ↗',btn_copy_email:'Copiar e-mail comercial ⎘',
 faq_eyebrow:'FAQ DO COMPRADOR',faq_h2:'Perguntas antes de comprar no Japão',faq_intro:'Respostas claras sobre exportação, volume, especificações, documentos e transporte.'
},{
 supply:['ESCOPO DE FORNECIMENTO','Seis categorias, dez fabricantes, um pedido.','Comparamos desempenho, acabamento e orçamento entre fabricantes e consolidamos em um único embarque.'],
 counts:['4 fabricantes','5 fabricantes','4 fabricantes','2 fabricantes','2 fabricantes','2 fabricantes'],
 titles:['Revestimentos e filme decorativo','Pisos','Portas internas e armazenamento','Janelas e portas de entrada','Cozinha, banheiro e lavatório','Placas e sistemas de teto'],
 descs:['Revestimentos vinílicos, não tecidos e filmes decorativos para projetos.','Madeira engenheirada, madeira maciça, LVT, vinil e carpete modular.','Portas de abrir/correr, armários e módulos de armazenamento.','Sistemas de alumínio, PVC e híbridos com portas de entrada.','Cozinhas, banheiros modulares, lavatórios, vasos e torneiras.','Placas padrão, resistentes ao fogo, umidade e acústicas.'],
 choose:'ESCOLHER ENTRE',quote:'Solicitar cotação desta categoria',catalogue:['CATÁLOGOS OFICIAIS','Escolha na fonte e compre com uma única mesa.','Escolha modelo e cor no fabricante e envie os códigos para uma cotação consolidada.','CATÁLOGO OFICIAL'],
 facilities:['SHOWROOM E LOGÍSTICA · TÓQUIO, JAPÃO','Estoque real, showroom real, envio do Japão.','O showroom de Tóquio serve para especificação e o armazém para consolidação e carregamento.','TOUR DO SHOWROOM','Showroom de Tóquio — especifique antes do envio','LIXIL, Panasonic, TOCLAS e bibliotecas de amostras Sangetsu, Lilycolor e Sincol.'],
 specGuide:['NOTAS TÉCNICAS PARA COMPRADORES','O que muda ao especificar materiais japoneses?','Produtos japoneses seguem normas e dimensões do Japão; verifique diferenças importantes antes do primeiro pedido.'],
 contactLabels:['Empresa','Sede','Telefone','Fax','Site','Representante','Mesas de exportação'],quoteLabels:['01 · PRODUTO','02 · DESTINO','03 · VOLUME'],footerLinks:['Marcas','Catálogo','Processo','Contato'],footerText:'EST Co., Ltd. é distribuidora e parceira global de fabricantes japoneses de materiais de construção.',location:'Tóquio, Japão',lbl_language:'Idioma'
},['Distribuidor e exportador de materiais japoneses | EST','Materiais japoneses, consolidação multimarcas FCL/LCL e exportação mundial a partir do Japão.']);

add('id',{
 lbl_language:'Bahasa',nav_ledger:'Mitra merek',nav_catalog:'Produk',nav_product_finder:'Pencari produk',nav_catalogues:'Katalog resmi',nav_showroom:'Showroom',nav_specguide:'Panduan spesifikasi',nav_process:'Proses ekspor',nav_quality:'Standar kualitas',nav_contact:'Kontak',nav_brand_stories:'Cerita merek',
 ann_badge:'DISTRIBUTOR GLOBAL',ann_text:'EST Co., Ltd. adalah mitra ekspor berbasis Tokyo untuk merek bangunan Jepang terkemuka.',
 hero_tagline:'KUALITAS JEPANG. JANGKAUAN GLOBAL.',hero_title:'Kualitas Jepang, ditentukan untuk dunia.',hero_intro:'Material Jepang pilihan, sourcing multimerek, dan koordinasi ekspor dengan presisi, keterlacakan, dan perhatian khas manufaktur Jepang.',
 trust_1:'10+ merek mitra',trust_2:'Konsolidasi FCL / LCL',trust_3:'Kontrol sourcing dari Tokyo',trust_4:'Koordinasi dokumen kepatuhan',
 ledger_eyebrow:'DAFTAR MEREK',ledger_h2:'Setiap pesanan, terdokumentasi lengkap.',ledger_p:'Kami sourcing dari produsen utama Jepang dan menangani pengiriman multimerek berdasarkan manifest asli.',
 why_eyebrow:'KONTROL KUALITAS JEPANG',why_h2:'Presisi Jepang, terdokumentasi untuk ekspor.',why_p:'Penerimaan, pencocokan spesifikasi, dan pemeriksaan pra-muat didokumentasikan sesuai produk dan ruang lingkup pesanan.',
 process_eyebrow:'ALUR KERJA B2B',process_h2:'Proses terstruktur untuk sourcing dari Jepang',process_p:'Kami menyelaraskan standar tujuan, spesifikasi, lead time, dan rencana muat sebelum pesanan dikonfirmasi.',
 step1_t:'1. Pilih kategori',step1_d:'Tentukan kategori, merek, dan kebutuhan tujuan.',step2_t:'2. Konfirmasi sampel',step2_d:'Tinjau katalog, warna, sampel, dan data resmi.',step3_t:'3. Selaraskan spesifikasi',step3_d:'Periksa spesifikasi, sertifikat, dan aturan lokal.',step4_t:'4. Harga volume',step4_d:'Konfirmasi MOQ, harga, waktu, dan rencana kontainer.',step5_t:'5. Konsolidasi & muat',step5_d:'Kami konsolidasikan, periksa, paletkan, dan segel.',step6_t:'6. Dukungan',step6_d:'Koordinasi dokumen bea cukai dan pemesanan ulang.',
 f_h2:'Mulai permintaan kontainer Anda',f_p:'Kirim daftar spesifikasi langsung ke meja ekspor Tokyo.',
 lbl_download_title:'Yang kami perlukan untuk penawaran',lbl_download_desc:'Kirim produk, tujuan, dan volume agar kami dapat mengecek ekspor, lead time, dan harga.',quote_product:'Kode model, halaman resmi, atau screenshot',quote_destination:'Negara, pelabuhan, dan standar lokal',quote_volume:'Jumlah, tahap proyek, dan target waktu',lbl_instant_desk:'Meja sourcing langsung',lbl_download_desc_2:'Hubungi tim pasokan internasional kami secara langsung.',btn_chat_whatsapp:'Chat WhatsApp ↗',btn_copy_email:'Salin email bisnis ⎘',
 faq_eyebrow:'FAQ PEMBELI EKSPOR',faq_h2:'Pertanyaan sebelum sourcing dari Jepang',faq_intro:'Jawaban jelas tentang ekspor, volume, spesifikasi, dokumen, dan pengiriman.'
},{
 supply:['CAKUPAN PASOKAN','Enam kategori, sepuluh produsen, satu purchase order.','Kami membandingkan performa, finishing, dan anggaran lintas produsen lalu mengonsolidasikan pesanan.'],
 counts:['4 produsen','5 produsen','4 produsen','2 produsen','2 produsen','2 produsen'],
 titles:['Wallcovering & film dekoratif','Flooring','Pintu interior & penyimpanan','Jendela & pintu masuk','Dapur, kamar mandi & wastafel','Board & sistem plafon'],
 descs:['Wallcovering vinyl, nonwoven, dan film dekoratif untuk proyek.','Kayu engineered/solid, LVT, safety vinyl, dan carpet tile.','Pintu swing/sliding, lemari, dan unit penyimpanan.','Sistem aluminium, PVC, hybrid, dan pintu masuk.','System kitchen, unit bath, vanity, toilet, dan tapware.','Board standar, fire-rated, moisture-resistant, dan acoustic.'],
 choose:'PILIH DARI',quote:'Minta penawaran kategori ini',catalogue:['KATALOG RESMI PRODUSEN','Pilih dari sumber, pesan lewat satu meja.','Pilih model dan warna dari situs produsen lalu kirim kodenya untuk penawaran gabungan.','KATALOG RESMI'],
 facilities:['SHOWROOM & LOGISTIK · TOKYO, JEPANG','Stok nyata, showroom nyata, kirim dari Jepang.','Showroom Tokyo untuk pemilihan; gudang untuk konsolidasi dan pemuatan kontainer.','TUR SHOWROOM','Showroom Tokyo — pilih sebelum kirim','LIXIL, Panasonic, TOCLAS serta perpustakaan sampel Sangetsu, Lilycolor, dan Sincol tersedia.'],
 specGuide:['CATATAN SPESIFIKASI PEMBELI INTERNASIONAL','Apa yang berbeda saat memilih material Jepang?','Produk Jepang mengikuti standar dan dimensi Jepang; cek perbedaan penting sebelum pesanan pertama.'],
 contactLabels:['Perusahaan','Kantor pusat','Telepon','Faks','Situs','Perwakilan','Hub ekspor'],quoteLabels:['01 · PRODUK','02 · TUJUAN','03 · VOLUME'],footerLinks:['Merek','Katalog','Proses','Kontak'],footerText:'EST Co., Ltd. adalah distributor dan mitra pasokan global produsen material bangunan Jepang.',location:'Tokyo, Jepang',lbl_language:'Bahasa'
},['Distributor & eksportir material bangunan Jepang | EST','Material bangunan Jepang dengan konsolidasi FCL/LCL multimerek dan pengiriman global dari Jepang.']);

add('ur',{
 lbl_language:'زبان',nav_ledger:'برانڈ پارٹنرز',nav_catalog:'مصنوعات',nav_product_finder:'پروڈکٹ فائنڈر',nav_catalogues:'سرکاری کیٹلاگ',nav_showroom:'شوروم',nav_specguide:'اسپیک گائیڈ',nav_process:'ایکسپورٹ عمل',nav_quality:'کوالٹی معیار',nav_contact:'رابطہ',nav_brand_stories:'برانڈ اسٹوریز',
 ann_badge:'عالمی ڈسٹری بیوٹر',ann_text:'EST Co., Ltd. ٹوکیو میں جاپان کے معروف بلڈنگ برانڈز کا ایکسپورٹ پارٹنر ہے۔',
 hero_tagline:'جاپانی معیار۔ عالمی رسائی۔',hero_title:'جاپانی معیار، دنیا کے لیے مخصوص۔',hero_intro:'منتخب جاپانی میٹیریل، ملٹی برانڈ سورسنگ اور ایکسپورٹ کوآرڈینیشن، جاپانی مینوفیکچرنگ کی درستگی اور ٹریس ایبلٹی کے ساتھ۔',
 trust_1:'10+ پارٹنر برانڈز',trust_2:'FCL / LCL کنسولیڈیشن',trust_3:'ٹوکیو سے سورسنگ کنٹرول',trust_4:'کمپلائنس دستاویزات',
 ledger_eyebrow:'برانڈ ریکارڈ',ledger_h2:'ہر آرڈر مکمل دستاویزات کے ساتھ۔',ledger_p:'ہم جاپان کے معروف مینوفیکچررز سے سورس کرکے اصل برانڈ مانی فیسٹ کے تحت ملٹی برانڈ شپمنٹس سنبھالتے ہیں۔',
 why_eyebrow:'جاپانی کوالٹی کنٹرول',why_h2:'جاپانی درستگی، ایکسپورٹ کے لیے دستاویزی۔',why_p:'ریسیونگ، اسپیسفیکیشن میچنگ اور پری لوڈ انسپیکشن ہر پروڈکٹ اور طے شدہ آرڈر اسکوپ کے مطابق ریکارڈ ہوتے ہیں۔',
 process_eyebrow:'B2B تعاون کا عمل',process_h2:'جاپان سے سورسنگ کا منظم راستہ',process_p:'منزل کے معیار، اسپیسفیکیشن، لیڈ ٹائم اور لوڈنگ پلان کو پہلے ہی ہم آہنگ کرتے ہیں۔',
 step1_t:'1. کیٹیگری منتخب کریں',step1_d:'کیٹیگری، برانڈز اور منزل کی ضروریات بتائیں۔',step2_t:'2. سیمپل کنفرم کریں',step2_d:'کیٹلاگ، رنگ، سیمپل اور سرکاری ڈیٹا دیکھیں۔',step3_t:'3. اسپیسفیکیشن ملائیں',step3_d:'اسپیکس، سرٹیفکیٹس اور مقامی کوڈ چیک کریں۔',step4_t:'4. مقدار کی قیمت',step4_d:'MOQ، قیمت، وقت اور کنٹینر پلان کنفرم کریں۔',step5_t:'5. کنسولیڈیٹ اور لوڈ',step5_d:'مختلف فیکٹریوں کے مال کو چیک، پیلیٹ اور سیل کرتے ہیں۔',step6_t:'6. سپورٹ',step6_d:'کسٹمز دستاویزات اور دوبارہ آرڈر کوآرڈینیٹ کرتے ہیں۔',
 f_h2:'اپنا ہول سیل کنٹینر ریکویسٹ شروع کریں',f_p:'اسپیسفیکیشن لسٹ ٹوکیو ایکسپورٹ ڈیسک کو بھیجیں۔',
 lbl_download_title:'کوٹیشن کے لیے کیا چاہیے',lbl_download_desc:'پروڈکٹ، منزل اور مقدار بھیجیں تاکہ ایکسپورٹ، وقت اور قیمت چیک ہو سکے۔',quote_product:'ماڈل کوڈ، سرکاری صفحہ یا اسکرین شاٹ',quote_destination:'ملک، بندرگاہ اور مقامی معیار',quote_volume:'مقدار، پروجیکٹ مرحلہ اور مطلوبہ وقت',lbl_instant_desk:'براہ راست سورسنگ ڈیسک',lbl_download_desc_2:'ہماری بین الاقوامی سپلائی ٹیم سے براہ راست رابطہ کریں۔',btn_chat_whatsapp:'WhatsApp پر چیٹ ↗',btn_copy_email:'بزنس ای میل کاپی ⎘',
 faq_eyebrow:'ایکسپورٹ خریدار FAQ',faq_h2:'جاپان سے خریدنے سے پہلے عام سوالات',faq_intro:'ایکسپورٹ، مقدار، اسپیکس، دستاویزات اور شپنگ کے واضح جواب۔'
},{
 supply:['سپلائی اسکوپ','چھ کیٹیگریز، دس مینوفیکچررز، ایک پرچیز آرڈر۔','ہم کارکردگی، فنش اور بجٹ کے مطابق متعدد مینوفیکچررز کو ملا کر ایک شپمنٹ میں کوٹ کرتے ہیں۔'],
 counts:['4 مینوفیکچررز','5 مینوفیکچررز','4 مینوفیکچررز','2 مینوفیکچررز','2 مینوفیکچررز','2 مینوفیکچررز'],
 titles:['وال کورنگ اور ڈیکوریٹو فلم','فلورنگ','انٹیریئر دروازے اور اسٹوریج','ونڈوز اور انٹری ڈورز','کچن، باتھ اور واش روم','بورڈ اور سیلنگ سسٹمز'],
 descs:['کمرشل ونائل، نان وون اور ڈیکوریٹو فلم۔','انجینئرڈ/سالڈ ووڈ، LVT، سیفٹی ونائل اور کارپٹ ٹائل۔','ہنجڈ/سلائیڈنگ دروازے، الماریاں اور اسٹوریج سیٹس۔','ایلومینیم، PVC اور ہائبرڈ سسٹمز اور انٹری ڈورز۔','سسٹم کچن، یونٹ باتھ، وینٹی، ٹوائلٹ اور ٹیپ ویئر۔','اسٹینڈرڈ، فائر، نمی مزاحم اور اکوسٹک بورڈ۔'],
 choose:'ان برانڈز سے منتخب کریں',quote:'اس کیٹیگری کا کوٹیشن لیں',catalogue:['سرکاری مینوفیکچرر کیٹلاگ','اصل سورس سے منتخب کریں، ایک ڈیسک سے آرڈر کریں۔','مینوفیکچرر سائٹ سے ماڈل اور رنگ منتخب کرکے کوڈ بھیجیں۔','سرکاری کیٹلاگ'],
 facilities:['شوروم اور لاجسٹکس · ٹوکیو، جاپان','حقیقی اسٹاک، حقیقی شوروم، جاپان سے شپمنٹ۔','ٹوکیو شوروم انتخاب کے لیے اور ویئرہاؤس کنسولیڈیشن و لوڈنگ کے لیے ہے۔','شوروم ٹور','ٹوکیو شوروم — شپمنٹ سے پہلے انتخاب','LIXIL، Panasonic، TOCLAS اور Sangetsu، Lilycolor، Sincol سیمپل لائبریری دستیاب ہیں۔'],
 specGuide:['بین الاقوامی خریدار اسپیک نوٹس','جاپانی میٹیریل منتخب کرتے وقت کیا مختلف ہوتا ہے؟','جاپانی مصنوعات جاپانی معیار اور ابعاد پر بنتی ہیں؛ پہلے آرڈر سے پہلے اہم فرق چیک کریں۔'],
 contactLabels:['کمپنی','ہیڈ آفس','فون','فیکس','ویب سائٹ','نمائندہ','ایکسپورٹ ہبز'],quoteLabels:['01 · پروڈکٹ','02 · منزل','03 · مقدار'],footerLinks:['برانڈز','کیٹلاگ','عمل','رابطہ'],footerText:'EST Co., Ltd. جاپانی بلڈنگ میٹیریل مینوفیکچررز کا ڈسٹری بیوٹر اور عالمی سپلائی پارٹنر ہے۔',location:'ٹوکیو، جاپان',lbl_language:'زبان'
},['جاپانی بلڈنگ میٹیریل ڈسٹری بیوٹر و ایکسپورٹر | EST','جاپانی میٹیریل، ملٹی برانڈ FCL/LCL کنسولیڈیشن اور جاپان سے عالمی شپنگ۔']);
})();