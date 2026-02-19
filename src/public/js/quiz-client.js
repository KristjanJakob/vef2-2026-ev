document.addEventListener('DOMContentLoaded', () => {
    const q1 = document.getElementById('q1');
    const q2 = document.getElementById('q2');
    const interestInput = document.getElementById('interestInput');
  
    q1?.addEventListener('click', (e) => {
      const btn = e.target.closest('button[value]');
      if (!btn) return;
  
      interestInput.value = btn.dataset.interest;
      q1.style.display = 'none';
      q2.style.display = 'block';
    });
  
    const slider = document.getElementById('confidence');
    const out = document.getElementById('confidenceValue');
    if (slider && out) {
      out.textContent = slider.value;
      slider.addEventListener('input', () => {
        out.textContent = slider.value;
      });
    }
});  