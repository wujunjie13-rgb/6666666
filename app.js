// App state
let currentMode = 'typing';
let currentDifficulty = 'intermediate';
let currentTermIndex = 0;
let filteredTerms = [];
let startTime = null;
let correctCount = 0;
let totalAttempts = 0;
let currentScore = 0;

// Memory game state
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let memoryAttempts = 0;

// Flashcard state
let currentCardIndex = 0;

// Quiz state
let quizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    filterTermsByDifficulty();
    loadTypingExercise();
}

function setupEventListeners() {
    // Mode selection
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentMode = e.target.dataset.mode;
            switchMode(currentMode);
        });
    });

    // Difficulty selection
    document.getElementById('difficulty').addEventListener('change', (e) => {
        currentDifficulty = e.target.value;
        filterTermsByDifficulty();
        resetCurrentMode();
    });

    // Typing mode
    const typingInput = document.getElementById('typing-input');
    typingInput.addEventListener('input', handleTypingInput);
    typingInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkTypingAnswer();
        }
    });

    document.getElementById('skip-btn').addEventListener('click', skipTerm);
    document.getElementById('restart-btn').addEventListener('click', () => {
        resetCurrentMode();
    });

    // Flashcard mode
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.getElementById('prev-card').addEventListener('click', () => navigateCard(-1));
    document.getElementById('next-card').addEventListener('click', () => navigateCard(1));
}

