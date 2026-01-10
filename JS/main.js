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
// Fix infinite loader on browser back button (bfcache)
window.addEventListener("pageshow", function(event){
  if(event.persisted){
    const loader = document.getElementById("loader");
    if(loader) loader.classList.remove("active");
  }
});

// End of Page-loader/link interceptor
//-------------------------------------------------------------------------------------------

// Popup form JS (SAFE VERSION)
function openPopup(service){
  const popup = document.getElementById("popup");
  const serviceName = document.getElementById("serviceName");
  const waLink = document.getElementById("waLink");

  if(!popup || !serviceName || !waLink) return;

  serviceName.innerText = service;
  waLink.href =
   "https://wa.me/918807678247?text=Hi Sathish, I’m interested in your " + encodeURIComponent(service) + " service.";
  popup.style.display="flex";
}

const popup = document.getElementById("popup");
if(popup){
  popup.addEventListener("click", e=>{
    if(e.target.id==="popup") popup.style.display="none";
  });
}

// End of Popup form JS
//-------------------------------------------------------------------------------------------


// Resume download JS
function forceDownload(){
  const a = document.createElement("a");
  a.href = "files/Sathish-Sekar-Resume.pdf";
  a.setAttribute("download","Sathish-Sekar-Resume.pdf");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
// End of Resume download JS
//-------------------------------------------------------------------------------------------