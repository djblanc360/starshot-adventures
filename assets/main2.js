var n=Object.defineProperty;var o=(l,s,e)=>s in l?n(l,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[s]=e;var d=(l,s,e)=>o(l,typeof s!="symbol"?s+"":s,e);console.log("in test");class r extends HTMLElement{constructor(){super()}connectedCallback(){this.querySelector("header");const s=this.querySelectorAll("nav ul li"),e=this.querySelector("menu"),t=this.querySelectorAll(".menu");e&&(s.forEach((i,c)=>{i.addEventListener("mouseenter",()=>{i.classList.add("active"),this.showMenu(c,e,t)})}),s.forEach((i,c)=>{i.addEventListener("click",()=>{i.classList.add("active"),this.showMenu(c,e,t)})}),this.addEventListener("mouseleave",()=>{this.hideMenu(e,t)}))}showMenu(s,e,t){e.classList.add("active"),console.log("showMenu",s),e.classList.remove("opacity-0","scale-y-0"),t.forEach((i,c)=>{c===s?i.classList.remove("hidden"):i.classList.add("hidden")})}hideMenu(s,e){s.classList.remove("active"),s.classList.add("opacity-0","scale-y-0"),e.forEach(t=>{t.classList.add("hidden")})}}customElements.define("mega-menu",r);class a extends HTMLElement{constructor(){super();d(this,"currentSlide");d(this,"slides");this.currentSlide=0,this.slides=this.querySelectorAll(".quiz-slide")}connectedCallback(){this.showSlide(this.currentSlide),this.addNextButtonListeners()}showSlide(e){console.log("showSlide",e),this.slides.forEach((t,i)=>{t.classList.toggle("hidden",i!==e)})}goToNextSlide(){this.currentSlide<this.slides.length-1&&(this.currentSlide++,this.showSlide(this.currentSlide))}addNextButtonListeners(){this.addEventListener("click",e=>{e.target.hasAttribute("next")&&this.goToNextSlide()})}goToPreviousSlide(){this.currentSlide>0&&(this.currentSlide--,this.showSlide(this.currentSlide))}}customElements.define("product-quiz",a);
