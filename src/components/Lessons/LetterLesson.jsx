import "../../styles/global.css";
import { useState, useEffect } from 'react';
import { getLanguageContent } from '../../data/lessonContent';

function LettersLesson({ onBack, language, onComplete, onSelectLesson }) {
  const content = getLanguageContent(language);
  // Combine vowels and consonants into a single array
  const letters = content.letters && typeof content.letters === 'object' && !Array.isArray(content.letters)
    ? [...(content.letters.vowels || []), ...(content.letters.consonants || []), ...(content.letters.numerals || [])]
    : (Array.isArray(content.letters) ? content.letters : []);
  
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [progress, setProgress] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // English pronunciation map for all alphabets
  const englishPronunciationMap = {
    'A': 'eh', 'B': 'bee', 'C': 'see', 'D': 'dee', 'E': 'eh',
    'F': 'ef', 'G': 'jee', 'H': 'aych', 'I': 'eye', 'J': 'jay',
    'K': 'kay', 'L': 'el', 'M': 'em', 'N': 'en', 'O': 'oh',
    'P': 'pee', 'Q': 'kyoo', 'R': 'ar', 'S': 'ess', 'T': 'tee',
    'U': 'yoo', 'V': 'vee', 'W': 'double-yoo', 'X': 'ex', 'Y': 'why', 'Z': 'zee',
    'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo',
    'ए': 'ay', 'ऐ': 'ai', 'ओ': 'oh', 'औ': 'auu', 'क': 'ka', 'ख': 'kha',
    'ग': 'ga', 'घ': 'gha', 'ङ': 'nga', 'च': 'cha', 'छ': 'chha', 'ज': 'ja',
    'झ': 'jha', 'ञ': 'nya', 'ट': 'ta', 'ठ': 'tha', 'ड': 'da', 'ढ': 'dha',
    'ण': 'na', 'त': 'ta', 'थ': 'tha', 'द': 'da', 'ध': 'dha', 'न': 'na',
    'प': 'pa', 'फ': 'pha', 'ब': 'ba', 'भ': 'bha', 'म': 'ma', 'य': 'ya',
    'र': 'ra', 'ल': 'la', 'व': 'va', 'श': 'sha', 'ष': 'sha', 'स': 'sa', 'ह': 'ha',
    '०': 'zero', '१': 'one', '२': 'two', '३': 'three', '४': 'four',
    '५': 'five', '६': 'six', '७': 'seven', '८': 'eight', '९': 'nine',
    'a': 'ah', 'b': 'bee', 'c': 'see', 'd': 'dee', 'e': 'eh',
    'f': 'ef', 'g': 'jee', 'h': 'aych', 'i': 'eye', 'j': 'jay',
    'k': 'kay', 'l': 'el', 'm': 'em', 'n': 'en', 'o': 'oh',
    'p': 'pee', 'q': 'kyoo', 'r': 'ar', 's': 'ess', 't': 'tee',
    'u': 'yoo', 'v': 'vee', 'w': 'double-yoo', 'x': 'ex', 'y': 'why', 'z': 'zee',
    // Korean Consonants
    'ㄱ': 'giyeok', 'ㄲ': 'ssanggiyeok', 'ㄴ': 'nieun', 'ㄷ': 'digeut', 'ㄸ': 'ssangdigeut',
    'ㄹ': 'rieul', 'ㅁ': 'mieum', 'ㅂ': 'bieup', 'ㅃ': 'ssangbieup', 'ㅅ': 'siot',
    'ㅆ': 'ssangsiot', 'ㅇ': 'ieung', 'ㅈ': 'jieut', 'ㅉ': 'ssangjieut', 'ㅊ': 'chieut',
    'ㅋ': 'khieut', 'ㅌ': 'thieut', 'ㅍ': 'phieut', 'ㅎ': 'hieut',
    // Korean Vowels
    'ㅏ': 'a', 'ㅐ': 'ae', 'ㅑ': 'ya', 'ㅒ': 'eo', 'ㅓ': 'eo', 'ㅔ': 'e', 'ㅕ': 'yeo',
    'ㅖ': 'yo', 'ㅗ': 'o', 'ㅘ': 'wa', 'ㅙ': 'wae', 'ㅚ': 'oe', 'ㅛ': 'yo', 'ㅜ': 'u',
    'ㅝ': 'wo', 'ㅞ': 'we', 'ㅟ': 'wi', 'ㅠ': 'yu', 'ㅡ': 'eu', 'ㅢ': 'ui', 'ㅣ': 'i',
    // Korean Combined
    '가': 'ga', '각': 'gak', '간': 'gan', '갇': 'gat', '갈': 'gal', '갉': 'gang', '갊': 'gakk', '감': 'gam', '갑': 'gap', '값': 'gaps', '갓': 'gat', '갔': 'gat', '강': 'gang', '갖': 'gat', '갗': 'gaj', '갘': 'gat', '같': 'gat', '갚': 'gat', '갛': 'gat',
    // Japanese Hiragana
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o', 'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so', 'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no', 'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo', 'や': 'ya', 'ゆ': 'yu', 'よ': 'yo', 'ら': 'ra', 'り': 'ri',
    'る': 'ru', 'れ': 're', 'ろ': 'ro', 'わ': 'wa', 'を': 'wo', 'ん': 'n',
    // Japanese Katakana
    'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o', 'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
    'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so', 'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
    'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no', 'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
    'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo', 'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo', 'ラ': 'ra', 'リ': 'ri',
    'ル': 'ru', 'レ': 're', 'ロ': 'ro', 'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n',
    // Japanese Kanji (numbers and common)
    '一': 'ichi', '二': 'ni', '三': 'san', '四': 'shi', '五': 'go', '六': 'roku', '七': 'shichi', '八': 'hachi', '九': 'kyuu', '十': 'juu',
    '人': 'hito', '本': 'hon', '日': 'hi', '月': 'tsuki', '火': 'hi', '水': 'mizu', '木': 'ki', '金': 'kin', '土': 'tsuchi',
    // Spanish
    'Ñ': 'enye',
    // German
    'Ä': 'ay', 'Ö': 'oh', 'Ü': 'oo', 'ẞ': 'ess-tset',
    // Portuguese
    'Ç': 'c-cedilla',
    // Chinese Pinyin Initials
    'b': 'bee', 'p': 'pee', 'm': 'em', 'f': 'ef', 'd': 'dee', 't': 'tee', 'n': 'en', 'l': 'el',
    'g': 'gee', 'k': 'kay', 'h': 'aych', 'j': 'jay', 'q': 'kyoo', 'x': 'shee',
    'zh': 'jr', 'ch': 'chr', 'sh': 'shr', 'r': 'er', 'z': 'zee', 'c': 'tsee', 's': 'suh',
    // Chinese Numbers
    '一': 'yee', '二': 'er', '三': 'san', '四': 'suh', '五': 'woo', '六': 'lyoo', '七': 'chee', '八': 'bah', '九': 'jyoo', '十': 'shr',
    '人': 'ren', '口': 'kou', '手': 'shou', '日': 'ri', '月': 'yue', '水': 'shui', '火': 'hou', '木': 'mu', '金': 'jin', '土': 'tu',
    // Telugu Vowels
    'అ': 'a', 'ఆ': 'aa', 'ఇ': 'i', 'ఈ': 'ee', 'ఉ': 'u', 'ఊ': 'oo', 'ఋ': 'ri', 'ఎ': 'e', 'ఏ': 'ay', 'ఐ': 'ai', 'ఒ': 'o', 'ఓ': 'oh', 'ఔ': 'au',
    // Telugu Consonants (sample)
    'క': 'ka', 'ఖ': 'kha', 'గ': 'ga', 'ఘ': 'gha', 'ఙ': 'nga', 'చ': 'cha', 'ఛ': 'chha', 'జ': 'ja', 'ఝ': 'jha', 'ఞ': 'nya',
    'ట': 'ta', 'ఠ': 'tha', 'డ': 'da', 'ఢ': 'dha', 'ణ': 'na', 'త': 'ta', 'థ': 'tha', 'ద': 'da', 'ధ': 'dha', 'న': 'na',
    'ప': 'pa', 'ఫ': 'pha', 'బ': 'ba', 'భ': 'bha', 'మ': 'ma', 'య': 'ya', 'ర': 'ra', 'ల': 'la', 'వ': 'va', 'శ': 'sha',
    'ష': 'sha', 'స': 'sa', 'హ': 'ha', 'ళ': 'lla', 'క్ష': 'ksha', 'ఱ': 'rra',
    // Arabic Consonants
    'ا': 'alif', 'ب': 'baa', 'ت': 'taa', 'ث': 'thaa', 'ج': 'jeem', 'ح': 'haa', 'خ': 'khaa', 'د': 'dal', 'ذ': 'thal', 'ر': 'raa',
    'ز': 'zay', 'س': 'seen', 'ش': 'sheen', 'ص': 'sad', 'ض': 'dad', 'ط': 'tah', 'ظ': 'zah', 'ع': 'ain', 'غ': 'ghain', 'ف': 'faa',
    'ق': 'qaf', 'ك': 'kaf', 'ل': 'lam', 'م': 'meem', 'ن': 'noon', 'ه': 'haa', 'و': 'waw', 'ي': 'yaa',
    // Arabic Long Vowels
    'آ': 'alif-madda', 'أ': 'alif-hamza-above', 'إ': 'alif-hamza-below', 'ؤ': 'waw-hamza', 'ئ': 'yaa-hamza',
    // Russian Vowels
    'А': 'ah', 'Е': 'yeh', 'Ё': 'yo', 'И': 'ee', 'О': 'oh', 'У': 'oo', 'Ы': 'ih', 'Э': 'eh', 'Ю': 'yu', 'Я': 'yah',
    // Russian Consonants
    'Б': 'beh', 'В': 'veh', 'Г': 'geh', 'Д': 'deh', 'Ж': 'zheh', 'З': 'zeh', 'Й': 'y-short', 'К': 'kah', 'Л': 'el', 'М': 'em',
    'Н': 'en', 'П': 'peh', 'Р': 'er', 'С': 'es', 'Т': 'teh', 'Ф': 'ef', 'Х': 'ha', 'Ц': 'tseh', 'Ч': 'cheh', 'Ш': 'shah',
    'Щ': 'shcha', 'Ъ': 'hard-sign', 'Ь': 'soft-sign',
    // Turkish Vowels
    'Ä': 'a-umlaut', 'Ö': 'o-umlaut', 'Ü': 'u-umlaut', 'İ': 'i-dotted', 'ı': 'i-dotless',
    // Turkish Consonants (already have A-Z covered, just special ones)
    'Ç': 'c-cedilla', 'Ğ': 'g-breve', 'ş': 's-cedilla', 'Ş': 'S-cedilla',
    // Thai Consonants (sample)
    'ก': 'ko', 'ข': 'kho', 'ค': 'kho', 'ง': 'ngo', 'จ': 'cho', 'ฉ': 'cho', 'ช': 'cho', 'ซ': 'so', 'ฌ': 'cho', 'ญ': 'yo',
    'ฎ': 'do', 'ฏ': 'to', 'ฐ': 'tho', 'ฑ': 'tho', 'ฒ': 'tho', 'ณ': 'no', 'ด': 'do', 'ต': 'to', 'ถ': 'tho', 'ท': 'tho',
    'ธ': 'tho', 'น': 'no', 'บ': 'bo', 'ป': 'po', 'ผ': 'pho', 'ฝ': 'fo', 'พ': 'pho', 'ฟ': 'fo', 'ภ': 'pho', 'ม': 'mo',
    'ย': 'yo', 'ร': 'ro', 'ล': 'lo', 'ว': 'wo', 'ศ': 'so', 'ษ': 'so', 'ส': 'so', 'ห': 'ho', 'ฬ': 'wo', 'อ': 'o', 'ฮ': 'ho',
    // Thai Vowels
    'ะ': 'a-short', 'ั': 'a-short', 'า': 'aa', 'ำ': 'am', 'ิ': 'i', 'ี': 'ii', 'ึ': 'u', 'ื': 'uu', 'ุ': 'u-short', 'ู': 'uu-short',
    'เ': 'ay', 'แ': 'ae', 'โ': 'oh', 'ใ': 'ai', 'ไ': 'ai'
  };

  const getPronunciation = (letter) => {
    return englishPronunciationMap[letter] || letter;
  };

  const speakLetter = (letter) => {
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.rate = 0.8;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem('registeredCourses');
      if (raw && language) {
        const list = JSON.parse(raw);
        const c = list.find(x => x.name === language);
        if (c) {
          setProgress(c.progress || 0);
          // Check if this lesson is already completed
          if (c.completedLessons && c.completedLessons.includes('letters')) {
            setLessonCompleted(true);
          }
        }
      }
    } catch (e) {}
  }, [language]);

  const completeLesson = () => {
    if (!lessonCompleted) {
      setLessonCompleted(true);
      setProgress(25);
      
      // Update localStorage
      try {
        const raw = localStorage.getItem('registeredCourses');
        if (raw) {
          const list = JSON.parse(raw);
          const course = list.find(x => x.name === language);
          if (course) {
            course.progress = 25;
            if (!course.completedLessons) course.completedLessons = [];
            if (!course.completedLessons.includes('letters')) {
              course.completedLessons.push('letters');
            }
            localStorage.setItem('registeredCourses', JSON.stringify(list));
          }
        }
      } catch (e) {
        console.error('Error updating localStorage:', e);
      }
      
      setShowCompletionModal(true);
      onComplete && onComplete();
      
      // Auto-navigate to Words lesson after completion
      setTimeout(() => {
        if (typeof onSelectLesson === 'function') {
          onSelectLesson('words');
        }
      }, 1500);
    } else {
      alert('ℹ️ Letter lesson already completed');
    }
  };

  const handleCloseModal = () => {
    setShowCompletionModal(false);
  };

  return (
    <div className="animate-in" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto', paddingBottom: '20px' }}>
      <button className="btn btn-primary" onClick={onBack} style={{ marginBottom: '20px' }}>
        ← Back to Courses
      </button>

      {showCompletionModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#F6D2E7',
            borderRadius: '15px',
            padding: '40px',
            textAlign: 'center',
            maxWidth: '500px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={{ color: '#6B3A6F', marginBottom: '20px', fontSize: '28px' }}>
              🎉 Congratulations!
            </h2>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
              You successfully completed the Letter lesson and can proceed to the next lesson!
            </p>
            <p style={{ fontSize: '16px', color: '#667eea', fontWeight: 'bold', marginBottom: '30px' }}>
              Progress: 25% Complete
            </p>
            <button 
              className="btn btn-primary" 
              onClick={handleCloseModal}
              style={{ padding: '12px 30px', fontSize: '16px' }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="card" style={{ background: '#F6D2E7' }}>
        <h2 style={{ fontSize: '32px', color: '#6B3A6F', marginBottom: '20px' }}>Learn Letters{language ? ` — ${language}` : ''}</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Click on any letter to learn more!</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', gap: '15px' }}>
          {letters.map(letter => (
            <div
              key={letter}
              onClick={() => {
                setSelectedLetter(letter);
                speakLetter(letter);
              }}
              style={{
                background: selectedLetter === letter ? 'linear-gradient(135deg, #E8B4D4 0%, #6B3A6F 100%)' : '#f0f0f0',
                color: selectedLetter === letter ? 'white' : '#6B3A6F',
                padding: '25px',
                borderRadius: '15px',
                fontSize: '32px',
                fontWeight: 'bold',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedLetter === letter ? '0 5px 15px #E8B4D4' : 'none'
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {selectedLetter && (
          <div style={{ marginTop: '30px', textAlign: 'center', padding: '20px', background: '#f9f9f9', borderRadius: '15px' }}>
            <p style={{ fontSize: '24px', color: '#6B3A6F', fontWeight: 'bold' }}>
              Letter: {selectedLetter}
            </p>
            <p style={{ fontSize: '18px', color: '#666', marginTop: '10px' }}>
              Pronunciation (English): "{getPronunciation(selectedLetter)}"
            </p>
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <label style={{ fontWeight: 700 }}>Course Progress: {progress}%</label>
            {lessonCompleted && <span style={{ color: '#4caf50', fontWeight: 'bold' }}>✓ Letters Completed</span>}
          </div>
          <div style={{ height: 12, background: '#eee', borderRadius: 8, overflow: 'hidden', marginBottom: 12 }}>
            <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(135deg, #398f8e 0%, #2a6b6a 100%)', transition: 'width 0.5s ease' }} />
          </div>
          <div style={{ display:'flex', gap:8, marginTop:8 }}>
            <button 
              className={lessonCompleted ? "btn btn-success" : "btn btn-primary"} 
              onClick={completeLesson}
              disabled={!language}
            >
              {lessonCompleted ? '✓ Completed' : 'Complete Lesson'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LettersLesson;