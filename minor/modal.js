document.getElementById('start-button').addEventListener('click', startBreathingExercise);

function startBreathingExercise() {
    const inhaleCircle = document.getElementById('inhale');
    const holdCircle = document.getElementById('hold');
    const exhaleCircle = document.getElementById('exhale');

    inhaleCircle.style.opacity = '1';
    holdCircle.style.opacity = '0.5';
    exhaleCircle.style.opacity = '0.5';

    // Inhale phase
    setTimeout(() => {
        inhaleCircle.style.opacity = '0.5';
        holdCircle.style.opacity = '1';

        // Hold phase
        setTimeout(() => {
            holdCircle.style.opacity = '0.5';
            exhaleCircle.style.opacity = '1';

            // Exhale phase
            setTimeout(() => {
                exhaleCircle.style.opacity = '0.5';
            }, 4000); // Exhale for 4 seconds
        }, 4000); // Hold for 4 seconds
    }, 4000); // Inhale for 4 seconds
}
