// let currentTimeCounter = 0;
// const timeLimit = 30; // Set the time limit here (in minutes)
// let finish = false;

// const countTime = () => {
//     const timeLimitInMinutes = timeLimit * 60;
//     const timerDisplay = document.getElementById('timer');

//     const timeCounter = setInterval(() => {
//         if (currentTimeCounter >= timeLimitInMinutes) {
//             clearInterval(timeCounter);
//             finish = true;
//             timerDisplay.textContent = "Time's up!";
//         } else {
//             let minutes = Math.floor(currentTimeCounter / 60);
//             let seconds = currentTimeCounter % 60;
//             timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//             currentTimeCounter++;
//         }
//     }, 1000);
// };

// countTime();
