<script>
const PORTFOLIO = [
  {cat:'festa',em:'🚛',txt:'Festa Construção – Davi',bg:'linear-gradient(135deg,#F59E0B,#B45309)'},
  {cat:'festa',em:'🎂',txt:'Toppers & Chapéus Personalizados',bg:'linear-gradient(135deg,#EC4899,#9333EA)'},
  {cat:'festa',em:'🏳️',txt:'Bandeirinha Viva Theo!',bg:'linear-gradient(135deg,#6EE7B7,#3B82F6)'},
  {cat:'festa',em:'🦁',txt:'Kit Festa Safari',bg:'linear-gradient(135deg,#FCA5A5,#F97316)'},
  {cat:'agenda',em:'📗',txt:'Agenda 2025 Gradiente',bg:'linear-gradient(135deg,#A855F7,#EC4899,#F97316)'},
  {cat:'agenda',em:'🌸',txt:'Planner Floral',bg:'linear-gradient(135deg,#FDE68A,#F9A8D4)'},
  {cat:'natal',em:'🎅',txt:'Papai Noel 3D em Papel',bg:'linear-gradient(135deg,#EF4444,#065F46)'},
  {cat:'natal',em:'🦌',txt:'Kit Natal Renas & Trenó',bg:'linear-gradient(135deg,#B91C1C,#A16207)'},
  {cat:'especial',em:'🌺',txt:'Vasinho Dia das Mães',bg:'linear-gradient(135deg,#F472B6,#34D399)'},
  {cat:'especial',em:'🎁',txt:'Caixinha Ferrero Rocher',bg:'linear-gradient(135deg,#EF4444,#B91C1C)'},
  {cat:'especial',em:'🔟',txt:'Letra 70 Anos Decorada',bg:'linear-gradient(135deg,#EF4444,#F9A8D4)'},
  {cat:'especial',em:'🐕',txt:'Retrato Gravado em Madeira',bg:'linear-gradient(135deg,#D97706,#92400E)'},
];

function renderPort(cat){
  const grid=document.getElementById('port-grid');
  const list=cat==='todos'?PORTFOLIO:PORTFOLIO.filter(i=>i.cat===cat);
  grid.innerHTML=list.map(i=>`
    <div class="port-item">
      <div class="port-bg" style="background:${i.bg}">
        <span class="port-em">${i.em}</span>
        <span class="port-txt">${i.txt}</span>
      </div>
      <div class="port-overlay"><span>✨ Ver mais</span></div>
    </div>`).join('');
}
function filtrar(btn,cat){
  document.querySelectorAll('.filtro').forEach(b=>b.classList.remove('ativo'));
  btn.classList.add('ativo');
  renderPort(cat);
}
renderPort('todos');

function enviar(){
  const n=document.getElementById('f-nome').value.trim();
  const t=document.getElementById('f-tel').value.trim();
  const e=document.getElementById('f-email').value.trim();
  const tp=document.getElementById('f-tipo').value;
  const m=document.getElementById('f-msg').value.trim();
  if(!n||!t||!tp){alert('Por favor, preencha Nome, WhatsApp e Tipo de produto.');return}
  const txt=encodeURIComponent(`Olá, Magali! \n\nNome: ${n}\nWhatsApp: ${t}${e?'\nEmail: '+e:''}\nProduto: ${tp}${m?'\n\n'+m:''}\n\nAguardo seu retorno!`);
  window.open('https://wa.me/5511919674733?text='+txt,'_blank');
  const toast=document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),3000);
}

// nav active
const secs=document.querySelectorAll('section[id]');
const links=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(scrollY>=s.offsetTop-80)cur=s.id});
  links.forEach(a=>{
    const active=a.getAttribute('href')==='#'+cur;
    a.style.color=active?'var(--rosa)':'';
  });
});
</script>
<script id="ano-script">
  document.getElementById("ano").textContent = new Date().getFullYear();
</script>
<script>
  const telInput = document.getElementById("f-tel");

  telInput.addEventListener("input", function(e) {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    } else {
      valor = valor.replace(/^(\d*)$/, "($1");
    }

    e.target.value = valor;
  });
</script>
