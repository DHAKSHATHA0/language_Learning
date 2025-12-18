// Language-specific lesson content for all courses with proper categorization
export const languageContent = {
  English: {
    letters: {
      vowels: ['A', 'E', 'I', 'O', 'U'],
      consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
    },
    words: [
      { word: 'Apple', translation: 'A fruit', emoji: '🍎', pronunciation: 'æp.əl', englishMeaning: 'A round red, green, or yellow fruit', englishPronunciation: 'AP-ul' },
      { word: 'Book', translation: 'Reading material', emoji: '📚', pronunciation: 'bʊk', englishMeaning: 'A set of written pages bound together', englishPronunciation: 'book' },
      { word: 'Cat', translation: 'Feline animal', emoji: '🐱', pronunciation: 'kæt', englishMeaning: 'A small furry pet animal with four legs and a tail', englishPronunciation: 'kat' },
      { word: 'Dog', translation: 'Canine animal', emoji: '🐕', pronunciation: 'dɔːɡ', englishMeaning: 'A loyal four-legged pet animal that barks', englishPronunciation: 'dawg' },
      { word: 'House', translation: 'Building to live in', emoji: '🏠', pronunciation: 'haʊs', englishMeaning: 'A building where people live', englishPronunciation: 'HOWS' },
      { word: 'Water', translation: 'Liquid to drink', emoji: '💧', pronunciation: 'ˈwɔː.tər', englishMeaning: 'A clear liquid that is essential for life', englishPronunciation: 'WAW-tur' },
      { word: 'Sun', translation: 'Star in sky', emoji: '☀️', pronunciation: 'sʌn', englishMeaning: 'A bright star that provides light and heat during the day', englishPronunciation: 'sun' },
      { word: 'Moon', translation: 'Night light', emoji: '🌙', pronunciation: 'muːn', englishMeaning: 'A bright celestial body that appears at night', englishPronunciation: 'moon' }
    ],
    quiz: [
      { question: 'What is the past tense of "go"?', options: ['Went', 'Gone', 'Going', 'Goes'], correct: 0 },
      { question: 'Which word means "large"?', options: ['Small', 'Tiny', 'Big', 'Little'], correct: 2 },
      { question: 'What is a synonym for "happy"?', options: ['Sad', 'Joyful', 'Angry', 'Tired'], correct: 1 },
      { question: 'How do you say "thank you"?', options: ['Thanks', 'Please', 'Sorry', 'Welcome'], correct: 0 },
      { question: 'What is the opposite of "hot"?', options: ['Warm', 'Cool', 'Cold', 'Freezing'], correct: 2 }
    ],
    stories: [
      { title: 'The Brave Mouse', emoji: '🐭', content: 'In a small hole lived a brave little mouse named Max. Despite his tiny size, Max had a big heart. One day, he helped a lion by removing a thorn from its paw. The lion was grateful and they became best friends.', level: 'Beginner' },
      { title: 'A Day at the Beach', emoji: '🏖️', content: 'Sarah and Tom went to the beach on a sunny day. They built sandcastles, collected seashells, and swam in the ocean. The waves were gentle and the water was crystal clear. It was a perfect summer day!', level: 'Beginner' },
      { title: 'The Magic Garden', emoji: '🌸', content: 'Behind an old house, there was a secret garden that bloomed all year round. Flowers of every color grew there, and butterflies danced in the air. Anyone who visited felt peaceful and happy.', level: 'Intermediate' },
      { title: 'The Lost Puppy', emoji: '🐶', content: 'A small puppy named Buddy got lost in the park. He searched for his owner everywhere. Finally, a kind girl helped him find his way home. Buddy wagged his tail happily when he saw his family again.', level: 'Beginner' }
    ]
  },
  
  Hindi: {
    letters: {
      vowels: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ'],
      consonants: ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'],
      numerals: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
    },
    words: [
      { word: 'नमस्ते', translation: 'Hello/Greetings', emoji: '🙏', pronunciation: 'namaste', englishMeaning: 'A greeting of respect', englishPronunciation: 'nah-mah-STAY' },
      { word: 'किताब', translation: 'Book', emoji: '📚', pronunciation: 'kitaab', englishMeaning: 'A set of written pages bound together', englishPronunciation: 'kit-AHB' },
      { word: 'बिल्ली', translation: 'Cat', emoji: '🐱', pronunciation: 'billi', englishMeaning: 'A small furry pet animal with four legs', englishPronunciation: 'BEEL-lee' },
      { word: 'कुत्ता', translation: 'Dog', emoji: '🐕', pronunciation: 'kutta', englishMeaning: 'A loyal four-legged pet animal', englishPronunciation: 'KUT-tah' },
      { word: 'घर', translation: 'House', emoji: '🏠', pronunciation: 'ghar', englishMeaning: 'A building where people live', englishPronunciation: 'GHAR' },
      { word: 'पानी', translation: 'Water', emoji: '💧', pronunciation: 'paani', englishMeaning: 'A clear liquid essential for life', englishPronunciation: 'PAH-nee' },
      { word: 'सूरज', translation: 'Sun', emoji: '☀️', pronunciation: 'suraj', englishMeaning: 'A bright star that provides light during the day', englishPronunciation: 'SOO-raj' },
      { word: 'चाँद', translation: 'Moon', emoji: '🌙', pronunciation: 'chaand', englishMeaning: 'A bright celestial body at night', englishPronunciation: 'CHAHND' }
    ],
    quiz: [
      { question: 'What is "Hello" in Hindi?', options: ['नमस्ते', 'अलविदा', 'धन्यवाद', 'कृपया'], correct: 0 },
      { question: 'What does "धन्यवाद" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Hindi?', options: ['कुत्ता', 'बिल्ली', 'चिड़िया', 'मछली'], correct: 1 },
      { question: 'What is "Water" in Hindi?', options: ['दूध', 'चाय', 'पानी', 'जूस'], correct: 2 },
      { question: 'What does "घर" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'छोटा चूहा', emoji: '🐭', content: 'एक छोटे से बिल में एक बहादुर चूहा रहता था। उसका नाम था राजू। एक दिन राजू ने एक शेर की मदद की और उसके पंजे से काँटा निकाला। शेर बहुत खुश हुआ और वे दोनों अच्छे दोस्त बन गए।', level: 'Beginner' },
      { title: 'बाज़ार की सैर', emoji: '🏪', content: 'मीरा बाज़ार गई ताज़े फल खरीदने। उसने सेब, संतरे और केले खरीदे। बाज़ार रंगीन और भरा हुआ था। वहाँ उसकी सहेली रीता से मुलाकात हुई।', level: 'Beginner' },
      { title: 'जादुई बगीचा', emoji: '🌸', content: 'एक पुराने घर के पीछे एक गुप्त बगीचा था जो साल भर खिलता रहता था। वहाँ हर रंग के फूल खिलते थे और तितलियाँ नाचती थीं। जो भी वहाँ जाता, शांति महसूस करता था।', level: 'Intermediate' },
      { title: 'खोया हुआ पिल्ला', emoji: '🐶', content: 'टॉमी नाम का एक छोटा पिल्ला पार्क में खो गया। वह अपने मालिक को ढूंढ रहा था। एक दयालु लड़की ने उसे घर का रास्ता दिखाया। टॉमी अपने परिवार को देखकर बहुत खुश हुआ।', level: 'Beginner' }
    ]
  },
  
  French: {
    letters: {
      vowels: ['A', 'E', 'I', 'O', 'U', 'Y', 'À', 'Â', 'Æ', 'È', 'É', 'Ê', 'Ë', 'Î', 'Ï', 'Ô', 'Œ', 'Ù', 'Û', 'Ü', 'Ÿ'],
      consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z', 'Ç']
    },
    words: [
      { word: 'Bonjour', translation: 'Hello', emoji: '👋', pronunciation: 'bon-zhoor', englishMeaning: 'A warm greeting', englishPronunciation: 'bon-ZHOOR' },
      { word: 'Livre', translation: 'Book', emoji: '📚', pronunciation: 'lee-vruh', englishMeaning: 'A set of written pages', englishPronunciation: 'LEE-vruh' },
      { word: 'Chat', translation: 'Cat', emoji: '🐱', pronunciation: 'shah', englishMeaning: 'A small furry pet animal', englishPronunciation: 'SHAH' },
      { word: 'Chien', translation: 'Dog', emoji: '🐕', pronunciation: 'shee-an', englishMeaning: 'A loyal four-legged pet', englishPronunciation: 'shee-EN' },
      { word: 'Maison', translation: 'House', emoji: '🏠', pronunciation: 'may-zon', englishMeaning: 'A building for living', englishPronunciation: 'may-ZON' },
      { word: 'Eau', translation: 'Water', emoji: '💧', pronunciation: 'oh', englishMeaning: 'A clear liquid for drinking', englishPronunciation: 'oh' },
      { word: 'Soleil', translation: 'Sun', emoji: '☀️', pronunciation: 'so-lay', englishMeaning: 'A bright star in the sky', englishPronunciation: 'so-LAY' },
      { word: 'Lune', translation: 'Moon', emoji: '🌙', pronunciation: 'loon', englishMeaning: 'A night celestial body', englishPronunciation: 'LOON' }
    ],
    quiz: [
      { question: 'What is "Hello" in French?', options: ['Bonjour', 'Au revoir', 'Merci', 'S\'il vous plaît'], correct: 0 },
      { question: 'What does "Merci" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in French?', options: ['Chien', 'Chat', 'Oiseau', 'Poisson'], correct: 1 },
      { question: 'What is "Water" in French?', options: ['Lait', 'Thé', 'Eau', 'Jus'], correct: 2 },
      { question: 'What does "Maison" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'Le Petit Chat', emoji: '🐱', content: 'Il était une fois un petit chat nommé Minou. Minou aimait jouer avec une pelote de laine et chasser les papillons dans le jardin. Chaque jour était une nouvelle aventure pour lui!', level: 'Beginner' },
      { title: 'Au Marché', emoji: '🏪', content: 'Marie est allée au marché pour acheter des fruits frais. Elle a acheté des pommes, des oranges et des bananes. Le marché était coloré et plein de gens sympathiques.', level: 'Beginner' },
      { title: 'Le Livre Magique', emoji: '📚', content: 'Dans une petite bibliothèque, il y avait un livre magique qui pouvait transporter les lecteurs vers différents mondes. Chaque page était une nouvelle aventure à découvrir.', level: 'Intermediate' },
      { title: 'Le Chien Amical', emoji: '🐕', content: 'Il y avait un chien amical nommé Max qui vivait dans une petite ville. Max aimait aider tout le monde. Il apportait le journal à M. Dupont et jouait avec les enfants après l\'école.', level: 'Beginner' }
    ]
  },
  
  Korean: {
    letters: {
      consonants: ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
      vowels: ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
      combined: ['가', '각', '간', '갇', '갈', '갉', '갊', '감', '갑', '값', '갓', '갔', '강', '갖', '갗', '갘', '같', '갚', '갛']
    },
    words: [
      { word: '안녕하세요', translation: 'Hello', emoji: '👋', pronunciation: 'annyeonghaseyo', englishMeaning: 'A polite greeting', englishPronunciation: 'ahn-nyong-hah-SEH-yo' },
      { word: '책', translation: 'Book', emoji: '📚', pronunciation: 'chaek', englishMeaning: 'A bound collection of pages', englishPronunciation: 'chaek' },
      { word: '고양이', translation: 'Cat', emoji: '🐱', pronunciation: 'goyangi', englishMeaning: 'A small furry pet', englishPronunciation: 'go-YANG-ee' },
      { word: '강아지', translation: 'Dog', emoji: '🐕', pronunciation: 'gangaji', englishMeaning: 'A loyal pet animal', englishPronunciation: 'gang-AH-jee' },
      { word: '집', translation: 'House', emoji: '🏠', pronunciation: 'jip', englishMeaning: 'A place to live', englishPronunciation: 'jip' },
      { word: '물', translation: 'Water', emoji: '💧', pronunciation: 'mul', englishMeaning: 'A clear drinking liquid', englishPronunciation: 'mul' },
      { word: '해', translation: 'Sun', emoji: '☀️', pronunciation: 'hae', englishMeaning: 'A bright daytime star', englishPronunciation: 'hae' },
      { word: '달', translation: 'Moon', emoji: '🌙', pronunciation: 'dal', englishMeaning: 'A night celestial body', englishPronunciation: 'dal' }
    ],
    quiz: [
      { question: 'What is "Hello" in Korean?', options: ['안녕하세요', '안녕히 가세요', '감사합니다', '미안합니다'], correct: 0 },
      { question: 'What does "감사합니다" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Korean?', options: ['강아지', '고양이', '새', '물고기'], correct: 1 },
      { question: 'What is "Water" in Korean?', options: ['우유', '차', '물', '주스'], correct: 2 },
      { question: 'What does "집" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: '작은 고양이', emoji: '🐱', content: '옛날에 미튼스라는 작은 고양이가 살았습니다. 미튼스는 실뭉치를 가지고 노는 것과 정원에서 나비를 쫓는 것을 좋아했습니다. 매일이 새로운 모험이었습니다!', level: 'Beginner' },
      { title: '시장 나들이', emoji: '🏪', content: '마리아는 신선한 과일을 사러 시장에 갔습니다. 그녀는 사과, 오렌지, 바나나를 샀습니다. 시장은 다채롭고 친절한 사람들로 가득했습니다.', level: 'Beginner' },
      { title: '마법의 책', emoji: '📚', content: '작은 도서관에는 독자들을 다른 세계로 데려갈 수 있는 마법의 책이 있었습니다. 모든 페이지는 발견되기를 기다리는 새로운 모험이었습니다.', level: 'Intermediate' },
      { title: '친절한 강아지', emoji: '🐕', content: '작은 마을에 맥스라는 친절한 강아지가 살았습니다. 맥스는 모든 사람을 돕는 것을 좋아했습니다. 그는 존슨 씨에게 신문을 가져다주고 방과 후 아이들과 놀았습니다.', level: 'Beginner' }
    ]
  },
  
  Japanese: {
    letters: {
      hiragana: ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'],
      katakana: ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'],
      kanji: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '人', '本', '日', '月', '火', '水', '木', '金', '土', '田']
    },
    words: [
      { word: 'こんにちは', translation: 'Hello', emoji: '👋', pronunciation: 'konnichiwa', englishMeaning: 'A greeting used during daytime', englishPronunciation: 'ko-n-ni-chi-WA' },
      { word: '本', translation: 'Book', emoji: '📚', pronunciation: 'hon', englishMeaning: 'A written publication', englishPronunciation: 'hon' },
      { word: '猫', translation: 'Cat', emoji: '🐱', pronunciation: 'neko', englishMeaning: 'A small furry pet', englishPronunciation: 'NEH-ko' },
      { word: '犬', translation: 'Dog', emoji: '🐕', pronunciation: 'inu', englishMeaning: 'A loyal pet animal', englishPronunciation: 'ee-NOO' },
      { word: '家', translation: 'House', emoji: '🏠', pronunciation: 'ie', englishMeaning: 'A dwelling place', englishPronunciation: 'ee-eh' },
      { word: '水', translation: 'Water', emoji: '💧', pronunciation: 'mizu', englishMeaning: 'A clear liquid', englishPronunciation: 'mee-ZOO' },
      { word: '太陽', translation: 'Sun', emoji: '☀️', pronunciation: 'taiyō', englishMeaning: 'A bright star', englishPronunciation: 'tie-YOH' },
      { word: '月', translation: 'Moon', emoji: '🌙', pronunciation: 'tsuki', englishMeaning: 'A night body in sky', englishPronunciation: 'TSOO-kee' }
    ],
    quiz: [
      { question: 'What is "Hello" in Japanese?', options: ['こんにちは', 'さようなら', 'ありがとう', 'すみません'], correct: 0 },
      { question: 'What does "ありがとう" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Japanese?', options: ['犬', '猫', '鳥', '魚'], correct: 1 },
      { question: 'What is "Water" in Japanese?', options: ['牛乳', 'お茶', '水', 'ジュース'], correct: 2 },
      { question: 'What does "家" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: '小さな猫', emoji: '🐱', content: 'むかしむかし、ミトンという小さな猫がいました。ミトンは毛糸で遊んだり、庭で蝶を追いかけたりするのが大好きでした。毎日が新しい冒険でした！', level: 'Beginner' },
      { title: '市場への旅', emoji: '🏪', content: 'マリアは新鮮な果物を買うために市場に行きました。彼女はリンゴ、オレンジ、バナナを買いました。市場はカラフルで親切な人々でいっぱいでした。', level: 'Beginner' },
      { title: '魔法の本', emoji: '📚', content: '小さな図書館には、読者を異なる世界に運ぶことができる魔法の本がありました。すべてのページは発見されるのを待っている新しい冒険でした。', level: 'Intermediate' },
      { title: '優しい犬', emoji: '🐕', content: '小さな町にマックスという優しい犬が住んでいました。マックスはみんなを助けるのが大好きでした。彼はジョンソンさんに新聞を届けたり、放課後に子供たちと遊んだりしました。', level: 'Beginner' }
    ]
  },
  
  Spanish: {
    letters: {
      vowels: ['A', 'E', 'I', 'O', 'U'],
      consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
    },
    words: [
      { word: 'Hola', translation: 'Hello', emoji: '👋', pronunciation: 'oh-lah', englishMeaning: 'A warm greeting', englishPronunciation: 'OH-lah' },
      { word: 'Libro', translation: 'Book', emoji: '📚', pronunciation: 'lee-broh', englishMeaning: 'A written publication', englishPronunciation: 'LEE-broh' },
      { word: 'Gato', translation: 'Cat', emoji: '🐱', pronunciation: 'gah-toh', englishMeaning: 'A small furry pet', englishPronunciation: 'GAH-to' },
      { word: 'Perro', translation: 'Dog', emoji: '🐕', pronunciation: 'peh-rroh', englishMeaning: 'A loyal pet animal', englishPronunciation: 'PEH-ro' },
      { word: 'Casa', translation: 'House', emoji: '🏠', pronunciation: 'kah-sah', englishMeaning: 'A place to live', englishPronunciation: 'KAH-sah' },
      { word: 'Agua', translation: 'Water', emoji: '💧', pronunciation: 'ah-gwah', englishMeaning: 'A clear liquid', englishPronunciation: 'AH-gwah' },
      { word: 'Sol', translation: 'Sun', emoji: '☀️', pronunciation: 'sohl', englishMeaning: 'A bright star', englishPronunciation: 'sol' },
      { word: 'Luna', translation: 'Moon', emoji: '🌙', pronunciation: 'loo-nah', englishMeaning: 'A night celestial body', englishPronunciation: 'LOO-nah' }
    ],
    quiz: [
      { question: 'What is "Hello" in Spanish?', options: ['Hola', 'Adiós', 'Gracias', 'Por favor'], correct: 0 },
      { question: 'What does "Gracias" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Spanish?', options: ['Perro', 'Gato', 'Pájaro', 'Pez'], correct: 1 },
      { question: 'What is "Water" in Spanish?', options: ['Leche', 'Té', 'Agua', 'Jugo'], correct: 2 },
      { question: 'What does "Casa" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'El Gato Pequeño', emoji: '🐱', content: 'Había una vez un pequeño gato llamado Mittens. A Mittens le encantaba jugar con lana y perseguir mariposas en el jardín. ¡Cada día era una nueva aventura!', level: 'Beginner' },
      { title: 'Un Viaje al Mercado', emoji: '🏪', content: 'María fue al mercado a comprar frutas frescas. Compró manzanas, naranjas y plátanos. El mercado era colorido y lleno de gente amable.', level: 'Beginner' },
      { title: 'El Libro Mágico', emoji: '📚', content: 'En una pequeña biblioteca, había un libro mágico que podía transportar a los lectores a diferentes mundos. Cada página era una nueva aventura esperando ser descubierta.', level: 'Intermediate' },
      { title: 'El Perro Amigable', emoji: '🐕', content: 'Había un perro amigable llamado Max que vivía en un pueblo pequeño. A Max le encantaba ayudar a todos. Traía el periódico al Sr. Johnson y jugaba con los niños después de la escuela.', level: 'Beginner' }
    ]
  },
  
  German: {
    letters: {
      vowels: ['A', 'E', 'I', 'O', 'U', 'Ä', 'Ö', 'Ü'],
      consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'ẞ']
    },
    words: [
      { word: 'Hallo', translation: 'Hello', emoji: '👋', pronunciation: 'hal-lo', englishMeaning: 'A friendly greeting', englishPronunciation: 'HAH-lo' },
      { word: 'Buch', translation: 'Book', emoji: '📚', pronunciation: 'book', englishMeaning: 'A written publication', englishPronunciation: 'book' },
      { word: 'Katze', translation: 'Cat', emoji: '🐱', pronunciation: 'kat-tse', englishMeaning: 'A small furry pet', englishPronunciation: 'KAHT-seh' },
      { word: 'Hund', translation: 'Dog', emoji: '🐕', pronunciation: 'hoont', englishMeaning: 'A loyal pet animal', englishPronunciation: 'hoont' },
      { word: 'Haus', translation: 'House', emoji: '🏠', pronunciation: 'how-s', englishMeaning: 'A place to live', englishPronunciation: 'HOWS' },
      { word: 'Wasser', translation: 'Water', emoji: '💧', pronunciation: 'vas-ser', englishMeaning: 'A clear liquid', englishPronunciation: 'VAHS-ser' },
      { word: 'Sonne', translation: 'Sun', emoji: '☀️', pronunciation: 'zon-ne', englishMeaning: 'A bright star', englishPronunciation: 'ZOH-neh' },
      { word: 'Mond', translation: 'Moon', emoji: '🌙', pronunciation: 'mont', englishMeaning: 'A night celestial body', englishPronunciation: 'mont' }
    ],
    quiz: [
      { question: 'What is "Hello" in German?', options: ['Hallo', 'Auf Wiedersehen', 'Danke', 'Bitte'], correct: 0 },
      { question: 'What does "Danke" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in German?', options: ['Hund', 'Katze', 'Vogel', 'Fisch'], correct: 1 },
      { question: 'What is "Water" in German?', options: ['Milch', 'Tee', 'Wasser', 'Saft'], correct: 2 },
      { question: 'What does "Haus" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'Die Kleine Katze', emoji: '🐱', content: 'Es war einmal eine kleine Katze namens Miez. Miez liebte es mit einem Wollknäuel zu spielen und Schmetterlinge im Garten zu jagen. Jeder Tag war ein neues Abenteuer für sie!', level: 'Beginner' },
      { title: 'Auf dem Markt', emoji: '🏪', content: 'Maria ging auf den Markt, um frisches Obst zu kaufen. Sie kaufte Äpfel, Orangen und Bananen. Der Markt war bunt und voller freundlicher Menschen.', level: 'Beginner' },
      { title: 'Das Zauberbuch', emoji: '📚', content: 'In einer kleinen Bibliothek gab es ein Zauberbuch, das Leser in verschiedene Welten transportieren konnte. Jede Seite war ein neues Abenteuer, das darauf wartete entdeckt zu werden.', level: 'Intermediate' },
      { title: 'Der Freundliche Hund', emoji: '🐕', content: 'Es gab einen freundlichen Hund namens Max, der in einer kleinen Stadt lebte. Max liebte es, allen zu helfen. Er brachte Herrn Johnson die Zeitung und spielte nach der Schule mit den Kindern.', level: 'Beginner' }
    ]
  },
  
  Italian: {
    letters: {
      vowels: ['A', 'E', 'I', 'O', 'U'],
      consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
    },
    words: [
      { word: 'Ciao', translation: 'Hello', emoji: '👋', pronunciation: 'chow', englishMeaning: 'A greeting or farewell', englishPronunciation: 'CHOW' },
      { word: 'Libro', translation: 'Book', emoji: '📚', pronunciation: 'lee-bro', englishMeaning: 'A written publication', englishPronunciation: 'LEE-bro' },
      { word: 'Gatto', translation: 'Cat', emoji: '🐱', pronunciation: 'gat-to', englishMeaning: 'A small furry pet', englishPronunciation: 'GAH-to' },
      { word: 'Cane', translation: 'Dog', emoji: '🐕', pronunciation: 'ka-ne', englishMeaning: 'A loyal pet animal', englishPronunciation: 'KAH-neh' },
      { word: 'Casa', translation: 'House', emoji: '🏠', pronunciation: 'ka-sa', englishMeaning: 'A place to live', englishPronunciation: 'KAH-sah' },
      { word: 'Acqua', translation: 'Water', emoji: '💧', pronunciation: 'ak-kwa', englishMeaning: 'A clear liquid', englishPronunciation: 'AHK-wah' },
      { word: 'Sole', translation: 'Sun', emoji: '☀️', pronunciation: 'so-le', englishMeaning: 'A bright star', englishPronunciation: 'SOH-leh' },
      { word: 'Luna', translation: 'Moon', emoji: '🌙', pronunciation: 'loo-na', englishMeaning: 'A night celestial body', englishPronunciation: 'LOO-nah' }
    ],
    quiz: [
      { question: 'What is "Hello" in Italian?', options: ['Ciao', 'Arrivederci', 'Grazie', 'Per favore'], correct: 0 },
      { question: 'What does "Grazie" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Italian?', options: ['Cane', 'Gatto', 'Uccello', 'Pesce'], correct: 1 },
      { question: 'What is "Water" in Italian?', options: ['Latte', 'Tè', 'Acqua', 'Succo'], correct: 2 },
      { question: 'What does "Casa" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'Il Gattino', emoji: '🐱', content: 'C\'era una volta un piccolo gatto di nome Micio. A Micio piaceva giocare con una pallina di lana e inseguire le farfalle nel giardino. Ogni giorno era una nuova avventura per lui!', level: 'Beginner' },
      { title: 'Al Mercato', emoji: '🏪', content: 'Maria è andata al mercato per comprare della frutta fresca. Ha comprato mele, arance e banane. Il mercato era colorato e pieno di persone simpatiche.', level: 'Beginner' },
      { title: 'Il Libro Magico', emoji: '📚', content: 'In una piccola biblioteca, c\'era un libro magico che poteva trasportare i lettori in mondi diversi. Ogni pagina era una nuova avventura in attesa di essere scoperta.', level: 'Intermediate' },
      { title: 'Il Cane Amichevole', emoji: '🐕', content: 'C\'era un cane amichevole di nome Max che viveva in una piccola città. A Max piaceva aiutare tutti. Portava il giornale al signor Rossi e giocava con i bambini dopo la scuola.', level: 'Beginner' }
    ]
  },
  
  Portuguese: {
    letters: {
      vowels: ['A', 'E', 'I', 'O', 'U'],
      consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'Ç']
    },
    words: [
      { word: 'Olá', translation: 'Hello', emoji: '👋', pronunciation: 'o-la', englishMeaning: 'A warm greeting', englishPronunciation: 'oh-LAH' },
      { word: 'Livro', translation: 'Book', emoji: '📚', pronunciation: 'lee-vro', englishMeaning: 'A written publication', englishPronunciation: 'LEE-vro' },
      { word: 'Gato', translation: 'Cat', emoji: '🐱', pronunciation: 'ga-too', englishMeaning: 'A small furry pet', englishPronunciation: 'GAH-to' },
      { word: 'Cachorro', translation: 'Dog', emoji: '🐕', pronunciation: 'ka-sho-roo', englishMeaning: 'A loyal pet animal', englishPronunciation: 'kah-SHOR-roo' },
      { word: 'Casa', translation: 'House', emoji: '🏠', pronunciation: 'ka-sa', englishMeaning: 'A place to live', englishPronunciation: 'KAH-sah' },
      { word: 'Água', translation: 'Water', emoji: '💧', pronunciation: 'a-gwa', englishMeaning: 'A clear liquid', englishPronunciation: 'AH-gwah' },
      { word: 'Sol', translation: 'Sun', emoji: '☀️', pronunciation: 'sol', englishMeaning: 'A bright star', englishPronunciation: 'sol' },
      { word: 'Lua', translation: 'Moon', emoji: '🌙', pronunciation: 'loo-a', englishMeaning: 'A night celestial body', englishPronunciation: 'LOO-ah' }
    ],
    quiz: [
      { question: 'What is "Hello" in Portuguese?', options: ['Olá', 'Adeus', 'Obrigado', 'Por favor'], correct: 0 },
      { question: 'What does "Obrigado" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Portuguese?', options: ['Cachorro', 'Gato', 'Pássaro', 'Peixe'], correct: 1 },
      { question: 'What is "Water" in Portuguese?', options: ['Leite', 'Chá', 'Água', 'Suco'], correct: 2 },
      { question: 'What does "Casa" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'O Gatinho', emoji: '🐱', content: 'Era uma vez um pequeno gato chamado Mimi. Mimi adorava brincar com um novelo de lã e perseguir borboletas no jardim. Cada dia era uma nova aventura para ele!', level: 'Beginner' },
      { title: 'Na Feira', emoji: '🏪', content: 'Maria foi à feira para comprar frutas frescas. Ela comprou maçãs, laranjas e bananas. A feira era colorida e cheia de pessoas simpáticas.', level: 'Beginner' },
      { title: 'O Livro Mágico', emoji: '📚', content: 'Em uma pequena biblioteca, havia um livro mágico que podia transportar os leitores para diferentes mundos. Cada página era uma nova aventura esperando para ser descoberta.', level: 'Intermediate' },
      { title: 'O Cão Amigável', emoji: '🐕', content: 'Havia um cão amigável chamado Max que vivia em uma pequena cidade. Max adorava ajudar todos. Ele trazia o jornal ao Sr. Silva e brincava com as crianças depois da escola.', level: 'Beginner' }
    ]
  },
  
  Chinese: {
    letters: {
      pinyin_initials: ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's'],
      pinyin_finals: ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ao', 'ou', 'an', 'en', 'ang', 'eng', 'er'],
      characters: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '人', '口', '手', '日', '月', '水', '火', '木', '金', '土']
    },
    words: [
      { word: '你好', translation: 'Hello', emoji: '👋', pronunciation: 'ní hǎo', englishMeaning: 'A common greeting', englishPronunciation: 'nee how' },
      { word: '书', translation: 'Book', emoji: '📚', pronunciation: 'shū', englishMeaning: 'A written publication', englishPronunciation: 'shoo' },
      { word: '猫', translation: 'Cat', emoji: '🐱', pronunciation: 'māo', englishMeaning: 'A small furry pet', englishPronunciation: 'mow' },
      { word: '狗', translation: 'Dog', emoji: '🐕', pronunciation: 'gǒu', englishMeaning: 'A loyal pet animal', englishPronunciation: 'go' },
      { word: '房子', translation: 'House', emoji: '🏠', pronunciation: 'fáng zi', englishMeaning: 'A place to live', englishPronunciation: 'fahng dzuh' },
      { word: '水', translation: 'Water', emoji: '💧', pronunciation: 'shuǐ', englishMeaning: 'A clear liquid', englishPronunciation: 'shway' },
      { word: '太阳', translation: 'Sun', emoji: '☀️', pronunciation: 'tài yáng', englishMeaning: 'A bright star', englishPronunciation: 'tie yang' },
      { word: '月亮', translation: 'Moon', emoji: '🌙', pronunciation: 'yuè liàng', englishMeaning: 'A night celestial body', englishPronunciation: 'yweh lyahng' }
    ],
    quiz: [
      { question: 'What is "Hello" in Chinese?', options: ['你好', '再见', '谢谢', '请'], correct: 0 },
      { question: 'What does "谢谢" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Chinese?', options: ['狗', '猫', '鸟', '鱼'], correct: 1 },
      { question: 'What is "Water" in Chinese?', options: ['牛奶', '茶', '水', '果汁'], correct: 2 },
      { question: 'What does "房子" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: '小猫', emoji: '🐱', content: '从前有一只名叫咪咪的小猫。咪咪喜欢玩毛线球和在花园里追蝴蝶。每一天对他来说都是新的冒险！', level: 'Beginner' },
      { title: '去市场', emoji: '🏪', content: '玛丽亚去市场买新鲜水果。她买了苹果、橙子和香蕉。市场色彩缤纷，到处都是友善的人们。', level: 'Beginner' },
      { title: '魔法书', emoji: '📚', content: '在一个小图书馆里，有一本可以将读者带到不同世界的魔法书。每一页都是等待被发现的新冒险。', level: 'Intermediate' },
      { title: '友善的狗', emoji: '🐕', content: '有一个叫马克斯的友善的狗住在小镇上。马克斯喜欢帮助每个人。他给约翰逊先生送报纸，放学后和孩子们一起玩。', level: 'Beginner' }
    ]
  },
  
  Tamil: {
    letters: {
      vowels: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'],
      consonants: ['க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன'],
      compounds: ['கா', 'கி', 'கீ', 'கு', 'கூ', 'கெ', 'கே', 'கை', 'கொ', 'கோ', 'கௌ']
    },
    words: [
      { word: 'வணக்கம்', translation: 'Hello', emoji: '👋', pronunciation: 'vaṇakkam', englishMeaning: 'A respectful greeting', englishPronunciation: 'vah-NAH-kum' },
      { word: 'புத்தகம்', translation: 'Book', emoji: '📚', pronunciation: 'putthakam', englishMeaning: 'A written publication', englishPronunciation: 'poo-TAH-kum' },
      { word: 'பூனை', translation: 'Cat', emoji: '🐱', pronunciation: 'pūṉai', englishMeaning: 'A small furry pet', englishPronunciation: 'POO-nai' },
      { word: 'நாய்', translation: 'Dog', emoji: '🐕', pronunciation: 'nāy', englishMeaning: 'A loyal pet animal', englishPronunciation: 'nai' },
      { word: 'வீடு', translation: 'House', emoji: '🏠', pronunciation: 'vīṭu', englishMeaning: 'A place to live', englishPronunciation: 'VEE-doo' },
      { word: 'தண்ணீர்', translation: 'Water', emoji: '💧', pronunciation: 'taṇṇīr', englishMeaning: 'A clear liquid', englishPronunciation: 'tun-NEER' },
      { word: 'சூரியன்', translation: 'Sun', emoji: '☀️', pronunciation: 'cūriyaṉ', englishMeaning: 'A bright star', englishPronunciation: 'soo-REE-yun' },
      { word: 'சந்திரன்', translation: 'Moon', emoji: '🌙', pronunciation: 'cantiraṉ', englishMeaning: 'A night celestial body', englishPronunciation: 'chan-DEER-un' }
    ],
    quiz: [
      { question: 'What is "Hello" in Tamil?', options: ['வணக்கம்', 'உங்களுக்கு வணக்கம்', 'நன்றி', 'தயவு செய்து'], correct: 0 },
      { question: 'What does "நன்றி" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Tamil?', options: ['நாய்', 'பூனை', 'பறவை', 'மீன்'], correct: 1 },
      { question: 'What is "Water" in Tamil?', options: ['பால்', 'தேநீர்', 'தண்ணீர்', 'ரசம்'], correct: 2 },
      { question: 'What does "வீடு" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'சிறிய பூனை', emoji: '🐱', content: 'ஒரு முறை மிட்டன்ஸ் என்ற சிறிய பூனை இருந்தது. மிட்டன்ஸ் ஒரு உருளையுடன் விளையாடுவதையும், தோட்டத்தில் விசிறிகளைத் தேடுவதையும் விரும்பினார். ஒவ்வொரு நாளும் அவருக்கு ஒரு புதிய சாகசமாக இருந்தது!', level: 'Beginner' },
      { title: 'சந்தைக்கு போகுதல்', emoji: '🏪', content: 'புதிய பழங்களை வாங்க மேரி சந்தைக்குச் சென்றார். அவர் ஆப்பிள்கள், ஆரஞ்சுகள் மற்றும் வாழைப்பழங்களை வாங்கினார். சந்தை நிறமயமாகவும், நல்ல மக்களால் நிரம்பியும் இருந்தது.', level: 'Beginner' },
      { title: 'மாஜிக் புத்தகம்', emoji: '📚', content: 'ஒரு சிறிய நூலகத்தில், படிப்பவர்களை வெவ்வேறு உலகங்களுக்கு கொண்டு செல்லக்கூடிய மாஜிக் புத்தகம் இருந்தது. ஒவ்வொரு பக்கமும் கண்டுபிடிக்கப்பட காத்திருக்கும் புதிய சாகசமாக இருந்தது.', level: 'Intermediate' },
      { title: 'நல்ல நாய்', emoji: '🐕', content: 'மாக்ஸ் என்ற நல்ல நாய் ஒரு சிறிய நகரத்தில் வசித்தார். மாக்ஸ் அனைவருக்கும் உதவ விரும்பினார். அவர் ஜான்சன் அவர்களுக்கு செய்தித்தாளைக் கொண்டு சென்று, பள்ளிக்குப் பிறகு குழந்தைகளுடன் விளையாடினார்.', level: 'Beginner' }
    ]
  },
  
  Telugu: {
    letters: {
      vowels: ['అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ'],
      consonants: ['క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ', 'ట', 'ఠ', 'డ', 'ఢ', 'ణ', 'త', 'థ', 'ద', 'ధ', 'న', 'ప', 'ఫ', 'బ', 'భ', 'మ', 'య', 'ర', 'ల', 'వ', 'శ', 'ష', 'స', 'హ', 'ళ', 'క్ష', 'ఱ'],
      compounds: ['కా', 'కి', 'కీ', 'కు', 'కూ', 'కె', 'కే', 'కై', 'కొ', 'కో', 'కౌ']
    },
    words: [
      { word: 'హలో', translation: 'Hello', emoji: '👋', pronunciation: 'halō', englishMeaning: 'A friendly greeting', englishPronunciation: 'ha-LO' },
      { word: 'పుస్తకం', translation: 'Book', emoji: '📚', pronunciation: 'pustakaṁ', englishMeaning: 'A written publication', englishPronunciation: 'poo-stah-kum' },
      { word: 'పిల్లి', translation: 'Cat', emoji: '🐱', pronunciation: 'pilli', englishMeaning: 'A small furry pet', englishPronunciation: 'PILL-ee' },
      { word: 'కుక్క', translation: 'Dog', emoji: '🐕', pronunciation: 'kukka', englishMeaning: 'A loyal pet animal', englishPronunciation: 'KUK-ka' },
      { word: 'ఇల్లు', translation: 'House', emoji: '🏠', pronunciation: 'illu', englishMeaning: 'A place to live', englishPronunciation: 'ILL-oo' },
      { word: 'నీరు', translation: 'Water', emoji: '💧', pronunciation: 'nīru', englishMeaning: 'A clear liquid', englishPronunciation: 'NEE-roo' },
      { word: 'సూర్యుడు', translation: 'Sun', emoji: '☀️', pronunciation: 'sūryuḍu', englishMeaning: 'A bright star', englishPronunciation: 'SOO-ryoo-doo' },
      { word: 'చంద్రుడు', translation: 'Moon', emoji: '🌙', pronunciation: 'caṁdruḍu', englishMeaning: 'A night celestial body', englishPronunciation: 'CHAN-droo-doo' }
    ],
    quiz: [
      { question: 'What is "Hello" in Telugu?', options: ['హలో', 'వీడికోసం', 'ధన్యవాదాలు', 'దయచేసి'], correct: 0 },
      { question: 'What does "ధన్యవాదాలు" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Telugu?', options: ['కుక్క', 'పిల్లి', 'పక్షి', 'చేప'], correct: 1 },
      { question: 'What is "Water" in Telugu?', options: ['పాలు', 'టీ', 'నీరు', 'రసం'], correct: 2 },
      { question: 'What does "ఇల్లు" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'చిన్న పిల్లి', emoji: '🐱', content: 'ఒకప్పుడు మిట్టన్స్ అనే చిన్న పిల్లి ఉంది. మిట్టన్స్ బంతితో ఆడడం ఇష్టపడేవారు మరియు తోటలో విచ్చేళ్లను వేటాడేవారు. ప్రతి రోజూ కొత్త సాహసం ఉండేది!', level: 'Beginner' },
      { title: 'మార్కెట్‌కు వెళ్ళడం', emoji: '🏪', content: 'కొత్త పండ్లు కొనడానికి మేరి మార్కెట్‌కు వెళ్ళింది. ఆమె సేపు, నారింజములు మరియు బానసా కొన్నారు. మార్కెట్ రంగులతో కూడినదిగా మరియు స్నేహపూర్వక ప్రజలతో కూడినదిగా ఉంది.', level: 'Beginner' },
      { title: 'మాజిక్ బుక్', emoji: '📚', content: 'చిన్న గ్రంథాలయంలో, చదువరులను వేరొక ప్రపంచాలకు తీసుకువెళ్లగలిగే మాజిక్ బుక్ ఉంది. ప్రతి పేజీ కనుగొనబడే కొత్త సాహసంగా ఉంటుంది.', level: 'Intermediate' },
      { title: 'స్నేహపూర్వక కుక్క', emoji: '🐕', content: 'చిన్న పట్టణంలో మాక్స్ అనే స్నేహపూర్వక కుక్క ఉన్నారు. మాక్స్ అందరికీ సహాయం చేయడం ఇష్టపడేవారు. ఆయన జాన్‌సన్ గారికి వార్తాపత్రికను తీసుకురావడం మరియు పాఠశాల తరువాత పిల్లలతో ఆడడం.', level: 'Beginner' }
    ]
  },
  
  Arabic: {
    letters: {
      consonants: ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'],
      long_vowels: ['آ', 'أ', 'إ', 'ؤ', 'ئ'],
      diacritics: ['َ', 'ُ', 'ِ', 'ّ', 'ْ']
    },
    words: [
      { word: 'مرحبا', translation: 'Hello', emoji: '👋', pronunciation: 'mar-ha-baan', englishMeaning: 'A warm greeting', englishPronunciation: 'mar-HAH-bah' },
      { word: 'كتاب', translation: 'Book', emoji: '📚', pronunciation: 'ki-taab', englishMeaning: 'A written publication', englishPronunciation: 'ki-TAHB' },
      { word: 'قطة', translation: 'Cat', emoji: '🐱', pronunciation: 'qit-ta', englishMeaning: 'A small furry pet', englishPronunciation: 'kit-AH' },
      { word: 'كلب', translation: 'Dog', emoji: '🐕', pronunciation: 'kalb', englishMeaning: 'A loyal pet animal', englishPronunciation: 'kalb' },
      { word: 'منزل', translation: 'House', emoji: '🏠', pronunciation: 'man-zal', englishMeaning: 'A place to live', englishPronunciation: 'man-ZAL' },
      { word: 'ماء', translation: 'Water', emoji: '💧', pronunciation: 'maa', englishMeaning: 'A clear liquid', englishPronunciation: 'mah' },
      { word: 'شمس', translation: 'Sun', emoji: '☀️', pronunciation: 'shams', englishMeaning: 'A bright star', englishPronunciation: 'shams' },
      { word: 'قمر', translation: 'Moon', emoji: '🌙', pronunciation: 'qamar', englishMeaning: 'A night celestial body', englishPronunciation: 'QA-mar' }
    ],
    quiz: [
      { question: 'What is "Hello" in Arabic?', options: ['مرحبا', 'وداعا', 'شكرا', 'من فضلك'], correct: 0 },
      { question: 'What does "شكرا" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Arabic?', options: ['كلب', 'قطة', 'طائر', 'سمكة'], correct: 1 },
      { question: 'What is "Water" in Arabic?', options: ['حليب', 'شاي', 'ماء', 'عصير'], correct: 2 },
      { question: 'What does "منزل" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'القطة الصغيرة', emoji: '🐱', content: 'كان هناك قطة صغيرة تُدعى متنز. كانت تحب اللعب مع كرات الصوف ومطاردة الفراشات في الحديقة. كان كل يوم مغامرة جديدة بالنسبة لها!', level: 'Beginner' },
      { title: 'رحلة إلى السوق', emoji: '🏪', content: 'ذهبت ماري إلى السوق لشراء فواكه طازجة. اشترت تفاحاً وبرتقالاً وموزاً. كان السوق مليئاً بالألوان والناس الودودين.', level: 'Beginner' },
      { title: 'الكتاب السحري', emoji: '📚', content: 'في مكتبة صغيرة، كان هناك كتاب سحري يمكنه نقل القراء إلى عوالم مختلفة. كانت كل صفحة مغامرة جديدة تنتظر لاكتشافها.', level: 'Intermediate' },
      { title: 'الكلب الودود', emoji: '🐕', content: 'كان هناك كلب ودود يُدعى ماكس يعيش في بلدة صغيرة. كان ماكس يحب مساعدة الجميع. كان يجلب الجريدة للسيد جونسون ويلاعب الأطفال بعد المدرسة.', level: 'Beginner' }
    ]
  },
  
  Russian: {
    letters: {
      vowels: ['А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'],
      consonants: ['Б', 'В', 'Г', 'Д', 'Ж', 'З', 'Й', 'К', 'Л', 'М', 'Н', 'П', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ь']
    },
    words: [
      { word: 'Привет', translation: 'Hello', emoji: '👋', pronunciation: 'pri-vyet', englishMeaning: 'An informal greeting', englishPronunciation: 'pri-VET' },
      { word: 'Книга', translation: 'Book', emoji: '📚', pronunciation: 'knee-ga', englishMeaning: 'A written publication', englishPronunciation: 'KNEE-gah' },
      { word: 'Кошка', translation: 'Cat', emoji: '🐱', pronunciation: 'ko-shee-ka', englishMeaning: 'A small furry pet', englishPronunciation: 'KOSH-kah' },
      { word: 'Собака', translation: 'Dog', emoji: '🐕', pronunciation: 'so-ba-ka', englishMeaning: 'A loyal pet animal', englishPronunciation: 'sah-BAH-kah' },
      { word: 'Дом', translation: 'House', emoji: '🏠', pronunciation: 'dom', englishMeaning: 'A place to live', englishPronunciation: 'dom' },
      { word: 'Вода', translation: 'Water', emoji: '💧', pronunciation: 'vo-da', englishMeaning: 'A clear liquid', englishPronunciation: 'vah-DAH' },
      { word: 'Солнце', translation: 'Sun', emoji: '☀️', pronunciation: 'soln-tse', englishMeaning: 'A bright star', englishPronunciation: 'SOIL-ntseh' },
      { word: 'Луна', translation: 'Moon', emoji: '🌙', pronunciation: 'loo-na', englishMeaning: 'A night celestial body', englishPronunciation: 'loo-NAH' }
    ],
    quiz: [
      { question: 'What is "Hello" in Russian?', options: ['Привет', 'До свидания', 'Спасибо', 'Пожалуйста'], correct: 0 },
      { question: 'What does "Спасибо" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Russian?', options: ['Собака', 'Кошка', 'Птица', 'Рыба'], correct: 1 },
      { question: 'What is "Water" in Russian?', options: ['Молоко', 'Чай', 'Вода', 'Сок'], correct: 2 },
      { question: 'What does "Дом" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'Маленький Котенок', emoji: '🐱', content: 'Жил-был маленький котенок по имени Миттенс. Миттенс любил играть с клубком шерсти и гоняться за бабочками в саду. Каждый день был новым приключением для него!', level: 'Beginner' },
      { title: 'Поход на Рынок', emoji: '🏪', content: 'Мария пошла на рынок купить свежих фруктов. Она купила яблоки, апельсины и бананы. Рынок был красочным и полным добрых людей.', level: 'Beginner' },
      { title: 'Волшебная Книга', emoji: '📚', content: 'В маленькой библиотеке была волшебная книга, которая могла переносить читателей в разные миры. Каждая страница была новым приключением, ждущим открытия.', level: 'Intermediate' },
      { title: 'Дружелюбная Собака', emoji: '🐕', content: 'Жила дружелюбная собака по имени Макс в маленьком городе. Макс любил помогать всем. Он приносил газету мистеру Джонсону и играл с детьми после школы.', level: 'Beginner' }
    ]
  },
  
  Turkish: {
    letters: {
      vowels: ['A', 'E', 'I', 'İ', 'O', 'Ö', 'U', 'Ü'],
      consonants: ['B', 'C', 'Ç', 'D', 'F', 'G', 'Ğ', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'Ş', 'T', 'V', 'Y', 'Z']
    },
    words: [
      { word: 'Merhaba', translation: 'Hello', emoji: '👋', pronunciation: 'mer-ha-ba', englishMeaning: 'A warm greeting', englishPronunciation: 'mer-HAH-bah' },
      { word: 'Kitap', translation: 'Book', emoji: '📚', pronunciation: 'kee-tap', englishMeaning: 'A written publication', englishPronunciation: 'kee-TAHP' },
      { word: 'Kedi', translation: 'Cat', emoji: '🐱', pronunciation: 'keh-dee', englishMeaning: 'A small furry pet', englishPronunciation: 'KEH-dee' },
      { word: 'Köpek', translation: 'Dog', emoji: '🐕', pronunciation: 'ker-peck', englishMeaning: 'A loyal pet animal', englishPronunciation: 'ker-PEK' },
      { word: 'Ev', translation: 'House', emoji: '🏠', pronunciation: 'ev', englishMeaning: 'A place to live', englishPronunciation: 'ev' },
      { word: 'Su', translation: 'Water', emoji: '💧', pronunciation: 'soo', englishMeaning: 'A clear liquid', englishPronunciation: 'soo' },
      { word: 'Güneş', translation: 'Sun', emoji: '☀️', pronunciation: 'goo-nesch', englishMeaning: 'A bright star', englishPronunciation: 'goo-NESH' },
      { word: 'Ay', translation: 'Moon', emoji: '🌙', pronunciation: 'eye', englishMeaning: 'A night celestial body', englishPronunciation: 'eye' }
    ],
    quiz: [
      { question: 'What is "Hello" in Turkish?', options: ['Merhaba', 'Hoşça kal', 'Teşekkür ederim', 'Lütfen'], correct: 0 },
      { question: 'What does "Teşekkür ederim" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Turkish?', options: ['Köpek', 'Kedi', 'Kuş', 'Balık'], correct: 1 },
      { question: 'What is "Water" in Turkish?', options: ['Süt', 'Çay', 'Su', 'Meyve suyu'], correct: 2 },
      { question: 'What does "Ev" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'Küçük Kedi', emoji: '🐱', content: 'Bir zamanlar Mittens adında küçük bir kedi vardı. Mittens yün topu ile oynamayı ve bahçede kelebekleri kovalamayı severdi. Her gün onun için yeni bir maceraydı!', level: 'Beginner' },
      { title: 'Pazara Gidiş', emoji: '🏪', content: 'Mary taze meyve almak için pazara gitti. Elma, portakal ve muz aldı. Pazar renkli ve samimi insanlarla doluydu.', level: 'Beginner' },
      { title: 'Sihirli Kitap', emoji: '📚', content: 'Küçük bir kütüphanede okuyucuları farklı dünyalara taşıyabilen sihirli bir kitap vardı. Her sayfa keşfedilmeyi bekleyen yeni bir maceraydı.', level: 'Intermediate' },
      { title: 'Arkadaş Canlısı Köpek', emoji: '🐕', content: 'Küçük bir kasabada Max adında arkadaş canlısı bir köpek yaşıyordu. Max herkese yardım etmeyi severdi. Bay Johnson\'a gazete getirir ve okuldan sonra çocuklarla oynardı.', level: 'Beginner' }
    ]
  },
  
  Thai: {
    letters: {
      consonants: ['ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง', 'จ', 'ฉ', 'ช', 'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ', 'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส', 'ห', 'ฬ', 'อ', 'ฮ'],
      vowels: ['ะ', 'ั', 'า', 'ำ', 'ิ', 'ี', 'ึ', 'ื', 'ุ', 'ู', 'เ', 'แ', 'โ', 'ใ', 'ไ'],
      tone_marks: ['่', '้', '๊', '๋']
    },
    words: [
      { word: 'สวัสดี', translation: 'Hello', emoji: '👋', pronunciation: 'sa-wat-dee', englishMeaning: 'A respectful greeting', englishPronunciation: 'sah-WAT-dee' },
      { word: 'หนังสือ', translation: 'Book', emoji: '📚', pronunciation: 'nang-suea', englishMeaning: 'A written publication', englishPronunciation: 'nahng-SUH-ah' },
      { word: 'แมว', translation: 'Cat', emoji: '🐱', pronunciation: 'maeo', englishMeaning: 'A small furry pet', englishPronunciation: 'MEOW' },
      { word: 'หมา', translation: 'Dog', emoji: '🐕', pronunciation: 'mo-ra', englishMeaning: 'A loyal pet animal', englishPronunciation: 'MAH' },
      { word: 'บ้าน', translation: 'House', emoji: '🏠', pronunciation: 'ban', englishMeaning: 'A place to live', englishPronunciation: 'bahn' },
      { word: 'น้ำ', translation: 'Water', emoji: '💧', pronunciation: 'naam', englishMeaning: 'A clear liquid', englishPronunciation: 'nahm' },
      { word: 'ดวงอาทิตย์', translation: 'Sun', emoji: '☀️', pronunciation: 'duang-a-ra-thit', englishMeaning: 'A bright star', englishPronunciation: 'doowang-ah-RAH-tit' },
      { word: 'พระจันทร์', translation: 'Moon', emoji: '🌙', pronunciation: 'pra-jan', englishMeaning: 'A night celestial body', englishPronunciation: 'prah-JAN' }
    ],
    quiz: [
      { question: 'What is "Hello" in Thai?', options: ['สวัสดี', 'ลาก่อน', 'ขอบคุณ', 'ได้โปรด'], correct: 0 },
      { question: 'What does "ขอบคุณ" mean?', options: ['Please', 'Thank you', 'Sorry', 'Goodbye'], correct: 1 },
      { question: 'What is "Cat" in Thai?', options: ['หมา', 'แมว', 'นก', 'ปลา'], correct: 1 },
      { question: 'What is "Water" in Thai?', options: ['นม', 'ชา', 'น้ำ', 'น้ำผลไม้'], correct: 2 },
      { question: 'What does "บ้าน" mean?', options: ['School', 'House', 'Market', 'Park'], correct: 1 }
    ],
    stories: [
      { title: 'แมวตัวน้อย', emoji: '🐱', content: 'มีแมวตัวน้อยชื่อมิตเทนส์ เธอชอบเล่นกับลูกบอลขน และไล่จับผีเสื้อในสวน ทุกวันเป็นการผจญภัยใหม่สำหรับเธอ!', level: 'Beginner' },
      { title: 'ไปตลาด', emoji: '🏪', content: 'มาเรียไปตลาดเพื่อซื้อผลไม้สด เธอซื้อแอปเปิ้ล ส้ม และกล้วย ตลาดเต็มไปด้วยสีสันและคนใจดี', level: 'Beginner' },
      { title: 'หนังสือเวทมนตร์', emoji: '📚', content: 'ในห้องสมุดเล็กๆ มีหนังสือเวทมนตร์ที่สามารถพาผู้อ่านไปยังโลกต่างๆ ได้ แต่ละหน้าคือการผจญภัยใหม่ที่รอคอยการค้นพบ', level: 'Intermediate' },
      { title: 'สุนัขที่เป็นมิตร', emoji: '🐕', content: 'มีสุนัขที่เป็นมิตรชื่อแมกซ์อาศัยอยู่ในเมืองเล็กๆ แมกซ์ชอบช่วยเหลือทุกคน เขาพานำหนังสือให้กับมิสเตอร์จอห์นสัน และเล่นกับเด็กๆ หลังเลิกเรียน', level: 'Beginner' }
    ]
  }
};

// Helper function to get content for a specific language
export const getLanguageContent = (language) => {
  return languageContent[language] || languageContent['English']; // Default to English if language not found
};