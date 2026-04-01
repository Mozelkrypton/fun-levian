function check0() {
  const val = document.getElementById('code0').value.trim().toLowerCase().replace(/\s+/g, '');
  const valid = ['496', 'feb5', 'february5', '0502', '0205', 'feb5'];
  if (valid.includes(val)) {
    go('s1');
  } else {
    shake('code0');
    document.getElementById('err0').textContent = 'Nope — try again!';
    document.getElementById('code0').value = '';
  }
}

function check1() {
  const val = document.getElementById('code1').value.trim().toLowerCase();
  if (val === 'amos') {
    go('s2');
  } else {
    shake('code1');
    document.getElementById('err1').textContent = 'Not quite — keep going!';
    document.getElementById('code1').value = '';
  }
}

function sayYes() {
  go('s3');
}

function go(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = '';
}

function shake(inputId) {
  const el = document.getElementById(inputId);
  el.style.animation = 'shake 0.4s ease';
  el.addEventListener('animationend', () => el.style.animation = '', { once: true });
}

document.getElementById('code0').addEventListener('keydown', e => { if (e.key === 'Enter') check0(); });
document.getElementById('code1').addEventListener('keydown', e => { if (e.key === 'Enter') check1(); });
