// Your code goes here
/*mouseover */
const name = document.querySelector(".main-navigation h1")
name.addEventListener("mouseover", function(event){
    event.target.style.color = "red";

    setTimeout(function(){
event.target.style.color = "";
    },300)
},false);

 /*mouseenter & mouseleave*/ 
const navi = document.querySelector(".main-navigation nav")
navi.addEventListener("mouseenter", event => {
    navi.style.border = "2px dashed orange";

});
navi.addEventListener("mouseleave", event =>{
    navi.style.border = "1px solid black";
})

 /*wheel*/ 
let scale = 1;
const imagesz = document.querySelector(".content-section img")
imagesz.addEventListener("wheel", zoom => {
    imagesz.onwheel = zoom;
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    imagesz.style.transform = `scale(${scale})`
})

 /*resize*/ 
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');
window.addEventListener('resize', reportWindowSize =>{
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
     window.onresize = reportWindowSize;
  });
  
/*DOMContentLoaded*/
  const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', () => {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', () => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', () => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});


  /*Load*/ 
  const log2 = document.querySelector('.event-log-contents');
  const reload2 = document.querySelector('#reload2');
  
  reload2.addEventListener('click', () => {
    log2.textContent ='';
    window.setTimeout(() => {
        window.location.reload2(true);
    }, 200);
  });
  
  window.addEventListener('load', () => {
      log2.textContent = log2.textContent + 'load\n';
  });
  
  document.addEventListener('readystatechange', () => {
      log2.textContent = log2.textContent + `readystate: ${document.readyState}\n`;
  });
  
  document.addEventListener('DOMContentLoaded', () => {
      log2.textContent = log2.textContent + `DOMContentLoaded\n`;
  });

  /*focus*/
  const password = document.querySelector(".img-content img");

  password.addEventListener('focus', (event) => {
    event.target.style.transform = "rotate(11deg)";    
  });
  
  password.addEventListener('blur', (event) => {
    event.target.style.transform = '';    
  });

  /*focusin */ 
  const form = document.querySelector(".img-content img");

  form.addEventListener('focusin', (event) => {
    event.target.style.transform = "rotate(11deg)";    
  });
  
  form.addEventListener('focusout', (event) => {
    event.target.style.transform = '';    
  });

  /*select */
  
    const log3 = document.querySelector(".destination p");
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log3.textContent = `You selected: ${selection}`;
  
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);