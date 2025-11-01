const moodForm = document.getElementById('mood-form');
const journalEntries = document.getElementById('journal-entries');

moodForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const mood = document.getElementById('mood').value;
    const note = document.getElementById('note').value;

    addEntry(mood, note);
    moodForm.reset();
});

function addEntry(mood, note) {
    const entry = document.createElement('div');
    entry.classList.add('entry');
    
    entry.innerHTML = `
        <strong>${mood}</strong>
        <p>${note}</p>
    `;
    
    journalEntries.appendChild(entry);
}
