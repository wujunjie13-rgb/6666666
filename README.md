# Skeleton Anatomy Learning Page

An interactive web application for learning human skeleton anatomy with Latin terminology and Finnish translations.

## Features

### 🦴 Learn Tab
- Comprehensive catalog of 140+ human bones
- Latin nomenclature with Finnish translations
- English descriptions for each bone
- Region-based filtering:
  - Skull (Cranium)
  - Spine (Columna vertebralis)
  - Ribs & Sternum
  - Shoulder & Arms
  - Hands
  - Pelvis
  - Legs
  - Feet
- Clean, card-based layout
- Hover effects for better UX

### 📝 Quiz Tab
- Interactive quiz system with random questions
- Configurable settings:
  - Select specific anatomical regions or test all bones
  - Choose number of questions (5, 10, 15, or 20)
- Multiple choice format (4 options per question)
- Finnish hints for each question
- Immediate feedback (correct/incorrect)
- Real-time score tracking
- Final results with percentage and encouraging messages

### 🗣️ Pronunciation Guide Tab
- Basic Latin pronunciation rules
- Guide for vowels, consonants, and special combinations
- Phonetic pronunciations for 25+ common bone names
- Examples: Femur (FEE-mur), Tibia (TIB-ee-ah), etc.

## Technology Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No dependencies, pure JS
- **Responsive Design** - Works on mobile and desktop

## Usage

Simply open `index.html` in a web browser. No build process or server required.

```bash
# Option 1: Direct file opening
open index.html

# Option 2: Local server
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

## File Structure

```
.
├── index.html      # Main HTML structure (13K)
├── styles.css      # Styling and responsive design (7.8K)
├── script.js       # Interactive functionality (9.1K)
├── data.js         # Bone data with translations (15K)
└── README.md       # This file
```

## Data Coverage

- **16** skull bones with detailed Latin and Finnish names
- **26** vertebrae (cervical, thoracic, lumbar) plus sacrum and coccyx
- **24** ribs plus sternum
- **5** shoulder and arm bones
- **16** hand bones (carpals and metacarpals) plus phalanges
- **3** pelvic bones
- **4** leg bones
- **12** foot bones (tarsals and metatarsals) plus phalanges

Total: **140+ individual bone entries**

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Open source - free to use for educational purposes.