const root = document.getElementById('root');
const colors = ['#03ffd1','#04eaff', '#03b3ff','#ff9100', '#0335ff','#cc12ff','#ff9100','#ff00bb','#ff0033','#ff2b00','#ff9100'];

for (let i=9; i > 0; i--) {
    const el=document.createElement('div');

    el.classList.add('element');

    el.style.setProperty('--size', `${i * 3}rem`);
    el.style.setProperty('--bg-color', colors[i - 1]);
    el.style.setProperty('--rotate', `${(9 - i + 4) * 20}deg`);

    root.appendChild(el);
}