const header=document.querySelector(".site-header");
const nav=document.querySelector(".nav");
const menu=document.querySelector(".menu-button");
function headerState(){header.classList.toggle("scrolled",scrollY>24)}
headerState();addEventListener("scroll",headerState,{passive:true});
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false")}));
const items=document.querySelectorAll(".reveal");
if(matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window)){items.forEach(x=>x.classList.add("visible"))}
else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.1});items.forEach(x=>io.observe(x))}
document.getElementById("year").textContent=new Date().getFullYear();