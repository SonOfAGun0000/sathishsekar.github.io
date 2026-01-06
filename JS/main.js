// IntersectionObserver reveal animation JS
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
// End of IntersectionObserver reveal animation JS
//-------------------------------------------------------------------------------------------

// Page-loader/link interceptor
// The Page Transition Loader System JS
document.querySelectorAll('a[href]').forEach(link=>{
  const href = link.getAttribute('href');
  if(!href) return;
  // Skip anchors, mailto, tel, external links, and javascript:
  if(href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
  const isInternal = link.hostname === location.hostname;
  if(isInternal){
    link.addEventListener('click', e=>{
      if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return; // allow new tab / modifiers
      e.preventDefault();
      document.getElementById('loader').classList.add('active');
      setTimeout(()=> location.href = link.href, 300);
    });
  }
});
// End of Page-loader/link interceptor
//-------------------------------------------------------------------------------------------

// Popup form JS
function openPopup(service){
  document.getElementById("serviceName").innerText = service;
  document.getElementById("waLink").href =
   "https://wa.me/918807678247?text=Hi Sathish, I’m interested in your " + encodeURIComponent(service) + " service.";
  document.getElementById("popup").style.display="flex";
}
document.getElementById("popup").addEventListener("click",e=>{
  if(e.target.id==="popup") e.target.style.display="none";
});
// End of Popup form JS
//-------------------------------------------------------------------------------------------

