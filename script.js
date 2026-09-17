// Imposta qui la data e ora del prossimo evento (fuso orario locale del browser di chi visita).
// Formato: 'AAAA-MM-GGTHH:MM:SS'
const EVENT_DATE = new Date('2026-10-31T22:00:00');

const el = {
  dd: document.getElementById('dd'),
  hh: document.getElementById('hh'),
  mm: document.getElementById('mm'),
  ss: document.getElementById('ss'),
  countdown: document.getElementById('countdown'),
};

function pad(n){ return String(n).padStart(2, '0'); }

function tick(){
  const now = new Date();
  const diff = EVENT_DATE - now;

  if (diff <= 0){
    el.countdown.innerHTML = '<span class="lbl">La data verrà annunciata a breve</span>';
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  el.dd.textContent = pad(days);
  el.hh.textContent = pad(hours);
  el.mm.textContent = pad(mins);
  el.ss.textContent = pad(secs);
}

tick();
const timer = setInterval(tick, 1000);

document.getElementById('year').textContent = new Date().getFullYear();
