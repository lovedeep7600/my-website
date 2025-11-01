document.getElementById("mood-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const date = document.getElementById("date").value;
    const mood = document.getElementById("mood").value;
    const reflection = document.getElementById("reflection").value;

    const entry = { date, mood, reflection };
    saveEntry(entry);
    displayEntries();
    updateChart();
    this.reset();
});

function saveEntry(entry) {
    let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    entries.push(entry);
    localStorage.setItem("moodEntries", JSON.stringify(entries));
}

function displayEntries() {
    const entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML = "";
    const entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

    entries.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.innerHTML = `<strong>${entry.date}</strong>: ${entry.mood} - ${entry.reflection}`;
        entriesDiv.appendChild(entryDiv);
    });
}

function updateChart() {
    const entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    const moodCounts = { happy: 0, sad: 0, anxious: 0, neutral: 0 };

    entries.forEach(entry => {
        moodCounts[entry.mood]++;
    });

    const labels = Object.keys(moodCounts);
    const data = Object.values(moodCounts);

    const ctx = document.getElementById("moodChart").getContext("2d");
    if (window.moodChart) {
        window.moodChart.destroy();
    }

    window.moodChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Mood Counts',
                data: data,
                backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#2196f3'],
                borderColor: '#333',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Display entries and chart on page load
displayEntries();
updateChart();
