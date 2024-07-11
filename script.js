// Greet Function
function greet(neighborsName, language) {
    const greetings = {
        'en': 'Hello',
        'se': 'Dumela',
        'fr': 'Bonjour',
        'ts': 'Awe',
    };
    return `${greetings[language] || greetings['en']}, ${neighborsName}!`;
}

function displayGreeting() {
    const name = document.getElementById('neighborName').value;
    const lang = document.getElementById('language').value;
    if (/\d/.test(name)) {
        document.getElementById('greeting').innerText = 'Invalid name. Please enter a name without numbers.';
    } else {
        document.getElementById('greeting').innerText = greet(name, lang);
    }
}

// Transport Fee Function
function showTransportFee(shift) {
    const fees = {
        'morning': 10,
        'afternoon': 15,
        'night': 20
    };
    document.getElementById('feeDisplay').innerText = 'Transport Fee: R' + fees[shift];
}

// Total Phone Bill Function
function totalPhoneBill(callCount, smsCount) {
    const totalCost = (callCount * 2.75) + (smsCount * 0.65);
    return totalCost.toFixed(2);
}

function displayTotalPhoneBill() {
    const callCount = parseInt(document.getElementById('callCount').value) || 0;
    const smsCount = parseInt(document.getElementById('smsCount').value) || 0;
    const bill = totalPhoneBill(callCount, smsCount);
    document.getElementById('totalBill').innerText = 'Total Phone Bill: R' + bill;
}

// Word Game Widget
function processSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    const words = sentence.split(' ');
    let longestWord = '';
    let shortestWord = words[0];

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    });
    const wordLengths = words.map(word => `${word} (${word.length})`).join(', ');
    document.getElementById('longestWord').innerText = longestWord;
    document.getElementById('shortestWord').innerText = shortestWord;
    document.getElementById('wordLengths').innerText = wordLengths;
}