// Passcode Configuration
const PASSCODE = "0710";
let enteredPin = "";

function triggerRoseTransition() {
  const transitionEl = document.getElementById('rose-transition');
  
  // Reset classes and show transition container
  transitionEl.className = '';
  transitionEl.style.display = 'block';

  // Trigger bloom unveil
  setTimeout(() => {
    transitionEl.classList.add('bloom-anim');
  }, 20);

  // After blooming fills the screen, open up side-by-side to reveal screen 2
  setTimeout(() => {
    document.getElementById('screen-gift').classList.remove('active');
    document.getElementById('screen-passcode').classList.add('active');
    
    transitionEl.classList.remove('bloom-anim');
    transitionEl.classList.add('bloom-split');
    
    setTimeout(() => {
      transitionEl.style.display = 'none';
      transitionEl.classList.remove('bloom-split');
    }, 800);
  }, 1600);
}

function showKeypad() {
  document.getElementById('keypad-modal').style.display = 'flex';
}

function pressKey(val) {
  if (enteredPin.length < 4) {
    enteredPin += val;
    updateDots();
  }
  if (enteredPin.length === 4) {
    setTimeout(checkPin, 200);
  }
}

function clearPin() {
  enteredPin = "";
  updateDots();
}

function updateDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (i < enteredPin.length) {
      dot.classList.add('filled');
    } else {
      dot.classList.remove('filled');
    }
  }
}

function checkPin() {
  if (enteredPin === PASSCODE) {
    document.getElementById('keypad-modal').style.display = 'none';
    document.getElementById('screen-passcode').classList.remove('active');
    document.getElementById('screen-main').classList.add('active');
  } else {
    alert("Incorrect Passkey. Please try again!");
    clearPin();
  }
}