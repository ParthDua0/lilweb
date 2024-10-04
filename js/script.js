const noBtn = document.getElementById('noBtn');
 
noBtn.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * window.innerWidth - noBtn.clientWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight - noBtn.clientHeight);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});