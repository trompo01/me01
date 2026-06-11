// 3D tilt + texto alternante
document.addEventListener('DOMContentLoaded',()=>{
  const tiltEls=document.querySelectorAll('.tilt');
  const isTouch=('ontouchstart' in window);
  if(!isTouch){
    tiltEls.forEach(el=>{
      el.addEventListener('mousemove',e=>{
        const r=el.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-0.5;
        const y=(e.clientY-r.top)/r.height-0.5;
        el.style.transform=`perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateZ(0)`;
      });
      el.addEventListener('mouseleave',()=>{el.style.transform='perspective(800px) rotateY(0) rotateX(0)'});
    });
  }
  // alternar palabras
  document.querySelectorAll('[data-words]').forEach(span=>{
    const words=span.dataset.words.split('|');
    let i=0;
    const tick=()=>{span.textContent=words[i%words.length];i++};
    tick();
    setInterval(tick,1800);
  });
});
