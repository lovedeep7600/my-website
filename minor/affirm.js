const affirmations = [
    "I am capable of achieving my goals.",
    "I am worthy of love and happiness.",
    "I choose to focus on the positive.",
    "I am strong and resilient.",
    "I believe in myself and my abilities.",
    "I am enough just as I am.",
    "I can handle anything that comes my way.",
    "I radiate positivity and attract good things.",
];

const affirmationElement = document.getElementById('affirmation');
const newAffirmationButton = document.getElementById('new-affirmation-button');
const resultDiv = document.getElementById('result');

newAffirmationButton.addEventListener('click', displayRandomAffirmation);

function displayRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const selectedAffirmation = affirmations[randomIndex];
    
    affirmationElement.textContent = selectedAffirmation;
    resultDiv.textContent = "Repeat this affirmation out loud!";
    resultDiv.classList.remove('hidden');
}
