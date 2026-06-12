
const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
if(toggle){ toggle.addEventListener('click', () => nav.classList.toggle('open')); }

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  if(window.scrollY > 24) header.style.background = 'rgba(11,15,25,.88)';
  else header.style.background = 'rgba(11,15,25,.72)';
});

const form = document.querySelector('[data-contact-form]');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    if(!name || !email || !message){
      alert('Compila nome, email e messaggio.');
      return;
    }
    const subject = encodeURIComponent('Richiesta consulenza - Calom Digital Studio');
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`);
    window.location.href = `mailto:supporto@calom.it?subject=${subject}&body=${body}`;
  });
}
