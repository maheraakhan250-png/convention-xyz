@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Playfair+Display:ital,wght@0,600;1,400&family=Poppins:wght@300;400;500&display=swap');

:root {
  --bg-color: #F4EBE1;
  --text-maroon: #8B263E;
  --card-bg: #FFFDF9;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color);
  font-family: 'Poppins', sans-serif;
  color: #333;
  min-height: 100vh;
}

/* Screen Layouts */
.screen {
  display: none;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.screen.active {
  display: flex;
}

/* Screen 1: Gift Box */
#screen-gift {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
}

.gift-box {
  font-size: 90px;
  animation: pulse 1.8s infinite ease-in-out;
}

.gift-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: var(--text-maroon);
  margin-top: 15px;
  font-style: italic;
}

.gift-sub {
  font-size: 0.85rem;
  color: #888;
  margin-top: 5px;
}

/* Full-Screen Rose Reveal Overlay */
#rose-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: none;
  
  background-image: url('roses.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  clip-path: inset(0 0 100% 0);
  opacity: 0;
  transform: scale(1.05);
}

#rose-transition.bloom-anim {
  animation: roseUnveil 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

#rose-transition.bloom-split {
  animation: roseSplit 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards;
}

@keyframes roseUnveil {
  0% {
    clip-path: inset(0 0 100% 0);
    opacity: 0.2;
    transform: scale(1.08);
  }
  100% {
    clip-path: inset(0 0 0 0);
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes roseSplit {
  0% {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
  100% {
    clip-path: inset(0 50% 0 50%);
    opacity: 0;
  }
}

/* Screen 2: Passcode Entry Trigger */
#screen-passcode {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
}

.card-container {
  background: #FAF3EC;
  padding: 35px 25px;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
  max-width: 420px;
  width: 90%;
}

.card-title {
  font-family: 'Playfair Display', serif;
  color: var(--text-maroon);
  font-size: 2rem;
}

.card-subtitle {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 15px;
}

.couple-illustration {
  margin: 15px auto;
  max-width: 200px;
}

.couple-illustration img {
  width: 100%;
  height: auto;
  display: block;
}

.card-quote {
  background: #FFF;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Caveat', cursive;
  font-size: 1.5rem;
  color: var(--text-maroon);
  margin-bottom: 25px;
  line-height: 1.4;
}

.quote-pink { color: #C85A70; }
.quote-green { color: #6A9A8B; }
.quote-gold { color: #D9A05B; }

.lock-btn {
  font-size: 2.2rem;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.2s;
}

.lock-btn:hover {
  transform: scale(1.1);
}

.tap-hint {
  font-size: 0.8rem;
  color: #888;
  margin-top: 5px;
}

/* Keypad Modal */
.passcode-modal {
  background: rgba(244, 235, 225, 0.97);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal-title {
  color: var(--text-maroon);
  font-weight: 500;
  font-size: 1.1rem;
}

.pin-dots {
  display: flex;
  gap: 12px;
  margin: 25px 0;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--text-maroon);
}

.dot.filled {
  background-color: var(--text-maroon);
}

.keypad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  max-width: 260px;
}

.key {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: white;
  border: 1px solid #E5D5C5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  user-select: none;
}

.key:active {
  background: #F0E2D5;
}

/* Screen 3: Main Gallery Content */
#screen-main {
  justify-content: flex-start;
  padding: 50px 20px;
  overflow-y: visible;
  height: auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 650px;
  width: 100%;
  margin-bottom: 50px;
}

.polaroid {
  background: white;
  padding: 12px 12px 28px 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
  transform: rotate(calc(var(--r, 0) * 1deg));
  transition: transform 0.3s ease;
}

.polaroid:hover {
  transform: scale(1.05) rotate(0deg);
  z-index: 5;
}

.polaroid img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 2px;
}

.letter-card {
  background: #FFFDF9;
  border: 1px solid #EAE0D5;
  border-radius: 12px;
  padding: 35px;
  max-width: 650px;
  width: 100%;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.03);
  text-align: left;
  font-family: 'Caveat', cursive;
  font-size: 1.5rem;
  line-height: 1.6;
  color: #4A3E3D;
  margin-bottom: 50px;
}

.footer-msg {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: var(--text-maroon);
  margin-bottom: 60px;
}

.footer-sub {
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #777;
  margin-top: 5px;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
