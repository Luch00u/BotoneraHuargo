const btn7 = document.getElementById('btn7');
const ahh = new Audio();
ahh.src = "../audio/ahhDody.mp3";
btn7.addEventListener('click', () => {
   ahh.play();
});