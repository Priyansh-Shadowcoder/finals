const quotes = [
    "\"Success is the sum of small efforts, repeated day in and day out.\" - Robert Collier",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"Don't stress. Do your best. Forget the rest.\"",
    "\"You are entirely up to you. Make today count!\"",
    "\"A little progress each day adds up to big results.\"",
    "\"Your anxiety is lying to you. You are prepared and you will do great!\""
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}



function bringSmile() {
    document.getElementById('smile-btn').style.display = 'none';
    document.getElementById('surprise-container').style.display = 'block';
    document.getElementById('reaction-emoji').innerText = '🎉🐶';

    for (let i = 0; i < 40; i++) {
        setTimeout(createFallingEmoji, i * 50); 
    }
}

function createFallingEmoji() {
    const emojis = ['🎉', '🍕', '😴', '🎮', '🥳', '✨', '💯'];
    const emoji = document.createElement('div');
    
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    
    emoji.style.position = 'fixed';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = '-50px'; 
    emoji.style.fontSize = Math.random() * 20 + 20 + 'px'; 
    emoji.style.zIndex = '1000';
    emoji.style.transition = 'top 3s linear, opacity 3s';
    emoji.style.pointerEvents = 'none'; 
    
    document.body.appendChild(emoji);


    setTimeout(() => {
        emoji.style.top = '100vh'; 
        emoji.style.opacity = '0'; 
    }, 50);

    setTimeout(() => {
        emoji.remove();
    }, 3000);
}

function updatePanicLevel() {
    const sliderVal = document.getElementById('panic-slider').value;
    const outputText = document.getElementById('panic-output');
    const body = document.body;

    if (sliderVal < 30) {
        outputText.innerText = "Dangerously calm. Are you sure you're taking the right exam?";
        outputText.style.color = "#667eea";
        body.classList.remove('panic-mode');
    } else if (sliderVal >= 30 && sliderVal < 80) {
        outputText.innerText = "Ah, the sweet spot of mild terror and caffeine.";
        outputText.style.color = "#d69e2e";
        body.classList.remove('panic-mode');
    } else if (sliderVal >= 80 && sliderVal < 100) {
        outputText.innerText = "Entering the danger zone! Deep breaths!";
        outputText.style.color = "#e53e3e";
        body.classList.remove('panic-mode');
    } else {
        outputText.innerText = "ABORT PANIC! Take a breath, it's just a test, not the final round of an Ideathon!";
        outputText.style.color = "white";
        body.classList.add('panic-mode'); 
    }
}

const terminalLines = [
    "> Initializing night-before-exam protocol...",
    "> Bypassing university mainframe...",
    "> Scanning syllabus... ERROR: Syllabus too large.",
    "> Applying emergency caffeine patch... Success.",
    "> Compiling final result...",
    "> RESULT: 100% Guaranteed. You are going to crush it."
];

function startHack() {
    document.getElementById('hack-btn').style.display = 'none';
    const terminal = document.getElementById('terminal');
    terminal.style.display = 'block';
    
    const terminalText = document.getElementById('terminal-text');
    terminalText.innerHTML = ''; 

    let delay = 0;
    
    
    terminalLines.forEach((line, index) => {
        setTimeout(() => {
            const newLine = document.createElement('div');
            newLine.className = 'terminal-line';
            
            if (index === terminalLines.length - 1) {
                newLine.style.color = "white";
                newLine.style.fontWeight = "bold";
            }
            
            newLine.innerText = line;
            terminalText.appendChild(newLine);
            
            terminal.scrollTop = terminal.scrollHeight;
        }, delay);
        
        delay += 1200; 
    });
}