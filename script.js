// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.dataset.tab;
        
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        button.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Region filtering in Learn tab
let currentRegion = 'all';
const regionButtons = document.querySelectorAll('.region-btn');
const boneListContainer = document.getElementById('boneList');

regionButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentRegion = button.dataset.region;
        
        // Update active button
        regionButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Display bones for selected region
        displayBones(currentRegion);
    });
});

function displayBones(region) {
    const filteredBones = region === 'all' 
        ? skeletonData 
        : skeletonData.filter(bone => bone.region === region);
    
    // Group bones by region for display
    const groupedBones = {};
    filteredBones.forEach(bone => {
        if (!groupedBones[bone.region]) {
            groupedBones[bone.region] = [];
        }
        groupedBones[bone.region].push(bone);
    });
    
    let html = '';
    const regionNames = {
        skull: 'Skull (Cranium)',
        spine: 'Spine (Columna vertebralis)',
        ribs: 'Ribs & Sternum',
        shoulder: 'Shoulder & Arms',
        hands: 'Hands',
        pelvis: 'Pelvis',
        legs: 'Legs',
        feet: 'Feet'
    };
    
    for (const [regionKey, bones] of Object.entries(groupedBones)) {
        html += `<div class="region-section">
            <h3 class="region-title">${regionNames[regionKey]}</h3>
            <div class="bones-grid">`;
        
        bones.forEach(bone => {
            html += `
                <div class="bone-card">
                    <div class="bone-latin">${bone.latin}</div>
                    <div class="bone-finnish">${bone.finnish}</div>
                    <div class="bone-description">${bone.description}</div>
                </div>`;
        });
        
        html += `</div></div>`;
    }
    
    boneListContainer.innerHTML = html;
}

// Initialize with all bones
displayBones('all');

// Quiz functionality
let quizState = {
    questions: [],
    currentQuestion: 0,
    score: 0,
    answered: false
};

const startQuizBtn = document.getElementById('startQuiz');
const quizContainer = document.getElementById('quizContainer');
const quizSettings = document.querySelector('.quiz-settings');
const questionNumber = document.getElementById('questionNumber');
const scoreDisplay = document.getElementById('score');
const questionText = document.getElementById('questionText');
const finnishHint = document.getElementById('finnishHint');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const nextQuestionBtn = document.getElementById('nextQuestion');
const quizResults = document.getElementById('quizResults');

startQuizBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', nextQuestion);

function startQuiz() {
    const region = document.getElementById('quizRegion').value;
    const length = parseInt(document.getElementById('quizLength').value);
    
    // Get bones for selected region
    let availableBones = region === 'all' 
        ? [...skeletonData] 
        : skeletonData.filter(bone => bone.region === region);
    
    // Shuffle and select questions
    availableBones = shuffleArray(availableBones);
    quizState.questions = availableBones.slice(0, Math.min(length, availableBones.length));
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.answered = false;
    
    // Hide settings, show quiz
    quizSettings.style.display = 'none';
    quizContainer.style.display = 'block';
    quizResults.style.display = 'none';
    
    displayQuestion();
}

function displayQuestion() {
    if (quizState.currentQuestion >= quizState.questions.length) {
        showResults();
        return;
    }
    
    const question = quizState.questions[quizState.currentQuestion];
    quizState.answered = false;
    
    // Update progress
    questionNumber.textContent = `Question ${quizState.currentQuestion + 1} of ${quizState.questions.length}`;
    scoreDisplay.textContent = `Score: ${quizState.score}/${quizState.currentQuestion}`;
    
    // Set question
    questionText.textContent = `What is the Latin name for this bone?`;
    finnishHint.querySelector('span').textContent = question.finnish;
    
    // Generate options (correct answer + 3 random wrong answers)
    const options = generateOptions(question);
    
    // Display options
    let optionsHtml = '';
    options.forEach((option, index) => {
        optionsHtml += `
            <button class="quiz-option" data-answer="${option === question.latin}">
                ${option}
            </button>`;
    });
    quizOptions.innerHTML = optionsHtml;
    
    // Add click handlers to options
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', selectAnswer);
    });
    
    // Hide feedback and next button
    quizFeedback.style.display = 'none';
    nextQuestionBtn.style.display = 'none';
}

function generateOptions(correctBone) {
    const options = [correctBone.latin];
    const otherBones = skeletonData.filter(bone => bone.latin !== correctBone.latin);
    const shuffled = shuffleArray(otherBones);
    
    // Add 3 random wrong answers
    for (let i = 0; i < 3 && i < shuffled.length; i++) {
        options.push(shuffled[i].latin);
    }
    
    return shuffleArray(options);
}

function selectAnswer(e) {
    if (quizState.answered) return;
    
    quizState.answered = true;
    const button = e.target;
    const isCorrect = button.dataset.answer === 'true';
    
    // Disable all buttons
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === 'true') {
            btn.classList.add('correct');
        }
    });
    
    if (isCorrect) {
        button.classList.add('correct');
        quizState.score++;
        quizFeedback.innerHTML = `<div class="feedback-correct">✓ Correct!</div>`;
    } else {
        button.classList.add('incorrect');
        const correctAnswer = quizState.questions[quizState.currentQuestion].latin;
        quizFeedback.innerHTML = `<div class="feedback-incorrect">✗ Incorrect. The correct answer is: ${correctAnswer}</div>`;
    }
    
    quizFeedback.style.display = 'block';
    nextQuestionBtn.style.display = 'block';
}

function nextQuestion() {
    quizState.currentQuestion++;
    displayQuestion();
}

function showResults() {
    const percentage = Math.round((quizState.score / quizState.questions.length) * 100);
    let message = '';
    
    if (percentage >= 90) {
        message = 'Excellent! You have mastered the terminology!';
    } else if (percentage >= 70) {
        message = 'Great job! Keep practicing!';
    } else if (percentage >= 50) {
        message = 'Good effort! Review the material and try again.';
    } else {
        message = 'Keep studying! Practice makes perfect.';
    }
    
    quizResults.innerHTML = `
        <div class="results-content">
            <h2>Quiz Complete!</h2>
            <div class="final-score">
                <div class="score-number">${quizState.score}/${quizState.questions.length}</div>
                <div class="score-percentage">${percentage}%</div>
            </div>
            <p class="results-message">${message}</p>
            <button class="btn-primary" onclick="restartQuiz()">Take Another Quiz</button>
        </div>`;
    
    quizResults.style.display = 'block';
    quizOptions.style.display = 'none';
    quizFeedback.style.display = 'none';
    nextQuestionBtn.style.display = 'none';
    document.querySelector('.quiz-progress').style.display = 'none';
    document.querySelector('.quiz-question').style.display = 'none';
}

function restartQuiz() {
    quizSettings.style.display = 'block';
    quizContainer.style.display = 'none';
    document.querySelector('.quiz-progress').style.display = 'flex';
    document.querySelector('.quiz-question').style.display = 'block';
    quizOptions.style.display = 'grid';
}

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