function filterTermsByDifficulty() {
    const difficultyMap = {
        'beginner': ['beginner'],
        'intermediate': ['beginner', 'intermediate'],
        'advanced': ['beginner', 'intermediate', 'advanced'],
        'expert': ['beginner', 'intermediate', 'advanced', 'expert']
    };

    const allowedDifficulties = difficultyMap[currentDifficulty];
    filteredTerms = latinTerms.filter(term => allowedDifficulties.includes(term.difficulty));
    
    // Shuffle terms for variety
    filteredTerms = shuffleArray([...filteredTerms]);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function switchMode(mode) {
    document.querySelectorAll('.exercise-mode').forEach(m => m.classList.remove('active'));
    document.getElementById(`${mode}-mode`).classList.add('active');

    switch(mode) {
        case 'typing':
            loadTypingExercise();
            break;
        case 'memory':
            initMemoryGame();
            break;
        case 'flashcard':
            initFlashcards();
            break;
        case 'quiz':
            initQuiz();
            break;
    }
}

function resetCurrentMode() {
    currentTermIndex = 0;
    correctCount = 0;
    totalAttempts = 0;
    currentScore = 0;
    startTime = null;
    updateStats();
    switchMode(currentMode);
}

// TYPING MODE
function loadTypingExercise() {
    if (currentTermIndex >= filteredTerms.length) {
        showCompletionMessage();
        return;
    }

    const term = filteredTerms[currentTermIndex];
    document.getElementById('latin-term').textContent = term.term;
    document.getElementById('term-meaning').textContent = term.meaning;
    document.getElementById('current-term').textContent = currentTermIndex + 1;
    document.getElementById('total-terms').textContent = filteredTerms.length;
    document.getElementById('typing-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('typing-input').className = '';
    
    updateProgress();
    
    if (!startTime) {
        startTime = Date.now();
    }
}

function handleTypingInput(e) {
    const input = e.target.value.toLowerCase().trim();
    const target = filteredTerms[currentTermIndex].term.toLowerCase();
    
    if (input && target.startsWith(input)) {
        e.target.classList.remove('incorrect');
        e.target.classList.add('correct');
    } else if (input) {
        e.target.classList.remove('correct');
        e.target.classList.add('incorrect');
    } else {
        e.target.classList.remove('correct', 'incorrect');
    }
}

function checkTypingAnswer() {
    const input = document.getElementById('typing-input').value.toLowerCase().trim();
    const target = filteredTerms[currentTermIndex].term.toLowerCase();
    const feedback = document.getElementById('feedback');
    
    totalAttempts++;
    
    if (input === target) {
        correctCount++;
        currentScore += 10;
        feedback.textContent = '✓ Correct! Well done!';
        feedback.className = 'feedback correct';
        document.getElementById('typing-input').className = 'correct';
        
        setTimeout(() => {
            currentTermIndex++;
            loadTypingExercise();
        }, 1000);
    } else {
        feedback.textContent = `✗ Not quite. Try again!`;
        feedback.className = 'feedback incorrect';
        document.getElementById('typing-input').className = 'incorrect';
        document.getElementById('typing-input').select();
    }
    
    updateStats();
}

function skipTerm() {
    totalAttempts++;
    currentTermIndex++;
    loadTypingExercise();
    updateStats();
}

function updateProgress() {
    const progress = ((currentTermIndex) / filteredTerms.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function updateStats() {
    const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 100;
    const elapsedMinutes = startTime ? (Date.now() - startTime) / 60000 : 0;
    const wpm = elapsedMinutes > 0 ? Math.round(correctCount / elapsedMinutes) : 0;
    
    document.getElementById('wpm').textContent = wpm;
    document.getElementById('accuracy').textContent = accuracy;
    document.getElementById('score').textContent = currentScore;
}

function showCompletionMessage() {
    const feedback = document.getElementById('feedback');
    feedback.textContent = `🎉 Congratulations! You completed all ${filteredTerms.length} terms!`;
    feedback.className = 'feedback correct';
    document.getElementById('typing-input').disabled = true;
    updateProgress();
}

// MEMORY MATCH MODE
function initMemoryGame() {
    matchedPairs = 0;
    memoryAttempts = 0;
    flippedCards = [];
    
    // Select subset of terms for memory game
    const gameSize = Math.min(8, Math.floor(filteredTerms.length / 2));
    const selectedTerms = filteredTerms.slice(0, gameSize);
    
    // Create card pairs
    memoryCards = [];
    selectedTerms.forEach(term => {
        memoryCards.push({ text: term.term, type: 'term', match: term.term });
        memoryCards.push({ text: term.meaning, type: 'meaning', match: term.term });
    });
    
    memoryCards = shuffleArray(memoryCards);
    
    // Render cards
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    
    memoryCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.index = index;
        cardElement.textContent = '?';
        cardElement.addEventListener('click', () => flipMemoryCard(index));
        grid.appendChild(cardElement);
    });
    
    document.getElementById('matches').textContent = matchedPairs;
    document.getElementById('total-pairs').textContent = selectedTerms.length;
    document.getElementById('attempts').textContent = memoryAttempts;
}

function flipMemoryCard(index) {
    if (flippedCards.length >= 2) return;
    if (flippedCards.includes(index)) return;
    
    const cardElements = document.querySelectorAll('.memory-card');
    const cardElement = cardElements[index];
    
    if (cardElement.classList.contains('matched')) return;
    
    cardElement.classList.add('flipped');
    cardElement.textContent = memoryCards[index].text;
    flippedCards.push(index);
    
    if (flippedCards.length === 2) {
        memoryAttempts++;
        document.getElementById('attempts').textContent = memoryAttempts;
        
        setTimeout(() => checkMemoryMatch(), 1000);
    }
}

function checkMemoryMatch() {
    const [index1, index2] = flippedCards;
    const card1 = memoryCards[index1];
    const card2 = memoryCards[index2];
    const cardElements = document.querySelectorAll('.memory-card');
    
    if (card1.match === card2.match) {
        cardElements[index1].classList.add('matched');
        cardElements[index2].classList.add('matched');
        matchedPairs++;
        document.getElementById('matches').textContent = matchedPairs;
        currentScore += 20;
        updateStats();
        
        if (matchedPairs === memoryCards.length / 2) {
            setTimeout(() => {
                alert(`🎉 Congratulations! You matched all pairs in ${memoryAttempts} attempts!`);
            }, 500);
        }
    } else {
        cardElements[index1].classList.remove('flipped');
        cardElements[index2].classList.remove('flipped');
        cardElements[index1].textContent = '?';
        cardElements[index2].textContent = '?';
    }
    
    flippedCards = [];
}

// FLASHCARD MODE
function initFlashcards() {
    currentCardIndex = 0;
    displayFlashcard();
}

function displayFlashcard() {
    if (currentCardIndex >= filteredTerms.length) {
        currentCardIndex = 0;
    }
    
    const term = filteredTerms[currentCardIndex];
    document.getElementById('flashcard-term').textContent = term.term;
    document.getElementById('flashcard-meaning').textContent = term.meaning;
    document.getElementById('card-counter').textContent = `${currentCardIndex + 1} / ${filteredTerms.length}`;
    
    // Reset flip
    document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function navigateCard(direction) {
    currentCardIndex += direction;
    
    if (currentCardIndex < 0) {
        currentCardIndex = filteredTerms.length - 1;
    } else if (currentCardIndex >= filteredTerms.length) {
        currentCardIndex = 0;
    }
    
    displayFlashcard();
}

// QUIZ MODE
function initQuiz() {
    quizScore = 0;
    currentQuestionIndex = 0;
    
    // Generate quiz questions
    const quizSize = Math.min(10, filteredTerms.length);
    const quizTerms = shuffleArray([...filteredTerms]).slice(0, quizSize);
    
    quizQuestions = quizTerms.map(term => {
        // Create wrong answers from other terms
        const wrongAnswers = filteredTerms
            .filter(t => t.term !== term.term)
            .map(t => t.meaning)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        
        const allAnswers = shuffleArray([term.meaning, ...wrongAnswers]);
        
        return {
            question: `What does "${term.term}" mean?`,
            correct: term.meaning,
            options: allAnswers
        };
    });
    
    document.getElementById('quiz-results').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    displayQuizQuestion();
}

function displayQuizQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question-num').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = quizQuestions.length;
    document.getElementById('quiz-question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.addEventListener('click', () => selectQuizAnswer(option));
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-feedback').className = 'quiz-feedback';
    document.getElementById('next-question').style.display = 'none';
}

function selectQuizAnswer(selected) {
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quiz-feedback');
    
    options.forEach(option => {
        option.disabled = true;
        if (option.textContent === question.correct) {
            option.classList.add('correct');
        }
        if (option.textContent === selected && selected !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selected === question.correct) {
        quizScore++;
        currentScore += 15;
        feedback.textContent = '✓ Correct!';
        feedback.className = 'quiz-feedback correct';
    } else {
        feedback.textContent = `✗ Incorrect. The correct answer is: ${question.correct}`;
        feedback.className = 'quiz-feedback incorrect';
    }
    
    updateStats();
    
    const nextBtn = document.getElementById('next-question');
    nextBtn.style.display = 'block';
    nextBtn.onclick = () => {
        currentQuestionIndex++;
        displayQuizQuestion();
    };
}

function showQuizResults() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    
    document.getElementById('quiz-score').textContent = quizScore;
    document.getElementById('quiz-total').textContent = quizQuestions.length;
    document.getElementById('quiz-percentage').textContent = percentage;
    
    document.getElementById('restart-quiz').onclick = initQuiz;
}
