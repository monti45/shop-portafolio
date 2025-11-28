// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Tabs simples de filtrado
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('#grid .card');

function setActive(tab){
  tabs.forEach(t=>t.setAttribute('aria-selected', String(t===tab)));
}

tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    setActive(tab);
    const filter = tab.dataset.filter;
    cards.forEach(card=>{
      const show = filter === 'todos' ? true : card.dataset.cat.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  });
});

// Botones "Agregar al pedido"
document.querySelectorAll('[data-add]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.textContent = 'Agregado ✓';
    btn.disabled = true;
    btn.style.opacity = .8;
  });
});
